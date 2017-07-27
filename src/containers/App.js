import React, {Component} from 'react'
import App from '../components/App'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class AppRedux extends Component {
    render() {
        const { showCurrentWeather } = this.props.actions
        return (
            <App onLoadHandler={showCurrentWeather}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AppRedux)