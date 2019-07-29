/**
* @Author: 李晨光
* @Date: 2019/7/5
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/5
**/
<comment>
    # 组件注释
    全局内容区header
    title 标题名
</comment>
<template>
    <div id="Title">
      <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
          <a-card>
            <div class="flex justify-between align-center">
              <div class="font-h1">{{ title }}</div>
              <div>
                <slot name="handle"></slot>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
</template>

<script>
    export default {
        name: 'Title',
        components: {},
        props: {
          title:{
            type: String,
            default: '我是标题'
          }
        },
        data() {
            return {}
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        watch: {},
        methods: {},
        destroyed() {
        }
    }
</script>

<style lang="scss">
  #title{
    .title{
      /*font-size:;*/
    }
  }
</style>
