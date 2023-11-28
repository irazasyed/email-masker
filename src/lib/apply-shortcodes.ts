import {
  generateRandomNumber,
  generateRandomString,
  generateRandomWords,
  getPrimaryDomain
} from '@/lib/utils'

type ShortcodeMap = Record<string, (length: number) => string>

const shortcodeMap: ShortcodeMap = {
  random: (length) => generateRandomString(length),
  numbers: (length) => generateRandomNumber(length),
  words: (count) => generateRandomWords(count)
}

/**
 * Applies shortcodes to the given string.
 *
 * Supported shortcodes:
 * - [random:<length>] - A random string of the specified length.
 * - [words:<length>] - A random string of the specified number of words.
 * - [numbers:<length>] - A random string of the specified number of numbers.
 *
 * @param format - The string to apply shortcodes to.
 * @returns The formatted string with shortcodes replaced.
 */
function applyShortcodes(format: string): string {
  const shortcodeRegex = /\[(\w+)(?::(\d+))?]/g

  return format.replaceAll(
    shortcodeRegex,
    (match: string, shortcode: string, value: string) => {
      const length = Number.parseInt(value, 10) || 0

      return shortcodeMap[shortcode]?.(length) || match
    }
  )
}

/**
 * Applies shortcodes to the given string and replaces [domain] with the primary domain.
 *
 * @param format - The string to apply shortcodes to.
 * @param domain - The primary domain to replace [domain] with.
 * @returns The formatted string with shortcodes and domain replacement.
 */
function applyShortcodesWithDomain(format: string, domain: string): string {
  return applyShortcodes(format).replaceAll('[domain]', getPrimaryDomain(domain))
}

/**
 * Applies shortcodes to a list of strings and replaces [domain] with the primary domain.
 *
 * @param formatList - An array of strings to apply shortcodes to.
 * @param domain - The primary domain to replace [domain] with.
 * @returns An array of formatted strings with shortcodes and domain replacement.
 */
function applyShortcodesToList(formatList: string[], domain: string): string[] {
  return formatList.map((format) => applyShortcodesWithDomain(format, domain))
}

export { applyShortcodes, applyShortcodesWithDomain, applyShortcodesToList }
