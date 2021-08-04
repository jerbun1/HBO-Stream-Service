import Head from 'next/head'
import Image from 'next/image'
import { useSateContext } from '../HBOProvider'

const Login= () => {
    const globalState = useSateContext();
    return (
            <div className="login-user">
                <div className="login-user_top">
                    <div className="login-user_logo" />
                    <span className="login-user_title">
                        Who is watching?
                    </span>
                    <div className="login-user_links">
                        <a className="login-user_links_user" href="create-user">Create User</a>
                        <a className="login-user_links_main" href="mainview">Main Menu</a>
                    </div>

                </div>
                <div className="login-user_form">
                    <div className="login-user_user-box">
                        <Image alt="" className="login-user_user-img" src={require("/public/img/UiFace.jpg").default} width={125} height={125} />

                        <div className="login-user_user-name">{globalState.test}</div>

                    </div>
                </div>
                <div className="login-user_buttons">
                    <button className="login-user_adult">Add Adult</button>
                    <button className="login-user_child">Add Child</button>

                </div>
            </div>
        
    )
}

export default Login
