"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["page"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxTQUFTLFlBQVksYUFBYSxPQUFPLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxVQUFVLE9BQU8sWUFBWSxRQUFRLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix3Q0FBd0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDbHBCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUSxTQUFTLFVBQVUsY0FBYyxZQUFZLGFBQWEsWUFBWSxxQkFBcUIsbUJBQW1CO0FBQzNKO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXZoIDFmciA0dmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzEwcHggNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJzaWRlYmFyIG1haW4tY29udGVudFxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTJENEU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCA0OHB4IDAgNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1sb2dvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaW1nLFxcbi5zaWRlYmFyIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDg5JSkgaHVlLXJvdGF0ZSgxOTdkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTAwJSk7XFxufVxcblxcbi5oZWFkZXItbG9nby1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgXFxufVxcblxcbi5wcm9maWxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjcyQUY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMzBweDtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyLFxcbi50b2RheS1jb250YWluZXIsXFxuLnByb2plY3Qtc3ViLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3QtY29udGFpbmVyICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxufVxcblxcbi5pbmJveC1uYW1lLFxcbi50b2RheS1uYW1lLFxcbi5wcm9qZWN0LW5hbWUsXFxuLmFkZC1wcm9qZWN0LW5hbWUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGN0Y3O1xcbiAgICBncmlkLWFyZWE6IG1haW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNDhweDtcXG59XFxuXFxuLm1haW4tY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG59XFxuXFxuLnNpbmdsZS10b2RvLXN1Yi1jb250YWluZXIsXFxuLmFkZC10b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaW5nbGUtdG9kby1jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRvZG8tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tbmFtZSxcXG4uYWRkLXRvZG8tbmFtZSB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaW5nbGUtdG9kby1kZWxldGUtYnV0dG9uIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnNpbmdsZS10b2RvLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLFxcbi50b2RheS1jb250YWluZXI6aG92ZXIsXFxuLnByb2plY3Qtc3ViLWNvbnRhaW5lcjpob3ZlcixcXG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVyLFxcbi5hZGQtdG9kby1jb250YWluZXI6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uaW5ib3gtbmFtZTpob3ZlcixcXG4udG9kYXktbmFtZTpob3ZlcixcXG4ucHJvamVjdC1uYW1lOmhvdmVyLFxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b246aG92ZXIsIFxcbi5hZGQtcHJvamVjdC1jb250YWluZXI6aG92ZXIsXFxuLmFkZC10b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnNpbmdsZS10b2RvLXN1Yi1jb250YWluZXI6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tbG9nbzpob3ZlcixcXG4uc2luZ2xlLXRvZG8tbmFtZTpob3ZlcixcXG4uc2luZ2xlLXRvZG8tcHJvamVjdDpob3ZlcixcXG4uc2luZ2xlLXRvZG8tZHVlZGF0ZTpob3ZlcixcXG4uc2luZ2xlLXRvZG8tZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogUG9wIFVwIEZvcm0gUmVmZXJlbmNlOiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2pzX3BvcHVwX2Zvcm0uYXNwICovXFxuLmZvcm0tcHJvamVjdC1wb3B1cCxcXG4uZm9ybS10b2RvLXBvcHVwLFxcbi5mb3JtLXNpbmdsZS10b2RvLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0Y5RjdGNztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY3Rjc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImlucHV0IGlucHV0XFxcIlxcbiAgICBcXFwiYWRkIGNhbmNlbFxcXCI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI0RCRTJFRjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBncmlkLWFyZWE6IGlucHV0O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWU6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuLFxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIC5idG4tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIC5idG4ge1xcbiAgICBncmlkLWFyZWE6IGFkZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIC5idG4tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBncmlkLWFyZWE6IGNhbmNlbDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY3Rjc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hbWUgbmFtZVxcXCJcXG4gICAgXFxcImR1ZWRhdGUgZHVlZGF0ZVxcXCJcXG4gICAgXFxcInByb2plY3RzIHByb2plY3RzXFxcIlxcbiAgICBcXFwidG9kb0FkZCB0b2RvQ2FuY2VsXFxcIjtcXG59XFxuXFxuI3RvZG8tbmFtZSxcXG4jdG9kby1wcm9qZWN0LFxcbiN0b2RvLWR1ZWRhdGUsXFxuLmZvcm0tc2luZ2xlLXRvZG8tbmFtZSxcXG4uZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0LFxcbi5mb3JtLXNpbmdsZS10b2RvLWR1ZWRhdGUge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNEQkUyRUY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jdG9kby1uYW1lOmZvY3VzLFxcbiN0b2RvLXByb2plY3Q6Zm9jdXMsXFxuI3RvZG8tZHVlZGF0ZTpmb2N1cyxcXG4uZm9ybS1zaW5nbGUtdG9kby1uYW1lOmZvY3VzLFxcbi5mb3JtLXNpbmdsZS10b2RvLXByb2plY3Q6Zm9jdXMsXFxuLmZvcm0tc2luZ2xlLXRvZG8tZHVlZGF0ZTpmb2N1cyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0b2RvLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxufVxcblxcbiN0b2RvLWR1ZWRhdGUge1xcbiAgICBncmlkLWFyZWE6IGR1ZWRhdGU7XFxufVxcblxcbiN0b2RvLXByb2plY3Qge1xcbiAgICBncmlkLWFyZWE6IHByb2plY3RzO1xcbn1cXG5cXG4uZm9ybS10b2RvLWNvbnRhaW5lciAuYnRuLFxcbi5mb3JtLXRvZG8tY29udGFpbmVyIC5idG4tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5mb3JtLXRvZG8tY29udGFpbmVyIC5idG4ge1xcbiAgICBncmlkLWFyZWE6IHRvZG9BZGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZm9ybS10b2RvLWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvQ2FuY2VsO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uZm9ybS10b2RvLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9ybS1zaW5nbGUtdG9kby1uYW1lLFxcbi5mb3JtLXNpbmdsZS10b2RvLXByb2plY3QsXFxuLmZvcm0tc2luZ2xlLXRvZG8tZHVlZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5mb3JtLXNpbmdsZS10b2RvLW5hbWUge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQkUyRUY7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtHQUErRztJQUMvRyxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEM7OzttQkFHZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLDhGQUE4RjtBQUNsRzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOzs7O0lBSUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOzs7O0lBSUksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOzs7OztJQUtJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7OztJQU1JLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7Ozs7SUFLSSxlQUFlO0FBQ25COztBQUVBLG1GQUFtRjtBQUNuRjs7O0lBR0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUI7O2dCQUVZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qjs7Ozt3QkFJb0I7QUFDeEI7O0FBRUE7Ozs7OztJQU1JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7Ozs7O0lBTUksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7O0lBR0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJTZWdvZSBVSVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgRW1vamlcXFwiO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDV2aCAxZnIgNHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMxMHB4IDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwic2lkZWJhciBtYWluLWNvbnRlbnRcXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyRDRFO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgNDhweCAwIDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItbG9nby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGltZyxcXG4uc2lkZWJhciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDMlKSBzYXR1cmF0ZSg4OSUpIGh1ZS1yb3RhdGUoMTk3ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMCUpO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxcbn1cXG5cXG4ucHJvZmlsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y3MkFGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lcixcXG4udG9kYXktY29udGFpbmVyLFxcbi5wcm9qZWN0LXN1Yi1jb250YWluZXIsXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lciAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xcbn1cXG5cXG4uaW5ib3gtbmFtZSxcXG4udG9kYXktbmFtZSxcXG4ucHJvamVjdC1uYW1lLFxcbi5hZGQtcHJvamVjdC1uYW1lIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjdGNztcXG4gICAgZ3JpZC1hcmVhOiBtYWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDQ4cHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogODAwcHg7XFxufVxcblxcbi5zaW5nbGUtdG9kby1zdWItY29udGFpbmVyLFxcbi5hZGQtdG9kby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10b2RvLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuXFxuLnNpbmdsZS10b2RvLW5hbWUsXFxuLmFkZC10b2RvLW5hbWUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zaW5nbGUtdG9kby1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lcjpob3ZlcixcXG4udG9kYXktY29udGFpbmVyOmhvdmVyLFxcbi5wcm9qZWN0LXN1Yi1jb250YWluZXI6aG92ZXIsXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcixcXG4uYWRkLXRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmluYm94LW5hbWU6aG92ZXIsXFxuLnRvZGF5LW5hbWU6aG92ZXIsXFxuLnByb2plY3QtbmFtZTpob3ZlcixcXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uOmhvdmVyLCBcXG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVyLFxcbi5hZGQtdG9kby1jb250YWluZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5zaW5nbGUtdG9kby1zdWItY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLnNpbmdsZS10b2RvLWxvZ286aG92ZXIsXFxuLnNpbmdsZS10b2RvLW5hbWU6aG92ZXIsXFxuLnNpbmdsZS10b2RvLXByb2plY3Q6aG92ZXIsXFxuLnNpbmdsZS10b2RvLWR1ZWRhdGU6aG92ZXIsXFxuLnNpbmdsZS10b2RvLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFBvcCBVcCBGb3JtIFJlZmVyZW5jZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19qc19wb3B1cF9mb3JtLmFzcCAqL1xcbi5mb3JtLXByb2plY3QtcG9wdXAsXFxuLmZvcm0tdG9kby1wb3B1cCxcXG4uZm9ybS1zaW5nbGUtdG9kby1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGOUY3Rjc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGN0Y3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJpbnB1dCBpbnB1dFxcXCJcXG4gICAgXFxcImFkZCBjYW5jZWxcXFwiO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNEQkUyRUY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lOmZvY3VzIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250YWluZXIgLmJ0bixcXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBhZGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZ3JpZC1hcmVhOiBjYW5jZWw7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mb3JtLXRvZG8tY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGN0Y3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYW1lIG5hbWVcXFwiXFxuICAgIFxcXCJkdWVkYXRlIGR1ZWRhdGVcXFwiXFxuICAgIFxcXCJwcm9qZWN0cyBwcm9qZWN0c1xcXCJcXG4gICAgXFxcInRvZG9BZGQgdG9kb0NhbmNlbFxcXCI7XFxufVxcblxcbiN0b2RvLW5hbWUsXFxuI3RvZG8tcHJvamVjdCxcXG4jdG9kby1kdWVkYXRlLFxcbi5mb3JtLXNpbmdsZS10b2RvLW5hbWUsXFxuLmZvcm0tc2luZ2xlLXRvZG8tcHJvamVjdCxcXG4uZm9ybS1zaW5nbGUtdG9kby1kdWVkYXRlIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjREJFMkVGO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuI3RvZG8tbmFtZTpmb2N1cyxcXG4jdG9kby1wcm9qZWN0OmZvY3VzLFxcbiN0b2RvLWR1ZWRhdGU6Zm9jdXMsXFxuLmZvcm0tc2luZ2xlLXRvZG8tbmFtZTpmb2N1cyxcXG4uZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0OmZvY3VzLFxcbi5mb3JtLXNpbmdsZS10b2RvLWR1ZWRhdGU6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdG9kby1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcbn1cXG5cXG4jdG9kby1kdWVkYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkdWVkYXRlO1xcbn1cXG5cXG4jdG9kby1wcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgLmJ0bixcXG4uZm9ybS10b2RvLWNvbnRhaW5lciAuYnRuLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZm9ybS10b2RvLWNvbnRhaW5lciAuYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvQWRkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgLmJ0bi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGdyaWQtYXJlYTogdG9kb0NhbmNlbDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmZvcm0tdG9kby1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZvcm0tc2luZ2xlLXRvZG8tbmFtZSxcXG4uZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0LFxcbi5mb3JtLXNpbmdsZS10b2RvLWR1ZWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZm9ybS1zaW5nbGUtdG9kby1uYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJFMkVGO1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IGdlbmVyYXRlUGFnZSBmcm9tICcuL3BhZ2UuanMnO1xuXG5mdW5jdGlvbiB0b2RvRmluZGVyKGxpc3RPZlByb2plY3RzLCBwcm9qZWN0LCBpZCkge1xuICAgIGxldCB0b2RvSWR4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZlByb2plY3RzW3Byb2plY3RdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XVtpXS5nZXRJZCgpID09PSBOdW1iZXIoaWQpKSB7XG4gICAgICAgICAgICB0b2RvSWR4ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9kb0lkeDtcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyhsaXN0T2ZQcm9qZWN0cywgaWQsIHRpdGxlLCBkdWVkYXRlID0gJycsIHByb2plY3QgPSAnSW5ib3gnLCBjb21wbGV0ZVN0YXR1cyA9IGZhbHNlKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvZG8oaWQsIHRpdGxlLCBkdWVkYXRlLCBwcm9qZWN0LCBjb21wbGV0ZVN0YXR1cyk7XG4gICAgbGlzdE9mUHJvamVjdHNbcHJvamVjdF0ucHVzaChuZXdUb2RvKTtcblxuICAgIHJldHVybiBuZXdUb2RvO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGxpc3RPZlByb2plY3RzLCBwcm9qZWN0LCBpZCkge1xuICAgIGxldCB0b2RvSWR4ID0gdG9kb0ZpbmRlcihsaXN0T2ZQcm9qZWN0cywgcHJvamVjdCwgaWQpO1xuXG4gICAgbGV0IHJlbW92ZWRUb2RvID0gbGlzdE9mUHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKHRvZG9JZHgsIDEpO1xuICAgIHJldHVybiByZW1vdmVkVG9kbztcbn1cblxuZnVuY3Rpb24gY3VycmVudFBhZ2UoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZVBhZ2UoKSk7XG59XG5cbmN1cnJlbnRQYWdlKCk7XG5cbmV4cG9ydCB7XG4gICAgYWRkVG9kbyxcbiAgICBkZWxldGVUb2RvXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUGx1c01pbmlTdmcgZnJvbSAnLi9pbWFnZXMvYWRkX21pbmkuc3ZnJztcbmltcG9ydCBEb25lQWxsU3ZnIGZyb20gJy4vaW1hZ2VzL2RvbmVfYWxsLnN2Zyc7XG5pbXBvcnQgUHJvZmlsZVN2ZyBmcm9tICcuL2ltYWdlcy9hY2NvdW50X2NpcmNsZS5zdmcnO1xuaW1wb3J0IEluYm94U3ZnIGZyb20gJy4vaW1hZ2VzL2luYm94LnN2Zyc7XG5pbXBvcnQgTGlzdEFsdFN2ZyBmcm9tICcuL2ltYWdlcy9saXN0X2FsdC5zdmcnO1xuaW1wb3J0IENoZWNrQm94U3ZnIGZyb20gJy4vaW1hZ2VzL2NoZWNrX2JveC5zdmcnO1xuaW1wb3J0IENsb3NlU3ZnIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgVG9kYXlTdmcgZnJvbSAnLi9pbWFnZXMvdG9kYXkuc3ZnJztcbmltcG9ydCB7IGFkZFRvZG8sIGRlbGV0ZVRvZG8gfSBmcm9tICcuL2luZGV4LmpzJztcblxubGV0IHRvZG9JZHMgPSAwO1xubGV0IGxpc3RPZlByb2plY3RzID0geyBcIkluYm94XCI6IFtdIH07XG5sZXQgY3VycmVudFByb2plY3RQYWdlID0gXCJJbmJveFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaGVhZGVyTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaGVhZGVyTG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHByb2ZpbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgc2lkZWJhck1lbnVNYWluPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNpZGViYXJNZW51UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGluYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbmJveExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGluYm94TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRvZGF5TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgdG9kYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYWRkUHJvamVjdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGFkZFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNpbmdsZVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFkZFRvZG9Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBhZGRUb2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuaGVhZGVyTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nby1jb250YWluZXInKTtcbmhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbmhlYWRlckxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvLW5hbWUnKTtcbnByb2ZpbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1jb250YWluZXInKTtcbnByb2ZpbGVQaWMuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1waWMnKTtcblxuc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5zaWRlYmFyTWVudU1haW4uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1tZW51LW1haW4nKTtcbnNpZGViYXJNZW51UHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1tZW51LXByb2plY3RzJyk7XG5pbmJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmJveC1jb250YWluZXInKTtcbmluYm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnSW5ib3gnKTtcbmluYm94TG9nby5jbGFzc0xpc3QuYWRkKCdpbmJveC1sb2dvJyk7XG5pbmJveE5hbWUuY2xhc3NMaXN0LmFkZCgnaW5ib3gtbmFtZScpO1xudG9kYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kYXktY29udGFpbmVyJyk7XG50b2RheUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1RvZGF5Jyk7XG50b2RheUxvZ28uY2xhc3NMaXN0LmFkZCgndG9kYXktbG9nbycpO1xudG9kYXlOYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LW5hbWUnKTtcbnNpZGViYXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRpdGxlJyk7XG5wcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG5hZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuYWRkUHJvamVjdExvZ28uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtbG9nbycpO1xuYWRkUHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtbmFtZScpO1xuXG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbm1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlJyk7XG50b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG5zaW5nbGVUb2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10b2RvLWNvbnRhaW5lcicpO1xuYWRkVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1jb250YWluZXInKTtcbmFkZFRvZG9Mb2dvLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWxvZ28nKTtcbmFkZFRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLW5hbWUnKTtcblxuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG5oZWFkZXJMb2dvLnNyYyA9IERvbmVBbGxTdmc7XG5oZWFkZXJMb2dvTmFtZS50ZXh0Q29udGVudCA9IFwiT2RpbiBUb2RvIExpc3RcIjtcbnByb2ZpbGVQaWMuc3JjID0gUHJvZmlsZVN2ZztcblxuaW5ib3hMb2dvLnNyYyA9IEluYm94U3ZnO1xuaW5ib3hOYW1lLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xudG9kYXlMb2dvLnNyYyA9IFRvZGF5U3ZnO1xudG9kYXlOYW1lLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuYWRkUHJvamVjdExvZ28uc3JjID0gUGx1c01pbmlTdmc7XG5hZGRQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblxubWFpblRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RQYWdlO1xuYWRkVG9kb0xvZ28uc3JjID0gUGx1c01pbmlTdmc7XG5hZGRUb2RvTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuZm9vdGVyLmlubmVySFRNTCA9ICdCeSB5b3VycyB0cnVseSwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21yYWZmaWFcIj4gbXJhZmZpYTwvYT4nO1xuXG5oZWFkZXJMb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuaGVhZGVyTG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvTmFtZSk7XG5wcm9maWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ZpbGVQaWMpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ29Db250YWluZXIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGVDb250YWluZXIpO1xuXG5jb25zdCBmb3JtUHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBmb3JtUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgZm9ybVByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgZm9ybVByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5mb3JtUHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcHJvamVjdC1wb3B1cCcpO1xuZm9ybVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1wcm9qZWN0LWNvbnRhaW5lcicpO1xuZm9ybVByb2plY3RTdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG5mb3JtUHJvamVjdENhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG4tY2FuY2VsJyk7XG5cbmZvcm1Qcm9qZWN0UG9wVXAuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0UG9wVXBGb3JtJyk7XG5mb3JtUHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmZvcm1Qcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpO1xuZm9ybVByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0LW5hbWUnKTtcbmZvcm1Qcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuZm9ybVByb2plY3RTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbmZvcm1Qcm9qZWN0Q2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuZm9ybVByb2plY3ROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcblxuZm9ybVByb2plY3RTdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuZm9ybVByb2plY3RDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG5mb3JtUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJvamVjdE5hbWUpO1xuZm9ybVByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByb2plY3RTdWJtaXQpO1xuZm9ybVByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByb2plY3RDYW5jZWwpO1xuZm9ybVByb2plY3RQb3BVcC5hcHBlbmRDaGlsZChmb3JtUHJvamVjdENvbnRhaW5lcik7XG5cbmluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94TG9nbyk7XG5pbmJveENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveE5hbWUpO1xudG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlMb2dvKTtcbnRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5TmFtZSk7XG5hZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RMb2dvKTtcbmFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdE5hbWUpO1xuc2lkZWJhck1lbnVNYWluLmFwcGVuZENoaWxkKGluYm94Q29udGFpbmVyKTtcbnNpZGViYXJNZW51TWFpbi5hcHBlbmRDaGlsZCh0b2RheUNvbnRhaW5lcik7XG5zaWRlYmFyTWVudVByb2plY3RzLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSk7XG5zaWRlYmFyTWVudVByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuc2lkZWJhck1lbnVQcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcbnNpZGViYXJNZW51UHJvamVjdHMuYXBwZW5kQ2hpbGQoZm9ybVByb2plY3RQb3BVcCk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51TWFpbik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51UHJvamVjdHMpO1xuXG5jb25zdCBmb3JtVG9kb1BvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBmb3JtVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgZm9ybVRvZG9EdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgZm9ybVRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbmNvbnN0IGZvcm1Ub2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGZvcm1Ub2RvQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuZm9ybVRvZG9Qb3BVcC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRvZG8tcG9wdXAnKTtcbmZvcm1Ub2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdG9kby1jb250YWluZXInKTtcbmZvcm1Ub2RvU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuZm9ybVRvZG9DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWNhbmNlbCcpO1xuXG5mb3JtVG9kb1BvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb1BvcFVwRm9ybScpO1xuZm9ybVRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5mb3JtVG9kb05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIG5hbWUnKTtcbmZvcm1Ub2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kby1uYW1lJyk7XG5mb3JtVG9kb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW5hbWUnKTtcbmZvcm1Ub2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuZm9ybVRvZG9EdWVkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvLWR1ZWRhdGUnKTs7XG5mb3JtVG9kb0R1ZWRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWR1ZWRhdGUnKTtcbmZvcm1Ub2RvUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kby1wcm9qZWN0Jyk7XG5mb3JtVG9kb1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXByb2plY3QnKTtcbmZvcm1Ub2RvU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5mb3JtVG9kb0NhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbmZvcm1Ub2RvTmFtZS5yZXF1aXJlZCA9IHRydWU7XG5cbmZvcm1Ub2RvU3VibWl0LnRleHRDb250ZW50ID0gXCJBZGRcIjtcbmZvcm1Ub2RvQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuZm9ybVRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvZG9OYW1lKTtcbmZvcm1Ub2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub2RvRHVlZGF0ZSk7XG5mb3JtVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVG9kb1Byb2plY3QpO1xuZm9ybVRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvZG9TdWJtaXQpO1xuZm9ybVRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvZG9DYW5jZWwpO1xuZm9ybVRvZG9Qb3BVcC5hcHBlbmRDaGlsZChmb3JtVG9kb0NvbnRhaW5lcik7XG5cbmFkZFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0xvZ28pO1xuYWRkVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvTmFtZSk7XG50b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG50b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZVRvZG9Db250YWluZXIpO1xudG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQ29udGFpbmVyKTtcbnRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvZG9Qb3BVcCk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbi8vIE1BSU4gRlVOQ1RJT05cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYWdlKCkge1xuICAgIGFkZFByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZm9ybVByb2plY3RQb3BVcC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBmb3JtUHJvamVjdFBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtUHJvamVjdFBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3JtUHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvcm1Qcm9qZWN0Q29udGFpbmVyLnJlc2V0KClcbiAgICAgICAgZm9ybVByb2plY3RQb3BVcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBmb3JtUHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGUudGFyZ2V0Wydwcm9qZWN0LW5hbWUnXS52YWx1ZTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobGlzdE9mUHJvamVjdHMpLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IGhhdmUgbW9yZSB0aGFuIDUgcHJvamVjdHMhXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RUaXRsZSBpbiBsaXN0T2ZQcm9qZWN0cykge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgY2FuJ3QgaGF2ZSB0d28gb3IgbW9yZSBwcm9qZWN0cyB3aXRoIHRoZSBzYW1lIG5hbWUhIChjYXNlIHNlbnNpdGl2ZSlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0T2ZQcm9qZWN0c1twcm9qZWN0VGl0bGVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZVByb2plY3RPcHRpb25zVG9kbygpO1xuICAgICAgICBnZW5lcmF0ZVByb2plY3RPcHRpb25zU2luZ2xlVG9kbygpO1xuXG4gICAgICAgIGZvcm1Qcm9qZWN0Q29udGFpbmVyLnJlc2V0KClcbiAgICAgICAgZm9ybVByb2plY3RQb3BVcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG5cbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICBhZGRUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGZvcm1Ub2RvUG9wVXAuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgZm9ybVRvZG9Qb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybVRvZG9Qb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9ybVRvZG9DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb3JtVG9kb0NvbnRhaW5lci5yZXNldCgpXG4gICAgICAgIGZvcm1Ub2RvUG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgZm9ybVRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBlLnRhcmdldFsndG9kby1uYW1lJ10udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZS50YXJnZXRbJ3RvZG8tcHJvamVjdCddLnZhbHVlO1xuICAgICAgICBsZXQgdG9kb0R1ZWRhdGUgPSBlLnRhcmdldFsndG9kby1kdWVkYXRlJ10udmFsdWU7XG4gICAgICAgIGlmICh0b2RvRHVlZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRvZG9EdWVkYXRlID0gXCJObyBkYXRlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb2RvKGxpc3RPZlByb2plY3RzLCB0b2RvSWRzLCB0b2RvVGl0bGUsIHRvZG9EdWVkYXRlLCB0b2RvUHJvamVjdCk7XG4gICAgICAgIHRvZG9JZHMrKztcblxuICAgICAgICBmb3JtVG9kb0NvbnRhaW5lci5yZXNldCgpXG4gICAgICAgIGZvcm1Ub2RvUG9wVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRpc3BsYXlBbGxUb2RvcyhjdXJyZW50UHJvamVjdFBhZ2UpO1xuXG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgaW5ib3hOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBcIkluYm94XCI7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0UGFnZSA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRpc3BsYXlBbGxUb2Rvcyhwcm9qZWN0VGl0bGUpO1xuICAgIH0pO1xuXG4gICAgdG9kYXlOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBcIlRvZGF5XCI7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0UGFnZSA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRpc3BsYXlBbGxUb2Rvc1RvZGF5KHByb2plY3RUaXRsZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0T2ZQcm9qZWN0cycpKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHNldExpc3RPZlByb2plY3RzQW5kVG9kb3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldExpc3RPZlByb2plY3RzQW5kVG9kb3MoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDQU5cXCdUIFVTRSBsb2NhbFN0b3JhZ2U/IEJSVUgnKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QWxsUHJvamVjdHMoKTtcbiAgICBkaXNwbGF5QWxsVG9kb3MoY3VycmVudFByb2plY3RQYWdlKTtcbiAgICBnZW5lcmF0ZVByb2plY3RPcHRpb25zVG9kbygpO1xuICAgIGdlbmVyYXRlUHJvamVjdE9wdGlvbnNTaW5nbGVUb2RvKCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBQUk9KRUNUUyBSRUxBVEVEIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdFN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwcm9qZWN0U3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3ViLWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RMb2dvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbG9nbycpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnV0dG9uJyk7XG5cbiAgICBwcm9qZWN0U3ViQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0KTtcblxuICAgIHByb2plY3RMb2dvLnNyYyA9IExpc3RBbHRTdmc7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgIHByb2plY3REZWxldGVCdXR0b24uc3JjID0gQ2xvc2VTdmc7XG5cbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIHByb2plY3RTdWJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdFN1YkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCBcXFwiXCIgKyBwcm9qZWN0VGl0bGUgKyBcIlxcXCI/XCIpO1xuICAgICAgICBpZiAoY29uZmlybURlbGV0ZSkge1xuICAgICAgICAgICAgZGVsZXRlIGxpc3RPZlByb2plY3RzW3Byb2plY3RUaXRsZV07XG5cbiAgICAgICAgICAgIGdlbmVyYXRlUHJvamVjdE9wdGlvbnNUb2RvKCk7XG4gICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RPcHRpb25zU2luZ2xlVG9kbygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBkaXNwbGF5QWxsUHJvamVjdHMoKTtcblxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICBjdXJyZW50UHJvamVjdFBhZ2UgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkaXNwbGF5QWxsVG9kb3MocHJvamVjdFRpdGxlKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExvZ28pO1xuICAgIHByb2plY3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gcHJvamVjdFN1YkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFByb2plY3RzKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhsaXN0T2ZQcm9qZWN0cykubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gbGlzdE9mUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ICE9PSBcIkluYm94XCIpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3REaXNwbGF5KHByb2plY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVE9ET1MgUkVMQVRFRCBGVU5DVElPTlNcblxuZnVuY3Rpb24gY3JlYXRlVG9kb0Rpc3BsYXkodGFza0lkeCwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRoZVRvZG8gPSBsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XVt0YXNrSWR4XTtcblxuICAgIGNvbnN0IHNpbmdsZVRvZG9TdWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzaW5nbGVUb2RvTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHNpbmdsZVRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2luZ2xlVG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzaW5nbGVUb2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpbmdsZVRvZG9EdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgc2luZ2xlVG9kb1N1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdG9kby1zdWItY29udGFpbmVyJyk7XG4gICAgc2luZ2xlVG9kb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRvZG8tY29udGVudCcpO1xuICAgIHNpbmdsZVRvZG9Mb2dvLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10b2RvLWxvZ28nKTtcbiAgICBzaW5nbGVUb2RvTmFtZS5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtdG9kby1uYW1lJyk7XG4gICAgc2luZ2xlVG9kb1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXRvZG8tcHJvamVjdCcpO1xuICAgIHNpbmdsZVRvZG9EdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10b2RvLWR1ZWRhdGUnKTtcbiAgICBzaW5nbGVUb2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS10b2RvLWRlbGV0ZS1idXR0b24nKTtcblxuICAgIHNpbmdsZVRvZG9TdWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoZVRvZG8uZ2V0SWQoKSk7XG5cbiAgICBzaW5nbGVUb2RvTG9nby5zcmMgPSBDaGVja0JveFN2ZztcbiAgICBzaW5nbGVUb2RvTmFtZS50ZXh0Q29udGVudCA9IHRoZVRvZG8uZ2V0VGl0bGUoKTtcbiAgICBzaW5nbGVUb2RvUHJvamVjdC50ZXh0Q29udGVudCA9IHRoZVRvZG8uZ2V0UHJvamVjdCgpO1xuICAgIHNpbmdsZVRvZG9EdWVkYXRlLnRleHRDb250ZW50ID0gdGhlVG9kby5nZXREdWVkYXRlKCk7XG4gICAgc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbi5zcmMgPSBDbG9zZVN2ZztcblxuICAgIHNpbmdsZVRvZG9EZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgZm9ybVNpbmdsZVRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1TaW5nbGVUb2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgZm9ybVNpbmdsZVRvZG9EdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgZm9ybVNpbmdsZVRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2luZ2xlLXRvZG8tbmFtZScpO1xuICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNpbmdsZS10b2RvLXByb2plY3QnKTtcbiAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuY2xhc3NMaXN0LmFkZCgnZm9ybS1zaW5nbGUtdG9kby1kdWVkYXRlJyk7XG5cbiAgICBmb3JtU2luZ2xlVG9kb05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZm9ybVNpbmdsZVRvZG9OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XG4gICAgZm9ybVNpbmdsZVRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzaW5nbGUtdG9kby1uYW1lJyk7XG4gICAgZm9ybVNpbmdsZVRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGVUb2RvLmdldFRpdGxlKCkpO1xuICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2luZ2xlLXRvZG8tcHJvamVjdCcpO1xuICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhlVG9kby5nZXRQcm9qZWN0KCkpO1xuICAgIGZvcm1TaW5nbGVUb2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGZvcm1TaW5nbGVUb2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2luZ2xlLXRvZG8tZHVlZGF0ZScpO1xuICAgIGZvcm1TaW5nbGVUb2RvRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhlVG9kby5nZXREdWVkYXRlKCkpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIGxpc3RPZlByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGZvcm1TaW5nbGVUb2RvUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdCk7XG4gICAgICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtU2luZ2xlVG9kb1Byb2plY3RPcHRpb24pO1xuICAgIH1cblxuICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZm9ybVNpbmdsZVRvZG9Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgc2luZ2xlVG9kb1N1YkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzaW5nbGVUb2RvRGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgICBzaW5nbGVUb2RvU3ViQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2luZ2xlVG9kb0RlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBzaW5nbGVUb2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgY29uc3QgY29uZmlybURlbGV0ZSA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB0YXNrP1wiKTtcbiAgICAgICAgaWYgKGNvbmZpcm1EZWxldGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG8obGlzdE9mUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0UGFnZSwgdG9kb0lkKTtcblxuICAgICAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZGlzcGxheUFsbFRvZG9zKGN1cnJlbnRQcm9qZWN0UGFnZSk7XG5cbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVUb2RvTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2luZ2xlVG9kb05hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb3JtU2luZ2xlVG9kb05hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIGZvcm1TaW5nbGVUb2RvTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIgJiYgZm9ybVNpbmdsZVRvZG9OYW1lLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZm9ybVNpbmdsZVRvZG9OYW1lLnZhbHVlO1xuXG4gICAgICAgICAgICB0aGVUb2RvLnNldFRpdGxlKG5ld1RpdGxlKTtcbiAgICAgICAgICAgIHNpbmdsZVRvZG9OYW1lLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG4gICAgICAgICAgICBzaW5nbGVUb2RvTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZm9ybVNpbmdsZVRvZG9OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHNpbmdsZVRvZG9Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzaW5nbGVUb2RvUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgZm9ybVNpbmdsZVRvZG9Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIiAmJiBmb3JtU2luZ2xlVG9kb1Byb2plY3Quc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGZvcm1TaW5nbGVUb2RvUHJvamVjdC52YWx1ZTtcblxuICAgICAgICAgICAgdGhlVG9kby5zZXRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgc2luZ2xlVG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0O1xuICAgICAgICAgICAgc2luZ2xlVG9kb1Byb2plY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgICAgIGxldCBtb3ZlZFRvZG8gPSBkZWxldGVUb2RvKGxpc3RPZlByb2plY3RzLCBwcm9qZWN0LCB0aGVUb2RvLmdldElkKCkpO1xuICAgICAgICAgICAgYWRkVG9kbyhsaXN0T2ZQcm9qZWN0cywgbW92ZWRUb2RvWzBdLmdldElkKCksIG1vdmVkVG9kb1swXS5nZXRUaXRsZSgpLCBtb3ZlZFRvZG9bMF0uZ2V0RHVlZGF0ZSgpLCBuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0UGFnZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlVG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlBbGxUb2Rvc1RvZGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWxsVG9kb3MoY3VycmVudFByb2plY3RQYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHNpbmdsZVRvZG9EdWVkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzaW5nbGVUb2RvRHVlZGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvcm1TaW5nbGVUb2RvRHVlZGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgZm9ybVNpbmdsZVRvZG9EdWVkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIiAmJiBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICBsZXQgbmV3RHVlZGF0ZSA9IGZvcm1TaW5nbGVUb2RvRHVlZGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChuZXdEdWVkYXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld0R1ZWRhdGUgPSAnTm8gZGF0ZSdcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIHRoZVRvZG8uc2V0RHVlZGF0ZShuZXdEdWVkYXRlKTtcbiAgICAgICAgICAgIHNpbmdsZVRvZG9EdWVkYXRlLnRleHRDb250ZW50ID0gbmV3RHVlZGF0ZTtcbiAgICAgICAgICAgIHNpbmdsZVRvZG9EdWVkYXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBmb3JtU2luZ2xlVG9kb0R1ZWRhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3RQYWdlID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVUb2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgZGlzcGxheUFsbFRvZG9zVG9kYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHNpbmdsZVRvZG9Mb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB0aGVUb2RvLnNldENvbXBsZXRlKCk7XG4gICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZGlzcGxheUFsbFRvZG9zKHByb2plY3QpO1xuXG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgc2luZ2xlVG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb05hbWUpO1xuICAgIHNpbmdsZVRvZG9Db250ZW50LmFwcGVuZENoaWxkKGZvcm1TaW5nbGVUb2RvTmFtZSk7XG4gICAgc2luZ2xlVG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb1Byb2plY3QpO1xuICAgIHNpbmdsZVRvZG9Db250ZW50LmFwcGVuZENoaWxkKGZvcm1TaW5nbGVUb2RvUHJvamVjdCk7XG4gICAgc2luZ2xlVG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb0R1ZWRhdGUpO1xuICAgIHNpbmdsZVRvZG9Db250ZW50LmFwcGVuZENoaWxkKGZvcm1TaW5nbGVUb2RvRHVlZGF0ZSk7XG4gICAgc2luZ2xlVG9kb1N1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVUb2RvTG9nbyk7XG4gICAgc2luZ2xlVG9kb1N1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVUb2RvQ29udGVudCk7XG4gICAgc2luZ2xlVG9kb1N1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVUb2RvRGVsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBzaW5nbGVUb2RvU3ViQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVG9kb3MocHJvamVjdCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9mUHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RPZlByb2plY3RzW3Byb2plY3RdW2ldLmdldFN0YXR1cygpID09PSBmYWxzZSAmJiBjdXJyZW50UHJvamVjdFBhZ2UgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0Rpc3BsYXkoaSwgcHJvamVjdCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxUb2Rvc1RvZGF5KCkge1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBsaXN0T2ZQcm9qZWN0cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZlByb2plY3RzW3Byb2plY3RdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0RhdGUgPSBuZXcgRGF0ZShsaXN0T2ZQcm9qZWN0c1twcm9qZWN0XVtpXS5nZXREdWVkYXRlKCkpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHRvZG9EYXRlID09PSB0b2RheSkge1xuICAgICAgICAgICAgICAgIHNpbmdsZVRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0Rpc3BsYXkoaSwgcHJvamVjdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RPcHRpb25zVG9kbygpIHtcbiAgICBmb3JtVG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBsaXN0T2ZQcm9qZWN0cykge1xuICAgICAgICBjb25zdCBmb3JtVG9kb1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBmb3JtVG9kb1Byb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QpO1xuICAgICAgICBmb3JtVG9kb1Byb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBpZiAocHJvamVjdCA9PT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgICBmb3JtVG9kb1Byb2plY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVRvZG9Qcm9qZWN0LmFwcGVuZENoaWxkKGZvcm1Ub2RvUHJvamVjdE9wdGlvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RPcHRpb25zU2luZ2xlVG9kbygpIHtcbiAgICBjb25zdCBmb3JtU2luZ2xlVG9kb1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zaW5nbGUtdG9kby1wcm9qZWN0Jyk7XG5cbiAgICBpZiAoZm9ybVNpbmdsZVRvZG9Qcm9qZWN0KSB7XG4gICAgICAgIGZvcm1TaW5nbGVUb2RvUHJvamVjdC50ZXh0Q29udGVudCAgPSAnJztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gbGlzdE9mUHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0KTtcbiAgICAgICAgZm9ybVRvZG9Qcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcblxuICAgICAgICBpZiAoZm9ybVNpbmdsZVRvZG9Qcm9qZWN0KSB7XG4gICAgICAgICAgICBmb3JtU2luZ2xlVG9kb1Byb2plY3QuYXBwZW5kQ2hpbGQoZm9ybVRvZG9Qcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gbG9jYWxTdG9yYWdlIFJFTEFURUQgRlVOQ1RJT05TXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0lkcycsIHRvZG9JZHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0T2ZQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGxpc3RPZlByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIHNldExpc3RPZlByb2plY3RzQW5kVG9kb3MoKSB7XG4gICAgdG9kb0lkcyA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0lkcycpKTtcbiAgICBsZXQgbGlzdE9mUHJvamVjdHNKU09OID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdE9mUHJvamVjdHMnKSk7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gbGlzdE9mUHJvamVjdHNKU09OKSB7XG4gICAgICAgIGxpc3RPZlByb2plY3RzW3Byb2plY3RdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9mUHJvamVjdHNKU09OW3Byb2plY3RdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBsaXN0T2ZQcm9qZWN0c0pTT05bcHJvamVjdF1baV1bXCJ0b2RvSWRcIl07XG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBsaXN0T2ZQcm9qZWN0c0pTT05bcHJvamVjdF1baV1bXCJ0b2RvVGl0bGVcIl07XG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlZGF0ZSA9IGxpc3RPZlByb2plY3RzSlNPTltwcm9qZWN0XVtpXVtcInRvZG9EdWVkYXRlXCJdO1xuICAgICAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBsaXN0T2ZQcm9qZWN0c0pTT05bcHJvamVjdF1baV1bXCJ0b2RvUHJvamVjdFwiXTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Db21wbGV0ZVN0YXR1cyA9IGxpc3RPZlByb2plY3RzSlNPTltwcm9qZWN0XVtpXVtcInRvZG9Db21wbGV0ZVN0YXR1c1wiXTtcbiAgICAgICAgICAgIGFkZFRvZG8obGlzdE9mUHJvamVjdHMsIHRvZG9JZCwgdG9kb1RpdGxlLCB0b2RvRHVlZGF0ZSwgdG9kb1Byb2plY3QsIHRvZG9Db21wbGV0ZVN0YXR1cyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUGFnZTsiLCJjb25zdCBUb2RvID0gKGlkLCB0aXRsZSwgZHVlZGF0ZSwgcHJvamVjdCwgY29tcGxldGVTdGF0dXMpID0+IHtcbiAgICBjb25zdCB0b2RvSWQgPSBpZDtcbiAgICBsZXQgdG9kb1RpdGxlID0gdGl0bGU7XG4gICAgbGV0IHRvZG9EdWVkYXRlID0gZHVlZGF0ZTtcbiAgICBsZXQgdG9kb1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIGxldCB0b2RvQ29tcGxldGVTdGF0dXMgPSBjb21wbGV0ZVN0YXR1cztcbiAgICBcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHRvZG9JZDtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRvZG9UaXRsZTtcbiAgICBjb25zdCBnZXREdWVkYXRlID0gKCkgPT4gdG9kb0R1ZWRhdGU7XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHRvZG9Qcm9qZWN0O1xuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHRvZG9Db21wbGV0ZVN0YXR1cztcblxuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4ge1xuICAgICAgICB0b2RvVGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREdWVkYXRlID0gbmV3RHVlZGF0ZSA9PiB7XG4gICAgICAgIHRvZG9EdWVkYXRlID0gbmV3RHVlZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiB7XG4gICAgICAgIHRvZG9Qcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvbXBsZXRlU3RhdHVzID0gdHJ1ZTtcbiAgICB9IFxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoKSA9PiBgSWQ6ICR7dG9kb0lkfSBUaXRsZTogJHt0b2RvVGl0bGV9LCBEdWUgZGF0ZTogJHt0b2RvRHVlZGF0ZX0sIFByb2plY3Q6ICR7dG9kb1Byb2plY3R9LCBDb21wbGV0ZSBzdGF0dXM6ICR7dG9kb0NvbXBsZXRlU3RhdHVzfWA7XG4gICAgXG4gICAgY29uc3QgdG9KU09OID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0b2RvSWQsIHRvZG9UaXRsZSwgdG9kb0R1ZWRhdGUsIHRvZG9Qcm9qZWN0LCB0b2RvQ29tcGxldGVTdGF0dXMgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgZ2V0SWQsXG4gICAgICAgIGdldFRpdGxlLCBcbiAgICAgICAgZ2V0RHVlZGF0ZSxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZ2V0U3RhdHVzLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RHVlZGF0ZSxcbiAgICAgICAgc2V0UHJvamVjdCxcbiAgICAgICAgc2V0Q29tcGxldGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB0b0pTT05cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9