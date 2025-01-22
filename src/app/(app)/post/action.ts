'use server'

import { db } from '@/lib/db'
/**
 * 查找对象
 * @param id
 * @returns
 */
export async function get(id: string) {
  return db.post.findUnique({
    where: { id },
  })
}
export type PostModel = Awaited<ReturnType<typeof get>>

/**
 * 新建对象
 * @param data
 * @returns
 */
export async function create(data: ModelCreate<'Post'>) {
  return db.post.create({
    data,
  })
}
/**
 * 更新对象
 * @param id
 * @param data
 * @returns
 */
export async function update(id: string, data: ModelUpdate<'Post'>) {
  return db.post.update({
    where: { id },
    data,
  })
}

/**
 * 删除对象
 * @param id
 * @returns
 */
export async function remove(id: string) {
  return db.post.delete({
    where: { id },
  })
}
/**
 * 批量删除对象
 * @param ids
 * @returns
 */
export async function removeMany(ids: string[]) {
  return db.post.deleteMany({
    where: { id: { in: ids } },
  })
}
/**
 * 批量创建对象
 * @param data
 * @returns
 */
export async function createMany(data: ModelCreateMany<'Post'>) {
  return db.post.createMany({
    data,
  })
}
/**
 * 批量更新对象
 * @param data
 * @returns
 */
export async function updateMany(data: ModelUpdateMany<'Post'>) {
  return db.post.updateMany({
    data,
  })
}
/**
 * 批量查找对象
 * @param ids
 * @returns
 */
export async function findMany(ids: string[]) {
  return db.post.findMany({
    where: { id: { in: ids } },
  })
}

export async function exists(where: ModelExists<'Post'>) {
  return db.post.exists(where)
}
export async function list(params: ModelFindMany<'Post'>) {
  return db.post.findMany(params)
}
/**
 * 分页查找对象
 * @param params
 * @returns
 */
export async function pagination(params: ModelPageQuery<'Post'>) {
  return db.post.paginate(params)
}
/**
 * 查询回收站中的记录
 * @param params 分页参数
 * @returns 回收站中的记录
 */
export async function recycleBinPagination(params: ModelPageQuery<'Post'>) {
  const { where, ...args } = params
  return db.post.paginate({
    where: Object.assign({}, where, {
      deletedAt: { not: null }, // 查询软删除的记录
    }),
    ...args,
  })
}
export async function recycleBinList(params: ModelFindMany<'Post'>) {
  const { where, ...args } = params
  return db.post.findMany({
    where: Object.assign({}, where, {
      deletedAt: { not: null }, // 查询软删除的记录
    }),
    ...args,
  })
}

export async function removeRecycleBin(id: string) {
  return db.post.delete({
    where: { id, deletedAt: { not: null } },
  })
}

/**
 *
 * @param id 回收站中的记录id
 * @returns
 */
export async function restore(id: string) {
  return db.post.update({
    where: { id },
    data: { deletedAt: null },
  })
}
