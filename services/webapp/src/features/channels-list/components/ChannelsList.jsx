import React from 'react'
import PropTypes from 'prop-types'
import ChannelsListItem from './ChannelsListItem'

const ChannelsList = ({ title, items }) => (
    <div>
        {!title ? null : (
            <h4>{title}</h4>
        )}
        {items.map(item => (
            <ChannelsListItem
                key={item.id}
                {...item}
            />
        ))}
    </div>
)

const itemType = PropTypes.shape({
    id: PropTypes.string.isRequired,
})

ChannelsList.propTypes = {
    items: PropTypes.arrayOf(itemType).isRequired,
    title: PropTypes.string,
}

ChannelsList.defaultProps = {
    title: null,
}

export default ChannelsList
