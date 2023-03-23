import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/homepage';
import Contactpage from './pages/Contactpage/contactpage';
import Projectpage from './pages/Projectpage/projectpage';
import { projectData  } from './components/Data/data';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projectpage" element={<Projectpage />}></Route>
        <Route path="/contactpage" element={<Contactpage />}></Route>
      </Routes>
    </BrowserRouter>
    <projectData />
    </div>
  );
}

export default App;
