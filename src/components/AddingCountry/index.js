import React, {Component} from 'react'
import {FormControl, Button, Row, Col} from 'react-bootstrap'

export default class AddingCountry extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange(propName, event ) {
        console.log(this, event.target.value)
        let state = Object.assign({},this.state)
        state[propName] = event.target.value
        this.setState(state)
    }

    render() {
        const {
            addCity
        } = this.props

        const {city, country} = this.state
        return (
            <Row>
                <Col md={4}>
                    <FormControl onChange={this.onChange.bind(this, "city")} type="text" placeholder="city" />
                </Col>
                <Col md={4}>
                    <FormControl onChange={this.onChange.bind(this, "country")} type="text" placeholder="country" />
                </Col>
                <Col md={4}>
                    <Button onClick={() => addCity(city,country)}>Добавить в список</Button>
                </Col>
            </Row>
        )
    }
}