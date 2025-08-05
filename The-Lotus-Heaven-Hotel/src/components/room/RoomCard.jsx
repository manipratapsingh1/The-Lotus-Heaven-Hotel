import React from 'react';
import { col,card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RoomCard = ({ room }) => {
    return (
        <col key={room.id} className="mb-4" xs={12}>
            <card>
                <card.Body className="d-flex flex-wrap align-items-center">
               <div className="flex shrink-0 mr-3 mb-3 mb-md-0">
               <card.Img
               variant="top"
               src={`data:image/png;base64,${room.photo}`}
               alt="Room Photo"
               style={{width:"100%",maxwidth:"200px",height:"auto"}}/>
               </div>
               <div className="flex-grow-1 ml-3 px-5">
                <card.Title className="hotel-color">{room.roomType}</card.Title>
                <card.Title className="room-price">{room.roomPrice}</card.Title>
                <card.Text>Some room information goes here for the guest to read through</card.Text>
               </div>
               <div className="flex-shrink-0 ml-3">
                <link t0={`bookings/${room.id}`} className="btn btn-hotel btn-sm">
                 Book Now
                                
                </link>



               </div>

                </card.Body>


            </card>
        </col>
    )
}