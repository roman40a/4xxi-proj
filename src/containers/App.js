import React, {Component} from 'react'
import App from '../components/App'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class AppRedux extends Component {
    render() {
        const { getCoords } = this.props.actions
        const { position } = this.props
        return (
            <App getCoords={getCoords} position={position}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        position: state.position
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)