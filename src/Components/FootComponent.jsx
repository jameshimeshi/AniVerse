import { Link } from "react-router-dom";

const FootComponent=()=>{
    return (
        <>
        <footer className="bg-gray-900 text-white text-center p-4 mt-20">
  <Link 
    to="/about" 
    className="text-white underline hover:text-amber-300 transition"
  >
    <button className="bg-indigo-600 rounded-2xl mt-5 p-2 shadow-2xl hover:bg-indigo-700 cursor-pointer transform transition duration-300 hover:scale-105">ABOUT THIS PROJECT</button>
  </Link>
</footer>
        </>
    )
}

export default FootComponent;