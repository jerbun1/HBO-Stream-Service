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
    ls.remove('activeUName');
    ls.remove('myList');
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
          <li>
            <Link href="#" className="active">
              Colored Themes
            </Link>
            <div className="create-user_colors">
              <div
                className="create-user_color  create-user_color--active"
                onClick={() => {
                  globalState.setChangeBackground(
                    "linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)"
                  );
                }}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)",
                }}
              />
              <div
                className="create-user_color"
                onClick={() => {
                  globalState.setChangeBackground(
                    "linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(36,4,74,1) 0%, rgba(77,9,121,1) 49%, rgba(164,139,38,1) 100%)"
                  );
                }}
                style={{
                  background:
                    "linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(36,4,74,1) 0%, rgba(77,9,121,1) 49%, rgba(164,139,38,1) 100%)",
                }}
              />
              <div
                className="create-user_color"
                onClick={() => {
                  globalState.setChangeBackground(
                    "linear-gradient(158deg, rgba(199,26,26,1) 20%, rgba(32,31,214,1) 77%)"
                  );
                }}
                style={{
                  background:
                    "linear-gradient(158deg, rgba(199,26,26,1) 20%, rgba(32,31,214,1) 77%)",
                }}
              />

              <div
                className="create-user_color"
                onClick={() => {
                  globalState.setChangeBackground(
                    "linear-gradient(158deg, rgba(137,0,171,1) 11%, rgba(31,214,67,1) 95%)"
                  );
                }}
                style={{
                  background:
                    "linear-gradient(158deg, rgba(137,0,171,1) 11%, rgba(31,214,67,1) 95%)",
                }}
              />

              <div
                className="create-user_color"
                onClick={() => {
                  globalState.setChangeBackground(
                    "linear-gradient(56deg, rgba(0,0,0,1) 14%, rgba(214,212,31,1) 95%)"
                  );
                }}
                style={{
                  background:
                    "linear-gradient(56deg, rgba(0,0,0,1) 14%, rgba(214,212,31,1) 95%)",
                }}
              />

              <div
                className="create-user_color"
                onClick={() => {
                  globalState.setChangeBackground(
                    "linear-gradient(56deg, rgba(254,142,98,1) 32%, rgba(31,210,214,1) 95%)"
                  );
                }}
                style={{
                  background:
                    "linear-gradient(56deg, rgba(254,142,98,1) 32%, rgba(31,210,214,1) 95%)",
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Account;
