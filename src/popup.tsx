import { useEffect, useState } from 'react'
import '@/style.css'
import FormatManager from '@/components/format-manager'
import Layout from '@/components/layout'
import GeneratedEmail from '@/components/masked-email'
import { getActiveTabHostname } from '@/lib/utils'

function IndexPopup() {
  const [hostname, setHostname] = useState('')

  void getActiveTabHostname().then((currentHostname) => {
    setHostname(currentHostname)
  })

  return (
    <Layout>
      <GeneratedEmail hostname={hostname} />
      <FormatManager />
    </Layout>
  )
}

export default IndexPopup
