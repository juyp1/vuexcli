<template>
    <div>
        <h1>{{login}}</h1>
        <button @click="changeLoginway('login')">登录</button>
        <button @click="changeLoginway('register')">注册</button>
        <button @click="loginajax()">发起ajax请求得到数据</button>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data: function () {
        return {

            login: '',
            loginway: ''
        }
    },
    //store.getters.doneTodosCount
    ...mapGetters([
        'test',
        'getLoginway',
        'changlist'
    ]),
    methods: {

        changeLoginway(loginway) {
            //this必须重新指向
            let _this = this;
            this.$store.dispatch('changeLoginway', loginway).then(function (data) {
                _this.login = data;
            });


        },
        loginajax() {
            this.$store.dispatch('changlist')
        }
    }

}

</script>
