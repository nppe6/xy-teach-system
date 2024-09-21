import XYRequest from '../request'

export function loginRequest(data) {
  return XYRequest.post({
    url: '/user/logins',
    data
  })
}
