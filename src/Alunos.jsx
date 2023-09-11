import { useState } from 'react';
import './alunos.css'

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [novoAluno, setNovoAluno] = useState('');

    const handleAddAluno = () => {
        if (novoAluno) {
            setAlunos([...alunos, novoAluno]);
            setNovoAluno('');
        }
    };

    return (
        <div className='container'>
            <h1 className='title'>Alunos</h1>
            <ul className='list'>
                {alunos.map((aluno, index) => (
                    <li key={index} className='alunos'>{aluno}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Nome do Aluno"
                value={novoAluno}
                onChange={(e) => setNovoAluno(e.target.value)}
                className='inputAlunos'
            />
            <button onClick={handleAddAluno} className='btnAluno'>Adicionar Aluno</button>
        </div>
    )
}