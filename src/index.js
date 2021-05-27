import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import Footer from './Footer'

function Main() {
  // const [searchInput, setSearchInput] = useState("");
  // useEffect(() => {
  //   console.log("Fetch new data")
  // }, [searchInput])
  // useState search + filter
  // useEffect -> fetch

  //searchMethod(keyWord) { }
  const onSearchInputChange = ({target}) => {
    // setSearchInput(target.value);
    console.log(target.value);
  }
  const finishSearching = () => {
    console.log("Finished Searching");
  }

  return (
    <>
      <Header onSearchInputChange={onSearchInputChange} 
        finishSearching={finishSearching}/>
      <App />
      <Footer />
    </>
  )}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);