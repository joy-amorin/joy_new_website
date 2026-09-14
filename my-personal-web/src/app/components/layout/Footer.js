const Footer = () => {
  return (
    <footer
      id="contacto"
      className="relative bg-background text-foreground border-t border-border px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

          {/* Identity */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">
              Contacto
            </p>

            <h2 className="font-logo text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
              Joy
            </h2>

          </div>

          {/* Contact */}
          <div className="w-full max-w-md">

            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                Hablemos
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:joy.amorin.music@gmail.com"
                className="group flex items-center justify-between border-b border-border pb-4 transition-colors duration-300 hover:border-foreground"
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
                    Email
                  </p>
                  <p className="text-sm md:text-base">
                    joy.amorin.music@gmail.com
                  </p>
                </div>

                <span className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/joy_amorin_"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border pb-4 transition-colors duration-300 hover:border-foreground"
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
                    Instagram
                  </p>
                  <p className="text-sm md:text-base">
                    @joy_amorin_
                  </p>
                </div>

                <span className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Joy Amorin</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;