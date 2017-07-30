import React, {Component} from 'react'
import CountryList from '../../components/CountryList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class CountryListRedux extends Component {
    render() {
        const { list, selectedItem, fetching } = this.props
        const { deleteCity, selectCity } = this.props.actions
        return (
            <CountryList
                countryList={list}
                selectedItem={selectedItem}
                fetching={fetching}
                deleteCity={deleteCity}
                selectCity={selectCity}/>
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
        list: state.weather.list,
        selectedItem: state.weather.selectedItem,
        fetching: state.weather.fetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryListRedux)