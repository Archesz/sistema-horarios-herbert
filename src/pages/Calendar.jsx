import React from 'react';
import '../styles/calendar.scss';

function Calendar() {
    return (
        <div className="calendar-container">
            <iframe 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&showTz=0&src=YmEzYWE5ZDAxOGI0MmNjZTcwZDM4OGMzOTBkYjA0NDFlYzEwNDMyNTQzN2YwNWY2Y2I1MGY1ODA0MjFhNDI0OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cXFhZzE0NmhoYzhqbjFrYnNrZmJkZzE4Y3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23C0CA33&color=%237986CB&color=%23616161" 
                className="calendar-iframe" 
            ></iframe>
        </div>
    );
}

export default Calendar;
