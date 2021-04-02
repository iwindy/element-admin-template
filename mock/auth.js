const Mock = require('mockjs')

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

module.exports = [
  // 获取登录验证码
  {
    url: '/vue-element-admin/auth/captcha',
    type: 'get',
    response: _ => {
      const imgUrl = Mock.Random.image('100x40', '#4A7BF7', Mock.Random.integer(1000, 9999))
      return {
        code: 20000,
        data: imgUrl
      }
    }
  },
  // 登录
  {
    url: '/vue-element-admin/auth/login',
    type: 'get',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  }

]
