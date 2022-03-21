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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./comps/Navbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./comps/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n// import { useEffect, useState } from 'react';\n\n\n\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param1) {\n    var children = param1.children, _settings = param1.settings, settings = _settings === void 0 ? [] : _settings;\n    _s();\n    var siteNav = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteNavigation';\n    });\n    var siteFooter = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteFooter';\n    });\n    if ((typeof siteNav === \"undefined\" ? \"undefined\" : _typeof(siteNav)) === undefined) return null;\n    var previousY = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('noScroll'), scrollDirection = ref2[0], setScrollDirection = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isScrolling = ref1[0], setIsScrolling = ref1[1];\n    var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var handleNavigation = function() {\n        var ref;\n        setIsScrolling(true);\n        var divElement = elementRef.current;\n        var firstChild = divElement === null || divElement === void 0 ? void 0 : (ref = divElement.children) === null || ref === void 0 ? void 0 : ref[0];\n        var threshold = (firstChild === null || firstChild === void 0 ? void 0 : firstChild.offsetHeight) + (firstChild === null || firstChild === void 0 ? void 0 : firstChild.offsetTop);\n        if (previousY.current < window.scrollY || window.scrollY <= threshold) {\n            setScrollDirection('down');\n        } else {\n            setScrollDirection('up');\n        }\n        previousY.current = window.scrollY;\n        setTimeout(function() {\n            setIsScrolling(false);\n        }, 1500);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleNavigation);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleNavigation);\n        };\n    }, []);\n    console.log('isScrolling:', isScrolling);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                content: siteNav,\n                scroll: scrollDirection\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-content flex flex-col my-20\",\n                ref: elementRef,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                content: siteFooter,\n                scroll: scrollDirection\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, _this));\n};\n_s(Layout, \"9keIeH4EVz0p1nFGTnUesfpD054=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBR0xZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWMsZUFBRWhCLFdBQVc7SUFFdkMsTUFBTSw2RUFDSmlCLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThCOzt3RkFFM0NsQywrQ0FBTTtnQkFBQ21DLE9BQU8sRUFBRTNCLE9BQU87Z0JBQUU0QixNQUFNLEVBQUV0QixlQUFlOzs7Ozs7d0ZBRWhEbUIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWtDO2dCQUFDRyxHQUFHLEVBQUVuQixVQUFVOzBCQUMvRFosUUFBUTs7Ozs7O3dGQUdUTCwrQ0FBTTtnQkFBQ2tDLE9BQU8sRUFBRXhCLFVBQVU7Z0JBQUV5QixNQUFNLEVBQUV0QixlQUFlOzs7Ozs7Ozs7Ozs7QUFHdkQsQ0FBQztHQW5ES1QsTUFBTTtLQUFOQSxNQUFNO0FBcURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvTGF5b3V0LmpzPzI0ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBzZXR0aW5ncz1bXSB9KSA9PiB7XG5cblx0Y29uc3Qgc2l0ZU5hdiA9IHNldHRpbmdzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnc2l0ZU5hdmlnYXRpb24nKVxuXHRjb25zdCBzaXRlRm9vdGVyID0gc2V0dGluZ3MuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdzaXRlRm9vdGVyJylcblxuXHRpZiAodHlwZW9mIHNpdGVOYXYgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblx0Y29uc3QgcHJldmlvdXNZID0gdXNlUmVmKDApO1xuXHRjb25zdCBbc2Nyb2xsRGlyZWN0aW9uLCBzZXRTY3JvbGxEaXJlY3Rpb25dID0gdXNlU3RhdGUoJ25vU2Nyb2xsJyk7XG5cdGNvbnN0IFtpc1Njcm9sbGluZywgc2V0SXNTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKCk7XG5cblx0Y29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICgpID0+IHtcblxuXHRcdHNldElzU2Nyb2xsaW5nKHRydWUpXG5cdFx0Y29uc3QgZGl2RWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudDtcblx0XHRjb25zdCBmaXJzdENoaWxkID0gZGl2RWxlbWVudD8uY2hpbGRyZW4/LlswXTtcblx0XHRjb25zdCB0aHJlc2hvbGQgPSBmaXJzdENoaWxkPy5vZmZzZXRIZWlnaHQgKyBmaXJzdENoaWxkPy5vZmZzZXRUb3BcblxuXHRcdGlmIChwcmV2aW91c1kuY3VycmVudCA8IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5zY3JvbGxZIDw9IHRocmVzaG9sZCkge1xuXHRcdFx0c2V0U2Nyb2xsRGlyZWN0aW9uKCdkb3duJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U2Nyb2xsRGlyZWN0aW9uKCd1cCcpXG5cdFx0fVxuXG5cdFx0cHJldmlvdXNZLmN1cnJlbnQgPSB3aW5kb3cuc2Nyb2xsWVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRJc1Njcm9sbGluZyhmYWxzZSlcblx0XHR9LCAxNTAwKTtcblx0fTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcblx0XHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlTmF2aWdhdGlvbik7XG5cdH0sIFtdKTtcblxuXG5cdGNvbnNvbGUubG9nKCdpc1Njcm9sbGluZzonLCBpc1Njcm9sbGluZyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGZsZXggZmxleC1jb2xcIiA+XG5cdFx0XHRcblx0XHRcdDxOYXZiYXIgY29udGVudD17c2l0ZU5hdn0gc2Nyb2xsPXtzY3JvbGxEaXJlY3Rpb259IC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlLWNvbnRlbnQgZmxleCBmbGV4LWNvbCBteS0yMCcgcmVmPXtlbGVtZW50UmVmfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxGb290ZXIgY29udGVudD17c2l0ZUZvb3Rlcn0gc2Nyb2xsPXtzY3JvbGxEaXJlY3Rpb259IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzZXR0aW5ncyIsInNpdGVOYXYiLCJmaW5kIiwibmFtZSIsInNpdGVGb290ZXIiLCJ1bmRlZmluZWQiLCJwcmV2aW91c1kiLCJzY3JvbGxEaXJlY3Rpb24iLCJzZXRTY3JvbGxEaXJlY3Rpb24iLCJpc1Njcm9sbGluZyIsInNldElzU2Nyb2xsaW5nIiwiZWxlbWVudFJlZiIsImhhbmRsZU5hdmlnYXRpb24iLCJkaXZFbGVtZW50IiwiY3VycmVudCIsImZpcnN0Q2hpbGQiLCJ0aHJlc2hvbGQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJzY3JvbGwiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Layout.js\n");

/***/ })

});