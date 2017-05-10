/**
 * Created by kit-mac on 2017/5/5.
 */
import axios from 'axios'

export const getUser = () => {
  return axios.get()
}

export const listNode = (id, menuOnly, enableOnly) => {
  return axios.get('/auth/resource/listNode', {
    params: {
      id, menuOnly, enableOnly
    }
  })
}