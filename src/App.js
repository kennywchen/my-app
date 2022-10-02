import './App.css';
import NavBar from './components/navbar/navbar';
import Home from "./pages/HomePage/Home";
import Experience from "./pages/Experience/Experience";
import Projects from './pages/Projects/projects';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <div>
        <NavBar />
        <Home />
      <div id='experience'>
        <Experience />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contacts'>
        <Contact />
      </div>
    </div>
    
  );
}

export default App;
