const imageUpload = {
	state: {
		itemImage: [], // 存上传图片所有图片信息
		tagitems: []   // 存图片上的所有标签
	},
	mutations: {
		addTag(state, tagObj) {
			(state.tagitems).push(tagObj)
		}
	}
}

export default imageUpload