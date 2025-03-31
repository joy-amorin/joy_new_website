# Mi Web Personal

Este repositorio contiene el código fuente de mi web personal, donde comparto mis proyectos musicales, blogs y recursos como e-books.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones web.
- **Tailwind CSS**: Utilizado para el diseño y estilo de la interfaz.
- **Contentful**: CMS sin cabeza (Headless CMS) para la gestión de contenido dinámico como blogs y publicaciones.
- **Cloudflare**: Utilizado para servir los e-books a través de la CDN para mejorar la velocidad y distribución global.
- **React**: Librería principal para la construcción de la interfaz de usuario.
- **ShadCN/UI**: Implementado para el uso de componentes UI predefinidos.
  
## Características

- **Blogs Dinámicos**: Los artículos de blog se gestionan a través de Contentful, lo que permite actualizaciones dinámicas sin tocar el código.
- **E-books**: Servidos de manera eficiente mediante la CDN de Cloudflare para garantizar una descarga rápida y fiable.
- **Interfaz Responsive**: Desarrollada con Tailwind CSS, la web es completamente responsive y adaptable a cualquier dispositivo.
  
## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2- Instalar dependencias:
npm install

3- Crear un archivo .env.local y añadir tus credenciales de Contentful y otras variables de entorno:

NEXT_PUBLIC_CONTENTFUL_SPACE_ID=tu_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=tu_access_token

4-Iniciar el servidor de desarrollo:
npm run dev
Visitar la web en http://localhost:3000.

## Configuración de Cloudflare con R2

Cloudflare R2 se utiliza para almacenar y servir los e-books de manera eficiente. A continuación, se detallan los pasos básicos para configurar R2 y crear un bucket:

### 1. Crear un Bucket en Cloudflare R2

- Inicia sesión en tu cuenta de [Cloudflare](https://www.cloudflare.com).
- Dirígete a la sección **R2** desde el panel de control.
- Haz clic en **Create Bucket**.
- Asigna un nombre único al bucket (ejemplo: `ebooks-storage`) y configura las opciones según tus necesidades.
  
### 2. Subir los E-books al Bucket

- Una vez creado el bucket, accede a él desde el panel de R2.
- Utiliza la opción **Upload** para subir los archivos e-book (.pdf, .epub, etc.) al bucket.
- Asegúrate de que los archivos sean accesibles para el público o estén protegidos, según lo que prefieras.

### 3. Obtener el URL de los Archivos

- Una vez que los archivos estén cargados, copia el URL público proporcionado para cada archivo.
- Utiliza estos enlaces para servir los e-books en tu web o para distribuirlos.

