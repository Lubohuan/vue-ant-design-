/**
* @Author: 李晨光
* @Date: 2019/7/3
* @Version: 1.0
* @Last Modified by: 李晨光
* @Last Modified time: 2019/7/3
**/
<comment>
  # 组件注释
</comment>
<template>
  <div id="Home" class="m-20">
    <Overview></Overview>
  </div>
</template>

<script>
  import Overview from '@/home/Overview'
  export default {
    name: 'Home',
    components: {
      Overview
    },
    props: {},
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
  .ant-form-item-label{
    label{
      animation: shake .6s cubic-bezier(.25,.8,.5,1);
    }
  }
</style>
