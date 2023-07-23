import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/react-test-deploy/'>
        <Routes>
          <Route path='/react-test-deploy' element={<Home/>}/>
          <Route path='/react-test-deploy/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
