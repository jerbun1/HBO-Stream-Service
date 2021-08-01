import Account from "../Account/Account"
import SearchModel from "../SearchModel/SearchModel";

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
            <img alt="" className="top-header_user-img" src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" />

                <div className="top-header_user-name">Bryan</div>
            </div>
            <SearchModel />
            <Account/>
        </header>
    )
}
export default Header;