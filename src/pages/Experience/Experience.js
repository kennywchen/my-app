import React from "react";
import "./Experience.css"
import 'animate.css'
import axios from "axios";
import ExperienceItem from "../../components/experienceItem/experienceItem";

export default function Experience(){

    const [expr, setExpr] = React.useState(null);
    async function fetchData() {
        const res = await axios.get(
            "https://api.airtable.com/v0/appFLXHW5lyngy540/Experiences?maxRecords=3&view=Grid%20view",
          {
            headers: {
              authorization: `Bearer keyBG2jWmGUriOsxD`,
            },
          }
        );
        console.log(res.data);
        setExpr(res.data.records);
    }

    React.useEffect(() => {
        fetchData();
      }, []);
    
    if (!expr) {
    return <div>Loading...</div>;
    }

    return(
        <div>
            <div id="Experience" className="text">
                <div id="title" className="animate__animated animate__fadeInLeft">experiences</div>
                <div id="resume" className="animate__animated animate__fadeInLeft">
                        
                        {expr.map((record) => (
                            <ExperienceItem key={record.id} props={record.fields}/>
                        ))}
                            
                        {/* date="fa'22" */}
                        {/* role="mentored developer @ berkeley codebase" */}
                        
                        <div id="item"> 
                            <div id="date">sp'21 - su'22</div>
                            <div id="role">research assistant @ stanford univeristy, <br></br>department of structural biology</div>
                            <hr id="line"></hr>
                        </div>
                        <ExperienceItem
                            date="su'21"
                            role="research student @ uci cosmos summer program"
                        />
                        <ExperienceItem
                            date="sp'20"
                            role="editor in chief @ 'The Best Algebra 2/Pre-Calculus Book Ever'"
                        />
                </div>
            </div>
            <div className="dot3"></div>
            <div className="dot4"></div>
        </div>
    )
}
