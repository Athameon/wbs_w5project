import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import Footer from './Footer'

function Main() {
  const [searchObject, setSearchObject] = useState(
    { 
      query: "",
      search: "All", 
      time: {id: "all", value: "All time"}, //todo: change to object key, value
      order: "Date"
    })

  useEffect(() => {
    performFetch();
  }, [searchObject])

  const performFetch = () => {
    console.log("Fetch new data", searchObject)
  }

  const inputFilterQuerySet = (searchQueryValue) => {
    console.log("Finished Searching");
    setSearchObject((prev) => (
      {
        ...prev,
        query: searchQueryValue
      }
    ))
  }

  const searchFilterChanged = ({target}) => {
    console.log(target.id);
    console.log(target.innerText);
    setSearchObject((prev) => (
      { 
        ...prev,
        [target.attributes.name.nodeValue]: target.id === ""? target.innerText : {id: target.id ,value: target.innerText }
      }
    ));
  }

  return (
    <>
      <Header
        inputFilterQuerySet={inputFilterQuerySet}
        searchObject={searchObject}
        setSearchFilter={searchFilterChanged}/>
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