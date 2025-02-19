import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-primary">¡Bienvenido a mi web! 🚀</h1>
      </div>
    </div>
  );
}
