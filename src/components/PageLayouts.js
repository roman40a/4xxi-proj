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
            <Grid fluid={true} style={{width, height, paddingTop: 15, paddingBottom: 15}}>
                <Row style={{width}}>
                    <Col md={8}>
                        <CurrentButtonRedux/>
                    </Col>
                    <Col md={4}><AddingCountryRedux/></Col>
                </Row>
                <Row style={{width}}>
                    <Col md={8}>
                        <InfoPanelRedux/>
                    </Col>
                    <Col md={4}>
                        <CountryList/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Dimensions()(PageLayouts)