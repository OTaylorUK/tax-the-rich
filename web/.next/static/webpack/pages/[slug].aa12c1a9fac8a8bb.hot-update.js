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

/***/ "./comps/PageSections/sections/Quote.js":
/*!**********************************************!*\
  !*** ./comps/PageSections/sections/Quote.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/Default */ \"./comps/PortableText/Default.js\");\n\n\n\nvar _this = undefined;\nvar Quote = function(props) {\n    var Author = props.Author, quoteText = props.quoteText;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n        className: \"w-full flex flex-col justify-center items-center bg-custom-primary py-20 my-7 text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                    className: \"text-custom-secondary\",\n                    children: quoteText\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Quote.js\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                    children: Author\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Quote.js\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Quote.js\",\n            lineNumber: 12,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Quote.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, _this));\n};\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvUXVvdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ2U7O0FBRWhELEdBQUssQ0FBQ0UsS0FBSyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFFekIsR0FBSyxDQUFHQyxNQUFNLEdBQWdCRCxLQUFLLENBQTNCQyxNQUFNLEVBQUVDLFNBQVMsR0FBS0YsS0FBSyxDQUFuQkUsU0FBUztJQUV6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUs7SUFFakIsTUFBTSw2RUFDSkssQ0FBTTtRQUFDQyxTQUFTLEVBQUMsQ0FBMkY7OEZBQzNHQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFXOzs0RkFDeEJFLENBQVU7b0JBQUNGLFNBQVMsRUFBQyxDQUF1Qjs4QkFBRUosU0FBUzs7Ozs7OzRGQUN2RE8sQ0FBVTs4QkFBRVIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkIsQ0FBQztLQWZLRixLQUFLO0FBaUJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvUGFnZVNlY3Rpb25zL3NlY3Rpb25zL1F1b3RlLmpzP2FiZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vQnV0dG9uXCI7XG5pbXBvcnQgRGVmYXVsdCBmcm9tIFwiLi4vLi4vUG9ydGFibGVUZXh0L0RlZmF1bHRcIjtcblxuY29uc3QgUXVvdGUgPSAocHJvcHMpID0+IHtcblxuXHRjb25zdCB7IEF1dGhvciwgcXVvdGVUZXh0IH0gPSBwcm9wcztcblxuXHRjb25zb2xlLmxvZyhwcm9wcyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1jdXN0b20tcHJpbWFyeSBweS0yMCBteS03IHRleHQtY2VudGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1zZWNvbmRhcnlcIj57cXVvdGVUZXh0fTwvYmxvY2txdW90ZT5cblx0XHRcdFx0PGZpZ2NhcHRpb24+e0F1dGhvcn08L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2ZpZ3VyZT5cblx0KVxuXG59XG4gXG5leHBvcnQgZGVmYXVsdCBRdW90ZTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiRGVmYXVsdCIsIlF1b3RlIiwicHJvcHMiLCJBdXRob3IiLCJxdW90ZVRleHQiLCJjb25zb2xlIiwibG9nIiwiZmlndXJlIiwiY2xhc3NOYW1lIiwiZGl2IiwiYmxvY2txdW90ZSIsImZpZ2NhcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Quote.js\n");

/***/ })

});