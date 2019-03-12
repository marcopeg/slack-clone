
export const initialState = {
    items: [],
}

/**
 * Actions
 */

export const SET_ITEMS = 'setItems@channels-list'

export const setItems = items => {
    if (!Array.isArray(items)) {
        throw new Error('items should be an array')
    }

    return {
        type: SET_ITEMS,
        payload: { items },
    }
}


/**
 * Handlers
 */

export const actionHandlers = {
    [SET_ITEMS]: (state, { payload }) => ({
        ...state,
        items: payload.items,
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer

