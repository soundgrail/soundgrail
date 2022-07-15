<p align="center">
  <a href="https://cdn.itwcreativeworks.com/assets/soundgrail/images/logo/soundgrail-brandmark-black-x.svg">
    <img src="https://cdn.itwcreativeworks.com/assets/soundgrail/images/logo/soundgrail-brandmark-black-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/soundgrail/soundgrail.svg">
  <br>
  <img src="https://img.shields.io/librariesio/release/npm/soundgrail.svg">
  <img src="https://img.shields.io/bundlephobia/min/soundgrail.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/npm/dm/soundgrail.svg">
  <img src="https://img.shields.io/node/v/soundgrail.svg">
  <img src="https://img.shields.io/website/https/soundgrail.com.svg">
  <img src="https://img.shields.io/github/license/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/github/contributors/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/github/last-commit/soundgrail/soundgrail.svg">
  <br>
  <br>
  <a href="https://soundgrail.com">Site</a> | <a href="https://www.npmjs.com/package/soundgrail">NPM Module</a> | <a href="https://github.com/soundgrail/soundgrail">GitHub Repo</a>
  <br>
  <br>
  <strong>soundgrail</strong> is the official npm module of <a href="https://soundgrail.com">SoundGrail</a>, a free service offering samples, production resources, promotion, and tips for modern musicians and music producers
</p>

## SoundGrail Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatibility with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## Features
* Getting proxy lists

### Getting an API key
You can use so much of `soundgrail` for free, but if you want to do some advanced stuff, you'll need an API key. You can get one by [signing up for a SoundGrail account](https://soundgrail.com/authentication/signup).

## Install SoundGrail
### Install via npm
Install with npm if you plan to use `soundgrail` in a Node project or in the browser.
```shell
npm install soundgrail
```
If you plan to use `soundgrail` in a browser environment, you will probably need to use [Webpack](https://www.npmjs.com/package/webpack), [Browserify](https://www.npmjs.com/package/browserify), or a similar service to compile it.

```js
const soundgrail = new (require('soundgrail'))({
  // Not required, but having one removes limits (get your key at https://soundgrail.com).
  apiKey: 'api_test_key'
});
```

### Install via CDN
Install with CDN if you plan to use SoundGrail only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/soundgrail@latest/dist/index.min.js"></script>
<script type="text/javascript">
  var soundgrail = new SoundGrail({
    // Not required, but having one removes limits (get your key at https://soundgrail.com).
    apiKey: 'api_test_Key'
  });
</script>
```

### Use without installation
You can use `soundgrail` in a variety of ways that require no installation, such as `curl` in terminal/shell. See the **Use without installation** section below.

## Using SoundGrail
After you have followed the install step, you can start using `soundgrail` to enhance your music career

For a more in-depth documentation of this library and the SoundGrail service, please visit the official SoundGrail website.

## Use without installation
### Use SoundGrail with `curl`
```shell
# Standard
curl -X POST https://api.soundgrail.com
```

## What Can SoundGrail do?
[Music samples](https://soundgrail.com), production resources, promotion, and tips for modern musicians and music producers

## Final Words
If you are still having difficulty, we would love for you to post
a question to [the SoundGrail issues page](https://github.com/soundgrail/soundgrail/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

## Projects Using this Library
* coming soon!

Ask us to have your project listed! :)
