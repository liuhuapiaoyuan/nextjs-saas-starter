import createLogExtension, { LogData } from 'prisma-extension-log'
export const LogExtension = createLogExtension({
  log: function (
    data: LogData,
    options?: Record<string, any> | undefined
  ): void | Promise<void> {
    const includeResult = options?.includeResult ?? false
    const logData = { ...data }
    if (!includeResult) {
      delete logData.result
    }
    if (logData.error) {
      console.error(logData)
    } else {
      console.log(logData)
    }
  },
})
