import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5173",
});

export async function addRoom(Photo, roomtype, roomprice) {
    const formData = new FormData();
    formData.append("Photo", Photo);
    formData.append("roomtype", roomtype);
    formData.append("roomprice", roomprice);

    const response = await api.post("/rooms/add/new-room", formData)
    if (response.status === 201) {
        return true;
    } else {
        return false;
    }
}

export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/get/roomtypes");
        return response.data;
    } catch (error) {
        throw new Error("Error fetching room types: " + error.message);
    }
}
export async function getAllRooms() {
    try {
        const result = await api.get("/rooms/all-rooms");
        return result.data;
    } catch (error) {
        throw new Error("Error fetching all rooms: " + error.message);

    }
}
export async function deleteRoom(roomId) {
    try {
        const result = await api.delete(`/rooms/delete/${roomId}`);
       return result.data;
    } catch (error) {
        throw new Error("Error deleting room: " + error.message);
    }
}

export async function updateRoom(roomTd,roomData){
    const formData = new FormData();
    formData.append("roomtype", roomData.roomtype);
    formData.append("roomPrice", roomData.roomPrice);
    formData.append("photo", roomData.photo);
    const response = await api.put(`/rooms/update/${roomTd}`);
    return response;
}

export async function getRoomById(roomId) {
    try {
        const response = await api.get(`/rooms/get/${roomId}`);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching room by ID: " + error.message);
    }
} 