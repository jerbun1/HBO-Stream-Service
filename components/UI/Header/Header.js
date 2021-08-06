import Account from "../Account/Account"
import SearchModel from "../SearchModel/SearchModel";
import Image from 'next/image'
import { useStateContext } from "../HBOProvider";
import SideNav from "../side-nav/side-nav";

const Header = (props) => {
    const globalState = useStateContext();

    return (
        <header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header-menu-open' : ''}`}>
            <div className="top-header_left-side">
                <div className="top-header_menu-btn" onClick={()=>globalState.setSideNavOpenAction(true)}>
                <i className="fa fa-bars" />

                </div>
                <div className="top-header_search-btn" onClick={()=>globalState.setSearchOpenAction(true)}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <div className="top-header_logo"></div>
            <div className="top-header_account" onClick={()=>globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
            <Image alt="" className="top-header_user-img" src={require("/public/img/UiFace.jpg").default} width={100} height={100} border='3px solid rgb(230, 209, 250)'/>

                <div className="top-header_user-name">Bryan</div>
            </div>
            <SearchModel />
            <Account/>
            <SideNav/>
        </header>
    )
}
export default Header;