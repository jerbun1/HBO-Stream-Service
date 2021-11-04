import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../Hooks/useMounted";

//Authentication Check Component 
const AuthCheck = (component) => {
    //Check if user is logged in
    const [userLoggedIn, setUserLoggedIn] = useState(false);   //setting the state of the user 
    const router = useRouter();                                //Router imported Hook 
    const { hasMounted } = useMounted();                       //Component mounted Hook 
    let activeUID = ls('activeUID');                           //Logged in user ID
    let activeUName = ls('activeUName');                       //Logged in user Name 

    let users = ls('users') != null ? ls('users') : [];

    useEffect(() => {
        if (activeUID == null && activeUName == null && users.length < 1) {
            router.push('create')
        }
    }, [])
    if (users.length >= 1 && activeUID !== null &&activeUName !== null) {
        return hasMounted ? (component) : (<div className="create-user">
            <div className="create-user_top">
                <div className="create-user_logo"></div>
            </div>
        </div>);
    } else {
        return (<div className="create-user">
            <div className="create-user_top">
                <div className="create-user_logo"></div>
            </div>
        </div>)
    }

}

export default AuthCheck