import { runQuery } from 'features/network'
import channelsQuery from '../queries/channels'
import { setItems } from '../reducers/channels-list.reducer'

export const fetchChannelsList = () => async (dispatch) => {
    try {
        const res = await dispatch(runQuery(channelsQuery))
        dispatch(setItems(res.data.channels))
    } catch (err) {
        console.log('ooops')
    }
}
