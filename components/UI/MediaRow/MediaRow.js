import Image from "next/dist/client/image"
import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../Utilities";
import Link from 'next/link'

//The MediaRow Component 
const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true); //Hook for data loading display 
  const [movies, setMoviesData] = useState([]);         //Used to set and store the movie data in an empty array

  //API calling to get the data 
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      )
      .then((res) => {
        setMoviesData(shuffleArray(res.data.results));    //Hook to set and store the data of the media
        //Handles successful response
        setLoadingData(false);
        console.log("good response for " + props.title);
        console.log(res)
      })
      .catch((err) => {
        //Handles an error
        console.log("error response for " + props.title);
      });
  }, [props.updateData]);//Updates the data once page is reloaded. exe once

  //Component for looping the thumbnails component 
  const loopComp = (comp, digit) => {

    //Array filled with the Skeleton component 
    let thumbnails = [<Skeleton  key={'a'}/>,<Skeleton  key={'b'}/>,<Skeleton  key={'c'}/>,<Skeleton  key={'d'}/>,<Skeleton  key={'e'}/>];
    
    return thumbnails;
  };

  //Component that Should Simulate loading up an image for the thumbnails
  const showThumbNails = (type) => {

    //If data is loading show the skeleton if not show the data/movies.
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} type={type} key={movie.id} mediaType={props.mediaType}/>;
        });
  };


  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row_title">{props.title}</h3>
      <div className="media-row_thumbnails">
        {showThumbNails(props.type)}
      
      </div>
    </div>
  );
};

//Thumbnail Component 
const Thumbnail = (props) => {
  const thumbSize= (type) =>{
    if(type == 'large-v'){
      return '500';
    }
    if(type == 'small-v'){
      return '400';
    }
    if(type == 'small-h'){
      return '185';
    }
  }
    //Return of the MediaRow Component 
  return (
    <Link href={`/${props.mediaType === 'movie' ? 'movie' : 'tv' }/${props.movieData.id}`}>
    <a>
    <div className="media-row_thumbnail">
      <Image
        alt=""
        className='poster-img'
        src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}/${props.movieData.poster_path}`}
        layout="fill"
        key={props.movieData.poster_path}
      />
      <div className="media-row_top-layer">
        <i className="fa fa-play" />
      </div>
    </div>
    </a>
    
    </Link>
    
  );
};

//Skeleton Component for displaying the loading data 
const Skeleton = (props) => {
  return (
    <div className="media-row_thumbnail-skeleton" key={props}>
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
  );
};

//Export the MediaRow Component 
export default MediaRow;
