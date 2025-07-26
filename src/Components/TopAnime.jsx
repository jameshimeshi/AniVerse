import { useState,useEffect } from "react";
import ListShimmer from "../Shimmers/ListShimmer";
import { WatchContext } from "../ContextStore/WillWatch";
import { useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addStar,removeStar } from "../reduxStore/starSlice";

const TopAnime=()=>{
      const [top,setTop]=useState([]);
      const {switchwatch}=useContext(WatchContext);
      const {watchlist}=useContext(WatchContext);

      const dispatch=useDispatch();
    const starredAnime=useSelector((state)=>state.star.starredAnime);
    const isStarred=(animeid)=>{
        return starredAnime.some((item)=>item.mal_id===animeid)
    }
    const toggleStar=(anime)=>{
        if(isStarred(anime.mal_id))
            dispatch(removeStar(anime.mal_id));
        else
            dispatch(addStar(anime));
    }

      useEffect(()=>{
        getData();
      },[])

      async function getData(){
        const response=await fetch("https://api.jikan.moe/v4/top/anime");
        const json=await response.json();
        setTop(json.data);
      }

      const inWatchlist=(animeid)=>{
        return watchlist.some((item)=>item.mal_id===animeid)
    }

      return(
        <>{top.length === 0 ? (
        <ListShimmer />
      ) : (top.sort((a,b)=>a.rank-b.rank).map((data,index)=>
      (<div key={index} className='bg-gray-700 w-full sm:w-10/12 lg:w-8/12 mx-auto mt-6 p-3 shadow-xl rounded-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
      <img src={data?.images?.jpg?.image_url} className='w-full sm:w-40 h-auto rounded-lg object-cover'></img>
            <div className="flex-1 h-full flex flex-col justify-center gap-4">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{data?.title}</h1>
                <span className="text-sm text-red-400">Rank #{data?.rank}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  <strong>⭐ Score:</strong> {data?.score || "N/A"}
                </p>
                <p className="text-sm">
                  <strong>🔥 Popularity:</strong> {data?.popularity || "N/A"}
                </p>
                <p className="text-sm">
                  <strong>🎭 Genres:</strong>{" "}
                  {data?.genres?.slice(0, 2).map((g) => g.name).join(", ") || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-amber-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-500 transition w-full sm:w-62" onClick={()=>{switchwatch(data)}}>
                {inWatchlist(data.mal_id) ? "REMOVE FROM WATCHLIST" : "ADD TO WATCHLIST"}
              </button>
              <button className="bg-pink-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-500 transition w-full sm:w-62" onClick={()=>{toggleStar(data)}}>
                {isStarred(data.mal_id) ? "REMOVE FROM FAVORITE" : "ADD TO FAVORITE"}
              </button>
            </div>
      </div>)))}
        </>
      )
}
export default TopAnime;