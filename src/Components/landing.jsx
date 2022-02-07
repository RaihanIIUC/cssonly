import React from 'react';
import Navbar from './Header/Navbar';
import Restuarent from './Body/Restuarent/Restuarent';
import Identity from './Body/Restuarent/Hotel/Identity';
const landing = () => {
  return <div>
      <Navbar  />
      <Restuarent />
      <Identity />

      
  </div>;
};

export default landing;
