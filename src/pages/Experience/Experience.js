import React from "react";
import "./Experience.css"
import 'animate.css'
import axios from "axios";
import ExperienceItem from "../../components/experienceItem/experienceItem";

export default function Experience(){

    const [exper, setExper] = React.useState(null);
    async function fetchData() {
        const res = await axios.get(
            "https://api.airtable.com/v0/appFLXHW5lyngy540/Experiences?maxRecords=10&view=Grid%20view",
          {
            headers: {
              authorization: `Bearer keyBG2jWmGUriOsxD`,
            },
          }
        );
        console.log(res.data);
        setExper(res.data.records);
    }

    React.useEffect(() => {
        fetchData();
      }, []);
    
    if (!exper) {
    return <div>Loading...</div>;
    }

    return(
        <div>
            <div id="Experience" className="text">
                <div id="title" className="animate__animated animate__fadeInLeft">experiences</div>
                <div id="resume" className="animate__animated animate__fadeInLeft">  
                    {exper.map((record) => (
                        <ExperienceItem key={record.id} date={record.fields.date} role={record.fields.role}/>
                    ))}
                </div>
            </div>
            <div className="dot3"></div>
            <div className="dot4"></div>
        </div>
    )
}
