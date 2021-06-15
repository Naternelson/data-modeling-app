import {  useSelector } from 'react-redux'
import { Redirect } from 'react-router'

export const LoggedOff = useSelector(s => !s.auth.token)
export const LoggedIn = !LoggedOff
export const RedirectIfLoggedOut = (props) => {
    const to = props?.to || '/'
    if(LoggedIn) return <Redirect to={to}/>
    return false
}
