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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./comps/Navbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./comps/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n// import { useEffect, useState } from 'react';\n\n\n\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param1) {\n    var children = param1.children, _settings = param1.settings, settings = _settings === void 0 ? [] : _settings;\n    _s();\n    var siteNav = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteNavigation';\n    });\n    var siteFooter = settings.find(function(param) {\n        var name = param.name;\n        return name === 'siteFooter';\n    });\n    if ((typeof siteNav === \"undefined\" ? \"undefined\" : _typeof(siteNav)) === undefined) return null;\n    var previousY = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    var triggerPageScroll = function(param) {\n        var e = param.e;\n        var scrollDown = false;\n        var newNum = previousY.current;\n        var delY = e.deltaY;\n        if (newNum >= previousY.current) {\n            scrollDown = !scrollDown;\n        // positionRef += windowWidth \n        }\n        console.log('e', e);\n        console.log('delY', delY);\n        console.log('scrollDown', scrollDown);\n        previousY.current = delY;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-container flex flex-col\",\n        onWheel: function(e) {\n            return triggerPageScroll({\n                e: e\n            });\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                content: siteNav\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, _this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                content: siteFooter\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Layout.js\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, _this));\n};\n_s(Layout, \"SzhzLIyIwT8P8WNrqMOObzO6Uao=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxFQUErQztBQUNsQjtBQUNBO0FBQ3NCOzs7Ozs7O0FBRW5ELEdBQUssQ0FBQ0ssTUFBTSxHQUFHLFFBQVEsU0FBdUIsQ0FBQztRQUE3QkMsUUFBUSxVQUFSQSxRQUFRLHFCQUFFQyxRQUFRLEVBQVJBLFFBQVEsMEJBQUMsQ0FBQyxDQUFDOztJQUV0QyxHQUFLLENBQUNDLE9BQU8sR0FBR0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJLEtBQUssQ0FBZ0I7O0lBQ3JFLEdBQUssQ0FBQ0MsVUFBVSxHQUFHSixRQUFRLENBQUNFLElBQUksQ0FBQyxRQUFRO1lBQUxDLElBQUksU0FBSkEsSUFBSTtRQUFPQSxNQUFNLENBQU5BLElBQUksS0FBSyxDQUFZOztJQUVwRSxFQUFFLFVBQVNGLE9BQU8saUNBQWQsT0FBYyxDQUFQQSxPQUFPLE9BQUtJLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSTtJQUc3QyxHQUFLLENBQUNDLFNBQVMsR0FBR1QsNkNBQU0sQ0FBQyxDQUFDO0lBRTFCLEdBQUssQ0FBQ1UsaUJBQWlCLEdBQUcsUUFBUSxRQUFHLENBQUM7WUFBVEMsQ0FBQyxTQUFEQSxDQUFDO1FBQzdCLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHLEtBQUs7UUFDdEIsR0FBRyxDQUFDQyxNQUFNLEdBQUdKLFNBQVMsQ0FBQ0ssT0FBTztRQUM5QixHQUFHLENBQUNDLElBQUksR0FBR0osQ0FBQyxDQUFDSyxNQUFNO1FBR25CLEVBQUUsRUFBRUgsTUFBTSxJQUFJSixTQUFTLENBQUNLLE9BQU8sRUFBRSxDQUFDO1lBQ2pDRixVQUFVLElBQUlBLFVBQVU7UUFDeEIsRUFBOEI7UUFDL0IsQ0FBQztRQUVESyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFHLElBQUVQLENBQUM7UUFDbEJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU0sT0FBRUgsSUFBSTtRQUN4QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFTixVQUFVO1FBRXBDSCxTQUFTLENBQUNLLE9BQU8sR0FBR0MsSUFBSTtJQUV6QixDQUFDO0lBR0QsTUFBTSw2RUFDSkksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBOEI7UUFBQ0MsT0FBTyxFQUFFLFFBQVEsQ0FBUFYsQ0FBQztZQUFLRCxNQUFNLENBQU5BLGlCQUFpQixDQUFDLENBQUNDO2dCQUFBQSxDQUFDLEVBQURBLENBQUM7WUFBQSxDQUFDOzs7d0ZBRWpGZiwrQ0FBTTtnQkFBQzBCLE9BQU8sRUFBRWxCLE9BQU87Ozs7OztZQUV2QkYsUUFBUTt3RkFFUkwsK0NBQU07Z0JBQUN5QixPQUFPLEVBQUVmLFVBQVU7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDO0dBeENLTixNQUFNO0tBQU5BLE1BQU07QUEwQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9MYXlvdXQuanM/MjRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNldHRpbmdzPVtdIH0pID0+IHtcblxuXHRjb25zdCBzaXRlTmF2ID0gc2V0dGluZ3MuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdzaXRlTmF2aWdhdGlvbicpXG5cdGNvbnN0IHNpdGVGb290ZXIgPSBzZXR0aW5ncy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ3NpdGVGb290ZXInKVxuXG5cdGlmICh0eXBlb2Ygc2l0ZU5hdiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXG5cdGNvbnN0IHByZXZpb3VzWSA9IHVzZVJlZigwKTtcblxuXHRjb25zdCB0cmlnZ2VyUGFnZVNjcm9sbCA9ICh7IGUgfSkgPT4ge1xuXHRcdGxldCBzY3JvbGxEb3duID0gZmFsc2U7XG5cdFx0bGV0IG5ld051bSA9IHByZXZpb3VzWS5jdXJyZW50O1xuXHRcdGxldCBkZWxZID0gZS5kZWx0YVlcblx0IFxuXG5cdFx0aWYgKG5ld051bSA+PSBwcmV2aW91c1kuY3VycmVudCkge1xuXHRcdFx0c2Nyb2xsRG93biA9ICFzY3JvbGxEb3duO1xuXHRcdFx0Ly8gcG9zaXRpb25SZWYgKz0gd2luZG93V2lkdGggXG5cdFx0fVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdlJywgZSk7XG5cdFx0Y29uc29sZS5sb2coJ2RlbFknLCBkZWxZKTtcblx0XHRjb25zb2xlLmxvZygnc2Nyb2xsRG93bicsIHNjcm9sbERvd24pO1xuXG5cdFx0cHJldmlvdXNZLmN1cnJlbnQgPSBkZWxZO1xuXG5cdH07XG5cdFxuXHRcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyIGZsZXggZmxleC1jb2xcIiBvbldoZWVsPXsoZSkgPT4gdHJpZ2dlclBhZ2VTY3JvbGwoe2V9KX0+XG5cdFx0XHRcblx0XHRcdDxOYXZiYXIgY29udGVudD17c2l0ZU5hdn0gLz5cblxuXHRcdFx0e2NoaWxkcmVufVxuXG5cdFx0XHQ8Rm9vdGVyIGNvbnRlbnQ9e3NpdGVGb290ZXJ9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzZXR0aW5ncyIsInNpdGVOYXYiLCJmaW5kIiwibmFtZSIsInNpdGVGb290ZXIiLCJ1bmRlZmluZWQiLCJwcmV2aW91c1kiLCJ0cmlnZ2VyUGFnZVNjcm9sbCIsImUiLCJzY3JvbGxEb3duIiwibmV3TnVtIiwiY3VycmVudCIsImRlbFkiLCJkZWx0YVkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25XaGVlbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Layout.js\n");

/***/ })

});