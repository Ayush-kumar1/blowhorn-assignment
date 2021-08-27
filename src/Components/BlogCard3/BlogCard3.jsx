import React from 'react'
import "./BlogCard3.css";

function BlogCard3({image,heading,detail1,detail2,badge,color}) {
    return (
        <div className="blog-card3">
            
        <img className="blog-card3-image" src={image}  />
          <br />

          <div style={{backgroundColor:color}} className="blog-card3-badge">
                  <p style={{color:"black",fontWeight:"900"}} className="blog-card1-badge-text">{badge}</p>
             </div>
          
         <h5 className="details blog-card3-text">{heading}</h5>
         <p className="details blog-card3-text2">{detail1}</p>
         <p className="details blog-card3-text2">{detail2}</p>
     </div>
    )
}

export default BlogCard3
