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

/***/ "./comps/Visualise/Key.js":
/*!********************************!*\
  !*** ./comps/Visualise/Key.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Key = function(param) {\n    var keys = param.keys;\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), navHeight = ref3[0], updateNavHeight = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var nav = document.querySelector('.site-nav') //To access the div with class slide track\n        ;\n        updateNavHeight(nav.offsetHeight);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-30 top-[\".concat(navHeight, \"] container flex flex-col flex-wrap justify-center items-center sticky bg-custom-secondary py-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row flex-wrap justify-center items-center\",\n            children: keys.map(function(key, index) {\n                var ref, ref1, ref2;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"key flex flex-row justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-1\",\n                            children: key === null || key === void 0 ? void 0 : key.visual\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n                            lineNumber: 23,\n                            columnNumber: 7\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                key === null || key === void 0 ? void 0 : (ref = key.units) === null || ref === void 0 ? void 0 : ref.display,\n                                \" \",\n                                (key === null || key === void 0 ? void 0 : key.isPlural) ? key === null || key === void 0 ? void 0 : (ref1 = key.name) === null || ref1 === void 0 ? void 0 : ref1.plural : key === null || key === void 0 ? void 0 : (ref2 = key.name) === null || ref2 === void 0 ? void 0 : ref2.single,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n                            lineNumber: 26,\n                            columnNumber: 7\n                        }, _this1)\n                    ]\n                }, \"key-\".concat(index), true, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n                    lineNumber: 22,\n                    columnNumber: 6\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, _this));\n};\n_s(Key, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Key;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Key);\nvar _c;\n$RefreshReg$(_c, \"Key\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9WaXN1YWxpc2UvS2V5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQzs7O0FBRzNDLEdBQUssQ0FBQ0UsR0FBRyxHQUFHLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTs7O0lBSWxCLEdBQUssQ0FBZ0NGLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTNDRyxTQUFTLEdBQXFCSCxJQUFjLEtBQWpDSSxlQUFlLEdBQUlKLElBQWM7SUFHbkRELGdEQUFTLENBQUMsUUFDWCxHQURpQixDQUFDO1FBQ2hCLEdBQUssQ0FBQ00sR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFXLFdBQUMsQ0FBMEM7O1FBQ3pGSCxlQUFlLENBQUNDLEdBQUcsQ0FBQ0csWUFBWTtJQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBSUwsTUFBTSw2RUFDSkMsQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBVSxZQUFZLE1BQWdHLENBQTFHUCxTQUFTLEVBQUMsQ0FBZ0c7OEZBQ3JJTSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFxRDtzQkFDbEVSLElBQUksQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFFQyxLQUFLO29CQUtaRCxHQUFVLEVBQTRCQSxJQUFTLEVBQVdBLElBQVM7OEJBSjNFLE1BQU0sK0RBQUxILENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUErQzs7b0dBQzVERCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBSztzQ0FDbEJFLEdBQUcsYUFBSEEsR0FBRyxLQUFIQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLEdBQUcsQ0FBRUUsTUFBTTs7Ozs7O29HQUVaQyxDQUFJOztnQ0FBRUgsR0FBRyxhQUFIQSxHQUFHLEtBQUhBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsSUFBVkEsR0FBVSxHQUFWQSxHQUFHLENBQUVJLEtBQUssY0FBVkosR0FBVSxLQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLEdBQVUsQ0FBRUssT0FBTztnQ0FBQyxDQUFDO2lDQUFDTCxHQUFHLGFBQUhBLEdBQUcsS0FBSEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxHQUFHLENBQUVNLFFBQVEsSUFBR04sR0FBRyxhQUFIQSxHQUFHLEtBQUhBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFJLENBQUpBLENBQVMsSUFBVEEsSUFBUyxHQUFUQSxHQUFHLENBQUVPLElBQUksY0FBVFAsSUFBUyxLQUFUQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQVMsQ0FBRVEsTUFBTSxHQUFHUixHQUFHLGFBQUhBLEdBQUcsS0FBSEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBSkEsQ0FBUyxJQUFUQSxJQUFTLEdBQVRBLEdBQUcsQ0FBRU8sSUFBSSxjQUFUUCxJQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBUyxDQUFFUyxNQUFNO2dDQUFDLENBQUM7Ozs7Ozs7O21CQUpoQixDQUFJLE1BQVEsT0FBTlIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQVVyRixDQUFDO0dBNUJLWixHQUFHO0tBQUhBLEdBQUc7QUE4QlQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9WaXN1YWxpc2UvS2V5LmpzPzJmZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBLZXkgPSAoeyBrZXlzIH0pID0+IHtcblxuXG5cdFxuXHRjb25zdCBbbmF2SGVpZ2h0LCB1cGRhdGVOYXZIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG5cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLW5hdicpLy9UbyBhY2Nlc3MgdGhlIGRpdiB3aXRoIGNsYXNzIHNsaWRlIHRyYWNrXG5cdFx0dXBkYXRlTmF2SGVpZ2h0KG5hdi5vZmZzZXRIZWlnaHQpXG5cdH0sIFtdKTtcblxuXG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgei0zMCB0b3AtWyR7bmF2SGVpZ2h0fV0gY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzdGlja3kgYmctY3VzdG9tLXNlY29uZGFyeSBweS0xMGB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0e2tleXMubWFwKChrZXksIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXkgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBrZXk9e2BrZXktJHtpbmRleH1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibS0xXCI+XG5cdFx0XHRcdFx0XHRcdHtrZXk/LnZpc3VhbH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+e2tleT8udW5pdHM/LmRpc3BsYXl9IHtrZXk/LmlzUGx1cmFsID8ga2V5Py5uYW1lPy5wbHVyYWwgOiBrZXk/Lm5hbWU/LnNpbmdsZX0gPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgS2V5OyDCoCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIktleSIsImtleXMiLCJuYXZIZWlnaHQiLCJ1cGRhdGVOYXZIZWlnaHQiLCJuYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRIZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJrZXkiLCJpbmRleCIsInZpc3VhbCIsInNwYW4iLCJ1bml0cyIsImRpc3BsYXkiLCJpc1BsdXJhbCIsIm5hbWUiLCJwbHVyYWwiLCJzaW5nbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Visualise/Key.js\n");

/***/ })

});