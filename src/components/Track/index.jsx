import React from 'react';
import { Link } from 'react-router-dom';

const Index = ({track}) => {
  return (
    <div className='col-md-4 mb-4'>
        <div className='card shadow'>
            <div className='card-body'>
                <h5>{track.artist_name}</h5>
                <p className="card-text">
                    <strong>Track : {track.track_name}</strong>
                    <br />
                    <strong>Album : {track.album_name}</strong>
                </p>
                <Link to={`lyrics/track/${track.track_id}`} className='btn btn-secondary w-100'>View Lyrics</Link>
            </div>
        </div>
    </div>
  )
}

export default Index;