import './App.css';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Infos from './Components/Infos';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import WaveTop from './Components/WaveTop';
import Technologies from './Components/Technologies';


function App() {
  return (
    <div className="App bg-gradient-to-br from-white to-orange-400 bg-no-repeat bg-fixed bg-cover overflow-hidden">
        <NavBar />
        <Infos />
        <Projects />
        <Technologies />
        <Socials />
        <WaveTop />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;
