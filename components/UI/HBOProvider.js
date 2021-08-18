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
    const [watchList, setWatchList] = useState(ls.get('myList'));

    const thumbTypes= ['large-v', 'small-v', 'small-h']

    const addToList = (video) =>{
        let myList;

        if(ls('myList') !== null){
            myList = ls.get('myList');
            myList.push(video);
            ls.set('myList', myList)
            setWatchList(myList)
        } else {
            ls.set('myList', [video])
        }
    }

    const removeFromList = (videoId) =>{
       let myList = ls('myList');
       myList = myList.filter((item)=> item.mediaId !== videoId)
       ls.set('myList', myList)
       setWatchList(myList)
    }

    return (
        <StateContext.Provider
            value={{
                user, createUserAction,
                sideNavOpen, setSideNavOpenAction,
                accountModalOpen, setAccountModalOpenAction,
                searchOpen, setSearchOpenAction,
                thumbTypes, 
                removeFromList, addToList,
                watchList, setWatchList
            }} >
            {children}
        </StateContext.Provider>
    )
}