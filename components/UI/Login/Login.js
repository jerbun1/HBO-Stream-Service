import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from '../HBOProvider'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ls from 'local-storage'
import CreateUser from '../../../pages/create'
import { useMounted } from '../../Hooks/useMounted'
const Login= (props) => {
    const globalState = useStateContext();
    const router = useRouter();
    const [loadingUsers, setLoadingUsers] = useState(true)
    let users =ls('users')!== null ? ls('users') : [];
    let {hasMounted} = useMounted;
    console.log(props)

    useEffect(()=>{
        if(users < 1){
            setLoadingUsers(false)
        }
        console.log('load effect', users)
    }, [])

    console.log('declared users', users)

    const selectUser = (id, user) => {
        ls('activeUID', id)
        ls('activeUName', user)
        
        router.push('/')
    }
    
    const showUsers = () =>{
        if(loadingUsers){
            return users.map((user)=>{
                return( <div onClick={()=> {selectUser(user.id, user.user)}} className="login-user_user-box" key={user.id}>
                <Image alt="" className="login-user_user-img" src={require("/public/img/UiFace.jpg").default} width={125} height={125} />

                <div className="login-user_user-name" >{user.name}</div>

            </div>)
            })
        }
    }
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
