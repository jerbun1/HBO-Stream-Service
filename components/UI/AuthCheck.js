import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../Hooks/useMounted";

const AuthCheck = (component) => {
    //Check if user is logged in
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const router = useRouter();
    const { hasMounted } = useMounted();
    let activeUID = ls('activeUID');
    let activeUName = ls('activeUName');

    let users = ls('users') != null ? ls('users') : [];

    useEffect(() => {
        // if (users.length >= 1) {
        //     router.push('/login');
        // }
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

    return component
}

export default AuthCheck