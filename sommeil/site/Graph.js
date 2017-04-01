
import React from 'react'
import {
  Chart,
  Svg,
  Bar,
  Rules,
  DataLabels,
  Axis
} from 'f0'
import { colors } from './config'

const data = [
  15.5,
  12,
  11,
  10,
  9,
  8
]

export default () =>
  <Chart>
    <Svg>
      <Rules y={5} />
      <Bar
        data={data}
        min={0}
        max={20}
        color={colors.blue}
      />
    </Svg>
    <DataLabels data={data} />
    <Axis
      y
      labels={[
        20,
        16,
        12,
        8,
        4
      ]}
    />
    <Axis
      labels={[
        'Les nouveau-né',
        '2 années',
        '3–5 années',
        '6–13 années',
        '14–17 années',
        'Les adultes'
      ]}
    />
  </Chart>
