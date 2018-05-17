<script>
export default {
  methods: {
    login: function () {
      let that = this
      wx.login({
        success: function (res) {
          console.log('success')
          if (res.code) {
            // 发起网络请求
            that.sendCode(res.code)
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        },
        fail: function (res) {
          console.log('fail')
          console.log(res)
        },
        complete: function (res) {
          console.log('complete')
          console.log(res)
        }
      })
    },
    sendCode: function (code) {
      console.log(code)
      wx.request({
        url: 'http://192.168.1.233:8070/user/user/smallRoutineLogin',
        method: 'GET',
        data: {
          jscode: code
        },
        success: function (res) {
          console.log('success')
          console.log(res)
        },
        fail: function (res) {
          console.log('fail')
          console.log(res)
        },
        complete: function (res) {
          console.log('complete')
          console.log(res)
        }
      })
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.login()

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  .container {
    font-size: 14px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }
</style>
