import React from "react";
import './Navbar.scss'

function Navbar() {
    return (
        <>
            <div className="nav1" >
                Hurry Up !! 1st Lecture of SUPRA Batch starts in 30 Days
            </div>

            <div className="navbar">
                <div className="navdiv">
                    <img src="https://cdn.thecodehelp.in/qdo970k2vrxj8kefd1zt_9520ff468a.svg" alt="" />
                </div>
                <div className="navdiv">
                    <a href="">About Us</a>
                    <a href="">Courses</a>
                    <a href="">Labs</a>
                    <a href="">Contact</a>
                </div>
                <div className="navdiv">
                    <button>Dashboard</button>
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar