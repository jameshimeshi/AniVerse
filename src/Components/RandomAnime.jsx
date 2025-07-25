import React,{useState,useEffect} from "react";
import SplashShimmer from "../Shimmers/SplashShimmer";

export const RandomAnime=({random,loading})=>{

    if (loading) return <SplashShimmer/>

  if (!random) return null;

  return (
    <>
    <div className="relative w-[70%] mx-auto h-[70vh] bg-black rounded-2xl shadow-2xl overflow-hidden">
    {/* Blurred Background */}
    <img
      src={random.images.jpg.large_image_url}
      alt={random.title}
      className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
    />

    {/* Foreground Cover Image */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">
        <div className="text-center mb-4 space-y-1">
            <h1 className="text-3xl font-bold">{random.title}</h1>
            {random.title_japanese && <h2 className="text-md italic opacity-80">{random.title_japanese}</h2>}
            <p className="text-lg mt-2">
              ⭐ {random.score || "N/A"} &nbsp; | &nbsp; 📊 Rank #{random.rank || "N/A"}
            </p>
            <p className="text-sm text-gray-200">
              {random.genres.slice(0, 2).map((g) => g.name).join(" / ")}
            </p>
          </div>
      <img
        src={random.images.jpg.large_image_url}
        alt={random.title}
        className="h-[50%] w-auto object-cover rounded-xl shadow-xl transform transition duration-300 hover:scale-105"
      />
      <p className="mt-6 text-sm md:text-base text-center max-h-[120px] overflow-y-auto">
            {random.synopsis || "No description available."}
          </p>
    </div>
  </div>
    </>
  )
}

export default RandomAnime;