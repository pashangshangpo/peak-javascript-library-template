(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.util = factory());
}(this, (function () { 'use strict';

  /**
   * @file index
   * @author xiaozhihua
   * @date 2018-11-24 20:56:27
   */
  var index = {
    sayHello: function sayHello(msg) {
      console.log("hello ".concat(msg));
    }
  };

  return index;

})));
