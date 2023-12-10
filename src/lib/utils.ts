import { clsx, type ClassValue } from 'clsx'
import { generate } from 'random-words'
import { twMerge } from 'tailwind-merge'
import { getDomainWithoutSuffix } from 'tldts'
import browser from 'webextension-polyfill'
import { DEFAULT_EMAIL_DOMAIN } from '@/lib/constants'

// Language localization function
export function lang(message: string, ...args: any[]) {
  return browser.i18n.getMessage(message, args)
}

// Combine and merge CSS class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the active tab's URL
export async function getActiveTabUrl() {
  const [activeTab] = await browser.tabs.query({
    currentWindow: true,
    active: true
  })

  return activeTab
}

// Get the hostname of the active tab's URL
export async function getActiveTabHostname() {
  const { url } = await getActiveTabUrl()

  return url ? new URL(url).hostname : ''
}

// Open a new tab with a given URL
export function openNewTab(url: string) {
  void browser.tabs.create({
    url,
    active: true
  })
}

// Copy text to the clipboard
export function copyToClipboard(text: string) {
  void navigator.clipboard.writeText(text)
}

// Check if a string is a valid email
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email)
}

// Normalize a string to contain only alphanumeric characters
export function normalizeToAlphanumeric(stringToNormalize: string): string {
  return stringToNormalize.replaceAll(/[^a-zA-Z\d]/g, '')
}

// Extract the primary domain from a hostname
export function getPrimaryDomain(hostname: string): string {
  const primaryDomain = getDomainWithoutSuffix(hostname, {
    allowPrivateDomains: true
  })

  return primaryDomain ? normalizeToAlphanumeric(primaryDomain) : ''
}

// Generate a random string of the given length
export function generateRandomString(length: number): string {
  return length <= 0 ? '' : Array.from({ length }, () => randomChar()).join('')
}

// Generate a random alphanumeric character
export function randomChar(): string {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const index = Math.floor(Math.random() * charset.length)

  return charset[index]
}

// Generate a random number string of the given length
export function generateRandomNumber(length: number): string {
  return length <= 0 ? '' : Array.from({ length }, () => randomDigit()).join('')
}

// Generate a random digit character
export function randomDigit(): string {
  return Math.floor(Math.random() * 10).toString()
}

// Generate a random string with a specified word count
export function generateRandomWords(count: number): string {
  return generate({
    exactly: 1,
    wordsPerString: count,
    separator: '',
    join: ''
  })
}
