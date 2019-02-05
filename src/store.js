import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0,
	persons: {
		name: 'noor',
		name: 'sajid',
		name: 'zaffar'
	}
}

const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? "Even" : "odd"
}
export default new Vuex.Store({
	state,
	getters
})