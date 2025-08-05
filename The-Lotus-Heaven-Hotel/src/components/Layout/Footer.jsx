import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    let today = new Date();
    return (
        <footer className="by-dark text-light py-3 footer mt-lg-5">
            <container>
                <row>
                    <col xs={12} md={12} className="text-center">
                    <p className="mb-0">&copy; {today.getFullYear()} The Lotus Heaven Hotel</p>

                    </col>
                </row>
            </container>
        </footer>
    )
}