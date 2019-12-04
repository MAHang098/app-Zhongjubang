import Vue from 'vue'
import Vuex from 'vuex'
import imageUpload from './module/image.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		index:null,
		testArr: [],
		uploadImage: [],
		drafts: [],
		topic: '',
		pageType: '',
		adress: {}
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		saveImage(state, imgArr) {
			// 如果是在发布页面上传图片，push到uploadImage中，由于push的时候会把发布传过来的type，因此push完后需要删除最后一个
			if(imgArr.type == 'pre-release') {
				for(let i in imgArr) {
					state.uploadImage.push(imgArr[i]);
				}
				state.uploadImage.pop();
				return;
			}
			let mark = false,index, updateTag = false;
			if(state.uploadImage.length == 0) {
				state.uploadImage = imgArr;
				return;
			}
			for(let i in state.uploadImage) {
				let tagArr = state.uploadImage[i].testArr;
				if(tagArr.length == 0 && i == imgArr.currentImage) {
					state.uploadImage[i].testArr.push(imgArr);
					return;
				}
				for(let a in tagArr) {
					if(tagArr[a].currentImage == imgArr.currentImage) {
						if(imgArr.type == 'add') {
							updateTag = true;
							break;
						}
						mark = true; 
						index = i;
						break;
					}
				}
				
			}
			if(updateTag) {
				// console.log(state.uploadImage)
			}
			if(mark) {
				state.uploadImage[index].testArr[0].allTagArr.push(imgArr.allTagArr[0])
			} 
		},
		saveDrafts(state, obj) {
			state.drafts.push(obj);
		},
		// 用于保存参与话题的title，使其发布页面不能在修改话题和添加话题
		updateType(state, topic) {
			state.topic = topic;
		},
		// 清空uploadImage的数据
		clearData(state, arr) {
			state.uploadImage = arr;
		},
		// 清空drafts的数据
		clearDrafts(state, arr) {
			state.drafts = arr;
		},
		// 用于存页面类型
		defaultPage(state, type) {
			state.pageType = type
		},
		// 获取选择后的地址
		getAdress(state, obj) {
			state.adress = obj;
		}
    },
	modules: {
		imageUpload
	}
})

export default store
