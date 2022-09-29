import './App.css';
import NavBar from './components/navbar';
import Home from "./pages/HomePage/Home";
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <div>
        <NavBar />
        <Home />
      <div id='experience'>
        <Experience />
      </div>
    </div>
    
  );
}

export default App;
