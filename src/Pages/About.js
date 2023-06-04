import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="home">
      <div className="about">
        <h2>Welcome to My Portfolio!</h2>
        <img src="/Assets/profile-picture.JPG" alt="Profile Pic" />
        <div className="summary">
          <p>I am a software developer with a background in Biology and a passion for learning and creating.</p>
        </div>
      </div>
    </div>
  );
}

export default About;