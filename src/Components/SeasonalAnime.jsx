import { useState,useEffect,useContext } from "react";
import { WatchContext } from "../ContextStore/WillWatch";
import { useDispatch,useSelector } from "react-redux";
import { addStar,removeStar } from "../reduxStore/starSlice";
import SeasonalAnimeShimmer from "../Shimmers/SeasonalAnimeShimmer";

export const SeasonalAnime=()=>{

    const [adata, setAdata] = useState([]);
    const [fildata, setFildata] = useState([]);
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
    const inWatchlist=(animeid)=>{
        return watchlist.some((item)=>item.mal_id===animeid)
    }

//FETCHING HERE******************
    useEffect(()=>{
    getData();
    },[])

   async function getData(){
   const data=await fetch("https://api.jikan.moe/v4/seasons/now");
   const json=await data.json();
   setAdata(json.data.slice(1));
   setFildata(json.data.slice(1))
}
//FETCHING END****************************

//BUTTON FUNCTIONS*****************
   function handleCLick(){
    const filter = adata.filter(item=>item.score>=8);
    setFildata(filter);
   }

   function handleSort(){
    const sorted=[...fildata].sort((a,b)=>b.score-a.score);
    setFildata(sorted);
   }

   function reset(){
    setFildata(adata);
   }
   //BUTTON FUNCTION ENDS HERE**************

   //SEARCH FUNCTION****************
   function handleChange(e){
    if(e.key==='Enter'){
    const value=e.target.value.toLowerCase().trim();
    if(value==="")
      setFildata(adata);
    else
    {
    const searchfilter=adata.filter(item=>item.title.toLowerCase().includes(value))
    setFildata(searchfilter);
    }}
   }
   //SEARCH FUNCTION ENDS HERE****************

    return (
        <>
         <div className="flex flex-wrap gap-4 w-[90%] mx-auto mt-6 mb-4 justify-start">
        <button className='bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 transition duration-200'
    onClick={handleCLick}
    >TOP RATED</button>
    <button className='bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 transition duration-200'
    onClick={handleSort}
    >SORT BY RATING</button>
    <button className='bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 transition duration-200'
    onClick={reset}
    >RESET</button>
    <input 
    type='text' 
    className='bg-yellow-50 border-2 border-indigo-600 rounded-2xl px-4 py-2 w-48 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black' 
    placeholder='Enter to Search'
    onKeyDown={handleChange}
    ></input>
    </div>
    {fildata.length===0?<SeasonalAnimeShimmer/>:(
      <div className="flex flex-wrap justify-center gap-6 w-[90%] mx-auto">
    {fildata.length > 0 && fildata.map(data=>
      (<div key={data?.title} className='flex basis-full sm:basis-[48%] md:basis-[31%] lg:basis-[23%] bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105'>
      <img src={data?.images?.jpg?.image_url} className='w-28 h-auto object-cover'></img>
      <div className="p-4 flex flex-col justify-between">
       <h2 className="text-md font-bold mb-1">{data?.title}</h2>
       <p className="text-sm">⭐ <span className="font-semibold">{data?.score?data?.score:"Not Aired yet"}</span></p>
       <p className="text-sm">📊 Rank: {data?.rank}</p>
       <p className="text-sm">❤️ Favorites: {data?.favorites}</p>
       <p className="text-sm">🎭 Genre: {data?.genres[0]?.name}</p>
       <div className="flex gap-2 mt-2">
      <button className="cursor-pointer"
      onClick={()=>{switchwatch(data)}}
      >{inWatchlist(data?.mal_id) ? "💗" : "♡"}</button>
      <button className="cursor-pointer"
      onClick={()=>{toggleStar(data)}}
      >{isStarred(data?.mal_id) ? "⭐" : "☆"}</button>
      </div>
      </div>
      </div>))}</div>)}
        </>
    )

}

export default SeasonalAnime;