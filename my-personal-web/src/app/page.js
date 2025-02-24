import Navbar from "./components/Navbar";
import JoyHome from "./components/JoyHome";
import About from "./components/About"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <JoyHome />
      <About />
      <Projects />
      
    </div>
  );
}
