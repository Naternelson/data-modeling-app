import {  useSelector } from 'react-redux'
import { Redirect } from 'react-router'

export const IsLoggedIn = () => {
    return  useSelector(s => !!s.auth.token)
}

export const RedirectIfLoggedOut = (props) => {
    const isLoggedIn = IsLoggedIn()
    const to = props?.to || '/'
    if(!isLoggedIn) return <Redirect to={to}/>
    return false
}
export const RedirectIfLoggedIn = (props) => {
    const isLoggedIn = IsLoggedIn()
    const to = props?.to || '/'
    if(isLoggedIn) return <Redirect to={to}/>
    return false
}
