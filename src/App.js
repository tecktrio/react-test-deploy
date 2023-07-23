import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
