import { createSoftDeleteExtension } from 'prisma-extension-soft-delete'
import { Prisma } from '@prisma/client'
export const SoftdeleteExtension = createSoftDeleteExtension({
  models: Object.values(Prisma.ModelName)
    .map(modelName => ({
      [modelName]: true,
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr })),
  defaultConfig: {
    field: 'deletedAt',
    createValue: deleted => {
      if (deleted) return new Date()
      return null
    },
  },
})
