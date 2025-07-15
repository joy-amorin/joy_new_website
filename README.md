# Joy Amorin

This repository contains the source code for my personal website, where I share my musical projects, blogs, and resources such as e-books.

## Technologies Used
- **Next.js**: React framework for building web applications.
- **Tailwind CSS**: Used for styling and designing the interface.
- **Contentful**: Headless CMS for managing dynamic content like blogs and posts.
- **Cloudflare**: Used to serve e-books through the CDN to improve speed and global distribution.
- **React**: Main library for building the user interface.
- **ShadCN/UI**: Implemented to use predefined UI components.
  
## Features
- **Dynamic Blogs**: Blog articles are managed through Contentful, allowing dynamic updates without code changes.
- **E-books**: Efficiently served via Cloudflare CDN to ensure fast and reliable downloads.
- **Responsive Interface**: Built with Tailwind CSS, the website is fully responsive and adapts to any device.
  
## Installatiom

1. Clone th repository:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Install dependencies:
npm install

3- Create a file .env.localfile and add your Contentful credentials and other environment variables:

NEXT_PUBLIC_CONTENTFUL_SPACE_ID=tu_space_id

NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=tu_access_token


4-Start the development server:

npm run dev


Visit the site at http://localhost:3000.

## Cloudflare R2 Configuration

Cloudflare R2 is used to efficiently store and serve the e-books. Below are the basic steps to configure R2 and create a bucket:

### 1. Create a Bucket in Cloudflare R2

- Log in to your Cloudflare account.
- Navigate to the R2 section from the dashboard.
- Click on Create Bucket.
- Assign a unique name to the bucket (e.g., ebooks-storage) and configure the options as needed.
  
### 2.Upload E-books to the Bucket

- Once the bucket is created, access it from the R2 panel.
- Use the Upload option to add your e-book files (.pdf, .epub, etc.) to the bucket.
- Ensure files are either publicly accessible or protected, according to your preference.

### 3. Obtain the File URLs

- After uploading, copy the public URL provided for each file.
- Use these links to serve the e-books on your website or distribute them.

