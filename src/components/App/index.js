import React, {Component} from 'react'
import PageLayouts from '../PageLayouts'
import './bootstrap.css'

export default class App extends Component {
    componentDidMount() {
        const {onLoadHandler} = this.props
        onLoadHandler()
    }
    render() {
        return (
            <PageLayouts></PageLayouts>
        )
    }
}