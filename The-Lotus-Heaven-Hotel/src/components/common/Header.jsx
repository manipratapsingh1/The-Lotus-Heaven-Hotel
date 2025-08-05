import React from 'react';
import { Link } from 'react-router-dom';



const Header= () => {
    return(
        <header className="header">
            <div className="overlay"></div>
            <div className="conatainer">
                <h1 className="header-title text-center">{title}</h1>
            </div>

        </header>
    )
}

export default Header