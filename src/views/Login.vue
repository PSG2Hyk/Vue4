<template>
    <div class="Login">
        <h3>用户登录</h3>
        <p><Input prefix="ios-contact" placeholder="用户名" style="width: auto" /></p>
        <p><Input v-model="value18" type="password" password placeholder="用户密码" style="width: 200px" /></p>
        <p><Button type="primary" class="btn" @click="doLogin()">登录</Button></p>
        <p><Button type="primary" class="btn" to="/register">注册</Button></p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Login",
        data(){
            return{
               username:'',
               password:'',
            }
        },
        methods:{
            doLogin(){
                axios.post('http://localhost:8080/api/login',{username:this.username,password:this.password})
                    .then((res)=>{
                        if (res.data){
                            if (this.save) {
                                this.$cookies.set('username',this.username,'7d');
                            }
                            this.$store.commit('setLoginUser',this.username);
                            this.$router.push('/index');
                        }else {
                            alert('用户密码错误');
                            this.username="";
                            this.password="";
                        }
                })
            }
        }
    }
</script>

<style scoped>
 p{margin:10px 0px}
</style>