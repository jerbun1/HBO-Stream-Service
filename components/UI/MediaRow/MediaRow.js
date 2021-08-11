import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../Utilities";
import Link from 'next/link'

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      )
      .then((res) => {
        setMoviesData(shuffleArray(res.data.results));
        //Handles successful response
        setLoadingData(false);
        console.log("good response for " + props.title);
        console.log(res)
      })
      .catch((err) => {
        //Handles an error
        console.log("error response for " + props.title);
      });
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  //Should Simulate loading up an image for the thumbnails
  const showThumbNails = (type) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} type={type} key={props.movie} />;
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
    
  return (
    <Link href={`/movie/${props.movieData.id}`}>
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

const Skeleton = (props) => {
  return (
    <div className="media-row_thumbnail-skeleton" key={props}>
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
  );
};
export default MediaRow;
