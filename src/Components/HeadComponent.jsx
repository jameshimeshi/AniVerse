import { useContext,useState } from "react";
import { WatchContext } from "../ContextStore/WillWatch";
import { useSelector } from "react-redux";
import logo from "../assets/LOGO_IMAGE.png"
import { Link } from "react-router-dom";

const HeadComponent=()=>{
    const {watchlist}=useContext(WatchContext);
    const starredAnime=useSelector((state)=>state.star.starredAnime)

    return (
    <div className="fixed top-0 left-0 w-full h-24 px-6 bg-white/10 backdrop-blur-md shadow-md z-50 flex justify-between items-center">
      <img
        src={logo}
        alt="Logo"
        className="ml-5 h-18 w-auto object-contain transform transition duration-400 hover:scale-130 cursor-pointer" 
      />
      <div className="flex items-center space-x-6 text-white text-2xl">
        <span>♡ {watchlist.length}</span>
        <span>☆ {starredAnime.length}</span>
      </div>
    </div>
  );
}

export default HeadComponent;