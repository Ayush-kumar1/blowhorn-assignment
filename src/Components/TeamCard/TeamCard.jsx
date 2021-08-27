import React from 'react'
import "./TeamCard.css";
import people1 from "../../Images/people1.jpg";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function TeamCard({bgcolor,image,name,role}) {
    return (

        <div className="team-card-content">
        <div className="team-card" style={{backgroundColor:bgcolor}}>
            <img className="team-card-img" src={image} alt="" />
        </div>
        
        <h4 className="details">{name}</h4>
        <h4 className="details role">{role}</h4>

        <div>
        <TwitterIcon/>
         <GitHubIcon style={{marginLeft:"1rem"}}/>
        </div>
         
        </div>
    )
}

export default TeamCard
