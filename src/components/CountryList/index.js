import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import Dimensions from 'react-dimensions'
import CountryItem from '../CountryItem'
import './style.css'

class CountryList extends Component {
    render() {
        const {
            countryList = [],
            deleteCity,
            selectCity,
            showCurrentWeather,
            selected
        } = this.props

        // if (countryList.length === 0)
        //     showCurrentWeather()

        return (
            <Row>
                <Col md={4}>
                    <ul className="country-list">
                        {countryList.map(
                            (country, index) => {
                                const isSelected = (selected && country.country === selected.country && country.city === selected.city)
                                return <CountryItem
                                    selected={isSelected}
                                    selectCity={selectCity}
                                    deleteCity={deleteCity}
                                    key={Math.random()}
                                    label={country}
                                    index={index}/>

                            }
                        )}
                    </ul>
                </Col>

            </Row>

        )
    }
}

export default Dimensions()(CountryList)