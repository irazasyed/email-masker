import { GithubIcon } from 'lucide-react'
import icon from 'data-base64:~assets/icon.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer'
import ThemeModeToggle from '@/components/theme-mode-toggle'
import Version from '@/components/version'
import { lang } from '@/lib/utils'

function Layout({ children }) {
  return (
    <main className="container min-w-max p-2">
      <Card className="border-0 rounded-none">
        <Toaster />
        <CardHeader className="space-y-1 py-2 px-4">
          <div className="flex justify-between">
            <CardTitle className="text-2xl flex items-center gap-2 font-bold">
              <img src={icon} alt="Logo" className="h-10 w-10" />
              {lang('title')}
              <Version />
            </CardTitle>
            <div className="flex items-center gap-2">
              <ThemeModeToggle />

              <a
                href="https://dub.sh/email-masker-github"
                title="GitHub"
                target="_blank">
                <GithubIcon size={22} />
              </a>
            </div>
          </div>
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6">{children}</CardContent>
        <Footer />
      </Card>
    </main>
  )
}

export default Layout
