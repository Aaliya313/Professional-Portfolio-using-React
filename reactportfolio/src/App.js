import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/homepage';
import Contactpage from './pages/Contactpage/contactpage';
import Projectpage from './pages/Projectpage/projectpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projectpage" element={<Projectpage />}></Route>
        <Route path="/contactpage" element={<Contactpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
