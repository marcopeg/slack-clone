import React from 'react'
import PropTypes from 'prop-types'

const ChannelsListItem = ({ name }) => (
    <div>
        {name}
    </div>
)

ChannelsListItem.propTypes = {
    name: PropTypes.string.isRequired,
}

export default ChannelsListItem
