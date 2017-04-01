import React from "react";
import palx from "palx";
import { Box, Text, config } from "axs";
import { Flex, Heading, Span } from "axs-ui";
import { map, deburr, lowerCase, kebabCase, replace } from "lodash";
import Head from "next/head";

const colors = {
  base: "#4786f1",
  accent: "#ff0080",
  white: "#ffffff"
};
colors.gray = palx(colors.base).gray;

const assignments = [
  {
    name: "Greenhouse",
    url: "greenhouse.now.sh",
    description: "Website urging for action on climate change"
  },
  {
    name: "L’Éducation Suisse",
    url: "swiss-edu.now.sh",
    description: "Presentation on Swiss education (in French)"
  },
  {
    name: "Sommeil",
    url: "sommeil.now.sh",
    description: "Brochure about sleep at various ages (in French)"
  },
  {
    name: "Astrocolony",
    url: "astrocolony.now.sh",
    description: "Brochure about proposed Titan space colony"
  }
];
const groups = [
  {
    name: "Hack Club",
    url: "schacks.github.io",
    description: "Hack Club at State High"
  },
  {
    name: "TeenShale Data",
    url: "teenshaledata.lachlanjc.me",
    description: "Data parsing for TeenShale Network"
  }
];
const SectionHeading = ({ icon, children, ...props }) => (
  <Heading
    level={2}
    fontSize={4}
    display="flex"
    justifyContent="center"
    alignItems="center"
    color={colors.gray[7]}
    caps
    mt3
    {...props}
  >
    <Icon name={icon} fill={colors.gray[7]} size={24} mr1 />
    {children}
  </Heading>
);
const Grid = props => (
  <Box
    px={[2, 3]}
    py1
    display={["block", "flex"]}
    justifyContent="center"
    flexWrap="wrap"
    center
    {...props}
  />
);
const Project = ({ name, url, description }) => (
  <Box
    is="a"
    href={`https://${url}`}
    target="_blank"
    id={kebabCase(deburr(name))}
    display="inline-block"
    width={[1, 1 / 2, 1 / 3]}
    align="left"
    m={[0, 2]}
    mt2
    p2
    border
    borderColor={colors.gray[5]}
    css={{
      ":hover": {
        borderColor: colors.accent,
        h3: {
          color: colors.accent
        }
      }
    }}
  >
    <Heading level={3} fontSize={4} mt0 mb1 color={colors.base}>{name}</Heading>
    <Text fontSize={5} m0 color={colors.gray[9]}>{description}</Text>
  </Box>
);
const Icon = (
  {
    name = "square",
    fill = colors.white,
    size = 32,
    ...props
  }
) => (
  <Box
    is="img"
    src={`//icon.now.sh/${name}/${size}/${replace(fill, "#", "")}`}
    alt={`${name} icon`}
    width={size}
    height={size}
    display="inline-block"
    {...props}
  />
);
export default () => (
  <Box pb4>
    <Head>
      <title>@lachlanjc/edu</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="//unpkg.com/basscss-basic@1.0.0/index.css" />
      <style children="a { text-decoration: none !important }" />
    </Head>
    <Box
      is="header"
      bg={colors.base}
      color={colors.white}
      px2
      py4
      mb={[3, 4]}
      center
    >
      <Flex
        is="a"
        href="https://github.com/lachlanjc/edu"
        alignItems="center"
        justifyContent="center"
      >
        <Icon name="github" size={24} mr1 />
        <Text color={colors.white} fontSize={6} caps>Source</Text>
      </Flex>
      <Heading
        my2
        level={1}
        fontSize={[2, 1]}
        css={{
          fontWeight: 300
        }}
      >
        @lachlanjc/<Span bold>edu</Span>
      </Heading>
      <Box>
        <Icon name="school" />
        <Icon name="code" mx2 />
        <Icon name="sentiment_very_satisfied" />
      </Box>
    </Box>
    {map(
      [
        ["Assignments", "assignment", assignments],
        ["Groups", "group_work", groups]
      ],
      section => (
        <Box
          is="section"
          id={kebabCase(section[0])}
          key={lowerCase(section[0])}
        >
          <SectionHeading icon={section[1]} children={section[0]} />
          <Grid>
            {map(section[2], item => (
              <Project
                name={item.name}
                url={item.url}
                description={item.description}
                key={item.url}
              />
            ))}
          </Grid>
        </Box>
      )
    )}
  </Box>
);
