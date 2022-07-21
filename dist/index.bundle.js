"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    padding: 0;\n    margin: 0;\n}\n\nimg {\n    width: 24px;\n    height: 24px;\n}\n\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 5vh 1fr 4vh;\n    grid-template-columns: 310px 5fr;\n    grid-template-areas: \n    \"header header\"\n    \"sidebar main-content\"\n    \"footer footer\";\n}\n\n.header {\n    grid-area: header;\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    font-weight: bold;\n    background-color: #112D4E;\n    color: white;\n    padding: 0 48px 0 48px;\n    align-items: center;\n}\n\n.header-logo-container {\n    display: flex;\n    align-items: center;\n}\n\n.header img,\n.sidebar img {\n    filter: invert(99%) sepia(3%) saturate(89%) hue-rotate(197deg) brightness(111%) contrast(100%);\n}\n\n.header-logo-name {\n    font-size: 16px;\n    margin-left: 10px; \n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.sidebar {\n    background-color: #3F72AF;\n    color: white;\n    padding: 20px 30px 20px 30px;\n    grid-area: sidebar;\n    display: flex;\n    flex-direction: column;\n}\n\n.inbox-container,\n.today-container,\n.project-sub-container,\n.add-project-container  {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.add-project-container {\n    margin: 10px 0 10px 0;\n}\n\n.inbox-name,\n.today-name,\n.project-name,\n.add-project-name {\n    justify-self: start;\n    font-size: 14px;\n    margin-left: 10px;\n}\n\n.project-delete-button {\n    margin-left: auto;\n    opacity: 0.8;\n}\n\n.project-delete-button:hover {\n    opacity: 1;\n}\n\n.main-content {\n    background-color: #F9F7F7;\n    grid-area: main-content;\n    display: flex;\n    padding: 48px;\n}\n\n.main-content h1 {\n    margin-top: 0;\n}\n\n.todo-container {\n    width: 800px;\n}\n\n.single-todo-sub-container,\n.add-todo-container {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.single-todo-content {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.add-todo-container {\n    margin: 10px 0 0 0;\n}\n\n.single-todo-name,\n.add-todo-name {\n    justify-self: start;\n    font-size: 14px;\n    margin-left: 10px;\n}\n\n.single-todo-delete-button {\n    opacity: 0.8;\n    margin-left: 10px;\n}\n\n.single-todo-delete-button:hover {\n    opacity: 1;\n}\n\n.inbox-container:hover,\n.today-container:hover,\n.project-sub-container:hover,\n.add-project-container:hover,\n.add-todo-container:hover {\n    border-radius: 4px;\n    background-color: darkgray;\n}\n\n.inbox-name:hover,\n.today-name:hover,\n.project-name:hover,\n.project-delete-button:hover, \n.add-project-container:hover,\n.add-todo-container:hover {\n    cursor: pointer;\n}\n\n\n.single-todo-sub-container:hover {\n    border-radius: 4px;\n    background-color: darkgray;\n}\n\n.single-todo-logo:hover,\n.single-todo-name:hover,\n.single-todo-project:hover,\n.single-todo-duedate:hover,\n.single-todo-delete-button:hover {\n    cursor: pointer;\n}\n\n/* Pop Up Form Reference: https://www.w3schools.com/howto/howto_js_popup_form.asp */\n.form-project-popup,\n.form-todo-popup,\n.form-single-todo-popup {\n    display: none;\n    border: 4px solid #F9F7F7;\n    border-radius: 4px;\n}\n\n.form-project-container {\n    padding: 10px;\n    background-color: #F9F7F7;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n    \"input input\"\n    \"add cancel\";\n    border-radius: 4px;\n}\n\n#project-name {\n    padding: 16px;\n    margin-bottom: 10px;\n    border: none;\n    background: #DBE2EF;\n    border-radius: 4px;\n    grid-area: input;\n    opacity: 0.8;\n}\n\n#project-name:focus {\n    opacity: 1;\n    outline: none;\n}\n\n.form-project-container .btn,\n.form-project-container .btn-cancel {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    border-radius: 4px;\n}\n\n.form-project-container .btn {\n    grid-area: add;\n    margin-right: 5px;\n}\n\n.form-project-container .btn-cancel {\n    background-color: red;\n    grid-area: cancel;\n    margin-left: 5px;\n}\n\n.form-project-container button:hover {\n    opacity: 1;\n}\n\n.form-todo-container{\n    padding: 10px;\n    background-color: #F9F7F7;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n    \"name name\"\n    \"duedate duedate\"\n    \"projects projects\"\n    \"todoAdd todoCancel\";\n}\n\n#todo-name,\n#todo-project,\n#todo-duedate,\n.form-single-todo-name,\n.form-single-todo-project,\n.form-single-todo-duedate {\n    padding: 16px;\n    margin-bottom: 10px;\n    border: none;\n    background: #DBE2EF;\n    border-radius: 4px;\n    opacity: 0.8;\n}\n\n#todo-name:focus,\n#todo-project:focus,\n#todo-duedate:focus,\n.form-single-todo-name:focus,\n.form-single-todo-project:focus,\n.form-single-todo-duedate:focus {\n    opacity: 1;\n    outline: none;\n}\n\n#todo-name {\n    grid-area: name;\n}\n\n#todo-duedate {\n    grid-area: duedate;\n}\n\n#todo-project {\n    grid-area: projects;\n}\n\n.form-todo-container .btn,\n.form-todo-container .btn-cancel {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    border-radius: 4px;\n}\n\n.form-todo-container .btn {\n    grid-area: todoAdd;\n    margin-right: 5px;\n}\n\n.form-todo-container .btn-cancel {\n    background-color: red;\n    grid-area: todoCancel;\n    margin-left: 5px;\n}\n\n.form-todo-container button:hover {\n    opacity: 1;\n}\n\n.form-single-todo-name,\n.form-single-todo-project,\n.form-single-todo-duedate {\n    margin-bottom: 0;\n}\n\n.form-single-todo-name {\n    margin-left: 10px;\n}\n\n.footer {\n    background-color: #DBE2EF;\n    grid-area: footer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    padding: 0;\n    margin: 0;\n}\n\nimg {\n    width: 24px;\n    height: 24px;\n}\n\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 5vh 1fr 4vh;\n    grid-template-columns: 310px 5fr;\n    grid-template-areas: \n    \"header header\"\n    \"sidebar main-content\"\n    \"footer footer\";\n}\n\n.header {\n    grid-area: header;\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    font-weight: bold;\n    background-color: #112D4E;\n    color: white;\n    padding: 0 48px 0 48px;\n    align-items: center;\n}\n\n.header-logo-container {\n    display: flex;\n    align-items: center;\n}\n\n.header img,\n.sidebar img {\n    filter: invert(99%) sepia(3%) saturate(89%) hue-rotate(197deg) brightness(111%) contrast(100%);\n}\n\n.header-logo-name {\n    font-size: 16px;\n    margin-left: 10px; \n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.sidebar {\n    background-color: #3F72AF;\n    color: white;\n    padding: 20px 30px 20px 30px;\n    grid-area: sidebar;\n    display: flex;\n    flex-direction: column;\n}\n\n.inbox-container,\n.today-container,\n.project-sub-container,\n.add-project-container  {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.add-project-container {\n    margin: 10px 0 10px 0;\n}\n\n.inbox-name,\n.today-name,\n.project-name,\n.add-project-name {\n    justify-self: start;\n    font-size: 14px;\n    margin-left: 10px;\n}\n\n.project-delete-button {\n    margin-left: auto;\n    opacity: 0.8;\n}\n\n.project-delete-button:hover {\n    opacity: 1;\n}\n\n.main-content {\n    background-color: #F9F7F7;\n    grid-area: main-content;\n    display: flex;\n    padding: 48px;\n}\n\n.main-content h1 {\n    margin-top: 0;\n}\n\n.todo-container {\n    width: 800px;\n}\n\n.single-todo-sub-container,\n.add-todo-container {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.single-todo-content {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.add-todo-container {\n    margin: 10px 0 0 0;\n}\n\n.single-todo-name,\n.add-todo-name {\n    justify-self: start;\n    font-size: 14px;\n    margin-left: 10px;\n}\n\n.single-todo-delete-button {\n    opacity: 0.8;\n    margin-left: 10px;\n}\n\n.single-todo-delete-button:hover {\n    opacity: 1;\n}\n\n.inbox-container:hover,\n.today-container:hover,\n.project-sub-container:hover,\n.add-project-container:hover,\n.add-todo-container:hover {\n    border-radius: 4px;\n    background-color: darkgray;\n}\n\n.inbox-name:hover,\n.today-name:hover,\n.project-name:hover,\n.project-delete-button:hover, \n.add-project-container:hover,\n.add-todo-container:hover {\n    cursor: pointer;\n}\n\n\n.single-todo-sub-container:hover {\n    border-radius: 4px;\n    background-color: darkgray;\n}\n\n.single-todo-logo:hover,\n.single-todo-name:hover,\n.single-todo-project:hover,\n.single-todo-duedate:hover,\n.single-todo-delete-button:hover {\n    cursor: pointer;\n}\n\n/* Pop Up Form Reference: https://www.w3schools.com/howto/howto_js_popup_form.asp */\n.form-project-popup,\n.form-todo-popup,\n.form-single-todo-popup {\n    display: none;\n    border: 4px solid #F9F7F7;\n    border-radius: 4px;\n}\n\n.form-project-container {\n    padding: 10px;\n    background-color: #F9F7F7;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n    \"input input\"\n    \"add cancel\";\n    border-radius: 4px;\n}\n\n#project-name {\n    padding: 16px;\n    margin-bottom: 10px;\n    border: none;\n    background: #DBE2EF;\n    border-radius: 4px;\n    grid-area: input;\n    opacity: 0.8;\n}\n\n#project-name:focus {\n    opacity: 1;\n    outline: none;\n}\n\n.form-project-container .btn,\n.form-project-container .btn-cancel {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    border-radius: 4px;\n}\n\n.form-project-container .btn {\n    grid-area: add;\n    margin-right: 5px;\n}\n\n.form-project-container .btn-cancel {\n    background-color: red;\n    grid-area: cancel;\n    margin-left: 5px;\n}\n\n.form-project-container button:hover {\n    opacity: 1;\n}\n\n.form-todo-container{\n    padding: 10px;\n    background-color: #F9F7F7;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n    \"name name\"\n    \"duedate duedate\"\n    \"projects projects\"\n    \"todoAdd todoCancel\";\n}\n\n#todo-name,\n#todo-project,\n#todo-duedate,\n.form-single-todo-name,\n.form-single-todo-project,\n.form-single-todo-duedate {\n    padding: 16px;\n    margin-bottom: 10px;\n    border: none;\n    background: #DBE2EF;\n    border-radius: 4px;\n    opacity: 0.8;\n}\n\n#todo-name:focus,\n#todo-project:focus,\n#todo-duedate:focus,\n.form-single-todo-name:focus,\n.form-single-todo-project:focus,\n.form-single-todo-duedate:focus {\n    opacity: 1;\n    outline: none;\n}\n\n#todo-name {\n    grid-area: name;\n}\n\n#todo-duedate {\n    grid-area: duedate;\n}\n\n#todo-project {\n    grid-area: projects;\n}\n\n.form-todo-container .btn,\n.form-todo-container .btn-cancel {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    border-radius: 4px;\n}\n\n.form-todo-container .btn {\n    grid-area: todoAdd;\n    margin-right: 5px;\n}\n\n.form-todo-container .btn-cancel {\n    background-color: red;\n    grid-area: todoCancel;\n    margin-left: 5px;\n}\n\n.form-todo-container button:hover {\n    opacity: 1;\n}\n\n.form-single-todo-name,\n.form-single-todo-project,\n.form-single-todo-duedate {\n    margin-bottom: 0;\n}\n\n.form-single-todo-name {\n    margin-left: 10px;\n}\n\n.footer {\n    background-color: #DBE2EF;\n    grid-area: footer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.js */ "./src/page.js");




