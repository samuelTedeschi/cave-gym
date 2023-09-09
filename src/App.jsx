import './App.css'
import {
  Routes,
  Route, Link
} from "react-router-dom";

import AlunosPage from './AlunosPage';

function App() {
 

  return (
    <>
     <header>
      <nav>
        <ul>
          <Link to="/AlunosPage">alunos</Link>
          <li>mensalidade</li>
          <li>Home</li>
        </ul>
      </nav>
      <h2>Cave Gym</h2>
     </header>
     <main>
      <div>Cave Gym</div>
      <Routes>
        {/* Componente de uma rota específica */}
        <Route path="about" element={<AlunosPage/>} />
      </Routes>
     </main>
    </>
  )
}

export default App
