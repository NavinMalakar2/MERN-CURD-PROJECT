import Navbar from './components/Novbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/all" element={<Read/>} />
        <Route path="/:id" element={<Update/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
