<p align="center">
  <a href="https://cdn.itwcreativeworks.com/assets/soundgrail/images/logo/soundgrail-brandmark-blue-x.svg">
    <img src="https://cdn.itwcreativeworks.com/assets/soundgrail/images/logo/soundgrail-brandmark-blue-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/soundgrail/soundgrail.svg">
  <br>
  <img src="https://img.shields.io/david/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/david/dev/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/bundlephobia/min/soundgrail.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/npm/dm/soundgrail.svg">
  <img src="https://img.shields.io/node/v/soundgrail.svg">
  <img src="https://img.shields.io/website/https/itwcreativeworks.com.svg">
  <img src="https://img.shields.io/github/license/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/github/contributors/soundgrail/soundgrail.svg">
  <img src="https://img.shields.io/github/last-commit/soundgrail/soundgrail.svg">
  <br>
  <br>
  <a href="https://soundgrail.com">Site</a> | <a href="https://www.npmjs.com/package/soundgrail">NPM Module</a> | <a href="https://github.com/soundgrail/soundgrail">GitHub Repo</a>
  <br>
  <br>
  <strong>soundgrail</strong> is the official npm module of <a href="https://soundgrail.com">SoundGrail</a>, a backend form processing service for contact forms, payment forms, and much more—perfectly suited for static sites!
  <br>
</p>

## SoundGrail Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatibility with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## Features
* Connect to the SoundGrail API easily

## Install SoundGrail
### Install via npm
Install with npm if you plan to use SoundGrail in a Node project or in the browser.
```shell
npm install soundgrail
```
If you plan to use `soundgrail` in a browser environment, you will probably need to use [Webpack](https://www.npmjs.com/package/webpack), [Browserify](https://www.npmjs.com/package/browserify), or a similar service to compile it.

```js
const soundgrail = new (require('soundgrail'));
```

### Install via CDN
Install with CDN if you plan to use SoundGrail only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/soundgrail@latest/dist/index.min.js"></script>
<script type="text/javascript">
  var soundgrail = new SoundGrail(); // The script above exposes the global variable 'SoundGrail'
</script>
```

### Use without installation
You can also use SoundGrail without installing any additional libraries by using HTML forms or jQuery's AJAX. Please see the section below for details.

## Using SoundGrail
### Via the npm module or the CDN
After you have followed the install step, you can start using `soundgrail` with your website or software!
```js
soundgrail.request({
  // ...
})
.then(function (response) { // This function runs only on success
  console.log('Success!', response);
})
.catch(function (response) { // This function runs only on error
  console.log('Fail!', response);
})
.finally(function () { // This function runs regardless of success or error
  console.log('This always runs!');
});
```
## Projects Using this Library
[Somiibo](https://somiibo.com/): A Social Media Bot with an open-source module library. <br>
[JekyllUp](https://jekyllup.com/): A website devoted to sharing the best Jekyll themes. <br>
[Playlisteer](https://playlisteer.com/): A resource for producers, musicians, and DJs. <br>
[Hammock Report](https://hammockreport.com/): An API for exploring and listing backyard products. <br>

Ask us to have your project listed! :)
