import { useEffect, useState, useRef } from 'react';
import HeroImages from "./backgroundImage.webp"; // Correctly import the image
import "./RightSide.css"; // Import CSS file
import DownloadIcon from "./download.png";
import AboutMe from '../About Me/AboutMe';
import Skills from '../Skills/Skills';
import Resume from "./SiddhantResume.pdf"
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

export default function RightSide(props) {
    const [heading, setHeading] = useState("Hi, I am Siddhant");
    const [cvorPortfolio, setCvorPortfolio] = useState(true);
    const [animate, setAnimate] = useState(true);
    

    useEffect(() => {
        const interval = setInterval(() => {
            // Trigger animation
            setAnimate(false);
            setTimeout(() => {
                // Change text and toggle cvorPortfolio after the fade-out is done
                setHeading((prevHeading) => 
                    prevHeading === "Hi, I am Siddhant" ? "I am a Full Stack Developer" : "Hi, I am Siddhant"
                );
                setCvorPortfolio((prevState) => !prevState); // Toggle the cvorPortfolio state
                
                setAnimate(true); // Restart animation
            }, 5000); // Wait for the fade-out duration (5 seconds)

        }, 10000); // Total duration of the cycle (10 seconds)

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${HeroImages})`, // Use backticks for template literals
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex", // Use flexbox
        alignItems: "center", // Vertically center the content
        textAlign: "start",
        fontFamily: '"Playfair Display", Georgia, serif', // Set font family
        fontSize: "30px",
        color: "black",
        padding: "0 20px" // Optional: Add some padding to the left
    };

    return (
        <>
        <div className="RightContainer">
            <div className="HeroContainer" id="home">
            <div style={sectionStyle}>
                {/* Content of the div can go here */}
                <div className={`textContainer ${animate ? 'animate' : ''}`}>
                    <h1>{heading}</h1>
                    {cvorPortfolio ? (<p className="gradientText">I can help your business to,<br/>Get online and grow fast.</p>) : (<p className="gradientText">Showcasing my journey,<br/>Explore my latest projects from the link below.</p>)} 
                    
                    <a href={Resume} download="SiddhantResume.pdf" className="defaultButton noLinkStyle">
                                {cvorPortfolio ? "Download CV" : "View Portfolio"} 
                                <img src={DownloadIcon} alt="Download" className="buttonIcon" />
                            </a>
                </div>
                </div>
               
            </div>
            <AboutMe ref={props.aboutRef}/>
            <Skills/>
            <Education/>
            <Contact/>
            </div>
        </>
    );
}
