import Image from "next/image";
import Head from "next/head";

const SectionInicio = () => {
  const siteTitle = "Joy Amorin | Música Autodidacta, Proyectos y Tienda Online";
  const siteDescription = "Joy Amorin, músico autodidacta y creador de contenido musical. Explora proyectos musicales, recursos gratuitos, blog y tienda online de productos digitales y música.";
  const siteUrl = "https://joyamorin.vercel.app";
  const siteImage = `${siteUrl}/joy-home-2.jpg`; // imagen representativa de la web

  return (
    <>
      <Head>
        {/* SEO básico */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="Joy Amorin, música autodidacta, proyectos musicales, tienda de música, recursos gratuitos, blog musical" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
      </Head>

      <section className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Nombre "Joy Amorin" */}
          <div className="text-center md:text-left">
            <h1 className="text-7xl md:text-9xl font-logo">Joy</h1>
            <h2 className="text-5xl md:text-7xl font-logo">Amorin</h2>
          </div>

          {/* Foto */}
          <div className="flex justify-center md:block">
            <Image
              src="/joy-home-2.jpg"
              alt="Joy Amorin, músico autodidacta y creador de proyectos musicales"
              width={450}
              height={450}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionInicio;
