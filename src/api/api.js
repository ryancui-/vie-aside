/**
 * Created by kit-mac on 2017/5/5.
 */
import axios from 'axios'

export const login = (username, password) => {
  return axios.post('/authenticate', {
    username, password
  })
}

export const logout = () => {
  return axios.post('/logout')
}

export const getUser = () => {
  return axios.get('/auth/user')
}

export const getMenu = () => {
  return axios.get('/auth/menu')
}