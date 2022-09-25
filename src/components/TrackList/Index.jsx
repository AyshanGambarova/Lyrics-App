import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../Layout/Spinner';
import Track from '../Track/index';

const Index = () => {
  return (
    <Consumer>
      {value => {
        const {track_list,heading}=value;
        if (track_list === undefined || track_list.length === 0) {
          return <Spinner />
        } else {
          return (
            <>
            <h2 className='text-center mb-3 mt-3'>{heading}</h2>
            <div className='container'>
            <div className='row'>
                {track_list.map(item=>(
                  <Track key={item.track.track_id} track={item.track}/>
                ))}
              </div>
            </div>
            </>
          );
        }
      }}
    </Consumer>
  )
}

export default Index;