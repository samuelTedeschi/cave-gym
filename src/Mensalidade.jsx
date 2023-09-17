import { useState } from 'react';

export default function Mensalidade() {
    const [aluno, setAluno] = useState('');
    const [mensalidades, setMensalidades] = useState([]);

    const handleRegistrarMensalidade = () => {
        if (aluno.trim() !== '') {
            setMensalidades([...mensalidades, aluno]);
            setAluno('');
        }
    };

    const handleRemoverAluno = (index) => {
        const novasMensalidades = [...mensalidades];
        novasMensalidades.splice(index, 1);
        setMensalidades(novasMensalidades);
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
                <input type="text"
                    value={aluno}
                    onChange={(e) => setAluno(e.target.value)}
                    className='inputAlunos'
                />
                <button onClick={handleRegistrarMensalidade} className='btnAluno'>Registrar Mensalidade</button>
        
        </div>
    )
}