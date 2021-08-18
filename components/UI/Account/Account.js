import Link from "next/link";
import { useStateContext } from "../HBOProvider";
import ls from "local-storage";
import { useEffect } from "react";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
//This is the Account Component that will display some info to the user

const Account = (props) => {
  let storage = ls("users");
  const logOut = () => {
    remove = storage.map((item) => item.name);
    return remove.shift();
  };
  //Variable used for some of the Reach Hooks
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {
    if (globalState.accountModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [globalState.accountModalOpen]);

  //Closes The Account section when on new page
  const watchMedia = (url) => {
    router.push(url);
    globalState.setAccountModalOpenAction(!globalState.accountModalOpen);
  };

  const showWatchList = () => {
    return globalState.watchList.map((item, index) => {
      return (
        <div className="account_watch_video" key={index}>
          <Image src={item.mediaUrl} layout="fill" />
          <div className="account_watch-overlay">
            <div className="account_watch_buttons">
              <div
                className="account_watch_circle"
                onClick={() =>
                  watchMedia(`/${item.mediaType}/ ${item.mediaId}`)
                }
              >
                <i className="fas fa-play" />
              </div>
              <div
                className="account_watch_circle"
                onClick={() => globalState.removeFromList(item.mediaId)}
              >
                <i className="fa fa-window-close" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const signOut = () => {
    ls.remove("activeUID");
    router.push("login");
  };
  return (
    <div
      className={`account ${
        globalState.accountModalOpen ? "account-active" : ""
      }`}
    >
      <div className="account_details">
        <div className="account_title">My List</div>
        {globalState.watchList !== null
          ? showWatchList()
          : "Sorry no add movies"}
      </div>
      <div className="account_menu">
        <ul className="account_main">
          <li>
            <Link href="#" className="active">
              My list
            </Link>
          </li>
        </ul>
        <ul className="account_main">
          <li>
            <Link href="#" className="active">
              Account
            </Link>
          </li>
          <li>
            <a onClick={signOut}> Sign-Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Account;
