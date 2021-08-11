import axios from "axios";
import { useState, useEffect } from "react";

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCreditsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.mediaId}/credits?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
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
  }, []);

  const showCast = () => {
      if(loadingData != true){
        return credits.cast.map((item) => {
            return (
              <ul className="cast-info_crew" key={item}>
                <li>{item.character}</li>
                <li>{item.name}</li>
              </ul>
              //   console.log(item.name)
            );
          });
      }else{
          return(<div>Loading cast</div>)
      }
    
  };

  const showCrew = () => {
      if(loadingData != true){
        return credits.crew.map((item) => {
            return (
              <ul className="cast-info_crew">
                <li>{item.job}</li>
                <li>{item.original_name}</li>
              </ul>
              //   console.log(item.name)
            );
          });
      }else{
          return(<div>Loading Crew </div>)
      }
   
  };
  return (
    <div className="cast-info">
      <div className="cast-info_group-title">Cast</div>
      <div className="cast-info_list">{showCast()}</div>
      <div className="cast-info_group-title">Crew</div>
      <div className="cast-info_list">
      {showCrew()}
      </div>
    </div>
  );
};

export default CastInfo;
