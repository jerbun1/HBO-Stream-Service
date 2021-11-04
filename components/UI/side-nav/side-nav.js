import { useStateContext } from "../HBOProvider";
import Link from "next/dist/client/link";

//Side navigation Component 
const SideNav = (props) => {
  const globalState = useStateContext();      //set the state of the component 
  return (
    <div
      className={`side-nav ${globalState.sideNavOpen ? "side-nav-active" : ""}`}
    >
      <div
        className="side-nav_close-btn"
        onClick={() => globalState.setSideNavOpenAction(false)}
      >
        <i className="fa fa-window-close" aria-hidden="true"></i>
      </div>
      <ul className="side-nav-main">
        <Link href="/" onClick={() => globalState.setSideNavOpenAction(false)}>
          <li href="/">
            <a>Home</a>
          </li>
        </Link>
        <div className="side-nav-divider" />

        <Link href="/movie" onClick={() => globalState.setSideNavOpenAction(false)}>
          <li href="/" className="active">
            <a>Movies</a>
          </li>
        </Link>
        <div className="side-nav-divider" />

        <Link href="/tv" onClick={() => globalState.setSideNavOpenAction(false)}>
          <li href="/">
            <a>Series</a>
          </li>
        </Link>
      </ul>
      
    </div>
  );
};
export default SideNav;
