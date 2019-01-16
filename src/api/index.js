/*
 * API requests
 * @Author: baixiaoming
 * @Date: 2019-01-12 21:00:52
 * @Last Modified by: baixiaoming
 * @Last Modified time: 2019-01-16 23:10:17
 */

import axios from 'axios'

/**
 * 获取用户信息
 * @param {*} userId 用户 id
 */
export const getUserInfo = (userId) => axios.get('/user/info', { params: { userId } })
