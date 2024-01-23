import React, { FC } from "react";
import { Grid, lightTheme, Provider as ProviderV3, repeat, View } from "@adobe/react-spectrum";
import { BackgroundColor } from "@react-types/shared";

import "./App.css";

const App: FC = () => {
    const baseColors = [
        "celery",
        "chartreuse",
        "yellow",
        "magenta",
        "fuchsia",
        "purple",
        "indigo",
        "seafoam",
        "red",
        "orange",
        "green",
        "blue",
    ];

    const colors: BackgroundColor["5"][] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 7; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor["5"]);
        }
    }

    return (
        <ProviderV3 theme={lightTheme} colorScheme={"light"}>
            {/* First Stage: Name and Bio */}
            <View paddingTop="size-400">
                <h1 className="App">Welcome to Luigi's CV</h1>
                <p className="bio">
                    Passionate developer with a love for clean code and innovative solutions. Let's build something
                    amazing together!
                </p>
                {/* Add an image tag for your picture here */}
            </View>

            {/* Second Stage: Work Experience */}
            <View>
                <Grid
                    columns={repeat("auto-fit", "size-800")}
                    autoRows="size-800"
                    justifyContent="center"
                    gap="size-100"
                    marginX="size-200"
                    marginTop="size-300"
                    marginBottom="size-400"
                >
                    {colors.map(color => (
                        <View colorVersion={5} key={color?.toString()} backgroundColor={color} />
                    ))}
                </Grid>
                <div className="work-experience">
                    <h2>Work Experience</h2>
                    {/* Add your work experience details here */}
                </div>
            </View>

            {/* Third Stage: Skills and Certifications */}
            <View>
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
