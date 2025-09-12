import Navbar from "./components/layout/Navbar";
import JoyHome from "./components/home/JoyHome";
import About from "./components/home/About"
import Projects from "./components/projects/Projects"
import Blog from "./components/blog/Blog"
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <JoyHome />
      <About />
      <Projects />
      <Blog />
      <Footer />
      
    </div>
  );
}
