import React from 'react'
import Navbar from '../../components/Layout/Navbar';
import Search from '../../components/Search/index';
import TrackList from '../../components/TrackList/Index';

const Index = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <TrackList/> 
    </>
  )
}

export default Index;