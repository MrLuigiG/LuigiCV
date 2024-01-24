import React, { FC } from "react";
import { Provider, lightTheme } from "@adobe/react-spectrum";

import "./App.css";

const App: FC = () => {
    const commonStyle: React.CSSProperties = {
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        margin: "20px auto",
    };

    return (
        <Provider theme={lightTheme}>
            {/* First Stage: Name and Bio */}
            <div id="first-stage" style={commonStyle}>
                <h1 style={{ color: "#4285f4" }}>Welcome to Luigi's CV</h1>
                <p style={{ color: "#555", marginBottom: "30px" }}>
                    Passionate developer with a love for clean code and innovative solutions.
                </p>
                {/* Add an image tag for your picture here */}
            </div>

            {/* Second Stage: Work Experience */}
            <div id="second-stage" style={commonStyle}>
                <div style={{ marginTop: "30px" }}>
                    <h2>Work Experience</h2>
                    {/* Add your work experience details here */}
                </div>
            </div>

            {/* Third Stage: Skills and Certifications */}
            <div id="third-stage" style={commonStyle}>
                <div style={{ marginTop: "30px" }}>
                    <h2>Skills</h2>
                    {/* Add your skills here */}
                </div>
                <div style={{ marginTop: "30px" }}>
                    <h2>Certifications</h2>
                    {/* Add your certifications here */}
                </div>
            </div>
        </Provider>
    );
};

export { App };
