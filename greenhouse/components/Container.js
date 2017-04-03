import React from "react";
import { Box } from "axs";

const Container = ({ width = 72, ...props }) => (
  <Box
    mx="auto"
    px={[2, 3]}
    css={{
      maxWidth: width * 16,
      position: "relative"
    }}
    {...props}
  />
);

export default Container;
