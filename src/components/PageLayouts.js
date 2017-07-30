import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import CurrentButtonRedux from '../containers/CurrentButtonRedux'
import AddingCountryRedux from '../containers/AddingCountryRedux'
import CountryList from '../containers/CountryListRedux'
import InfoPanelRedux from '../containers/InfoPanelRedux'

class PageLayouts extends Component {
    render() {
        return (
            <Grid style={{ paddingTop: 15, paddingBottom: 15}}>
                <Row>
                    <Col md={4}>
                        <CurrentButtonRedux/>
                        <InfoPanelRedux/>
                        <AddingCountryRedux/>
                        <CountryList/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default PageLayouts