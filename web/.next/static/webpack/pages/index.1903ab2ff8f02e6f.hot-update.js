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

/***/ "./comps/Visualise/Icons.js":
/*!**********************************!*\
  !*** ./comps/Visualise/Icons.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Icons = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    var outputBoxes = function(numToLoop) {\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var i = 0;\n        console.time();\n        while(i < (numToLoop === null || numToLoop === void 0 ? void 0 : numToLoop.raw)){\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hide-partial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Icons.js\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, _this1),\n                    data.results.unitIcon\n                ]\n            }, i, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Icons.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        console.timeEnd();\n        return boxes;\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Icons.js\",\n        lineNumber: 30,\n        columnNumber: 38\n    }, _this)), test = ref2[0], updateTest = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data.ready) {\n            updateTest(outputBoxes(data.results.numOfUnits));\n        }\n    }, [\n        data\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container flex flex-row flex-wrap justify-center items-center\",\n        \"data-total-num\": data === null || data === void 0 ? void 0 : (ref = data.results) === null || ref === void 0 ? void 0 : (ref1 = ref.numOfUnits) === null || ref1 === void 0 ? void 0 : ref1.raw,\n        children: test\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Icons.js\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, _this));\n};\n_s(Icons, \"YoIS160AKu2Y117hTRGOXEUDkB8=\");\n_c = Icons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icons);\nvar _c;\n$RefreshReg$(_c, \"Icons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9WaXN1YWxpc2UvSWNvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDOzs7QUFFM0MsR0FBSyxDQUFDRSxLQUFLLEdBQUcsUUFBUSxRQUFNLENBQUM7UUFBWkMsSUFBSSxTQUFKQSxJQUFJOztRQXFDNEVBLEdBQWE7O0lBbEM3RyxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLFNBQVMsRUFBSyxDQUFDO1FBQ25DLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLEtBQUs7UUFDZixHQUFHLENBQUNDLE9BQU8sR0FBRyxJQUFJO1FBQ2xCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUdkLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7UUFFVEMsT0FBTyxDQUFDQyxJQUFJO2NBQ0xGLENBQUMsSUFBR0osU0FBUyxhQUFUQSxTQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsU0FBUyxDQUFFTyxHQUFHLEVBQUUsQ0FBQztZQUUzQkosS0FBSyxDQUFDSyxJQUFJLDZFQUNSQyxDQUFHO2dCQUFTQyxTQUFTLEVBQUMsQ0FBSzs7Z0dBQzFCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBYzs7Ozs7O29CQUM1QlosSUFBSSxDQUFDYSxPQUFPLENBQUNDLFFBQVE7O2VBRmJSLENBQUM7Ozs7O1lBS1pBLENBQUM7UUFDRixDQUFDO1FBRURDLE9BQU8sQ0FBQ1EsT0FBTztRQUNmLE1BQU0sQ0FBQ1YsS0FBSztJQUViLENBQUM7SUFDRCxHQUFLLENBQXNCUCxJQUErQixHQUEvQkEsK0NBQVEsNkVBQUVhLENBQUc7a0JBQUMsQ0FBVTs7Ozs7Z0JBQTVDSyxJQUFJLEdBQWdCbEIsSUFBK0IsS0FBN0NtQixVQUFVLEdBQUluQixJQUErQjtJQUUxREQsZ0RBQVMsQ0FBQyxRQUNYLEdBRGlCLENBQUM7UUFDaEIsRUFBRSxFQUFFRyxJQUFJLENBQUNrQixLQUFLLEVBQUUsQ0FBQztZQUNoQkQsVUFBVSxDQUFDaEIsV0FBVyxDQUFDRCxJQUFJLENBQUNhLE9BQU8sQ0FBQ00sVUFBVTtRQUMvQyxDQUFDO0lBRUYsQ0FBQyxFQUFFLENBQUNuQjtRQUFBQSxJQUFJO0lBQUEsQ0FBQztJQUVULE1BQU0sNkVBQ0pXLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQStEO1FBQUNRLENBQWMsaUJBQUVwQixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxJQUFiQSxHQUFhLEdBQWJBLElBQUksQ0FBRWEsT0FBTyxjQUFiYixHQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsV0FBYkEsR0FBYSxDQUFFbUIsVUFBVSx1QkFBekJuQixJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLFFBQWNTLEdBQUc7a0JBQzNITyxJQUFJOzs7Ozs7QUFHUixDQUFDO0dBekNLakIsS0FBSztLQUFMQSxLQUFLO0FBMkNYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvVmlzdWFsaXNlL0ljb25zLmpzPzY5MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbnMgPSAoeyBkYXRhIH0pID0+IHtcblxuXG5cdGNvbnN0IG91dHB1dEJveGVzID0gKG51bVRvTG9vcCkgPT4ge1xuXHRcdGxldCBudW0gPSAxMDAwMDtcblx0XHRsZXQgYm94QmFzZSA9IDEwMDA7XG5cdFx0bGV0IGJveGVzID0gW107XG5cblxuXHRcdGxldCBpID0gMDtcblxuXHRcdGNvbnNvbGUudGltZSgpXG5cdFx0d2hpbGUgKGkgPCBudW1Ub0xvb3A/LnJhdykge1xuXHRcdFxuXHRcdFx0Ym94ZXMucHVzaChcblx0XHRcdFx0PGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm0tMVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlkZS1wYXJ0aWFsXCI+PC9kaXY+XG5cdFx0XHRcdFx0e2RhdGEucmVzdWx0cy51bml0SWNvbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0XHRpKytcblx0XHR9XG5cblx0XHRjb25zb2xlLnRpbWVFbmQoKVxuXHRcdHJldHVybiBib3hlcztcblxuXHR9XG5cdGNvbnN0IFt0ZXN0LCB1cGRhdGVUZXN0XSA9IHVzZVN0YXRlKDxkaXY+TG9hZGluZy4uLjwvZGl2Pik7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoZGF0YS5yZWFkeSkge1xuXHRcdFx0dXBkYXRlVGVzdChvdXRwdXRCb3hlcyhkYXRhLnJlc3VsdHMubnVtT2ZVbml0cykpXG5cdFx0fVxuXHRcdFxuXHR9LCBbZGF0YV0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgZGF0YS10b3RhbC1udW09e2RhdGE/LnJlc3VsdHM/Lm51bU9mVW5pdHM/LnJhd30+XG5cdFx0XHR7dGVzdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEljb25zOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkljb25zIiwiZGF0YSIsIm91dHB1dEJveGVzIiwibnVtVG9Mb29wIiwibnVtIiwiYm94QmFzZSIsImJveGVzIiwiaSIsImNvbnNvbGUiLCJ0aW1lIiwicmF3IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInJlc3VsdHMiLCJ1bml0SWNvbiIsInRpbWVFbmQiLCJ0ZXN0IiwidXBkYXRlVGVzdCIsInJlYWR5IiwibnVtT2ZVbml0cyIsImRhdGEtdG90YWwtbnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Visualise/Icons.js\n");

/***/ })

});