exports.ids = [3];
exports.modules = {

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("08b26095", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_21a897be_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_21a897be_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_21a897be_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_21a897be_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_21a897be_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".topic{display:flex;flex-wrap:wrap}.topic_card{position:static;width:calc(33.33333% - 32px);aspect-ratio:2/1;display:flex;justify-content:right;align-items:flex-end;background:linear-gradient(180deg,rgba(22,22,22,.98) -71.5%,rgba(22,22,22,0) 46.55%,rgba(22,22,22,.98)),url(https://news.agentm.tw/wp-content/uploads/image1-233-750x422.jpg);background-position:50%;background-size:cover;margin-left:24px;margin-top:20px}.topic_card-title{color:#fff;font-size:18px;margin:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/topic/index.vue?vue&type=template&id=21a897be&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "topic container not-banner"
  }, [_vm._ssrNode(_vm._ssrList(_vm.list, function ($item, $key) {
    return "<div class=\"topic_card\"><div class=\"topic_card-title\">" + _vm._ssrEscape("\n            " + _vm._s($item.name) + "\n        ") + "</div></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/topic/index.vue?vue&type=template&id=21a897be&

// EXTERNAL MODULE: ./modules/fetch.js
var fetch = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/topic/index.vue?vue&type=script&lang=js&

/* harmony default export */ var topicvue_type_script_lang_js_ = ({
  name: 'TopicView',
  components: {},
  data: function () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };
  },
  mounted: function () {
    Object(fetch["a" /* getMovieGenre */])().then(response => {
      console.log(response.data);
      this.list = response.data.genres;
    });
  }
});
// CONCATENATED MODULE: ./pages/topic/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_topicvue_type_script_lang_js_ = (topicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/topic/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_topicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0376e3de"
  
)

/* harmony default export */ var topic = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map