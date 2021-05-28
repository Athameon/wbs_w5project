import './App.css';
import Card from './Card';

function App({searchResult}) {
  if (searchResult === undefined) { // In case the result is not loaded yet
    return <div></div>
  }

  return (
    <div className="container">
      <div className="row">
        {searchResult.hits.map((card) => <Card key={card.objectID} card={card} /> )}
      </div>
    </div>
  );
}

export default App;