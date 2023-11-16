# Email Masker Browser Extension [<img src="assets/icon.png" width="168" align="right" alt="Email Masker">](https://github.com/irazasyed/email-masker)

[![Licence](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE.md)
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/oedhkcdedcfloepkpacoocblokifkgjf?style=flat-square&label=Chrome%20Users)][link-cws]
[![Mozilla Add-on Users](https://img.shields.io/amo/users/email-masker?style=flat-square&label=Firefox%20Users)][link-amo]

> Email Masker is an open-source browser extension that helps you generate and use masked email addresses for your online accounts using [Skiff][link-skiff] [Quick Aliases](https://dub.sh/quick-alias).
>
> It helps you protect your privacy and keep your inbox clean from spam.

Extension by [@irazasyed](https://github.com/irazasyed)

<img src=".github/assets/screenshots/Hero@2x.png" align="center" alt="Email Masker">

[<img src="https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png" alt="for Chrome" height="60px">][link-cws]
[<img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="for Firefox" height="60px">][link-amo]
[<img src="https://dev.opera.com/extensions/branding-guidelines/addons_206x58_en@2x.png" alt="for Opera" height="60px">][link-oas]

## Contents

- [Features](#features)
- [Supported Browsers](#supported-browsers)
- [Highlights](#highlights)
- [Email Format Templates](#email-format-templates)
- [Contributing](#contributing)
- [Security Vulnerabilities](#security-vulnerabilities)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

## Features

**🔥 Customizable Masked Email Format**: Tailor your masked email format to your liking.

**📧 Quick Masked Email Generation**: Swiftly create masked email addresses via pop-up or on-page options.

**🏷️ Convenient Shortcodes**: Use domain, random strings/numbers, and random words in your email format.

**🗣️ Multilingual Support**: Enjoy the extension in multiple languages.

**🌐 Multi-Browser Compatibility**: Works on Chrome, Brave, Edge, Opera, Firefox, and More.

**🌙 Light & Dark Modes**: Choose your preferred interface theme.

**🖥️ Clean User Interface**: Minimalistic design for a focused experience.

**📂 Open-Source**: View and contribute to the source code.

**🔒 Privacy Assurance**: No data collection; generated emails are not stored.

## Supported Browsers

✅ Chrome / Brave / Edge / Opera / Any Chromium Browser.

✅ Firefox

✅ Orion / Any WebKit Browser that supports Web Extensions via Chrome Web Store/Firefox Addon Store.

### Other browsers

If you use another Chromium-based browser like Vivaldi, you can usually install the Chrome version.

## Highlights

<table>
    <tr>
        <th align="center">Highlights</th>
        <th align="center">Dark and Light Modes</th>
    </tr>
    <tr>
        <td align="center">
            <img src=".github/assets/screenshots/Highlights@2x.png" alt="Email Masker Highlights">
        </td>
        <td align="center">
            <img src=".github/assets/screenshots/Feature_Dark-Light@2x.png" alt="Dark and Light Modes">
		</td>
    </tr>
    <tr>
        <th align="center">Customizable Email Format</th>
        <th align="center">On-Page Quick Generation</th>
    </tr>
    <tr>
		<td align="center">
            <img src=".github/assets/screenshots/Feature_Customizable@2x.png" alt="Customizable Email Format">
		</td>
		<td align="center">
            <img src=".github/assets/screenshots/Feature_On-Page@2x.png" alt="Email Masker On-Page">
        </td>
	</tr>
</table>

## Email Format Templates

Email Masker supports the following shortcodes that you can use in your email format.

- `[domain]` - Primary domain name from the current website (normalized).
- `[random:length]` - Random Alphanumeric string of n characters.
- `[words:length]` - Random words of n length.
- `[numbers:length]` - Random numbers of n length.

### Templates

Here are some email format templates you can use based on your preference, you may customize as you like.

**Default**

A combination of `[domain]` and `[random:5]` is used as the default email format.

```
[domain][random:5]@example.maskmy.id
```

The above format will generate email addresses like `github29wun@example.maskmy.id`

**Random Strings**

```
[random:8]@example.maskmy.id
```

**Random Words**

```
[words:3]@example.maskmy.id
```

**Random Numbers**

```
[numbers:8]@example.maskmy.id
```

**Random Words and Numbers**

```
[words:2][numbers:4]@example.maskmy.id
```

**Random Words and Numbers (With Separator)**

```
[words:2]-[numbers:4]@example.maskmy.id
```

**Domain and Random Words**

```
[domain][words:2]@example.maskmy.id
```

**Prefix and Random Strings**

```
prefix-[random:8]@example.maskmy.id
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please see [SECURITY](.github/SECURITY.md) for details.

## Code of Conduct

Please see [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## License

MIT

## Credits

- [Irfaq Syed](https://github.com/irazasyed)
- [All Contributors](../../contributors)

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored in any way by Skiff.

[link-skiff]: https://dub.sh/skiff-ref 'Sign up for Skiff Mail'
[link-cws]: https://dub.sh/emailmasker-chrome 'Version published on Chrome Web Store'
[link-amo]: https://dub.sh/emailmasker-firefox 'Version published on Mozilla Add-ons'
[link-oas]: https://dub.sh/emailmasker-opera 'Version published on Opera Add-ons'
