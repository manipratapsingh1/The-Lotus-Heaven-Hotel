import axios from "axios";

export const api=axios.create({
    baseURL: "http://localhost:5173",
});   

export async function addRoom(Photo, roomtype,roomprice){
    const formData = new FormData();
    formData.append("Photo", Photo);
    formData.append("roomtype", roomtype);
    formData.append("roomprice", roomprice);

    const response = await api.post("/rooms/add/new-room",formData)
    if(response.status === 201){
        return true;
    }else{
        return false;
    }
}

export async function getRoomTypes(){
    try{
const response = await api.get("/rooms/get/roomtypes");
return response.data;
    }catch(error){
 throw new Error("Error fetching room types: " + error.message);
    }
}
export async function getAllRooms(){
    try{
const result=await api.get("/rooms/all-rooms");
return result.data;
    }catch(error){
        throw new Error("Error fetching all rooms: " + error.message);

    }
}