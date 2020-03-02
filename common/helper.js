
// const url = "https://www.zhongjubang.com/api/";  
const url = "https://www.zhongjubang.com/test/";  
/**
 * 可获取多级属性的值,又能避免中间不存在属性而程序出错
 * e.g helper.get(res, 'data.list[0].state')
 * e.g helper.get(res, ['data', 'list','0', 'state'], 'default value')
 */
const get = function(object, path, defaultValue){
    return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
            .reduce((o, k) => (o || {})[k], object) || defaultValue;
}

const getTokenOrLogin = function(){
	let token = uni.getStorageSync('token')
	if(!token){
		uni.navigateTo({
			url: '/pages/loginPhone/loginPhone'
		})
	}
	return token
}
export default {  
    url,getTokenOrLogin,get
}