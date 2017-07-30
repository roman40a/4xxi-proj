import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import './style.css'

export default class InfoPanel extends Component {
    render() {
        const {selectedItem: weather} = this.props
        const temperature = weather ? weather.main.temp : null
        const icon = weather ? weather.weather[0].icon : null
        const description = weather ? weather.weather[0].description : null
        const city = weather ? weather.name : null
        const country = weather ? weather.sys.country : null
        return (
            <Row className="info-panel">
                <Col md={12}>
                    <div>
                        <img alt="weather icon" src={icon?`http://openweathermap.org/img/w/${icon}.png`:''}/>
                    </div>
                    <div>{`${temperature} \u2103`}</div>
                    <div>{description}</div>
                    <div>{`Город: ${city}`}</div>
                    <div>{`Страна: ${country}`}</div>
                </Col>
            </Row>
        )
    }
}