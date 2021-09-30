import { useStore } from 'vuex'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions: string[] = store.state.loginModule.permission
  const lowerPageName = pageName.toLocaleLowerCase()
  const verifyPermission = `system:${lowerPageName}:${handleName}`
  return !!permissions.find((item) => item === verifyPermission)
}
