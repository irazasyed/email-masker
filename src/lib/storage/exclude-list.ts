import { STORE_KEYS } from '@/lib/constants'
import { STORAGE_INSTANCE } from '@/lib/storage/storage-instance'

// For useStorage hook
export const STORAGE_EXCLUDE_LIST = {
  key: STORE_KEYS.EXCLUDE_LIST,
  instance: STORAGE_INSTANCE
}

export async function getExcludeListPatterns(): Promise<RegExp[]> {
  const patterns: string[] =
    (await STORAGE_INSTANCE.get(STORE_KEYS.EXCLUDE_LIST_PATTERNS)) ?? []

  return patterns.map((pattern) => new RegExp(pattern))
}

export async function setExcludeListPatterns(list: string) {
  const regexPatterns = list
    .trim()
    .split('\n')
    .map((pattern) => {
      const cleanedPattern = pattern
        .trim()
        .replace(/^https?:\/\//, '') // Remove http:// or https://
        .replaceAll('*', '.*') // Replace * with .*
        .replaceAll('/', '\\/') // Escape /

      return `^([^:]*):\\/\\/${cleanedPattern}$`
    })

  await STORAGE_INSTANCE.set(STORE_KEYS.EXCLUDE_LIST_PATTERNS, regexPatterns)
}

export async function resetExcludeList() {
  await STORAGE_INSTANCE.remove(STORE_KEYS.EXCLUDE_LIST)
}

export async function isExcludedUrl(url: string): Promise<boolean> {
  const patterns = await getExcludeListPatterns()

  return patterns.some((pattern) => pattern.test(url))
}
