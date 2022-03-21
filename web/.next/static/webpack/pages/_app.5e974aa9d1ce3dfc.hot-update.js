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

/***/ "./comps/Navbar.js":
/*!*************************!*\
  !*** ./comps/Navbar.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./comps/Menu/index.js\");\n\n\n\n\n\nvar _this = undefined;\nvar Navbar = function(param) {\n    var _content = param.content, content = _content === void 0 ? null : _content;\n    if (!content || content === null || !content.hasOwnProperty('value')) return null;\n    var data = content.value[0];\n    var button = data.button, logo = data.logo, menu = data.menu;\n    console.log('data:', data);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"site-nav fixed w-full px-10 py-5 flex flex-row items-center bg-custom-secondary z-50 h-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo flex-none items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    content: logo\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-between flex flex-row flex-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        className: \"flex flex-1 justify-center\",\n                        content: menu\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            content: button\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, _this));\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDRztBQUVFO0FBQ047O0FBRzNCLEdBQUssQ0FBQ0ksTUFBTSxHQUFHLFFBQVEsUUFBZ0IsQ0FBQzt5QkFBdEJDLE9BQU8sRUFBUEEsT0FBTyx5QkFBRyxJQUFJO0lBQy9CLEVBQUUsR0FBR0EsT0FBTyxJQUFJQSxPQUFPLEtBQUssSUFBSSxLQUFLQSxPQUFPLENBQUNDLGNBQWMsQ0FBQyxDQUFPLFNBQUksTUFBTSxDQUFDLElBQUk7SUFFbEYsR0FBSyxDQUFDQyxJQUFJLEdBQUdGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFFNUIsR0FBSyxDQUFHQyxNQUFNLEdBQWlCRixJQUFJLENBQTNCRSxNQUFNLEVBQUVDLElBQUksR0FBV0gsSUFBSSxDQUFuQkcsSUFBSSxFQUFFQyxJQUFJLEdBQUtKLElBQUksQ0FBYkksSUFBSTtJQUcxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFFTixJQUFJO0lBQ3pCLE1BQU0sNkVBQ0pPLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTRGOzt3RkFDekdDLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUE2QjtzR0FDMUNkLDJDQUFNO29CQUFDSSxPQUFPLEVBQUVLLElBQUk7Ozs7Ozs7Ozs7O3dGQUdyQk0sQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQXNEOztnR0FDbkVaLHVDQUFJO3dCQUFDWSxTQUFTLEVBQUMsQ0FBNEI7d0JBQUNWLE9BQU8sRUFBRU0sSUFBSTs7Ozs7O2dHQUN6REssQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQWdCOzhHQUM3QmQsMkNBQU07NEJBQUNJLE9BQU8sRUFBRUksTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUIsQ0FBQztLQXhCS0wsTUFBTTtBQTBCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9OYXZiYXIuanM/YzVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmltcG9ydCBTdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4vTWVudVwiO1xuXG5cbmNvbnN0IE5hdmJhciA9ICh7IGNvbnRlbnQgPSBudWxsIH0pID0+IHtcblx0aWYgKCFjb250ZW50IHx8IGNvbnRlbnQgPT09IG51bGwgfHwgIWNvbnRlbnQuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgKSByZXR1cm4gbnVsbFxuXHRcblx0Y29uc3QgZGF0YSA9IGNvbnRlbnQudmFsdWVbMF1cblxuXHRjb25zdCB7IGJ1dHRvbiwgbG9nbywgbWVudSB9ID0gZGF0YTtcblx0XG5cblx0Y29uc29sZS5sb2coJ2RhdGE6JywgZGF0YSk7XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJzaXRlLW5hdiBmaXhlZCB3LWZ1bGwgcHgtMTAgcHktNSAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgYmctY3VzdG9tLXNlY29uZGFyeSB6LTUwIGgtMjBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nbyBmbGV4LW5vbmUgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxCdXR0b24gY29udGVudD17bG9nb30gLz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktYmV0d2VlbiBmbGV4IGZsZXgtcm93IGZsZXgtYXV0byBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PE1lbnUgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXJcIiBjb250ZW50PXttZW51fSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ub25lXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBjb250ZW50PXtidXR0b259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XG5cdFx0PC9uYXY+XG5cdCk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIgOyJdLCJuYW1lcyI6WyJMaW5rIiwiQnV0dG9uIiwiU3ZnIiwiTWVudSIsIk5hdmJhciIsImNvbnRlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImRhdGEiLCJ2YWx1ZSIsImJ1dHRvbiIsImxvZ28iLCJtZW51IiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Navbar.js\n");

/***/ })

});