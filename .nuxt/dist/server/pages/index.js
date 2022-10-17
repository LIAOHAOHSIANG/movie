exports.ids = [1];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2c59d53e", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTopRateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMovieGenre; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api_url = "https://api.themoviedb.org/3";
const api_key = "4d8aa15e2551b4d3a51bf0064361cfa8";
const getUrl = $url => {
  return api_url + $url + "?api_key=" + api_key + "&language=zh-TW&region=tw";
};
const getTopRateMovie = async () => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(getUrl("/movie/popular"));
};
const getMovieGenre = async () => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(getUrl("/genre/movie/list"));
};


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCard_vue_vue_type_style_index_0_id_4bf1ed4e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCard_vue_vue_type_style_index_0_id_4bf1ed4e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCard_vue_vue_type_style_index_0_id_4bf1ed4e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCard_vue_vue_type_style_index_0_id_4bf1ed4e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCard_vue_vue_type_style_index_0_id_4bf1ed4e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".movie{max-width:1092px;margin-left:auto;margin-right:auto;margin-top:42px;display:flex;flex-wrap:wrap}.movie-card{width:152px;height:226px;margin-bottom:34px}.movie-card_poster{position:relative;width:152px;height:201px;background-size:100% 100%}.movie-card_score{background:linear-gradient(91.47deg,#c10171 3.73%,#5c00f2);position:absolute;right:4px;bottom:8px;width:33px;height:20px;text-align:center;border-radius:4px;box-sizing:border-box}.movie-card_title{color:#fff;margin-top:4px;height:21px;line-height:21px;font-size:14px;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/MovieCard.vue?vue&type=template&id=4bf1ed4e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "movie-card"
  }, [_vm._ssrNode("<div class=\"movie-card_poster\"" + _vm._ssrStyle(null, {
    'background-image': 'url(' + _vm.url + ')'
  }, null) + "><div class=\"movie-card_score\">8.3</div></div> <div class=\"movie-card_title\">蜘蛛人返家日</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MovieCard.vue?vue&type=template&id=4bf1ed4e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MovieCard.vue?vue&type=script&lang=js&
/* harmony default export */ var MovieCardvue_type_script_lang_js_ = ({
  data: function () {
    return {
      url: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/02/jordan-peele-us-poster.jpg?ssl=1"
    };
  }
});
// CONCATENATED MODULE: ./components/MovieCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MovieCardvue_type_script_lang_js_ = (MovieCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MovieCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MovieCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "079b82c0"
  
)

/* harmony default export */ var MovieCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0542ed34", content, true)

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a709ddfe", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("81e9fcbe", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"swiper-icons\";src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-moz-font-feature-settings:normal,;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwBanner_vue_vue_type_style_index_0_id_50e50876_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwBanner_vue_vue_type_style_index_0_id_50e50876_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwBanner_vue_vue_type_style_index_0_id_50e50876_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwBanner_vue_vue_type_style_index_0_id_50e50876_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwBanner_vue_vue_type_style_index_0_id_50e50876_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".banner{overflow:hidden;margin-bottom:-71px}.banner-item{color:#fff;width:100vw;height:720px;background-size:100% auto!important;background-position:50%}.banner-item-box{position:absolute;left:111px;top:208px}.banner-item-scope{font-size:70px;font-weight:700;background:linear-gradient(91.47deg,#c10171 3.73%,#5c00f2);-webkit-background-clip:text;background-clip:text;color:transparent}.banner-item-title{width:50vw;height:110px;font-size:76px;line-height:110px;font-weight:500;text-overflow:ellipsis;overflow:hidden}.banner-item-summary{width:346px;height:48px;text-overflow:ellipsis;overflow:hidden}.banner-item-button{display:flex;justify-content:center;align-items:center;width:160px;margin-right:15px;border-radius:13px;height:42px;background:linear-gradient(91.47deg,#c10171 3.73%,#5c00f2)}.banner-item-button_group{display:flex;margin-top:16px}.banner-item-button.black{background:#1b1e25;border:1px solid linear-gradient(91.47deg,#c10171 3.73%,#5c00f2)}.banner .swiper-pagination{position:absolute;bottom:119px;top:auto;left:auto;right:39.88px;width:-moz-fit-content;width:fit-content;height:6px;display:flex}.banner .swiper-pagination .item{width:14.43px;height:6px;border-radius:50px;margin-left:7.98px;margin-right:0;background:hsla(0,0%,100%,.37);cursor:pointer}.banner .swiper-pagination .item.active{width:33.81px;background-color:#fff}.banner-container{max-width:1200px;margin-left:auto;margin-right:auto;position:relative}.banner{height:720px;width:100vw}.banner .swiper-slide{width:100%;height:720px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieArea_vue_vue_type_style_index_0_id_4fb3e2d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieArea_vue_vue_type_style_index_0_id_4fb3e2d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieArea_vue_vue_type_style_index_0_id_4fb3e2d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieArea_vue_vue_type_style_index_0_id_4fb3e2d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieArea_vue_vue_type_style_index_0_id_4fb3e2d4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hot_movie .movie-swiper{display:flex;align-items:center}.hot_movie .movie_container{width:calc(100% - 208px);margin-left:auto;margin-right:auto;overflow:hidden}.hot_movie .slick-prev{width:50px;height:50px;border-radius:13px;display:flex;justify-content:center;align-items:center;cursor:pointer}.hot_movie .slick-prev,.hot_movie .slick-prev:hover{background-color:#686b72}.hot_movie .slick-prev:before{content:\"\"}.hot_movie .slick-next{width:50px;height:50px;border-radius:13px;display:flex;justify-content:center;align-items:center;cursor:pointer}.hot_movie .slick-next,.hot_movie .slick-next:hover{background-color:#686b72}.hot_movie .slick-next:before{content:\"\"}.hot_movie .swiper-slide{width:152px;height:201px;margin-right:16px}.hot_movie{padding:40px 26px;overflow-x:hidden;overflow-y:hidden}.hot_movie.dark_background{background-color:rgba(104,107,114,.1);border-radius:20px}.hot_movie-title{font-size:20px;line-height:30px;margin-bottom:14px}.hot_movie-content{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=8dafd9e0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('WtwBanner'), _vm._ssrNode(" "), _c('MovieArea', {
    attrs: {
      "title": "熱門電影"
    }
  }), _vm._ssrNode(" "), _c('MovieArea', {
    attrs: {
      "title": "熱門韓劇",
      "is-dark": true
    }
  }), _vm._ssrNode(" "), _c('MovieArea', {
    attrs: {
      "title": "熱門陸劇、台劇"
    }
  }), _vm._ssrNode(" "), _c('MovieArea', {
    attrs: {
      "title": "熱門美劇",
      "is-dark": true
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=8dafd9e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WtwBanner.vue?vue&type=template&id=50e50876&
var WtwBannervue_type_template_id_50e50876_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "banner"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\">" + _vm._ssrList(_vm.list, function ($item, $key) {
    return "<div class=\"swiper-slide\"><div class=\"banner-item\"" + _vm._ssrStyle(null, {
      'background': _vm.getBackground($item.image)
    }, null) + "><div class=\"banner-item-box banner-container\"><div class=\"banner-item-scope\">" + _vm._ssrEscape(_vm._s($item.vote_average)) + "</div> <div class=\"banner-item-title\">" + _vm._ssrEscape(_vm._s($item.title)) + "</div> <div class=\"banner-item-summary\">" + _vm._ssrEscape(_vm._s($item.overview)) + "</div> <div class=\"banner-item-button_group\"><div class=\"banner-item-button black\">更多資訊</div> <div class=\"banner-item-button\">加入片單</div></div></div></div></div>";
  }) + "</div> <div class=\"banner-container\"><div class=\"swiper-pagination\"></div></div>")]);
};
var WtwBannervue_type_template_id_50e50876_staticRenderFns = [];

