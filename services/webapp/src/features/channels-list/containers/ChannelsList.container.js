import React from 'react'
import { connect } from 'react-redux'
import { fetchChannelsList } from '../services/channels-list.service'
import ChannelsList from '../components/ChannelsList'

const mapState = (state) => {
    return {
        items: state.channelsList.items,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchChannelsList: () => {
            dispatch(fetchChannelsList())
        },
    }
}

class ChannelsListContainer extends React.Component {
    componentDidMount () {
        this.props.fetchChannelsList()
    }

    render () {
        return (
            <ChannelsList {...this.props} />
        )
    }
}

export default connect(mapState, mapDispatch)(ChannelsListContainer)
