import React from "react";
import './Footer.less'
function Footer()
{
    return(
        
       
       <div className="foot">
         <div className="footer">
            <div className="footerDiv">
                <img src="https://cdn.thecodehelp.in/hoktffneuv795jansa8z_bdff2537c7.svg" alt="" />
                 <div>CODE HELP</div>
            </div>
            <div className="footerDiv">
                <h1>MENU</h1>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Labs</a></li>
                </ul>

            </div>
            <div className="footerDiv">
                <h1>SERVICES</h1>
                <ul>
                    <li><a href="">Privacy Police</a></li>
                    <li><a href="">Terms of use</a></li>
                    <li><a href="">Refund And Cancellation Policy</a></li>
                </ul>

            </div>
            <div className="footerDiv">
                <h1>GET IN TOUCH</h1>
                <h2>codehelp@.gmail.com</h2>

            </div>
        </div>
       <hr />
        <div className="copywrite">
          Copyright@2023 Sorting Code Help TEchnologies Pvt LTd. All Rights Reserved.
        </div>
       </div>
    )
}

export default Footer