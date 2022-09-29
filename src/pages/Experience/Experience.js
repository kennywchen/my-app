import React from "react";
import "./Experience.css"
import 'animate.css'


export default function Experience(){
    return(
        <div>
            <div id="Experience" className="text">
                <div id="title" className="animate__animated animate__fadeInLeft">experiences</div>
                <div id="resume" className="animate__animated animate__fadeInLeft">
                        <div id="item">
                            <div id="date">fa'22</div>
                            <div id="role">mentored developer @ berkeley codebase</div>
                            <hr id="line"></hr>
                        </div>
                        <div id="item"> 
                            <div id="date">sp'21 - su'22</div>
                            <div id="role">research assistant @ stanford univeristy, <br></br>department of structural biology</div>
                            <hr id="line"></hr>
                        </div>
                        <div id="item">
                            <div id="date">su'21</div>
                            <div id="role">student @ uci cosmos summer program</div>
                            <hr id="line"></hr>
                        </div>
                        <div id="item">
                            <div id="date">sp'20</div>
                            <div id="role">editor in chief @ "The Best Algebra 2/Pre-Calculus Book Ever"</div>
                        </div>
                </div>
            </div>
            <div className="dot3"></div>
            <div className="dot4"></div>
        </div>
    )
}
