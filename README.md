# 🚀 Proyecto App de Comercio con Node.js

Aplicación web desarrollada con Node.js y Express para la gestión de un comercio. Permite autenticación de usuarios, gestión de productos, órdenes y carritos. Integra monitoreo con Prometheus y Grafana, está contenida con Docker y lista para CI/CD con GitHub Actions.

## *IFTS 29*
##  Materia: Seminario de Actualizacion DevOps
- **Profesor: Javier Blanco**

## 📜 Integrantes
- **Ezequiel Rodolfo Garriga**
- **Carlos Fernando Maciel**
- **Cristian Gabriel Sivila**

## 🚀 Tecnologías utilizadas

### 🧠 Backend
- Node.js (JavaScript)
- Express.js – framework web
- Mongoose – ODM para MongoDB

### 🔐 Autenticación y Seguridad
- bcrypt / bcryptjs – hash de contraseñas
- jsonwebtoken – generación y validación de JWT
- passport – middleware de autenticación
  - passport-jwt – JWT strategy
  - passport-local – local strategy
- express-session – gestión de sesiones

### 🖼️ Vistas
- Pug – motor de plantillas

### 🔧 Utilidades
- dotenv – manejo de variables de entorno
- cookie-parser – manejo de cookies
- http-errors – gestión de errores HTTP
- morgan – logger de solicitudes
- debug – utilitario para debugging
- tar – manejo de archivos .tar

### 🧪 Testing
- Jest – pruebas unitarias
- Supertest – pruebas de endpoints

### 📦 Gestión de paquetes
- pnpm – gestor de paquetes

### 🐳 Contenedores y despliegue
- Docker
- Docker Compose
- GitHub Actions – CI/CD
- Render – despliegue automático

### 📊 Observabilidad y monitoreo
- prom-client – métricas custom en /metrics
- Prometheus – recolección de métricas
- Grafana – visualización de métricas

## 📁 Estructura del proyecto
```
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env
├── /routes
├── /controllers
├── /models
├── /services
├── /views
├── /tests
├── /config
│ ├── db.js
│ └── passport.js
└── /monitoring
└── prometheus.yml
```
## 📦 Ejecución del Proyecto
Para ejecutar el proyecto localmente, sigue los siguientes pasos:

1. **Clonar el Repositorio:**
   
   git clone https://github.com/EzeGar91/AppComercio.git
   cd api-rest-nodejs

2. **Instalar Dependencias:** Instala las dependencias necesarias ejecutando:

   pnpm install

3. **Configuración de Variables de Entorno:** Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno según sea necesario:

   PORT=3001
   MONGO_URI=// direccion local MongoDB Compass o de Atlas

4. **Iniciar el Servidor:** Para iniciar el servidor en modo desarrollo, ejecuta:

   pnpm run dev
   El servidor se ejecutará en http://localhost:3001

5. **Usar con Docker**

Construir y levantar los contenedores:
docker compose build
docker compose up -d

6. **Monitorieo con Grafana y Prometheus**

Acceder:
App: http://localhost:3001

Prometheus: http://localhost:9090

Grafana: http://localhost:3000

7. **Ejecutar Tests**

Para correr los tests:
```
pnpm test
```
Tambien se utiliza un entorno separado con variables definidas en .env.test.

8. **CI/CD con GitHub Actions**

Incluye un workflow que:
- Instala dependencias con pnpm
- Corre los tests automáticamente
- Puede construir y publicar la imagen Docker
- Soporta despliegue automatizado a Render u otros entornos

9. **Monitoreo con Grafana y Prometheus**

La app expone métricas en /metrics que pueden ser recolectadas por Prometheus. Luego, pueden visualizarse en dashboards de Grafana.

10. 🔗 **Despliegue en Render**

## Enlace del proyecto en RENDER

[https://appcomercio.onrender.com/auth/login](https://appcomercio.onrender.com/auth/login)

## Pipeline de ejecucion.

![image](https://github.com/user-attachments/assets/33d4397a-3b27-45a2-a543-0538a491de20)

![image](https://github.com/user-attachments/assets/a1dc0407-3194-4aa0-b542-fb536f6ae878)

## Conclusiones y Roles del equipo

Al inicio del trabajo práctico integrador, nos encontramos con varias dificultades, especialmente porque era la primera vez que aplicábamos muchas de las prácticas de DevOps de manera integral. Sin embargo, a medida que fuimos avanzando, logramos organizarnos y aprender en equipo, lo que nos permitió resolver los desafíos planteados.

Pudimos desarrollar una aplicación web conectada a una base de datos, gestionar el código con Git siguiendo una estructura clara de ramas, y contenerizar la app utilizando Docker y docker-compose. También implementamos pruebas automatizadas y configuramos una pipeline de CI/CD con GitHub Actions, que incluye el build de la aplicación, la ejecución de tests, la creación y publicación de la imagen Docker, y su despliegue automático en un entorno en la nube.

Como aspecto personal a mejorar nos quedo pendiente aplicar Ansible y Terraform para ganar mas experiencia aplicandolo a la practica. Gracias a este proyecto, no solo profundizamos nuestros conocimientos técnicos en herramientas como Docker, GitHub Actions y bases de datos, sino que también fortalecimos nuestra capacidad para trabajar colaborativamente y afrontar un flujo completo de desarrollo y despliegue de software.

FrontEnd Dev y Scrum Master -> Gabriel Sivila
BackEnd Dev y DevOps -> Fernando Maciel
QA Tester y DevOps-> Ezequiel Garriga
