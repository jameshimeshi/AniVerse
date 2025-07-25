const SeasonalAnimeShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-[90%] mx-auto mt-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex basis-full sm:basis-[48%] md:basis-[31%] lg:basis-[23%] bg-gray-900 rounded-xl shadow-md overflow-hidden animate-pulse"
          style={{ minHeight: '160px' }} // approx same height as your cards
        >
          {/* Image Placeholder */}
          <div className="w-28 bg-gray-700" />

          {/* Content Placeholder */}
          <div className="flex-1 p-4 flex flex-col justify-between gap-3">
            <div className="h-6 bg-gray-700 rounded w-3/4" /> {/* Title */}
            <div className="h-4 bg-gray-700 rounded w-1/4" /> {/* Score */}
            <div className="h-4 bg-gray-700 rounded w-1/3" /> {/* Rank */}
            <div className="h-4 bg-gray-700 rounded w-1/2" /> {/* Favorites */}
            <div className="h-4 bg-gray-700 rounded w-1/3" /> {/* Genre */}

            {/* Buttons */}
            <div className="flex gap-2 mt-2">
              <div className="h-8 w-8 bg-gray-700 rounded-full" />
              <div className="h-8 w-8 bg-gray-700 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonalAnimeShimmer;
