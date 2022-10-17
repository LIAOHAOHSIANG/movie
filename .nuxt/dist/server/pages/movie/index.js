exports.ids = [2];
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("65b9683e", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("59bf630d", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwSelectButton_vue_vue_type_style_index_0_id_0f90754b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwSelectButton_vue_vue_type_style_index_0_id_0f90754b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwSelectButton_vue_vue_type_style_index_0_id_0f90754b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwSelectButton_vue_vue_type_style_index_0_id_0f90754b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwSelectButton_vue_vue_type_style_index_0_id_0f90754b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wtw-select-button{width:66.36px;height:28px;background-color:#000;color:#fff;border-radius:4px;border:0;cursor:pointer}.wtw-select-button.active{background:linear-gradient(91.47deg,#c10171 3.73%,#5c00f2)}.wtw-select:hover .wtw-select-button.active{background:#000}.wtw-select-button:hover{background:linear-gradient(91.47deg,#c10171 3.73%,#5c00f2)!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwFilter_vue_vue_type_style_index_0_id_cec0e444_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwFilter_vue_vue_type_style_index_0_id_cec0e444_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwFilter_vue_vue_type_style_index_0_id_cec0e444_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwFilter_vue_vue_type_style_index_0_id_cec0e444_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WtwFilter_vue_vue_type_style_index_0_id_cec0e444_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".filter{background-color:rgba(104,107,114,.1);padding:24px;border-radius:20px;margin-bottom:12px}.filter_group{margin-bottom:28px}.filter_group-content{margin-top:16px}.filter-button{width:66.36px;height:28px;margin:8px 6px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/movie/index.vue?vue&type=template&id=73ee7d7d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container not-banner"
  }, [_c('filter-div', {
    attrs: {
      "list": _vm.genre_list
    }
  }), _vm._ssrNode(" "), _c('movie-card')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/movie/index.vue?vue&type=template&id=73ee7d7d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WtwFilter.vue?vue&type=template&id=cec0e444&
var WtwFiltervue_type_template_id_cec0e444_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "filter"
  }, [_vm._ssrNode("<div class=\"filter_group\">", "</div>", [_c('WtwTitle', [_vm._v("類型")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wtw-select filter_group-content\">", "</div>", _vm._l(_vm.list, function ($item, $key) {
    return _c('WtwSelectButton', {
      directives: [{
        name: "click",
        rawName: "v-click",
        value: _vm.selectType($item),
        expression: "selectType($item)"
      }],
      key: $key,
      staticClass: "filter-button",
      attrs: {
        "active": _vm.select_item && $item.id == _vm.select_item.id
      }
    }, [_vm._v(_vm._s($item.name))]);
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter_group\">", "</div>", [_c('WtwTitle', [_vm._v("年份")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wtw-select filter_group-content\">", "</div>", _vm._l(_vm.year_list, function ($item, $key) {
    return _c('WtwSelectButton', {
      key: $key,
      staticClass: "filter-button",
      attrs: {
        "active": $item == _vm.select_year
      }
    }, [_vm._v(_vm._s($item))]);
  }), 1)], 2)], 2);
};
var WtwFiltervue_type_template_id_cec0e444_staticRenderFns = [];

// CONCATENATED MODULE: ./components/WtwFilter.vue?vue&type=template&id=cec0e444&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WtwSelectButton.vue?vue&type=template&id=0f90754b&
var WtwSelectButtonvue_type_template_id_0f90754b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "wtw-select-button",
    class: {
      'active': _vm.active
    }
  }, [_vm._t("default")], 2);
};
var WtwSelectButtonvue_type_template_id_0f90754b_staticRenderFns = [];

// CONCATENATED MODULE: ./components/WtwSelectButton.vue?vue&type=template&id=0f90754b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WtwSelectButton.vue?vue&type=script&lang=js&
/* harmony default export */ var WtwSelectButtonvue_type_script_lang_js_ = ({
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/WtwSelectButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WtwSelectButtonvue_type_script_lang_js_ = (WtwSelectButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WtwSelectButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WtwSelectButtonvue_type_script_lang_js_,
  WtwSelectButtonvue_type_template_id_0f90754b_render,
  WtwSelectButtonvue_type_template_id_0f90754b_staticRenderFns,
  false,
  injectStyles,
  null,
  "32abc830"
  
)

/* harmony default export */ var WtwSelectButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WtwFilter.vue?vue&type=script&lang=js&

/* harmony default export */ var WtwFiltervue_type_script_lang_js_ = ({
  props: {
    list: {
      type: Array
    }
  },
  components: {
    WtwSelectButton: WtwSelectButton
  },
  data: function () {
    return {
      select_item: null,
      year_list: ['全部', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'],
      select_year: "全部"
    };
  },
  methods: {
    selectType: function ($select_item) {
      this.select_item = $select_item;
    }
  }
});
// CONCATENATED MODULE: ./components/WtwFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WtwFiltervue_type_script_lang_js_ = (WtwFiltervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/WtwFilter.vue



function WtwFilter_injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WtwFilter_component = Object(componentNormalizer["a" /* default */])(
  components_WtwFiltervue_type_script_lang_js_,
  WtwFiltervue_type_template_id_cec0e444_render,
  WtwFiltervue_type_template_id_cec0e444_staticRenderFns,
  false,
  WtwFilter_injectStyles,
  null,
  "6e719092"
  
)

/* harmony default export */ var WtwFilter = (WtwFilter_component.exports);
// EXTERNAL MODULE: ./components/MovieCard.vue + 4 modules
var MovieCard = __webpack_require__(30);

// EXTERNAL MODULE: ./modules/fetch.js
var fetch = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/movie/index.vue?vue&type=script&lang=js&



/* harmony default export */ var movievue_type_script_lang_js_ = ({
  name: 'MovieView',
  components: {
    FilterDiv: WtwFilter,
    MovieCard: MovieCard["a" /* default */]
  },
  data: function () {
    return {
      genre_list: []
    };
  },
  mounted: function () {
    Object(fetch["a" /* getMovieGenre */])().then(response => {
      this.genre_list = response.data.genres;
      console.log(this.genre_list);
    });
  }
});
// CONCATENATED MODULE: ./pages/movie/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_movievue_type_script_lang_js_ = (movievue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/movie/index.vue





/* normalize component */

var movie_component = Object(componentNormalizer["a" /* default */])(
  pages_movievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f52889f"
  
)

/* harmony default export */ var movie = __webpack_exports__["default"] = (movie_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map