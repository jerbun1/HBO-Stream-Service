import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from '../HBOProvider'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ls from 'local-storage'
import CreateUser from '../../../pages/create'
import { useMounted } from '../../Hooks/useMounted'

//This is the login component 
const Login= (props) => {
    const globalState = useStateContext();  //Used for the state of the component
    const router = useRouter();             //Used to change the route of the component 
    const [loadingUsers, setLoadingUsers] = useState(true)      //used to for the state of the users or loading users 
    let users =ls('users')!== null ? ls('users') : [];  //if statement to check the local storage for any users 
    let {hasMounted} = useMounted;          //checks if the component has mounted 
    console.log(props)

    //React hooks useEffect
    useEffect(()=>{
        if(users < 1){
            setLoadingUsers(false)
        }
        console.log('load effect', users)
    }, [])

    console.log('declared users', users)

    //Function to store the current users id and name in local storage for logging purposes 
    const selectUser = (id, name) => {
        ls('activeUID', id)
        ls('activeUName', name)
        router.push('/')
    }
    
    //Function to display the users name and pic from local storage 
    const showUsers = () =>{
        if(loadingUsers){
            return users.map((user)=>{
                return( <div onClick={()=> {selectUser(user.id, user.name)}} className="login-user_user-box" key={user.id}>
                <Image alt="" className="login-user_user-img" src={require("/public/img/UiFace.jpg").default} width={125} height={125} />

                <div className="login-user_user-name" >{user.name}</div>

            </div>)
            })
        }
    }
    //Redirects the user to the create page 
    const createUser=()=>{
        router.push('create')
    }
    return (
            <div className="login-user">
                <div className="login-user_top">
                    <div className="login-user_logo" />
                    <span className="login-user_title">
                        Who is watching?
                    </span>
                    
                </div>
                <div className="login-user_form">
                   {hasMounted ? showUsers() : showUsers()}
                </div>
                <div className="login-user_buttons">
                    <button className="login-user_adult" onClick={createUser}>Create User</button>
                    <button className="login-user_child">Add Child</button>

                </div>
            </div>
        
    )
}

export default Login
