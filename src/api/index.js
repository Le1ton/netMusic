import axios from "axios"

let baseUrl = 'http://localhost:3000'

// 获取轮播图的API
// type:资源类型,对应以下类型,默认为0,即PC
// 0:pc  1:android  2:iphone  3:ipad
export function getBanner(type = 0) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 获取推荐歌单
// 取出数量 , 默认为 10
export function getMusicList(limit = 10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单详情
export function getPlayListDetails(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 获取歌词
export function getLyric(id) {
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}

// 搜索歌曲
export function searchMusic(keyword) {
    return axios.get(`${baseUrl}/search?keywords=${keyword}`)
}

// 手机登录
export function phoneLogin(phone, password) {
    return axios.get(`${baseUrl}//login/cellphone?phone=${phone}&password=${password}`)
}

export default {
    getBanner,getMusicList,getPlayListDetails,getLyric,searchMusic,phoneLogin
}
