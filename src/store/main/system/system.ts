import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '../../types'

import { getPageListData } from '@/api/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    // 匹配pageName返回对应State数据
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'User':
            return state.userList
          case 'Role':
            return state.roleList
        }
      }
    },
    pageDataCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'User':
            return state.userCount
          case 'Role':
            return state.roleCount
        }
      }
    }
  },
  actions: {
    async getPageList({ commit }, payload: any) {
      // 获取pageUrl
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'User':
          pageUrl = '/users/list'
          break
        case 'Role':
          pageUrl = '/role/list'
          break
      }
      // 对页面发送网络请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    }
  }
}

export default systemModule
