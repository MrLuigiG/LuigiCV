import React, { FC } from "react";
import { Provider, defaultTheme, Grid, View, Text, Flex } from "@adobe/react-spectrum";

import "./App.css";

const App: FC = () => {
    return (
        <Provider theme={defaultTheme} colorScheme="dark">
            <Grid
                areas={["header  header", "sidebar content", "footer  footer"]}
                columns={["1fr"]}
                rows={["size-1000", "auto", "size-1000"]}
                height="100vh"
                gap="size-100"
            >
                <View backgroundColor="celery-600" gridArea="header">
                    <Flex justifyContent="center">
                        <Text>Your Headline Text</Text>
                    </Flex>
                </View>
                <View backgroundColor="blue-600" gridArea="sidebar" />
                <View backgroundColor="magenta-600" gridArea="footer" />
            </Grid>
        </Provider>
    );
};

export { App };
