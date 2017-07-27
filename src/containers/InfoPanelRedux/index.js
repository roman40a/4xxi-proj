import React, {Component} from 'react'
import InfoPanel from '../../components/InfoPanel'
import { connect } from 'react-redux'

class InfoPanelRedux extends Component {
    render() {
        return (
            <InfoPanel {...this.props}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(InfoPanelRedux)