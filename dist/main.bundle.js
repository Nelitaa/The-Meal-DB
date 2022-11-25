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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 2% 0 2%;\\n  background-color: #13303e;\\n  height: 10vh;\\n}\\n\\nh1 {\\n  color: #ffd857;\\n  font-size: xx-large;\\n}\\n\\n.hamburger {\\n  width: 30px;\\n  height: 30px;\\n  border: #fff solid 1px;\\n  border-radius: 10%;\\n  background-color: #13303e;\\n  cursor: pointer;\\n}\\n\\n.hamburger.disabled {\\n  display: none;\\n}\\n\\n.hamburger span {\\n  display: flex;\\n  height: 2px;\\n  background-color: #fff;\\n  border-radius: 1px;\\n  margin: 5px;\\n}\\n\\n.nav-list-desktop {\\n  display: none;\\n}\\n\\n.mobile-menu {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  left: 100%;\\n  top: 0;\\n  background-color: #13303e;\\n  height: 100vh;\\n  width: 100%;\\n  position: fixed;\\n}\\n\\n.mobile-menu.active {\\n  left: 0;\\n}\\n\\n.container-x {\\n  display: flex;\\n  flex-direction: row;\\n  align-self: end;\\n  color: #ffd857;\\n  font-size: xx-large;\\n  padding: 5%;\\n  cursor: pointer;\\n}\\n\\n.container-x.disabled {\\n  display: none;\\n}\\n\\n.nav-list-mobile {\\n  list-style: none;\\n  padding-top: 30%;\\n}\\n\\n.nav-list-mobile li {\\n  margin-bottom: 30%;\\n  text-align: center;\\n}\\n\\n.nav-list-mobile li a {\\n  text-decoration: none;\\n  font-size: xx-large;\\n  color: #fff;\\n}\\n\\n.nav-list-mobile li a:focus {\\n  color: #ffd857;\\n}\\n\\n.nav-list-mobile li a:hover {\\n  color: #ffd857;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 5% 0 5% 5%;\\n  margin-right: 5%;\\n}\\n\\n.meal {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n\\n.container-name-likes {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: 5%;\\n}\\n\\n.meal-name {\\n  color: #13303e;\\n  margin-top: 0;\\n}\\n\\n.container-likes {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 2%;\\n}\\n\\n.like-icon {\\n  align-self: center;\\n  width: 30px;\\n  cursor: pointer;\\n}\\n\\n.reservations,\\n.comments {\\n  margin-bottom: 7%;\\n  background-color: #13303e;\\n  color: #ffd857;\\n  width: 80%;\\n  align-self: center;\\n  border: #13303e 1px solid;\\n  padding: 2% 0 2% 0;\\n  cursor: pointer;\\n}\\n\\n.reservations {\\n  width: 100%;\\n}\\n\\n.reservations:focus,\\n.comments:focus {\\n  background-color: #ffd857;\\n  color: #13303e;\\n  border: #ffd857 1px solid;\\n}\\n\\n.reservations:hover,\\n.comments:hover {\\n  background-color: #ffd857;\\n  color: #13303e;\\n  border: #13303e 1px solid;\\n}\\n\\n.like-button {\\n  background-color: #fff;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  .hamburger {\\n    display: none;\\n  }\\n\\n  .nav-list-desktop {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 30%;\\n  }\\n\\n  .nav-list-desktop li {\\n    list-style: none;\\n  }\\n\\n  .nav-list-desktop li a {\\n    text-decoration: none;\\n    color: #fff;\\n    cursor: pointer;\\n  }\\n\\n  .nav-list-desktop li a:hover {\\n    color: #ffd857;\\n  }\\n\\n  .nav-list-desktop li a:focus {\\n    color: #ffd857;\\n  }\\n\\n  main {\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    column-gap: 5%;\\n    margin-right: 0;\\n  }\\n\\n  .meal {\\n    width: 28%;\\n    height: 28%;\\n  }\\n\\n  .likes {\\n    margin-top: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_api_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api_class.js */ \"./src/modules/api_class.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_api_likes_class_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api_likes_class.js */ \"./src/modules/api_likes_class.js\");\n/* harmony import */ var _modules_meals_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/meals_counter.js */ \"./src/modules/meals_counter.js\");\n\n\n\n\n\n\nconst HAMBURGER = document.querySelector('.hamburger');\nconst MOBILE_MENU = document.querySelector('.mobile-menu');\nconst X_BUTTON = document.querySelector('.container-x');\n\nHAMBURGER.addEventListener('click', () => {\n  HAMBURGER.classList.toggle('disabled');\n  MOBILE_MENU.classList.toggle('active');\n  X_BUTTON.classList.toggle('active');\n});\n\nX_BUTTON.addEventListener('click', () => {\n  MOBILE_MENU.classList.toggle('active');\n  HAMBURGER.classList.toggle('disabled');\n});\n\nwindow.addEventListener('load', async () => {\n  const LIKES = await _modules_api_likes_class_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getLikes();\n  const MEALS = await _modules_api_class_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllMeals();\n  const newMeals = MEALS.map((meal) => {\n    const likesArr = LIKES.filter((like) => like.item_id === meal.id);\n    meal.changeLikes = likesArr.length && likesArr[0].likes;\n    return meal;\n  });\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newMeals);\n  const mealCounter = document.querySelectorAll('.meal-counter');\n  let counter = 1;\n\n  mealCounter.forEach((meal) => {\n    meal.innerHTML = `Meal ${counter}`;\n    counter += 1;\n  });\n  (0,_modules_meals_counter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  document.addEventListener('click', (event) => {\n    if (event.target.classList.contains('like-icon')) {\n      if (event.target.src.includes('heart-line')) {\n        event.target.src = './assets/img/heart-fill.png';\n        _modules_api_likes_class_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].postLikes(event.target.id);\n        newMeals.forEach((meal) => {\n          if (meal.id === event.target.id) {\n            const counterLikes = event.target.nextElementSibling;\n            counterLikes.innerHTML = `${meal.likes + 1} likes`;\n          }\n        });\n      } else {\n        event.target.src = './assets/img/heart-line.png';\n        newMeals.forEach((meal) => {\n          if (meal.id === event.target.id) {\n            const counterLikes = event.target.nextElementSibling;\n            counterLikes.innerHTML = `${meal.likes} likes`;\n          }\n        });\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/index.js?");

