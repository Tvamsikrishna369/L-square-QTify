import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import Section from "./components/Section/Section"
import {fetchTopAlbums} from "./api/api"

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);

  const generateTopAlbumSongs=async()=>{
    try{
      const res = await fetchTopAlbums();
      setTopAlbumSongs(res);
    }
    catch(error){
      console.log(error)
      return null
    }
  }

  useEffect(()=>{
    generateTopAlbumSongs();
  },[])

  return (
    <div className="App">

      <Navbar/>
      <Hero />
      
      {/* <Section/> */}
      <div className={StyleSheet.sectionWrapper}>
        <Section type = "album" title="Top Albums" data={topAlbumSongs}/>
      </div>

    </div>
  );
}

export default App;
