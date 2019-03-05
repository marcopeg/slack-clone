import { GraphQLString } from 'graphql'

import { FEATURE_NAME } from './hooks'
import { EXPRESS_GRAPHQL } from 'ssr/services/express/hooks'
export const register = ({ registerAction }) => {
    registerAction({
        hook: EXPRESS_GRAPHQL,
        name: FEATURE_NAME,
        handler: ({ queries }) => {
            queries.marcoMood = {
                description: 'Provides info regarding the project',
                type: GraphQLString,
                resolve: () => {
                    if (Math.random() >= 0.5) {
                        return 'good'
                    } else {
                        return 'bad'
                    }
                },
            }
        },
    })
}
