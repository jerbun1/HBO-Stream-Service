import { useStateContext } from "../HBOProvider";
import Link from "next/dist/client/link";
const SideNav = (props) => {
  const globalState = useStateContext();
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
        <Link href="/" onClick={() => globalState.setSideNavOpenAction(false)}>
          <li href="/movie" className="active">
            <a>Movies</a>
          </li>
        </Link>
        <Link href="/" onClick={() => globalState.setSideNavOpenAction(false)}>
          <li href="/tv">
            <a>Series</a>
          </li>
        </Link>
      </ul>
      <div className="side-nav-divider" />
      <ul className="side-nav-main">
        <Link href="/">
          <li href="Action"><a>Action</a></li>
        </Link>
        <Link href="/">
          <li href="/"><a>Adventure</a></li>
        </Link>
        <Link href="/">
          <li href="/"><a>Comedy</a></li>
        </Link>
        <Link href="/">
          <li href="/"><a>Horror</a></li>
        </Link>
        <Link href="/">
          <li href="/"><a>Animation</a></li>
        </Link>
      </ul>
    </div>
  );
};
export default SideNav;
