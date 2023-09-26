import { useState, useEffect } from 'react';
import './alunos.css'

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [novoAluno, setNovoAluno] = useState('');
    const [contadorAlunos, setContadorAlunos] = useState(0);
    const [pesquisaAluno, setPesquisaAluno] = useState('');
    const [alunosFiltrados, setAlunosFiltrados] = useState([]);

    useEffect(() => {
        const storedAlunos = JSON.parse(localStorage.getItem('alunos'));
        if (storedAlunos) {
            setAlunos(storedAlunos);
            setContadorAlunos(storedAlunos.length);
            setAlunosFiltrados(storedAlunos);
        }
    }, []);

    useEffect(() => {
        const resultadosPesquisa = alunos.filter((alunos) =>
            alunos.nome.toLowerCase().includes(pesquisaAluno.toLowerCase())
        );
        setAlunosFiltrados(resultadosPesquisa);
    }, [pesquisaAluno, alunos]);

    const handleAddAluno = () => {
        if (novoAluno.trim() !== '') {
            const novoAlunoObj = { nome: novoAluno };
            const novaListaDeAlunos = [...alunos, novoAlunoObj];
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
                <input 
                    type="text"
                    placeholder='pesquisar alunos'
                    value={pesquisaAluno}
                    onChange={(e) => setPesquisaAluno(e.target.value)}
                    className='pesquisa'
                />
                <p className='contador'>Alunos Presentes: {contadorAlunos}</p>
            </div>
            <ul className='list'>
                {alunosFiltrados.map((aluno, index) => (
                    <li key={index} className='alunos'>{aluno.nome}
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
