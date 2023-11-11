import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import { useStorage } from '@plasmohq/storage/dist/hook'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui'
import { THEME_STORE_KEY } from '@/lib/constants'

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const getTheme = () => localStorage.getItem(THEME_STORE_KEY) ?? getSystemTheme()

const applyTheme = (isDark: boolean) => {
  const root = document.documentElement
  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'
}

applyTheme(getTheme() === 'dark')

export default function ThemeModeToggle() {
  const [theme, setTheme] = useStorage(THEME_STORE_KEY, getTheme())

  useEffect(() => {
    const isDark =
      theme === 'dark' || (theme === 'system' && getSystemTheme() === 'dark')

    applyTheme(isDark)

    localStorage.removeItem(THEME_STORE_KEY)
    localStorage.setItem(THEME_STORE_KEY, isDark ? 'dark' : 'light')
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-none focus:outline-none focus-visible:outline-none focus-visible:ring-0">
          <Sun
            size={22}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={22}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={async () => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={async () => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={async () => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
