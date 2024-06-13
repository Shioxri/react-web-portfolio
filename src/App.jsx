import { Projects } from "./components/Projects/Projects";
import styles from "./App.module.css"
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar"
import { Contact } from "./components/Contact/Contact";

function App() {
  return ( <div className={styles.App}>
   <NavBar />
   <Hero />
   <About />
   <Experience/>
   <Projects/>
   <Contact/>
   </div>
  );
}

export default App