function todoFinder(listOfProjects, project, id) {
    let todoIdx = 0;
    for (let i = 0; i < listOfProjects[project].length; i++) {
        if (listOfProjects[project][i].getId() === Number(id)) {
            todoIdx = i;
        }
    }
    return todoIdx;
}

function addTodo(listOfProjects, id, title, duedate = '', project = 'Inbox', completeStatus = false) {
    const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id, title, duedate, project, completeStatus);
    listOfProjects[project].push(newTodo);

    return newTodo;
}

function deleteTodo(listOfProjects, project, id) {
    let todoIdx = todoFinder(listOfProjects, project, id);

    let removedTodo = listOfProjects[project].splice(todoIdx, 1);
    return removedTodo;
}

function currentPage() {
    document.body.appendChild((0,_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
}

currentPage();



/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_add_mini_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/add_mini.svg */ "./src/images/add_mini.svg");
/* harmony import */ var _images_done_all_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/done_all.svg */ "./src/images/done_all.svg");
/* harmony import */ var _images_account_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/account_circle.svg */ "./src/images/account_circle.svg");
/* harmony import */ var _images_inbox_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/inbox.svg */ "./src/images/inbox.svg");
/* harmony import */ var _images_list_alt_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/list_alt.svg */ "./src/images/list_alt.svg");
/* harmony import */ var _images_check_box_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/check_box.svg */ "./src/images/check_box.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_today_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/today.svg */ "./src/images/today.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.js */ "./src/index.js");











let todoIds = 0;
let listOfProjects = { "Inbox": [] };
let currentProjectPage = "Inbox";

const container = document.createElement('div');
const header = document.createElement('div');
const headerLogoContainer = document.createElement('div');
const headerLogo = document.createElement('img');
const headerLogoName = document.createElement('div');
const profileContainer = document.createElement('div');
const profilePic = document.createElement('img');

const sidebar = document.createElement('div');
const sidebarMenuMain= document.createElement('div');
const sidebarMenuProjects = document.createElement('div');
const inboxContainer = document.createElement('div');
const inboxLogo = document.createElement('img');
const inboxName = document.createElement('div');
const todayContainer = document.createElement('div');
const todayLogo = document.createElement('img');
const todayName = document.createElement('div');
const sidebarTitle = document.createElement('h3');
const projectContainer = document.createElement('div');
const addProjectContainer = document.createElement('div');
const addProjectLogo = document.createElement('img');
const addProjectName = document.createElement('div');

const mainContent = document.createElement('div');
let mainTitle = document.createElement('h1');
const todoContainer = document.createElement('div');
const singleTodoContainer = document.createElement('div');
const addTodoContainer = document.createElement('div');
const addTodoLogo = document.createElement('img');
const addTodoName = document.createElement('div');

const footer = document.createElement('div');

container.classList.add('container');
header.classList.add('header');
headerLogoContainer.classList.add('header-logo-container');
headerLogo.classList.add('header-logo');
headerLogoName.classList.add('header-logo-name');
profileContainer.classList.add('profile-container');
profilePic.classList.add('profile-pic');

sidebar.classList.add('sidebar');
sidebarMenuMain.classList.add('sidebar-menu-main');
sidebarMenuProjects.classList.add('sidebar-menu-projects');
inboxContainer.classList.add('inbox-container');
inboxContainer.setAttribute('id', 'Inbox');
inboxLogo.classList.add('inbox-logo');
inboxName.classList.add('inbox-name');
todayContainer.classList.add('today-container');
todayContainer.setAttribute('id', 'Today');
todayLogo.classList.add('today-logo');
todayName.classList.add('today-name');
sidebarTitle.classList.add('sidebar-title');
projectContainer.classList.add('project-container');
addProjectContainer.classList.add('add-project-container');
addProjectLogo.classList.add('add-project-logo');
addProjectName.classList.add('add-project-name');

mainContent.classList.add('main-content');
mainTitle.classList.add('main-title');
todoContainer.classList.add('todo-container');
singleTodoContainer.classList.add('single-todo-container');
addTodoContainer.classList.add('add-todo-container');
addTodoLogo.classList.add('add-todo-logo');
addTodoName.classList.add('add-todo-name');

footer.classList.add('footer');

headerLogo.src = _images_done_all_svg__WEBPACK_IMPORTED_MODULE_2__;
headerLogoName.textContent = "Odin Todo List";
profilePic.src = _images_account_circle_svg__WEBPACK_IMPORTED_MODULE_3__;

inboxLogo.src = _images_inbox_svg__WEBPACK_IMPORTED_MODULE_4__;
inboxName.textContent = "Inbox";
todayLogo.src = _images_today_svg__WEBPACK_IMPORTED_MODULE_8__;
todayName.textContent = "Today";
sidebarTitle.textContent = "Projects";
addProjectLogo.src = _images_add_mini_svg__WEBPACK_IMPORTED_MODULE_1__;
addProjectName.textContent = "Add Project";

mainTitle.textContent = currentProjectPage;
addTodoLogo.src = _images_add_mini_svg__WEBPACK_IMPORTED_MODULE_1__;
addTodoName.textContent = "Add Task";

footer.innerHTML = 'By yours truly,&nbsp;<a href="https://github.com/mraffia"> mraffia</a>';

headerLogoContainer.appendChild(headerLogo);
headerLogoContainer.appendChild(headerLogoName);
profileContainer.appendChild(profilePic);
header.appendChild(headerLogoContainer);
header.appendChild(profileContainer);

const formProjectPopUp = document.createElement('div');
const formProjectContainer = document.createElement("form");
const formProjectName = document.createElement("input");
const formProjectSubmit = document.createElement("button");
const formProjectCancel = document.createElement("button");

formProjectPopUp.classList.add('form-project-popup');
formProjectContainer.classList.add('form-project-container');
formProjectSubmit.classList.add('btn');
formProjectCancel.classList.add('btn-cancel');

formProjectPopUp.setAttribute('id', 'projectPopUpForm');
formProjectName.setAttribute('type', 'text');
formProjectName.setAttribute('placeholder', 'Project Name');
formProjectName.setAttribute('name', 'project-name');
formProjectName.setAttribute('id', 'project-name');
formProjectSubmit.setAttribute("type", "submit");
formProjectCancel.setAttribute('type', 'button');

formProjectName.required = true;

formProjectSubmit.textContent = "Add";
formProjectCancel.textContent = "Cancel";

formProjectContainer.appendChild(formProjectName);
formProjectContainer.appendChild(formProjectSubmit);
formProjectContainer.appendChild(formProjectCancel);
formProjectPopUp.appendChild(formProjectContainer);

inboxContainer.appendChild(inboxLogo);
inboxContainer.appendChild(inboxName);
todayContainer.appendChild(todayLogo);
todayContainer.appendChild(todayName);
addProjectContainer.appendChild(addProjectLogo);
addProjectContainer.appendChild(addProjectName);
sidebarMenuMain.appendChild(inboxContainer);
sidebarMenuMain.appendChild(todayContainer);
sidebarMenuProjects.appendChild(sidebarTitle);
sidebarMenuProjects.appendChild(projectContainer);
sidebarMenuProjects.appendChild(addProjectContainer);
sidebarMenuProjects.appendChild(formProjectPopUp);
sidebar.appendChild(sidebarMenuMain);
sidebar.appendChild(sidebarMenuProjects);

const formTodoPopUp = document.createElement('div');
const formTodoContainer = document.createElement("form");
const formTodoName = document.createElement("input");
const formTodoDuedate = document.createElement("input");
const formTodoProject = document.createElement("select");
const formTodoSubmit = document.createElement("button");
const formTodoCancel = document.createElement("button");

formTodoPopUp.classList.add('form-todo-popup');
formTodoContainer.classList.add('form-todo-container');
formTodoSubmit.classList.add('btn');
formTodoCancel.classList.add('btn-cancel');

formTodoPopUp.setAttribute('id', 'todoPopUpForm');
formTodoName.setAttribute('type', 'text');
formTodoName.setAttribute('placeholder', 'Task name');
formTodoName.setAttribute('name', 'todo-name');
formTodoName.setAttribute('id', 'todo-name');
formTodoDuedate.setAttribute('type', 'date');
formTodoDuedate.setAttribute('name', 'todo-duedate');;
formTodoDuedate.setAttribute('id', 'todo-duedate');
formTodoProject.setAttribute('name', 'todo-project');
formTodoProject.setAttribute('id', 'todo-project');
formTodoSubmit.setAttribute("type", "submit");
formTodoCancel.setAttribute('type', 'button');

formTodoName.required = true;

