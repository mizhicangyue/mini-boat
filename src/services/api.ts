import {getServiceGlobal} from "../utils";

type typeTyping = 'getList' | 'getUser' | 'addArticle' | 'getDetails';
const obj = {
    /**
     * @Description: 获取博客列表
     */
    getList: {
        url: '/getList',
        method: 'GET',
        prefix: 'http://mock.metaapp.cn/mock/49'
    },
    /**
     * @Description: 获取用户信息
     */
    getUser: {
        url: '/getUser',
        method: 'GET',
        prefix: 'http://mock.metaapp.cn/mock/49'
    },
    /**
     * @Description: 插入文章
     */
    addArticle: {
        url: '/addArticle',
        method: 'POST',
        prefix: 'http://mock.metaapp.cn/mock/49'
    },
    /**
     * @Description: 获取文章详情
     */
    getDetails: {
        url: '/getDetails',
        method: 'GET',
        prefix: 'http://mock.metaapp.cn/mock/49'
    },
};
export default (type: typeTyping, data?: any, params?: any, urlParams?: string, hashParams?: string) => getServiceGlobal(type, data, params, obj, urlParams, hashParams);
