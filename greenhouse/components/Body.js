import React from "react";
import { Box, Text } from "axs";
import { Flex, Heading, Span } from "axs-ui";
import Container from "./Container";
import TempGraph from "./TempGraph";
import ForcingsGraph from "./ForcingsGraph";
import { colors } from "../config";

const Lead = props => (
  <Text fontSize={2} center css={{ fontWeight: 300 }} {...props} />
);

const SubLead = props => (
  <Text fontSize={3} center color={colors.grey} {...props} />
);

const UL = ({ children, ...props }) => (
  <Text is="ul" css={{ paddingLeft: 24 }}>
    {children}
  </Text>
);

const LI = ({ children, ...props }) => (
  <Text is="li" css={{ marginBottom: 4, li: { marginBottom: 0 } }} {...props}>
    {children}
  </Text>
);

const B = props => <Span color={colors.blue} {...props} />;

const TwoCols = ({ col1, col2, ...props }) => (
  <Flex flexDirection={["column", "row"]} {...props}>
    <Box width={[1, 0.5]} children={col1} />
    <Box px={[0, 2]} />
    <Box width={[1, 0.5]} children={col2} />
  </Flex>
);

const Separator = () => (
  <Box
    is="hr"
    mt={128}
    mx="auto"
    bg={colors.blue}
    css={{
      width: 128,
      height: 2,
      border: 0
    }}
  />
);

const WaitTemp = () => (
  <Container
    p3
    css={{
      backgroundColor: colors.snow,
      border: `1px solid ${colors.smoke}`,
      borderRadius: 8,
      maxWidth: 32 * 16,
      transform: "rotate(2deg)", // position: "relative",
      marginTop: "-10rem",
      marginRight: 0
    }}
  >
    <Heading
      level={3}
      color={colors.pink}
      mt0
      mb2
      css={{
        fontWeight: 300,
        fontStyle: "italic"
      }}
    >
      Wait, 2 ºF difference?
    </Heading>
    <UL>
      <LI mb1>
        1º is the difference between <B>ice</B> and <B>water</B>
        <UL>
          <LI>Rising seas</LI>
          <LI>More severe weather, more often</LI>
        </UL>
      </LI>
      <LI>
        Temperature rose
        {" "}
        <B>7-12 ºF over ~5,000 years</B>
        {" "}
        as the ice ages ended
      </LI>
      <LI>
        Now, a
        {" "}
        <B>2+ ºF rise in 130 years</B>
        {" "}
        <Span color={colors.grey}>(2% the time)</Span>
        , when the climate should be cooling
      </LI>
    </UL>
  </Container>
);
export default () => (
  <Container py4>
    <Lead>Here's a graph of <B>global temperature</B>, 1880–2014.</Lead>
    <SubLead>
      Temperature anomaly, ºF
    </SubLead>
    <TempGraph />

    <WaitTemp />
    <Separator />
    <Lead mt3>
      <Span color={colors.red}>Human greenhouse gas emissions</Span>
      {" "}
      are the clear cause.
    </Lead>
    <SubLead>Let's isolate the factors.</SubLead>
    <ForcingsGraph />

    <Separator />
    <Lead mt3>What can we <B>do</B> about it?</Lead>
    <SubLead>
      It's a complicated question, and one without a simple answer.
    </SubLead>
  </Container>
);
