import React from 'react';
import { col, Row, container,card} from 'react-bootstrap';
import Header from './Header';
import { FaClock, FaUtensils, FaWifi,FaTshirt,FaParking,FaCocktail,FaSnowflake } from 'react-icons/fa';


const HotelService = () => {
    return (
        <>
            <container className="mb-2">
                <header title={"Our Services"} />

                <Row>
                    <h4 className="text-center">Services at<span className="hotel-color">The Lotus Heaven </span>Hotel
                        <span className="gap-2">
                            <FaClock /> - 24 Hour Front Desk
                        </span>
                    </h4>
                </Row>
                <hr />
                <Row xs={1} mb={2} lg={3} className="g-4 mt-2">
                    <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaWifi /> Wi-Fi
                                </card.Title>
                                <card.Text>Stay Connected with high-speed internet access.</card.Text>
                            </card.Body>
                        </card>
                    </col>

                    <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaUtensils/> Breakfast
                                </card.Title>
                                <card.Text>Start your day with a Delicious breakfast buffet.</card.Text>
                            </card.Body>
                        </card>
                    </col>
                    <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaClock /> 24/7 Room Service
                                </card.Title>
                                <card.Text>Enjoy our round-the-clock room service for your convenience.</card.Text>
                            </card.Body>
                        </card>
                    </col>
                       <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaTshirt /> Laundry
                                </card.Title>
                                <card.Text>Keep your clothes clean and fresh with our laundry services.</card.Text>
                            </card.Body>
                        </card>
                    </col>
                    <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaParking /> Parking
                                </card.Title>
                                <card.Text>Secure parking space for your vehicles.</card.Text>
                            </card.Body>
                        </card>
                        </col>
                           <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaCocktail /> Mini-bar
                                </card.Title>
                                <card.Text>Enjoy a refreshing drink or snack from our in-room mini-bar.</card.Text>
                            </card.Body>
                        </card>
                    </col>
                       <col>
                        <card>
                            <card.Body>
                                <card.Title className="hotel-color">
                                    <FaSnowflake /> Air conditioning
                                </card.Title>
                                <card.Text>Stay Cool and comfortable with our air conditioning system.</card.Text>
                            </card.Body>
                        </card>
                    </col>

                </Row>


            </container>
        </>
    )
}
export default HotelService