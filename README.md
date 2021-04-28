Avem nevoie de: 
1. Nodejs: https://nodejs.org/en/download/current/
2. Php: https://windows.php.net/download - varianta thread safe
<<<<<<< HEAD
3. Angular.
4. MongoDB.

##Frontend:
Port: http://localhost:4200 <br/>
`cd frontend` <br/>
`npm --save install` - pentru inizializarea pachetelor <br>
`npm run start` - comanda de rulare

##Backend:
=======
3. Angular: npm install -g @angular/cli
>>>>>>> 39e181c039eb1e2448bf455cea74987ba0ac8a31

Pentru conexiunea la baza de date vom descarca urmatorul driver:
1. Se alege acest pachet de pe website-ul PECL. https://pecl.php.net/package/mongodb. Se alege ultima versiune stabila DLL accesand link-ul DLL.
2. Alegeti versiunea Thread safe.
3. Extrageti fisierul descarcat si adaugati-l in directorul php\ext.
4. Se deschide fisierul php.ini si se adauga linia: extension=php_mongo.dll apoi se salveaza.


Port: http://localhost:8000 <br/>
Comanda de rulare: `php artisan serve`