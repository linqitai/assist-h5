import axios from 'axios'
import qs from 'qs'
import VueCookies from 'vue-cookies'
import router from '../router.js'
axios.defaults.timeout = 7000

// axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
/* axios.interceptors.response.use(config => {
  console.log("config",config)
  //return config
}, e => {
  
}) */
export default {
  async fetchGet(url, params) {
    return await new Promise((resolve, reject) => {
		let token = VueCookies.get('token')
		if (token) { 
		    axios.defaults.headers.common["token"] = token
		}
		axios.get(url, params).then(res => {
			resolve(res.data)
		}).catch(error => {
			reject(error)
		})
    })
  },
  async fetchPost(url, data = {}) {
    return await new Promise((resolve, reject) => {
		let token = VueCookies.get('token')
		if (token) { 
		    axios.defaults.headers.common["token"] = token
		}
		axios.post(url, qs.stringify(data)).then(res => {
			resolve(res.data)
		}).catch(error => {
			reject(error)
		})
    })
  },
  fetchPostForUpload(url, data = {}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      } // 添加请求头
      axios.post(url, data, config).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}