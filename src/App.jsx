import Navbar from "./components/navigation";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
