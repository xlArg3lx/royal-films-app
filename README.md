# royal-films-app

Pasos de instalación:
1. clonar el repositorio en su equipo de manera local ejecuntando el comando "git clone https://github.com/xlArg3lx/royal-films-app.git"
2. Una vez hayamos clonado el repositorio dentro de la carpeta royal-films-app\Frontend\royal-films-app ejecutamos el comando "npm install"
3. Una vez hayamos clonado el repositorio dentro de la carpeta royal-films-app\Backend\royal-fimls-back ejecutamos el comando "composer install" (composer es un manejador de paquetes para para php utilizado esta vez en laravel, si no lo tienes puedes descargarlo aquí https://getcomposer.org/download/)
4. Luego de la ejecución de "composer install" debemos configurar el archivo .env ubicado dentro de la carpeta royal-films-app\Backend\royal-fimls-back, en nuestro manejador de base de datos creamos una DB con nombre royal_films_back
5. Dentro de la carpeta royal-films-app\Backend\royal-fimls-back ejecutamos los comandos "php artisan key:generate y luego "php artisan migrate".
6. Para finalizar ejecutamos en las carpetas de royal-films-app\Frontend\royal-films-app el comando "npm star" y en la carpeta de nuestro backend royal-films-app\Backend\royal-fimls-back el comando "php artisan serve"
