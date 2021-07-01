import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router , Route} from 'react-router-dom' ;

//content
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './components/Contact';

function App() {
  return (
    
    <Router>
      
      <div className="App">  
          <NavBar />
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/edution">
            <Education />
          </Route>

          <Route exact path="/skills">
            <Skills />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

      </div>
    
    </Router>


  );
}

export default App;
