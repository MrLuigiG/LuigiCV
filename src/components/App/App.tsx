import React, { FC } from "react";
import { Grid, lightTheme, Provider as ProviderV3, repeat, View } from "@adobe/react-spectrum";

import "./App.css";

const App: FC = () => {
    return (
        <ProviderV3 theme={lightTheme} colorScheme={"light"}>
            {/* First Stage: Name and Bio */}
            <View id="first-stage">
                <h1 className="App">Welcome to Luigi's CV</h1>
                <p className="bio">
                    Passionate developer with a love for clean code and innovative solutions. Let's build something
                    amazing together!
                </p>
                {/* Add an image tag for your picture here */}
            </View>

            {/* Second Stage: Work Experience */}
            <View id="second-stage">
                <div className="work-experience">
                    <h2>Work Experience</h2>
                    {/* Add your work experience details here */}
                </div>
            </View>

            {/* Third Stage: Skills and Certifications */}
            <View id="third-stage">
                <div className="skills">
                    <h2>Skills</h2>
                    {/* Add your skills here */}
                </div>
                <div className="certifications">
                    <h2>Certifications</h2>
                    {/* Add your certifications here */}
                </div>
            </View>
        </ProviderV3>
    );
};

export { App };
