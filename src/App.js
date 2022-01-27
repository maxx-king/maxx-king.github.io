import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/index.js';
import ThreeDprinting from './Pages/ThreeDprinting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/3dPrinting" element={<ThreeDprinting/>} />
      </Routes>
    </Router>
  );
}

export default App;
