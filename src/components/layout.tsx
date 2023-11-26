import { Flame, GithubIcon, Settings } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import icon from 'data-base64:~assets/icon.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Footer from '@/components/footer'
import Info from '@/components/info'
import ThemeModeToggle from '@/components/theme-mode-toggle'
import { lang } from '@/lib/utils'

function Layout({ children }) {
  return (
    <main className="w-[32rem] mx-auto p-2">
      <Card className="border-0 rounded-none">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
              fontSize: '1rem'
            }
          }}
        />
        <Tabs defaultValue="generator">
          <CardHeader className="px-2 py-0">
            <div className="flex justify-between">
              <TabsList className="bg-background">
                <TabsTrigger
                  value="generator"
                  className="h-10 w-10 p-2 hover:bg-muted">
                  <Info title={lang('generatorTooltip')}>
                    <Flame size={22} />
                  </Info>
                </TabsTrigger>
                <TabsTrigger
                  value="options"
                  className="h-10 w-10 p-2 hover:bg-muted">
                  <Info title={lang('optionsTooltip')}>
                    <Settings size={22} />
                  </Info>
                </TabsTrigger>
              </TabsList>
              <CardTitle className="text-2xl flex items-center gap-2 font-bold">
                <img src={icon} alt="Logo" className="h-8 w-8" />
                {lang('title')}
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
          <CardContent>{children}</CardContent>
        </Tabs>
        <Footer />
      </Card>
    </main>
  )
}

export default Layout
