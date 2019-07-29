/**
* @Author: 李晨光
* @Date: 2019/7/1
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/1
**/
<comment>
  # 组件注释
  项目入口
</comment>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex"
  import config from '@/themeColor/defaultSettings'
  import {updateTheme, colorList} from '@/themeColor/settingConfig'
  export default {
    name: 'App',
    components: {},
    props: {},
    data() {
      return {
        baseConfig: Object.assign({}, config),
      }
    },
    computed: {
      ...mapState({
        primaryColor: state => state.color,
      })
    },
    created() {
      // window.document.documentElement.setAttribute("data-theme", "theme");
      // 当主题色不是默认色时，才进行主题编译
      if (this.primaryColor !== config.primaryColor) {
        updateTheme(this.primaryColor)
      }
    },
    mounted() {

    },
    watch: {},
    methods: {
      changeColor(color) {
        this.baseConfig.primaryColor = color
        if (this.primaryColor !== color) {
          this.$store.commit('SET_COLOR', color)
          updateTheme(color)
        }
      }
    },
    destroyed() {
    }
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;*/
  }
</style>
