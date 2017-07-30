import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class CurrentButton extends Component {

    componentDidMount() {
        const {onClickHandler} = this.props
        onClickHandler()
    }

    render() {
        const {onClickHandler} = this.props
        const buttonStyle = {width: '100%'}
        return (
            <Button
                style={buttonStyle}
                onClick={onClickHandler}>
                Погода по Вашим координатам
            </Button>
        )
    }
}