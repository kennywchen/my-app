import React, {Fragment} from "react";
import "./Home.css"
import 'animate.css'


export default function Home(){
    return(
        <Fragment>
            <div className="home">
                <div id="home" className="animate__animated animate__fadeInLeft home-section">
                    <div id="intro">hello!</div>
                    <div id="name">i'm kenny</div>
                    <div id="bio">i'm a freshman at uc berkeley studying <br></br>computer science</div>
                </div>
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
            
        </Fragment>   
    )
}

