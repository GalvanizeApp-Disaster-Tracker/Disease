import React, { Fragment } from 'react'

import {
  Chart,
  Settings,
  Axis,
  BarSeries,
} from '@elastic/charts';


const YellowZikaChart = ({
  data,
}) => {

  const formattedData = data.map(d => {
    return {
      x: d.mmwr_week,
      y: d.zika_virus_disease_non_4,
      g: 'a'
    }
  })

  if (data.length !== 0) {
    return (
      <Fragment>
        <Chart size={{ height: 400 }}>
          <Settings showLegend={false} />
          <BarSeries
            id="status"
            name="Status"
            data={formattedData}
            xAccessor={'x'}
            yAccessors={['y']}
            splitSeriesAccessors={['g']}
            stackAccessors={['g']}
            />
          <Axis id="bottom-axis" position="bottom" showGridLines title="MMWR Week" />
          <Axis id="left-axis" position="left" showGridLines title="Number of Cases" />
        </Chart>
      </Fragment>
    )
  } else {
    return <div>No Data</div>
  }
}

export default YellowZikaChart

