import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList
} from 'plasmo'
import cssText from 'data-text:~contents/generate-email.css'
import { useStorage } from '@plasmohq/storage/hook'
import { applyShortcodesWithDomain } from '@/lib/apply-shortcodes'
import { DEFAULT_EMAIL_FORMAT, EMAIL_FORMAT_STORE_KEY } from '@/lib/constants'
import inputSelector from '@/lib/input-selector'

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ['<all_urls>'],
  exclude_matches: ['https://*.proton.me/*']
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll(inputSelector)

export const getStyle = () => {
  const style = document.createElement('style')
  style.textContent = cssText
  return style
}

function GenerateButton({
  style,
  onClick
}: {
  style?: Record<string, string>
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="burner-icon"
      style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    </button>
  )
}

function GenerateEmailCSUI({ anchor }: PlasmoCSUIProps) {
  const [emailFormat] = useStorage<string>(
    EMAIL_FORMAT_STORE_KEY,
    DEFAULT_EMAIL_FORMAT
  )

  const element = anchor?.element as HTMLInputElement

  const generateEmail = () => {
    if (element) {
      element.value = applyShortcodesWithDomain(
        emailFormat,
        window.location.hostname
      )
    }
  }
  // Element.onClick = () => makeEmail(element, emailFormat)
  // const iconHeight = 29;
  // const iconTop = (element.offsetHeight + iconHeight) / 2;
  // const top = element.offsetHeight > 0 ? `-${iconTop}px` : `${iconTop}px`;
  // Style={{top, right: `-11px`}}

  return <GenerateButton onClick={generateEmail} />
}

export default GenerateEmailCSUI
