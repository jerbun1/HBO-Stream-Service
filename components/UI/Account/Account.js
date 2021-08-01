const Account = (props) => {
    return (
        <div className="account">
            <div className="account_details">
                <div className="account_title">My List</div>
                <div className="account_watch_list">
                    <div className="account_watch_video">
                        <div className="account_watch-overlay">
                            <div className="account_watch_buttons">
                                <div className="account_watch_circle">
                                    <i className="fas fa-play" />
                                </div>
                                <div className="account_watch_circle">
                                    <i className="fas fa-times" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account_menu">
                <ul className="account_main">
                    <li>
                      
                        <a href="/" className="active">My list</a>
                        
                       
                    </li>
                </ul>
                <ul className="account_main">
                    <li>
                      
                            <a href="/">Account</a>

                   

                    </li>
                    <li>
             
                            <a href="/">Sign-Out</a>
           
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Account;