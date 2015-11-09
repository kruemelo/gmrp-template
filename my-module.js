(function(definition) {
    if (typeof module !== 'undefined') {
      module.exports = definition();
    }
    else if (typeof define === 'function' && typeof define.amd === 'object') {
      define(definition);
    }
    else if (typeof window === 'object') {
      window.MYMODULE = definition;
    }
}(function () {

  'use strict';

  var MYMODULE = function () {
  };

  
  MYMODULE.prototype.doWhatIMean = function () {
    return this;
  };


  return MYMODULE;

}));
