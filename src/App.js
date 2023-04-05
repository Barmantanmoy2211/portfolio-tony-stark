import { useState } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bd-white dark:bg-gray-900 text-gray-900 dark:text-white">

          <Hero />
          <Services />
          <Portfolio />
          <Testimonial />
          <Contect />
          <Footer />
      </main>
    </div>
  );
}

export default App;
