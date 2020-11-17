import React, { Component } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

import './chart-block.css';

export default class ChartBlock extends Component {

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="block chart-block">
                    <Line ref={this.chartReference} data={this.props.data} options={{legend: {display: false}}}  />
                </div>
            </div>
        );
    }
}


