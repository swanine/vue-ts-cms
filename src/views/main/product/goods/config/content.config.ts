export const contentTableConfig = {
  title: '商品信息',
  buttonText: '新建商品',
  // 表格头数据
  propsList: [
    { prop: 'name', label: '商品名称', minWidth: '140' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80', slotName: 'newPrice' },
    { prop: 'imageUrl', label: '商品图片', minWidth: '84', slotName: 'image' },
    { prop: 'address', label: '发货地址', minWidth: '70' },
    { prop: 'enable', label: '状态', minWidth: '66', slotName: 'enable' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '146',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '146',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '108',
      slotName: 'handle'
    }
  ],

  // 显示表格序号
  showIndexColumn: true,
  // 行选中功能
  showSelectColumn: true
}
