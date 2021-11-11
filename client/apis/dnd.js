import request from 'superagent'

const baseURL = '/api/v1/dnd'

export const getRaces = () => {
  return request.get(`${baseURL}/races`)
    .then(response => {
      return response.body
    })
}
