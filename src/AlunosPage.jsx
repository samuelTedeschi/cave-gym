import { useState } from 'react';

function AlunosPage() {
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
      <h2>Gerenciamento de Alunos</h2>
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
  );
}

export default AlunosPage;
