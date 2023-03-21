import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projectpage" element={<projectpage />}></Route>
        <Route path="/contactpage" element={<contactpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
