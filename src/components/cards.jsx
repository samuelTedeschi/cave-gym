import '../components/cards.css'

// Componente de Card reutilizável
function Card({ title, descricao }) {
  return (
    <div className='card'>
      <h3 className='cardTitle'>{title}</h3>
      <p className='cardDescri'>{descricao}</p>
    </div>
    
  );
}

export default function Cards() {
  const cards = [
    {
      title: 'Alunos',
      descricao: 'Gerencie os seus alunos que estão presentes',
      link:'/alunos'
    },
    {
      title: 'Mensalidade',
      descricao: 'Gerencie os alunos que estão em dia na mensalidade',
    },
    {
      title: 'Alunos Novos',
      descricao: 'Novos alunos que estão fazendo parte da academia',
    },
  ];

  return (
    <div  className='cardContainer' >
      {cards.map((card, index) => (
        <Card key={index} title={card.title} descricao={card.descricao} link={card.link}/>
      ))}
    </div>
  );
}
