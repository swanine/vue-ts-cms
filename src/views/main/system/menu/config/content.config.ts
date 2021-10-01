export const contentTableConfig = {
  title: '菜单数据',
  buttonText: '新建菜单',
  // 表格头数据
  propsList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '50' },
    { prop: 'url', label: '菜单url', minWidth: '120' },
    { prop: 'icon', label: '菜单图标', minWidth: '80' },
    { prop: 'permission', label: '按钮权限', minWidth: '60' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '110',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '110',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '80',
      slotName: 'handle'
    }
  ],

  // 显示表格序号
  showIndexColumn: false,
  // 行选中功能
  showSelectColumn: false,
  // 表格展开配置
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  // 显示footer分页
  showFooter: false
}
