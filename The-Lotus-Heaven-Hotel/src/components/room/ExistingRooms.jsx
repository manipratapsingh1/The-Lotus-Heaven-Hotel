import React, { use, useEffect } from 'react';
import{deleteRoom, getAllRooms} from '../utils/Apifunction';
import RoomFilter from '../common/RoomFilter';
import RoomsPaginator from '../common/RoomsPaginator';
import { FaEye,FaTrashAlt,FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import {col} from 'react-bootstrap';
import link from 'react-router-dom';

const ExistingRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(8);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [selectedRooms, setSelectedRoomType] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchRooms();
    }, []);


    const fetchRooms = async () => {
        setIsLoading(true);
        try {
            const result = await getAllRooms();
            setRooms(result);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        if (setSelectedRoomType === "") {
            setFilteredRooms(rooms);
        }
        else {
            const filtered = rooms.filter(room => room.roomType === setSelectedRoomType);
            setFilteredRooms(filtered);
        }
        setCurrentPage(1);

    }, [rooms, SelectedRoomType]);

    const handlepaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const handleDelete = async(roomId) => {
    try {
        const result = await deleteRoom(roomId);
        if(result === ""){
            setSuccessMessage("Room No ${roomId} deleted successfully");
            fetchRooms();
        }else{
            console.error("Error deleting room:", result);
        }
    } catch (error) {
        setErrorMessage(error.message);

    }
    setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
    }, 3000);
}

const calculateTotalPages = (filteredRooms, roomsPerPage) => {
    const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length;
    return Math.ceil(totalRooms / roomsPerPage);
}

const indexOfLastRoom = currentPage * roomsPerPage;
const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);


return (
    <>
        {isLoading ? (
            <p>Loading existing Rooms</p>
        ) : (
            <section className="mt-5 mb-5 container">
                <div className="d-flex justify-content-center mb-3 mt-5">
                    <h2>
                        Existing Rooms
                    </h2>

                </div>
                <col md={6} className="mb-3 mb-md-0">
                    <RoomFilter data={rooms} setFilteredData={setFilteredRooms} />

                </col>
                <table className="teble table-bordered table-hover">
                    <thead>
                        <tr className="text-center">
                            <th>ID</th>
                            <th>Room Type</th>
                            <th>Room Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRooms.map((room) => (
                            <tr key={room._id} className="text-center">
                                <td>{room._id}</td>
                                <td>{room.roomType}</td>
                                <td>{room.roomPrice}</td>
                                <td className="gap-2">
                                    <link to={`/edit-room/${room.id}`}>
                                   <span className="btn btn-info btn-sm">
                                    <FaEye/>
                                    </span>
                                    <span className="btn btn-warning btn-sm">
                                        <FaEdit/>
                                    </span>
                                    
                                    </link>
                                    <button className="btn btn-danger btn-sm"
                                    onClick={()=> handleDelete(room.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}



                    </tbody>

                </table>
                <RoomsPaginator
                    currentPage={currentPage}
                    totalPages={calculateTotalPages(filteredRooms, roomsPerPage, rooms)}
                    onPageChange={handlepaginationClick}

                />

            </section>
        )}
    </>
)
}

export default ExistingRooms