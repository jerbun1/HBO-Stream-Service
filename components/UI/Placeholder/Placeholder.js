import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../Utilities";

//Placeholder Component for Displaying the size and title of the Media 
const Placeholder = (props) => {
  const [loadingData, setLoadingData] = useState(true);   //Hook for data loading display 
  const [movies, setMoviesData] = useState([]);     //Used to set and store the movie data in an empty array
  



  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row_title">{props.title}</h3>
      <div className="media-row_thumbnails">
      <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
    <div className="media-row_thumbnail-skeleton">
      <div className="media-row_thumbnail-skeleton-img"></div>
    </div>
      </div>
    </div>
  );
};



export default Placeholder;
