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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Key = function(param) {\n    var keys = param.keys;\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), navHeight = ref3[0], updateNavHeight = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var nav = document.querySelector('.site-nav') //To access the div with class slide track\n        ;\n        console.log(nav);\n    // updateNavHeight\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-30 container flex flex-col flex-wrap justify-center items-center sticky bg-custom-secondary py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row flex-wrap justify-center items-center\",\n            children: keys.map(function(key, index) {\n                var ref, ref1, ref2;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"key flex flex-row justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-1\",\n                            children: key === null || key === void 0 ? void 0 : key.visual\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n                            lineNumber: 25,\n                            columnNumber: 7\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                key === null || key === void 0 ? void 0 : (ref = key.units) === null || ref === void 0 ? void 0 : ref.display,\n                                \" \",\n                                (key === null || key === void 0 ? void 0 : key.isPlural) ? key === null || key === void 0 ? void 0 : (ref1 = key.name) === null || ref1 === void 0 ? void 0 : ref1.plural : key === null || key === void 0 ? void 0 : (ref2 = key.name) === null || ref2 === void 0 ? void 0 : ref2.single,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n                            lineNumber: 28,\n                            columnNumber: 7\n                        }, _this1)\n                    ]\n                }, \"key-\".concat(index), true, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n                    lineNumber: 24,\n                    columnNumber: 6\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Key.js\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, _this));\n};\n_s(Key, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Key;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Key);\nvar _c;\n$RefreshReg$(_c, \"Key\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9WaXN1YWxpc2UvS2V5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQzs7O0FBRzNDLEdBQUssQ0FBQ0UsR0FBRyxHQUFHLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTs7O0lBSWxCLEdBQUssQ0FBZ0NGLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTNDRyxTQUFTLEdBQXFCSCxJQUFjLEtBQWpDSSxlQUFlLEdBQUlKLElBQWM7SUFHbkRELGdEQUFTLENBQUMsUUFDWCxHQURpQixDQUFDO1FBQ2hCLEdBQUssQ0FBQ00sR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFXLFdBQUMsQ0FBMEM7O1FBRXpGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osR0FBRztJQUNmLEVBQWtCO0lBQ25CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFJTCxNQUFNLDZFQUNKSyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFxRzs4RkFDbEhELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXFEO3NCQUNsRVQsSUFBSSxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUVDLEtBQUs7b0JBS1pELEdBQVUsRUFBNEJBLElBQVMsRUFBV0EsSUFBUzs4QkFKM0UsTUFBTSwrREFBTEgsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQStDOztvR0FDNURELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFLO3NDQUNsQkUsR0FBRyxhQUFIQSxHQUFHLEtBQUhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsR0FBRyxDQUFFRSxNQUFNOzs7Ozs7b0dBRVpDLENBQUk7O2dDQUFFSCxHQUFHLGFBQUhBLEdBQUcsS0FBSEEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBSkEsQ0FBVSxJQUFWQSxHQUFVLEdBQVZBLEdBQUcsQ0FBRUksS0FBSyxjQUFWSixHQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsR0FBVSxDQUFFSyxPQUFPO2dDQUFDLENBQUM7aUNBQUNMLEdBQUcsYUFBSEEsR0FBRyxLQUFIQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLEdBQUcsQ0FBRU0sUUFBUSxJQUFHTixHQUFHLGFBQUhBLEdBQUcsS0FBSEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBSkEsQ0FBUyxJQUFUQSxJQUFTLEdBQVRBLEdBQUcsQ0FBRU8sSUFBSSxjQUFUUCxJQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBUyxDQUFFUSxNQUFNLEdBQUdSLEdBQUcsYUFBSEEsR0FBRyxLQUFIQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLElBQVRBLElBQVMsR0FBVEEsR0FBRyxDQUFFTyxJQUFJLGNBQVRQLElBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFTLENBQUVTLE1BQU07Z0NBQUMsQ0FBQzs7Ozs7Ozs7bUJBSmhCLENBQUksTUFBUSxPQUFOUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBVXJGLENBQUM7R0E5QktiLEdBQUc7S0FBSEEsR0FBRztBQWdDVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1Zpc3VhbGlzZS9LZXkuanM/MmZlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IEtleSA9ICh7IGtleXMgfSkgPT4ge1xuXG5cblx0XG5cdGNvbnN0IFtuYXZIZWlnaHQsIHVwZGF0ZU5hdkhlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtbmF2JykvL1RvIGFjY2VzcyB0aGUgZGl2IHdpdGggY2xhc3Mgc2xpZGUgdHJhY2tcblxuXHRcdGNvbnNvbGUubG9nKG5hdik7XG5cdFx0Ly8gdXBkYXRlTmF2SGVpZ2h0XG5cdH0sIFtdKTtcblxuXG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiei0zMCBjb250YWluZXIgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHN0aWNreSBiZy1jdXN0b20tc2Vjb25kYXJ5IHB5LTEwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHR7a2V5cy5tYXAoKGtleSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGtleT17YGtleS0ke2luZGV4fWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cblx0XHRcdFx0XHRcdFx0e2tleT8udmlzdWFsfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57a2V5Py51bml0cz8uZGlzcGxheX0ge2tleT8uaXNQbHVyYWwgPyBrZXk/Lm5hbWU/LnBsdXJhbCA6IGtleT8ubmFtZT8uc2luZ2xlfSA8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBLZXk7IMKgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiS2V5Iiwia2V5cyIsIm5hdkhlaWdodCIsInVwZGF0ZU5hdkhlaWdodCIsIm5hdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJrZXkiLCJpbmRleCIsInZpc3VhbCIsInNwYW4iLCJ1bml0cyIsImRpc3BsYXkiLCJpc1BsdXJhbCIsIm5hbWUiLCJwbHVyYWwiLCJzaW5nbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Visualise/Key.js\n");

/***/ })

});