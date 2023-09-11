import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Alunos from './Alunos';
import Mensalidade from './Mensalidade';

function App() {


  return (
    <>
      <header>
        <h2 className="navTitle">Cave Gym</h2>
        <nav>
          <ul className="navList">
            <Link to="/Alunos" className="navLink">alunos</Link>
            <Link to="/mensalidade" className="navLink">mensalidade</Link>
            <Link to="/home" className="navLink">Home</Link>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="Alunos" element={<Alunos />} />
          <Route path='Home' element={<Home />} />
          <Route path='Mensalidade' element={<Mensalidade />} />
        </Routes>
      </main>
    </>
  )
}

export default App
