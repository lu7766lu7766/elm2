
const getters={
	//获取订单商品
	getCart(state) {
		return state.cart;
	},
	//获取总消费
	getTotal(state) {
		return state.total;
	},
	//获取登录状态
	getLoginState(state) {
		return state.isLogin;
	},
	//获取dom树
	getRefs(state) {
		return state.refs;
	}
}

export default getters;