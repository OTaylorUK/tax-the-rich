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

/***/ "./comps/Button/index.js":
/*!*******************************!*\
  !*** ./comps/Button/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PortableContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PortableContent */ \"./comps/PortableContent/index.js\");\n\n\n// import Svg from 'react-inlinesvg';\n\nvar _this = undefined;\nvar Button = function(param) {\n    var content = param.content;\n    var buttonStyle = content.buttonStyle, isLink = content.isLink, text = content.text, image = content.image, link = content.link, buttonSize = content.buttonSize;\n    var btnSize = 'default';\n    if (buttonSize) {\n        btnSize = buttonSize === null || buttonSize === void 0 ? void 0 : buttonSize[0];\n    }\n    var btnClass = \"font-gaegu uppercase btn-style-\".concat(buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle[0].toLowerCase(), \" btn-size-\").concat(btnSize);\n    var linkURL, btnContent, linkTarget = '_self';\n    btnContent = text;\n    if (image) {\n    // btnContent = <Svg className=\"icon\" no-cors=\"true\" src={image?.asset?.url} height=\"30px\" width=\"30px\" title=\"socialIcon\" />\n    }\n    var outputLink = isLink;\n    if (isLink) {\n        if (typeof link === 'object' && link !== null) {\n            // is internal obj link\n            linkURL = \"/\".concat(link.current);\n        } else {\n            // is external link\n            linkURL = link;\n            linkTarget = '_blank';\n        }\n        if (linkURL === undefined) {\n            outputLink = false;\n        }\n    }\n    if (content.portableButton) {\n        console.log('BTN CONTENT::::', content);\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableContent__WEBPACK_IMPORTED_MODULE_2__.PortableButton, {\n            blocks: content.portableButton\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n            lineNumber: 49,\n            columnNumber: 11\n        }, _this));\n    }\n    if (outputLink && linkURL !== null) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: linkURL,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: btnClass,\n                target: linkTarget,\n                children: btnContent\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n            lineNumber: 55,\n            columnNumber: 4\n        }, _this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: btnClass,\n            children: btnContent\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n            lineNumber: 62,\n            columnNumber: 4\n        }, _this));\n    }\n};\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9CdXR0b24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUM1QixFQUFxQztBQUNjOztBQUNuRCxHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFkQyxPQUFPLFNBQVBBLE9BQU87SUFFdkIsR0FBSyxDQUFHQyxXQUFXLEdBQTRDRCxPQUFPLENBQTlEQyxXQUFXLEVBQUVDLE1BQU0sR0FBb0NGLE9BQU8sQ0FBakRFLE1BQU0sRUFBRUMsSUFBSSxHQUE4QkgsT0FBTyxDQUF6Q0csSUFBSSxFQUFFQyxLQUFLLEdBQXVCSixPQUFPLENBQW5DSSxLQUFLLEVBQUVDLElBQUksR0FBaUJMLE9BQU8sQ0FBNUJLLElBQUksRUFBRUMsVUFBVSxHQUFLTixPQUFPLENBQXRCTSxVQUFVO0lBRzFELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLENBQVM7SUFFdkIsRUFBRSxFQUFFRCxVQUFVLEVBQUUsQ0FBQztRQUNoQkMsT0FBTyxHQUFHRCxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxVQUFVLENBQUcsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBSyxDQUFDRSxRQUFRLEdBQUksQ0FBK0IsaUNBQTZDRCxNQUFPLENBQWxETixXQUFXLGFBQVhBLFdBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsV0FBVyxDQUFHLENBQUMsRUFBRVEsV0FBVyxJQUFHLENBQVUsYUFBVSxPQUFSRixPQUFPO0lBR3JHLEdBQUcsQ0FBQ0csT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsR0FBRyxDQUFPO0lBRzdDRCxVQUFVLEdBQUdSLElBQUk7SUFFakIsRUFBRSxFQUFFQyxLQUFLLEVBQUUsQ0FBQztJQUNYLEVBQTZIO0lBRTlILENBQUM7SUFFRCxHQUFHLENBQUNTLFVBQVUsR0FBR1gsTUFBTTtJQUV2QixFQUFFLEVBQUVBLE1BQU0sRUFBRSxDQUFDO1FBQ1osRUFBRSxFQUFFLE1BQU0sQ0FBQ0csSUFBSSxLQUFLLENBQVEsV0FBSUEsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQy9DLEVBQXVCO1lBQ3ZCSyxPQUFPLEdBQUksQ0FBQyxHQUFlLE9BQWJMLElBQUksQ0FBQ1MsT0FBTztRQUMzQixDQUFDLE1BQU0sQ0FBQztZQUNQLEVBQW1CO1lBQ25CSixPQUFPLEdBQUdMLElBQUk7WUFDZE8sVUFBVSxHQUFHLENBQVE7UUFDdEIsQ0FBQztRQUVELEVBQUUsRUFBRUYsT0FBTyxLQUFLSyxTQUFTLEVBQUUsQ0FBQztZQUMzQkYsVUFBVSxHQUFHLEtBQUs7UUFDbkIsQ0FBQztJQUdGLENBQUM7SUFFRCxFQUFFLEVBQUViLE9BQU8sQ0FBQ2dCLGNBQWMsRUFBRSxDQUFDO1FBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpQixrQkFBRWxCLE9BQU87UUFDckMsTUFBTSw2RUFBR0YsNERBQWM7WUFBQ3FCLE1BQU0sRUFBRW5CLE9BQU8sQ0FBQ2dCLGNBQWM7Ozs7OztJQUN2RCxDQUFDO0lBR0QsRUFBRSxFQUFFSCxVQUFVLElBQUlILE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxNQUFNLDZFQUNKYixrREFBSTtZQUFFdUIsSUFBSSxFQUFFVixPQUFPO2tHQUNsQlcsQ0FBQztnQkFBQ0MsU0FBUyxFQUFFZCxRQUFRO2dCQUFHZSxNQUFNLEVBQUVYLFVBQVU7MEJBQUdELFVBQVU7Ozs7Ozs7Ozs7O0lBRzNELENBQUMsTUFBTSxDQUFDO1FBRVAsTUFBTSw2RUFDSmEsQ0FBTTtZQUFDRixTQUFTLEVBQUVkLFFBQVE7c0JBQUlHLFVBQVU7Ozs7OztJQUUzQyxDQUFDO0FBQ0YsQ0FBQztLQTdES1osTUFBTTtBQStEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL0J1dHRvbi9pbmRleC5qcz9lYTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBTdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCB7IFBvcnRhYmxlQnV0dG9uIH0gZnJvbSBcIi4uL1BvcnRhYmxlQ29udGVudFwiO1xuY29uc3QgQnV0dG9uID0gKHtjb250ZW50fSkgPT4ge1xuXG5cdGNvbnN0IHsgYnV0dG9uU3R5bGUsIGlzTGluaywgdGV4dCwgaW1hZ2UsIGxpbmssIGJ1dHRvblNpemUgfSA9IGNvbnRlbnRcblxuXG5cdGxldCBidG5TaXplID0gJ2RlZmF1bHQnO1xuXG5cdGlmIChidXR0b25TaXplKSB7XG5cdFx0YnRuU2l6ZSA9IGJ1dHRvblNpemU/LlswXVxuXHR9XG5cblx0Y29uc3QgYnRuQ2xhc3MgPSBgZm9udC1nYWVndSB1cHBlcmNhc2UgYnRuLXN0eWxlLSR7YnV0dG9uU3R5bGU/LlswXS50b0xvd2VyQ2FzZSgpfSBidG4tc2l6ZS0ke2J0blNpemV9YFxuXG5cblx0bGV0IGxpbmtVUkwsIGJ0bkNvbnRlbnQsIGxpbmtUYXJnZXQgPSAnX3NlbGYnO1xuXHRcblx0XG5cdGJ0bkNvbnRlbnQgPSB0ZXh0O1xuXG5cdGlmIChpbWFnZSkge1xuXHRcdC8vIGJ0bkNvbnRlbnQgPSA8U3ZnIGNsYXNzTmFtZT1cImljb25cIiBuby1jb3JzPVwidHJ1ZVwiIHNyYz17aW1hZ2U/LmFzc2V0Py51cmx9IGhlaWdodD1cIjMwcHhcIiB3aWR0aD1cIjMwcHhcIiB0aXRsZT1cInNvY2lhbEljb25cIiAvPlxuXHRcdFxuXHR9XG5cblx0bGV0IG91dHB1dExpbmsgPSBpc0xpbms7XG5cblx0aWYgKGlzTGluaykge1xuXHRcdGlmICh0eXBlb2YgbGluayA9PT0gJ29iamVjdCcgJiYgbGluayAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gaXMgaW50ZXJuYWwgb2JqIGxpbmtcblx0XHRcdGxpbmtVUkwgPSBgLyR7bGluay5jdXJyZW50fWBcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaXMgZXh0ZXJuYWwgbGlua1xuXHRcdFx0bGlua1VSTCA9IGxpbmtcblx0XHRcdGxpbmtUYXJnZXQgPSAnX2JsYW5rJ1xuXHRcdH1cblxuXHRcdGlmIChsaW5rVVJMID09PSB1bmRlZmluZWQpIHtcblx0XHRcdG91dHB1dExpbmsgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRcblx0fVxuXG5cdGlmIChjb250ZW50LnBvcnRhYmxlQnV0dG9uKSB7XG5cdGNvbnNvbGUubG9nKCdCVE4gQ09OVEVOVDo6OjonLCBjb250ZW50KTtcblx0XHRyZXR1cm4gKDxQb3J0YWJsZUJ1dHRvbiBibG9ja3M9e2NvbnRlbnQucG9ydGFibGVCdXR0b259Lz4pXG5cdH1cblxuXG5cdGlmIChvdXRwdXRMaW5rICYmIGxpbmtVUkwgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgIGhyZWY9e2xpbmtVUkx9PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e2J0bkNsYXNzfSAgdGFyZ2V0PXtsaW5rVGFyZ2V0fT57YnRuQ29udGVudH08L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtidG5DbGFzc30gPntidG5Db250ZW50fTwvYnV0dG9uPlxuXHRcdClcblx0fVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJuYW1lcyI6WyJMaW5rIiwiUG9ydGFibGVCdXR0b24iLCJCdXR0b24iLCJjb250ZW50IiwiYnV0dG9uU3R5bGUiLCJpc0xpbmsiLCJ0ZXh0IiwiaW1hZ2UiLCJsaW5rIiwiYnV0dG9uU2l6ZSIsImJ0blNpemUiLCJidG5DbGFzcyIsInRvTG93ZXJDYXNlIiwibGlua1VSTCIsImJ0bkNvbnRlbnQiLCJsaW5rVGFyZ2V0Iiwib3V0cHV0TGluayIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJwb3J0YWJsZUJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJibG9ja3MiLCJocmVmIiwiYSIsImNsYXNzTmFtZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Button/index.js\n");

