/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/palm-tree-leaf-shadow-on-pink-background.jpg */ \"./src/assets/palm-tree-leaf-shadow-on-pink-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/riccardo-farinazzo-lGIOSX7t1Mo-unsplash.jpg */ \"./src/assets/riccardo-farinazzo-lGIOSX7t1Mo-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*FONTS*/\n\n\n/*Main container boxes*/\nbody {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: contain;\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n#mainbox {\n  margin-left: 90px;\n    background-color: rgb(128, 138, 118);\n    width: 83vw;\n    height: 90vh;\n    border-radius: 10px 10px 0 0;\n    grid-row: 1;\n    grid-column: 1;\n}\n.contentbox {\n    position: absolute;\n    height: 460px;\n    width: 80%;\n    background-color: rgba(100, 4, 4, 0.37);\n    left: 140px;\n    top: 225px;\n}\n.navbar {\n    margin-top: 150px;\n    height: 50px;\n    width: 99%;\n    border-radius: 5px;\n    z-index: 1;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 1fr;\n    margin-left: 24px;\n}\n.dropbox {\n    opacity: 0;\n    transition: opacity 0.5s ease, max-height 0.5s ease;\n    max-height: 0;\n    display: grid;\n    overflow: hidden;\n    pointer-events: none;\n}\n.dropbox.show {\n    pointer-events: auto;\n    opacity: 1;\n    width: 20vw;\n    max-height: 27vh;\n    background-color: rgba(44, 42, 165, 0.267);\n    justify-content: center;\n    margin-top: 20px;\n    justify-self: center;\n    border-radius: 0 0 10px 10px;\n\n}\n/*Main content box end.*/\n\n\n/*ELEMENT CLASSES*/\n\n/*header*/\n.title {\n    position: absolute;\n    z-index: 1;\n    left: 440px;\n    top: 10px;\n    font-family: \"Edu NSW ACT Hand Pre\", cursive;\n    font-weight: 800;\n    text-decoration: underline;\n    border-bottom: black solid 6px;\n    padding-left: 100px;\n    padding-right: 100px;\n}\n.profile {\n    height: 70px;\n    width: 70px;\n    background-color: aquamarine;\n    z-index: 1;\n    position: absolute;\n    top: 50px;\n    left: 150px;\n    border-radius: 50px;\n}\n/*header end*/\n\n/*navbar*/\n.navbtn {\n    height: 7vh;\n    width: 20vw;\n    background-color: rgba(21, 27, 22, 0.311);\n    color: white;\n    border-radius: 10px;\n    box-shadow: rgb(136, 29, 29) 1px 2px 4px 1px;\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(5px);\n    font-family: \"Edu NSW ACT Hand Pre\", cursive;\n    font-weight: 800;\n    font-size: larger;\n    z-index: 1;\n}\n.navbtn:hover {\n    background-color: rgba(21, 27, 22, 0.034);\n}\n.dropbtns {\n    height: 7vh;\n    width: 20vw;\n    background-color: rgba(21, 27, 22, 0.311);\n    color: white;\n    border-radius: 10px;\n    box-shadow: rgb(136, 29, 29) 1px 2px 4px 1px;\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(5px);\n    font-family: \"Edu NSW ACT Hand Pre\", cursive;\n    font-weight: 800;\n    font-size: larger;\n    z-index: 1;\n    margin-top: 8px;\n}\n.dropbtns:hover {\n  background-color: rgba(102, 121, 105, 0.311);\n}\n/*navbar end*/\n\n\n/*Main page content.*/\n.home {\n  margin-top: 30px;\n  width: 300px;\n  height: 400px;\n  background-color: green;\n}\n/*images*/\n.boximg {\n    height: 95.5%;\n    width: 85.7%;\n    position: absolute;\n    z-index: 0;\n    border-radius: 10px 10px 0 0;\n    border: rgb(7, 5, 5) 2px solid;\n}\n/*image end*/\n\n/*footer*/\n#footer {\n    padding: 15px;\n    width: 82.8%;\n    height: 70px;\n    background-color: rgb(8, 10, 10);\n    grid-row: 2;\n    grid-column: 1;\n    margin-left: 90px;\n    margin-top: 40px;\n    border-top: rgb(5, 1, 1) 5px solid;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n}\n\n.email {\n  grid-column: 1;\n  grid-row: 1;\n  margin-top: 1px;\n  height: 10px;\n  width: 300px;\n  color: rgb(14, 164, 223);\n}\n.phonenum {\n  grid-column: 1;\n  grid-row: 2;\n  margin-top: 1px;\n  height: 10px;\n  width: 300px;\n  color: rgb(14, 164, 223);\n}\n.gitlabel {\n  display: grid;\n  justify-items: end;\n  grid-row: 1;\n  grid-column: 7;\n  margin-top: 2px;\n  height: 10px;\n  width: 300px;\n  color: rgb(14, 164, 223);\n}\n.gitlink {\n  grid-column: 8;\n  grid-row: 1;\n  margin-top: 2px;\n  margin-left: 30px;\n  height: 10px;\n  width: 300px;\n  color: rgb(14, 164, 223);\n}\n.linklabel {\n  display: grid;\n  justify-items: end;\n  grid-row: 2;\n  grid-column: 7;\n  margin-top: 0;\n  margin-left: 3px;\n  height: 10px;\n  width: 300px;\n  color: rgb(14, 164, 223);\n}\n.linkedlink {\n  grid-row: 2;\n  grid-column: 8;\n  margin-top: 0;\n  margin-left: 30px;\n  height: 10px;\n  width: 300px;\n  color: rgb(14, 164, 223);\n}\n/*footer end*/\n\n\n/**Homepage Content*/\n.homebox {\n  height: 100%;\n  width: 100%;\n  background-color: rgb(248, 250, 250);\n  margin: 0;\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 1fr 3fr;\n  grid-template-columns: 1fr 1fr;\n\n}\n.htitle {\n  margin: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 100px;\n  width: 100%;\n  border-bottom: black solid 2px;\n  grid-column: 1/-1;\n  display: grid;\n  justify-self: center;\n  justify-items: center;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  background: linear-gradient(to top right, purple, cyan);\n}\n.himage {\n  position: relative;\n  margin: 0;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  width: 500px;\n  display: grid;\n  justify-self: center;\n  grid-column: 1;\n  grid-row: 2;\n}\n.hlorem {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 3fr;\n  grid-column: 2;\n  grid-row: 2;\n  background-color: rgb(250, 248, 248);\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  border-radius: 5px;\n  width: 500px;\n}\n.loremtitle {\n  height: 50px;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  font-size: xx-large;\n}\n.lorem {\n  height: 80%;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  text-align: center;\n  font-size: x-large;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  font-weight: 300;\n}\n/*Homepage Content End*/\n\n/**Storepage Content*/\n.storebox {\n  height: 100%;\n  width: 100%;\n  background-color: rgb(248, 250, 250);\n  margin: 0;\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 1fr 3fr;\n  grid-template-columns: 1fr 1fr;\n\n}\n.stitle {\n  margin: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 100px;\n  width: 100%;\n  border-bottom: black solid 2px;\n  grid-column: 1/-1;\n  display: grid;\n  justify-self: center;\n  justify-items: center;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  background: linear-gradient(to top right, purple, cyan);\n}\n.simage {\n  position: relative;\n  margin: 0;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  width: 500px;\n  display: grid;\n  justify-self: center;\n  grid-column: 1;\n  grid-row: 2;\n}\n.storelorem {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 3fr;\n  grid-column: 2;\n  grid-row: 2;\n  background-color: rgb(250, 248, 248);\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  border-radius: 5px;\n  width: 500px;\n}\n.sloremtitle {\n  height: 50px;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  font-size: xx-large;\n}\n.slorem {\n  height: 80%;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  text-align: center;\n  font-size: x-large;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  font-weight: 300;\n}\n/*Storepage Content End*/\n\n/*About content*/\n\n.aboutbox {\n  height: 100%;\n  width: 100%;\n  background-color: rgb(248, 250, 250);\n  margin: 0;\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 1fr 3fr;\n  grid-template-columns: 1fr 1fr;\n\n}\n.atitle {\n  margin: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 100px;\n  width: 100%;\n  border-bottom: black solid 2px;\n  grid-column: 1/-1;\n  display: grid;\n  justify-self: center;\n  justify-items: center;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  background: linear-gradient(to top right, purple, cyan);\n}\n.aimage {\n  position: relative;\n  margin: 0;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  width: 500px;\n  display: grid;\n  justify-self: center;\n  grid-column: 1;\n  grid-row: 2;\n}\n.aboutlorem {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 3fr;\n  grid-column: 2;\n  grid-row: 2;\n  background-color: rgb(250, 248, 248);\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  border-radius: 5px;\n  width: 500px;\n}\n.aloremtitle {\n  height: 50px;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  font-size: xx-large;\n}\n.alorem {\n  height: 80%;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  text-align: center;\n  font-size: x-large;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  font-weight: 300;\n}\n/*End of about content*/\n\n/**Contactpage Content*/\n.contactbox {\n  height: 100%;\n  width: 100%;\n  background-color: rgb(248, 250, 250);\n  margin: 0;\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 1fr 3fr;\n  grid-template-columns: 1fr 1fr;\n\n}\n.ctitle {\n  margin: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 100px;\n  width: 100%;\n  border-bottom: black solid 2px;\n  grid-column: 1/-1;\n  display: grid;\n  justify-self: center;\n  justify-items: center;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  background: linear-gradient(to top right, purple, cyan);\n}\n.cimage {\n  position: relative;\n  margin: 0;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  width: 500px;\n  display: grid;\n  justify-self: center;\n  grid-column: 1;\n  grid-row: 2;\n}\n.contactlorem {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 3fr;\n  grid-column: 2;\n  grid-row: 2;\n  background-color: rgb(250, 248, 248);\n  border: rgb(52, 109, 214) solid 5px;\n  height: 320px;\n  border-radius: 5px;\n  width: 500px;\n}\n.cloremtitle {\n  height: 50px;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  font-size: xx-large;\n}\n.clorem {\n  height: 80%;\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  text-align: center;\n  font-size: x-large;\n  font-family: \"Edu NSW ACT Hand Pre\", cursive;\n  font-weight: 300;\n}\n/*Contactpage Content End*/\n\n/* Phone screen dynamics(work in progress)...*/\n@media screen and (max-width: 768px) {\n    .navbar {\n  grid-template-columns: 1fr; /* stack vertically */\n  height: auto;\n  margin-left: 0;\n}\n\n.navbtn {\n  width: 90vw;\n  height: 50px;\n  font-size: 1rem;\n}\n.dropbox,\n.dropbtns {\n  width: 90vw;\n  font-size: 1rem;\n}\n#mainbox {\n  margin-left: 0;\n  width: 100vw;\n  height: auto;\n  border-radius: 0;\n}\n\n.boximg {\n  width: 100%;\n  height: auto;\n}\n.title {\n  left: 0;\n  top: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 10px;\n}\n.contentbox {\n  width: 90vw;\n  left: 5vw;\n  top: auto;\n  position: relative;\n  height: auto;\n}\n\n#footer {\n  width: 100vw;\n  margin-left: 0;\n}\n}\n/*End of dynamic screen styling...*/\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dynamic-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dynamic-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://dynamic-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dynamic-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dynamic-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dynamic-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dynamic-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dynamic-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dynamic-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dynamic-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/palm-tree-leaf-shadow-on-pink-background.jpg":
/*!*****************************************************************!*\
  !*** ./src/assets/palm-tree-leaf-shadow-on-pink-background.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a583bd360addac8c1d7b.jpg\";\n\n//# sourceURL=webpack://dynamic-website/./src/assets/palm-tree-leaf-shadow-on-pink-background.jpg?");

/***/ }),