/***/ }),

/***/ "./src/modules/api_class.js":
/*!**********************************!*\
  !*** ./src/modules/api_class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Api)\n/* harmony export */ });\n/* harmony import */ var _meal_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal_class.js */ \"./src/modules/meal_class.js\");\n\n\nclass Api {\n  static URL = 'https://themealdb.com/api';\n\n  static async getMeals() {\n    const RESPONSE = await fetch(`${Api.URL}/json/v1/1/search.php?s=`);\n    const { meals } = await RESPONSE.json();\n    return meals;\n  }\n\n  static async getAllMeals() {\n    const arrObj = await this.getMeals();\n    const arrMeals = arrObj.map((meal) => new _meal_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](meal.idMeal, meal.strMeal, meal.strMealThumb));\n    return arrMeals;\n  }\n}\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/modules/api_class.js?");

/***/ }),

/***/ "./src/modules/api_likes_class.js":
/*!****************************************!*\
  !*** ./src/modules/api_likes_class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiLikes)\n/* harmony export */ });\nclass ApiLikes {\n  static URL_LIKES = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T5dHsAwcNl52Ef11hAYl/likes/';\n\n  static async getLikes() {\n    const response = await fetch(ApiLikes.URL_LIKES);\n    const data = await response.json();\n    return data;\n  }\n\n  static async postLikes(id) {\n    const response = await fetch(ApiLikes.URL_LIKES, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await response.json();\n    return data;\n  }\n}\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/modules/api_likes_class.js?");

/***/ }),

