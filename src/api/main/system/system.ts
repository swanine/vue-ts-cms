import swanRequest from '@/utils/index'

export function getPageListData(url: string, queryInfo: any) {
  return swanRequest.post({
    url: url,
    data: queryInfo
  })
}
