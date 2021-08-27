import React from 'react'
import "./Home.css";
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Home() {
    return (
        <div className="home" id="home">
            <p className="home-heading1">Start Crafting Your</p>
            <p className="home-heading2">Next Great Idea</p>
            <p className="home-heading3">Simplifying the creation of landing pages,blog pages</p>
            <p className="home-heading4">applications pages and so much</p>
      
            <button className="home-button">Purchase Now</button>    
            <div className="home-button-badge">only $15/mo</div> 
            <p className="home-info">Learn More</p>
        </div>
    )
}

export default Home
