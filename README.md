# IonicProject

KURULUM

Projemi çalıştırmak için sırasıyla şu komutları çalıştırdım ve başarıyla çalıştı.

git clone -b master https://github.com/SariPinar/IonicProject.git

cd IonicProject/

sudo npm install --save-dev @angular-devkit/build-angular 

sudo ionic serve 

PROJE TANITIMI
Stok takip projesi. 
Kullanıcılar için firebase kimlik doğrulaması bulunmaktadır.
Kayıt ol, giriş yap, şifremi unuttum işlemlerini yapabilmektedir. 
Kullanıcılar stokta bulunan ürünlerini isim, stok kodu, adet, alış fiyatı ve satış fiyatı olarakl kaydederler. Bu kayıtları silebilir ya da güncelleyebilir. Eklenen stoklar ve bilgileri firebase üzerinde firestoreda tutulmaktadır.

Proje oluşturulurken oluşturulan ve kullanılan "page"ler
- login
- sign-up
- password-reset
- services
- home

"home page" stok işlemlerini yaptığımız sayfadır.

"stock interface" oluşturulmuştur.
"auth.service" ve "firestore.service" service page altında oluşturulmuştur ve projenin service işlemleri burada yapılmıştır.

Login ekranı:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil1.png)


Kayıt olma ekranı:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil6.png)

Sifre yenileme ekranı:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil5.png)

Örnek bir stok ekleme ekranı:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil3.png)

Eklenen stok gösterimi ekranı:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil3.png)

Eklenen stok güncelleme gösterim ekranı:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil7.png)

Genel ekran:

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobilSonn.png)






