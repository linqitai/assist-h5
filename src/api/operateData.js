import http from './http'
import api from './index'
// 合同
//export const pdfUrl = root + '/m/install/contract/'
// 审核员列表获取接口
// export const getAssistUserInfo = (params) => {
//   return http.fetchGet(api.getAssistUserInfo, params)
// }

export default {
	getAssistUserInfo(params){
		return http.fetchGet(api.getAssistUserInfo, params)
	}
}