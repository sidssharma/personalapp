import "./Skills.css"
import Slider from "./Slider"
import { useEffect } from "react";
export default function Skills(props){
    
    return(

        <div className="Skills">
            <h5 id="skills">My Speciality</h5>
            <h1 className="SkillsHeading">MY SKILLS</h1>
            <p>I am a proficient web developer specializing in HTML, CSS, JavaScript, and React. I excel in creating dynamic and responsive user interfaces, leveraging my deep understanding of CSS for advanced styling and animations. My expertise in JavaScript allows me to develop interactive and efficient web applications. Additionally, I have solid experience with Python, which enhances my versatility in backend development and data management. My comprehensive skill set ensures the delivery of visually appealing and high-performing web solutions.</p>
            <div className="skillRow">
                <div className="skillColumn">
                    <h2>HTML5</h2>
                    <Slider width="86" sliderColor="SlateBlue"/>
                </div>
                <div className="skillColumn">
                    <h2>CSS3</h2>
                    <Slider width="90" sliderColor="red"/>
                </div>

            </div>
            <div className="skillRow">
                <div className="skillColumn">
                    <h2>JavaScript</h2>
                    <Slider width="90" sliderColor="Orange"/>
                </div>
                <div className="skillColumn">
                    <h2>jQuery</h2>
                    <Slider width="80" sliderColor="Violet"/>
                </div>

            </div>
            <div className="skillRow">
                <div className="skillColumn">
                    <h2>React</h2>
                    <Slider width="90" sliderColor="MediumSeaGreen"/>
                </div>
                <div className="skillColumn">
                    <h2>SQL</h2>
                    <Slider width="75" sliderColor="DodgerBlue"/>
                </div>

            </div>
            <div className="skillRow">
                <div className="skillColumn">
                    <h2>Node</h2>
                    <Slider width="75" sliderColor="Tomato"/>
                </div>
                <div className="skillColumn">
                    <h2>Express</h2>
                    <Slider width="75" sliderColor="BlueViolet"/>
                </div>

            </div>
            <div className="skillRow">
                <div className="skillColumn">
                    <h2>Python</h2>
                    <Slider width="90" sliderColor="Coral"/>
                </div>
                <div className="skillColumn">
                    <h2>Django</h2>
                    <Slider width="90" sliderColor="Crimson"/>
                </div>

            </div>
        </div>
    )
}