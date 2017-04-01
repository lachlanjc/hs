import React from "react";
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryLine
} from "victory-chart";
import { VictoryLabel, VictoryTooltip, Line } from "victory-core";
import { colors, toRGBA, fontFamily } from "../config";
const data = require("../temp-data.json");

const style = {
  axis: {
    tickLabels: {
      fontFamily,
      fontSize: 8,
      color: colors.black
    },
    axis: { stroke: colors.black, strokeWidth: 2 },
    ticks: {
      size: tick => 8,
      stroke: colors.grey,
      strokeWidth: 2
    },
    grid: {
      stroke: tick => colors.smoke,
      strokeWidth: 1
    }
  }
};

export default () => (
  <VictoryChart animate={{ duration: 768 }} style={{ parent: { fontFamily } }}>
    <VictoryAxis
      independentAxis
      tickValues={[1880, 1900, 1920, 1940, 1960, 1980, 2000]}
      style={style.axis}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={tick => tick + "º"}
      style={style.axis}
    />
    <VictoryArea
      data={data}
      x="year"
      y="mean"
      padding={0}
      style={{
        data: {
          stroke: colors.blue,
          strokeWidth: 1,
          fill: toRGBA(colors.blue, 0.1)
        }
      }}
    />
  </VictoryChart>
);