/***/ "./src/assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg":
/*!***************************************************************************************************************************************!*\
  !*** ./src/assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b2d791ae6c8077fa97a.jpg\";\n\n//# sourceURL=webpack://dynamic-website/./src/assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg?");

/***/ }),

/***/ "./src/assets/riccardo-farinazzo-lGIOSX7t1Mo-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/riccardo-farinazzo-lGIOSX7t1Mo-unsplash.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d737340872c246f1f718.jpg\";\n\n//# sourceURL=webpack://dynamic-website/./src/assets/riccardo-farinazzo-lGIOSX7t1Mo-unsplash.jpg?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/**This is my homepage(first dynamic setup using js and EJS!)\n * Down below is the logic to create the layout for the homepage.\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  /**Ensuring all of the DOM content gets loaded. */\n  var homeContent = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.setupMainLayout)(); /**Creating a variable that we take from setUpMainLayout()'s objectd. */\n\n  if (homeContent && homeContent.contentbox) {\n    /**This is new to me(had help), but is a safeguard for preventing my function from returning \"undefined\". */\n    var contentbox = homeContent.contentbox; /**'Appending' homeContent to my contentbox object from main.js in order to append newchild. */\n\n    var homebox = document.createElement('div'); /**Child creation(cue baby makin music)... */\n    homebox.classList.add('homebox'); /**Adds a class(been there done that)... */\n    contentbox.appendChild(homebox); /**And finally appends the child. */\n\n    var homeTitle = document.createElement('h1');\n    homeTitle.textContent = 'Homepage';\n    homeTitle.classList.add('htitle');\n    homebox.appendChild(homeTitle);\n    var homeImg = document.createElement('div');\n    homeImg.classList.add('himage');\n    homebox.appendChild(homeImg);\n    var homelorem = document.createElement('div');\n    homelorem.classList.add('hlorem');\n    homebox.appendChild(homelorem);\n    var loremheader = document.createElement('h2');\n    loremheader.classList.add('loremtitle');\n    loremheader.textContent = 'Welcome!';\n    homelorem.appendChild(loremheader);\n    var lorem = document.createElement('p');\n    lorem.classList.add('lorem');\n    lorem.textContent = 'Thank you for checking out my page, this is the home page! Try clicking another tab button!';\n    homelorem.appendChild(lorem);\n  } else {\n    console.error('contentbox not available from setupMainLayout'); /**So if the content does not get appended to said child, it will return this error. */\n  }\n});\n\n//# sourceURL=webpack://dynamic-website/./src/home.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupMainLayout: () => (/* binding */ setupMainLayout)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_pngtree_abstract_blurred_gradient_background_in_bright_rainbow_colors_colorful_rainbow_gradient_image_15684346_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg */ \"./src/assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg\");\n/**Friendly Note: Hi, Lyla here. Please be aware, the notes included are for\n * legitimacy of my involvement in the creation of this app. There are a lot, \n * but I believe it is necessary for my own learning, as well as to show case\n * my interpretation of my own code, as well as others.\n * \n * As this is one of my first professional portfolio projects, I will\n * not include as many comments in the following projects unless for learning\n * purposes.\n */\n\n/**IMPORTS */\n\n\n\n/**Variable declaration for function export(see end of page LINE 100) */\nvar mainbox, contentbox, boximg, navbar, pagetitle, profilebox;\n\n/**DOM wrapper for loading DOM content. */\ndocument.addEventListener('DOMContentLoaded', function () {\n  mainbox = document.getElementById('mainbox');\n  if (!mainbox) {\n    console.error('mainbox element not found');\n    return;\n  }\n\n  /**Footer Content */\n  var footer = document.getElementById('footer');\n  footer.classList.add('footpage');\n  var email = document.createElement('p');\n  email.textContent = 'Email: LylaTheDev@yahoo.com';\n  email.classList.add('email');\n  footer.appendChild(email);\n  var phonenum = document.createElement('p');\n  phonenum.textContent = 'Phone #: xxx-xxx-xxxx';\n  phonenum.classList.add('phonenum');\n  footer.appendChild(phonenum);\n  var gitlabel = document.createElement('p');\n  gitlabel.textContent = 'GitHub:';\n  gitlabel.classList.add('gitlabel');\n  footer.appendChild(gitlabel);\n  var gitlink = document.createElement('a');\n  gitlink.href = 'https://github.com/Kruppers67';\n  gitlink.textContent = 'Kruppers67 - Github';\n  gitlink.classList.add('gitlink');\n  footer.appendChild(gitlink);\n  var linklabel = document.createElement('p');\n  linklabel.textContent = 'LinkedIn:';\n  linklabel.classList.add('linklabel');\n  footer.appendChild(linklabel);\n  var linkedlink = document.createElement('a');\n  linkedlink.href = 'https://www.linkedin.com/in/lyla-roberts-124bb4260/';\n  linkedlink.textContent = 'Lyla Roberts - LinkedIn';\n  linkedlink.classList.add('linkedlink');\n  footer.appendChild(linkedlink);\n\n  /**End of footer content */\n\n  /**Append image container to 'mainbox' */\n\n  boximg = document.createElement('img');\n  boximg.src = _assets_pngtree_abstract_blurred_gradient_background_in_bright_rainbow_colors_colorful_rainbow_gradient_image_15684346_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  boximg.alt = 'Black and white background image.';\n  boximg.classList.add('boximg');\n  mainbox.appendChild(boximg);\n\n  /**End of image container appending */\n\n  /**Element creation for contentbox, navbar(buttons and dropdown), and pagetitle*/\n\n  contentbox = document.createElement('div');\n  contentbox.classList.add('contentbox');\n  mainbox.appendChild(contentbox);\n  navbar = document.createElement('div');\n  navbar.classList.add('navbar');\n  mainbox.appendChild(navbar);\n  pagetitle = document.createElement('h1');\n  pagetitle.textContent = 'Painters Anonymous';\n  pagetitle.classList.add('title');\n  mainbox.appendChild(pagetitle);\n\n  /**End of Element creation. */\n\n  /**Profile creation logic */\n\n  profilebox = document.createElement('div');\n  profilebox.classList.add('profile');\n  mainbox.appendChild(profilebox);\n\n  /**End Of profile creation logic. */\n\n  /**Nav Button Arrays, line 79 is the directory buttons, while\n   * line 80 is for each drop down button.*/\n\n  var navBtns = ['Home', 'Store', 'About', 'Contact'];\n  var dropdownData = {\n    Home: ['News', 'Highlights', 'Events'],\n    Store: ['Abstract', 'Realism', 'Romanticism'],\n    About: ['History', 'Famous Artists', 'Museums'],\n    Contact: ['Contact Us', 'Careers', 'Partners']\n  };\n\n  /**Nav Button array ending. */\n\n  /**Button Logic */\n\n  navBtns.forEach(function (tab, index) {\n    /**Identifiers for each tab from navBtns array. */\n    var btn = document.createElement('button');\n    btn.textContent = tab;\n    btn.classList.add('navbtn');\n    btn.id = \"btn-\".concat(index); /**To give unique ID's to btns: btn-0='Home', btn-1, etc. */\n    navbar.appendChild(btn);\n    var routeMap = {\n      Home: '/home',\n      Store: '/store',\n      About: '/about',\n      Contact: '/contact'\n    };\n    btn.addEventListener('click', function () {\n      var route = routeMap[tab];\n      if (route) {\n        window.location.href = route; // ⬅️ Redirects to EJS route\n      }\n    });\n    var dropbox = document.createElement('div'); /**For the dropdowns */\n    dropbox.classList.add('dropbox');\n    var buttonNames = dropdownData[tab] || []; /**Iterates through array. With fallback if no data is present. */\n    buttonNames.forEach(function (name) {\n      /**As it iterates through the array, it will apply the following to each. */\n      var dropbtn = document.createElement('button'); /**For each array item, create a button. */\n      dropbtn.textContent = name; /**Then give it some text/labels. */\n      dropbtn.classList.add('dropbtns'); /**Add class. */\n      dropbox.appendChild(dropbtn);\n    });\n    btn.appendChild(dropbox);\n\n    /**End button logic */\n\n    /**Event listeners */\n\n    btn.addEventListener('mouseenter', function () {\n      btn.style.borderRadius = '10px 10px 0 0';\n      dropbox.classList.add('show'); /**Helpful for animations! */\n    });\n    btn.addEventListener('mouseleave', function () {\n      dropbox.classList.remove('show');\n      btn.style.borderRadius = '10px';\n    });\n    dropbox.addEventListener('mouseleave', function () {\n      dropbox.classList.remove('show');\n    });\n  });\n});\n\n/**End all button logic for navbar! */\n\n/**EXPORTS */\n\nfunction setupMainLayout() {\n  var mainbox = document.getElementById('mainbox');\n  if (!mainbox) return null;\n  return {\n    mainbox: mainbox,\n    contentbox: contentbox,\n    boximg: boximg,\n    navbar: navbar,\n    pagetitle: pagetitle,\n    profilebox: profilebox\n  };\n}\n\n//# sourceURL=webpack://dynamic-website/./src/main.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dynamic-website/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;