formTodoSubmit.textContent = "Add";
formTodoCancel.textContent = "Cancel";

formTodoContainer.appendChild(formTodoName);
formTodoContainer.appendChild(formTodoDuedate);
formTodoContainer.appendChild(formTodoProject);
formTodoContainer.appendChild(formTodoSubmit);
formTodoContainer.appendChild(formTodoCancel);
formTodoPopUp.appendChild(formTodoContainer);

addTodoContainer.appendChild(addTodoLogo);
addTodoContainer.appendChild(addTodoName);
todoContainer.appendChild(mainTitle);
todoContainer.appendChild(singleTodoContainer);
todoContainer.appendChild(addTodoContainer);
todoContainer.appendChild(formTodoPopUp);
mainContent.appendChild(todoContainer);

container.appendChild(header);
container.appendChild(sidebar);
container.appendChild(mainContent);
container.appendChild(footer);

// MAIN FUNCTION

function generatePage() {
    addProjectContainer.addEventListener('click', function (e) {
        if (formProjectPopUp.style.display === 'block') {
            formProjectPopUp.style.display = 'none';
        } else {
            formProjectPopUp.style.display = 'block';
        }
    });

    formProjectCancel.addEventListener('click', function (e) {
        formProjectContainer.reset()
        formProjectPopUp.style.display = "none";
    });

    formProjectContainer.addEventListener('submit', function (e) {
        e.preventDefault();
        const projectTitle = e.target['project-name'].value;

        if (Object.keys(listOfProjects).length > 6) {
            alert("You can't have more than 5 projects!");
        } else if (projectTitle in listOfProjects) {
            alert("You can't have two or more projects with the same name! (case sensitive)");
        } else {
            listOfProjects[projectTitle] = [];
        }

        generateProjectOptionsTodo();
        generateProjectOptionsSingleTodo();

        formProjectContainer.reset()
        formProjectPopUp.style.display = "none";
        projectContainer.textContent = '';
        displayAllProjects();

        populateStorage();
    });

    addTodoContainer.addEventListener('click', function (e) {
        if (formTodoPopUp.style.display === 'block') {
            formTodoPopUp.style.display = 'none';
        } else {
            formTodoPopUp.style.display = 'block';
        }
    });

    formTodoCancel.addEventListener('click', function (e) {
        formTodoContainer.reset()
        formTodoPopUp.style.display = "none";
    });

    formTodoContainer.addEventListener('submit', function (e) {
        e.preventDefault();
        const todoTitle = e.target['todo-name'].value;
        const todoProject = e.target['todo-project'].value;
        let todoDuedate = e.target['todo-duedate'].value;
        if (todoDuedate === '') {
            todoDuedate = "No date";
        }

        (0,_index_js__WEBPACK_IMPORTED_MODULE_9__.addTodo)(listOfProjects, todoIds, todoTitle, todoDuedate, todoProject);
        todoIds++;

        formTodoContainer.reset()
        formTodoPopUp.style.display = "none";
        singleTodoContainer.textContent = '';
        displayAllTodos(currentProjectPage);

        populateStorage();
    });

    inboxName.addEventListener('click', function(e) {
        const projectTitle = "Inbox";
        currentProjectPage = projectTitle;
        mainTitle.textContent = projectTitle;
        singleTodoContainer.textContent = '';
        displayAllTodos(projectTitle);
    });

    todayName.addEventListener('click', function(e) {
        const projectTitle = "Today";
        currentProjectPage = projectTitle;
        mainTitle.textContent = projectTitle;
        singleTodoContainer.textContent = '';
        displayAllTodosToday(projectTitle);
    });

    if (storageAvailable('localStorage')) {
        if(!localStorage.getItem('listOfProjects')) {
            populateStorage();
            setListOfProjectsAndTodos();
        } else {
            setListOfProjectsAndTodos();
        }
    } else {
        console.log('CAN\'T USE localStorage? BRUH');
    }

    displayAllProjects();
    displayAllTodos(currentProjectPage);
    generateProjectOptionsTodo();
    generateProjectOptionsSingleTodo();

    return container;
}

// PROJECTS RELATED FUNCTIONS

function createProjectDisplay(project) {
    const projectSubContainer = document.createElement('div');
    const projectLogo = document.createElement('img');
    const projectName = document.createElement('div');
    const projectDeleteButton = document.createElement('img');

    projectSubContainer.classList.add('project-sub-container');
    projectLogo.classList.add('project-logo');
    projectName.classList.add('project-name');
    projectDeleteButton.classList.add('project-delete-button');

    projectSubContainer.setAttribute('id', project);

    projectLogo.src = _images_list_alt_svg__WEBPACK_IMPORTED_MODULE_5__;
    projectName.textContent = project;
    projectDeleteButton.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_7__;

    projectDeleteButton.style.display = "none";

    projectSubContainer.addEventListener('mouseover', function (e) {
        projectDeleteButton.style.display = "block";
    });

    projectSubContainer.addEventListener('mouseout', function (e) {
        projectDeleteButton.style.display = "none";
    });

    projectDeleteButton.addEventListener('click', function (e) {
        const projectTitle = e.target.parentElement.id;
        const confirmDelete = confirm("Are you sure you want to delete the project \"" + projectTitle + "\"?");
        if (confirmDelete) {
            delete listOfProjects[projectTitle];

            generateProjectOptionsTodo();
            generateProjectOptionsSingleTodo();
            
            projectContainer.textContent = '';
            displayAllProjects();

            populateStorage();
        }
    });

    projectName.addEventListener('click', function(e) {
        const projectTitle = e.target.parentElement.id;
        currentProjectPage = projectTitle;
        mainTitle.textContent = projectTitle;
        singleTodoContainer.textContent = '';
        displayAllTodos(projectTitle);
    });

    projectSubContainer.appendChild(projectLogo);
    projectSubContainer.appendChild(projectName);
    projectSubContainer.appendChild(projectDeleteButton);

    return projectSubContainer;
}

function displayAllProjects() {
    if (Object.keys(listOfProjects).length > 1) {
        for (const project in listOfProjects) {
            if (project !== "Inbox") {
                projectContainer.appendChild(createProjectDisplay(project));
            }
        }
    }
}

// TODOS RELATED FUNCTIONS

function createTodoDisplay(taskIdx, project) {
    const theTodo = listOfProjects[project][taskIdx];

    const singleTodoSubContainer = document.createElement('div');
    const singleTodoLogo = document.createElement('img');
    const singleTodoContent = document.createElement('div');
    const singleTodoName = document.createElement('div');
    const singleTodoProject = document.createElement('div');
    const singleTodoDuedate = document.createElement('div');
    const singleTodoDeleteButton = document.createElement('img');

    singleTodoSubContainer.classList.add('single-todo-sub-container');
    singleTodoContent.classList.add('single-todo-content');
    singleTodoLogo.classList.add('single-todo-logo');
    singleTodoName.classList.add('single-todo-name');
    singleTodoProject.classList.add('single-todo-project');
    singleTodoDuedate.classList.add('single-todo-duedate');
    singleTodoDeleteButton.classList.add('single-todo-delete-button');

    singleTodoSubContainer.setAttribute('id', theTodo.getId());

    singleTodoLogo.src = _images_check_box_svg__WEBPACK_IMPORTED_MODULE_6__;
    singleTodoName.textContent = theTodo.getTitle();
    singleTodoProject.textContent = theTodo.getProject();
    singleTodoDuedate.textContent = theTodo.getDuedate();
    singleTodoDeleteButton.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_7__;

    singleTodoDeleteButton.style.display = "none";

    const formSingleTodoName = document.createElement("input");
    const formSingleTodoProject = document.createElement("select");
    const formSingleTodoDuedate = document.createElement("input");

    formSingleTodoName.classList.add('form-single-todo-name');
    formSingleTodoProject.classList.add('form-single-todo-project');
    formSingleTodoDuedate.classList.add('form-single-todo-duedate');

    formSingleTodoName.setAttribute("type", "text");
    formSingleTodoName.setAttribute('placeholder', 'Task name');
    formSingleTodoName.setAttribute('name', 'single-todo-name');
    formSingleTodoName.setAttribute('value', theTodo.getTitle());
    formSingleTodoProject.setAttribute('name', 'single-todo-project');
    formSingleTodoProject.setAttribute('value', theTodo.getProject());
    formSingleTodoDuedate.setAttribute('type', 'date');
    formSingleTodoDuedate.setAttribute('name', 'single-todo-duedate');
    formSingleTodoDuedate.setAttribute('value', theTodo.getDuedate());

    for (const project in listOfProjects) {
        const formSingleTodoProjectOption = document.createElement("option");
        formSingleTodoProjectOption.setAttribute('value', project);
        formSingleTodoProjectOption.textContent = project;
        formSingleTodoProject.appendChild(formSingleTodoProjectOption);
    }

    formSingleTodoName.style.display = "none";
    formSingleTodoProject.style.display = "none";
    formSingleTodoDuedate.style.display = "none";

    singleTodoSubContainer.addEventListener('mouseover', function (e) {
        singleTodoDeleteButton.style.display = "block";
    });

    singleTodoSubContainer.addEventListener('mouseout', function (e) {
        singleTodoDeleteButton.style.display = "none";
    });

    singleTodoDeleteButton.addEventListener('click', function (e) {
        const todoId = e.target.parentElement.id;
        const confirmDelete = confirm("Are you sure you want to delete the task?");
        if (confirmDelete) {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_9__.deleteTodo)(listOfProjects, currentProjectPage, todoId);

            singleTodoContainer.textContent = '';
            displayAllTodos(currentProjectPage);

            populateStorage();
        }
    });

    singleTodoName.addEventListener('click', function(e) {
        singleTodoName.style.display = "none";
        formSingleTodoName.style.display = "block";
    });

    formSingleTodoName.addEventListener('keydown', function(e) {
        if (e.code === "Enter" && formSingleTodoName.style.display === "block") {
            let newTitle = formSingleTodoName.value;

            theTodo.setTitle(newTitle);
            singleTodoName.textContent = newTitle;
            singleTodoName.style.display = "block";
            formSingleTodoName.style.display = "none";

            populateStorage();
        }
    });

    singleTodoProject.addEventListener('click', function(e) {
        singleTodoProject.style.display = "none";
        formSingleTodoProject.style.display = "block";
    });

    formSingleTodoProject.addEventListener('keydown', function(e) {
        if (e.code === "Enter" && formSingleTodoProject.style.display === "block") {
            let newProject = formSingleTodoProject.value;

            theTodo.setProject(newProject);
            singleTodoProject.textContent = newProject;
            singleTodoProject.style.display = "block";
            formSingleTodoProject.style.display = "none";

            let movedTodo = (0,_index_js__WEBPACK_IMPORTED_MODULE_9__.deleteTodo)(listOfProjects, project, theTodo.getId());
            (0,_index_js__WEBPACK_IMPORTED_MODULE_9__.addTodo)(listOfProjects, movedTodo[0].getId(), movedTodo[0].getTitle(), movedTodo[0].getDuedate(), newProject);

            if (currentProjectPage === "Today") {
                singleTodoContainer.textContent = '';
                displayAllTodosToday();
            } else {
                singleTodoContainer.textContent = '';
                displayAllTodos(currentProjectPage);
            }

            populateStorage();
        }
    });

    singleTodoDuedate.addEventListener('click', function(e) {
        singleTodoDuedate.style.display = "none";
        formSingleTodoDuedate.style.display = "block";
    });

    formSingleTodoDuedate.addEventListener('keydown', function(e) {
        if (e.code === "Enter" && formSingleTodoDuedate.style.display === "block") {
            let newDuedate = formSingleTodoDuedate.value;
            if (newDuedate === '') {
                newDuedate = 'No date'
            } 

            theTodo.setDuedate(newDuedate);
            singleTodoDuedate.textContent = newDuedate;
            singleTodoDuedate.style.display = "block";
            formSingleTodoDuedate.style.display = "none";

            if (currentProjectPage === "Today") {
                singleTodoContainer.textContent = '';
                displayAllTodosToday();
            }

            populateStorage();
        }
    });

    singleTodoLogo.addEventListener('click', function(e) {
        theTodo.setComplete();
        singleTodoContainer.textContent = '';
        displayAllTodos(project);

        populateStorage();
    });

    singleTodoContent.appendChild(singleTodoName);
    singleTodoContent.appendChild(formSingleTodoName);
    singleTodoContent.appendChild(singleTodoProject);
    singleTodoContent.appendChild(formSingleTodoProject);
    singleTodoContent.appendChild(singleTodoDuedate);
    singleTodoContent.appendChild(formSingleTodoDuedate);
    singleTodoSubContainer.appendChild(singleTodoLogo);
    singleTodoSubContainer.appendChild(singleTodoContent);
    singleTodoSubContainer.appendChild(singleTodoDeleteButton);

    return singleTodoSubContainer;
}

