import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import './App.scss'
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOPen]=useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOPen={setMenuOPen}/>
      <Menu menuOpen={menuOpen} setMenuOPen={setMenuOPen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
