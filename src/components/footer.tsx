import { lang } from '@/lib/utils'

function Footer() {
  return (
    <div className="text-sm text-muted-foreground space-y-1 py-2 px-4">
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
      <p>
        {lang('footer')}{' '}
        <a
          href="https://dub.sh/skiff-ref"
          target="_blank"
          className="underline"
          title="Sign Up for Skiff Mail">
          Skiff
        </a>{' '}
        <a
          href="https://dub.sh/skiff-quick-alias"
          title="Learn more about Quick Aliases"
          target="_blank"
          className="underline">
          Quick Aliases
        </a>{' '}
        <br />
        {lang('credit')}{' '}
        <a
          href="https://dub.sh/irs-x"
          title="Follow for Updates"
          target="_blank"
          className="underline">
          @irazasyed
        </a>
      </p>
    </div>
  )
}

export default Footer