// CONCATENATED MODULE: ./components/WtwBanner.vue?vue&type=template&id=50e50876&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(25);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(34);

// EXTERNAL MODULE: ./modules/fetch.js
var fetch = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WtwBanner.vue?vue&type=script&lang=js&



/* harmony default export */ var WtwBannervue_type_script_lang_js_ = ({
  data: function () {
    return {
      list: [],
      swiper: null
    };
  },
  mounted: function () {
    Object(fetch["b" /* getTopRateMovie */])().then(response => {
      const results = response.data.results;
      console.log(results);
      results.forEach(result => {
        this.list.push({
          title: result.title,
          image: result.backdrop_path,
          overview: result.overview,
          vote_average: result.vote_average
        });
      });
    });
    this.initBanners();
  },
  methods: {
    getBackground: function ($image) {
      return "linear-gradient(360deg, #1B1E25 0%, rgba(27, 30, 37, 0) 29.22%), radial-gradient(72.5% 427.7% at 96.33% 50%, rgba(27, 30, 37, 0) 39.58%, rgba(27, 30, 37, 0.93) 94.79%),url('https://image.tmdb.org/t/p/original/" + $image + "')";
    },
    initBanners: function () {
      this.swiper = new external_swiper_default.a('.banner', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        // Navigation arrows
        navigation: {
          nextEl: '.slick-next2',
          prevEl: '.slick-prev2'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
            let $str = "";
            for (let i = 0; i < total; i++) {
              let $classNmae = "";
              if (i == current - 1) {
                $classNmae = "active";
              }
              $str = $str + "<div class='item " + $classNmae + "'></div>";
            }
            $str = $str + "";
            return $str;
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/WtwBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WtwBannervue_type_script_lang_js_ = (WtwBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WtwBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WtwBannervue_type_script_lang_js_,
  WtwBannervue_type_template_id_50e50876_render,
  WtwBannervue_type_template_id_50e50876_staticRenderFns,
  false,
  injectStyles,
  null,
  "e4f56b74"
  
)

/* harmony default export */ var WtwBanner = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/MovieArea.vue?vue&type=template&id=4fb3e2d4&
var MovieAreavue_type_template_id_4fb3e2d4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hot_movie container",
    class: {
      'dark_background': _vm.isDark
    }
  }, [_vm._ssrNode("<div class=\"hot_movie-title movie_container\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.title) + "\n    ") + "</div> "), _vm._ssrNode("<div class=\"movie-swiper\">", "</div>", [_vm._ssrNode("<div class=\"slick-prev\"><svg width=\"11\" height=\"22\" viewBox=\"0 0 11 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.84077 21.0027C8.62731 21.0034 8.4164 20.9563 8.22354 20.8648C8.03068 20.7733 7.86076 20.6398 7.72628 20.474L0.825041 11.9011C0.614887 11.6454 0.5 11.3247 0.5 10.9938C0.5 10.6628 0.614887 10.3421 0.825041 10.0865L7.96918 1.51348C8.21171 1.22169 8.56022 1.03819 8.93804 1.00336C9.31586 0.968526 9.69204 1.08521 9.98383 1.32773C10.2756 1.57026 10.4591 1.91877 10.494 2.29659C10.5288 2.67441 10.4121 3.05059 10.1696 3.34238L3.78272 11.0009L9.95526 18.6594C10.13 18.8692 10.241 19.1245 10.2751 19.3954C10.3092 19.6662 10.265 19.9412 10.1478 20.1877C10.0305 20.4342 9.84514 20.6419 9.61351 20.7864C9.38188 20.9308 9.11372 21.0059 8.84077 21.0027Z\" fill=\"white\"></path></svg></div> "), _vm._ssrNode("<div class=\"movie_container\">", "</div>", [_vm._ssrNode("<div class=\"swiper\">", "</div>", [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('MovieCard')], 1)], 2)])]), _vm._ssrNode(" <div class=\"slick-next\"><svg width=\"11\" height=\"22\" viewBox=\"0 0 11 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.15923 0.997297C2.37269 0.996572 2.5836 1.04368 2.77646 1.13517C2.96932 1.22666 3.13924 1.36019 3.27372 1.52596L10.175 10.0989C10.3851 10.3546 10.5 10.6753 10.5 11.0062C10.5 11.3372 10.3851 11.6579 10.175 11.9135L3.03082 20.4865C2.78829 20.7783 2.43978 20.9618 2.06196 20.9966C1.68414 21.0315 1.30796 20.9148 1.01617 20.6723C0.724376 20.4297 0.54088 20.0812 0.506045 19.7034C0.471212 19.3256 0.587892 18.9494 0.830419 18.6576L7.21728 10.9991L1.04475 3.34058C0.870023 3.13085 0.759037 2.87546 0.724917 2.60462C0.690798 2.33379 0.734972 2.05885 0.852216 1.81234C0.969459 1.56582 1.15486 1.35806 1.38649 1.21361C1.61812 1.06917 1.88628 0.994107 2.15923 0.997297Z\" fill=\"white\"></path></svg></div>")], 2)], 2);
};
var MovieAreavue_type_template_id_4fb3e2d4_staticRenderFns = [];

