import React from 'react';
import '../styles/calendar.scss';

function Calendar() {
    return (
        <div className="container">
            <iframe 
                src="https://calendar.google.com/calendar/embed?src=ba3aa9d018b42cce70d388c390db0441ec104325437f05f6cb50f580421a4249%40group.calendar.google.com&ctz=America%2FSao_Paulo" 
                className="calendar-iframe" 
            ></iframe>
        </div>
    );
}

export default Calendar;
