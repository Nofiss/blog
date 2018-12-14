import React, { Component } from 'react';
import '../css/Home.css';
import logo from '../image/blog.jpg';
import LiveClock from './LiveClock.js';

class Home extends Component {
    render() {
        return (
            <div>
                <LiveClock />
                <h1 className="titleHome">Questo è il mio blog</h1>
                <img src={logo} alt="logo" className="imgHome" />
            </div>
        )
    }
}

export default Home;