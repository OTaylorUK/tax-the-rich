"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./comps/PageSections/index.js":
/*!*************************************!*\
  !*** ./comps/PageSections/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections */ \"./comps/PageSections/sections/index.js\");\n/* harmony import */ var _utils_globalFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globalFunc */ \"./utils/globalFunc.js\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar resolveSections = function(section) {\n    var Section = _sections__WEBPACK_IMPORTED_MODULE_2__[(0,_utils_globalFunc__WEBPACK_IMPORTED_MODULE_3__.capitalizeString)(section._type)];\n    if (Section) {\n        return Section;\n    }\n    console.error('Cant find section', section);\n    return null;\n};\nvar PageSections = function(param) {\n    var content = param.content;\n    var _this1 = _this;\n    var sections = content.content;\n    if (sections.length == 1) {\n        console.log('only one!!');\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: sections === null || sections === void 0 ? void 0 : sections.map(function(section) {\n            var SectionComponent = resolveSections(section);\n            if (!SectionComponent) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Missing section \",\n                        section._type\n                    ]\n                }, section._type, true, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, _this1));\n            }\n            return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(SectionComponent, _objectSpread({}, section, {\n                key: section._key,\n                __source: {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 12\n                },\n                __self: _this1\n            })));\n        })\n    }, void 0, false));\n};\n_c = PageSections;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageSections);\nvar _c;\n$RefreshReg$(_c, \"PageSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxHQUFLLENBQUNFLGVBQWUsR0FBRyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO0lBQ3JDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHSixzQ0FBaUIsQ0FBQ0MsbUVBQWdCLENBQUNFLE9BQU8sQ0FBQ0UsS0FBSztJQUVoRSxFQUFFLEVBQUVELE9BQU8sRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDQSxPQUFPO0lBQ2hCLENBQUM7SUFFREUsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBbUIsb0JBQUVKLE9BQU87SUFDMUMsTUFBTSxDQUFDLElBQUk7QUFDWixDQUFDO0FBR0QsR0FBSyxDQUFDSyxZQUFZLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOztJQUU3QixHQUFLLENBQVlDLFFBQVEsR0FBS0QsT0FBTyxDQUE3QkEsT0FBTztJQUdmLEVBQUUsRUFBRUMsUUFBUSxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUJMLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLENBQVk7SUFDekIsQ0FBQztJQUNELE1BQU07a0JBRUhGLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLFFBQVEsQ0FBRUcsR0FBRyxDQUFDLFFBQVEsQ0FBUFYsT0FBTyxFQUFLLENBQUM7WUFDNUIsR0FBSyxDQUFDVyxnQkFBZ0IsR0FBR1osZUFBZSxDQUFDQyxPQUFPO1lBRWhELEVBQUUsR0FBR1csZ0JBQWdCLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSw2RUFBRUMsQ0FBRzs7d0JBQXFCLENBQWdCO3dCQUFDWixPQUFPLENBQUNFLEtBQUs7O21CQUE3Q0YsT0FBTyxDQUFDRSxLQUFLOzs7OztZQUMvQixDQUFDO1lBRUQsTUFBTSxvRUFBRVMsZ0JBQWdCLG9CQUFLWCxPQUFPO2dCQUFFYSxHQUFHLEVBQUViLE9BQU8sQ0FBQ2MsSUFBSTs7Ozs7Ozs7UUFDeEQsQ0FBQzs7QUFHSixDQUFDO0tBckJLVCxZQUFZO0FBdUJsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BhZ2VTZWN0aW9ucy9pbmRleC5qcz8xMGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlY3Rpb25Db21wb25lbnRzIGZyb20gJy4vc2VjdGlvbnMnXG5cbmltcG9ydCAge2NhcGl0YWxpemVTdHJpbmd9IGZyb20gJy4uLy4uL3V0aWxzL2dsb2JhbEZ1bmMnO1xuXG5jb25zdCByZXNvbHZlU2VjdGlvbnMgPSAoc2VjdGlvbikgPT4ge1xuXHRjb25zdCBTZWN0aW9uID0gU2VjdGlvbkNvbXBvbmVudHNbY2FwaXRhbGl6ZVN0cmluZyhzZWN0aW9uLl90eXBlKV1cbiAgXG5cdGlmIChTZWN0aW9uKSB7XG5cdCAgcmV0dXJuIFNlY3Rpb25cblx0fVxuICBcblx0Y29uc29sZS5lcnJvcignQ2FudCBmaW5kIHNlY3Rpb24nLCBzZWN0aW9uKVxuXHRyZXR1cm4gbnVsbFxufVxuICBcblxuY29uc3QgUGFnZVNlY3Rpb25zID0gKHtjb250ZW50fSkgPT4ge1xuXG5cdGNvbnN0IHsgY29udGVudDogc2VjdGlvbnMgfSA9IGNvbnRlbnQ7XG5cdFxuXG5cdGlmIChzZWN0aW9ucy5sZW5ndGggPT0gMSkge1xuXHRcdGNvbnNvbGUubG9nKCdvbmx5IG9uZSEhJyk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ID5cblx0XHRcdHtzZWN0aW9ucz8ubWFwKChzZWN0aW9uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IFNlY3Rpb25Db21wb25lbnQgPSByZXNvbHZlU2VjdGlvbnMoc2VjdGlvbilcblxuXHRcdFx0XHRpZiAoIVNlY3Rpb25Db21wb25lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e3NlY3Rpb24uX3R5cGV9Pk1pc3Npbmcgc2VjdGlvbiB7c2VjdGlvbi5fdHlwZX08L2Rpdj5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiA8U2VjdGlvbkNvbXBvbmVudCB7Li4uc2VjdGlvbn0ga2V5PXtzZWN0aW9uLl9rZXl9IC8+XG5cdFx0XHR9KX1cblx0XHQ8Lz5cblx0KVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlY3Rpb25zOyJdLCJuYW1lcyI6WyJTZWN0aW9uQ29tcG9uZW50cyIsImNhcGl0YWxpemVTdHJpbmciLCJyZXNvbHZlU2VjdGlvbnMiLCJzZWN0aW9uIiwiU2VjdGlvbiIsIl90eXBlIiwiY29uc29sZSIsImVycm9yIiwiUGFnZVNlY3Rpb25zIiwiY29udGVudCIsInNlY3Rpb25zIiwibGVuZ3RoIiwibG9nIiwibWFwIiwiU2VjdGlvbkNvbXBvbmVudCIsImRpdiIsImtleSIsIl9rZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/PageSections/index.js\n");

/***/ })

});