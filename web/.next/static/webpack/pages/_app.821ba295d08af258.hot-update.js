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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./comps/Navbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./comps/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n// import { useEffect, useState } from 'react';\n\n\n\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param1) {\n    var children = param1.children, _settings = param1.settings, settings = _settings === void 0 ? [] : _settings;\n    _s();\n    var siteNav = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteNavigation';\n    });\n    var siteFooter = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteFooter';\n    });\n    if ((typeof siteNav === \"undefined\" ? \"undefined\" : _typeof(siteNav)) === undefined) return null;\n    var previousY = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('noScroll'), scrollDirection = ref2[0], setScrollDirection = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), threshold = ref1[0], setThreshold = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref;\n        var pageContent = document.querySelector('.page-content') //To access the div with class slide track\n        ;\n        var firstChild = pageContent === null || pageContent === void 0 ? void 0 : (ref = pageContent.children) === null || ref === void 0 ? void 0 : ref[0];\n        if (firstChild !== null) {\n            var childPos = (firstChild === null || firstChild === void 0 ? void 0 : firstChild.offsetHeight) + (firstChild === null || firstChild === void 0 ? void 0 : firstChild.offsetTop);\n            console.log('childPos::', childPos);\n            setThreshold(childPos);\n        }\n        window.addEventListener(\"scroll\", function() {\n            return handleNavigation();\n        });\n    }, []);\n    var handleNavigation = function() {\n        console.log('window.scrollY:', window.scrollY);\n        console.log('threshold:', threshold);\n        if (previousY.current < window.scrollY || window.scrollY <= threshold) {\n            setScrollDirection('down');\n        } else {\n            setScrollDirection('up');\n        }\n        previousY.current = window.scrollY;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                content: siteNav,\n                scroll: scrollDirection\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, _this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                content: siteFooter,\n                scroll: scrollDirection\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, _this));\n};\n_s(Layout, \"1jldCkJSH+eraIn+4dHGfPuDDGg=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFHREYsU0FBUyxDQUFDa0IsT0FBTyxHQUFHSixNQUFNLENBQUNHLE9BQU87SUFDbkMsQ0FBQztJQUVELE1BQU0sNkVBQ0pFLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThCOzt3RkFFM0NqQywrQ0FBTTtnQkFBQ2tDLE9BQU8sRUFBRTFCLE9BQU87Z0JBQUUyQixNQUFNLEVBQUVyQixlQUFlOzs7Ozs7WUFFaERSLFFBQVE7d0ZBRVJMLCtDQUFNO2dCQUFDaUMsT0FBTyxFQUFFdkIsVUFBVTtnQkFBRXdCLE1BQU0sRUFBRXJCLGVBQWU7Ozs7Ozs7Ozs7OztBQUd2RCxDQUFDO0dBckRLVCxNQUFNO0tBQU5BLE1BQU07QUF1RFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9MYXlvdXQuanM/MjRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNldHRpbmdzPVtdIH0pID0+IHtcblxuXHRjb25zdCBzaXRlTmF2ID0gc2V0dGluZ3MuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdzaXRlTmF2aWdhdGlvbicpXG5cdGNvbnN0IHNpdGVGb290ZXIgPSBzZXR0aW5ncy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ3NpdGVGb290ZXInKVxuXG5cdGlmICh0eXBlb2Ygc2l0ZU5hdiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXHRjb25zdCBwcmV2aW91c1kgPSB1c2VSZWYoMCk7XG5cdGNvbnN0IFtzY3JvbGxEaXJlY3Rpb24sIHNldFNjcm9sbERpcmVjdGlvbl0gPSB1c2VTdGF0ZSgnbm9TY3JvbGwnKTtcblx0Y29uc3QgW3RocmVzaG9sZCwgc2V0VGhyZXNob2xkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQnKS8vVG8gYWNjZXNzIHRoZSBkaXYgd2l0aCBjbGFzcyBzbGlkZSB0cmFja1xuXG5cdFx0Y29uc3QgZmlyc3RDaGlsZCA9IHBhZ2VDb250ZW50Py5jaGlsZHJlbj8uWzBdO1xuXG5cdFx0aWYgKGZpcnN0Q2hpbGQgIT09IG51bGwpIHtcblx0XHRcdGNvbnN0IGNoaWxkUG9zID0gZmlyc3RDaGlsZD8ub2Zmc2V0SGVpZ2h0ICsgZmlyc3RDaGlsZD8ub2Zmc2V0VG9wXG5cblx0XHRjb25zb2xlLmxvZygnY2hpbGRQb3M6OicsIGNoaWxkUG9zKTtcblxuXHRcdFx0c2V0VGhyZXNob2xkKGNoaWxkUG9zKVxuXHRcdH1cblxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gaGFuZGxlTmF2aWdhdGlvbigpKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoKSA9PiB7XG5cblx0XHRjb25zb2xlLmxvZygnd2luZG93LnNjcm9sbFk6Jywgd2luZG93LnNjcm9sbFkpO1xuXHRcdGNvbnNvbGUubG9nKCd0aHJlc2hvbGQ6JywgdGhyZXNob2xkKTtcblxuXHRcdGlmIChwcmV2aW91c1kuY3VycmVudCA8IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5zY3JvbGxZIDw9IHRocmVzaG9sZCkge1xuXHRcdFx0c2V0U2Nyb2xsRGlyZWN0aW9uKCdkb3duJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U2Nyb2xsRGlyZWN0aW9uKCd1cCcpXG5cdFx0fVxuXG5cblx0XHRwcmV2aW91c1kuY3VycmVudCA9IHdpbmRvdy5zY3JvbGxZXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGZsZXggZmxleC1jb2xcIiA+XG5cdFx0XHRcblx0XHRcdDxOYXZiYXIgY29udGVudD17c2l0ZU5hdn0gc2Nyb2xsPXtzY3JvbGxEaXJlY3Rpb259IC8+XG5cblx0XHRcdHtjaGlsZHJlbn1cblxuXHRcdFx0PEZvb3RlciBjb250ZW50PXtzaXRlRm9vdGVyfSBzY3JvbGw9e3Njcm9sbERpcmVjdGlvbn0gLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInNldHRpbmdzIiwic2l0ZU5hdiIsImZpbmQiLCJuYW1lIiwic2l0ZUZvb3RlciIsInVuZGVmaW5lZCIsInByZXZpb3VzWSIsInNjcm9sbERpcmVjdGlvbiIsInNldFNjcm9sbERpcmVjdGlvbiIsInRocmVzaG9sZCIsInNldFRocmVzaG9sZCIsInBhZ2VDb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RDaGlsZCIsImNoaWxkUG9zIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXZpZ2F0aW9uIiwic2Nyb2xsWSIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50Iiwic2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Layout.js\n");

/***/ })

});