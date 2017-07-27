import React, {Component} from 'react'
import CountryList from '../../components/CountryList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class CountryListRedux extends Component {
    render() {
        const { addedList } = this.props
        const { deleteCity, selectCity } = this.props.actions
        return (
            <CountryList countryList={addedList} deleteCity={deleteCity} selectCity={selectCity}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        addedList: state.addedList.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryListRedux)