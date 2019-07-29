/**
* @Author: 李晨光
* @Date: 2019/7/3
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/3
**/
<comment>
  # 组件注释
  用户中心
  1.更换主题
  2.退出登录
  3.其他
</comment>
<template>
  <div id="UserMenu">
    <div class="user-wrapper">
      <div class="content-box">
        <a-dropdown>
          <div >
            <a-avatar class="avatar" size="small" :src="loginMsg.avatar || '../../../static/man_2.jpg'"/>
            <span class="nick">{{ loginMsg.nickname }}</span>
          </div>
          <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
            <!--更换主题-->
            <a-menu-item key="0">
              <p style="margin-bottom: 10px"><icon-font type="spm-icon-flag"/>更换主题</p>
              <ThemeColor></ThemeColor>
            </a-menu-item>
            <a-menu-item key="1">
              <router-link :to="{ name: 'center' }">
                <a-icon type="user"/>
                <span>个人中心</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link :to="{ name: 'settings' }">
                <a-icon type="setting"/>
                <span>账户设置</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="3" disabled>
              <a-icon type="setting"/>
              <span>测试</span>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="4">
              <a href="javascript:;" @click="handleLogout">
                <a-icon type="logout"/>
                <span>退出登录</span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import ThemeColor from '@/themeColor/ThemeColor'
  import { mapState } from 'vuex'
  export default {
    name: 'UserMenu',
    components: { ThemeColor },
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapState({
        loginMsg: state => state.login_msg,
      })
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {
      // 登出
      handleLogout () {
        let that = this
        this.$confirm({
          title: '提示',
          content: '真的要注销登录吗 ?',
          okText: '确认',
          cancelText: '放弃',
          onOk () {
            // window.location.reload()
            that.$router.push({name: 'Login'})
          },
          onCancel () {
          }
        })
      }
    },
    destroyed() {
    }
  }
</script>

<style lang="scss">
  #UserMenu{
    height: 100%;
    .user-wrapper{
      height: 100%;
      .content-box{
        height: 100%;
        .ant-dropdown-trigger{
          height: 100%;
        }
      }
    }
    .avatar{
      width: 30px;
      height: 30px;
      margin: 0 16px;
    }
    .nick{
      margin-right: 16px;
    }
  }

</style>
