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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PortableContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortableContent */ \"./comps/PortableContent/index.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./comps/Menu/index.js\");\n\n\n\n\n\nvar _this = undefined;\nvar Navbar = function(param) {\n    var _content = param.content, content = _content === void 0 ? null : _content, scroll = param.scroll;\n    if (!content || content === null || !content.hasOwnProperty('value')) return null;\n    var data = content.value[0];\n    var button = data.button, logo = data.logo, menu = data.menu;\n    var navPos = ' ';\n    if (scroll === 'up') {\n        navPos = '-top-20';\n    }\n    console.log('navPos:', navPos);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"site-nav fixed w-full px-10 py-5  flex flex-row items-center bg-custom-secondary z-50 h-20 \".concat(navPos, \" transition-[top]\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo flex-none items-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableContent__WEBPACK_IMPORTED_MODULE_2__.PortableButton, {\n                    content: logo\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-between flex flex-row flex-auto items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        className: \"flex flex-1 justify-center\",\n                        content: menu\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableContent__WEBPACK_IMPORTED_MODULE_2__.PortableButton, {\n                            content: button\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Navbar.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, _this));\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDc0I7QUFFakI7QUFDTjs7QUFHM0IsR0FBSyxDQUFDSSxNQUFNLEdBQUcsUUFBUSxRQUF3QixDQUFDO3lCQUE5QkMsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLElBQUksYUFBRUMsTUFBTSxTQUFOQSxNQUFNO0lBQ3ZDLEVBQUUsR0FBR0QsT0FBTyxJQUFJQSxPQUFPLEtBQUssSUFBSSxLQUFLQSxPQUFPLENBQUNFLGNBQWMsQ0FBQyxDQUFPLFNBQUksTUFBTSxDQUFDLElBQUk7SUFFbEYsR0FBSyxDQUFDQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLENBQUM7SUFFNUIsR0FBSyxDQUFHQyxNQUFNLEdBQWlCRixJQUFJLENBQTNCRSxNQUFNLEVBQUVDLElBQUksR0FBV0gsSUFBSSxDQUFuQkcsSUFBSSxFQUFFQyxJQUFJLEdBQUtKLElBQUksQ0FBYkksSUFBSTtJQUcxQixHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFHO0lBR2hCLEVBQUUsRUFBRVAsTUFBTSxLQUFLLENBQUksS0FBRSxDQUFDO1FBQ3JCTyxNQUFNLEdBQUcsQ0FBUztJQUNuQixDQUFDO0lBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBRUYsTUFBTTtJQUM3QixNQUFNLDZFQUNKRyxDQUFHO1FBQUNDLFNBQVMsRUFBRyxDQUEyRiw2RkFBUyxNQUFpQixDQUF4QkosTUFBTSxFQUFDLENBQWlCOzt3RkFDcElLLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUErQjtzR0FFNUNoQiw0REFBYztvQkFBQ0ksT0FBTyxFQUFFTSxJQUFJOzs7Ozs7Ozs7Ozt3RkFHN0JPLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUFzRDs7Z0dBQ25FZCx1Q0FBSTt3QkFBQ2MsU0FBUyxFQUFDLENBQTRCO3dCQUFDWixPQUFPLEVBQUVPLElBQUk7Ozs7OztnR0FDekRNLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFnQjs4R0FDN0JoQiw0REFBYzs0QkFBQ0ksT0FBTyxFQUFFSyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQyxDQUFDO0tBaENLTixNQUFNO0FBa0NaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL05hdmJhci5qcz9jNWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFBvcnRhYmxlQnV0dG9uIH0gZnJvbSBcIi4vUG9ydGFibGVDb250ZW50XCI7XG5cbmltcG9ydCBTdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4vTWVudVwiO1xuXG5cbmNvbnN0IE5hdmJhciA9ICh7IGNvbnRlbnQgPSBudWxsLCBzY3JvbGwgfSkgPT4ge1xuXHRpZiAoIWNvbnRlbnQgfHwgY29udGVudCA9PT0gbnVsbCB8fCAhY29udGVudC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSApIHJldHVybiBudWxsXG5cdFxuXHRjb25zdCBkYXRhID0gY29udGVudC52YWx1ZVswXVxuXG5cdGNvbnN0IHsgYnV0dG9uLCBsb2dvLCBtZW51IH0gPSBkYXRhO1xuXHRcblxuXHRsZXQgbmF2UG9zID0gJyAnXG5cblxuXHRpZiAoc2Nyb2xsID09PSAndXAnKSB7XG5cdFx0bmF2UG9zID0gJy10b3AtMjAnXG5cdH1cblx0XG5cdGNvbnNvbGUubG9nKCduYXZQb3M6JywgbmF2UG9zKTtcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT17YHNpdGUtbmF2IGZpeGVkIHctZnVsbCBweC0xMCBweS01ICBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBiZy1jdXN0b20tc2Vjb25kYXJ5IHotNTAgaC0yMCAke25hdlBvc30gdHJhbnNpdGlvbi1bdG9wXWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dvIGZsZXgtbm9uZSBpdGVtcy1jZW50ZXIgIFwiPlxuXHRcdFx0XHR7LyogPEJ1dHRvbiBjb250ZW50PXtsb2dvfSAvPiAqL31cblx0XHRcdFx0PFBvcnRhYmxlQnV0dG9uIGNvbnRlbnQ9e2xvZ299Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktYmV0d2VlbiBmbGV4IGZsZXgtcm93IGZsZXgtYXV0byBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PE1lbnUgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXJcIiBjb250ZW50PXttZW51fSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ub25lXCI+XG5cdFx0XHRcdFx0PFBvcnRhYmxlQnV0dG9uIGNvbnRlbnQ9e2J1dHRvbn0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFxuXHRcdDwvbmF2PlxuXHQpO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIDsiXSwibmFtZXMiOlsiTGluayIsIlBvcnRhYmxlQnV0dG9uIiwiU3ZnIiwiTWVudSIsIk5hdmJhciIsImNvbnRlbnQiLCJzY3JvbGwiLCJoYXNPd25Qcm9wZXJ0eSIsImRhdGEiLCJ2YWx1ZSIsImJ1dHRvbiIsImxvZ28iLCJtZW51IiwibmF2UG9zIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Navbar.js\n");

/***/ })

});