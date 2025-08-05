import React, { useEffect, useState } from "react";
import {getAllRooms} from "../utils/Apifunction"
import link from "react-router-dom"
import {card,carousel,col,container,Row} from "react-bootstrap"

const RoomCarousel = () => {
    const [rooms, setRooms] = useState([{id:"", roomType:"",roomPrice:"",photo:""}])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        getAllRooms().then((data) => {
            setRooms(data)
            setIsLoading(false)
        }).catch((error) => {
            setErrorMessage(error.message)
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return <div className="mt-5">Loading rooms...</div>
    }
    if (errorMessage) {
        return <div className="text-danger mb-5 mt-5">Error:{error}</div>
    }

    return (
        <section className="bg-light mb-5 mt-5 shadow">
            <Link to={"/browse-all-rooms"} className="hote-color text-center">
                Browse all rooms
            </Link>
            <container>
                <Carousel indicator={false}>
                    {[...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
                        <Carousel.Item key={index}>
                            <Row>
                                {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                                    <col key={room.id} className="mb-4" xs={12} md={6} lg={3}>
                                        <card>
                                            <link to={`/book-room/${room.id}`}>
                                            <card.Img
                                                variant="top"
                                                src={`data:image/png;base64,${room.photo}`}
                                                alt="Room Photo"
                                                className="w-100"
                                                style={{ height:"200px" }}
                                                />
                                            
                                            </link>
                                            <card.Body>
                                                <card.Title className="hotel-color">{room.roomType}</card.Title>
                                                <card.Title className="room-price">{room.roomPrice}</card.Title>
                                                <div className ="flex-shrink-0">
                                                    <link className="btn btn-sm btn-hotel" to={`/book-room/${room.id}`}>
                                                    Book Now
                                                    </link>
                                                </div>

                                            </card.Body>

                                        </card>
                                    </col>
                                ))}

                            </Row>
                        </Carousel.Item>
                    ))}

                </Carousel>

            </container>
        </section>
    )
}
export default RoomCarousel