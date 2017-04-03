import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel, VictoryLegend, VictoryAnimation } from "victory-core";
import { map, reverse, take, takeRight } from "lodash";
import { colors, palette, fontFamily } from "../config";
const data = require("../forcings-data.json");

const style = {
  axis: {
    tickLabels: {
      fontFamily,
      fontSize: 8,
      color: colors.black
    },
    axis: { stroke: colors.black, strokeWidth: 2 },
    ticks: {
      size: tick => 4,
      stroke: colors.grey,
      strokeWidth: 2
    },
    grid: {
      stroke: tick => colors.smoke,
      strokeWidth: 1
    }
  },
  legend: {
    labels: {
      fontFamily,
      fontSize: 8,
      color: colors.black
    }
  }
};

const lines = [
  { id: "all", name: "Overall temperature", color: colors.blue, width: 5 },
  { id: "gg", name: "Greenhouse gases", color: colors.red, width: 4 },
  { id: "human", name: "Human", color: colors.orange, width: 3 },
  { id: "natural", name: "Natural", color: colors.green, width: 3 },
  { id: "aerosol", name: "Aerosol use", color: palette.cyan[6], width: 1 },
  { id: "land", name: "Land use", color: palette.green[6], width: 1 },
  { id: "orbit", name: "Earth's orbit", color: palette.indigo[6], width: 1 },
  { id: "ozone", name: "Ozone", color: palette.violet[4], width: 1 },
  { id: "solar", name: "Solar activity", color: palette.yellow[6], width: 1 },
  { id: "volcanic", name: "Volcanoes", color: colors.pink, width: 1 }
];

export default () => (
  <div>
    <VictoryChart
      padding={{ top: 16, bottom: 48 }}
      style={{ parent: { fontFamily } }}
    >
      <VictoryAxis
        independentAxis
        tickValues={[1850, 1875, 1900, 1925, 1950, 1975, 2005]}
        style={style.axis}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={tick => tick + " ºF"}
        style={style.axis}
      />
      {map(
        [take(lines, 4), takeRight(lines, lines.length - 4)],
        (lineGroup, i) => (
          <VictoryLegend
            key={`legend-${i}`}
            data={lineGroup}
            labelComponent={<VictoryLabel padding={0} />}
            colorScale={map(lineGroup, "color")}
            padding={{
              top: 16,
              bottom: 0
            }}
            symbolSpacer={4}
            style={style.legend}
            gutter={4}
            x={[8, 104][i]}
            y={8}
          />
        )
      )}
      {map(reverse(lines), line => (
        <VictoryLine
          key={`line-${line.id}`}
          data={data}
          x="year"
          y={line.id}
          style={{
            data: {
              stroke: line.color,
              strokeWidth: line.width
            }
          }}
          animate={{
            duration: 768,
            onEnter: {
              duration: 512,
              after: () => ({ y: 0 })
            }
          }}
        />
      ))}
    </VictoryChart>
  </div>
);
