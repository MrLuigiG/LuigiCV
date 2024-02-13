import React, { FC, useRef } from "react";
import {
    Provider,
    defaultTheme,
    Grid,
    View,
    Text,
    Flex,
    Image,
    Menu,
    MenuTrigger,
    ActionButton,
    Item,
} from "@adobe/react-spectrum";
import img from "./Headshot.jpeg";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";

import "./App.css";
const headShot = require("./Headshot.jpeg");

const App: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Provider theme={defaultTheme}>
            <Grid
                areas={["header", "about-me", "experience", "education", "contact-me"]}
                columns={["1fr"]}
                rows={["auto", "85vh", "100vh", "100vh", "25vh"]}
            >
                <Grid areas={["spacer heading menu"]} columns={["300px", "auto", "300px"]} rows="auto" gap={"size-0"}>
                    <View gridArea="heading">
                        <Flex justifyContent="center">
                            <Text
                                UNSAFE_style={{
                                    fontFamily: "Gill Sans",
                                    fontSize: 25,
                                }}
                            >
                                Luigi Giacomin
                            </Text>
                        </Flex>
                    </View>
                    <View gridArea={"menu"}>
                        <Flex justifyContent={"right"} alignContent={"safe center"} marginEnd={"2%"} marginTop={"1%"}>
                            <MenuTrigger>
                                <ActionButton>
                                    <ShowMenu aria-label="Show Menu" />
                                </ActionButton>
                                <Menu
                                    onAction={key => {
                                        if (key === "About me") {
                                            handleClick();
                                        } else {
                                            alert(key);
                                        }
                                    }}
                                >
                                    <Item key="About me">About me</Item>
                                    <Item key="Experience">Experience</Item>
                                    <Item key="Education">Education</Item>
                                    <Item key="Contact me">Contact me</Item>
                                </Menu>
                            </MenuTrigger>
                        </Flex>
                    </View>
                </Grid>
                <Grid areas={["content-left content-right"]} columns={["1fr 1fr"]} gridArea="about-me">
                    <View backgroundColor="chartreuse-600" gridArea="content-left">
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                            marginStart={"2vh"}
                            marginEnd={"2vh"}
                        >
                            <div className="image-frame">
                                <Image src={img} alt="Loading beautiful face..." />
                            </div>
                        </Flex>
                    </View>
                    <View backgroundColor="chartreuse-600" gridArea="content-right">
                        <Flex justifyContent="center" alignItems="center" height="100%">
                            <Text
                                UNSAFE_style={{
                                    fontFamily: "Arial",
                                    fontSize: 16,
                                    textAlign: "center",
                                }}
                            >
                                A seasoned engineer with a passion for crafting innovative solutions that streamline
                                operations
                            </Text>
                        </Flex>
                    </View>
                </Grid>

                <View backgroundColor="chartreuse-400" gridArea="experience">
                    {/* Placeholder for experience section */}

                    <Text>Experience section</Text>
                </View>
                <View backgroundColor="chartreuse-400" gridArea="education">
                    {/* Placeholder for education section */}
                    <Text>Education section</Text>
                </View>
                <View backgroundColor="chartreuse-400" gridArea="contact-me">
                    {/* Placeholder for contact-me section */}
                    <Text>Contact me section</Text>
                </View>
            </Grid>
        </Provider>
    );
};

export { App };
