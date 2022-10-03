import React from "react";

export default function ExperienceItem(props){
    return(
        // <div id="item">
        //    <div id="date">fa'22</div>
        //    <div id="role">mentored developer @ berkeley codebase</div>
        //    <hr id="line"></hr>
        // </div>
        
        <div id="item">
            <div id="date">{props.date}</div>
            <div id="role">{props.role}</div>
            <hr id="line"></hr>
        </div>
    )
}