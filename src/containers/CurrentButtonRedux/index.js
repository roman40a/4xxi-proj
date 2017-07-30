import React, {Component} from 'react'
import CurrentButton from '../../components/CurrentButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class CurrentButtonRedux extends Component {
    render() {
        const { getWeather } = this.props.actions
        const { coords } = this.props.position
        return (
            <CurrentButton onClickHandler={getWeather.bind(null, {coords})}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentButtonRedux)