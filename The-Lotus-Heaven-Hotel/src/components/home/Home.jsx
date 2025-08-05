import React from 'react';
import { Link } from 'react-router-dom';
import HotelService from '../common/HotelService';
import MainHeader from '../Layout/MainHeader';
import Parallax from "../common/Parallax";
import RoomCarousel from '../common/RoomCarousel';

const Home = () => {
  return (
    <section>
      <MainHeader/>
      <div className="container">
        <RoomCarousel/>
        <Parallax/>
        <RoomCarousel/>
        <HotelService/>
        <Parallax/>
        <RoomCarousel/>

      </div>
    </section>
  );
}

export default Home
