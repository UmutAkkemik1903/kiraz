Backend için;
    
backend dosya dizininde .env dosyası oluşturup exapmle dosyası gibi doldurun.

Sonrasında terminal ekranında:

    cd backend
    composer install
    php artisan key:generate
    php artisan migrate
    php artisan db:seed

Frontend için;

Terminal ekranında:

    npm install
    npm start