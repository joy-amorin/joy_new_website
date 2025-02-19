import Navbar from "./components/Navbar";
import JoyHome from "./components/JoyHome";
import About from "./components/About"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <JoyHome />
      <About />
      
    </div>
  );
}
