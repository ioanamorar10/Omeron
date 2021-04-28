Avem nevoie de: 
    Nodejs:
    https://nodejs.org/en/download/current/

    Php:
    https://windows.php.net/download - varianta thread safe

    Angular:
    npm install -g @angular/cli

Pentru conexiunea la baza de date vom descarca urmatorul driver:
1. Se descarca pachetul de pe site-ul celor de la PECL, https://pecl.php.net/package/mongodb si se alege ultima versiunea stabila.
2. Alegeti versiunea Thread safe.
3. Extrageti fisierele descarcate si adaugati-le in directorul php ext.
4. Se deschide fisierul php.ini si se adauga linia: extension=php_mongo.dll apoi se salveaza.

Backend:
port: http://localhost:8000
comanda de rulare: php artisan serve

Frontend:
port: http://localhost:4200
pentru inizializarea pachetelor: npm --save install
comanda de rulare: ng serve


