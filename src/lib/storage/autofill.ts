import { STORE_KEYS } from '@/lib/constants'
import { STORAGE_INSTANCE } from '@/lib/storage/storage-instance'

// For useStorage hook
export const STORAGE_AUTOFILL = {
  key: STORE_KEYS.AUTOFILL,
  instance: STORAGE_INSTANCE
}

export async function getAutofill(): Promise<boolean> {
  return (await STORAGE_INSTANCE.get(STORE_KEYS.AUTOFILL)) ?? true
}

export async function setAutofill(autofill: boolean) {
  await STORAGE_INSTANCE.set(STORE_KEYS.AUTOFILL, autofill)
}

export async function resetAutofill() {
  await STORAGE_INSTANCE.remove(STORE_KEYS.AUTOFILL)
}
