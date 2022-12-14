import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Navbar />
    </div>
  );
}

export default App;
