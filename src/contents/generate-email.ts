import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList
} from 'plasmo'
import icon from 'data-base64:~assets/flame.svg'
import { applyShortcodesWithDomain } from '@/lib/apply-shortcodes'
import {
  addInlineStyles,
  getBasicStyles,
  isEventWithinDax,
  removeInlineStyles,
  setValueForInput
} from '@/lib/autofill-utils'
import { getEmailFormat } from '@/lib/email-format'
import inputSelector from '@/lib/input-selector'

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ['<all_urls>'],
  exclude_matches: [
    'https://*.proton.me/*',
    'https://accounts.google.com/*',
    'https://app.skiff.com/*'
  ]
}

function generateEmailIcon(input: HTMLInputElement, emailFormat: string) {
  const generateEmail = () => {
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

  input.addEventListener('click', (event) => {
    if (
      isEventWithinDax(event, event.target as HTMLInputElement) &&
      input.offsetWidth > 50
    ) {
      event.preventDefault()
      event.stopImmediatePropagation()
      input.blur()
      generateEmail()
    }
  })

  addInlineStyles(input, getBasicStyles(input, icon))
}

window.addEventListener('load', async () => {
  const emailFormat = await getEmailFormat()

  document
    .querySelectorAll(inputSelector)
    .forEach((input: HTMLInputElement) => {
      generateEmailIcon(input, emailFormat)
    })
})
