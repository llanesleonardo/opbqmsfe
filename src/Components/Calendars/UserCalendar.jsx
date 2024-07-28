import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function UserCalendar() {

  const [value, setValue] = useState(new Date());

  const onChange = (nextValue)=> {
    console.log(nextValue);
    setValue(nextValue);
  }

  return (
    <div className='mt-10 px-5'>
      <Calendar onChange={onChange} value={value}  className='border-0'/>
    </div>
  )
}
