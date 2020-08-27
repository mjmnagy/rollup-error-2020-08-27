this.ulibrary = this.ulibrary || {};
this.ulibrary.iife = (function (exports, components) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) { return e; } else {
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function (k) {
          if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function () {
                return e[k];
              }
            });
          }
        });
      }
      n['default'] = e;
      return Object.freeze(n);
    }
  }

  var components__namespace = /*#__PURE__*/_interopNamespace(components);

  // Used to create imports for vue component library

  const install = (Vue, options = {}) => {
    // Use Components
    Object.values(components__namespace).forEach((comp) => {
      Vue.use(comp);
    });
  };

  // auto install
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = { install };

  Object.keys(components).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return components[k];
      }
    });
  });
  exports.default = index;

  return exports;

}({}, components));
