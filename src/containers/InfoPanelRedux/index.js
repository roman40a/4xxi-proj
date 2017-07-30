import React, {Component} from 'react'
import InfoPanel from '../../components/InfoPanel'
import { connect } from 'react-redux'

class InfoPanelRedux extends Component {
    render() {
        const { selectedItem } = this.props
        return (
            <InfoPanel selectedItem={selectedItem}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedItem: state.weather.selectedItem
    }
}

export default connect(mapStateToProps)(InfoPanelRedux)