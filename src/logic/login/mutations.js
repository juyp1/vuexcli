// export default {
//     CHANGE_LOGINWAY(state, loginway) {
//         console.log(loginway);
//         state.loginway = loginway;
//     },

//     LISTCHANGGE(state, data) {
//         state.data = data;
//     }
// }

export const mutations = {
    CHANGE_LOGINWAY: (state, loginway) => {

        state.loginway = loginway;
    },

    LISTCHANGGE: (state, data) => {
        state.data = data;
    }
}