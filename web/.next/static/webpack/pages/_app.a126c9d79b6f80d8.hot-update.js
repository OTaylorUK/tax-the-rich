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

/***/ "./comps/Menu/Stacked.js":
/*!*******************************!*\
  !*** ./comps/Menu/Stacked.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\nvar _this = undefined;\nvar StackedMenu = function(param) {\n    var content = param.content;\n    var _this1 = _this;\n    var text = content.text, social = content.social;\n    var siteURL = process.env.SITE_URL;\n    // const [siteURL, updateSiteURL] = useState();\n    // const query = `*[_type in [\"siteSEO\"]]\n    // {url}`\n    // useEffect(() => {\n    // \tconst getData = async () => {\n    // \t\tconst resp = await client.fetch(query);\n    // \t\tupdateSiteURL(resp);\n    // \t}\n    // \tgetData();\n    // }, []);\n    var btnClass = \"font-gaegu uppercase \";\n    // const url = Profile();\n    console.log(social);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: btnClass,\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Menu/Stacked.js\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center \",\n                children: social.map(function(button, index) {\n                    button.isLink = true;\n                    button.link = button.shareLink;\n                    button.siteLink = siteURL;\n                    button.image = button.icon;\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        content: button\n                    }, \"btn-\".concat(index), false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Menu/Stacked.js\",\n                        lineNumber: 42,\n                        columnNumber: 6\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Menu/Stacked.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Menu/Stacked.js\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, _this));\n};\n_c = StackedMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedMenu);\nvar _c;\n$RefreshReg$(_c, \"StackedMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9NZW51L1N0YWNrZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBQ0c7QUFDVTs7QUFFM0MsR0FBSyxDQUFDSSxXQUFXLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOztJQUU1QixHQUFLLENBQUdDLElBQUksR0FBYUQsT0FBTyxDQUF4QkMsSUFBSSxFQUFFQyxNQUFNLEdBQUtGLE9BQU8sQ0FBbEJFLE1BQU07SUFHcEIsR0FBSyxDQUFDQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRO0lBR3BDLEVBQStDO0lBQy9DLEVBQXlDO0lBQ3pDLEVBQVM7SUFFVCxFQUFvQjtJQUNwQixFQUFpQztJQUNqQyxFQUE0QztJQUM1QyxFQUF5QjtJQUN6QixFQUFLO0lBQ0wsRUFBYztJQUNkLEVBQVU7SUFFVixHQUFLLENBQUNDLFFBQVEsR0FBSSxDQUFxQjtJQUV2QyxFQUF5QjtJQUV6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU07SUFDbEIsTUFBTSw2RUFDSlEsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNEM7O3dGQUN6REMsQ0FBSTtnQkFBQ0QsU0FBUyxFQUFFSixRQUFROzBCQUFHTixJQUFJOzs7Ozs7d0ZBQy9CUyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNkI7MEJBQzNDVCxNQUFNLENBQUNXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBRUMsS0FBSyxFQUFLLENBQUM7b0JBRS9CRCxNQUFNLENBQUNFLE1BQU0sR0FBRyxJQUFJO29CQUNwQkYsTUFBTSxDQUFDRyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksU0FBUztvQkFDOUJKLE1BQU0sQ0FBQ0ssUUFBUSxHQUFHaEIsT0FBTztvQkFDekJXLE1BQU0sQ0FBQ00sS0FBSyxHQUFHTixNQUFNLENBQUNPLElBQUk7b0JBRTFCLE1BQU0sNkVBQ0oxQiwrQ0FBTTt3QkFBcUJLLE9BQU8sRUFBRWMsTUFBTTt1QkFBN0IsQ0FBSSxNQUFRLE9BQU5DLEtBQUs7Ozs7O2dCQUUzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFNSixDQUFDO0tBN0NLaEIsV0FBVztBQStDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9NZW51L1N0YWNrZWQuanM/ZTg3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdGFja2VkTWVudSA9ICh7Y29udGVudH0pID0+IHtcblxuXHRjb25zdCB7IHRleHQsIHNvY2lhbCB9ID0gY29udGVudDtcblxuXG5cdGNvbnN0IHNpdGVVUkwgPSBwcm9jZXNzLmVudi5TSVRFX1VSTFxuXG5cblx0Ly8gY29uc3QgW3NpdGVVUkwsIHVwZGF0ZVNpdGVVUkxdID0gdXNlU3RhdGUoKTtcblx0Ly8gY29uc3QgcXVlcnkgPSBgKltfdHlwZSBpbiBbXCJzaXRlU0VPXCJdXVxuXHQvLyB7dXJsfWBcblxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xuXHQvLyBcdGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG5cdC8vIFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcblx0Ly8gXHRcdHVwZGF0ZVNpdGVVUkwocmVzcCk7XG5cdC8vIFx0fVxuXHQvLyBcdGdldERhdGEoKTtcblx0Ly8gfSwgW10pO1xuXG5cdGNvbnN0IGJ0bkNsYXNzID0gYGZvbnQtZ2FlZ3UgdXBwZXJjYXNlIGBcblxuXHQvLyBjb25zdCB1cmwgPSBQcm9maWxlKCk7XG5cblx0Y29uc29sZS5sb2coc29jaWFsKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtidG5DbGFzc30+e3RleHR9PC9zcGFuPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBcIj5cblx0XHRcdHtzb2NpYWwubWFwKChidXR0b24sIGluZGV4KSA9PiB7XG5cblx0XHRcdFx0YnV0dG9uLmlzTGluayA9IHRydWU7XG5cdFx0XHRcdGJ1dHRvbi5saW5rID0gYnV0dG9uLnNoYXJlTGluaztcblx0XHRcdFx0YnV0dG9uLnNpdGVMaW5rID0gc2l0ZVVSTDtcblx0XHRcdFx0YnV0dG9uLmltYWdlID0gYnV0dG9uLmljb247XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8QnV0dG9uIGtleT17YGJ0bi0ke2luZGV4fWB9Y29udGVudD17YnV0dG9ufSAvPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHQ8L2Rpdj5cblx0KVxuXHRcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFN0YWNrZWRNZW51OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJjbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0YWNrZWRNZW51IiwiY29udGVudCIsInRleHQiLCJzb2NpYWwiLCJzaXRlVVJMIiwicHJvY2VzcyIsImVudiIsIlNJVEVfVVJMIiwiYnRuQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm1hcCIsImJ1dHRvbiIsImluZGV4IiwiaXNMaW5rIiwibGluayIsInNoYXJlTGluayIsInNpdGVMaW5rIiwiaW1hZ2UiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Menu/Stacked.js\n");

/***/ })

});