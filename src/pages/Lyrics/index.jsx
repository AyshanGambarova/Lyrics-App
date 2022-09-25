import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../components/Layout/Navbar';
import { useParams } from 'react-router-dom';



const Index = () => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const { trackId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId
        }&apikey=c9099e83fb765f4580c3ff5b3bb36b22`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${trackId
        }&apikey=c9099e83fb765f4580c3ff5b3bb36b22`
        );
      })
      .then(res=>{
        console.log(res);
      })
     
      .catch((err) => console.log(err));
  }, [trackId]);
  return (
    <>
    <Navbar/>
    <h1 className='text-center mt-3 mb-3'>Lyrics</h1>
    <div className='container'></div>
    </>
  )
}

export default Index;



