
import Image from "next/image";

const SectionInicio = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Nombre "Joy Amorin" */}
        <div className="text-center md:text-left">
          <h1 className="text-7xl md:text-9xl font-logo">Joy</h1>
          <h1 className="text-5xl md:text-7xl font-logo">Amorin</h1>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:block">
          <Image
            src="/joy-home.jpg"
            alt="Joy Amorin"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionInicio;
