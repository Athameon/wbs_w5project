import './App.css';

import Cards from './Cards';

function App() {

  const cards = [{ title: 'first', text: 'firstText' }, { title: 'secondTitle', text: 'secondText' }, { title: 'thirdTitle', text: 'thirdText' },
  { title: 'fourthTitle', text: 'fourthText' }, { title: 'fifthTitle', text: 'fifthText' }, { title: 'sixthTitle', text: 'sixthText' }]

  return (
    <div className="App">

      <h2>{cards.map(() => <Cards /> )}</h2>
      
    </div>
  );
}

export default App;
