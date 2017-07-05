import { types } from './types';

//此处ajax请求的代码
const changeLoginway = ({ commit, state }, loginway) => {
    commit(types.CHANGE_LOGINWAY, loginway)
    return loginway = "login";
}
const changlist = ({ commit, state }, data) => {
    commit(types.LISTCHANGGE, data)
    return data = "我是json数据";

}

export const actions = {
    changeLoginway: changeLoginway,
    changlist: changlist

}