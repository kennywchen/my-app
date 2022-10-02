import React from "react";

export default function SpecificLogo(props){
    return(
        <a href={props.link}><img className={props.className} src={props.src} alt="contact logo"/></a>
    )
}