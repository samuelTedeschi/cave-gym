import { useState, useEffect } from 'react';
import './alunos.css'

export default function Mensalidade() {
    const [aluno, setAluno] = useState('');
    const [mensalidades, setMensalidades] = useState([]);

    useEffect(() => {
        const storedMensalidades = JSON.parse(localStorage.getItem('mensalidades'));
        if (storedMensalidades) {
          setMensalidades(storedMensalidades);
        }
      }, []);

      const handleRegistrarMensalidade = () => {
        if (aluno.trim() !== '') {
          const novaMensalidade = [...mensalidades, aluno];
          setMensalidades(novaMensalidade);
          localStorage.setItem('mensalidades', JSON.stringify(novaMensalidade));
          setAluno('');
        }
      };
    
      const handleRemoverAluno = (index) => {
        const novasMensalidades = [...mensalidades];
        novasMensalidades.splice(index, 1);
        setMensalidades(novasMensalidades);
        localStorage.setItem('mensalidades', JSON.stringify(novasMensalidades));
      };
    
    return (
        <div className='container'>
                <h2 className='title'>Sistema de Mensalidade</h2>
                <ul className='list'>
                    {mensalidades.map((alunoMensalidade, index) => (
                        <li key={index} className='alunos'>{alunoMensalidade} - Pago
                        <button onClick={() => handleRemoverAluno(index)} className='btnRemove'>Remover</button>
                        </li>
                        
                    ))}
                </ul>
                <div className='input'>
                  <input 
                      type="text"
                      value={aluno}
                      onChange={(e) => setAluno(e.target.value)}
                      className='inputAlunos'
                  />
                  <button onClick={handleRegistrarMensalidade} className='btnAluno'>Registrar Mensalidade</button>
                </div>
        
        </div>
    )
}