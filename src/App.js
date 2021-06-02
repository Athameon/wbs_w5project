import React, {useState} from 'react'
import "./App.css";
import Card from "./Card";
import Details from './Details';
import Error from "./Error";
import LoadingComponent from "./LoadingComponent";

function App({ searchResult }) {
  const [currentStory, setCurrentStory] = useState(null);
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false)

  if (searchResult === undefined) {
    // In case the result is not loaded yet
    return <div></div>;
  }

  searchResult.hits = searchResult.hits.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const clickedStoryOrComment = (card, isStory) => {
    setisError(false);
    setisLoading(true);
    if (isStory) {
      setCurrentStory(card);
      setisLoading(false);
    } else {  // If the user clicked on a comment
      let storyId = card.story_id;
      if (storyId === null) {
        storyId = getStoryId(card.parent_id);
      }
      console.log("Story ID of selected comment is: " + storyId);
      if (!storyId) {
        return; // In case of error
      }
      getStoryToComment(storyId);
    }
  }

  const getStoryId = async (parentId) => {
    try {
      const response = await fetch('https://hn.algolia.com/api/v1/items/' + parentId);
      if (!response.ok) {
        throw new Error('Failed to execute the parent fetch.');
      }
      const jsonResponse = await response.json();
      if (jsonResponse.story_id === null) {
        return await getStoryId(jsonResponse.parent_id);
      } else {
        return jsonResponse.story_id;
      }
    } catch(error) {
      console.log('Failed to to get the story for the comment: ' + error);
      setisError(true);
      setisLoading(false);

      return null;
    }
  }

  const getStoryToComment = (storyId) => {
    fetch(process.env.REACT_APP_API_ADDRESS + 'search?tags=story_' + storyId)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to get the data: " + response);
      })
      .then(jsonResponse => {
        setCurrentStory(jsonResponse.hits[0]);
        setisLoading(false);
      })
      .catch(error => {
        console.log('Failed to to get the story for the comment: ' + error);
        setisError(true);
        setisLoading(false);
      });
  }

  const clickedBackButton = () => {
    setCurrentStory(null);
  }

  if(isLoading) {
    return <LoadingComponent />
  } else if(isError) {
    return <Error />
  } else if(currentStory) {
    return <Details story={currentStory} clickedBackButton={clickedBackButton} />
  } else {
    return (
      <div className="container" style={{ maxWidth: "90%" }}>
        <div className="row">
          {searchResult.hits.map((card) => (
            <Card 
              key={card.objectID} 
              card={card} 
              clickedStory={clickedStoryOrComment}
              />
          ))}
        </div>
      </div>
    );
  }

}

export default App;