import React from "react";
import { Box, Text } from "axs";
import { Heading } from "axs-ui";
import Head from "next/head";
import { config } from "axs";
import { palette } from "../config";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const css = `
@keyframes pulse {
  0% { transform: translateY(0); }
  50% { transform: translateY(1.5rem); }
  100% { transform: translateY(0); }
}
a { text-decoration: none !important }
`;
const style = <style children={css} />;

export default () => (
  <Box>
    <Head>
      <title>Climate change</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="https://unpkg.com/basscss-basic/index.css" />
      {style}
    </Head>
    <Header />
    <Body />
    <Footer />
  </Box>
);
