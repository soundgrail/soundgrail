(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/templates/returnExports.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  var environment = (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') ? 'node' : 'browser';
  var SOURCE = 'library';
  var VERSION = '{version}';

  function SoundGrail(account, options) {
    this.account = account || '';
    this.options = options || {};
  };

  SoundGrail.prototype.request = function(payload) {
    return fetch('https://api.soundgrail.com', payload)

  }

  // Register
  if (environment === 'browser') {
    try {
      window.SoundGrail = SoundGrail;
    } catch (e) {
    }
  }

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return SoundGrail; // Enable if using UMD

}));
