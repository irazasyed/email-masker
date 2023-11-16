import { Copy, Flame, VenetianMask } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useStorage } from '@plasmohq/storage/hook'
import Info from '@/components/info'
import { Button, Input, Label } from '@/components/ui'
import { applyShortcodesWithDomain } from '@/lib/apply-shortcodes'
import { DEFAULT_EMAIL_FORMAT, STORAGE_EMAIL_FORMAT } from '@/lib/email-format'
import { copyToClipboard, lang, notify } from '@/lib/utils'

function MaskedEmail({ hostname }: { hostname: string }) {
  const [emailFormat] = useStorage(STORAGE_EMAIL_FORMAT, DEFAULT_EMAIL_FORMAT)
  const [maskedEmail, setMaskedEmail] = useState('')

  const generateMaskedEmail = () => {
    setMaskedEmail(applyShortcodesWithDomain(emailFormat, hostname))
  }

  // Generate masked email on component mount and when hostname changes
  useEffect(() => {
    generateMaskedEmail()
  }, [hostname, emailFormat])

  const onClickCopy = () => {
    copyToClipboard(maskedEmail)
    notify(lang('copySuccessToast') + ' 🔥')
  }

  const handleGenerateClick = () => {
    generateMaskedEmail()
  }

  return (
    <div className="grid gap-2">
      <Label className="flex items-center gap-1.5">
        <VenetianMask size={22} strokeWidth={1.5} /> {lang('maskedEmailLabel')}
      </Label>
      <div className="flex items-center space-x-2">
        <Info title={lang('clickToCopyTooltip')} className="relative flex-1">
          <div className="relative">
            <Input
              type="email"
              id="masked-email"
              placeholder={lang('maskedEmailLabel')}
              value={maskedEmail}
              className="read-only:cursor-pointer flex-1"
              onClick={onClickCopy}
              readOnly={true}
            />
            <Copy
              onClick={onClickCopy}
              size={16}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            />
          </div>
        </Info>
        <Info title={lang('generateEmailTooltip')}>
          <Button type="button" variant="outline" onClick={handleGenerateClick}>
            <Flame size={22} className="text-orange-500" />
          </Button>
        </Info>
      </div>
    </div>
  )
}

export default MaskedEmail
