import './App.css';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Infos from './Components/Infos';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import WaveTop from './Components/WaveTop';
import WaveBottom from './Components/WaveBottom';
import Technologies from './Components/Technologies';


function App() {
  return (
    <div className="App bg-bg-dev bg-no-repeat bg-fixed bg-cover">
        <NavBar />
        <Infos />
        <Projects />
        <Technologies />
        <WaveBottom />
        <Socials />
        <WaveTop />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;
