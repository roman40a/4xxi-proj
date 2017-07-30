import React, {Component} from 'react'
import PageLayouts from '../PageLayouts'
import Loader from '../Loader'
import './bootstrap.css'

export default class App extends Component {
    componentDidMount() {
        const { getCoords } = this.props
        getCoords()
    }

    render() {
        const {fetching, coords} = this.props.position
        return (
            (fetching && !coords) ?
                <Loader/>
                :
                <PageLayouts/>
        )
    }
}