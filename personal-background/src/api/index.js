import axios from 'axios'

import {
  addXtagSource,
  uploadBlogImageSource,
  getAllTagSource,
  loginSource,
  checkLoginStatusSource
} from './resource'

export default {
  getAllTag () {
    return axios.get(getAllTagSource, {
      params: {

      }
    })
  },
  addXtag (tname, tcolor) {
    return axios.post(addXtagSource, {
      tname: tname,
      tcolor: tcolor
    })
  },
  uploadBlogImage (pictureDes, imageValue) {
    return axios.post(uploadBlogImageSource, {
      pictureDes: pictureDes,
      imageValue: imageValue
    })
  },
  login (username, password) {
    return axios.post(loginSource, {
      username: username,
      password: password
    })
  },
  checkLoginStatus (token) {
    return axios.get(checkLoginStatusSource, {
      params: {
        token: token
      }
    })
  }
}
