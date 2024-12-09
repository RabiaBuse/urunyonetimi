# Node.js Backend Uygulaması

Bu proje, Node.js kullanarak MongoDB Atlas veritabanı ile etkileşimde bulunan bir backend uygulamasıdır. Başlangıç olarak, ürün ekleme ve silme işlemi gerçekleştirildi. Uygulama, ürünlerin MongoDB Atlas'a eklenmesini ve silinmesini sayfa üzerinde görüntülenmesini sağlar.

## Proje Özeti

Bu projede, aşağıdaki temel işlemler yapılmaktadır:
- **Ürün Ekleme**: Kullanıcı, ürün adı, fiyatı ve resmini girerek yeni ürün ekler.
- **Ürün Listeleme**: Ekleme işlemi tamamlandıktan sonra, MongoDB Atlas'a kaydedilen ürünler sayfa üzerinde görüntülenir.
- **Ürün Silme**: Kullanıcı, ürün adı, fiyatı ve resmini siler ve günceller.

## Akış

1. **Ürün Ekleme**:
   - Ürün adı, fiyatı ve resmi girildikten sonra "Ürün Ekle" butonuna basılır.
   - Ürün başarıyla eklendikten sonra, kullanıcıya JavaScript alert mesajı gösterilir: "Ürün başarıyla eklendi!"
   - Sayfa yenilenir ve MongoDB Atlas'a eklenmiş olan ürün sayfada görünür.

2. **Ürün Silme**:
   - Listelenmiş Ürünlerin yanıda silme butonuna tıklandığı an ürün, listeden kaldırılır .
   - Ürün başarıyla silindikten sonra, kullanıcıya JavaScript alert mesajı gösterilir: "Ürün başarıyla silindi!"
   - Sayfa yenilenir ve MongoDB Atlas'a silinmiş olan ürün sayfadan kaybolur.

3. **MongoDB Atlas'a Veri Ekleme**:
   - Ürünler MongoDB Atlas üzerindeki **Collection**'a eklenir. Bu işlem, backend tarafında bir API çağrısı ile yapılmaktadır.

4. **MongoDB Atlas'a Veri silme**:
   - Ürünler MongoDB Atlas üzerindeki **Collection**'a silinir. Bu işlem, backend tarafında bir API çağrısı ile yapılmaktadır.

## İşleyiş Adımları

1. **Ürün Ekleme Formu**:
   - Ürün adı (`product_name`), ürün fiyatı (`product_price`) ve ürün resmi (`product_image`) bilgileri girilir.
   - Formdan sonra, bu bilgiler **MongoDB Atlas**'a gönderilir ve kaydedilir.


## Kullanım

1. **Proje Dosyalarını İndirme**:
   - Projeyi bilgisayarınıza indirip çalıştırabilirsiniz..
   
   ``````bash
   git clone https://github.com/RabiaBuse/RabiaBuse
