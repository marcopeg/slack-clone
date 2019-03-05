import { getModel } from 'ssr/services/postgres'

export const createTestUser = (values) => {
    const AuthAccount = getModel('AuthAccount')
    return AuthAccount.register(values)
}

export const updateTestUser = (uname, values) => {
    const AuthAccount = getModel('AuthAccount')
    return AuthAccount.updateByUsername(uname, values)
}
