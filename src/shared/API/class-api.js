import useFetch from '../hooks/useFetch.js'
export default class API {
  constructor({ method, params }) {
    this.method = method
    this.params = params
  }

  getRequestBody() {
    return {
      method: this.method,
      params: this.params
    }
  }

  async sendRequest() {
    return await useFetch(this.getRequestBody())
  }
}
