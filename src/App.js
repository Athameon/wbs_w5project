import './App.css';
import Card from './Card';

function App() {

  const cards = [{ title: 'first', author: 'firstText' }, { title: 'secondTitle', author: 'secondauthor' }, { title: 'thirdTitle', author: 'thirdauthor' },
  { title: 'fourthTitle', author: 'fourthauthor' }, { title: 'fifthTitle', author: 'fifthauthor' }, { title: 'sixthTitle', author: 'sixthauthor' }, { title: 'first', author: 'firstauthor' }, { title: 'secondTitle', author: 'secondauthor' }, { title: 'thirdTitle', author: 'thirdauthor' },
  { title: 'fourthTitle', author: 'fourthauthor' }, { title: 'fifthTitle', author: 'fifthauthor' }, { title: 'sixthTitle', author: 'sixthauthor' }]

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => <Card card={card} /> )}
        
      </div>
    </div>
  );
}

export default App;