function displayAllTodos(project) {
    for (let i = 0; i < listOfProjects[project].length; i++) {
        if (listOfProjects[project][i].getStatus() === false && currentProjectPage === project) {
            singleTodoContainer.appendChild(createTodoDisplay(i, project));
        }
    }
}


function displayAllTodosToday() {
    for (const project in listOfProjects) {
        for (let i = 0; i < listOfProjects[project].length; i++) {
            let todoDate = new Date(listOfProjects[project][i].getDuedate()).toDateString();
            let today = new Date().toDateString();

            if (todoDate === today) {
                singleTodoContainer.appendChild(createTodoDisplay(i, project));
            }
        }
    }
}

function generateProjectOptionsTodo() {
    formTodoProject.textContent = '';

    for (const project in listOfProjects) {
        const formTodoProjectOption = document.createElement("option");
        formTodoProjectOption.setAttribute('value', project);
        formTodoProjectOption.textContent = project;
        if (project === "Inbox") {
            formTodoProjectOption.selected = true;
        }

        formTodoProject.appendChild(formTodoProjectOption);
    }
}

function generateProjectOptionsSingleTodo() {
    const formSingleTodoProject = document.querySelector('.form-single-todo-project');

    if (formSingleTodoProject) {
        formSingleTodoProject.textContent  = '';
    }

    for (const project in listOfProjects) {
        const formTodoProjectOption = document.createElement("option");
        formTodoProjectOption.setAttribute('value', project);
        formTodoProjectOption.textContent = project;

        if (formSingleTodoProject) {
            formSingleTodoProject.appendChild(formTodoProjectOption);
        }
    }
}

// localStorage RELATED FUNCTIONS

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function populateStorage() {
    localStorage.setItem('todoIds', todoIds);
    localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));
}

function setListOfProjectsAndTodos() {
    todoIds = Number(localStorage.getItem('todoIds'));
    let listOfProjectsJSON = JSON.parse(localStorage.getItem('listOfProjects'));

    for (const project in listOfProjectsJSON) {
        listOfProjects[project] = [];
        for (let i = 0; i < listOfProjectsJSON[project].length; i++) {
            const todoId = listOfProjectsJSON[project][i]["todoId"];
            const todoTitle = listOfProjectsJSON[project][i]["todoTitle"];
            const todoDuedate = listOfProjectsJSON[project][i]["todoDuedate"];
            const todoProject = listOfProjectsJSON[project][i]["todoProject"];
            const todoCompleteStatus = listOfProjectsJSON[project][i]["todoCompleteStatus"];
            (0,_index_js__WEBPACK_IMPORTED_MODULE_9__.addTodo)(listOfProjects, todoId, todoTitle, todoDuedate, todoProject, todoCompleteStatus);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePage);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (id, title, duedate, project, completeStatus) => {
    const todoId = id;
    let todoTitle = title;
    let todoDuedate = duedate;
    let todoProject = project;
    let todoCompleteStatus = completeStatus;
    
    const getId = () => todoId;
    const getTitle = () => todoTitle;
    const getDuedate = () => todoDuedate;
    const getProject = () => todoProject;
    const getStatus = () => todoCompleteStatus;

    const setTitle = newTitle => {
        todoTitle = newTitle;
    }

    const setDuedate = newDuedate => {
        todoDuedate = newDuedate;
    }

    const setProject = newProject => {
        todoProject = newProject;
    }

    const setComplete = () => {
        todoCompleteStatus = true;
    } 

    const description = () => `Id: ${todoId} Title: ${todoTitle}, Due date: ${todoDuedate}, Project: ${todoProject}, Complete status: ${todoCompleteStatus}`;
    
    const toJSON = () => {
        return { todoId, todoTitle, todoDuedate, todoProject, todoCompleteStatus }
    }
    
    return { 
        getId,
        getTitle, 
        getDuedate,
        getProject,
        getStatus,
        setTitle,
        setDuedate,
        setProject,
        setComplete,
        description,
        toJSON
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/images/account_circle.svg":
/*!***************************************!*\
  !*** ./src/images/account_circle.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a37abdff661249c1daf1.svg";

/***/ }),

/***/ "./src/images/add_mini.svg":
/*!*********************************!*\
  !*** ./src/images/add_mini.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ffbe1e6b78ae63fe280.svg";

/***/ }),

/***/ "./src/images/check_box.svg":
/*!**********************************!*\
  !*** ./src/images/check_box.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "192cbe405e134da11172.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f8d90058dc7fd82dbd3.svg";

/***/ }),

/***/ "./src/images/done_all.svg":
/*!*********************************!*\
  !*** ./src/images/done_all.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4da65dcf1fd7b8fe970.svg";

/***/ }),

/***/ "./src/images/inbox.svg":
/*!******************************!*\
  !*** ./src/images/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edcb0385a7ff20eda549.svg";

/***/ }),

/***/ "./src/images/list_alt.svg":
/*!*********************************!*\
  !*** ./src/images/list_alt.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "111e2a7ef7b55e6555f9.svg";

/***/ }),

