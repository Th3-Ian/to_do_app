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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".body-container {\\n  display: grid;\\n  grid-template-columns: 1fr 5fr;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\nh2 {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.list-nav {\\n  padding-top: 40px;\\n  margin: 0 auto;\\n  padding-bottom: 0;\\n  max-width: 800px;\\n}\\n\\n.list-nav ul {\\n  text-align: center;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n  position: relative;\\n}\\n\\n.list-nav ul::before {\\n  z-index: 1;\\n}\\n\\n.list-nav ul::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 100%;\\n  bottom: 0;\\n  left: 0;\\n  border-bottom: 1px solid black;\\n  z-index: 1;\\n}\\n\\n.list-nav a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.list-nav li {\\n  position: relative;\\n  z-index: 0;\\n  margin: 0;\\n  padding: 0 10px;\\n  display: inline-block;\\n  border-bottom: 20px solid #555;\\n  border-left: 10px solid transparent;\\n  border-right: 10px solid transparent;\\n  height: 0;\\n  width: 60px;\\n}\\n\\n.list-nav li.selected {\\n  border-bottom: 20px solid blanchedalmond;\\n  z-index: 2;\\n}\\n\\n.list-nav li.selected a {\\n  color: black;\\n}\\n\\n/* MAIN TASK LIST */\\n.main-list-container {\\n  max-width: 800px;\\n  margin: 0 auto;\\n  padding: 0;\\n}\\n\\n.main-list {\\n  border: 1px solid black;\\n  border-top: 0;\\n  background-color: blanchedalmond;\\n  padding: 10px;\\n  margin: 0;\\n  z-index: 1;\\n  list-style: none;\\n}\\n\\n.main-list li {\\n  display: grid;\\n  grid-template-columns: 1fr 3fr 2fr 1fr 1fr 1fr;\\n  border-bottom: 0.5px solid gray;\\n  padding: 5px;\\n}\\n\\n.btn-slide {\\n  color: black;\\n  border: 2px solid #d60286;\\n  border-radius: 0px;\\n  padding: 18px 36px;\\n  display: inline-block;\\n  font-family: \\\"Lucida Console\\\", Monaco, monospace;\\n  font-size: 14px;\\n  letter-spacing: 1px;\\n  cursor: pointer;\\n  box-shadow: inset 0 0 0 0 #d80286;\\n  -webkit-transition: ease-out 0.4s;\\n  -moz-transition: ease-out 0.4s;\\n  transition: ease-out 0.4s;\\n}\\n\\n.slide-down:hover {\\n  color: #fff;\\n  box-shadow: inset 0 100px 0 0 #d80286;\\n}\\n\\n.random-container {\\n  display: flex;\\n  justify-content: center;\\n  max-width: 800px;\\n  padding: 20px;\\n  margin: 0 auto;\\n}\\n\\n.list-btn {\\n  font-size: 100%;\\n  border: 0;\\n  padding: 0;\\n  background: none;\\n  cursor: pointer;\\n}\\n\\n.left-col {\\n  margin-left: 40px;\\n  padding: 0;\\n  border: 2px solid black;\\n  border-radius: 15px;\\n  width: 200px;\\n}\\n\\n.side-list {\\n  border-bottom: 3px solid #777777;\\n  margin-bottom: 0;\\n  padding: 10px 24px;\\n}\\n\\n.side-list:last-child() {\\n  border-bottom: none;\\n}\\n\\n.movies {\\n  background: #fc8787;\\n  border-top-right-radius: 15px;\\n  border-top-left-radius: 15px;\\n}\\n\\n.books {\\n  background: #7480eb;\\n}\\n\\n.shows {\\n  background: #a7f881;\\n  border-bottom-right-radius: 15px;\\n  border-bottom-left-radius: 15px;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: none;\\n  border: 2px solid black;\\n  border-radius: 10px;\\n  z-index: 10;\\n  background-color: white;\\n  width: 500px;\\n  max-width: 80%;\\n}\\n\\n.modal-header {\\n  padding: 10px 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid black;\\n}\\n\\n.modal-header h3 {\\n  font-size: 24px;\\n  font-weight: bold;\\n}\\n\\n.modal-header .close-button {\\n  cursor: pointer;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  font-size: 24px;\\n  font-weight: bold;\\n}\\n\\n.modal form {\\n  padding: 10px 15px;\\n}\\n\\n#overlay {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  pointer-events: none;\\n  background-color: rgba(193, 193, 193, 0.6);\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to_do_app/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to_do_app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to_do_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst leftColumn = () => {\n\tconst column = document.getElementById('left-col');\n\tconst sideList = document.createElement('div');\n\tconst list = document.createElement('ol');\n\tvar listName = document.createElement('h2');\n\n\tsideList.classList.add('side-list');\n\t//create func that loops through and adds movies, books, & shows class to each div\n\tlistName.innerHTML = 'Movies';\n\n\tsideList.appendChild(listName);\n\tsideList.appendChild(list);\n\n\tcolumn.appendChild(sideList);\n\n};\n\nvar btnArray = ['All', 'Movies', 'Books', 'Shows', 'Hobbies']\n\nconst listNav = () => {\n\tconst navBar = document.getElementById('nav');\n\tconst ul = document.createElement('ul');\n\tul.setAttribute('id','nav-ul');\n\n\t(function() {\n\t\tfor(let i = 0; i < btnArray.length; i++) {\n\t\t\tvar li = document.createElement('li');\n\t\t\tli.setAttribute('id',`${btnArray[i]}`);\n\t\t\tli.innerHTML = `${btnArray[i]}`;\n\t\t\tul.appendChild(li);\n\t\t}\n\t})();\n\n\tconsole.log(ul)\n\tnavBar.appendChild(ul);\n}\n\n\n// NEW ITEM Button\nconst newItemBtn = document.getElementById('new-item');\nconst closeBtn = document.getElementById('close-button');\nconst popupForm = document.getElementById('modal');\nconst overlayBG = document.getElementById('overlay');\nnewItemBtn.addEventListener('click', newPopup);\ncloseBtn.addEventListener('click', closeModal);\n\nfunction newPopup() {\n\tpopupForm.style.display = \"block\";\n\toverlayBG.style.display = \"block\";\n}\n\nfunction closeModal() {\n\tpopupForm.style.display = \"none\";\n\toverlayBG.style.display = \"none\";\n}\n\n// ITEM OBJECT CONSTRUCTOR\nvar itemsList = [];\n\nclass Item {\n\tconstructor(title, date, description, priority, list){\n\t\tthis.title = title\n\t\tthis.date = date\n\t\tthis.description = description\n\t\tthis.priority = priority\n\t\tthis.list = list\n\t\tthis.addList();\n\t}\n\taddList() {\n\t\t//this.addedMessage();\n\t\titemsList.push(this);\n\t\tUI.addToList(this);\n\t}\n\tsaveList() {\n\t\tlocalStorage.setItem('MyLists', JSON.stringify(itemsList));\n\t}\n};\n\nvar form = document.querySelector('form');\nform.onsubmit = function(e){\n\te.preventDefault();\n\tvar title = document.getElementById('title').value\n\tvar date = document.getElementById('due-date').value\n\tvar description = document.getElementById('description').value\n\tvar priority = document.querySelector('input[name=\"priority\"]:checked').value\n\tvar list = document.querySelector('input[name=\"list-type\"]:checked').value\n\n\tlet newItem = new Item(title, date, description, priority, list);\n\t//document.querySelector('form').reset();\n\tcloseModal();\n\tform.reset();\n}\n\nfunction displayList() {\n\titemsList.forEach(item => console.log(item));\n}\n\n// OBJECT DISPLAY\n\nclass UI {\n\tstatic displayItems() {\n\t\tconst StoredItems = [\n\t\t\t{\n\t\t\t\ttitle: 'The Travels',\n\t\t\t\tdescription: 'Details the adventures of Marco Polo',\n\t\t\t\tpriority: 'none',\n\t\t\t\tlist: 'Books',\n\t\t\t\tdate: '01/13/22',\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'The River of Doubt',\n\t\t\t\tdescription: 'Details Theodore Roosevelts darkest journey by Candice Millard',\n\t\t\t\tpriority: 'Low',\n\t\t\t\tlist: 'Books',\n\t\t\t\tdate: '01/13/22'\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Fire Force',\n\t\t\t\tdescription: 'Fire fighting anime show',\n\t\t\t\tpriority: 'Low',\n\t\t\t\tlist: 'Shows',\n\t\t\t\tdate: '01/13/22',\n\t\t\t}\n\t\t]\n\n\n\t\tconst items = StoredItems;\n\n\t\titems.forEach((item) => itemsList.push(item));\n\t\titems.forEach((item) => UI.addToList(item));\n\t\tconsole.log(itemsList);\n\t}\n\n\tstatic addToList(item) {\n\t\tconst mainList = document.querySelector('.main-list');\n\t\tconst li = document.createElement('li');\n\t\tli.setAttribute('class','main-list-item');\n\t\tconst itemBtnComplete = document.createElement('button');\n\t\titemBtnComplete.classList.add('complete', 'list-btn');\n\t\titemBtnComplete.setAttribute('id', 'complete');\n\t\titemBtnComplete.innerHTML = 'O';\n\n\t\tconst itemBtnUpdate = document.createElement('button');\n\t\titemBtnUpdate.classList.add('update', 'list-btn');\n\t\titemBtnUpdate.setAttribute('id', 'update');\n\t\titemBtnUpdate.innerHTML = '•••';\n\n\n\t\tli.innerHTML =`\n\t\t\t<button id=\"complete-btn\" class=\"complete list-btn\">O</button>\n\t\t\t<span id='item-title'>${item.title}</span>\n\t\t\t<span>${item.priority}</span>\n\t\t\t<span>${item.list}</span>\n\t\t\t<span>${item.date}</span>\n\t\t\t<button id=\"update-btn\" class=\"update list-btn\">•••</button>`\n\t\t;\n\t\t//li.appendChild(itemBtnComplete);\n\t\tmainList.appendChild(li);\n\t}\n\n\tstatic completeItem(element) {\n\t\tif(element.classList.contains('complete')) {\n\t\t\tlet row = element.parentElement\n\t\t\tlet obj = row.querySelector('#item-title').textContent;\n\t\t\titemsList.forEach(function (arrayObj, ind) {\n\t\t\t\tif(arrayObj.title === obj){\n\t\t\t\t\titemsList.splice(ind);\n\t\t\t\t}\n\t\t\t})\n\t\t\trow.remove();\n\t\t}\n\t}\n\n\tstatic clearList(){\n\t\tconst mainList = document.querySelector('.main-list');\n\t\tmainList.querySelectorAll('.main-list-item').forEach((elem) => elem.remove());;\n\t}\n\n\t//this is the filter function for tab switching.\n\tstatic changeList(subList){\n\t\tUI.clearList()\n\t\tsubList.forEach((item) => UI.addToList(item));\n\n\t}\n\n\tstatic addSublists(obj){\n\t\tconsole.log(obj)\n\t\tif(obj === 'All'){\n\t\t\tUI.clearList()\n\t\t\titemsList.forEach((item) => UI.addToList(item));\n\t\t} else {\n\t\t\tvar subList = itemsList.filter((item) => UI.capitalize(item.list) === obj);\n\t\t\tUI.changeList(subList);\n\t\t}\n\t}\n\n\tstatic capitalize(string) {\n\t\treturn string.charAt(0).toUpperCase() + string.slice(1);\n\t}\n}\ndocument.addEventListener('DOMContentLoaded', UI.displayItems);\n\n\nleftColumn();\nlistNav();\n\ndocument.querySelector('#main-list').addEventListener('click', (e) => {\n\tUI.completeItem(e.target);\n})\n\nconst randomBtn = document.getElementById('rndm-btn');\nrandomBtn.addEventListener('click', UI.clearList);\n\ndocument.querySelector('#nav').addEventListener('click', (e) => {\n\t//this will call the change tab function\n\tUI.addSublists(e.target.id);\n})\n\n//# sourceURL=webpack://to_do_app/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;