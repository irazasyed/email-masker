import packageJson from '@/../package.json'

export default function Version() {
  const version = packageJson?.version

  return (
    version && (
      <span className="text-sm text-muted-foreground font-normal">
        V{version}
      </span>
    )
  )
}
