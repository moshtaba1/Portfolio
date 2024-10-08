import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero Section/HeroSection';
import ProjectSection from './components/Project Section/ProjectSection';
import ContactSection from './components/Contact Section/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
