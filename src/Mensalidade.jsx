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
    return (
        <div>
            <div>
                <h2>Sistema de Mensalidade</h2>
                <ul>
                    {mensalidades.map((alunoMensalidade, index) => (
                        <li key={index}>{alunoMensalidade} - Pago</li>
                    ))}
                </ul>
                <input type="text"
                    value={aluno}
                    onChange={(e) => setAluno(e.target.value)}
                />
                <button onClick={handleRegistrarMensalidade}>Registrar Mensalidade</button>
            </div>
        </div>
    )
}