import type { PlasmoCSConfig } from 'plasmo'
import icon from 'data-base64:~assets/flame.svg'
import { applyShortcodesWithDomain } from '@/lib/apply-shortcodes'
import {
  addInlineStyles,
  getBasicStyles,
  isEventWithinDax,
  removeInlineStyles,
  setValueForInput
} from '@/lib/autofill-utils'
import inputSelector from '@/lib/input-selector'
import { getAutofill } from '@/lib/storage/autofill'
import { getEmailFormat } from '@/lib/storage/email-format'
import { isExcludedUrl } from '@/lib/storage/exclude-list'

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ['<all_urls>'],
  exclude_matches: [
    'https://*.proton.me/*',
    'https://accounts.google.com/*',
    'https://app.skiff.com/*'
  ]
}

function generateEmailIcon(input: HTMLInputElement) {
  const generateEmail = async () => {
    const emailFormat = await getEmailFormat()

    if (input) {
      setValueForInput(
        input,
        applyShortcodesWithDomain(emailFormat, window.location.hostname)
      )
    }
  }

  let isDaxHovered = false

  input.addEventListener('mousemove', (event) => {
    const isWithinDax = isEventWithinDax(
      event,
      event.target as HTMLInputElement
    )
    if (isWithinDax && !isDaxHovered) {
      isDaxHovered = true
      addInlineStyles(input, {
        cursor: 'pointer',
        ...getBasicStyles(input, icon)
      })
    } else if (!isWithinDax && isDaxHovered) {
      isDaxHovered = false
      removeInlineStyles(input, { cursor: 'pointer' })
    }
  })

  input.addEventListener('click', async (event) => {
    if (
      isEventWithinDax(event, event.target as HTMLInputElement) &&
      input.offsetWidth > 50
    ) {
      event.preventDefault()
      event.stopImmediatePropagation()
      input.blur()
      await generateEmail()
    }
  })

  addInlineStyles(input, getBasicStyles(input, icon))
}

const isEnabled = async () => {
  const autofill = await getAutofill()
  if (!autofill) return false

  const isExcluded = await isExcludedUrl(window.location.href)
  return !isExcluded
}

window.addEventListener('load', async () => {
  if (!(await isEnabled())) return

  document
    .querySelectorAll(inputSelector)
    .forEach((input: HTMLInputElement) => {
      generateEmailIcon(input)
    })
})
