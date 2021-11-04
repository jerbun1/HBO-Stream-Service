import { useStateContext } from "../HBOProvider";
import Link from "next/dist/client/link";
import { useState } from "react";

//This is GenreNav component 
const GenreNav = (props) => {
  // const globalState = useStateContext();
  const [activeNav, setActiveNav] = useState(false); //used to control the genre nav 
  
  setTimeout(() => setActiveNav(true), 100);
  //return the GenreNav component 
  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav-active" : ""}`}>
      {console.log(props)}
      <GenreList
        mediaType={props.mediaType}
        genresData={props.genresData}
      />
    </ul>
  );
};

//Function for the GenreList 
const GenreList = (props) => {
  return props.genresData.map((item) => {
    return (
      <li href="/" key={item.id}>
          <a href={`/${props.mediaType}/genre/${item.id}`}>{item.name}</a>
      </li>
    );
  });
};
export default GenreNav;
