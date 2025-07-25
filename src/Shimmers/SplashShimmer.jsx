import React from "react";

const SplashShimmer = () => {
  return (
    <div className="relative w-[70%] mx-auto h-[70vh] bg-black rounded-2xl shadow-2xl overflow-hidden animate-pulse">
      {/* Blurred Background */}
      <div className="absolute inset-0 w-full h-full bg-gray-800 opacity-60" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">
        {/* Titles */}
        <div className="text-center mb-4 space-y-2">
          <div className="h-6 w-48 bg-gray-700 rounded-md mx-auto" /> {/* Main title */}
          <div className="h-4 w-32 bg-gray-700 rounded-md mx-auto" /> {/* Japanese title */}
          <div className="h-4 w-40 bg-gray-700 rounded-md mx-auto" /> {/* Score/Rank */}
          <div className="h-3 w-28 bg-gray-700 rounded-md mx-auto" /> {/* Genres */}
        </div>

        {/* Cover Image Placeholder */}
        <div className="h-[50%] w-36 bg-gray-700 rounded-xl shadow-xl" />

        {/* Description Placeholder */}
        <div className="mt-6 w-full space-y-2 px-4">
          <div className="h-3 w-full bg-gray-700 rounded-md" />
          <div className="h-3 w-5/6 bg-gray-700 rounded-md" />
          <div className="h-3 w-4/6 bg-gray-700 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SplashShimmer;
