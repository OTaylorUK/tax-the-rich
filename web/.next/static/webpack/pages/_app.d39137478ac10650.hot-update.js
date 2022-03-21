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
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./comps/Layout.js":
/*!*************************!*\
  !*** ./comps/Layout.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./comps/Navbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./comps/Footer.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer__WEBPACK_IMPORTED_MODULE_2__);\n\n// import { useEffect, useState } from 'react';\n\n\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar Layout = function(param1) {\n    var children = param1.children, _settings = param1.settings, settings = _settings === void 0 ? [] : _settings;\n    var siteNav = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteNavigation';\n    });\n    var siteFooter = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteFooter';\n    });\n    console.log('children:', children);\n    if ((typeof siteNav === \"undefined\" ? \"undefined\" : _typeof(siteNav)) === undefined) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                content: siteNav\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, _this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Footer__WEBPACK_IMPORTED_MODULE_2___default()), {\n                content: siteFooter\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this));\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEVBQStDO0FBQ2xCO0FBQ0E7Ozs7OztBQUU3QixHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRLFNBQXVCLENBQUM7UUFBN0JDLFFBQVEsVUFBUkEsUUFBUSxxQkFBRUMsUUFBUSxFQUFSQSxRQUFRLDBCQUFDLENBQUMsQ0FBQztJQUV0QyxHQUFLLENBQUNDLE9BQU8sR0FBR0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJLEtBQUssQ0FBZ0I7O0lBQ3JFLEdBQUssQ0FBQ0MsVUFBVSxHQUFHSixRQUFRLENBQUNFLElBQUksQ0FBQyxRQUFRO1lBQUxDLElBQUksU0FBSkEsSUFBSTtRQUFPQSxNQUFNLENBQU5BLElBQUksS0FBSyxDQUFZOztJQUVwRUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFUCxRQUFRO0lBQ2pDLEVBQUUsVUFBU0UsT0FBTyxpQ0FBZCxPQUFjLENBQVBBLE9BQU8sT0FBS00sU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBRTdDLE1BQU0sNkVBQ0pDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThCOzt3RkFFM0NiLCtDQUFNO2dCQUFDYyxPQUFPLEVBQUVULE9BQU87Ozs7OztZQUN2QkYsUUFBUTt3RkFDUkYsZ0RBQU07Z0JBQUNhLE9BQU8sRUFBRU4sVUFBVTs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7S0FoQktOLE1BQU07QUFrQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9MYXlvdXQuanM/MjRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBzZXR0aW5ncz1bXSB9KSA9PiB7XG5cblx0Y29uc3Qgc2l0ZU5hdiA9IHNldHRpbmdzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnc2l0ZU5hdmlnYXRpb24nKVxuXHRjb25zdCBzaXRlRm9vdGVyID0gc2V0dGluZ3MuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdzaXRlRm9vdGVyJylcblxuXHRjb25zb2xlLmxvZygnY2hpbGRyZW46JywgY2hpbGRyZW4pO1xuXHRpZiAodHlwZW9mIHNpdGVOYXYgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXIgZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XG5cdFx0XHQ8TmF2YmFyIGNvbnRlbnQ9e3NpdGVOYXZ9IC8+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8Rm9vdGVyIGNvbnRlbnQ9e3NpdGVGb290ZXJ9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIkxheW91dCIsImNoaWxkcmVuIiwic2V0dGluZ3MiLCJzaXRlTmF2IiwiZmluZCIsIm5hbWUiLCJzaXRlRm9vdGVyIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Layout.js\n");

/***/ })

});