import React, {Component} from 'react'
import Loader from './Loader'

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
            (fetching || weather === null) ?
                <div className="info-panel">
                    <Loader/>
                </div>
                :
                <div className="info-panel">
                    <div>
                        <img alt="weather icon" src={`http://openweathermap.org/img/w/${icon}.png`}/>
                    </div>
                    <div>{`${temperature} \u2103`}</div>
                    <div>{description}</div>
                    <div>{`Город: ${city}`}</div>
                    <div>{`Страна: ${country}`}</div>
                </div>
        )
    }
}