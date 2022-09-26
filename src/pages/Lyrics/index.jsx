import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Layout/Navbar";
import Snipper from "../../components/Layout/Spinner";
import { Link, useParams } from "react-router-dom";

const Index = () => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const { trackId } = useParams();

  useEffect(() => {
    axios
      .get(
        `
        https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=c9099e83fb765f4580c3ff5b3bb36b22`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);
        console.log("lyrics", lyrics);
        return axios.get(
          `
          https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${trackId}&apikey=c9099e83fb765f4580c3ff5b3bb36b22`
        );
      })
      .then((res) => {
        setTrack(res.data.message.body.track);
        console.log("track", res);
      })

      .catch((err) => console.log(err));
  }, [trackId]);
  return (
    <>
    
      {
        track === undefined && lyrics === undefined ? (
          <Snipper />
        ) : (
          <>
            <Navbar />
            <h1 className="text-center mt-3 mb-3">Lyrics</h1>
            <div className="container">
              <p className="card shadow p-3">{lyrics?.lyrics_body}</p>
              <div>Album: {track?.album_name}</div>
              <div>Track: {track?.track_name}</div>
              <div>Artist: {track?.artist_name}</div>
              <div className="btn btn-dark mt-5">
                <Link className="text-decoration-none text-white" to={"/"}>Go Back</Link>
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default Index;
