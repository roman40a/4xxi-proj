import React, {Component} from 'react'
import {FormControl, Button, Row, Col} from 'react-bootstrap'

export default class AddingCountry extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange(propName, event ) {
        let state = Object.assign({},this.state)
        state[propName] = event.target.value
        this.setState(state)
    }

    render() {
        const {
            getWeather,
            list
        } = this.props

        const {city, country} = this.state
        return (
            <Row>
                <Col md={12}>
                    <FormControl
                        onChange={this.onChange.bind(this, "city")}
                        type="text" placeholder="city" />
                    <FormControl
                        onChange={this.onChange.bind(this, "country")}
                        type="text" placeholder="country" />
                    <Button
                        style={{width: '100%', marginTop: '7px'}}
                        onClick={() => getWeather( { place: {city,country} }, list )}>Добавить в список</Button>
                </Col>
            </Row>
        )
    }
}