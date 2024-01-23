import React, { FC } from "react";
import { Provider as ProviderV3, View } from "@adobe/react-spectrum";

import "./App.css";

const App: FC = () => {
    return (
        <ProviderV3>
            {/* First Stage: Name and Bio */}
            <View UNSAFE_className="stage" id="first-stage">
                <h1 className="app-title">Welcome to Luigi's CV</h1>
                <p className="bio">Passionate developer with a love for clean code and innovative solutions.</p>
            </View>
            {/* Add an image tag for your picture here */}

            {/* Second Stage: Work Experience */}
            <View UNSAFE_className="stage" id="second-stage">
                <div className="section">
                    <h2>Work Experience</h2>
                    {/* Add your work experience details here */}
                </div>
            </View>

            {/* Third Stage: Skills and Certifications */}
            <View UNSAFE_className="stage" id="third-stage">
                <div className="section">
                    <h2>Skills</h2>
                    {/* Add your skills here */}
                </div>
                <div className="section">
                    <h2>Certifications</h2>
                    {/* Add your certifications here */}
                </div>
            </View>
        </ProviderV3>
    );
};

export { App };
