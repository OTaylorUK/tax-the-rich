"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comps/Footer.js":
/*!*************************!*\
  !*** ./comps/Footer.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./comps/Menu/index.js\");\n\n\nvar _this = undefined;\nvar Footer = function(param) {\n    var _content = param.content, content = _content === void 0 ? null : _content, scroll = param.scroll;\n    if (!content || content === null || !content.hasOwnProperty('value')) return null;\n    var data = content.value[0];\n    var lhs = data.lhs, middle = data.middle, rhs = data.rhs;\n    var footerPos = 'bottom-[0]';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"fixed w-full py-10 py-5 flex items-center justify-between bg-custom-secondary z-50 \".concat(footerPos, \" transition-[bottom] duration-300\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n                content: lhs\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Footer.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_1__.Stacked, {\n                content: middle\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Footer.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n                content: rhs\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Footer.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Footer.js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this));\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Gb290ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7O0FBRXBDLEdBQUssQ0FBQ0UsTUFBTSxHQUFHLFFBQVEsUUFBd0IsQ0FBQzt5QkFBOUJDLE9BQU8sRUFBUEEsT0FBTyx5QkFBRyxJQUFJLGFBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUV2QyxFQUFFLEdBQUdELE9BQU8sSUFBSUEsT0FBTyxLQUFLLElBQUksS0FBS0EsT0FBTyxDQUFDRSxjQUFjLENBQUMsQ0FBTyxTQUFJLE1BQU0sQ0FBQyxJQUFJO0lBRWxGLEdBQUssQ0FBQ0MsSUFBSSxHQUFHSCxPQUFPLENBQUNJLEtBQUssQ0FBQyxDQUFDO0lBRTVCLEdBQUssQ0FBR0MsR0FBRyxHQUFrQkYsSUFBSSxDQUF6QkUsR0FBRyxFQUFFQyxNQUFNLEdBQVVILElBQUksQ0FBcEJHLE1BQU0sRUFBRUMsR0FBRyxHQUFLSixJQUFJLENBQVpJLEdBQUc7SUFHeEIsR0FBRyxDQUFDQyxTQUFTLEdBQUcsQ0FBWTtJQUk1QixNQUFNLDZFQUNKQyxDQUFNO1FBQUNDLFNBQVMsRUFBRyxDQUFtRixxRkFBWSxNQUFpQyxDQUEzQ0YsU0FBUyxFQUFDLENBQWlDOzt3RkFDbEpYLHVDQUFJO2dCQUFDRyxPQUFPLEVBQUVLLEdBQUc7Ozs7Ozt3RkFDakJQLDBDQUFPO2dCQUFDRSxPQUFPLEVBQUVNLE1BQU07Ozs7Ozt3RkFDdkJULHVDQUFJO2dCQUFDRyxPQUFPLEVBQUVPLEdBQUc7Ozs7Ozs7Ozs7OztBQUdyQixDQUFDO0tBcEJLUixNQUFNO0FBc0JaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL0Zvb3Rlci5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudSwgU3RhY2tlZH0gZnJvbSBcIi4vTWVudVwiO1xuXG5jb25zdCBGb290ZXIgPSAoeyBjb250ZW50ID0gbnVsbCwgc2Nyb2xsIH0pID0+IHtcblxuXHRpZiAoIWNvbnRlbnQgfHwgY29udGVudCA9PT0gbnVsbCB8fCAhY29udGVudC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSApIHJldHVybiBudWxsXG5cblx0Y29uc3QgZGF0YSA9IGNvbnRlbnQudmFsdWVbMF1cblxuXHRjb25zdCB7IGxocywgbWlkZGxlLCByaHMgfSA9IGRhdGE7XG5cblxuXHRsZXQgZm9vdGVyUG9zID0gJ2JvdHRvbS1bMF0nXG5cblxuXG5cdHJldHVybiAoXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9e2BmaXhlZCB3LWZ1bGwgcHktMTAgcHktNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctY3VzdG9tLXNlY29uZGFyeSB6LTUwICR7Zm9vdGVyUG9zfSB0cmFuc2l0aW9uLVtib3R0b21dIGR1cmF0aW9uLTMwMGB9PlxuXHRcdFx0PE1lbnUgY29udGVudD17bGhzfSAvPlxuXHRcdFx0PFN0YWNrZWQgY29udGVudD17bWlkZGxlfSAvPlxuXHRcdFx0PE1lbnUgY29udGVudD17cmhzfSAvPlxuXHRcdDwvZm9vdGVyPlxuXHQpO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIDsiXSwibmFtZXMiOlsiTWVudSIsIlN0YWNrZWQiLCJGb290ZXIiLCJjb250ZW50Iiwic2Nyb2xsIiwiaGFzT3duUHJvcGVydHkiLCJkYXRhIiwidmFsdWUiLCJsaHMiLCJtaWRkbGUiLCJyaHMiLCJmb290ZXJQb3MiLCJmb290ZXIiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Footer.js\n");

/***/ })

});