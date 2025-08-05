import React from "react";
import moment from "moment"

const BookingSummary =(booking,payment,isFormValid,onConfirm)=>{
const checkInDate = moment(booking.checkInDate)
const checkOutDate=moment(booking.checkOutDate)
const numOfDays = checkOutDate.diff(checkInDate,"days")
const[isBookingConfirmed,setIsBookingConfirmed]= useState(false)

    return(
        <div>

        </div>
    )
}
export default BookingSummary