import React,{useState,lazy,Suspense} from 'react';
// import TeamCard from '../TeamCard/TeamCard';
import "./Team.css"
import people1 from "../../Images/people1.jpg";
import people2 from "../../Images/people2.jpg";
import people3 from "../../Images/people3.jpg";
import people4 from "../../Images/people4.jpg";
import people5 from "../../Images/people5.jpg";
import people6 from "../../Images/people6.jpg";
import people7 from "../../Images/people 7.jpg";
import people8 from "../../Images/people 8.jpg";

const TeamCard=lazy(()=>import("../TeamCard/TeamCard"));
function Team() {
    return (
        <div className="team">

            <div className="team-head-wrapper">
            <h4 className="team-heading1">OUR TEAM</h4>
            <h1>An incredible team of</h1>
            <h1 className="details">amazing individuals</h1>
            </div>

            <div className="team-card-wrapper">
                <Suspense fallback={<h1>Loading.....</h1>}>
                <TeamCard bgcolor="#9CA3AF" image={people1} name="Susan Peterson" role="CEO & Founder" />
                <TeamCard bgcolor="#FECACA" image={people2} name="Freddy Smith" role="Marketing Director" />
                <TeamCard bgcolor="#FDE68A" image={people3} name="Carl Jones" role="CTO" />
                <TeamCard bgcolor="#A7F3D0" image={people4} name="Tommy Barnes" role="Designer" />
                <TeamCard bgcolor="#BFDBFE" image={people5} name="Ron Jay" role="Senior Developer" />
                <TeamCard bgcolor="#BFDBFE" image={people6} name="Peter Parker" role="Web Developer" />
                <TeamCard bgcolor="#FBCFE8" image={people7} name="Natasha Romanoff" role="Chairperson" />
                <TeamCard bgcolor="#FDE68A" image={people8} name="Madison Beer" role="Assistant Director" />
                </Suspense>
            </div>

        </div>
    )
}

export default Team
