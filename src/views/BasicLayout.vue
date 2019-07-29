/**
* @Author: 李晨光
* @Date: 2019/7/2
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/2
**/
<comment>
  # 组件注释
  项目基础布局
  ——————————————
  | |———————————|
  | | |
  | | |
  | | |
  ——————————————
</comment>
<template>
  <div id="BasicLayout">
    <a-layout class="layout-custom-trigger">
      <!--左侧导航-->
      <basic-drawer :routes="list" :collapsed="collapsed"></basic-drawer>
      <a-layout>
        <!--上栏菜单-->
        <basic-toolbar @side-icon-click="toggleCollapsed"></basic-toolbar>
        <!--中心内容-->
        <a-layout-content :style="{ height: '100%', marginTop: '60px' }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import BasicDrawer from '@/layouts/BasicDrawer'
  import BasicToolbar from '@/layouts/BasicToolbar'

  export default {
    name: 'BasicLayout',
    components: {
      'basic-drawer': BasicDrawer,
      'basic-toolbar': BasicToolbar,
    },
    props: {},
    data() {
      return {
        collapsed: false,
        list: [
          {
            title: '首页',
            path: '/main/home',
          },
          {
            title: '集中测试',
            path: '/main/test',
            children: [
              {
                title: '路博欢',
                path: '/main/test/lubohuan',
              },
              {
                title: '李晨光',
                path: '/main/test/lichenguang',
                children: [
                  {
                    title: 'table模板',
                    path: '/main/test/lichenguang/tableTemplate',
                  },
                  {
                    title: '基础组件',
                    path: '/main/test/lichenguang/baseComponents',
                  },
                ]
              },
              {
                title: '张蒙',
                path: '/main/test/zhangmeng',
              },
              {
                title: '兰文亮',
                path: '/main/test/lanwenliang',
              },
              {
                title: '胡玲',
                path: '/main/test/huling',
              },
              {
                title: '何景春',
                path: '/main/test/hejingchun',
              },
              {
                title: '刘攀',
                path: '/main/test/liupan',
              },
              {
                title: '刘艺伟',
                path: '/main/test/liuyiwei',
              },
            ],
          }
        ],
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {
      toggleCollapsed(val) {
        this.collapsed = val
      },
    },
    destroyed() {
    }
  }
</script>

<style lang="scss">
  #BasicLayout {
    width: 100%;
    height: 100%;

    .layout-custom-trigger {
      width: 100%;
      height: 100%;

    }
  }
</style>
