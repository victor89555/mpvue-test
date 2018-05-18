<template>
  <view>
    <view style="margin-bottom: 100rpx;">
      <picker @change="bindPickerChange" :value="index" :range="array">
        <view class="picker">
          当前选择：{{array[index]}}
        </view>
      </picker>
    </view>
    <view class="bottom-bar">
      <view class="bd" @click="bindViewTap()">价格：￥80.00</view>
      <view class="btn-buy" @click="clickHandle">购买</view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {},
        index: 0,
        array: ['A', 'B', 'C']
      }
    },

    methods: {
      bindViewTap () {
        const url = '../my-orders/main'
        wx.navigateTo({ url })
      },
      clickHandle (e) {
        console.log('clickHandle:', e)
      },
      bindPickerChange (e) {
        console.log(e.target.value)
        this.index = e.target.value
      }
    },
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
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100rpx;
    background-color: #ffffff;
    display: flex;
  }

  .bottom-bar .bd {
    flex: 1;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 24rpx;
  }
  .bottom-bar .btn-buy {
    width: 200rpx;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background-color: #EE5757;
    color: #ffffff;
  }
</style>
