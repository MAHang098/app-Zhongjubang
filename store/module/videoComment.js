const videoComment = {
	namespaced:true,
	state: {
		commentData: { // 待发送的数据
			type:'', // comment | reply
			shortVideoId: '',
			inUserId: '', // 发起评论或回复的人
			inUserName: '',
			outUserId: '', //  被回复的人,或者被评论的视频作者
			outUserName: '',
			shortVideoDiscuss:'', // 评论或回复的内容
		}
	},
	mutations: {
		init(state, data) {
			for(let key in state.commentData){
				state.commentData[key] = data[key] || ''
			}
		},
		setShortVideoDiscuss(state, val){
			state.commentData.shortVideoDiscuss = val
		}
	}
}

export default videoComment