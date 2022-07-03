import Navbar from "./components/navigation";
import Hero from "./components/sections/hero";
import RefSections from "./components/sections/refSections";
import styles from "./app.module.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Hero />
        <RefSections />
      </div>
    </>
  );
};

export default App;
