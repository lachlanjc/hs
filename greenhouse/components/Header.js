import React from "react";
import { Box, Text } from "axs";
import { Heading, Span } from "axs-ui";
import { colors } from "../config";
import Icon from "./Icon";

export default () => (
  <Box
    is="header"
    color="white"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    center
    css={{
      backgroundImage: "url('/static/hero.jpg')",
      backgroundPositionY: "25%",
      backgroundSize: "cover",
      height: "100vh",
      position: "relative",
      textShadow: "0 2px 1px rgba(0, 0, 0, .75)",
      boxShadow: "inset 0 0 50vh 50vw rgba(0,0,0,.25)"
    }}
  >
    <Heading level={1}>
      Climate change is a
      {" "}
      <Span
        bg={colors.white}
        color={colors.navy}
        px2
        py1
        css={{ borderRadius: "2.5rem 1.5rem", textShadow: "none" }}
      >
        serious threat.
      </Span>
    </Heading>
    <Heading level={2} css={{ fontWeight: 300 }} mt2>
      And we need to take action.
    </Heading>
    <Box css={{ opacity: 0.8 }}>
      <Box
        is="hr"
        css={{ width: 72, height: 3, border: 0, backgroundColor: "white" }}
        mx="auto"
        my3
      />
      <Text fontSize={4} caps>
        By Lachlan Campbell
      </Text>
    </Box>
    <Box
      is="img"
      src={`//icon.now.sh/chevron/down/ffffff/32?strokeWidth=1.5`}
      css={{
        animation: "pulse .9s ease-in-out infinite",
        position: "absolute",
        bottom: 0
      }}
      mb4
    />
  </Box>
);
