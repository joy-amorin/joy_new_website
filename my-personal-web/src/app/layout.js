import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Joy Amorin",
  description: "Sitio oficial de Joy Amorin: proyectos musicales, blog, recursos gratuitos y tienda online.",
  keywords: "Joy Amorin, música, tienda online, proyectos musicales, blog, recursos musicales",
  author: "Joy Amorin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joyamorin.vercel.app" />
        <meta property="og:image" content="/joy-home-2.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/joy-home-2.jpg" />
      </Head>

      <body className="antialiased bg-background">
        {children}
      </body>
    </html>
  );
}
