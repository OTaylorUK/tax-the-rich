"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comps/PageSections/sections/Hero.js":
/*!*********************************************!*\
  !*** ./comps/PageSections/sections/Hero.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PortableContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PortableContent */ \"./comps/PortableContent/index.js\");\n/* harmony import */ var _PortableText_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/Default */ \"./comps/PortableText/Default.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Hero = function(props) {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var conditionalClass;\n    if (router.pathname === '/') {\n        conditionalClass = 'h-screen min-h-screen';\n    } else {\n        conditionalClass = 'min-h-[60vh]';\n    }\n    var Header = props.Header, buttons = props.buttons;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(conditionalClass, \" mt-20 flex flex-col justify-center items-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-center flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_Default__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    blocks: Header\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Hero.js\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, _this),\n                buttons === null || buttons === void 0 ? void 0 : buttons.map(function(button, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableContent__WEBPACK_IMPORTED_MODULE_1__.PortableButton, {\n                        content: button\n                    }, \"btn-\".concat(index), false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Hero.js\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Hero.js\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Hero.js\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, _this));\n};\n_s(Hero, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvSGVyby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRDtBQUVOO0FBQ1Q7OztBQUV2QyxHQUFLLENBQUNHLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzs7SUFFeEIsR0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBRXhCLEdBQUcsQ0FBQ0ksZ0JBQWdCO0lBRXBCLEVBQUUsRUFBRUQsTUFBTSxDQUFDRSxRQUFRLEtBQUssQ0FBRyxJQUFFLENBQUM7UUFDN0JELGdCQUFnQixHQUFHLENBQXVCO0lBQzNDLENBQUMsTUFBTSxDQUFDO1FBQ1BBLGdCQUFnQixHQUFHLENBQWM7SUFFbEMsQ0FBQztJQUNELEdBQUssQ0FBR0UsTUFBTSxHQUFjSixLQUFLLENBQXpCSSxNQUFNLEVBQUVDLE9BQU8sR0FBS0wsS0FBSyxDQUFqQkssT0FBTztJQUV2QixNQUFNLDZFQUNKQyxDQUFHO1FBQUNDLFNBQVMsRUFBRyxHQUFtQixNQUFnRCxDQUFqRUwsZ0JBQWdCLEVBQUMsQ0FBZ0Q7OEZBQ2xGSSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFpRTs7NEZBQzlFViw2REFBTztvQkFBQ1csTUFBTSxFQUFFSixNQUFNOzs7Ozs7Z0JBQ3RCQyxPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFZLEdBQVpBLElBQUksQ0FBSkEsQ0FBWSxHQUFaQSxPQUFPLENBQUVJLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBRUMsS0FBSztrQ0FDM0IsTUFBTSwrREFBTGYsNERBQWM7d0JBQXNCZ0IsT0FBTyxFQUFFRixNQUFNO3VCQUE5QixDQUFJLE1BQVEsT0FBTkMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEMsQ0FBQztHQXpCS1osSUFBSTs7UUFFTUQsa0RBQVM7OztLQUZuQkMsSUFBSTtBQTJCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BhZ2VTZWN0aW9ucy9zZWN0aW9ucy9IZXJvLmpzPzcyZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGFibGVCdXR0b24gfSBmcm9tIFwiLi4vLi4vUG9ydGFibGVDb250ZW50XCI7XG5cbmltcG9ydCBEZWZhdWx0IGZyb20gXCIuLi8uLi9Qb3J0YWJsZVRleHQvRGVmYXVsdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IHtcblxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRsZXQgY29uZGl0aW9uYWxDbGFzcztcblxuXHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcblx0XHRjb25kaXRpb25hbENsYXNzID0gJ2gtc2NyZWVuIG1pbi1oLXNjcmVlbidcblx0fSBlbHNlIHtcblx0XHRjb25kaXRpb25hbENsYXNzID0gJ21pbi1oLVs2MHZoXSdcblx0XHRcblx0fVxuXHRjb25zdCB7IEhlYWRlciwgYnV0dG9ucyB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7Y29uZGl0aW9uYWxDbGFzc30gbXQtMjAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxEZWZhdWx0IGJsb2Nrcz17SGVhZGVyfSAvPlxuXHRcdFx0XHR7YnV0dG9ucz8ubWFwKChidXR0b24sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PFBvcnRhYmxlQnV0dG9uIGtleT17YGJ0bi0ke2luZGV4fWB9IGNvbnRlbnQ9e2J1dHRvbn0gLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxuXG59XG4gXG5leHBvcnQgZGVmYXVsdCBIZXJvOyJdLCJuYW1lcyI6WyJQb3J0YWJsZUJ1dHRvbiIsIkRlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJIZXJvIiwicHJvcHMiLCJyb3V0ZXIiLCJjb25kaXRpb25hbENsYXNzIiwicGF0aG5hbWUiLCJIZWFkZXIiLCJidXR0b25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvY2tzIiwibWFwIiwiYnV0dG9uIiwiaW5kZXgiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Hero.js\n");

/***/ })

});