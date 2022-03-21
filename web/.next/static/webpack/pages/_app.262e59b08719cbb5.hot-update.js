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

/***/ "./comps/Layout.js":
/*!*************************!*\
  !*** ./comps/Layout.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./comps/Navbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./comps/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n// import { useEffect, useState } from 'react';\n\n\n\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param1) {\n    var children = param1.children, _settings = param1.settings, settings = _settings === void 0 ? [] : _settings;\n    _s();\n    var siteNav = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteNavigation';\n    });\n    var siteFooter = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteFooter';\n    });\n    if ((typeof siteNav === \"undefined\" ? \"undefined\" : _typeof(siteNav)) === undefined) return null;\n    var previousY = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('noScroll'), scrollDirection = ref1[0], setScrollDirection = ref1[1];\n    var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var handleNavigation = function() {\n        var ref;\n        var divElement = elementRef.current;\n        var firstChild = divElement === null || divElement === void 0 ? void 0 : (ref = divElement.children) === null || ref === void 0 ? void 0 : ref[0];\n        var threshold = (firstChild === null || firstChild === void 0 ? void 0 : firstChild.offsetHeight) + (firstChild === null || firstChild === void 0 ? void 0 : firstChild.offsetTop);\n        if (previousY.current < window.scrollY || window.scrollY <= threshold) {\n            setScrollDirection('down');\n        } else {\n            setScrollDirection('up');\n        }\n        previousY.current = window.scrollY;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleNavigation);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleNavigation);\n        };\n    }, []);\n    console.log('isScrolling:', isScrolling);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                content: siteNav,\n                scroll: scrollDirection\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-content flex flex-col my-20\",\n                ref: elementRef,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                content: siteFooter,\n                scroll: scrollDirection\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, _this));\n};\n_s(Layout, \"a+BLGfC4/SodOpnF35+4MVE129g=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBa0M7Z0JBQUNHLEdBQUcsRUFBRW5CLFVBQVU7MEJBQy9EVixRQUFROzs7Ozs7d0ZBR1RMLCtDQUFNO2dCQUFDZ0MsT0FBTyxFQUFFdEIsVUFBVTtnQkFBRXVCLE1BQU0sRUFBRXBCLGVBQWU7Ozs7Ozs7Ozs7OztBQUd2RCxDQUFDO0dBOUNLVCxNQUFNO0tBQU5BLE1BQU07QUFnRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9MYXlvdXQuanM/MjRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNldHRpbmdzPVtdIH0pID0+IHtcblxuXHRjb25zdCBzaXRlTmF2ID0gc2V0dGluZ3MuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdzaXRlTmF2aWdhdGlvbicpXG5cdGNvbnN0IHNpdGVGb290ZXIgPSBzZXR0aW5ncy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ3NpdGVGb290ZXInKVxuXG5cdGlmICh0eXBlb2Ygc2l0ZU5hdiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXHRjb25zdCBwcmV2aW91c1kgPSB1c2VSZWYoMCk7XG5cdGNvbnN0IFtzY3JvbGxEaXJlY3Rpb24sIHNldFNjcm9sbERpcmVjdGlvbl0gPSB1c2VTdGF0ZSgnbm9TY3JvbGwnKTtcblx0Y29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZigpO1xuXG5cdGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoKSA9PiB7XG5cblx0XHRjb25zdCBkaXZFbGVtZW50ID0gZWxlbWVudFJlZi5jdXJyZW50O1xuXHRcdGNvbnN0IGZpcnN0Q2hpbGQgPSBkaXZFbGVtZW50Py5jaGlsZHJlbj8uWzBdO1xuXHRcdGNvbnN0IHRocmVzaG9sZCA9IGZpcnN0Q2hpbGQ/Lm9mZnNldEhlaWdodCArIGZpcnN0Q2hpbGQ/Lm9mZnNldFRvcFxuXG5cdFx0aWYgKHByZXZpb3VzWS5jdXJyZW50IDwgd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnNjcm9sbFkgPD0gdGhyZXNob2xkKSB7XG5cdFx0XHRzZXRTY3JvbGxEaXJlY3Rpb24oJ2Rvd24nKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRTY3JvbGxEaXJlY3Rpb24oJ3VwJylcblx0XHR9XG5cblx0XHRwcmV2aW91c1kuY3VycmVudCA9IHdpbmRvdy5zY3JvbGxZXG5cdFx0XG5cdH07XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlTmF2aWdhdGlvbik7XG5cdFx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xuXHR9LCBbXSk7XG5cblxuXHRjb25zb2xlLmxvZygnaXNTY3JvbGxpbmc6JywgaXNTY3JvbGxpbmcpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sXCIgPlxuXHRcdFx0XG5cdFx0XHQ8TmF2YmFyIGNvbnRlbnQ9e3NpdGVOYXZ9IHNjcm9sbD17c2Nyb2xsRGlyZWN0aW9ufSAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZS1jb250ZW50IGZsZXggZmxleC1jb2wgbXktMjAnIHJlZj17ZWxlbWVudFJlZn0+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8Rm9vdGVyIGNvbnRlbnQ9e3NpdGVGb290ZXJ9IHNjcm9sbD17c2Nyb2xsRGlyZWN0aW9ufSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkxheW91dCIsImNoaWxkcmVuIiwic2V0dGluZ3MiLCJzaXRlTmF2IiwiZmluZCIsIm5hbWUiLCJzaXRlRm9vdGVyIiwidW5kZWZpbmVkIiwicHJldmlvdXNZIiwic2Nyb2xsRGlyZWN0aW9uIiwic2V0U2Nyb2xsRGlyZWN0aW9uIiwiZWxlbWVudFJlZiIsImhhbmRsZU5hdmlnYXRpb24iLCJkaXZFbGVtZW50IiwiY3VycmVudCIsImZpcnN0Q2hpbGQiLCJ0aHJlc2hvbGQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiaXNTY3JvbGxpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50Iiwic2Nyb2xsIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Layout.js\n");

/***/ })

});