import React, {Component} from 'react'
import CurrentButton from '../../components/CurrentButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class CurrentButtonRedux extends Component {
    render() {
        const { showCurrentWeather } = this.props.actions
        return (
            <CurrentButton onClickHandler={showCurrentWeather}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CurrentButtonRedux)