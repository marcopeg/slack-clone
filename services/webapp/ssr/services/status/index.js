import { SERVICE_NAME } from './hooks'
import { EXPRESS_ROUTE } from 'ssr/services/express/hooks'
import info from '../../../package.json'

export const register = ({ settings, registerAction }) => {
    registerAction({
        hook: EXPRESS_ROUTE,
        name: SERVICE_NAME,
        handler: ({ app, settings }) => {
            app.get('/status', (req, res) => {
                res.send(`${info.name}@${info.version}`)
            })
        },
    })
}
