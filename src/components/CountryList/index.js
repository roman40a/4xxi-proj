import React, {Component} from 'react'
import Dimensions from 'react-dimensions'
import CountryItem from '../CountryItem'
import './style.css'

class CountryList extends Component {
    render() {
        const {
            countryList = [],
            deleteCity,
            selectCity
        } = this.props
        return (
            <ul className="country-list">
                {countryList.map(
                    (country, index) => <CountryItem selectCity={selectCity} deleteCity={deleteCity} key={Math.random()} label={country} index={index}/>
                )}
            </ul>
        )
    }
}

export default Dimensions()(CountryList)