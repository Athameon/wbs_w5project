import React, {useState, useEffect} from 'react'
import Error from "./Error";
import LoadingComponent from "./LoadingComponent";
import './Details.css';
import parse from 'html-react-parser';

const Details = (props) => {
  console.log("Show details for: ", props.story)

  const [searchResult, setSearchResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    fetch(process.env.REACT_APP_API_ADDRESS + 'search?tags=comment,story_' + props.story.objectID)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to get the comments for the story');
    }, (networkError) => {
      throw new Error('Network Error: ' + networkError)
    })
    .then(jsonResponse => {
      console.log("Comments for story:", jsonResponse);
      setSearchResult(jsonResponse);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    });
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='detailsBody'>
      <button type="button" id='backButton' className="btn btn-primary btn-lg" onClick={props.clickedBackButton}>Back</button>
      <h2>Story:</h2>
      <a
        href={props.story.url}
        target="_blank"
        rel="noreferrer"
        className="card-title"
      >
        {parse(props.story.title)}
      </a>
      <p>By <span className='strong'>{props.story.author}</span> at <span className='strong'>{new Date(props.story.created_at).toLocaleString()}</span></p>
      <h2>Comments:</h2>
      {isLoading ? (
        <LoadingComponent />
      ) : isError ? (
        <Error />
        ) : searchResult && searchResult.hits.length === 0 ? (
          <p>This story has no comments.</p>
        ) : (
          searchResult.hits.map(comment => {
            // console.log("comment: ", comment);
            return <div key={comment.objectID}> 
                <p>{parse(comment.comment_text)}</p> 
                <p>
                  <span style={{paddingRight: '10px'}}>{comment.author}</span>
                  |
                  <span style={{paddingLeft: '10px'}}>{new Date(comment.created_at).toLocaleString()}</span>
                </p>
                <hr />
              </div>
          })
        )}
      </div>
    )
  }
  
  export default Details;