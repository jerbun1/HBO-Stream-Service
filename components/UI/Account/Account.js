import Link from 'next/link'
import { useStateContext } from "../HBOProvider";
//This is the Account Component that will display some info to the user 

const Account = (props) => {
    //Variable used for some of the Reach Hooks 
    const globalState = useStateContext();
    return (
        <div className={`account ${globalState.accountModalOpen ? "account-active":''}`}>
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
                                <i className="fa fa-window-close" aria-hidden="true"></i>

                                    
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
                        <Link href="../login" className="active">
                            Sign-Out

                        </Link>

                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Account;