/***/ "./src/images/today.svg":
/*!******************************!*\
  !*** ./src/images/today.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "011ebf0a0e7ad61de424.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sU0FBUyxZQUFZLGFBQWEsT0FBTyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLFNBQVMsVUFBVSxPQUFPLFlBQVksUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFNBQVMsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUss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LFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrREFBTztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IsaURBQVU7QUFDaEM7QUFDQSw4QkFBOEIsOENBQVE7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixrREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsOENBQVE7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFVOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixxREFBVTtBQUN0QyxZQUFZLGtEQUFPOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQXdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ2xwQjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFFBQVEsU0FBUyxVQUFVLGNBQWMsWUFBWSxhQUFhLFlBQVkscUJBQXFCLG1CQUFtQjtBQUMzSjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJTZWdvZSBVSVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgRW1vamlcXFwiO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDV2aCAxZnIgNHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMxMHB4IDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwic2lkZWJhciBtYWluLWNvbnRlbnRcXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyRDRFO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgNDhweCAwIDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItbG9nby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGltZyxcXG4uc2lkZWJhciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDMlKSBzYXR1cmF0ZSg4OSUpIGh1ZS1yb3RhdGUoMTk3ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMCUpO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxcbn1cXG5cXG4ucHJvZmlsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MkFGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lcixcXG4udG9kYXktY29udGFpbmVyLFxcbi5wcm9qZWN0LXN1Yi1jb250YWluZXIsXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lciAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xcbn1cXG5cXG4uaW5ib3gtbmFtZSxcXG4udG9kYXktbmFtZSxcXG4ucHJvamVjdC1uYW1lLFxcbi5hZGQtcHJvamVjdC1uYW1lIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGNztcXG4gICAgZ3JpZC1hcmVhOiBtYWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDQ4cHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogODAwcHg7XFxufVxcblxcbi5zaW5nbGUtdG9kby1zdWItY29udGFpbmVyLFxcbi5hZGQtdG9kby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10b2RvLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuXFxuLnNpbmdsZS10b2RvLW5hbWUsXFxuLmFkZC10b2RvLW5hbWUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaW5nbGUtdG9kby1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lcjpob3ZlcixcXG4udG9kYXktY29udGFpbmVyOmhvdmVyLFxcbi5wcm9qZWN0LXN1Yi1jb250YWluZXI6aG92ZXIsXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcixcXG4uYWRkLXRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmluYm94LW5hbWU6aG92ZXIsXFxuLnRvZGF5LW5hbWU6aG92ZXIsXFxuLnByb2plY3QtbmFtZTpob3ZlcixcXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uOmhvdmVyLCBcXG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVyLFxcbi5hZGQtdG9kby1jb250YWluZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5zaW5nbGUtdG9kby1zdWItY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLnNpbmdsZS10b2RvLWxvZ286aG92ZXIsXFxuLnNpbmdsZS10b2RvLW5hbWU6aG92ZXIsXFxuLnNpbmdsZS10b2RvLXByb2plY3Q6aG92ZXIsXFxuLnNpbmdsZS10b2RvLWR1ZWRhdGU6aG92ZXIsXFxuLnNpbmdsZS10b2RvLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFBvcCBVcCBGb3JtIFJlZmVyZW5jZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19wb3B1cF9mb3JtLmFzcCAqL1xcbi5mb3JtLXByb2plY3QtcG9wdXAsXFxuLmZvcm0tdG9kby1wb3B1cCxcXG4uZm9ybS1zaW5nbGUtdG9kby1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGOUY3Rjc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGN0Y3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJpbnB1dCBpbnB1dFxcXCJcXG4gICAgXFxcImFkZCBjYW5jZWxcXFwiO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNEQkUyRUY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lOmZvY3VzIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIgLmJ0bixcXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBhZGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZ3JpZC1hcmVhOiBjYW5jZWw7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mb3JtLXRvZG8tY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGN0Y3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYW1lIG5hbWVcXFwiXFxuICAgIFxcXCJkdWVkYXRlIGR1ZWRhdGVcXFwiXFxuICAgIFxcXCJwcm9qZWN0cyBwcm9qZWN0c1xcXCJcXG4gICAgXFxcInRvZG9BZGQgdG9kb0NhbmNlbFxcXCI7XFxufVxcblxcbiN0b2RvLW5hbWUsXFxuI3RvZG8tcHJvamVjdCxcXG4jdG9kby1kdWVkYXRlLFxcbi5mb3JtLXNpbmdsZS10b2RvLW5hbWUsXFxuLmZvcm0tc2luZ2xlLXRvZG8tcHJvamVjdCxcXG4uZm9ybS1zaW5nbGUtdG9kby1kdWVkYXRlIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjREJFMkVGO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuI3RvZG8tbmFtZTpmb2N1cyxcXG4jdG9kby1wcm9qZWN0OmZvY3VzLFxcbiN0b2RvLWR1ZWRhdGU6Zm9jdXMsXFxuLmZvcm0tc2luZ2xlLXRvZG8tbmFtZTpmb2N1cyxcXG4uZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0OmZvY3VzLFxcbi5mb3JtLXNpbmdsZS10b2RvLWR1ZWRhdGU6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdG9kby1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcbn1cXG5cXG4jdG9kby1kdWVkYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkdWVkYXRlO1xcbn1cXG5cXG4jdG9kby1wcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgLmJ0bixcXG4uZm9ybS10b2RvLWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZm9ybS10b2RvLWNvbnRhaW5lciAuYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvQWRkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgLmJ0bi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGdyaWQtYXJlYTogdG9kb0NhbmNlbDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZvcm0tc2luZ2xlLXRvZG8tbmFtZSxcXG4uZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0LFxcbi5mb3JtLXNpbmdsZS10b2RvLWR1ZWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZm9ybS1zaW5nbGUtdG9kby1uYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJFMkVGO1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrR0FBK0c7SUFDL0csVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDOzs7bUJBR2U7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSw4RkFBOEY7QUFDbEc7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztJQUlJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7OztJQUlJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7Ozs7SUFLSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBOzs7Ozs7SUFNSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7O0lBS0ksZUFBZTtBQUNuQjs7QUFFQSxtRkFBbUY7QUFDbkY7OztJQUdJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCOztnQkFFWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUI7Ozs7d0JBSW9CO0FBQ3hCOztBQUVBOzs7Ozs7SUFNSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7Ozs7OztJQU1JLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7OztJQUdJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiU2Vnb2UgVUlcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggMWZyIDR2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMTBweCA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpbi1jb250ZW50XFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMkQ0RTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDQ4cHggMCA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciBpbWcsXFxuLnNpZGViYXIgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgzJSkgc2F0dXJhdGUoODklKSBodWUtcm90YXRlKDE5N2RlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxMDAlKTtcXG59XFxuXFxuLmhlYWRlci1sb2dvLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcXG59XFxuXFxuLnByb2ZpbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNzJBRjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzMHB4O1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pbmJveC1jb250YWluZXIsXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4ucHJvamVjdC1zdWItY29udGFpbmVyLFxcbi5hZGQtcHJvamVjdC1jb250YWluZXIgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXG59XFxuXFxuLmluYm94LW5hbWUsXFxuLnRvZGF5LW5hbWUsXFxuLnByb2plY3QtbmFtZSxcXG4uYWRkLXByb2plY3QtbmFtZSB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY3Rjc7XFxuICAgIGdyaWQtYXJlYTogbWFpbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA0OHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgxIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tc3ViLWNvbnRhaW5lcixcXG4uYWRkLXRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNpbmdsZS10b2RvLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdG9kby1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxufVxcblxcbi5zaW5nbGUtdG9kby1uYW1lLFxcbi5hZGQtdG9kby1uYW1lIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnNpbmdsZS10b2RvLWRlbGV0ZS1idXR0b24ge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbmJveC1jb250YWluZXI6aG92ZXIsXFxuLnRvZGF5LWNvbnRhaW5lcjpob3ZlcixcXG4ucHJvamVjdC1zdWItY29udGFpbmVyOmhvdmVyLFxcbi5hZGQtcHJvamVjdC1jb250YWluZXI6aG92ZXIsXFxuLmFkZC10b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5pbmJveC1uYW1lOmhvdmVyLFxcbi50b2RheS1uYW1lOmhvdmVyLFxcbi5wcm9qZWN0LW5hbWU6aG92ZXIsXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbjpob3ZlciwgXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcixcXG4uYWRkLXRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uc2luZ2xlLXRvZG8tc3ViLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5zaW5nbGUtdG9kby1sb2dvOmhvdmVyLFxcbi5zaW5nbGUtdG9kby1uYW1lOmhvdmVyLFxcbi5zaW5nbGUtdG9kby1wcm9qZWN0OmhvdmVyLFxcbi5zaW5nbGUtdG9kby1kdWVkYXRlOmhvdmVyLFxcbi5zaW5nbGUtdG9kby1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQb3AgVXAgRm9ybSBSZWZlcmVuY2U6IGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fanNfcG9wdXBfZm9ybS5hc3AgKi9cXG4uZm9ybS1wcm9qZWN0LXBvcHVwLFxcbi5mb3JtLXRvZG8tcG9wdXAsXFxuLmZvcm0tc2luZ2xlLXRvZG8tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRjlGN0Y3O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGNztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaW5wdXQgaW5wdXRcXFwiXFxuICAgIFxcXCJhZGQgY2FuY2VsXFxcIjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjREJFMkVGO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuI3Byb2plY3QtbmFtZTpmb2N1cyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIC5idG4sXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIgLmJ0bi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIgLmJ0biB7XFxuICAgIGdyaWQtYXJlYTogYWRkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIgLmJ0bi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGdyaWQtYXJlYTogY2FuY2VsO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9ybS10b2RvLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGNztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibmFtZSBuYW1lXFxcIlxcbiAgICBcXFwiZHVlZGF0ZSBkdWVkYXRlXFxcIlxcbiAgICBcXFwicHJvamVjdHMgcHJvamVjdHNcXFwiXFxuICAgIFxcXCJ0b2RvQWRkIHRvZG9DYW5jZWxcXFwiO1xcbn1cXG5cXG4jdG9kby1uYW1lLFxcbiN0b2RvLXByb2plY3QsXFxuI3RvZG8tZHVlZGF0ZSxcXG4uZm9ybS1zaW5nbGUtdG9kby1uYW1lLFxcbi5mb3JtLXNpbmdsZS10b2RvLXByb2plY3QsXFxuLmZvcm0tc2luZ2xlLXRvZG8tZHVlZGF0ZSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI0RCRTJFRjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiN0b2RvLW5hbWU6Zm9jdXMsXFxuI3RvZG8tcHJvamVjdDpmb2N1cyxcXG4jdG9kby1kdWVkYXRlOmZvY3VzLFxcbi5mb3JtLXNpbmdsZS10b2RvLW5hbWU6Zm9jdXMsXFxuLmZvcm0tc2luZ2xlLXRvZG8tcHJvamVjdDpmb2N1cyxcXG4uZm9ybS1zaW5nbGUtdG9kby1kdWVkYXRlOmZvY3VzIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3RvZG8tbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG59XFxuXFxuI3RvZG8tZHVlZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogZHVlZGF0ZTtcXG59XFxuXFxuI3RvZG8tcHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdHM7XFxufVxcblxcbi5mb3JtLXRvZG8tY29udGFpbmVyIC5idG4sXFxuLmZvcm0tdG9kby1jb250YWluZXIgLmJ0bi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgLmJ0biB7XFxuICAgIGdyaWQtYXJlYTogdG9kb0FkZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5mb3JtLXRvZG8tY29udGFpbmVyIC5idG4tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBncmlkLWFyZWE6IHRvZG9DYW5jZWw7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5mb3JtLXRvZG8tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mb3JtLXNpbmdsZS10b2RvLW5hbWUsXFxuLmZvcm0tc2luZ2xlLXRvZG8tcHJvamVjdCxcXG4uZm9ybS1zaW5nbGUtdG9kby1kdWVkYXRlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmZvcm0tc2luZ2xlLXRvZG8tbmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCRTJFRjtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBnZW5lcmF0ZVBhZ2UgZnJvbSAnLi9wYWdlLmpzJztcblxuZnVuY3Rpb24gdG9kb0ZpbmRlcihsaXN0T2ZQcm9qZWN0cywgcHJvamVjdCwgaWQpIHtcbiAgICBsZXQgdG9kb0lkeCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdE9mUHJvamVjdHNbcHJvamVjdF1baV0uZ2V0SWQoKSA9PT0gTnVtYmVyKGlkKSkge1xuICAgICAgICAgICAgdG9kb0lkeCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvZG9JZHg7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8obGlzdE9mUHJvamVjdHMsIGlkLCB0aXRsZSwgZHVlZGF0ZSA9ICcnLCBwcm9qZWN0ID0gJ0luYm94JywgY29tcGxldGVTdGF0dXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvKGlkLCB0aXRsZSwgZHVlZGF0ZSwgcHJvamVjdCwgY29tcGxldGVTdGF0dXMpO1xuICAgIGxpc3RPZlByb2plY3RzW3Byb2plY3RdLnB1c2gobmV3VG9kbyk7XG5cbiAgICByZXR1cm4gbmV3VG9kbztcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhsaXN0T2ZQcm9qZWN0cywgcHJvamVjdCwgaWQpIHtcbiAgICBsZXQgdG9kb0lkeCA9IHRvZG9GaW5kZXIobGlzdE9mUHJvamVjdHMsIHByb2plY3QsIGlkKTtcblxuICAgIGxldCByZW1vdmVkVG9kbyA9IGxpc3RPZlByb2plY3RzW3Byb2plY3RdLnNwbGljZSh0b2RvSWR4LCAxKTtcbiAgICByZXR1cm4gcmVtb3ZlZFRvZG87XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRQYWdlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQYWdlKCkpO1xufVxuXG5jdXJyZW50UGFnZSgpO1xuXG5leHBvcnQge1xuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kb1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFBsdXNNaW5pU3ZnIGZyb20gJy4vaW1hZ2VzL2FkZF9taW5pLnN2Zyc7XG5pbXBvcnQgRG9uZUFsbFN2ZyBmcm9tICcuL2ltYWdlcy9kb25lX2FsbC5zdmcnO1xuaW1wb3J0IFByb2ZpbGVTdmcgZnJvbSAnLi9pbWFnZXMvYWNjb3VudF9jaXJjbGUuc3ZnJztcbmltcG9ydCBJbmJveFN2ZyBmcm9tICcuL2ltYWdlcy9pbmJveC5zdmcnO1xuaW1wb3J0IExpc3RBbHRTdmcgZnJvbSAnLi9pbWFnZXMvbGlzdF9hbHQuc3ZnJztcbmltcG9ydCBDaGVja0JveFN2ZyBmcm9tICcuL2ltYWdlcy9jaGVja19ib3guc3ZnJztcbmltcG9ydCBDbG9zZVN2ZyBmcm9tICcuL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IFRvZGF5U3ZnIGZyb20gJy4vaW1hZ2VzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgeyBhZGRUb2RvLCBkZWxldGVUb2RvIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmxldCB0b2RvSWRzID0gMDtcbmxldCBsaXN0T2ZQcm9qZWN0cyA9IHsgXCJJbmJveFwiOiBbXSB9O1xubGV0IGN1cnJlbnRQcm9qZWN0UGFnZSA9IFwiSW5ib3hcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhlYWRlckxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGhlYWRlckxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9maWxlUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNpZGViYXJNZW51TWFpbj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaWRlYmFyTWVudVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbmJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaW5ib3hMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBpbmJveE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB0b2RheUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IHRvZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFByb2plY3RMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBhZGRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaW5nbGVUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhZGRUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhZGRUb2RvTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgYWRkVG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbmhlYWRlckxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28tY29udGFpbmVyJyk7XG5oZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG5oZWFkZXJMb2dvTmFtZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nby1uYW1lJyk7XG5wcm9maWxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtY29udGFpbmVyJyk7XG5wcm9maWxlUGljLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtcGljJyk7XG5cbnNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuc2lkZWJhck1lbnVNYWluLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWVudS1tYWluJyk7XG5zaWRlYmFyTWVudVByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWVudS1wcm9qZWN0cycpO1xuaW5ib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5ib3gtY29udGFpbmVyJyk7XG5pbmJveENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0luYm94Jyk7XG5pbmJveExvZ28uY2xhc3NMaXN0LmFkZCgnaW5ib3gtbG9nbycpO1xuaW5ib3hOYW1lLmNsYXNzTGlzdC5hZGQoJ2luYm94LW5hbWUnKTtcbnRvZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWNvbnRhaW5lcicpO1xudG9kYXlDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdUb2RheScpO1xudG9kYXlMb2dvLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWxvZ28nKTtcbnRvZGF5TmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RheS1uYW1lJyk7XG5zaWRlYmFyVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10aXRsZScpO1xucHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1jb250YWluZXInKTtcbmFkZFByb2plY3RMb2dvLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWxvZ28nKTtcbmFkZFByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LW5hbWUnKTtcblxubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5tYWluVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpbi10aXRsZScpO1xudG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuc2luZ2xlVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdG9kby1jb250YWluZXInKTtcbmFkZFRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY29udGFpbmVyJyk7XG5hZGRUb2RvTG9nby5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1sb2dvJyk7XG5hZGRUb2RvTmFtZS5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1uYW1lJyk7XG5cbmZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuaGVhZGVyTG9nby5zcmMgPSBEb25lQWxsU3ZnO1xuaGVhZGVyTG9nb05hbWUudGV4dENvbnRlbnQgPSBcIk9kaW4gVG9kbyBMaXN0XCI7XG5wcm9maWxlUGljLnNyYyA9IFByb2ZpbGVTdmc7XG5cbmluYm94TG9nby5zcmMgPSBJbmJveFN2ZztcbmluYm94TmFtZS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbnRvZGF5TG9nby5zcmMgPSBUb2RheVN2ZztcbnRvZGF5TmFtZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbnNpZGViYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbmFkZFByb2plY3RMb2dvLnNyYyA9IFBsdXNNaW5pU3ZnO1xuYWRkUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbm1haW5UaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0UGFnZTtcbmFkZFRvZG9Mb2dvLnNyYyA9IFBsdXNNaW5pU3ZnO1xuYWRkVG9kb05hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbmZvb3Rlci5pbm5lckhUTUwgPSAnQnkgeW91cnMgdHJ1bHksJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tcmFmZmlhXCI+IG1yYWZmaWE8L2E+JztcblxuaGVhZGVyTG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbmhlYWRlckxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nb05hbWUpO1xucHJvZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlUGljKTtcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvQ29udGFpbmVyKTtcbmhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlQ29udGFpbmVyKTtcblxuY29uc3QgZm9ybVByb2plY3RQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZm9ybVByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnN0IGZvcm1Qcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IGZvcm1Qcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGZvcm1Qcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuZm9ybVByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdmb3JtLXByb2plY3QtcG9wdXAnKTtcbmZvcm1Qcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcHJvamVjdC1jb250YWluZXInKTtcbmZvcm1Qcm9qZWN0U3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuZm9ybVByb2plY3RDYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWNhbmNlbCcpO1xuXG5mb3JtUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFBvcFVwRm9ybScpO1xuZm9ybVByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5mb3JtUHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcbmZvcm1Qcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1uYW1lJyk7XG5mb3JtUHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbmZvcm1Qcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5mb3JtUHJvamVjdENhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbmZvcm1Qcm9qZWN0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG5cbmZvcm1Qcm9qZWN0U3VibWl0LnRleHRDb250ZW50ID0gXCJBZGRcIjtcbmZvcm1Qcm9qZWN0Q2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuZm9ybVByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByb2plY3ROYW1lKTtcbmZvcm1Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcm9qZWN0U3VibWl0KTtcbmZvcm1Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcm9qZWN0Q2FuY2VsKTtcbmZvcm1Qcm9qZWN0UG9wVXAuYXBwZW5kQ2hpbGQoZm9ybVByb2plY3RDb250YWluZXIpO1xuXG5pbmJveENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveExvZ28pO1xuaW5ib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5ib3hOYW1lKTtcbnRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5TG9nbyk7XG50b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheU5hbWUpO1xuYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0TG9nbyk7XG5hZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3ROYW1lKTtcbnNpZGViYXJNZW51TWFpbi5hcHBlbmRDaGlsZChpbmJveENvbnRhaW5lcik7XG5zaWRlYmFyTWVudU1haW4uYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuc2lkZWJhck1lbnVQcm9qZWN0cy5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuc2lkZWJhck1lbnVQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbnNpZGViYXJNZW51UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcik7XG5zaWRlYmFyTWVudVByb2plY3RzLmFwcGVuZENoaWxkKGZvcm1Qcm9qZWN0UG9wVXApO1xuc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudU1haW4pO1xuc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudVByb2plY3RzKTtcblxuY29uc3QgZm9ybVRvZG9Qb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZm9ybVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnN0IGZvcm1Ub2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IGZvcm1Ub2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IGZvcm1Ub2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5jb25zdCBmb3JtVG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBmb3JtVG9kb0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbmZvcm1Ub2RvUG9wVXAuY2xhc3NMaXN0LmFkZCgnZm9ybS10b2RvLXBvcHVwJyk7XG5mb3JtVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLXRvZG8tY29udGFpbmVyJyk7XG5mb3JtVG9kb1N1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbmZvcm1Ub2RvQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2J0bi1jYW5jZWwnKTtcblxuZm9ybVRvZG9Qb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Qb3BVcEZvcm0nKTtcbmZvcm1Ub2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuZm9ybVRvZG9OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG5mb3JtVG9kb05hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG8tbmFtZScpO1xuZm9ybVRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1uYW1lJyk7XG5mb3JtVG9kb0R1ZWRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbmZvcm1Ub2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kby1kdWVkYXRlJyk7O1xuZm9ybVRvZG9EdWVkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1kdWVkYXRlJyk7XG5mb3JtVG9kb1Byb2plY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG8tcHJvamVjdCcpO1xuZm9ybVRvZG9Qcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1wcm9qZWN0Jyk7XG5mb3JtVG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuZm9ybVRvZG9DYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG5mb3JtVG9kb05hbWUucmVxdWlyZWQgPSB0cnVlO1xuXG5mb3JtVG9kb1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5mb3JtVG9kb0NhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbmZvcm1Ub2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub2RvTmFtZSk7XG5mb3JtVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVG9kb0R1ZWRhdGUpO1xuZm9ybVRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvZG9Qcm9qZWN0KTtcbmZvcm1Ub2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub2RvU3VibWl0KTtcbmZvcm1Ub2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub2RvQ2FuY2VsKTtcbmZvcm1Ub2RvUG9wVXAuYXBwZW5kQ2hpbGQoZm9ybVRvZG9Db250YWluZXIpO1xuXG5hZGRUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9Mb2dvKTtcbmFkZFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb05hbWUpO1xudG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xudG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVUb2RvQ29udGFpbmVyKTtcbnRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0NvbnRhaW5lcik7XG50b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub2RvUG9wVXApO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vLyBNQUlOIEZVTkNUSU9OXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGFnZSgpIHtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGZvcm1Qcm9qZWN0UG9wVXAuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgZm9ybVByb2plY3RQb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybVByb2plY3RQb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9ybVByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb3JtUHJvamVjdENvbnRhaW5lci5yZXNldCgpXG4gICAgICAgIGZvcm1Qcm9qZWN0UG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgZm9ybVByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldFsncHJvamVjdC1uYW1lJ10udmFsdWU7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGxpc3RPZlByb2plY3RzKS5sZW5ndGggPiA2KSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBjYW4ndCBoYXZlIG1vcmUgdGhhbiA1IHByb2plY3RzIVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0VGl0bGUgaW4gbGlzdE9mUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IGhhdmUgdHdvIG9yIG1vcmUgcHJvamVjdHMgd2l0aCB0aGUgc2FtZSBuYW1lISAoY2FzZSBzZW5zaXRpdmUpXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdE9mUHJvamVjdHNbcHJvamVjdFRpdGxlXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0T3B0aW9uc1RvZG8oKTtcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0T3B0aW9uc1NpbmdsZVRvZG8oKTtcblxuICAgICAgICBmb3JtUHJvamVjdENvbnRhaW5lci5yZXNldCgpXG4gICAgICAgIGZvcm1Qcm9qZWN0UG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuXG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgYWRkVG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChmb3JtVG9kb1BvcFVwLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgIGZvcm1Ub2RvUG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1Ub2RvUG9wVXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvcm1Ub2RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9ybVRvZG9Db250YWluZXIucmVzZXQoKVxuICAgICAgICBmb3JtVG9kb1BvcFVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGZvcm1Ub2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZS50YXJnZXRbJ3RvZG8tbmFtZSddLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGUudGFyZ2V0Wyd0b2RvLXByb2plY3QnXS52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG9EdWVkYXRlID0gZS50YXJnZXRbJ3RvZG8tZHVlZGF0ZSddLnZhbHVlO1xuICAgICAgICBpZiAodG9kb0R1ZWRhdGUgPT09ICcnKSB7XG4gICAgICAgICAgICB0b2RvRHVlZGF0ZSA9IFwiTm8gZGF0ZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9kbyhsaXN0T2ZQcm9qZWN0cywgdG9kb0lkcywgdG9kb1RpdGxlLCB0b2RvRHVlZGF0ZSwgdG9kb1Byb2plY3QpO1xuICAgICAgICB0b2RvSWRzKys7XG5cbiAgICAgICAgZm9ybVRvZG9Db250YWluZXIucmVzZXQoKVxuICAgICAgICBmb3JtVG9kb1BvcFVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkaXNwbGF5QWxsVG9kb3MoY3VycmVudFByb2plY3RQYWdlKTtcblxuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9KTtcblxuICAgIGluYm94TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gXCJJbmJveFwiO1xuICAgICAgICBjdXJyZW50UHJvamVjdFBhZ2UgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkaXNwbGF5QWxsVG9kb3MocHJvamVjdFRpdGxlKTtcbiAgICB9KTtcblxuICAgIHRvZGF5TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gXCJUb2RheVwiO1xuICAgICAgICBjdXJyZW50UHJvamVjdFBhZ2UgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkaXNwbGF5QWxsVG9kb3NUb2RheShwcm9qZWN0VGl0bGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdE9mUHJvamVjdHMnKSkge1xuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICBzZXRMaXN0T2ZQcm9qZWN0c0FuZFRvZG9zKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRMaXN0T2ZQcm9qZWN0c0FuZFRvZG9zKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ0FOXFwnVCBVU0UgbG9jYWxTdG9yYWdlPyBCUlVIJyk7XG4gICAgfVxuXG4gICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgZGlzcGxheUFsbFRvZG9zKGN1cnJlbnRQcm9qZWN0UGFnZSk7XG4gICAgZ2VuZXJhdGVQcm9qZWN0T3B0aW9uc1RvZG8oKTtcbiAgICBnZW5lcmF0ZVByb2plY3RPcHRpb25zU2luZ2xlVG9kbygpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gUFJPSkVDVFMgUkVMQVRFRCBGVU5DVElPTlNcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpc3BsYXkocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RTdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcHJvamVjdFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN1Yi1jb250YWluZXInKTtcbiAgICBwcm9qZWN0TG9nby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxvZ28nKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbicpO1xuXG4gICAgcHJvamVjdFN1YkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdCk7XG5cbiAgICBwcm9qZWN0TG9nby5zcmMgPSBMaXN0QWx0U3ZnO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnNyYyA9IENsb3NlU3ZnO1xuXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBwcm9qZWN0U3ViQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIHByb2plY3RTdWJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICBjb25zdCBjb25maXJtRGVsZXRlID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3QgXFxcIlwiICsgcHJvamVjdFRpdGxlICsgXCJcXFwiP1wiKTtcbiAgICAgICAgaWYgKGNvbmZpcm1EZWxldGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsaXN0T2ZQcm9qZWN0c1twcm9qZWN0VGl0bGVdO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RPcHRpb25zVG9kbygpO1xuICAgICAgICAgICAgZ2VuZXJhdGVQcm9qZWN0T3B0aW9uc1NpbmdsZVRvZG8oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG5cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgY3VycmVudFByb2plY3RQYWdlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZGlzcGxheUFsbFRvZG9zKHByb2plY3RUaXRsZSk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0U3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMb2dvKTtcbiAgICBwcm9qZWN0U3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0U3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIHByb2plY3RTdWJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxQcm9qZWN0cygpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMobGlzdE9mUHJvamVjdHMpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IGluIGxpc3RPZlByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdCAhPT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRPRE9TIFJFTEFURUQgRlVOQ1RJT05TXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9EaXNwbGF5KHRhc2tJZHgsIHByb2plY3QpIHtcbiAgICBjb25zdCB0aGVUb2RvID0gbGlzdE9mUHJvamVjdHNbcHJvamVjdF1bdGFza0lkeF07XG5cbiAgICBjb25zdCBzaW5nbGVUb2RvU3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2luZ2xlVG9kb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzaW5nbGVUb2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpbmdsZVRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2luZ2xlVG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzaW5nbGVUb2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpbmdsZVRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHNpbmdsZVRvZG9TdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRvZG8tc3ViLWNvbnRhaW5lcicpO1xuICAgIHNpbmdsZVRvZG9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10b2RvLWNvbnRlbnQnKTtcbiAgICBzaW5nbGVUb2RvTG9nby5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdG9kby1sb2dvJyk7XG4gICAgc2luZ2xlVG9kb05hbWUuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRvZG8tbmFtZScpO1xuICAgIHNpbmdsZVRvZG9Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10b2RvLXByb2plY3QnKTtcbiAgICBzaW5nbGVUb2RvRHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdG9kby1kdWVkYXRlJyk7XG4gICAgc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdG9kby1kZWxldGUtYnV0dG9uJyk7XG5cbiAgICBzaW5nbGVUb2RvU3ViQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGVUb2RvLmdldElkKCkpO1xuXG4gICAgc2luZ2xlVG9kb0xvZ28uc3JjID0gQ2hlY2tCb3hTdmc7XG4gICAgc2luZ2xlVG9kb05hbWUudGV4dENvbnRlbnQgPSB0aGVUb2RvLmdldFRpdGxlKCk7XG4gICAgc2luZ2xlVG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSB0aGVUb2RvLmdldFByb2plY3QoKTtcbiAgICBzaW5nbGVUb2RvRHVlZGF0ZS50ZXh0Q29udGVudCA9IHRoZVRvZG8uZ2V0RHVlZGF0ZSgpO1xuICAgIHNpbmdsZVRvZG9EZWxldGVCdXR0b24uc3JjID0gQ2xvc2VTdmc7XG5cbiAgICBzaW5nbGVUb2RvRGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGNvbnN0IGZvcm1TaW5nbGVUb2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBmb3JtU2luZ2xlVG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNvbnN0IGZvcm1TaW5nbGVUb2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXNpbmdsZS10b2RvLW5hbWUnKTtcbiAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0Jyk7XG4gICAgZm9ybVNpbmdsZVRvZG9EdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2luZ2xlLXRvZG8tZHVlZGF0ZScpO1xuXG4gICAgZm9ybVNpbmdsZVRvZG9OYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgbmFtZScpO1xuICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2luZ2xlLXRvZG8tbmFtZScpO1xuICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhlVG9kby5nZXRUaXRsZSgpKTtcbiAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3NpbmdsZS10b2RvLXByb2plY3QnKTtcbiAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoZVRvZG8uZ2V0UHJvamVjdCgpKTtcbiAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NpbmdsZS10b2RvLWR1ZWRhdGUnKTtcbiAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoZVRvZG8uZ2V0RHVlZGF0ZSgpKTtcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBsaXN0T2ZQcm9qZWN0cykge1xuICAgICAgICBjb25zdCBmb3JtU2luZ2xlVG9kb1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QpO1xuICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3QuYXBwZW5kQ2hpbGQoZm9ybVNpbmdsZVRvZG9Qcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICBmb3JtU2luZ2xlVG9kb05hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZm9ybVNpbmdsZVRvZG9EdWVkYXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIHNpbmdsZVRvZG9TdWJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgc2luZ2xlVG9kb1N1YkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHNpbmdsZVRvZG9EZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgdGFzaz9cIik7XG4gICAgICAgIGlmIChjb25maXJtRGVsZXRlKSB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGxpc3RPZlByb2plY3RzLCBjdXJyZW50UHJvamVjdFBhZ2UsIHRvZG9JZCk7XG5cbiAgICAgICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGRpc3BsYXlBbGxUb2RvcyhjdXJyZW50UHJvamVjdFBhZ2UpO1xuXG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2luZ2xlVG9kb05hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHNpbmdsZVRvZG9OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9ybVNpbmdsZVRvZG9OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgICBmb3JtU2luZ2xlVG9kb05hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiICYmIGZvcm1TaW5nbGVUb2RvTmFtZS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgIGxldCBuZXdUaXRsZSA9IGZvcm1TaW5nbGVUb2RvTmFtZS52YWx1ZTtcblxuICAgICAgICAgICAgdGhlVG9kby5zZXRUaXRsZShuZXdUaXRsZSk7XG4gICAgICAgICAgICBzaW5nbGVUb2RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgc2luZ2xlVG9kb05hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVUb2RvUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2luZ2xlVG9kb1Byb2plY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIgJiYgZm9ybVNpbmdsZVRvZG9Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBmb3JtU2luZ2xlVG9kb1Byb2plY3QudmFsdWU7XG5cbiAgICAgICAgICAgIHRoZVRvZG8uc2V0UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHNpbmdsZVRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgIHNpbmdsZVRvZG9Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICBsZXQgbW92ZWRUb2RvID0gZGVsZXRlVG9kbyhsaXN0T2ZQcm9qZWN0cywgcHJvamVjdCwgdGhlVG9kby5nZXRJZCgpKTtcbiAgICAgICAgICAgIGFkZFRvZG8obGlzdE9mUHJvamVjdHMsIG1vdmVkVG9kb1swXS5nZXRJZCgpLCBtb3ZlZFRvZG9bMF0uZ2V0VGl0bGUoKSwgbW92ZWRUb2RvWzBdLmdldER1ZWRhdGUoKSwgbmV3UHJvamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdFBhZ2UgPT09IFwiVG9kYXlcIikge1xuICAgICAgICAgICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWxsVG9kb3NUb2RheSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgZGlzcGxheUFsbFRvZG9zKGN1cnJlbnRQcm9qZWN0UGFnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVUb2RvRHVlZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2luZ2xlVG9kb0R1ZWRhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIGZvcm1TaW5nbGVUb2RvRHVlZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIgJiYgZm9ybVNpbmdsZVRvZG9EdWVkYXRlLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgbGV0IG5ld0R1ZWRhdGUgPSBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUudmFsdWU7XG4gICAgICAgICAgICBpZiAobmV3RHVlZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBuZXdEdWVkYXRlID0gJ05vIGRhdGUnXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICB0aGVUb2RvLnNldER1ZWRhdGUobmV3RHVlZGF0ZSk7XG4gICAgICAgICAgICBzaW5nbGVUb2RvRHVlZGF0ZS50ZXh0Q29udGVudCA9IG5ld0R1ZWRhdGU7XG4gICAgICAgICAgICBzaW5nbGVUb2RvRHVlZGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZm9ybVNpbmdsZVRvZG9EdWVkYXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0UGFnZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlBbGxUb2Rvc1RvZGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVUb2RvTG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhlVG9kby5zZXRDb21wbGV0ZSgpO1xuICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRpc3BsYXlBbGxUb2Rvcyhwcm9qZWN0KTtcblxuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9KTtcblxuICAgIHNpbmdsZVRvZG9Db250ZW50LmFwcGVuZENoaWxkKHNpbmdsZVRvZG9OYW1lKTtcbiAgICBzaW5nbGVUb2RvQ29udGVudC5hcHBlbmRDaGlsZChmb3JtU2luZ2xlVG9kb05hbWUpO1xuICAgIHNpbmdsZVRvZG9Db250ZW50LmFwcGVuZENoaWxkKHNpbmdsZVRvZG9Qcm9qZWN0KTtcbiAgICBzaW5nbGVUb2RvQ29udGVudC5hcHBlbmRDaGlsZChmb3JtU2luZ2xlVG9kb1Byb2plY3QpO1xuICAgIHNpbmdsZVRvZG9Db250ZW50LmFwcGVuZENoaWxkKHNpbmdsZVRvZG9EdWVkYXRlKTtcbiAgICBzaW5nbGVUb2RvQ29udGVudC5hcHBlbmRDaGlsZChmb3JtU2luZ2xlVG9kb0R1ZWRhdGUpO1xuICAgIHNpbmdsZVRvZG9TdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb0xvZ28pO1xuICAgIHNpbmdsZVRvZG9TdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb0NvbnRlbnQpO1xuICAgIHNpbmdsZVRvZG9TdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gc2luZ2xlVG9kb1N1YkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFRvZG9zKHByb2plY3QpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZlByb2plY3RzW3Byb2plY3RdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XVtpXS5nZXRTdGF0dXMoKSA9PT0gZmFsc2UgJiYgY3VycmVudFByb2plY3RQYWdlID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9EaXNwbGF5KGksIHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVG9kb3NUb2RheSgpIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gbGlzdE9mUHJvamVjdHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRvZG9EYXRlID0gbmV3IERhdGUobGlzdE9mUHJvamVjdHNbcHJvamVjdF1baV0uZ2V0RHVlZGF0ZSgpKS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2RvRGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9EaXNwbGF5KGksIHByb2plY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0T3B0aW9uc1RvZG8oKSB7XG4gICAgZm9ybVRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gbGlzdE9mUHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0KTtcbiAgICAgICAgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgaWYgKHByb2plY3QgPT09IFwiSW5ib3hcIikge1xuICAgICAgICAgICAgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Ub2RvUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtVG9kb1Byb2plY3RPcHRpb24pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0T3B0aW9uc1NpbmdsZVRvZG8oKSB7XG4gICAgY29uc3QgZm9ybVNpbmdsZVRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2luZ2xlLXRvZG8tcHJvamVjdCcpO1xuXG4gICAgaWYgKGZvcm1TaW5nbGVUb2RvUHJvamVjdCkge1xuICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3QudGV4dENvbnRlbnQgID0gJyc7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIGxpc3RPZlByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGZvcm1Ub2RvUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGZvcm1Ub2RvUHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdCk7XG4gICAgICAgIGZvcm1Ub2RvUHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG5cbiAgICAgICAgaWYgKGZvcm1TaW5nbGVUb2RvUHJvamVjdCkge1xuICAgICAgICAgICAgZm9ybVNpbmdsZVRvZG9Qcm9qZWN0LmFwcGVuZENoaWxkKGZvcm1Ub2RvUHJvamVjdE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGxvY2FsU3RvcmFnZSBSRUxBVEVEIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9JZHMnLCB0b2RvSWRzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdE9mUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShsaXN0T2ZQcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzZXRMaXN0T2ZQcm9qZWN0c0FuZFRvZG9zKCkge1xuICAgIHRvZG9JZHMgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9JZHMnKSk7XG4gICAgbGV0IGxpc3RPZlByb2plY3RzSlNPTiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RPZlByb2plY3RzJykpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIGxpc3RPZlByb2plY3RzSlNPTikge1xuICAgICAgICBsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZlByb2plY3RzSlNPTltwcm9qZWN0XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gbGlzdE9mUHJvamVjdHNKU09OW3Byb2plY3RdW2ldW1widG9kb0lkXCJdO1xuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gbGlzdE9mUHJvamVjdHNKU09OW3Byb2plY3RdW2ldW1widG9kb1RpdGxlXCJdO1xuICAgICAgICAgICAgY29uc3QgdG9kb0R1ZWRhdGUgPSBsaXN0T2ZQcm9qZWN0c0pTT05bcHJvamVjdF1baV1bXCJ0b2RvRHVlZGF0ZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gbGlzdE9mUHJvamVjdHNKU09OW3Byb2plY3RdW2ldW1widG9kb1Byb2plY3RcIl07XG4gICAgICAgICAgICBjb25zdCB0b2RvQ29tcGxldGVTdGF0dXMgPSBsaXN0T2ZQcm9qZWN0c0pTT05bcHJvamVjdF1baV1bXCJ0b2RvQ29tcGxldGVTdGF0dXNcIl07XG4gICAgICAgICAgICBhZGRUb2RvKGxpc3RPZlByb2plY3RzLCB0b2RvSWQsIHRvZG9UaXRsZSwgdG9kb0R1ZWRhdGUsIHRvZG9Qcm9qZWN0LCB0b2RvQ29tcGxldGVTdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVBhZ2U7IiwiY29uc3QgVG9kbyA9IChpZCwgdGl0bGUsIGR1ZWRhdGUsIHByb2plY3QsIGNvbXBsZXRlU3RhdHVzKSA9PiB7XG4gICAgY29uc3QgdG9kb0lkID0gaWQ7XG4gICAgbGV0IHRvZG9UaXRsZSA9IHRpdGxlO1xuICAgIGxldCB0b2RvRHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gcHJvamVjdDtcbiAgICBsZXQgdG9kb0NvbXBsZXRlU3RhdHVzID0gY29tcGxldGVTdGF0dXM7XG4gICAgXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB0b2RvSWQ7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0b2RvVGl0bGU7XG4gICAgY29uc3QgZ2V0RHVlZGF0ZSA9ICgpID0+IHRvZG9EdWVkYXRlO1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB0b2RvUHJvamVjdDtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB0b2RvQ29tcGxldGVTdGF0dXM7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHtcbiAgICAgICAgdG9kb1RpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RHVlZGF0ZSA9IG5ld0R1ZWRhdGUgPT4ge1xuICAgICAgICB0b2RvRHVlZGF0ZSA9IG5ld0R1ZWRhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4ge1xuICAgICAgICB0b2RvUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db21wbGV0ZVN0YXR1cyA9IHRydWU7XG4gICAgfSBcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKCkgPT4gYElkOiAke3RvZG9JZH0gVGl0bGU6ICR7dG9kb1RpdGxlfSwgRHVlIGRhdGU6ICR7dG9kb0R1ZWRhdGV9LCBQcm9qZWN0OiAke3RvZG9Qcm9qZWN0fSwgQ29tcGxldGUgc3RhdHVzOiAke3RvZG9Db21wbGV0ZVN0YXR1c31gO1xuICAgIFxuICAgIGNvbnN0IHRvSlNPTiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdG9kb0lkLCB0b2RvVGl0bGUsIHRvZG9EdWVkYXRlLCB0b2RvUHJvamVjdCwgdG9kb0NvbXBsZXRlU3RhdHVzIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGdldElkLFxuICAgICAgICBnZXRUaXRsZSwgXG4gICAgICAgIGdldER1ZWRhdGUsXG4gICAgICAgIGdldFByb2plY3QsXG4gICAgICAgIGdldFN0YXR1cyxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldER1ZWRhdGUsXG4gICAgICAgIHNldFByb2plY3QsXG4gICAgICAgIHNldENvbXBsZXRlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgdG9KU09OXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==