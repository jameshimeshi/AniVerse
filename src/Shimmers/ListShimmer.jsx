const ListShimmer = () => {
  return (
    <div className="w-8/12 mx-auto mt-6 space-y-6">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-6 p-4 rounded-xl animate-pulse bg-gray-800 shadow-md"
          style={{ height: "12rem" }} // roughly 3x your card height
        >
          {/* Image placeholder */}
          <div className="bg-gray-700 rounded-lg w-36 h-full" />

          {/* Content placeholder */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="h-6 bg-gray-700 rounded w-3/5" /> {/* Title */}
            <div className="h-4 bg-gray-700 rounded w-1/4" /> {/* Rank */}
            <div className="space-y-2 mt-4">
              <div className="h-4 bg-gray-700 rounded w-2/3" />
              <div className="h-4 bg-gray-700 rounded w-1/2" />
              <div className="h-4 bg-gray-700 rounded w-1/3" />
            </div>
          </div>

          {/* Buttons placeholder */}
          <div className="flex flex-col gap-4">
            <div className="h-8 bg-gray-700 rounded-full w-24" />
            <div className="h-8 bg-gray-700 rounded-full w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListShimmer;
