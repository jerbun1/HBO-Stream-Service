import Link from "next/link";
import { useStateContext } from "../HBOProvider";
import ls from "local-storage";
import { useEffect } from "react";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";

//This is the Account Component that will display The users movie/show list Change the colour themed 

//The Account Component 
const Account = (props) => {

  let storage = ls("users");          


  //Variable used for some of the Reach Hooks
  const globalState = useStateContext();   //Used for the state of the component 
  const router = useRouter();              //Used to change the route of the link/page 

  //Closes The Account section when on new page
  const watchMedia = (url) => {
    router.push(url);                      //Redirect the page to the selected users movie 
    globalState.setAccountModalOpenAction(!globalState.accountModalOpen);
  };

  //Function to show the users Watch List 
  const showWatchList = () => {

    //Displays the selected Movie Poster for the user watch list 
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

  //Function for the sign out  button
  const signOut = () => {
    ls.remove("activeUID");       //Removes the current users ID from local storage
    ls.remove('activeUName');     //Removes the current users Name  from local storage
    ls.remove('myList');          //Removes the current users list from local storage
    router.push("login");         //redirects the user to the login page
  };

  //Return for the Account component 
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
                    "linear-gradient(90deg, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))"
                  );
                }}
                
                style={{
                  background:
                    "linear-gradient(90deg, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
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
