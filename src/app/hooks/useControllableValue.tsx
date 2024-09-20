import { useState, useEffect } from 'react'

function useControllableValue<T>(value: T | undefined, defaultValue: T) {
  const [internalValue, setInternalValue] = useState<T>(defaultValue)

  const finalValue = value !== undefined ? value : internalValue

  const setValue: typeof setInternalValue = (
    newValue: Parameters<typeof setInternalValue>[0]
  ) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
  }

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  return [finalValue as T, setValue] as const
}

export { useControllableValue }
