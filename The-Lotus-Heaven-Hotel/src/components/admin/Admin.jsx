import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <section className="container mt-5" >
            <h2> Welcome to Admin panel</h2>
            <hr />
            <link to={"/add-room"}>
                Manage rooms
            </link>
        </section>
    )
}

export default Admin