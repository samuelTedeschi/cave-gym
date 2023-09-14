import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Alunos from './Alunos';
import Mensalidade from './Mensalidade';

function App() {


  return (
    <>
      <header>
        <Link to="/" className="navTitle">Cave Gym</Link>
        <nav>
          <ul className="navList">
            <Link to="/Alunos" className="navLink">alunos</Link>
            <Link to="/mensalidade" className="navLink">mensalidade</Link>
          </ul>
        </nav>
      </header>

      <main className='hero'>
        <div>
          <h1 className='heroTitle'>Cave Gym</h1>
          <p className='heroSubTitle'>Gerencie seus alunos da sua academia com o Cave Gym</p>
        </div>
        <div>
          <Routes>
            <Route path="Alunos" element={<Alunos />} />
            <Route path='Mensalidade' element={<Mensalidade />} />
          </Routes>
        </div>
      </main>

    </>
  )
}

export default App