// CONCATENATED MODULE: ./components/MovieArea.vue?vue&type=template&id=4fb3e2d4&

// EXTERNAL MODULE: ./components/MovieCard.vue + 4 modules
var MovieCard = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MovieArea.vue?vue&type=script&lang=js&



/* harmony default export */ var MovieAreavue_type_script_lang_js_ = ({
  components: {
    MovieCard: MovieCard["a" /* default */]
  },
  props: {
    title: {
      type: String
    },
    isDark: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  mounted: function () {
    new external_swiper_default.a('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      // Navigation arrows
      navigation: {
        nextEl: '.slick-next',
        prevEl: '.slick-prev'
      }
    });
  }
});
// CONCATENATED MODULE: ./components/MovieArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MovieAreavue_type_script_lang_js_ = (MovieAreavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/MovieArea.vue



function MovieArea_injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MovieArea_component = Object(componentNormalizer["a" /* default */])(
  components_MovieAreavue_type_script_lang_js_,
  MovieAreavue_type_template_id_4fb3e2d4_render,
  MovieAreavue_type_template_id_4fb3e2d4_staticRenderFns,
  false,
  MovieArea_injectStyles,
  null,
  "cd3ee4c6"
  
)

/* harmony default export */ var MovieArea = (MovieArea_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'HomeView',
  components: {
    WtwBanner: WtwBanner,
    MovieArea: MovieArea
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "595e0fbe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map