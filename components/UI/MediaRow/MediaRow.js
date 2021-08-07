import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../Utilities";

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
  const showThumbNails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} />;
        });
  };
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row_title">{props.title}</h3>
      <div className="media-row_thumbnails">
        {showThumbNails()}
        {/* {loopComp(
                    (<Thumbnail />), 10

                )} */}
      </div>
    </div>
  );
};

const Thumbnail = (props) => {
  return (
    <div className="media-row_thumbnail">
      <Image
        alt="Star Wars Bad Batch"
        src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}
        layout="fill"
      />
      <div className="media-row_top-layer">
        <i className="fa fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
  );
};
export default MediaRow;
