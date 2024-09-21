import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class XYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
      withCredentials: true // 允许携带token
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.data)
          } else {
            reject(err)
          }
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default new XYRequest(BASE_URL, TIMEOUT)
