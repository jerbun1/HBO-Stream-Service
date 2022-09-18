import Account from "../Account/Account";
import SearchModel from "../SearchModel/SearchModel";
import Image from "next/image";
import { useStateContext } from "../HBOProvider";
import SideNav from "../side-nav/side-nav";
import Link from "next/link";
import AuthCheck from "../AuthCheck";
import create from '../../../pages/create'
import ls from 'local-storage'

//The header Component 
const Header = (props) => {
  const globalState = useStateContext(); //Used for the state of the component 
  let storage = ls('users');             //Used for storage of users info
  let user = ls('activeUName');           //Used for the active users Name 
  console.log(storage)
  console.log(user)
 console.log(globalState)

  return (
    <header
      className={`top-header ${
        globalState.accountModalOpen || globalState.sideNavOpen
          ? "top-header-menu-open"
          : ""
      }`}
      key={props}
    >
      <div className="top-header_left-side">
        <div
          className="top-header_menu-btn"
          onClick={() => globalState.setSideNavOpenAction(true)}
        >
          <i className="fa fa-bars" />
          <i className="fa fa-bars" />

        </div>
        <div
          className="top-header_search-btn"
          onClick={() => globalState.setSearchOpenAction(true)}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <Link href="/">
        <a>
          <div className="top-header_logo"></div>
        </a>
      </Link>
      <div
        className="top-header_account"
        onClick={() =>
          globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
        }
      >
        <Image
          alt=""
          className="top-header_user-img"
          src={require("/public/img/UiFace.jpg").default}
          width={50}
          height={50}
          border="3px solid rgb(230, 209, 250)"
          style={{background: '3px solid rgb(132, 0, 255)'}}
        />

        <div className="top-header_user-name">{user}</div>
      </div>
      <SearchModel />
      <Account />
      <SideNav />
    </header>
  );
};
export default Header;
