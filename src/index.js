import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import App from './App';
import Header from './Header'
import Footer from './Footer'

function Main() {
  const addressingApi = "http://hn.algolia.com/api/v1/"
  const [searchObject, setSearchObject] = useState(
    { 
      query: "",
      search: "All", 
      time: {id: "all", value: "All time"},
      order: "Date"
    })
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    performFetch();
  }, [searchObject])

  const performFetch = () => {
    console.log("Fetch new data with search object: ", searchObject);
    let address = searchObject.order === "Date"?
      addressingApi + "search_by_date?" : 
      addressingApi + "search?";
    console.log(searchObject.search)
    if(searchObject.search === "Stories") {
      address += 'tags=story&';
    } else if (searchObject.search === "Comments") {
      address += 'tags=comment&';
    }
    if (searchObject.time.id !== 'all') {
      address += "numericFilters=created_at_i>" + getTimeRange(searchObject.time)+'&';
    }
    if (searchObject.query !== '') {
      address += "query=" + searchObject.query;
    }
    console.log('searchAdress: ', address);

    fetch(address)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request was too stupid!');
    }, networkError => {
      console.log(networkError.message);
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      setSearchResult(jsonResponse);
    })
    .catch(error => {
      console.log(error);
    });
  }
  const getTimeRange = (time) => {
    switch(time.id) {
      case "day":
        return 24*60*60;
      case "week":
        return 7*24*60*60;
      case "month":
        return 31*24*60*60;
      case "year":
        return 365*24*60*60;
      default: 
        return "";
    }
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
    setSearchObject((prev) => (
      { 
        ...prev,
        [target.attributes.name.nodeValue]: 
          target.id === ""? 
            target.innerText : 
            {
              id: target.id ,value: target.innerText 
            }
      }
    ));
  }

  return (
    <>
      <Header
        inputFilterQuerySet={inputFilterQuerySet}
        searchObject={searchObject}
        setSearchFilter={searchFilterChanged}/>
      <App searchResult={searchResult} />
      <Footer />
    </>
  )}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);