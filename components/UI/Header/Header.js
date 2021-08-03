import Account from "../Account/Account"
import SearchModel from "../SearchModel/SearchModel";
import Image from 'next/image'
const Header = (props) => {
    return (
        <header className="top-header">
            <div className="top-header_left-side">
                <div className="top-header_menu-btn">
                <i className="fa fa-bars" />

                </div>
                <div className="top-header_search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <div className="top-header_logo"></div>
            <div className="top-header_account">
            <Image alt="" className="top-header_user-img" src="/public\img\UiFace.jpg" width={125} height={125} />

                <div className="top-header_user-name">Bryan</div>
            </div>
            <SearchModel />
            <Account/>
        </header>
    )
}
export default Header;