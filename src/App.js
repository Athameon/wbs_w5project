import './App.css';
import Card from './Card';

function App({searchResult}) {

  if (searchResult === undefined) { // In case the result is not loaded yet
    return <div></div>
  }

  searchResult.hits = searchResult.hits.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div className="container">
      <div className="row">
        {searchResult.hits.map((card) => <Card key={card.objectID} card={card} /> )}
      </div>
    </div>
  );
}

export default App;