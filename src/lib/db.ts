import { PrismaClient } from '@prisma/client'
import { extension as paginateExtension } from 'prisma-paginate'
import { ExistsExtension } from './prisma-extension/exists-extension'
import { SoftdeleteExtension } from './prisma-extension/softdelete-extension'
import { LogExtension } from './prisma-extension/log-extension'

function createPrisma() {
  return new PrismaClient()
    .$extends(paginateExtension)
    .$extends(ExistsExtension)
    .$extends(SoftdeleteExtension)
    .$extends(LogExtension)
}

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: ReturnType<typeof createPrisma>
}

let prisma: ReturnType<typeof createPrisma>
if (process.env.NODE_ENV === 'production') {
  prisma = createPrisma()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrisma()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
