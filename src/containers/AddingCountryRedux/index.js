import React, {Component} from 'react'
import AddingCountry from '../../components/AddingCountry'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class AddingCountryRedux extends Component {
    render() {
        const { getWeather } = this.props.actions
        const { list } = this.props
        return (
            <AddingCountry
                getWeather={getWeather}
                list={list}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.weather.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingCountryRedux)