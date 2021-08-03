import Link from 'next/link'
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
                    <Link href="/" className="active">
                        My list
                    </Link>

                    </li>
                </ul>
                <ul className="account_main">
                    <li>
                        <Link href="/" className="active">
                            Account
                        </Link>



                    </li>
                    <li>
                        <Link href="/" className="active">
                            Sign-Out

                        </Link>

                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Account;