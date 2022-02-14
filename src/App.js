import './App.css';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Infos from './Components/Infos';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Socials from './Components/Socials';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Infos />
        <Projects />
        <Socials />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;
