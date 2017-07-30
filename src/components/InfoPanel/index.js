import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import Loader from './Loader'
import './style.css'

export default class InfoPanel extends Component {
    render() {
        if ((typeof this.props.weather.weather) === 'string') return (<div>{this.props.weather.weather}</div>);
        const {fetching, weather} = this.props.weather
        const temperature = weather ? weather.main.temp : null
        const icon = weather ? weather.weather[0].icon : null
        const description = weather ? weather.weather[0].description : null
        const city = weather ? weather.name : null
        const country = weather ? weather.sys.country : null
        return (
            (fetching) ?
                <Row className="info-panel">
                    <Col md={12}>
                        <Loader/>
                        Загрузка...
                    </Col>
                </Row>
                :
                <Row className="info-panel">
                    <Col md={12}>
                        <div>
                            <img alt="weather icon" src={`http://openweathermap.org/img/w/${icon}.png`}/>
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