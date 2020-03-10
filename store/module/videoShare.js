const videoShare = {
	namespaced:true,
	state: {
		videoId: { // 待发送的数据
			shortVideoId:12, 
	},
	mutations: {
		init(state, data) {
			for(let key in state.videoId){
				state.videoId[key] = data[key] || ''
			}
		},
		setshortVideoId(state, val){
			state.videoId.shortVideoId = val
		}
	}
}

export default videoShare