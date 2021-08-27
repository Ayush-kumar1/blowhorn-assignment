import React from 'react'
import "./BlogCard1.css";
function BlogCard1({image,badge,heading1,heading2,detail1,detail2,color}) {
    return (
        <div style={{backgroundColor:color}} className="blog-card1">
            
           <img className="blog-card1-image" src={image} alt="" />
             
             <div className="blog-card1-badge">
                  <p style={{color:color,fontWeight:"900"}} className="blog-card1-badge-text">{badge}</p>
             </div>
            <h2 className="blog-card1-text">{heading1}</h2>
            <h2 className="details blog-card1-text">{heading2}</h2>
            <h6 className="details blog-card1-text">{detail1}</h6>
            <h6 className="details blog-card1-text">{detail2}</h6>
        </div>
    )
}

export default BlogCard1
