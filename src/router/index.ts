import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main/analysis/overview'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    meta: {
      parent: '系统首页'
    },
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        // 系统总览 -> 核心技术
        path: '/main/analysis/overview',
        meta: {
          parent: '系统总览',
          title: '核心技术'
        },
        component: () => import('@/views/main/analysis/overview/index.vue')
      },
      {
        // 系統总览 -> 商品统计
        path: '/main/analysis/dashboard',
        meta: {
          parent: '系统总览',
          title: '商品统计'
        },
        component: () => import('@/views/main/analysis/dashboard/index.vue')
      },
      {
        // 系統管理 -> 用户管理
        path: '/main/system/user',
        meta: {
          parent: '系统管理',
          title: '用户管理'
        },
        component: () => import('@/views/main/system/user/index.vue')
      },
      {
        // 系統管理 -> 部门管理
        path: '/main/system/department',
        meta: {
          parent: '系统管理',
          title: '部门管理'
        },
        component: () => import('@/views/main/system/department/index.vue')
      },
      {
        // 系統管理 -> 菜单管理
        path: '/main/system/menu',
        meta: {
          parent: '系统管理',
          title: '菜单管理'
        },
        component: () => import('@/views/main/system/menu/index.vue')
      },
      {
        // 系統管理 -> 角色管理
        path: '/main/system/role',
        meta: {
          parent: '系统管理',
          title: '角色管理'
        },
        component: () => import('@/views/main/system/role/index.vue')
      },
      {
        // 商品中心 -> 商品类别
        path: '/main/product/category',
        meta: {
          parent: '商品中心',
          title: '商品类别'
        },
        component: () => import('@/views/main/product/category/index.vue')
      },
      {
        // 商品中心 -> 商品信息
        path: '/main/product/goods',
        meta: {
          parent: '商品中心',
          title: '商品信息'
        },
        component: () => import('@/views/main/product/goods/index.vue')
      },
      {
        // 随便聊聊 -> 你的故事
        path: '/main/story/chat',
        meta: {
          parent: '随便聊聊',
          title: '你的故事'
        },
        component: () => import('@/views/main/story/chat/index.vue')
      },
      {
        // 随便聊聊 -> 故事列表
        path: '/main/story/list',
        meta: {
          parent: '随便聊聊',
          title: '故事列表'
        },
        component: () => import('@/views/main/story/list/index.vue')
      }
    ]
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/login') {
    const token = localCache.getCache('token')
    if (token) {
      return '/main'
    }
  }
})

export default router
