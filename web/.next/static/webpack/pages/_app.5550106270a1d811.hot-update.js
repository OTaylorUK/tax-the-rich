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

/***/ "./comps/PortableContent/PortableButton.js":
/*!*************************************************!*\
  !*** ./comps/PortableContent/PortableButton.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./comps/PortableContent/Image.js\");\n\n\n\n\nvar _this = undefined;\nvar PortableButton = function(param1) {\n    var content = param1.content;\n    var blocks = content.portableButton;\n    console.log('content', content);\n    if (!blocks) {\n        console.error('Missing blocks');\n        return null;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'max-w-sm flex flex-wrap gap-1 flex-row items-center justify-center ',\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n            value: blocks,\n            components: {\n                types: {\n                    figure: _Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                },\n                block: {\n                    // Ex. 1: customizing common block types\n                    normal: function(param) {\n                        var children = param.children;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-gaegu uppercase\",\n                            children: children\n                        }, void 0, false, void 0, void 0);\n                    },\n                    span: function(param) {\n                        var children = param.children;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold uppercase\",\n                            children: children\n                        }, void 0, false, void 0, void 0);\n                    }\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this));\n};\n_c = PortableButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortableButton);\nvar _c;\n$RefreshReg$(_c, \"PortableButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvUG9ydGFibGVCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDdUI7QUFDckI7O0FBRTNCLEdBQUssQ0FBQ0csY0FBYyxHQUFHLFFBQVEsU0FBTyxDQUFDO1FBQWRDLE9BQU8sVUFBUEEsT0FBTztJQUU5QixHQUFLLENBQW1CQyxNQUFNLEdBQUlELE9BQU8sQ0FBbENFLGNBQWM7SUFFckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBRUosT0FBTztJQUc5QixFQUFFLEdBQUdDLE1BQU0sRUFBRSxDQUFDO1FBQ1pFLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLENBQWdCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJO0lBQ2IsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFLENBQXFFOzhGQUVsRlYsNkRBQVk7WUFDWFcsS0FBSyxFQUFFUCxNQUFNO1lBQ2JRLFVBQVUsRUFBRSxDQUFDO2dCQUNYQyxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsTUFBTSxFQUFFYiw4Q0FBSztnQkFDZixDQUFDO2dCQUNEYyxLQUFLLEVBQUUsQ0FBQztvQkFDTixFQUF3QztvQkFDeENDLE1BQU0sRUFBRSxRQUFROzRCQUFMQyxRQUFRLFNBQVJBLFFBQVE7c0NBQU8sTUFBTVAsQ0FBQUEsNkRBQUFBLENBQUxRLENBQUk7NEJBQUNSLFNBQVMsRUFBQyxDQUFzQjtzQ0FBRU8sUUFBUTs7O29CQUMxRUMsSUFBSSxFQUFFLFFBQVE7NEJBQUxELFFBQVEsU0FBUkEsUUFBUTtzQ0FBTyxNQUFNUCxDQUFBQSw2REFBQUEsQ0FBTFEsQ0FBSTs0QkFBQ1IsU0FBUyxFQUFDLENBQXFCO3NDQUFFTyxRQUFROzs7Z0JBQ3pFLENBQUM7WUFDSCxDQUFDOzs7Ozs7Ozs7OztBQUtULENBQUM7S0EvQktmLGNBQWM7QUFpQ3BCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BvcnRhYmxlQ29udGVudC9Qb3J0YWJsZUJ1dHRvbi5qcz9iYzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UG9ydGFibGVUZXh0fSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnXG5cbmNvbnN0IFBvcnRhYmxlQnV0dG9uID0gKHtjb250ZW50fSkgPT4ge1xuXG4gIGNvbnN0IHtwb3J0YWJsZUJ1dHRvbiA6IGJsb2Nrc30gPSBjb250ZW50IDtcblxuICBjb25zb2xlLmxvZygnY29udGVudCcsIGNvbnRlbnQpO1xuXG5cbiAgaWYgKCFibG9ja3MpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIGJsb2NrcycpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eydtYXgtdy1zbSBmbGV4IGZsZXgtd3JhcCBnYXAtMSBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJ30+XG4gICAgICAgXG4gICAgICA8UG9ydGFibGVUZXh0XG4gICAgICAgIHZhbHVlPXtibG9ja3N9XG4gICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICB0eXBlczoge1xuICAgICAgICAgICAgZmlndXJlOiBJbWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrOiB7XG4gICAgICAgICAgICAvLyBFeC4gMTogY3VzdG9taXppbmcgY29tbW9uIGJsb2NrIHR5cGVzXG4gICAgICAgICAgICBub3JtYWw6ICh7IGNoaWxkcmVuIH0pID0+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZ2FlZ3UgdXBwZXJjYXNlXCI+e2NoaWxkcmVufTwvc3Bhbj4sXG4gICAgICAgICAgICBzcGFuOiAoeyBjaGlsZHJlbiB9KSA9PiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdXBwZXJjYXNlXCI+e2NoaWxkcmVufTwvc3Bhbj4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhYmxlQnV0dG9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0YWJsZVRleHQiLCJJbWFnZSIsIlBvcnRhYmxlQnV0dG9uIiwiY29udGVudCIsImJsb2NrcyIsInBvcnRhYmxlQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJjb21wb25lbnRzIiwidHlwZXMiLCJmaWd1cmUiLCJibG9jayIsIm5vcm1hbCIsImNoaWxkcmVuIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PortableContent/PortableButton.js\n");

/***/ })

});