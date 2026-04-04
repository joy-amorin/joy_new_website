const Footer = () => {
  return (
    <footer id="contacto" className="relative bg-black text-white overflow-hidden py-20 px-6 md:px-12">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="mb-12 text-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400">Contacto</span>
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Hablemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">:)</span>
          </h2>
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto relative">

          {/* Decorative Frame */}
          <div className="absolute -inset-3 border-l border-t border-purple-500/20"></div>
          <div className="absolute -inset-3 border-r border-b border-fuchsia-500/20 translate-x-3 translate-y-3"></div>

          {/* Card */}
          <div className="relative bg-gray-900/50 p-8 md:p-10 flex flex-col gap-6">

            {/* Instagram */}
            <a
              href="https://instagram.com/joy_amorin_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 hover:text-purple-400 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors duration-300">
                <img src="/ig-icon.png" alt="Instagram" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-1">Instagram</p>
                <p className="text-base text-gray-300 group-hover:text-purple-400 transition-colors duration-300">@joy_amorin_</p>
              </div>
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            </div>

            {/* Email */}
            <a
              href="mailto:joy.amorin.music@gmail.com"
              className="group flex items-center gap-5 hover:text-purple-400 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors duration-300">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-1">Email</p>
                <p className="text-base text-gray-300 group-hover:text-purple-400 transition-colors duration-300">joy.amorin.music@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 text-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Joy Amorin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;