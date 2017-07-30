import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import Dimensions from 'react-dimensions'
import CountryItem from '../CountryItem'
import Loader from '../Loader'

import './style.css'

class CountryList extends Component {
    render() {
        const {
            countryList = [],
            selectedItem,
            fetching,
            deleteCity,
            selectCity
        } = this.props

        return (
            (fetching) ?
                <Loader/>
                :
                <Row>
                    <Col md={12}>
                        <ul className="country-list">
                            {countryList.map(
                                (item, index) => {
                                    const selected = (selectedItem && item.name === selectedItem.name && item.sys.country === selectedItem.sys.country)
                                    return <CountryItem
                                        selected={selected}
                                        selectCity={selectCity}
                                        deleteCity={deleteCity}
                                        key={Math.random()}
                                        weather={item}
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