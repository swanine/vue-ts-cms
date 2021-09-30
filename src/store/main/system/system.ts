import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '../../types'

import { getPageListData } from '@/api/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.goodsCount = menuCount
    }
  },
  getters: {
    // 匹配pageName返回对应State数据
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'Users':
            return state.usersList
          case 'Role':
            return state.roleList
          case 'Goods':
            return state.goodsList
          case 'Menu':
            return state.menuList
        }
      }
    },
    pageDataCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'Users':
            return state.usersCount
          case 'Role':
            return state.roleCount
          case 'Goods':
            return state.goodsCount
          case 'Menu':
            return state.menuCount
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
        case 'Users':
          pageUrl = '/users/list'
          break
        case 'Role':
          pageUrl = '/role/list'
          break
        case 'Goods':
          pageUrl = '/goods/list'
          break
        case 'Menu':
          pageUrl = '/menu/list'
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
