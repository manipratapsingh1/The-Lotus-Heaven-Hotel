import React,{useState,useEffect} from 'react';
import{getRoomById ,updateRoom} from "../utils/Apifunction";
import { useParams, Link } from 'react-router-dom';
import RoomTypeSelector from './RoomTypeSelector';
import { useNavigate } from 'react-router-dom';


const EditRoom = () => {
       const [Room, setRoom] = useState({
            photo: null,
            roomType: "",
            roomPrice: "",
        });
    
        const [imagePreview, setImagePreview] = useState("");
    
        const [successMessage, setSuccessMessage] = useState("");
        const [errorMessage, setErrorMessage] = useState("");

const { roomTd } = useParams();

 const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setRoom({ ...Room, photo: selectedImage });
        setImagePreview(URL.createObjectURL(selectedImage));
    }

const handleInputChange = (event) => {
    const{name,value}= event.target;
    setRoom({...Room,[name]:value});
}


useEffect(() => {
    const fetchRoom = async () => {
        try {
            const roomData = await getRoomById(roomTd);
            setRoom(roomData);
            setImagePreview(roomData.photo);
        } catch (error) {
            console.error(error);
        }
    };
    fetchRoom();
}, [roomTd]);




const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const success = await updateRoom(Room.roomId, Room);
        if (success.stauts === 200) {
            setSuccessMessage("Room updated successfully.");
            const updatedRoomData = await getRoomById(Room.roomId);
            setRoom(updatedRoomData);
            setImagePreview(updatedRoomData.photo);
            setErrorMessage("");
           
        } else {
            setErrorMessage("Failed to update the room. Please try again.");
        }
    } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
    }
}

  return (
    <>
                <div classname="container, mt-5 mb-5">
                    <h3 classname="text-center mb-5 mt-5">Edit Room</h3>
                    <div classname="row justify-content-center">
                        <div classname="col-md-8 col-lg-6">
                            <h2 classname="mt-5 mb-2">Add a New Room</h2>
                            {successMessage && (
                                <div classname="alert alert-success fade show">
                                    {successMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div classname="alert alert-danger fade show">
                                    {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div classname="mb-3">
                                    <label htmlFor="roomType" classname="form-label">
                                        Room Type</label>
                                    <div>
                                        <RoomTypeSelector
                                            newRoom={newRoom}
                                            setNewRoom={setNewRoom}
                                            handleRoomInputsChange={handleRoomInputChange}
                                        />


                                    </div>
                                </div>

                                <div classname="mb-3">
                                    <label htmlFor="roomPrice" classname="form-label">
                                        Room Price</label>
                                    <input
                                        classname="form-control"
                                        required
                                        id="roomPrice"
                                        type="number"
                                        name="roomPrice"
                                        value={newRoom.roomPrice}
                                        onchange={handleRoomInputChange}
                                    />

                                </div>

                                <div classname="mb-3">
                                    <label htmlFor="roomPhoto" classname="form-label">
                                        Room Photo</label>
                                    <input
                                        id="Photo"
                                        name="photo"
                                        type="file"
                                        classname="form-control"
                                        onChange={handleImageChange}
                                    />
                                    {imagePreview && (
                                        <img
                                            src={imagePreview}
                                            alt="Room Preview"
                                            style={{ maxWidth: "400px", maxHeight: "400px", marginTop: "10px" }}
                                            classname="mb-3"
                                        />
                                    )}
                                </div>

                                <div classname="d-grid gap-2 d-md-flex mt-2">
                                  <link to={"/existing-rooms"}className ="btn btn-outline-info ml-5">
                                  back
                                  </link>
                                  <button type="submit" className="btn btn-outline-warning">
                                    Edit Room
                                  </button>

                                </div>

                            </form>
                        </div>
                    </div>

                </div>


            </>
  )
}

export default EditRoom