import React, { FC } from "react";
import { Provider, defaultTheme, Grid, View, Text, Flex, Image } from "@adobe/react-spectrum";
import img from "./Headshot.jpeg";

import "./App.css";
const headShot = require("./Headshot.jpeg");

const App: FC = () => {
    return (
        <Provider theme={defaultTheme}>
            <Grid
                areas={["header", "content", "footer"]}
                columns={["1fr"]}
                rows={["auto", "85vh", "size-1000"]}
                gap="size-100"
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
                </Grid>
                <Grid areas={["content-left content-right"]} columns={["1fr 1fr"]} gridArea="content" gap="size-100">
                    <View backgroundColor="chartreuse-600" gridArea="content-left">
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                            marginStart={"2vh"}
                            marginEnd={"2vh"}
                        >
                            <Image src={img} alt="Loading beautiful face..." />
                        </Flex>
                    </View>
                    <View backgroundColor="chartreuse-600" gridArea="content-right">
                        {/* Content for the right column */}
                    </View>
                </Grid>{" "}
                <View backgroundColor="gray-75" gridArea="footer" />
            </Grid>
        </Provider>
    );
};

export { App };
