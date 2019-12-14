const history = {
	namespaced:true,
	state: {
		historyList: [], // 存储搜索历史记录
	},
	mutations: {
		addRecord(state, str) {
			state.historyList.push(str)
		}
	}
}

export default history