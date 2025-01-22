import { list } from './action'

export type PostColumType = Awaited<ReturnType<typeof list>>

// 使用zod 创建 CRUD对象
