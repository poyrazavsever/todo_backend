import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { CreateRegisterInput } from './dto/register.input';
import { CreateLoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private configService: ConfigService,
  ) {}

  async register(createRegisterInput: CreateRegisterInput) {
    const existingUser = await this.userModel.findOne({
      email: createRegisterInput.email,
    });
    if (existingUser) {
      throw new UnauthorizedException('Bu e-posta adresi zaten kayıtlı');
    }

    const hashedPassword = await bcrypt.hash(createRegisterInput.password, 10);
    const user = new this.userModel({
      email: createRegisterInput.email,
      password: hashedPassword,
      name: createRegisterInput.name,
    });

    await user.save();

    const token = this.generateToken(user._id.toString());
    return {
      token,
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }

  async login(createLoginInput: CreateLoginInput) {
    const user = await this.userModel.findOne({
      email: createLoginInput.email,
    });
    if (!user) {
      throw new UnauthorizedException('Kullanıcı bulunamadı');
    }

    const isPasswordValid = await bcrypt.compare(
      createLoginInput.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Geçersiz şifre, lütfen tekrar deneyin');
    }

    const token = this.generateToken(user._id.toString());
    return {
      token,
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }

  private generateToken(userId: string): string {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ userId }, jwtSecret, {
      expiresIn: '24h',
    });
  }
}
