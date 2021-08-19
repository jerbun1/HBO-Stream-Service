import { useStateContext } from "../HBOProvider";
import Link from "next/dist/client/link";
import { useState } from "react";

const GenreNav = (props) => {
  // const globalState = useStateContext();
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => setActiveNav(true), 100);
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
