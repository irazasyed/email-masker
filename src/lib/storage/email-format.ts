import { DEFAULT_EMAIL_FORMAT, STORE_KEYS } from '@/lib/constants'
import { STORAGE_INSTANCE } from '@/lib/storage/storage-instance'

export const STORAGE_EMAIL_FORMAT = {
  key: STORE_KEYS.EMAIL_FORMAT,
  instance: STORAGE_INSTANCE
}

export async function getEmailFormat() {
  const emailFormat = await STORAGE_INSTANCE.get(STORE_KEYS.EMAIL_FORMAT)

  return emailFormat ?? DEFAULT_EMAIL_FORMAT
}

export async function setEmailFormat(emailFormat: string) {
  await STORAGE_INSTANCE.set(STORE_KEYS.EMAIL_FORMAT, emailFormat)
}

export async function resetEmailFormat() {
  await STORAGE_INSTANCE.remove(STORE_KEYS.EMAIL_FORMAT)
}

export { DEFAULT_EMAIL_FORMAT } from '@/lib/constants'
