import React, {useContext, useState} from 'react'


export const StateContext = React.createContext();

export function useSateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState('');
    const createUserAction = (e) =>{
        setUser(e.target.value)
        console.log(user)

    }

    return(
        <StateContext.Provider
        value={{user, createUserAction}}>
            {children}
            </StateContext.Provider>
    )
}