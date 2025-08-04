import React from "react";
import addRoom from "../utils/Apifunction";
import { useState } from "react";
const AddRoom = () => {
    const [newRoom, setNewRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: "",
    });

    const [imagePreview, setImagePreview] = useState("");

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRoomInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "roomPrice") {
            if (!isNaN(value)) {
                value.ParseInt(value);
            } else {
                value = "";
            }
        }
        setNewRoom({ ...newRoom, [name]: value });
    }

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setNewRoom({ ...newRoom, photo: selectedImage });
        setImagePreview(URL.createObjectURL(selectedImage));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await addroom(newRoom.photo, newRoom.roomType, newRoom.roomPrice);
            if (success !== undefined) {
                setSuccessMessage("A new room has been added successfully.");
                setNewRoom({
                    photo: null,
                    roomType: "",
                    roomPrice: "",
                });
                setImagePreview("");
                setErrorMessage("");
            } else {
                setErrorMessage("Failed to add the room. Please try again.");
            }
        } catch (error) {
            setErrorMessage(error.mesaage);
        }
        return (
            <>
                <section classname="container, mt-5 mb-5">
                    <div classname="row justify-content-center">
                        <div classname="col-md-8 col-lg-6">
                            <h2 classname="mt-5 mb-2">Add a New Room</h2>

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

                                <div classname="d-grid d-md-flex mt-2">
                                    <button classname="btn btn-outline-primary ml-5">
                                        Save Room
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>

                </section>


            </>
        )

    }
}
    export default Addroom