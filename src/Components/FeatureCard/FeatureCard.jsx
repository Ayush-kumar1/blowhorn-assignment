import React from "react";
import "./FeatureCard.css";

function FeatureCard({ CardImage, heading, detail1, detail2 }) {
  return (
    <div className="feature-card">
      <div className="feature-logo">{CardImage}</div>

      <h3>{heading}</h3>
      <h4>{detail1}</h4>
      <h4 className="details">{detail2}</h4>
    </div>
  );
}

export default FeatureCard;