/***/ }),

/***/ "./comps/PortableContent/Image.js":
/*!****************************************!*\
  !*** ./comps/PortableContent/Image.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Image(prop) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n        children: \"img\"\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/Image.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n{}var _c;\n$RefreshReg$(_c, \"Image\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvSW1hZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBQ1E7U0FHeEJFLEtBQUssQ0FBQ0MsSUFBSSxFQUFFLENBQUM7SUFHcEIsTUFBTSw2RUFDSEMsQ0FBTTtrQkFBRSxDQUVUOzs7Ozs7QUFFSixDQUFDO0tBUlFGLEtBQUs7QUFVZCwrREFBZUEsS0FBSztBQUNwQixDQUFDLENBQW9IIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BvcnRhYmxlQ29udGVudC9JbWFnZS5qcz81MjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcblxuXG5mdW5jdGlvbiBJbWFnZShwcm9wKSB7XG4gIFxuICBcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlID5cbiAgICAgIGltZ1xuICAgIDwvZmlndXJlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG57LyogPFN2ZyBjbGFzc05hbWU9XCJpY29uXCIgbm8tY29ycz1cInRydWVcIiBzcmM9e2ltYWdlPy5hc3NldD8udXJsfSBoZWlnaHQ9XCIzMHB4XCIgd2lkdGg9XCIzMHB4XCIgdGl0bGU9XCJzb2NpYWxJY29uXCIgLz4gKi99Il0sIm5hbWVzIjpbIlJlYWN0IiwiU3ZnIiwiSW1hZ2UiLCJwcm9wIiwiZmlndXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/PortableContent/Image.js\n");

/***/ }),

