import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-gray-900 h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Aniverse v1.1</h1>
      <p className="text-lg text-white">
       A project to channel my creative side and my liking for anime.
       Loads of Features incoming in the future....
       Stay Tuned
      </p>
      <Link to='/'>
      <button className="bg-indigo-600 rounded-2xl mt-5 p-2 shadow-2xl hover:bg-indigo-700 cursor-pointer transform transition duration-300 hover:scale-105">HOME</button>
      </Link>
    </div>
  );
};

export default About;