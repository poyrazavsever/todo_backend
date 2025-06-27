# NestJS Todo Uygulaması - Öğrenme Projesi

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 📚 Proje Hakkında

Bu proje, NestJS framework'ünü öğrenme sürecimin bir parçası olarak geliştirdiğim bir Todo (Yapılacaklar Listesi) uygulamasıdır. Modern backend geliştirme pratiklerini ve NestJS'in temel kavramlarını uygulamalı olarak öğrenmek amacıyla oluşturulmuştur.

## 🎯 Öğrenme Hedefleri

- [x] NestJS proje yapısını anlama
- [x] Controller ve Service katmanlarının implementasyonu
- [x] MongoDB ve Mongoose entegrasyonu
- [x] DTO (Data Transfer Object) kullanımı
- [x] Input validasyonu ve error handling
- [x] REST API tasarım prensipleri
- [ ] Authentication ve Authorization
- [ ] Unit ve E2E testlerin yazılması

## 🛠️ Teknolojiler ve Araçlar

- NestJS - Modern Node.js framework'ü
- TypeScript - Tip güvenli programlama dili
- MongoDB - NoSQL veritabanı
- Mongoose - MongoDB ODM (Object Document Mapping)
- class-validator - Input validasyonu için
- class-transformer - Nesne dönüşümleri için

## 📋 Özellikler

### Todo İşlemleri
- ✅ Todo oluşturma
- ✅ Todoları listeleme
- ✅ Todo detayı görüntüleme
- ✅ Todo güncelleme
- ✅ Todo silme
- ✅ Todo durumu değiştirme

### Validasyonlar
- ✅ Başlık minimum 6 karakter
- ✅ İçerik 16-256 karakter arası
- ✅ Kategori zorunlu alan
- ✅ MongoDB ID doğrulama

## 🚀 Kurulum ve Çalıştırma

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 📖 API Dokümantasyonu

### Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|-----------|
| GET    | /todo    | Tüm todoları listeler |
| POST   | /todo    | Yeni todo oluşturur |
| GET    | /todo/:id| Belirli bir todoyu getirir |
| PUT    | /todo/:id| Bir todoyu günceller |
| DELETE | /todo/:id| Bir todoyu siler |
| PATCH  | /todo/:id| Todo durumunu değiştirir |

### Örnek İstekler

#### Todo Oluşturma
```json
POST /todo
{
  "userId": "64a123b567890123b5678901",
  "title": "NestJS Çalış",
  "content": "NestJS dökümantasyonunu oku ve örnekleri incele",
  "category": "eğitim"
}
```

## 📝 Not

Bu proje öğrenme amaçlı olduğu için, her türlü geri bildirim ve öneriye açıktır. Issues bölümünden önerilerinizi iletebilir veya pull request gönderebilirsiniz.

## 📚 Faydalı Kaynaklar

- [NestJS Resmi Dokümantasyon](https://docs.nestjs.com)
- [MongoDB Dokümantasyon](https://docs.mongodb.com)
- [TypeScript Dokümantasyon](https://www.typescriptlang.org/docs)
- [Mongoose Dokümantasyon](https://mongoosejs.com/docs/guide.html)