/***/ "./comps/PortableContent/PortableButton.js":
/*!*************************************************!*\
  !*** ./comps/PortableContent/PortableButton.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./comps/PortableContent/Image.js\");\n\n\n// import {PortableText} from '@portabletext/react'\n\nvar _this = undefined;\nvar PortableButton = function(props) {\n    console.log(props);\n    var blocks = props.blocks, context = props.context;\n    // add variables to pass to component inside portableText\n    blocks.map(function(content, index) {\n        if (content._type === 'dropDown') {\n            content.context = context;\n        }\n    });\n    if (!blocks) {\n        console.error('Missing blocks');\n        return null;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'max-w-sm flex flex-wrap items-center justify-center mb-10',\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PortableText, {\n            value: blocks,\n            components: {\n                types: {\n                    image: _Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                },\n                block: {\n                    // Ex. 1: customizing common block types\n                    span: function(param) {\n                        var children = param.children;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold uppercase mb-10\",\n                            children: children\n                        }, void 0, false, void 0, void 0);\n                    }\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_c = PortableButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortableButton);\nvar _c;\n$RefreshReg$(_c, \"PortableButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvUG9ydGFibGVCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUN6QixFQUFtRDtBQUN4Qjs7QUFFM0IsR0FBSyxDQUFDRSxjQUFjLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztJQUdqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7SUFDakIsR0FBSyxDQUFFRyxNQUFNLEdBQWFILEtBQUssQ0FBeEJHLE1BQU0sRUFBRUMsT0FBTyxHQUFJSixLQUFLLENBQWhCSSxPQUFPO0lBRXRCLEVBQXlEO0lBQ3pERCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDOUIsRUFBRSxFQUFFRCxPQUFPLENBQUNFLEtBQUssS0FBSyxDQUFVLFdBQUUsQ0FBQztZQUNqQ0YsT0FBTyxDQUFDRixPQUFPLEdBQUdBLE9BQU87UUFDM0IsQ0FBQztJQUNKLENBQUM7SUFJQSxFQUFFLEdBQUdELE1BQU0sRUFBRSxDQUFDO1FBQ1pGLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDLENBQWdCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJO0lBQ2IsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFLENBQTJEOzhGQUV4RUMsWUFBWTtZQUNYQyxLQUFLLEVBQUVWLE1BQU07WUFDYlcsVUFBVSxFQUFFLENBQUM7Z0JBQ1hDLEtBQUssRUFBRSxDQUFDO29CQUNOQyxLQUFLLEVBQUVsQiw4Q0FBSztnQkFDZCxDQUFDO2dCQUNEbUIsS0FBSyxFQUFFLENBQUM7b0JBQ04sRUFBd0M7b0JBQ3hDQyxJQUFJLEVBQUUsUUFBUTs0QkFBTEMsUUFBUSxTQUFSQSxRQUFRO3NDQUFPLE1BQU1SLENBQUFBLDZEQUFBQSxDQUFMTyxDQUFJOzRCQUFDUCxTQUFTLEVBQUMsQ0FBMkI7c0NBQUVRLFFBQVE7OztnQkFHL0UsQ0FBQztZQUNILENBQUM7Ozs7Ozs7Ozs7O0FBS1QsQ0FBQztLQXhDS3BCLGNBQWM7QUEwQ3BCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BvcnRhYmxlQ29udGVudC9Qb3J0YWJsZUJ1dHRvbi5qcz9iYzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7UG9ydGFibGVUZXh0fSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnXG5cbmNvbnN0IFBvcnRhYmxlQnV0dG9uID0gKHByb3BzKSA9PiB7XG5cblxuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGNvbnN0IHtibG9ja3MsIGNvbnRleHR9ID0gcHJvcHNcblxuICAvLyBhZGQgdmFyaWFibGVzIHRvIHBhc3MgdG8gY29tcG9uZW50IGluc2lkZSBwb3J0YWJsZVRleHRcbiAgYmxvY2tzLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoY29udGVudC5fdHlwZSA9PT0gJ2Ryb3BEb3duJykge1xuICAgICAgY29udGVudC5jb250ZXh0ID0gY29udGV4dFxuICAgIH1cblx0fSlcblxuXG5cbiAgaWYgKCFibG9ja3MpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIGJsb2NrcycpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eydtYXgtdy1zbSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItMTAnfT5cbiAgICAgICBcbiAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgdmFsdWU9e2Jsb2Nrc31cbiAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICBpbWFnZTogSW1hZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9jazoge1xuICAgICAgICAgICAgLy8gRXguIDE6IGN1c3RvbWl6aW5nIGNvbW1vbiBibG9jayB0eXBlc1xuICAgICAgICAgICAgc3BhbjogKHsgY2hpbGRyZW4gfSkgPT4gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHVwcGVyY2FzZSBtYi0xMFwiPntjaGlsZHJlbn08L3NwYW4+LFxuICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFibGVCdXR0b25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUG9ydGFibGVCdXR0b24iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJibG9ja3MiLCJjb250ZXh0IiwibWFwIiwiY29udGVudCIsImluZGV4IiwiX3R5cGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIlBvcnRhYmxlVGV4dCIsInZhbHVlIiwiY29tcG9uZW50cyIsInR5cGVzIiwiaW1hZ2UiLCJibG9jayIsInNwYW4iLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PortableContent/PortableButton.js\n");

/***/ }),

/***/ "./comps/PortableContent/index.js":
/*!****************************************!*\
  !*** ./comps/PortableContent/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PortableButton\": function() { return /* reexport safe */ _PortableButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _PortableButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortableButton */ \"./comps/PortableContent/PortableButton.js\");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvUG9ydGFibGVDb250ZW50L2luZGV4LmpzP2Q5OGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtkZWZhdWx0IGFzIFBvcnRhYmxlQnV0dG9ufSBmcm9tICcuL1BvcnRhYmxlQnV0dG9uJyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiUG9ydGFibGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/PortableContent/index.js\n");

/***/ })

});