import React, {Component} from 'react'

export default class CountryItem extends Component {
    render() {
        const {weather, selectCity, deleteCity, selected} = this.props
        const city = weather.name, country = weather.sys.country
        return (
            <li className={`country-item ${selected?'selected':''}`}>
                <div className="country-item__info" onClick={selectCity.bind(null, weather)}>
                    <div className="country-item__label">{city}</div>
                    <div className="country-item__label">{country}</div>
                </div>

                <div className="country-item__delete" onClick={deleteCity.bind(null, weather)}>Удалить</div>
            </li>
        )
    }
}