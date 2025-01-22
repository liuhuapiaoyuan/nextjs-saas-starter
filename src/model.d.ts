export {} // 显式将文件标记为模块
import { Prisma } from '@prisma/client'
import { PaginationArgs } from 'prisma-paginate'
declare global {
  type ModelPageQuery<T extends Prisma.ModelName> =
    Prisma.TypeMap['model'][T]['operations']['findMany']['args'] &
      PaginationArgs
  type ModelPageResult<T extends Prisma.ModelName> = {
    data: Prisma.Result<
      Prisma.TypeMap['model'][T],
      Prisma.TypeMap['model'][T]['operations']['findMany']['args'],
      'findMany'
    >
    total: number
    page: number
    pageSize: number
    totalPages: number
  }
  type ModelCreate<T extends Prisma.ModelName> = Prisma.Args<
    T,
    'create'
  >['data']
  type ModelCreateMany<T extends Prisma.ModelName> = Prisma.Args<
    T,
    'createMany'
  >['data']
  type ModelUpdate<T extends Prisma.ModelName> = Prisma.Args<
    T,
    'update'
  >['data']
  type ModelUpdate<T extends Prisma.ModelName> = Prisma.Args<
    T,
    'update'
  >['data']
  type ModelUpdateMany<T extends Prisma.ModelName> = Prisma.Args<
    T,
    'updateMany'
  >['data']
  type ModelDelete<T extends Prisma.ModelName> = Prisma.Args<T, 'delete'>
  type ModelFindOne<T extends Prisma.ModelName> = Prisma.Args<T, 'findOne'>
  type ModelFindMany<T extends Prisma.ModelName> = Prisma.Args<T, 'findMany'>
  type ModelAggregate<T extends Prisma.ModelName> = Prisma.Args<T, 'aggregate'>
  type ModelExists<T extends Prisma.ModelName> = Prisma.Args<
    T,
    'findOne'
  >['where']
}
