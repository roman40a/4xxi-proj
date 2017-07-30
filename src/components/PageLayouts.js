import React, { Component } from 'react'
import Dimensions from 'react-dimensions'
import {Grid, Row, Col} from 'react-bootstrap'
import CurrentButtonRedux from '../containers/CurrentButtonRedux'
import AddingCountryRedux from '../containers/AddingCountryRedux'
import CountryList from '../containers/CountryListRedux'
import InfoPanelRedux from '../containers/InfoPanelRedux'

class PageLayouts extends Component {
    render() {
        const { containerWidth: width, containerHeight: height } = this.props
        return (
            <Grid style={{ paddingTop: 15, paddingBottom: 15}}>
                <Row>
                    <CurrentButtonRedux/>
                    <InfoPanelRedux/>
                    <AddingCountryRedux/>
                    <CountryList/>
                </Row>
            </Grid>
        )
    }
}

export default Dimensions()(PageLayouts)