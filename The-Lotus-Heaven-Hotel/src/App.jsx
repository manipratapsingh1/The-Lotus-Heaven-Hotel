import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddRoom from './components/room/Addroom';
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ExistingRooms from './components/room/ExistingRooms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import EditRoom from './components/room/EditRoom';
import Navbar from './components/navbar/Navbar';
import RoomListing from './components/room/RoomListing';
import Admin from './components/admin/Admin';



function App() {
  return <>
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:roomTd" element={<EditRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/browse-all-rooms" element={<RoomListing />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

      </Router>
      <footer />
    </main>
  </>
}
export default App
