/**
* @Author: 李晨光
* @Date: 2019/7/1
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/1
**/
<comment>
    # 组件注释
</comment>
<template>
    <div id="BasicDrawer">
      <a-layout-sider
        class="sider"
        :trigger="null"
        width="240px"
        :collapsedWidth="0"
        collapsible
        theme="light"
        v-model="collapsed"
      >
        <div class="logo flex justify-center">
          <img :src="logoPro" style="width: 60px;" alt="" v-if="collapsed">
          <img :src="logoPro" style="width: 60px;" alt="" v-if="!collapsed">
          <img :src="logoSub" style="width: 80px;" alt="" v-if="!collapsed">
        </div>
        <div class="menu">
          <a-menu
            :defaultSelectedKeys="[route]"
            :openKeys.sync="openKeys"
            mode="inline"
            :inlineCollapsed="collapsed"
          >
            <template v-for="item in routes">
              <a-menu-item v-if="!item.children" :key="item.path" @click="routerLink(item.path)">
                <icon-font type="spm-icon-home" />
                <span>{{item.title}}</span>
              </a-menu-item>
              <sub-menu v-else :menu-info="item" :key="item.path"/>
            </template>
          </a-menu>
        </div>
      </a-layout-sider>
    </div>
</template>

<script>
  import { mapState } from "vuex"
  import VuePerfectScrollbar from "vue-perfect-scrollbar"
  import SubMenu from '@/menu/SubMenu'
    export default {
      name: 'BasicDrawer',
      components: {
        'sub-menu': SubMenu,
      },
      props: {
        collapsed: {
          type: Boolean,
          default: false,
        },
        routes: {
          type: Array,
          default: () => {
            return []
          }
        }
      },
      data() {
        return {
          logoPro:require('#/assets/image/logo-pro.png'),
          logoSub:require('#/assets/image/logo-sub.png'),
          openKeys: [],

        }
      },
      computed: {
        ...mapState({
          route: state => state.route,
          open_keys: state => state.open_keys,
        })
      },
      created() {
        this.openKeys = this.open_keys
      },
      mounted() {
      },
      watch: {
        // 监听route 保证历史记录
        $route(val){
          // console.log(val)
          this.$store.commit('SET_ROUTE',val.path)
        },
        // 监听openKeys 保证历史记录
        openKeys (val) {
          // console.log('openKeys', val)
          this.$store.commit('SET_OPENKEYS',val)
        }
      },
      methods: {
        routerLink(path) {
          path && this.$router.push(path)
        }

      },
      destroyed() {
      }
    }
</script>

<style lang="scss">
  #BasicDrawer{
    height: 100%;
    .logo {
      height: 60px;
      box-sizing: border-box;
      @include primary_bg_color();
      img{
        margin: 20px 0;
      }
    }
    .menu{
      height: calc(100% - 60px);
      overflow: hidden;
    }
    .menu:hover{
      overflow: auto;
    }
    .ant-menu-inline .ant-menu-item:after {
      right: calc(100% - 3px);
    }
    .sider{
      height: 100%;
      box-shadow: none;
    }
    .menu{
      border-right: 1px solid $border-color-1;
    }
    .ant-menu-root.ant-menu-vertical, .ant-menu-root.ant-menu-vertical-left, .ant-menu-root.ant-menu-vertical-right, .ant-menu-root.ant-menu-inline{
      border: 0;
    }

  }
</style>
