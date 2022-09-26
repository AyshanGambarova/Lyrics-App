import React, { useEffect, useState } from "react";
import Track from '../../components/Track/index';
import axios from "axios";

const Index = () => {
  const [trackTitle, setTrackTitle] = useState("");
  const [queryTrackList, setQueryTrackList] = useState([]);

  const handleChange = (e) => setTrackTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=3&page=1&s_track_rating=desc&apikey=c9099e83fb765f4580c3ff5b3bb36b22`
      )
      .then((res) => {
        setQueryTrackList(res.data.message.body.track_list);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card shadow p-3">
              <h1 className="text-center">Search For a Song</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    name="trackTitle"
                    value={trackTitle}
                    placeholder="Song title..."
                    className="form-control w-100"
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-100">
                    Get Track Lyrics
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
            <div className="row  mt-5">
             {
              queryTrackList.map(item=>(
                <Track key={item?.track?.track_id} track={item?.track}/>
              ))
             }
            </div>

      </div>
    </>
  );
};

export default Index;
