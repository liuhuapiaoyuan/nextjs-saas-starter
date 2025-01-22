import { Prisma } from '@prisma/client'

export const ExistsExtension = Prisma.defineExtension({
  name: 'prisma-extension-exists', //Extension name
  model: {
    $allModels: {
      /**
       *  判断数据是否存在
       * @param this
       * @param where
       * @returns
       */
      async exists<T>(
        this: T,
        where: Prisma.Args<T, 'findFirst'>['where']
      ): Promise<boolean> {
        const context = Prisma.getExtensionContext(this)
        const result = await (context as any).findFirst({ where })
        return result !== null
      },
    },
  },
})
