import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
} from 'graphql'

import { FEATURE_NAME } from './hooks'
import { EXPRESS_GRAPHQL } from 'ssr/services/express/hooks'

const channelItemType = new GraphQLObjectType({
    name: 'ChannelItem',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
})

export const register = ({ registerAction }) => {
    registerAction({
        hook: EXPRESS_GRAPHQL,
        name: FEATURE_NAME,
        handler: ({ queries }) => {
            queries.channels = {
                description: 'Provides a list of active chat channels',
                type: new GraphQLNonNull(new GraphQLList(channelItemType)),
                resolve: () => {
                    return [
                        {
                            id: 'we7wdew8',
                            name: 'general',
                        },
                        {
                            id: 'dwd7g9',
                            name: '24hr',
                        },
                        {
                            id: 'dwdgf987g9',
                            name: 'mysocial.io',
                        },
                        {
                            id: 'rwefew',
                            name: 'andres',
                        },
                    ]
                },
            }
        },
    })
}
