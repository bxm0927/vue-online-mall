/*
 * API requests
 * @Author: baixiaoming
 * @Date: 2019-01-12 21:00:52
 * @Last Modified by: baixiaoming
 * @Last Modified time: 2019-01-20 13:54:38
 */

import axios from 'axios'

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
