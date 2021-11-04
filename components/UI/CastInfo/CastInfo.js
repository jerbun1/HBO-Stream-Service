//IMPORTS
import axios from "axios";
import { useState, useEffect } from "react";

// The Cast Info Component
const CastInfo = (props) => {

  //React Hooks
  const [loadingData, setLoadingData] = useState(true); //used for loading/getting the data from the API
  const [credits, setCreditsData] = useState([]); //used to hold the array of information from the cast/crew
  const [review, setReviewData] = useState([]);   //used to hold the array of information for the movie review

  // useEffect: you tell React that your component needs to do something after render.
  // React will remember the function you passed (we’ll refer to it as our “effect”),
  // and call it later after performing the DOM updates.
  useEffect(() => {
    //API call to themoviedb database to get the movie information 
    axios
      .get(
        `https://api.themoviedb.org/3/${
          props.mediaType === "movie" ? "movie" : "tv"
        }/${
          props.mediaId
        }/credits?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      )
      .then((res) => {
        setCreditsData(res.data);
        //Handles successful response
        setLoadingData(false);
        console.log("good response for cast and crew");
        console.log(res);
      })
      .catch((err) => {
        //Handles an error
        console.log("error response for cast and crew");
      });

      //API call to themoviedb database to get the review data   
    axios
      .get(
        `https://api.themoviedb.org/3/${
          props.mediaType === "movie" ? "movie" : "tv"
        }/${
          props.mediaId
        }/reviews?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      )
      .then((res) => {
        setReviewData(res.data.results);
        console.log("good response for review");
        console.log(res.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log("error response for review");
      });
  }, [props.updateData]);

  // Function to show the cast of the movie/tv show
  const showCast = () => {

    //If the data is loaded
    if (loadingData != true) {
      //return a list of cast members using the above hook
      return credits.cast.map((item, index) => {
        return (
          <ul className="cast-info_crew" key={index}>
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      //return a message signifying loading data or can use a skeleton
      return <div>Loading cast</div>;
    }
  };

  //Function to show the crew of the movie/tv show
  const showCrew = () => {
    //If the data is loaded
    if (loadingData != true) {
      //return a list of cast members using the hook
      return credits.crew
        .filter((item, index) => index < 10)
        .map((item, index) => {
          return (
            <ul className="cast-info_crew" key={index}>
              <li>{item.job}</li>
              <li>{item.original_name}</li>
            </ul>
          );
        });
    } else {
      //return a message signifying loading data or can use a skeleton

      return <div>Loading Crew </div>;
    }
  };

  //Function to show the media reviews 
  const showReviews = () => {

    if (loadingData != true) {
      //return a list of reviews using the hook
      if (review === null || review === []) {
        return <div>Couldnt find any reviews</div>;
      } else {
        return review.map((item, index) => {
          return (
            <ul className="cast-info_crew" key={index}>
              <li style={{ color: "rgb(153, 153, 153)", fontWeight: "bold" }}>
                {item.author}
              </li>
              <li style={{ color: "rgb(200, 200, 200)" }}>{item.content}</li>
            </ul>
          );
        });
      }
    } else {
      //return a message signifying loading data or can use a skeleton

      return <div>Loading Review</div>;
    }
  };
  //Displays the Crew, Cast and Review info
  return (
    <div className="cast-info">
      <div className="cast-info_cast">
        <div className="cast-info_group-title">Cast</div>
        <div className="cast-info_list">{showCast()}</div>
      </div>
      <div className="cast-info_movieCrew">
        <div className="cast-info_group-title">Crew</div>
        <div className="cast-info_list">{showCrew()}</div>
      </div>
      <div className="cast-info_review">
        <div className="cast-info_group-title">Reviews</div>
        <div className="cast-info_list">{showReviews()}</div>
      </div>
    </div>
  );
};

//export the CastInfo component 
export default CastInfo;
