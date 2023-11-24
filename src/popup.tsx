import { useEffect, useState } from 'react'
import { useStorage } from '@plasmohq/storage/hook'
import { TabsContent } from '@/components/ui/tabs'
import FormatManager from '@/components/format-manager'
import Layout from '@/components/layout'
import MaskedEmail from '@/components/masked-email'
import Autofill from '@/components/options/autofill'
import ExcludeList from '@/components/options/exclude-list'
import { STORAGE_AUTOFILL } from '@/lib/storage/autofill'
import { getActiveTabHostname } from '@/lib/utils'
import '@/style.css'

function IndexPopup() {
  const [hostname, setHostname] = useState('')
  const autofillStore = useStorage(STORAGE_AUTOFILL, true)

  useEffect(() => {
    void getActiveTabHostname().then((currentHostname) => {
      setHostname(currentHostname)
    })
  }, [])

  return (
    <Layout>
      <TabsContent value="generator">
        <div className="grid gap-6">
          <MaskedEmail hostname={hostname} />
          <FormatManager />
        </div>
      </TabsContent>
      <TabsContent value="options">
        <div className="grid gap-6">
          <Autofill autofillStore={autofillStore} />
          <ExcludeList />
        </div>
      </TabsContent>
    </Layout>
  )
}

export default IndexPopup
