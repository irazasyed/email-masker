import { Mail, Save, Tags } from 'lucide-react'
import React, { useRef } from 'react'
import { useStorage } from '@plasmohq/storage/hook'
import Info from '@/components/info'
import { Badge, Button, Input, Label } from '@/components/ui'
import { DEFAULT_EMAIL_FORMAT, EMAIL_FORMAT_STORE_KEY } from '@/lib/constants'
import { isEmail, isSkiffDomain, lang, notify } from '@/lib/utils'

const shortcodes = {
  domain: lang('shortcodeDomainDesc'),
  'random:length': lang('shortcodeRandomDesc'),
  'words:length': lang('shortcodeWordsDesc'),
  'numbers:length': lang('shortcodeNumbersDesc')
}

export default function FormatManager() {
  const [emailFormat, setEmailFormat, { setRenderValue, setStoreValue }] =
    useStorage(EMAIL_FORMAT_STORE_KEY, DEFAULT_EMAIL_FORMAT)

  const emailInputRef = useRef<HTMLInputElement | null>(null)

  const onShortcodeClick = (shortcode: string): void => {
    if (emailInputRef.current) {
      const newText = `[${shortcode}]${emailFormat}`
      emailInputRef.current.value = newText
      setRenderValue(newText)

      emailInputRef.current.focus()

      notify(
        lang('shortcodeAddedToast') + ' 👍',
        lang('shortcodeAddedToastDesc', [shortcode])
      )
    }
  }

  const handleEmailFormatSave = () => {
    if (!isEmail(emailFormat)) {
      notify(
        '🚨 ' + lang('invalidEmailFormatToast'),
        lang('invalidEmailFormatToastDesc')
      )

      return
    }

    if (!isSkiffDomain(emailFormat)) {
      notify(
        '🚨 ' + lang('invalidEmailFormatToast'),
        lang('invalidEmailDomainToastDesc')
      )

      return
    }

    void setStoreValue()
    notify(lang('emailFormatUpdatedToast') + ' 👍')
  }

  const handleEmailFormatChange = (
    element: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRenderValue(element.target.value)
  }

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="email" className="flex items-center gap-1.5">
          <Mail size={20} strokeWidth={1.5} /> {lang('emailFormatLabel')}
        </Label>
        <div className="flex items-center space-x-2">
          <Input
            id="email"
            type="email"
            placeholder={DEFAULT_EMAIL_FORMAT}
            value={emailFormat}
            onChange={handleEmailFormatChange}
            ref={emailInputRef}
          />
          <Info title={lang('saveEmailFormatTooltip')}>
            <Button
              type="button"
              variant="outline"
              onClick={handleEmailFormatSave}>
              <Save size={22} className="text-blue-500" />
            </Button>
          </Info>
        </div>
      </div>

      <div className="grid gap-2">
        <Label className="flex items-center gap-1.5">
          <Tags size={20} strokeWidth={1.5} /> {lang('shortcodesLabel')}
        </Label>
        <div className="flex items-center gap-2">
          {Object.keys(shortcodes).map((shortcode) => (
            <Badge
              key={shortcode}
              variant="secondary"
              className="cursor-pointer hover:bg-orange-500"
              onClick={() => {
                onShortcodeClick(shortcode)
              }}>
              <Info title={shortcodes[shortcode] as string}>
                <div>{`[${shortcode}]`}</div>
              </Info>
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}
