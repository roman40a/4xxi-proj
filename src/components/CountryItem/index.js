import React, {Component} from 'react'
import './style.css'

export default class CountryItem extends Component {
    render() {
        const {label, selectCity, deleteCity, showCurrentWeather, isSelected} = this.props
        const {city, country} = label
        return (
            <li className={`country-item ${isSelected?'selected':'    '}`}>
                <div className="country-item__info" onClick={selectCity.bind(null, city, country)}>
                    <div className="country-item__label">{city}</div>
                    <div className="country-item__label">{country}</div>
                </div>

                <div className="country-item__delete" onClick={deleteCity.bind(null, city, country)}>Удалить</div>
            </li>
        )
    }
}