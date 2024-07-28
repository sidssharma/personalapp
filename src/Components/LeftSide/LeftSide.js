import "./LeftSide.css"
import profileImage from "./check.jpg"
import { useEffect } from "react";
export default function LeftSide(props){
    useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash.substring(1); // Remove the '#' character
          if (hash) {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        };
    
        // Handle the initial load
        handleHashChange();
    
        // Add event listener for hash changes
        window.addEventListener("hashchange", handleHashChange);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener("hashchange", handleHashChange);
        };
      }, []);
    
      const scrollToSection = (sectionId) => {
        window.location.hash = sectionId;
      };
    return(
        <>
        <div className="leftSideContainer">
            <div className="profileImageContainer">
                <img src={profileImage} className="profileImageContainerImage"></img>
            </div>
            <p className="textStyle">Siddhant Sharma</p>
            <p className="textStyle4"><b>FULL STACK DEVELOPER</b></p>
            <p className="textStyle2" onClick={() => scrollToSection('home')}>HOME</p>
            <p className="textStyle2" onClick={() => scrollToSection('about')}>ABOUT</p>
            <p className="textStyle2" onClick={() => scrollToSection('skills')}>SKILLS</p>
            <p className="textStyle2" onClick={() => scrollToSection('education')}>EDUCATION</p>
            <p className="textStyle2" onClick={() => scrollToSection('contact')}>CONTACT</p>

        </div>
        </>
    )
}