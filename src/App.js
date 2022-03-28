import Header from './Header/Header';
import Nav from './Header/Nav';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import ComponentHold from './component/ComponentHold';


function App() {
  return (
    <>
    {/* <Header/> */}
  
    
    <Router>
        <Nav/>
      <Routes>
        <Route path="/" element={<ComponentHold/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  
    </>
  
  );
}

export default App;
