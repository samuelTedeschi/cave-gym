import { useState } from 'react';

export default function Mensalidade() {
    const [mensalidades, setMensalidades] = useState([]);

    const handleRegistrarMensalidade = (aluno) => {
        setMensalidades([...mensalidades, aluno]);
    };
    return (
        <div>
            <div>
                <h2>Sistema de Mensalidade</h2>
                <ul>
                    {mensalidades.map((aluno, index) => (
                        <li key={index}>{aluno} - Pago</li>
                    ))}
                </ul>
                <button onClick={() => handleRegistrarMensalidade('Nome do Aluno')}>Registrar Mensalidade</button>
            </div>
        </div>
    )
}