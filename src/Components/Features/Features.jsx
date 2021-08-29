import React from 'react'
import "./Features.css";
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';
import ViewAgendaRoundedIcon from '@material-ui/icons/ViewAgendaRounded';
import ConfirmationNumberRoundedIcon from '@material-ui/icons/ConfirmationNumberRounded';
import FeatureCard from '../FeatureCard/FeatureCard';


function Features() {
    return (
        <div className="features" id="features">
            <h1>Our Features</h1>
            <h4>Check out our list of awesome features below</h4>
             
             <div className="feature-card-wrapper">
            <FeatureCard CardImage={<QuestionAnswerRoundedIcon style={{position:"relative",left:"10px",top:"10px"}} />} heading="Certifications" detail1="Each of our plan will provide you and" detail2="your team with certifications." />
            <FeatureCard CardImage={<NotificationsActiveRoundedIcon style={{position:"relative",left:"10px",top:"10px"}} />} heading="Notifications" detail1="Send out notifications to all your" detail2="customers to keep them engaged" />
            <FeatureCard CardImage={<StorageRoundedIcon style={{position:"relative",left:"10px",top:"10px"}} />} heading="Bundles" detail1="High quality bundles of awesome tools" detail2="to help you out" />
            <FeatureCard CardImage={<DeveloperModeRoundedIcon style={{position:"relative",left:"10px",top:"10px"}} />} heading="Developer Tools" detail1="Developer tools to help grow your" detail2="application and keep it up-to-date." />
            <FeatureCard CardImage={<ViewAgendaRoundedIcon style={{position:"relative",left:"10px",top:"10px"}} />} heading="Building Blocks" detail1="The right kind of building blocks to take" detail2="your company to the next level." />
            <FeatureCard CardImage={<ConfirmationNumberRoundedIcon style={{position:"relative",left:"10px",top:"10px"}} />} heading="Coupons" detail1="Coupons system to provide special" detail2="offers and discounts to your app." />
            </div>
       
       
        </div>
    )
}

export default Features
