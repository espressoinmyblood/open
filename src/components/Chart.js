import React from 'react';
import Data from './Data';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';


const Chart = () => (
    <ResponsiveScatterPlot
        data={Data}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: '100' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: '100' }}
        yFormat=">-.2f"
        colors={{ scheme: 'category10' }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Younger (16-24), %',
            legendPosition: 'middle',
            legendOffset: 45
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Older (65+), %',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        legends={[
            {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default Chart
