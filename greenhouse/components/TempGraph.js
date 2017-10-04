import React from 'react'
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory-chart'
import { colors, toRGBA, fontFamily } from '../config'
const data = require('../temp-data.json')

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
}

export default () => (
  <VictoryChart
    style={{ parent: { fontFamily } }}
    animate={{
      duration: 768,
      onEnter: { duration: 512, after: () => ({ y: 0 }) }
    }}
  >
    <VictoryAxis
      independentAxis
      tickValues={[1880, 1900, 1920, 1940, 1960, 1980, 2000]}
      style={style.axis}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={tick => tick + ' ºF'}
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
)
