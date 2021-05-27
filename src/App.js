import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // const cards = [{ title: firstTitle, text: firstText }, { title: secondTitle, text: secondText }, { title: thirdTitle, text: thirdText },
  // { title: fourthTitle, text: fourthText }, { title: fifthTitle, text: fifthText }, { title: sixthTitle, text: sixthText }]

  return (
    <div className="App">

      <h2>Test</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
