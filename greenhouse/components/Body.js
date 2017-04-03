import React from "react";
import { Box, Text } from "axs";
import { Flex, Heading, Span } from "axs-ui";
import { colors } from "../config";
import Container from "./Container";
import TempGraph from "./TempGraph";
import WaitTemp from "./WaitTemp";
import Steps from "./Steps";
import ForcingsGraph from "./ForcingsGraph";
import { Lead, SubLead, UL, LI, B, G, Separator } from "./More";

export default () => (
  <Container pt4>
    <Lead>Here's a graph of <B>global temperature</B>, 1880–2014.</Lead>
    <SubLead>Temperature anomaly, ºF</SubLead>
    <TempGraph />
    <WaitTemp />

    <Separator />
    <Lead mt3>
      <Span color={colors.red}>Human greenhouse gas emissions</Span>{" "}
      are the clear cause.
    </Lead>
    <SubLead>Let's isolate the factors.</SubLead>
    <ForcingsGraph />

    <Steps />
  </Container>
);
