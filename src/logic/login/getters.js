//登录
// export const getLoginway = state => state.loginway

// //json数据
// export const changlist = state => state.data

export const loginGetter = {
    getLoginway(state) {
        return state.loginway
    },
    changlist(state) {
        return state.data
    }

}