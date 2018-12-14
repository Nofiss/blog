import React from 'react';
import Clock from 'react-live-clock';
import '../css/LiveClock.css'

class LiveClock extends React.Component {
    render() {
        return (
            <div className="clock">
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'EU/Europe'} />
            </div>
        )
    }
}

export default LiveClock
