import React from 'react'
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer() {
    return (
        <div className="footer" id="footer">
            
            <div className="footer-content1">
                <a className="footer-link">About</a>
                <a className="footer-link">Blog</a>
                <a className="footer-link">Team</a>
                <a className="footer-link">Pricing</a>
                <a className="footer-link">Contact</a>
                <a className="footer-link">Terms</a>
            </div>

            <div className="footer-content1">
               <FacebookIcon style={{cursor:"pointer"}}/>
               <InstagramIcon style={{cursor:"pointer"}}/>
               <TwitterIcon style={{cursor:"pointer"}}/>
               <GitHubIcon style={{cursor:"pointer"}}/>
            </div>

            <p>@2021 SomeCompany,Inc. All right reserved</p>
        </div>
    )
}

export default Footer
