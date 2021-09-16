import swanRequest from '@/utils/index'
import { IAccount, ILoginType, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
// 账号登录
export function loginAccount(account: IAccount) {
  return swanRequest.post<IDataType<ILoginType>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 登录用户信息
export function userInfoById(id: number) {
  return swanRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

// 查询角色菜单
export function userMenus(id: number) {
  return swanRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
