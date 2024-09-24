function getDisplayedPages(
  totalRows,
  pageSize,
  current,
  maxDisplayedPages = 7
) {
  const totalPages = Math.ceil(totalRows / pageSize)
  const items = []
  const divider = -1 // 用于表示省略号

  if (totalPages <= maxDisplayedPages) {
    // 如果总页数小于等于最大显示数，直接返回所有页码
    for (let i = 1; i <= totalPages; i++) {
      items.push(i)
    }
    return items
  }

  // 添加第一页
  items.push(1)

  const r = Math.floor((maxDisplayedPages - 3) / 2) // 根据需要显示的页面数量计算前后各需显示的页码数
  const beforeWrapped = current > r + 2 // 是否需要显示省略号前面的包围页码
  const afterWrapped = current < totalPages - r - 1 // 是否需要显示省略号后面的包围页码

  if (beforeWrapped) items.push(divider) // 添加省略号前

  // 添加当前页附近的页码
  for (
    let i = Math.max(2, current - r);
    i <= Math.min(totalPages - 1, current + r);
    i++
  ) {
    items.push(i)
  }

  if (afterWrapped) items.push(divider) // 添加省略号后

  // 添加最后一页
  items.push(totalPages)

  return items
}

// 示例调用
const totalRows = 500
const pageSize = 10
const currentPage = 49
const displayedPages = getDisplayedPages(totalRows, pageSize, currentPage, 10)
console.log(displayedPages) // 输出的页码列表
