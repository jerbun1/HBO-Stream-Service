import Account from "../Account/Account";
import SearchModel from "../SearchModel/SearchModel";
import Image from "next/image";
import { useStateContext } from "../HBOProvider";
import SideNav from "../side-nav/side-nav";
import Link from "next/link";
import AuthCheck from "../AuthCheck";
import create from '../../../pages/create'
import ls from 'local-storage'
const Header = (props) => {
  const globalState = useStateContext();
  let storage = ls('users');
  console.log(storage)
//   const removeName = (props) =>{
//     let remove= props.storage.map((item)=> item)
//     return  remove.unshift()
//  }
 
console.log(storage.map((item)=> item.name));
// console.log(user())
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
          width={70}
          height={70}
          border="3px solid rgb(230, 209, 250)"
          style={{background: '3px solid rgb(132, 0, 255)'}}
        />

        <div className="top-header_user-name">{storage.map((item)=> item.name)}</div>
      </div>
      <SearchModel />
      <Account />
      <SideNav />
    </header>
  );
};
export default Header;
