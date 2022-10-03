import React from "react";
import "./Home.css";
import 'animate.css';

export default function Home(){
    return(
        <div className="home">
            <div id="home" className="animate__animated animate__fadeInLeft home-section">
                <div className="intro anim-typewriter">hello!</div>
                <div id="name" className="anim-typewriter1">i'm kenny</div>
                <div id="bio" className="anim-typewriter2">i'm a freshman at uc berkeley studying</div>
                <div id="bio1" className="anim-typewriter3">computer science</div>
            </div>
            <div className="dot1"></div>
            <div className="dot2"></div>
        </div>
    )
}

