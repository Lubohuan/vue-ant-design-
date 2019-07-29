/**
* @Author: 李晨光
* @Date: 2019/7/2
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/2
**/
<comment>
  # 组件注释
  登录页
</comment>
<template>
  <div id="Login">
    <a-row type="flex" justify="center" align="middle" style="height: 100vh;">
      <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" >
        <a-card title="登 录" hoverable >
          <a-form
            id="formLogin"
            class="user-layout-login"
            ref="formLogin"
            :form="form"
          >
            <a-form-item>
              <a-input
                size="large"
                type="text"
                placeholder="账户: admin"
                v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
              ]"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-input
                size="large"
                type="password"
                autocomplete="false"
                placeholder="密码: admin or ant.design"
                v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>


            <a-form-item>
              <a-checkbox v-decorator="['rememberMe']">自动登录</a-checkbox>
              <router-link
                :to="{ name: 'recover', params: { user: 'aaa'} }"
                class="forge-password"
                style="float: right;"
              >忘记密码
              </router-link>
            </a-form-item>

            <a-form-item style="margin-top:24px">
              <a-button
                size="large"
                type="primary"
                class="login-button"
                :loading="loading"
                :disabled="loading"
                @click="login"
              >确定
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {},
    props: {},
    data() {
      return {
        username: 'admin',//用户名
        password: '123',//密码
        loading: false, //登录按钮加载状态
        form: this.$form.createForm(this),
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {
      handleUsernameOrEmail (rule, value, callback) {
        const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
        callback()
      },
      timeFix () {
        const time = new Date()
        const hour = time.getHours()
        return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
      },
      welcome () {
        const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
        const index = Math.floor(Math.random() * arr.length)
        return arr[index]
      },
      /**
       * 登录
       * 两种loading状态
       * 1.按钮loading
       * 2.全局loading
       */
      login() {
        // this.$loading.show('loading')
        this.form.validateFields((err, values) => {
          if (!err) {
            this.loading = true
            console.log('Received values of form: ', values);
            this.$post('/admin-user/login',values)
              .then((reponse) => {
                console.log(reponse)
                this.loading = false
                this.$store.commit('SET_LOGINMSG', {
                  nickname: '李晨光'
                })
                this.$router.push('/main/home')
                // this.$loading.hide('loading')
                this.$notification['success']({
                  message: '欢迎',
                  description: `${ this.timeFix() },${ this.welcome() }`,
                });
              })
              .catch((err) => {
                // this.$loading.hide('loading')
                this.loading = false
              })
          }
        });

      }
    },
    destroyed() {
    }
  }
</script>
<style lang="scss">
  #Login{
  }
</style>
