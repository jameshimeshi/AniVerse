import { createContext,useContext,useState } from "react";

export const WatchContext=createContext();

export const WillWatchProvider=({children})=>{
    const [watchlist,setWatchlist]=useState([]);

    const switchwatch=(anime)=>{
        setWatchlist((prev)=>{
            const exists=prev.some((item)=>item.mal_id===anime.mal_id);
            return exists?prev.filter((item)=>item.mal_id!==anime.mal_id)
            :[...prev,anime];
            
        });
    }
    return (
        <WatchContext.Provider value={{watchlist,switchwatch}}>
            {children}
        </WatchContext.Provider>
    )
}