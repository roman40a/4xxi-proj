import React, { Component } from 'react'
import './style.css'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="loader__icon">
                    <img src="/img/loading.gif"/>
                </div>
            </div>
        )
    }
}