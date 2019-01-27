/*
 * API requests
 * @Author: baixiaoming
 * @Date: 2019-01-12 21:00:52
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-01-27 18:36:33
 */

import axios from 'axios'

/**
 * 登录
 */
export const login = () => axios.get('/mockApi/login')

/**
 * 获取用户信息
 */
export const getUserInfo = () => axios.get('/mockApi/userInfo')

/**
 * 获取“全部产品”数据
 */
export const getProductList = () => axios.get('/mockApi/productList')

/**
 * 获取“最新消息”数据
 */
export const getNewsList = () => axios.get('/mockApi/newsList')

/**
 * 获取“轮播图”数据
 */
export const getSlideList = () => axios.get('/mockApi/slideList')

/**
 * 获取“产品板块”数据
 */
export const getBoardList = () => axios.get('/mockApi/boardList')
