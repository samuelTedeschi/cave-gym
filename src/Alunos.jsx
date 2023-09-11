import { useState } from 'react';

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
        <div>
            <h1>Alunos</h1>
            <ul>
                {alunos.map((aluno, index) => (
                    <li key={index}>{aluno}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Nome do Aluno"
                value={novoAluno}
                onChange={(e) => setNovoAluno(e.target.value)}
            />
            <button onClick={handleAddAluno}>Adicionar Aluno</button>
        </div>
    )
}