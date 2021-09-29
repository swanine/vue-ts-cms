export const contentTableConfig = {
  title: '角色数据',
  buttonText: '新建角色',
  // 表格头数据
  propsList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handle'
    }
  ],

  // 显示表格序号
  showIndexColumn: true,
  // 行选中功能
  showSelectColumn: true
}
