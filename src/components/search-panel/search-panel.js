import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component {

    render() {
        return (
            <div className="row center-lg center-sm search-input">
                <div className="col-lg-6">
                    <input type="text"
                    placeholder="Поиск валют">
                    </input>
                </div>
            </div>
        );
    }
}