# IonicProject

KURULUM

Projemi çalıştırmak için sırasıyla şu komutları çalıştırdım ve başarıyla çalıştı.

git clone -b master https://github.com/SariPinar/IonicProject.git

cd IonicProject/

ionic serve -> bu komuttan sonra bir hata aldım (An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json')

sudo npm install --save-dev @angular-devkit/build-angular 

sudo ionic serve 
