# IonicProject
# 170202049 - Pınar SARI - Stok takip uygulaması

KURULUM

Projemi çalıştırmak için sırasıyla şu komutları çalıştırdım ve başarıyla çalıştı.

git clone -b master https://github.com/SariPinar/IonicProject.git

cd IonicProject/

npm install --save-dev @angular-devkit/build-angular 

ionic serve 

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
## Firebase altyapısı kullanılarak giriş yapma işlemi bu sayfada gerçekleştirilmektedir.

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil1.png)


Kayıt olma ekranı:
## Firebase altyapısı kullanılarak kayıt olma işlemi gerçekleştirilmektedir.

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil6.png)

Sifre yenileme ekranı:
## Bu sayfada kullanıcılar mail adresi ile şifre yenilemektedir.

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil5.png)

Örnek bir stok ekleme ekranı:
## Bu sayfada kullanıcılar firestore üzerinde stoklarını eklemektedir.

![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil3.png)

Eklenen stok gösterimi ekranı:

## Bu sayfada kullanıcılar firestore üzerinden anlık olarak stoklarını çekmekte ve listelemektedir.
![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil3.png)

Eklenen stok güncelleme gösterim ekranı:
## Kullanıcılar firestore üzerinden yaptığı kayıtları anlık olarak güncelleyebilmektedir.
![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobil7.png)

Genel ekran:
## Kullanıcıya sunulan genel arayüz bu şekildedir.
![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/mobilSonn.png)



VScode ekranı:
## Projemdeki dosyaların görünümü bu şekildedir.


![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/vscode.png)

Firebase config ekranı:
## Uygulamamı firebase ile bağlamak ve özelleştirmek için oluşturduğum config dosyası ve kodları aşağıdaki şekildedir.
![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/firebaseConfig.png)

App-routing ekranı:
## Uygulamanın sayfa geçişlerini sağladığım routing kodlarının ekran görüntüsü.
![a](https://github.com/SariPinar/IonicProject/blob/master/mobil/app-routing.png)




