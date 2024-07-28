import React, { useEffect } from "react";
import "./AboutMe.css";
import CodeIcon from "./code.png";
import ComputerIcon from "./computer.png";
import MobilePhone from "./mobile-phone.png";
import BlockchainIcon from "./blockchain.png";

export default function AboutMe(props) {
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

  return (
    <div className="AboutMe" ref={props.ref}>
      <h5 id="about">About me</h5>
      <h1 className="AboutMeHeading">WHO AM I?</h1>
      <p><b>Hi, I am Siddhant Sharma.</b> I am a full-stack developer based in Bangalore, India, with extensive experience in creating dynamic and responsive web applications. Over the years, I have had the privilege of helping multiple businesses establish and enhance their online presence, driving digital transformation across various industries.</p>
      <p>My expertise spans from front-end technologies like React and Bootstrap to backend systems using Express.js and Django ensuring seamless and efficient user experiences. I also specialize in data management and business analysis, leveraging my skills to optimize operations and support strategic decision-making. Whether working on cutting-edge startups or consulting them, I am passionate about delivering innovative solutions and fostering growth through technology.</p>
      <div className="servicesContainer">
        <div className="services firstBlock">
          <img src={CodeIcon} className="servicesIcons" alt="Web Design" />
          <p>Web Design</p>
        </div>
        <div className="services secondBlock">
          <img src={ComputerIcon} className="servicesIcons secondBlock" alt="Software" />
          <p>Software</p>
        </div>
        <div className="services thirdBlock">
          <img src={MobilePhone} className="servicesIcons thirdBlock" alt="Application" />
          <p>Application</p>
        </div>
        <div className="services fourthBlock">
          <img src={BlockchainIcon} className="servicesIcons fourthBlock" alt="BlockChain" />
          <p>BlockChain</p>
        </div>
      </div>
      <div className="banner">
        <p>I am pleased to inform you that I have successfully completed over 50 projects.</p>
        <div className="hiremeButton" onClick={event =>  window.location.href='https://calendly.com/sid03-sharma/30min?month=2024-07'}>Hire Me!</div>
      </div>
    </div>
  );
}
