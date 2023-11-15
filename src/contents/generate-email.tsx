import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList
} from 'plasmo'
import icon from 'data-base64:~assets/flame.svg'
import { useStorage } from '@plasmohq/storage/hook'
import { applyShortcodesWithDomain } from '@/lib/apply-shortcodes'
import {
  addInlineStyles,
  getBasicStyles,
  isEventWithinDax,
  removeInlineStyles,
  setValueForInput
} from '@/lib/autofill-utils'
import { DEFAULT_EMAIL_FORMAT, EMAIL_FORMAT_STORE_KEY } from '@/lib/constants'
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

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll(inputSelector)

const GenerateEmailCSUI = ({ anchor }: PlasmoCSUIProps) => {
  const [emailFormat] = useStorage<string>(
    EMAIL_FORMAT_STORE_KEY,
    DEFAULT_EMAIL_FORMAT
  )

  const element = anchor?.element as HTMLInputElement

  const generateEmail = () => {
    if (element) {
      setValueForInput(
        element,
        applyShortcodesWithDomain(emailFormat, window.location.hostname)
      )
    }
  }

  let isDaxHovered = false

  element.addEventListener('mousemove', (event) => {
    const isWithinDax = isEventWithinDax(
      event,
      event.target as HTMLInputElement
    )
    if (isWithinDax && !isDaxHovered) {
      isDaxHovered = true
      addInlineStyles(element, {
        cursor: 'pointer',
        ...getBasicStyles(element, icon)
      })
    } else if (!isWithinDax && isDaxHovered) {
      isDaxHovered = false
      removeInlineStyles(element, { cursor: 'pointer' })
    }
  })

  element.addEventListener('click', (event) => {
    if (
      isEventWithinDax(event, event.target as HTMLInputElement) &&
      element.offsetWidth > 50
    ) {
      event.preventDefault()
      event.stopImmediatePropagation()
      element.blur()
      generateEmail()
    }
  })

  addInlineStyles(element, getBasicStyles(element, icon))

  return null
}

export default GenerateEmailCSUI
