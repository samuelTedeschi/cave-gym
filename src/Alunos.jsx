import { useState, useEffect } from 'react';
import './alunos.css'

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [novoAluno, setNovoAluno] = useState('');
    const [contadorAlunos, setContadorAlunos] = useState(0);

    useEffect(() => {
        const storedAlunos = JSON.parse(localStorage.getItem('alunos'));
        if (storedAlunos) {
            setAlunos(storedAlunos);
            setContadorAlunos(storedAlunos.length);
        }
    }, []);

    const handleAddAluno = () => {
        if (novoAluno.trim() !== '') {
            const novaListaDeAlunos = [...alunos, novoAluno];
            setAlunos(novaListaDeAlunos);
            setContadorAlunos(contadorAlunos + 1)
            localStorage.setItem('alunos', JSON.stringify(novaListaDeAlunos));
            setNovoAluno('');
        }
    };

    const handleRemoverAluno = (index) => {
        const novosAlunos = [...alunos];
        novosAlunos.splice(index, 1);
        setAlunos(novosAlunos);
        setContadorAlunos(contadorAlunos - 1);
        localStorage.setItem('alunos', JSON.stringify(novosAlunos));
    };

    return (
        <div className='container'>
            <div className='containerTitle'>
                <h1 className='title'>Alunos</h1>
                <p className='contador'>Alunos Presentes: {contadorAlunos}</p>
            </div>
            <ul className='list'>
                {alunos.map((aluno, index) => (
                    <li key={index} className='alunos'>{aluno}
                        <button onClick={() => handleRemoverAluno(index)} className='btnRemove'>Remover</button>
                    </li>
                ))}
            </ul>
            <div className='input'>
                <input
                    type="text"
                    placeholder="Nome do Aluno"
                    value={novoAluno}
                    onChange={(e) => setNovoAluno(e.target.value)}
                    className='inputAlunos'
                />
                <button onClick={handleAddAluno} className='btnAluno'>Adicionar Aluno</button>
            </div>
        </div>
    )
}
