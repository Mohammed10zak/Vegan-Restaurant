import './style.css'
import Button from '../../sections/Button'
export default function Form () {
    return (
    <form className='form' id='form'>
        <div>
            <h3 className='form_title'>Reserve a seat</h3>
            <p className='form_desc'>Book A Table On Time</p>
            
        </div>
        <div className='form_content'>
        <div className='personal_info'>
            <input type="text" placeholder='Your Full Name' className='u_name'></input>
            <input type="text" placeholder='Your Phone Number' maxLength="13" className='ph_num'></input>
        </div>
        <div className='date_time'>
            <input type="date" id='date' placeholder='Select Date' className='date'></input>
            <input type="time" id='time' placeholder='Time Slot' className='time'></input>
            <input type="text" placeholder='Occupancy' className='occupancy'></input>
        </div>
        <div className='form_btn'>
        <Button myBtn="Book Now"/></div>
        </div>

    </form>
    )
}