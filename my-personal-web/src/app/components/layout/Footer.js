
const Footer = () => {
    return (
      <footer id="contacto" className="bg-background text-foreground py-8">
        <div className="container mx-auto text-center">
        <p className="mb-4 text-3xl font-body">Contacto</p>
          <div className="flex justify-center space-x-8 mb-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/joy_amorin_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Instagram"
            >
              <img src="/ig-icon.png" alt="Instagram" className="h-8 w-8" />
            </a>
  
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/johana-amorin-bb7992287/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <img src="/linkedin-icon.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
  
          {/* Email addres */}
          <p className="text-lg font-body">
            <a
              href="mailto:tu-email@example.com"
              className="hover:text-primary"
            >
              joy.amorin.music@gmail.com
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  