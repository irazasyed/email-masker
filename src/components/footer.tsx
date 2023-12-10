import Version from '@/components/version'
import { lang } from '@/lib/utils'

function Footer() {
  return (
    <div className="text-sm text-muted-foreground space-y-1 py-2 px-4">
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
      <div className="flex items-end justify-end">
        <Version />
      </div>
    </div>
  )
}

export default Footer
