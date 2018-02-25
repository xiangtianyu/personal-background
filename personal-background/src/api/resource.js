import {
  API_ROOT
} from './config.js'
var apiBlog = {
  getAllTag: '/xtag/getAllValid',
  addXtag: '/xtag/add',
  uploadBlogImage: '/blog/uploadBlogImage',
  login: '/login',
  checkLoginStatus: '/checkLoginStatus'
}
export const getAllTagSource = API_ROOT.concat(apiBlog.getAllTag)
export const addXtagSource = API_ROOT.concat(apiBlog.addXtag)
export const uploadBlogImageSource = API_ROOT.concat(apiBlog.uploadBlogImage)
export const loginSource = API_ROOT.concat(apiBlog.login)
export const checkLoginStatusSource = API_ROOT.concat(apiBlog.checkLoginStatus)

