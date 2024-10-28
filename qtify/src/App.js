import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import Section from "./components/Section/Section"
import {fetchTopAlbums, fetchNewAlbums} from "./api/api"

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const[newAlbumSongs,setNewAlbumSongs]=useState([]);

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

  const generateNewAlbumSongs=async()=>{
    try{
      const res= await fetchNewAlbums();
    setNewAlbumSongs(res);
    }
    catch(error){
      console.log(error);
      return null;
    } 
  }

  useEffect(()=>{
    generateTopAlbumSongs();
    generateNewAlbumSongs()
  },[])

  return (
    <div className="App">

      <Navbar/>
      <Hero />
      
      <div className={StyleSheet.sectionWrapper}>
        <Section type = "album" title="Top Albums" data={topAlbumSongs}/>
        <Section type='album' title='New Albums' data={newAlbumSongs}/>
      </div>

    </div>
  );
}

export default App;
