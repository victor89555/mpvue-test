<template>
  <div>首页</div>
</template>

<script>
  export default {
    data () {
      return {
        info: ''
      }
    },
    methods: {},
    onLoad: function () {
      console.log('onLoad')
    },
    onReady: function () {
      console.log('onReady')
    },
    onShow: function () {
      console.log('onShow')
    },
    onHide: function () {
      console.log('onHide')
    },
    onUnLoad: function () {
      console.log('onUnLoad')
    }
  }
</script>

<style>
  .main {
    display: block;
  }
</style>
