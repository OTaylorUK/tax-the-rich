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

/***/ "./comps/Visualise/Source.js":
/*!***********************************!*\
  !*** ./comps/Visualise/Source.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar Source = function(param) {\n    var source = param.source, price = param.price, description = param.description;\n    if (price === undefined && source === undefined && description === undefined) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, _this));\n    }\n    var displayPrice = price.toLocaleString(\"en-US\");\n    var userDetails = {\n        \"price\": \"$\".concat(displayPrice)\n    };\n    var placeholders = description.match(/\\$(.*?)\\$/g);\n    placeholders.forEach(function(placeholder) {\n        //Placeholder - $price$\n        var phText = placeholder.substring(1, placeholder.length - 1);\n        //phText = price\n        if (userDetails[phText]) {\n            description = description.replace(placeholder, userDetails[phText]);\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-10 container flex flex-col flex-wrap justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                className: \"font-gaegu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"*\",\n                        description\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                className: \"font-gaegu text-blue-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"cite\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: source,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            children: source\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n                            lineNumber: 37,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Visualise/Source.js\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, _this));\n};\n_c = Source;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Source);\nvar _c;\n$RefreshReg$(_c, \"Source\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9WaXN1YWxpc2UvU291cmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0Qjs7QUFFNUIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxRQUE0QixDQUFDO1FBQWxDQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFdBQVcsU0FBWEEsV0FBVztJQUczQyxFQUFFLEVBQUVELEtBQUssS0FBS0UsU0FBUyxJQUFJSCxNQUFNLEtBQUtHLFNBQVMsSUFBSUQsV0FBVyxLQUFLQyxTQUFTLEVBQUUsQ0FBQztRQUM5RSxNQUFNLDZFQUFHQyxDQUFHO3NCQUFDLENBQVU7Ozs7OztJQUN4QixDQUFDO0lBR0QsR0FBSyxDQUFDQyxZQUFZLEdBQUdKLEtBQUssQ0FBQ0ssY0FBYyxDQUFDLENBQU87SUFFakQsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQztRQUFDLENBQU8sUUFBRyxDQUFDLEdBQWUsT0FBYkYsWUFBWTtJQUFFLENBQUM7SUFFaEQsR0FBRyxDQUFDRyxZQUFZLEdBQUdOLFdBQVcsQ0FBQ08sS0FBSztJQUVwQ0QsWUFBWSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDQyxXQUFXLEVBQUMsQ0FBQztRQUMxQyxFQUF1QjtRQUN2QixHQUFHLENBQUNDLE1BQU0sR0FBR0QsV0FBVyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFDRixXQUFXLENBQUNHLE1BQU0sR0FBRyxDQUFDO1FBQzNELEVBQWdCO1FBRWhCLEVBQUUsRUFBQ1AsV0FBVyxDQUFDSyxNQUFNLEdBQUUsQ0FBQztZQUN2QlYsV0FBVyxHQUFHQSxXQUFXLENBQUNhLE9BQU8sQ0FBQ0osV0FBVyxFQUFDSixXQUFXLENBQUNLLE1BQU07UUFDakUsQ0FBQztJQUNGLENBQUM7SUFFRCxNQUFNLDZFQUNKUixDQUFHO1FBQUNZLFNBQVMsRUFBQyxDQUFzRTs7d0ZBRW5GQyxDQUFVO2dCQUFDRCxTQUFTLEVBQUMsQ0FBWTtzR0FDaENFLENBQUM7O3dCQUFDLENBQUM7d0JBQUNoQixXQUFXOzs7Ozs7Ozs7Ozs7d0ZBR2hCaUIsQ0FBVTtnQkFBQ0gsU0FBUyxFQUFDLENBQTBCO3NHQUM5Q0ksQ0FBSTswR0FDSnRCLGtEQUFJO3dCQUFFdUIsSUFBSSxFQUFFckIsTUFBTTs4R0FDakJzQixDQUFDOzRCQUFFQyxNQUFNLEVBQUMsQ0FBUTtzQ0FBRXZCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQyxDQUFDO0tBeENLRCxNQUFNO0FBeUNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvVmlzdWFsaXNlL1NvdXJjZS5qcz9hYzg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgU291cmNlID0gKHsgc291cmNlLCBwcmljZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuXHRcblxuXHRpZiAocHJpY2UgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2UgPT09IHVuZGVmaW5lZCAmJiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICg8ZGl2PkxvYWRpbmcuLi48L2Rpdj4pXG5cdH1cblxuXG5cdGNvbnN0IGRpc3BsYXlQcmljZSA9IHByaWNlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIik7XG5cblx0dmFyIHVzZXJEZXRhaWxzID0geyBcInByaWNlXCI6IGAkJHtkaXNwbGF5UHJpY2V9YH07XG5cblx0dmFyIHBsYWNlaG9sZGVycyA9IGRlc2NyaXB0aW9uLm1hdGNoKC9cXCQoLio/KVxcJC9nKVxuXG5cdHBsYWNlaG9sZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBsYWNlaG9sZGVyKXtcblx0XHQvL1BsYWNlaG9sZGVyIC0gJHByaWNlJFxuXHRcdHZhciBwaFRleHQgPSBwbGFjZWhvbGRlci5zdWJzdHJpbmcoMSxwbGFjZWhvbGRlci5sZW5ndGggLSAxKTtcblx0XHQvL3BoVGV4dCA9IHByaWNlXG5cblx0XHRpZih1c2VyRGV0YWlsc1twaFRleHRdKXtcblx0XHRcdGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24ucmVwbGFjZShwbGFjZWhvbGRlcix1c2VyRGV0YWlsc1twaFRleHRdKVxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibXktMTAgY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFxuXHRcdFx0PGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwiZm9udC1nYWVndVwiPlxuXHRcdFx0XHQ8cD4qe2Rlc2NyaXB0aW9ufTwvcD5cblx0XHRcdDwvYmxvY2txdW90ZT5cblxuXHRcdFx0PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiZm9udC1nYWVndSB0ZXh0LWJsdWUtNjAwXCI+XG5cdFx0XHRcdDxjaXRlPlxuXHRcdFx0XHQ8TGluayAgaHJlZj17c291cmNlfT5cblx0XHRcdFx0XHQ8YSAgdGFyZ2V0PSdfYmxhbmsnPntzb3VyY2V9PC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvY2l0ZT5cblx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZTsiXSwibmFtZXMiOlsiTGluayIsIlNvdXJjZSIsInNvdXJjZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJkaXYiLCJkaXNwbGF5UHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsInVzZXJEZXRhaWxzIiwicGxhY2Vob2xkZXJzIiwibWF0Y2giLCJmb3JFYWNoIiwicGxhY2Vob2xkZXIiLCJwaFRleHQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiYmxvY2txdW90ZSIsInAiLCJmaWdjYXB0aW9uIiwiY2l0ZSIsImhyZWYiLCJhIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Visualise/Source.js\n");

/***/ })

});