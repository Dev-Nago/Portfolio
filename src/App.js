import "./App.css";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Infos from "./Components/Infos";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Socials from "./Components/Socials";
import Technologies from "./Components/Technologies";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="App bg-gradient-to-br from-white to-orange-400 bg-no-repeat bg-fixed bg-cover overflow-hidden">
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Infos />
      <Projects isDarkMode={isDarkMode} />
      <Technologies isDarkMode={isDarkMode} />
      <Socials isDarkMode={isDarkMode} />
      <ContactForm />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
