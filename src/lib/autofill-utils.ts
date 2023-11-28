/*
 * NOTICE
 *
 * This software includes code adapted from the DuckDuckGo Autofill open source project
 * (https://github.com/duckduckgo/duckduckgo-autofill), specifically from 'src/autofill-utils.js'.
 * Original code licensed under Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0).
 *
 * Modifications:
 * - Partially adapted and rewritten for enhanced readability.
 * - Applied eslint fixes, incorporated TypeScript typings, and integrated seamlessly with the codebase.
 * - Additional functionalities or changes may be present.
 *
 * Compliance with Apache License 2.0:
 * - This software, including modified code, complies with Apache License 2.0 terms and conditions.
 * - Attribution to the original project and contributors provided in this notice.
 * - A copy of Apache License 2.0 is included in documentation or other materials as required.
 * - Notice of modifications is included in this notice.
 *
 * Patent Grant:
 * - Contributions or modifications to the original code are subject to Apache License 2.0 patent grant provisions.
 *
 * No endorsement:
 * - This software is not affiliated with or endorsed by the DuckDuckGo Autofill project or Duck Duck Go, Inc.
 *
 * Full text of Apache License 2.0: http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Get the bounding box of the icon
 * @param input
 * @returns {{bottom: number, height: number, left: number, right: number, top: number, width: number, x: number, y: number}}
 */
export const getDaxBoundingBox = (
  input: HTMLInputElement
): {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
} => {
  const {
    right: inputRight,
    top: inputTop,
    height: inputHeight
  } = input.getBoundingClientRect()

  const width = 30
  const height = 30
  const top = inputTop + (inputHeight - height) / 2
  const right = inputRight 
  const left = right - width
  const bottom = top + height

  return { bottom, height, left, right, top, width, x: left, y: top }
}

/**
 * Check if a mouse event is within the icon
 * @param {MouseEvent} event
 * @param {HTMLInputElement} input
 * @returns {boolean}
 */
export const isEventWithinDax = (
  { clientX, clientY }: MouseEvent,
  input: HTMLInputElement
): boolean => {
  const { left, right, top, bottom } = getDaxBoundingBox(input)
  const withinX = clientX >= left && clientX <= right
  const withinY = clientY >= top && clientY <= bottom

  return withinX && withinY
}

export const addInlineStyles = (
  element: HTMLElement,
  styles: Record<string, string>
) => {
  Object.entries(styles).forEach(([property, value]) => {
    element.style.setProperty(property, value, 'important')
  })
}

export const removeInlineStyles = (
  element: HTMLElement,
  styles: Record<string, string>
) => {
  Object.keys(styles).forEach((property) =>
    element.style.removeProperty(property)
  )
}

export const getBasicStyles = (input: HTMLInputElement, icon: string) => ({
  'background-size': `auto ${
    input.offsetHeight <= 30 && input.offsetHeight > 0 ? '100%' : '24px'
  }`,
  'background-position': 'center right',
  'background-repeat': 'no-repeat',
  'background-image': `url(${icon})`,
  'padding-right': '24px',
  transition: 'background 0s'
})

// Access the original setter (needed to bypass React's implementation on mobile)
const originalSet = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
)?.set

export const setValueForInput = (element: HTMLInputElement, value: string) => {
  element.focus()

  // Dispatch a keydown event to simulate user interaction
  element.dispatchEvent(new Event('keydown', { bubbles: true }))

  // Set the value using the original setter
  originalSet?.call(element, value)

  // Dispatch events to simulate real user action
  const events = [
    new Event('input', { bubbles: true }),
    new Event('keyup', { bubbles: true }),
    new Event('change', { bubbles: true })
  ]
  events.forEach((ev) => element.dispatchEvent(ev))

  // Set the value again to ensure compatibility
  originalSet?.call(element, value)

  // Dispatch events again to ensure compatibility
  events.forEach((ev) => element.dispatchEvent(ev))

  // Blur the element to complete the interaction
  element.blur()

  return true
}