/***/ "./src/modules/meal_class.js":
/*!***********************************!*\
  !*** ./src/modules/meal_class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Meal)\n/* harmony export */ });\nclass Meal {\n  constructor(id = null, name, image, likes = 0) {\n    this.id = id;\n    this.name = name;\n    this.image = image;\n    this.likes = likes;\n  }\n\n  set changeLikes(value) {\n    this.likes = value;\n  }\n}\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/modules/meal_class.js?");

/***/ }),

/***/ "./src/modules/meals_counter.js":
/*!**************************************!*\
  !*** ./src/modules/meals_counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealsCounter = () => {\n  const mealCounter = document.querySelectorAll('.meal-counter');\n  const totalMeals = document.querySelector('.total-meals');\n\n  if (mealCounter.length < 1) {\n    totalMeals.innerHTML = ` (${0})`;\n    return 0;\n  }\n  totalMeals.innerHTML = ` (${mealCounter.length})`;\n  return (mealCounter.length);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealsCounter);\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/modules/meals_counter.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<<<< Temporary merge branch 1
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ALL_MEALS = document.querySelector('#all-meals');\n\nconst RENDER = (meals, alls) => {\n  meals.forEach((meal) => {\n    const MEAL = document.createElement('div');\n    MEAL.className = 'meal';\n    ALL_MEALS.appendChild(MEAL);\n\n    const MEAL_IMAGE = document.createElement('img');\n    MEAL_IMAGE.className = 'meal-image';\n    MEAL_IMAGE.src = meal.image;\n    MEAL_IMAGE.alt = meal.name;\n    MEAL.appendChild(MEAL_IMAGE);\n\n    const CONTAINER_NAME_LIKES = document.createElement('div');\n    CONTAINER_NAME_LIKES.className = 'container-name-likes';\n    MEAL.appendChild(CONTAINER_NAME_LIKES);\n\n    const MEAL_NAME = document.createElement('h2');\n    MEAL_NAME.className = 'meal-name';\n    MEAL_NAME.innerHTML = meal.name;\n    CONTAINER_NAME_LIKES.appendChild(MEAL_NAME);\n\n    const CONTAINER_LIKES = document.createElement('div');\n    CONTAINER_LIKES.className = 'container-likes';\n    CONTAINER_NAME_LIKES.appendChild(CONTAINER_LIKES);\n\n    const LIKE_IMG = document.createElement('img');\n    LIKE_IMG.className = 'like-icon';\n    LIKE_IMG.setAttribute('id', meal.id);\n    LIKE_IMG.src = './assets/img/heart-line.png';\n    LIKE_IMG.alt = 'like icon';\n    CONTAINER_LIKES.appendChild(LIKE_IMG);\n\n    const LIKES = document.createElement('p');\n    LIKES.className = 'likes';\n    LIKES.innerHTML = `${meal.likes} likes`;\n    CONTAINER_LIKES.appendChild(LIKES);\n\n    const COMMENTS = document.createElement('button');\n    COMMENTS.className = 'comments';\n    COMMENTS.innerHTML = 'Comments';\n    COMMENTS.addEventListener('click', (e) => {\n      const a = e.target.name;\n      const res = alls.filter((item) => item.idMeal === a);\n      const parmodal = document.querySelector('.parmodal');\n      parmodal.style.display = 'grid';\n      parmodal.innerHTML = `\n      <div class=\"parmodal__modal\">\n        <div class=\"front\"><button id=\"close\" class=\"close\">&times;</button></div>\n        <div class=\"parmodal__modal__details\">\n          <div class=\"parmodal__modal__details__detail\">\n           <div class=\"parmodal__modal__details__detail__responsive\">\n            <img src=\"${res[0].strMealThumb}\" alt=\"\" class=\"responsive parmodal__modal__details__detail__responsive__respo\">\n           </div>\n            <h3>Add comment</h3>\n            <form action=\"\">\n              <div class=\"formcontrol\">\n                <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name\" />\n              </div>\n              <div class=\"formcontrol\">\n                <textarea\n                  name=\"textarea\"\n                  id=\"textarea\"\n                  cols=\"30\"\n                  rows=\"10\"\n                ></textarea>\n              </div>\n              <div class=\"formcontrol\">\n                <input type=\"submit\" value=\"comment\" />\n              </div>\n            </form>\n          </div>\n          <div class=\"parmodal__modal__details__detail\">\n            <span>${res[0].strMeal}</span>\n            <p>\n            ${res[0].strInstructions}\n            strInstructions\n            </p>\n            <h3>comments <span>14</span></h3>\n            <ul>\n              <li>1</li>\n              <li>2</li>\n              <li>3</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    `;\n      const close = document.querySelector('#close');\n      close.addEventListener('click', () => {\n        parmodal.style.display = 'none';\n      });\n    });\n    MEAL.appendChild(COMMENTS);\n\n    const RESERVATIONS = document.createElement('button');\n    RESERVATIONS.className = 'reservations';\n    RESERVATIONS.innerHTML = 'Reservations';\n    MEAL.appendChild(RESERVATIONS);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RENDER);\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/modules/render.js?");
=========
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ALL_MEALS = document.querySelector('#all-meals');\n\nconst RENDER = (meals) => {\n  meals.forEach((meal) => {\n    const MEAL = document.createElement('div');\n    MEAL.className = 'meal';\n    ALL_MEALS.appendChild(MEAL);\n\n    const MEAL_IMAGE = document.createElement('img');\n    MEAL_IMAGE.className = 'meal-image';\n    MEAL_IMAGE.src = meal.image;\n    MEAL_IMAGE.alt = meal.name;\n    MEAL.appendChild(MEAL_IMAGE);\n\n    const CONTAINER_NAME_LIKES = document.createElement('div');\n    CONTAINER_NAME_LIKES.className = 'container-name-likes';\n    MEAL.appendChild(CONTAINER_NAME_LIKES);\n\n    const MEAL_NAME = document.createElement('h2');\n    MEAL_NAME.className = 'meal-name';\n    MEAL_NAME.innerHTML = `${meal.name} <span class=\"meal-counter\"></span>`;\n    CONTAINER_NAME_LIKES.appendChild(MEAL_NAME);\n\n    const CONTAINER_LIKES = document.createElement('div');\n    CONTAINER_LIKES.className = 'container-likes';\n    CONTAINER_NAME_LIKES.appendChild(CONTAINER_LIKES);\n\n    const LIKE_IMG = document.createElement('img');\n    LIKE_IMG.className = 'like-icon';\n    LIKE_IMG.setAttribute('id', meal.id);\n    LIKE_IMG.src = './assets/img/heart-line.png';\n    LIKE_IMG.alt = 'like icon';\n    CONTAINER_LIKES.appendChild(LIKE_IMG);\n\n    const LIKES = document.createElement('p');\n    LIKES.className = 'likes';\n    LIKES.innerHTML = `${meal.likes} likes`;\n    CONTAINER_LIKES.appendChild(LIKES);\n\n    const COMMENTS = document.createElement('button');\n    COMMENTS.className = 'comments';\n    COMMENTS.innerHTML = 'Comments';\n    MEAL.appendChild(COMMENTS);\n\n    const RESERVATIONS = document.createElement('button');\n    RESERVATIONS.className = 'reservations';\n    RESERVATIONS.innerHTML = 'Reservations';\n    MEAL.appendChild(RESERVATIONS);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RENDER);\n\n//# sourceURL=webpack://Capstone-Project-JavaScript/./src/modules/render.js?");
>>>>>>>>> Temporary merge branch 2

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;