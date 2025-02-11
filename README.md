SaboresDeOro

Descripción

SaboresDeOro es una aplicación desarrollada en Node.js que permite a los usuarios explorar recetas, gestionar ingredientes y descubrir nuevos sabores.

Tecnologías utilizadas

Node.js

Express

MongoDB (o cualquier otra base de datos que uses)

EJS / Handlebars / React (si usas alguna tecnología para el frontend)

TailwindCSS / Bootstrap (si aplicas estilos con estos frameworks)

Instalación

Clona este repositorio:

git clone https://github.com/tuusuario/SaboresDeOro.git

Ingresa al directorio del proyecto:

cd SaboresDeOro

Instala las dependencias:

npm install

Uso

Configura las variables de entorno en un archivo .env:

PORT=3000
DB_URI=mongodb://localhost:27017/saboresdeoro
SECRET_KEY=tu_clave_secreta

Inicia el servidor:

npm start

Abre tu navegador y accede a http://localhost:3000

Endpoints principales

Método

Ruta

Descripción

GET

/

Página principal

GET

/recetas

Listado de recetas

POST

/recetas

Agregar una nueva receta

GET

/recetas/:id

Obtener detalles de una receta

PUT

/recetas/:id

Actualizar una receta

DELETE

/recetas/:id

Eliminar una receta

Contribuciones

¡Las contribuciones son bienvenidas! Para colaborar:

Realiza un fork del repositorio.

Crea una rama con tu nueva funcionalidad (git checkout -b nueva-funcionalidad).

Realiza los cambios y haz un commit (git commit -m 'Añadir nueva funcionalidad').

Envía un pull request.

Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Autor

Leonardo - GitHub