import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class CurrentButton extends Component {
    render() {
        const {onClickHandler, active} = this.props
        const buttonStyle = {backgroundColor: active ? 'red' : ''}
        return (
            <Button
                style={buttonStyle}
                onClick={onClickHandler}>
                Погода по Вашим координатам
            </Button>
        )
    }
}