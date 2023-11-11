import type { TooltipTriggerProps } from '@radix-ui/react-tooltip'
import type { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

type InfoProps = {
  children: ReactNode
  title: string
} & TooltipTriggerProps

function Info({ children, title, ...props }: InfoProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild {...props}>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Info
