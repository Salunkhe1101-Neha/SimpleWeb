import React from "react";
import './Header.css'

function Header()
{
    return(
       
       <div>
        <div className="header">

        </div>
        <div className="headerCon"> 
            <h1>Join our Coding family</h1>
            <p style={{color: "green", fontSize:"20px", padding:"20px",}}>If you would like to keep up on the latest posts and courses,
               come by and connect with us on the following links. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus ipsam voluptate. Placeat aliquid eaque, reprehenderit quod quam beatae eos natus vitae. Nemo unde reprehenderit harum, aut iste suscipit blanditiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quo corrupti dolore officia illo sint culpa facilis vitae sit dolorem odio deleniti quasi facere at, ipsum et animi nisi commodi!
            </p>
        </div>
        
        <div className="headerIcon"> 
            <i class="fa-brands fa-youtube"style={{color: "red", fontSize:"50px", padding:"20px",}}></i>
            <i class="fa-brands fa-linkedin"style={{color: "#127aca",fontSize:"50px",padding:"20px",}}></i>
            <i class="fa-brands fa-discord"style={{color: "\#3f45a2",fontSize:"50px",padding:"20px",}}></i>
            <i class="fa-brands fa-telegram"style={{color: "#116192",fontSize:"50px",padding:"20px",}}></i>
        </div>
       </div>
    )
}

export default Header