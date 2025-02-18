import React from 'react';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import "./Events.scss";

const nextEvent = {
    name: 'Churrasco do Herbert',
    date: '22 de Fevereiro de 2025',
    time: '14:00'
};

function Events() {
    return (
        <div className='events-container'>
            <h2>Próximo Evento</h2>
            <div className='event-card'>
                <CalendarOutlined className='event-icon' />

                <div className='event-info'>
                    <h3>{nextEvent.name}</h3>
                    <p><ClockCircleOutlined /> {nextEvent.date} - {nextEvent.time}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Events;
