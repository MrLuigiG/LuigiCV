import React from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>
      <section className="contact-section">
        <h2>Contact Information</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
      <section className="education-section">
        <h2>Education</h2>
        <p>University Name - Bachelor's Degree in Computer Science</p>
        <p>Graduation Year: 2022</p>
      </section>
      <section className="experience-section">
        <h2>Work Experience</h2>
        <p>Company Name - Web Developer</p>
        <p>Start Date: January 2022 | End Date: Present</p>
        <ul>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>HTML5, CSS3</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
