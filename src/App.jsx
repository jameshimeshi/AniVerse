import { useEffect, useState } from 'react'
import RandomAnime from './Components/RandomAnime';
import SeasonalAnime from './Components/SeasonalAnime';
import './App.css'
import TopAnime from './Components/TopAnime';
import HeadComponent from './Components/HeadComponent';
import FootComponent from './Components/FootComponent';

function App() {

  const [tab,setTab]=useState(0);
  const [random, setRandom]=useState(null);
  const [triggerNew, setTriggerNew]=useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getRanData();
  },[triggerNew])

  async function getRanData(){
     setLoading(true);
  const data=await fetch("https://api.jikan.moe/v4/random/anime");
  const json=await data.json();
 const anime = json.data;
  const rating = anime.rating ? anime.rating.toLowerCase() : "";

  if (rating.includes("r+") || rating.includes("rx") || rating.includes("hentai")) {
    return getRanData();
  }
    setRandom(anime);
    setLoading(false);
  }

  function fetchNewRandomAnime(){
    setTriggerNew(!triggerNew);
  }

   function tabswitchrandom(){
    setTab(1);
   }
    function tabswitchseasonal(){
    setTab(0);
   }
   function tabswitchTop(){
    setTab(2);
   }

  return (
    <>
    <div className='bg-black min-h-screen text-white'>

      <HeadComponent/>
        <div className="pt-24 flex justify-center">
              <div className="flex justify-center gap-4 flex-wrap w-[90%] mx-auto mt-6 mb-4">
      <div className="relative flex-1 min-w-[150px]">

         <button 
         className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold pr-10 hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 shadow-md flex justify-center items-center"
         onClick={tabswitchrandom}>Random</button>

        {tab === 0 && (
        <button onClick={fetchNewRandomAnime} 
         className="absolute right-2 top-1/2 -translate-y-1/2 text-white rounded-full p-1 w-7 h-7 flex justify-center items-center shadow-md hover:bg-red-400 hover:scale-140 cursor-pointer transition-transform"
        >
          {loading ? (<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>) : ( " ⟳ " )}
        </button>)}
     </div>
      <div className="w-full sm:w-1/3">
          <button className='w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 shadow-md' onClick={tabswitchseasonal}>
          Seasonal</button>
          </div>
            <div className="w-full sm:w-1/3">
          <button className='w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 shadow-md' onClick={tabswitchTop}>Top</button>
          </div>
          </div></div>
         {tab===0 && <SeasonalAnime/>}
         {tab===1 && <RandomAnime key={random?.mal_id} random={random} loading={loading}/>}
         {tab===2 && <TopAnime/>}
         <FootComponent/>
         
    </div>
    </>
  )
}

export default App
