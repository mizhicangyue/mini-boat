import request from "umi-request";
/**
 * @description: 全局getServe函数
 * @return {*}
 * @param type
 * @param data
 * @param params
 * @param obj
 * @param urlParams
 * @param hashParams
 * @param methodType
 */
export const getServiceGlobal = <T extends {}>(type: T, data: any, tempParams: any, obj: any, urlParams?: any, hashParams?: string, methodType?: string) => {
    const {url, method, params, ...props} = obj[type];
    const tempProps: Record<string, unknown> = props;
    if (hashParams) {
        return request(`${url}/${hashParams}`, {data, params: {...params, ...tempParams}, method, ...tempProps});
    }
    return request(urlParams ? url + urlParams : url, {
        data,
        params: {...params, ...tempParams},
        method: methodType || method, ...tempProps
    });
};
