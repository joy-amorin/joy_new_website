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
   git clone https://github.com/username/repository-name.git

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

## Mercado Pago Integration

Mercado Pago is integrated to allow secure payments for digital products. The setup supports both sandbox (test) and production modes.
1. Backend Flow
The backend uses MP_ACCESS_TOKEN (server-side) to create payment preferences.
Example:
   ```bash
   init_point: response.init_point // Production checkout link

Webhook notifications are configured with:
    ```bash
    notification_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/notifications

2. Frontend Flow
The frontend uses NEXT_PUBLIC_MP_PUBLIC_KEY to initialize checkout.
Users complete payment on Mercado Pago’s hosted checkout page.
After payment, users are redirected back to:
   ```bash
   /tienda/success?slug=product-slug

At the same time, the webhook updates the backend with payment status to unlock the download.

3. Sandbox vs Production
- Sandbox: use test credentials and cards with sandbox_init_point.
- Production: use real credentials with init_point for real payments.

### Deployment with Vercel

1. Push changes to GitHub.
2. Add environment variables in Vercel Dashboard → Project Settings → Environment Variables.
3. Deploy production build:

   ```bash
   vercel --prod
