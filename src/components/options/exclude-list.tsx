import { ListX } from 'lucide-react'
import toast from 'react-hot-toast'
import { useStorage } from '@plasmohq/storage/hook'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  setExcludeListPatterns,
  STORAGE_EXCLUDE_LIST
} from '@/lib/storage/exclude-list'
import { lang } from '@/lib/utils'

function ExcludeList() {
  const [excludeList, setExcludeList, { setRenderValue, setStoreValue }] =
    useStorage(STORAGE_EXCLUDE_LIST, '')

  return (
    <div className="grid gap-2">
      <Label className="flex items-center gap-1.5">
        <ListX size={20} strokeWidth={1.5} /> {lang('excludeList')}
      </Label>
      <div className="grid gap-3.5">
        <Textarea
          placeholder="Websites to Exclude"
          value={excludeList}
          onChange={(event) => {
            setRenderValue(event.target.value)
          }}
          onBlur={async () => {
            await setStoreValue()
            await setExcludeListPatterns(excludeList)

            toast.success('Exclude List Updated')
          }}
        />
        <p className="text-sm text-muted-foreground">
          {lang('excludeListDescLine1')} <br />
          {lang('excludeListDescLine2')}{' '}
        </p>
      </div>
    </div>
  )
}

export default ExcludeList
