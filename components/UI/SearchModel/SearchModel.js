import axios from "axios";
import Image from "next/image";
import { useStateContext } from "../HBOProvider";
import { useState, useEffect } from "react";
import Link from "next/link";
import MediaRow from "../MediaRow/MediaRow";
const SearchModel = (props) => {
  const globalState = useStateContext();
  const [popData, setPopData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  useEffect(async () => {
    try {
      let popData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      );
      setPopData(popData.data.results.filter((item, i) => i < 13));
      setShowResults(false);
      console.log( popData);
      let searchData = await axios.get(`https://api.themoviedb.org/3/search/${props.endPoint}?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US&page=1&include_adult=false`)
    } catch (err) {
      
    }
  }, []);

  const handleInput = async (e) => {
    try {
      setText(e.target.value);
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      );
      setSearchData(
        searchData.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );
      setShowResults(true);
    } catch (e) {
      console.log(e);
    }
  };


  // const loopComp = (comp, digit) => {
  //     let thumbnails = [];
  //     for (let index = 0; index <= digit; index++) {
  //         thumbnails.push(comp);
  //     }
  //     return thumbnails;
  // }

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
      {/* {loopComp(
                    (<div className="search-model_thumbnail" >
                            <Image alt="Rick and Morty Poster" src={require("/public/img/RickandMorty.png").default} width={240}height={360}/>
                        <div className="search-model_top-layer">
                            <i className="fa fa-play"/>
                       </div>

                    </div>), 5

                )} */}
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


const SearchResults = (props) => {
    console.log(props)
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

const PopularResults = (props) => {
    console.log(props)
    return props.popData.map((item, index) => {
      return (
        <Link href={`/movie/${item.id}`} key={index}>
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
  

export default SearchModel;
