import React from 'react';
import { Link } from 'react-router-dom';


const MainHeader = () => {
    return(
        <header className="header-banner">
            <div className="overlay"></div>
            <div className="animated-texts overlay-conent">
                <h1>Welcome To <span className="hotel-color">The Lotus Heaven Hotel</span></h1>
            <h4>Experience the best Hospitality in Country</h4>
            </div>

        </header>
    )
}
export default MainHeader