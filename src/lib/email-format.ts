import { DEFAULT_EMAIL_FORMAT, EMAIL_FORMAT_STORE_KEY } from '@/lib/constants'
import { STORAGE_INSTANCE } from '@/lib/storage-instance'

export const STORAGE_EMAIL_FORMAT = {
  key: EMAIL_FORMAT_STORE_KEY,
  instance: STORAGE_INSTANCE
}

export async function getEmailFormat() {
  const emailFormat = await STORAGE_INSTANCE.get(EMAIL_FORMAT_STORE_KEY)

  return emailFormat ?? DEFAULT_EMAIL_FORMAT
}

export async function setEmailFormat(emailFormat: string) {
  await STORAGE_INSTANCE.set(EMAIL_FORMAT_STORE_KEY, emailFormat)
}

export async function resetEmailFormat() {
  await STORAGE_INSTANCE.remove(EMAIL_FORMAT_STORE_KEY)
}

export { DEFAULT_EMAIL_FORMAT } from '@/lib/constants'
