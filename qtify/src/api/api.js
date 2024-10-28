import axios from 'axios';


export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";

export const fetchTopAlbums=async()=>{
    try{
        // const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
        // console.log(res.data)
        return res.data;
    } catch(error){
        console.error("error", error)
        return null;
    }
}

export const fetchNewAlbums=async()=>{
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
        return res.data;
    } catch(error){
        return null;
    }
}

export const fetchSongs=async()=>{
    try{
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`)
        return res.data
    } catch(error){
        return null;
    }
}