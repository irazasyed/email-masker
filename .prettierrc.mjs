/**
 * @type {import('prettier').Options}
 */
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '<PROJECT_ROOT>', // Imports that start with a slash. These are probably absolute imports, or at least intended to be.
    '^data-base64:(.*)$', // Base64 encoded data URI (images)
    '^data-text:(.*)$', // Text data URI (css)
    '^@plasmo/(.*)$',
    '^@plasmohq/(.*)$',
    '^@/components/ui/(.*)$', // Shadcn UI components
    '^@/(.*)$',
    '^[./]'
  ]
}
