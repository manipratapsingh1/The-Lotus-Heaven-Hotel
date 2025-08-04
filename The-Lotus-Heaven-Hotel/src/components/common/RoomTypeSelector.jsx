import React, { useEffect } from 'react'
import { getRoomTypes } from '../utils/Apifunction'

const RoomTypeSelector = ({ handleRoomInputsChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = usestate([""])
    const [showRoomTypeInput, setShowNewRoomTypesInput] = useState(false)
    const [newRoomTypes, setNewRoomTypes] = useState("")

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data);
        })
    }, [])

    const handleNewRoomInputChange = (e) => {
        setNewRoomTypes(e.target.value);
    }

    const handleAddNewRoomType = async (e) => {
        if (newRoomTypes !== "") {
            setRoomTypes([...roomTypes, newRoomTypes]);
            setNewRoomTypes("");
            setShowNewRoomTypesInput(false);
        }
    }
    return (
        <>
            {roomTypes.length > 0 && (
                <div>
                    <select
                        id='roomType'
                        name='roomType'
                        value={newRoom.roomType}
                        onChange={(e) => {
                            if (e.target.value === "Add new") {
                                setShowNewRoomTypesInput(true);
                            } else {
                                handleRoomInputsChange(e);
                            }
                        }}>
                        <option value={""}>Select Room Type</option>
                        <option value="Add new">Add new</option>
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {selectNewRoomTypesInput && (
                        <div>
                            <input
                                classname='form-control'
                                type='text'
                                placeholder='Enter new room type'
                                onChange={handleNewRoomInputChange}
                            />
                        <button classname='btn btn-hotel' type='button'onClick={handleAddNewRoomType}>Add</button>
                        </div>
                    )}
                 </div>
            )}
            
                </>

            )
        }

            export default RoomTypeSelector