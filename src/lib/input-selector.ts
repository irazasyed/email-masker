const selectors: string[] = [
  "input[type='email']",
  "input[name='email']",
  "input[name='username']",
  "input[name='login']",
  "input[name='user']",
  "input[name='reg_email__']",
  "input[name='email_address']",
  "input[autocomplete='email']",
  "input[autocomplete='username']",
  "input[name='registeremail']"
]

const inputSelector = selectors.join(', ')

export default inputSelector
