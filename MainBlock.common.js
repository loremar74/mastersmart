module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NHnr");


/***/ }),

/***/ "D0R9":
/***/ (function(module, exports) {

module.exports = {"iPhone":{"5S":{"Ремонт экрана <font color='red'>+ защита в подарок</font>":"Недорого","Замена радиомодуля":"<strike>Дорого!</strike> <font color='red'>Не очень дорого!</font>","_image":"http://мастерсмарт.рф/images/50047396_502911-crop-u3621.png?crc=236532590"},"X":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."}},"Samsung":{"A3":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"},"S8":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."},"A23":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"},"3S8":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."},"A43":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"},"S58":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."},"A63":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"},"S78":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."},"A83":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"},"S98":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."},"A343":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"},"S128":{"Ремонт экрана":"Ты охуеешь","Замена радиомодуля":"Даже не думай."}},"Huawei":{"1":{"Ремонт экрана":"Недорого","Замена радиомодуля":"Дорого!"}}}

/***/ }),

/***/ "IHvz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___root___Vue__ = __webpack_require__("lRwf");
var external___commonjs___vue___commonjs2___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___root___Vue__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/travis/build/app4site/mastersmart/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MainBlock.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MainBlock = ({
  props: {
    price: Object
  },
  data: function data() {
    return {
      selectedMark: Object.keys(this.price)[0],
      selectedModel: null
    };
  },
  watch: {
    selectedMark: {
      immediate: true,
      handler: function handler() {
        this.selectedModel = Object.keys(this.price[this.selectedMark])[0];
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3931355a","hasScoped":true,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug&optionsId=1!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MainBlock.vue
var MainBlock_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root",class:{mobile: _vm.mobile}},[_c('div',{staticClass:"marks"},_vm._l((Object.keys(_vm.price)),function(mark){return _c('span',{staticClass:"mark",class:{selected: _vm.selectedMark === mark},on:{"click":function($event){_vm.selectedMark = mark}}},[_vm._v(_vm._s(mark))])})),(Object.keys(_vm.price[_vm.selectedMark]).length > 1)?_c('div',{staticClass:"models"},_vm._l((Object.keys(_vm.price[_vm.selectedMark])),function(model){return _c('span',{staticClass:"model",class:{selected: _vm.selectedModel === model},on:{"click":function($event){_vm.selectedModel = model}}},[_vm._v(_vm._s(model))])})):_vm._e(),_c('div',{staticClass:"jobs-n-image"},[_c('div',{staticClass:"jobs"},_vm._l((Object.keys(_vm.price[_vm.selectedMark][_vm.selectedModel])),function(job){return (job !== '_image')?_c('div',{staticClass:"job"},[_c('div',{staticClass:"name",domProps:{"innerHTML":_vm._s(job)}}),_c('div',{staticClass:"price",domProps:{"innerHTML":_vm._s(_vm.price[_vm.selectedMark][_vm.selectedModel][job])}})]):_vm._e()})),(!_vm.mobile && _vm.price[_vm.selectedMark][_vm.selectedModel]['_image'])?_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":_vm.price[_vm.selectedMark][_vm.selectedModel]['_image']}})]):_vm._e()])])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/MainBlock.vue
function injectStyle (context) {
  __webpack_require__("IHvz")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3931355a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  MainBlock,
  MainBlock_render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_MainBlock = (Component.exports);

// EXTERNAL MODULE: ./src/price.json
var price = __webpack_require__("D0R9");
var price_default = /*#__PURE__*/__webpack_require__.n(price);

// CONCATENATED MODULE: ./src/main.js



external___commonjs___vue___commonjs2___vue___root___Vue___default.a.config.productionTip = false;

function detectMobile() {
  return typeof window.isMobile === 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : window.isMobile;
}

external___commonjs___vue___commonjs2___vue___root___Vue___default.a.mixin({
  data: function data() {
    return {
      mobile: detectMobile()
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('resize', function () {
      return _this.mobile = detectMobile();
    });
  }
});
var app = new external___commonjs___vue___commonjs2___vue___root___Vue___default.a({
  render: function render(h) {
    return h(components_MainBlock, {
      props: {
        price: price_default.a
      }
    });
  }
});
if (false) window.MainBlock = app;
/* harmony default export */ var main = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })

/******/ })["default"];
//# sourceMappingURL=MainBlock.common.js.map