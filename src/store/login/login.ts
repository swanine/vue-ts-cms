import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { loginAccount, userInfoById, userMenus } from '@/api/login/login'
import { IAccount } from '@/api/login/type'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permission: []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      const permissions = mapMenusToPermissions(userMenus)
      state.permission = permissions
    }
  },
  getters: {},
  actions: {
    async accountLogin({ commit }, payload: IAccount) {
      const result = await loginAccount(payload)
      const { id, token } = result.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await userInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult = await userMenus(userInfo.role.id)
      commit('changeUserMenus', userMenusResult.data)
      localCache.setCache('userMenus', userMenusResult.data)

      // 路由跳转首页
      router.push('/main')
    },
    // 刷新后讲本地存储重新存放store
    loadLocalStorage({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenusResult = localCache.getCache('userMenus')
      if (userMenusResult) {
        commit('changeUserMenus', userMenusResult)
      }
    }
  }
}

export default loginModule
