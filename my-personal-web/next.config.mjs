/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,  // segurar que Next.js sepa que se etá usando la carpeta `app/` dentro de `src/`
    },
  };
  
  export default nextConfig;
  