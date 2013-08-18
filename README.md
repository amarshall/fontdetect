# fontdetect

Detect if a font is installed from the browser.

## Installation

Manually add all files in `lib`. No build system is currently setup.

## Usage

```javascript
fontDetect('Verdana')  //=> true
fontDetect('NotAFont') //=> false
```

Or, asynchronously and repeatedly check (useful for web fonts which may not yet be loaded):

```javascript
fontDetect('MyWebFont', function(fontName) {
  console.log(fontName + ' loaded')
})
```

fontDetect will be defined as an AMD module if `define` exists.

## Contributing

Contributions are welcome. Please be sure that your pull requests are atomic so they can be considered and accepted separately.

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Credits & License

Copyright © 2013 J. Andrew Marshall. License is available in the LICENSE file.
