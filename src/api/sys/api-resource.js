/**
 * Created by user on 2017/5/11.
 */
import axios from 'axios'

export const getById = id => {
  return axios.get('auth/resource', {
    params: {
      id
    }
  })
}

export const add = resource => {
  return axios.post('auth/resource', resource)
}

export const update = resource => {
  return axios.put('auth/resource', resource)
}

export const deleteById = id => {
  return axios.delete(`auth/resource/${id}`)
}

export const countAvailable = roleId => {
  return axios.get('auth/resource/countAvailable', {
    params: {
      roleId
    }
  })
}

export const listNode = (idw, menuOnly, enableOnly) => {
  return axios.get('auth/resource/listNode', {
    params: {
      idw, menuOnly, enableOnly
    }
  })
}