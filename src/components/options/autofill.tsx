import { TextCursorInput } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui'
import { lang } from '@/lib/utils'

type AutofillState = boolean

type AutofillStore = readonly [
  AutofillState,
  React.Dispatch<React.SetStateAction<AutofillState>>,
  {
    setRenderValue: React.Dispatch<React.SetStateAction<AutofillState>>
    setStoreValue: (v?: AutofillState) => Promise<any>
  }
]

function Autofill({ autofillStore }: { autofillStore: AutofillStore }) {
  const [autofill, setAutofill, { setRenderValue, setStoreValue }] =
    autofillStore

  return (
    <div className="grid gap-2">
      <Label className="flex items-center gap-1.5">
        <TextCursorInput size={20} strokeWidth={1.5} />
        {lang('autofill')}
      </Label>
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-0.5">
          <p className="text-sm text-muted-foreground">
            {lang('autofillDesc')}
          </p>
        </div>
        <div>
          <Switch
            checked={autofill}
            onCheckedChange={async (checked: boolean) => {
              setRenderValue(checked)
              await setStoreValue(checked)

              toast.success(
                lang('autofill') + ' ' + (checked ? 'Enabled' : 'Disabled')
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Autofill
