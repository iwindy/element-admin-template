import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/auth/login',
    method: 'post',
    data
  })
}

export function getCaptcha(data) {
  return request({
    url: '/vue-element-admin/auth/captcha',
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/auth/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/auth/logout',
    method: 'post'
  })
}
