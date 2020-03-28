Uygulamayı çalıştırmak için ;

1. npm install
2. npm install json-server
3. npm install @material-ui/core
4. json-server --watch db.json
5. npm start

Proje: Araba Savaşı Oyunu
Projenin amaçları: Araç ile savaşırken her araçta yakıt, mühimmat miktarını ve aracın hasar durumunu gösteren bir ekran bulunmaktadır Projenin amacı bu ekranları veritabanındaki bilgiler ile otomatik generate etmek
Projenin isterleri:
+1- Veri tabanına aracın mühimmat ve yakıt bilgisi değiştikçe yazılmaktadır. (Bilgi)
+2- İstemci tarafından rest servisten çektiğiniz yakıt seviyesi bilgisinin ekranda gösterilmesi gerekmektedir.
3- İstemci tarafından rest servisten çektiğiniz mühimmat seviyesi bilgisinin ekranda gösterilmesi gerekmektedir.
4- İstemci tarafından rest servisten çektiğiniz hasar bilgisinin ekranda gösterilmesi gerekmektedir.
5- Yakıt birimi lt olacaktır.
6- Mühimmat birimi adet olacaktır.
7- Hasar durumu birimi yüzde olacaktır.
Tasarım Kısıtları
1- Yakıt, mühimmat miktarını ve aracın hasar durumunu nu gösteren ekranları tek sınıf olacaktır ve gelen bilgiye göre otomatik oluşacaktır.
2- Bilgiler rest servisten alınacaktır.
3- Kullanıcı arayüzü web ve react olacaktır.
4- GUI koponetleri material-UI olacaktır.
Not: web service implementasyonu dummy bir implementasyon (mock) olabilir. Fakat çalışıyor olması bekleniyor. Arkasında gerçek bir veri tabanı olması gerekmez.
