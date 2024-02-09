import React, { FC } from "react";
import { Provider, defaultTheme, Grid, View, Text, Flex, Image } from "@adobe/react-spectrum";
import img from "./Headshot.jpeg";

import "./App.css";
const headShot = require("./Headshot.jpeg");

const App: FC = () => {
    return (
        <Provider theme={defaultTheme}>
            <Grid areas={["header", "content", "footer"]} columns={["1fr"]} rows={["auto", "85vh", "size-1000"]}>
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
                </Grid>
                <Grid areas={["content-left content-right"]} columns={["1fr 1fr"]} gridArea="content">
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
                </Grid>{" "}
                <View backgroundColor="gray-75" gridArea="footer" />
            </Grid>
        </Provider>
    );
};

export { App };
