import React from "react";
import "./contact.css";
import 'animate.css';
import linkedin from '/Users/kennychen/codebase/my-app/src/img/linkedinLogo.png';
import github from '/Users/kennychen/codebase/my-app/src/img/githubLogo.png';
import mail from '/Users/kennychen/codebase/my-app/src/img/mailLogo.png'
import SpecificLogo from "../../components/contactLogo/contactLogo";


export default function Contact(){
    return(
        <div className="wrapper">
            <div id="Contact" className="animate__animated animate__fadeInLeft">
                <div id="title" className="contactTitle">contact</div>
            </div>
            <div className="dot7"></div>
            <div className="dot8"></div>
            <div className="dot9"></div>
            <SpecificLogo 
                className='linked'
                link="https://kennywchen.github.io/mentored-fa22-rampup/"
                src={linkedin}
            />
            <SpecificLogo 
                className="github"
                link="https://github.com/kennywchen"
                src={github}
            />
            <SpecificLogo 
                className="mail"
                link="mailto:kenche090@berkeley.edu"
                src={mail}
            />
        </div>
    )
}
