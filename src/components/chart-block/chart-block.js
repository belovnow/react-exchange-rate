import React, { useContext } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import Context from '../context';

import './chart-block.css';

const ChartBlock = () => {

    const [context, setContext] = useContext(Context);

    if (!context) {
        return <div className="block chart-block not-loaded">
            <i className="em em-chart_with_upwards_trend"></i>
        </div>
    }

    const { data } = context;

    return (
        <div className="block chart-block">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 15,
                        right: 15,
                        left: 20,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray='8 8' vertical={true} />
                    <XAxis dataKey="date" />
                    <YAxis type="number" domain={['dataMin', 'dataMax']} />
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="25%" stopColor="#ffe5b9" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#c9cbff" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#a6a9b6"
                        fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ChartBlock;



