import React from 'react'
import "./Productivity.css";
import Work from "../../Images/Work.svg";
import Robot from "../../Images/robot.svg";

function Productivity() {
    return (
        <div className="productivity">

            <div className="productive-section1">
            <img className="productive-img" src={Work} alt="" />

            <div className="productive-section1-details">
              <h1>Boost Productivity</h1>
              <h4 >Build an atmosphere that creates productivity in</h4>
              <h4 className="details">your organisation and your company culture</h4>
              <p>🟠 Maximize productivity and growth </p>
              <p>🟠 Speed past your competition</p>
              <p>🟠 Learn the top techniques</p>

            </div>

            </div>


            <div className="productive-section1">
            
              <div className="productive-section1-details">
              <h1>Automated Tasks</h1>
              <h4>Save time and money with our revolutionary</h4>
              <h4 className="details">services.We are the leaders in the industry</h4>
              <p>🟠 Automated task management workflow </p>
              <p>🟠 Detailed analytics for your data</p>
              <p>🟠 Some awesome integrations</p>

            </div>

            <img className="productive-img" src={Robot} alt="" />

            </div>
           
        </div>
    )
}

export default Productivity
