import channelsList from './reducers/channels-list.reducer'
import * as channelsListService from './services/channels-list.service'

export const reducers = {
    channelsList,
}

export const services = [
    channelsListService,
]

export const listeners = []

export { default as ChannelsList } from './containers/ChannelsList.container'
