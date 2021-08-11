import React, { useContext, useState } from 'react'


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

    const [accountModalOpen, setAccountModalOpenAction] = useState(false);
    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    const [searchOpen, setSearchOpenAction] = useState(false);

    return (
        <StateContext.Provider
            value={{
                user, createUserAction,
                sideNavOpen, setSideNavOpenAction,
                accountModalOpen, setAccountModalOpenAction,
                searchOpen, setSearchOpenAction
            }} >
            {children}
        </StateContext.Provider>
    )
}