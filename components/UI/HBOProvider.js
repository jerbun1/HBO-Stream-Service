//IMPORTS
import React, { useContext, useState } from 'react'
import ls from 'local-storage'


export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext)
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('');
    const createUserAction = (e) => {
        setUser(e.target.value)
        console.log(user)
    }
    //Some React Hooks 
    const [accountModalOpen, setAccountModalOpenAction] = useState(false);
    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    const [searchOpen, setSearchOpenAction] = useState(false);
    const thumbTypes= ['large-v', 'small-v', 'small-h']
    const createdUser = ls('users');

    return (
        <StateContext.Provider
            value={{
                user, createUserAction,
                sideNavOpen, setSideNavOpenAction,
                accountModalOpen, setAccountModalOpenAction,
                searchOpen, setSearchOpenAction,
                thumbTypes, createdUser
            }} >
            {children}
        </StateContext.Provider>
    )
}