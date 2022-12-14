import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
