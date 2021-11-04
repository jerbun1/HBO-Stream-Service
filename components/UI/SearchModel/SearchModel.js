import axios from "axios";
import Image from "next/image";
import { useStateContext } from "../HBOProvider";
import { useState, useEffect } from "react";
import Link from "next/link";
import MediaRow from "../MediaRow/MediaRow";

//SearchModel Component for the user search bar 
const SearchModel = (props) => {
  const globalState = useStateContext();            //Used for the state of the component 
  const [popData, setPopData] = useState([]);       //Used for the setting and displaying the set data before search 
  const [searchData, setSearchData] = useState([]); //Used for the setting and storing of the user search 
  const [showResults, setShowResults] = useState(false);    //Used for displaying the user search result 
  const [text, setText] = useState("");             //used for displaying the user search text 

  //API calling to display the popData 
  useEffect(async () => {
    try {
      let popData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      );
      setPopData(popData.data.results.filter((item, i) => i < 13)); //Function for displaying the pop data before user search 
      setShowResults(false);        //Setting the user search result before the action 
      console.log( popData);
      let searchData = await axios.get(`https://api.themoviedb.org/3/search/${props.endPoint}?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US&page=1&include_adult=false`)
    } catch (err) {
      
    }
  }, []);

  //Component for the displaying of the user input while typing 
  const handleInput = async (e) => {
    try {
      
      setText(e.target.value);  //store the value of the user input while typing 
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      );
      //Function to display the user search data 
      setSearchData(
        searchData.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );
      setShowResults(true);  //Setting the user search results after action 
    } catch (e) {
      console.log(e);
    }
  };
  
  //Return SearchModel Component 
  return (
    <div
      className={`search-model ${
        globalState.searchOpen ? "search-model-active" : ""
      }`}
      key={props}
    >
      <div className="search-model_input-group">
        <input
          onChange={handleInput}
          className="search-model_input"
          type="text"
          placeholder="Search for a Movie or Show"
          value={text}
        />
        <div
          className="search-model_close-btn"
          onClick={() => globalState.setSearchOpenAction(false)}
        >
          <i className="fa fa-window-close" aria-hidden="true"></i>
        </div>
      </div>
      <div className="search-model_title">
        <h3>Popular Searches</h3>
      </div>
    
      <div className="search-model_thumbnails">
        {showResults && searchData.length >= 1 ? (
          <SearchResults searchData={searchData} />
        ) : (
          <PopularResults popData={popData} />
        )}
      </div>
    </div>
  );
};



//Search Results Component 
const SearchResults = (props) => {
    console.log(props)

    //Displaying media poster image of the user search result 
  return props.searchData.map((item, index) => {
    return (
      <Link href={`/${item.media_type}/${item.id}`} key={index}>
        <a>
          <div className="search-model_thumbnail">
            <Image
              alt="Rick and Morty Poster"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              width={240}
              height={360}
            />
            <div className="search-model_top-layer">
              <i className="fa fa-play" />
            </div>
          </div>
        </a>
      </Link>
    );
  });
};

//Popular or similar Searches component 
const PopularResults = (props) => {
    console.log(props)
    return props.popData.map((item, index) => {
      return (
        <Link href={`/movie/${item.id}`} key={index}>
          <a>
            <div className="search-model_thumbnail" >
              <Image
                alt="Rick and Morty Poster"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                width={240}
                height={360}
              />
              <div className="search-model_top-layer">
                <i className="fa fa-play" />
              </div>
            </div>
          </a>
        </Link>
      );
    });
  };
  

export default SearchModel;
