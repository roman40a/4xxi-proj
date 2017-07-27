import React, {Component} from 'react'
import AddingCountry from '../../components/AddingCountry'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class AddingCountryRedux extends Component {
    render() {
        const { addCity } = this.props.actions
        const { fullList } = this.props
        return (
            <AddingCountry countryList={fullList} addCity={addCity}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        fullList: state.fullList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingCountryRedux)