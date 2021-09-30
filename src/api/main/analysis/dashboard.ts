import swanRequest from '@/utils/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsCount = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return swanRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return swanRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return swanRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsCount() {
  return swanRequest.get({
    url: DashboardAPI.addressGoodsCount
  })
}
