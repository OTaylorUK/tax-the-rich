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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-inlinesvg */ \"./node_modules/react-inlinesvg/esm/index.js\");\n\n\n\nvar _this = undefined;\nvar Button = function(param) {\n    var content = param.content;\n    var buttonStyle = content.buttonStyle, isLink = content.isLink, text = content.text, image = content.image, link = content.link, buttonSize = content.buttonSize;\n    var btnSize = 'default';\n    if (buttonSize) {\n        btnSize = buttonSize === null || buttonSize === void 0 ? void 0 : buttonSize[0];\n    }\n    var btnClass = \"font-gaegu uppercase btn-style-\".concat(buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle[0].toLowerCase(), \" btn-size-\").concat(btnSize);\n    var linkURL, btnContent, linkTarget = '_self';\n    btnContent = text;\n    if (image) {\n        var ref;\n        btnContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"icon\",\n            \"no-cors\": \"true\",\n            src: image === null || image === void 0 ? void 0 : (ref = image.asset) === null || ref === void 0 ? void 0 : ref.url,\n            height: \"30px\",\n            width: \"30px\",\n            title: \"socialIcon\"\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n            lineNumber: 24,\n            columnNumber: 16\n        }, _this);\n    }\n    var outputLink = isLink;\n    if (isLink) {\n        if (typeof link === 'object' && link !== null) {\n            // is internal obj link\n            linkURL = \"/\".concat(link.current);\n        } else {\n            // is external link\n            linkURL = link;\n            linkTarget = '_blank';\n        }\n        if (linkURL === undefined) {\n            outputLink = false;\n        }\n    }\n    if (content.portableButton) {\n        console.log('BTN CONTENT::::', content);\n    }\n    if (outputLink && linkURL !== null) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: linkURL,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: btnClass,\n                target: linkTarget,\n                children: btnContent\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n            lineNumber: 55,\n            columnNumber: 4\n        }, _this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: btnClass,\n            children: btnContent\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/Button/index.js\",\n            lineNumber: 62,\n            columnNumber: 4\n        }, _this));\n    }\n};\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTswQkFBR0QsVUFBVTs7Ozs7Ozs7Ozs7SUFHM0QsQ0FBQyxNQUFNLENBQUM7UUFFUCxNQUFNLDZFQUNKbUIsQ0FBTTtZQUFDakIsU0FBUyxFQUFFTCxRQUFRO3NCQUFJRyxVQUFVOzs7Ozs7SUFFM0MsQ0FBQztBQUNGLENBQUM7S0E3REtaLE1BQU07QUErRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9CdXR0b24vaW5kZXguanM/ZWE5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU3ZnIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7Y29udGVudH0pID0+IHtcblxuXHRjb25zdCB7IGJ1dHRvblN0eWxlLCBpc0xpbmssIHRleHQsIGltYWdlLCBsaW5rLCBidXR0b25TaXplIH0gPSBjb250ZW50XG5cblxuXHRsZXQgYnRuU2l6ZSA9ICdkZWZhdWx0JztcblxuXHRpZiAoYnV0dG9uU2l6ZSkge1xuXHRcdGJ0blNpemUgPSBidXR0b25TaXplPy5bMF1cblx0fVxuXG5cdGNvbnN0IGJ0bkNsYXNzID0gYGZvbnQtZ2FlZ3UgdXBwZXJjYXNlIGJ0bi1zdHlsZS0ke2J1dHRvblN0eWxlPy5bMF0udG9Mb3dlckNhc2UoKX0gYnRuLXNpemUtJHtidG5TaXplfWBcblxuXG5cdGxldCBsaW5rVVJMLCBidG5Db250ZW50LCBsaW5rVGFyZ2V0ID0gJ19zZWxmJztcblx0XG5cdFxuXHRidG5Db250ZW50ID0gdGV4dDtcblxuXHRpZiAoaW1hZ2UpIHtcblx0XHRidG5Db250ZW50ID0gPFN2ZyBjbGFzc05hbWU9XCJpY29uXCIgbm8tY29ycz1cInRydWVcIiBzcmM9e2ltYWdlPy5hc3NldD8udXJsfSBoZWlnaHQ9XCIzMHB4XCIgd2lkdGg9XCIzMHB4XCIgdGl0bGU9XCJzb2NpYWxJY29uXCIgLz5cblx0XHRcblx0fVxuXG5cdGxldCBvdXRwdXRMaW5rID0gaXNMaW5rO1xuXG5cdGlmIChpc0xpbmspIHtcblx0XHRpZiAodHlwZW9mIGxpbmsgPT09ICdvYmplY3QnICYmIGxpbmsgIT09IG51bGwpIHtcblx0XHRcdC8vIGlzIGludGVybmFsIG9iaiBsaW5rXG5cdFx0XHRsaW5rVVJMID0gYC8ke2xpbmsuY3VycmVudH1gXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGlzIGV4dGVybmFsIGxpbmtcblx0XHRcdGxpbmtVUkwgPSBsaW5rXG5cdFx0XHRsaW5rVGFyZ2V0ID0gJ19ibGFuaydcblx0XHR9XG5cblx0XHRpZiAobGlua1VSTCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRvdXRwdXRMaW5rID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0XG5cdH1cblxuXHRpZiAoY29udGVudC5wb3J0YWJsZUJ1dHRvbikge1xuXHRjb25zb2xlLmxvZygnQlROIENPTlRFTlQ6Ojo6JywgY29udGVudCk7XG5cdFx0XG5cdH1cblxuXG5cdGlmIChvdXRwdXRMaW5rICYmIGxpbmtVUkwgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgIGhyZWY9e2xpbmtVUkx9PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e2J0bkNsYXNzfSAgdGFyZ2V0PXtsaW5rVGFyZ2V0fT57YnRuQ29udGVudH08L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtidG5DbGFzc30gPntidG5Db250ZW50fTwvYnV0dG9uPlxuXHRcdClcblx0fVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJuYW1lcyI6WyJMaW5rIiwiU3ZnIiwiQnV0dG9uIiwiY29udGVudCIsImJ1dHRvblN0eWxlIiwiaXNMaW5rIiwidGV4dCIsImltYWdlIiwibGluayIsImJ1dHRvblNpemUiLCJidG5TaXplIiwiYnRuQ2xhc3MiLCJ0b0xvd2VyQ2FzZSIsImxpbmtVUkwiLCJidG5Db250ZW50IiwibGlua1RhcmdldCIsImNsYXNzTmFtZSIsIm5vLWNvcnMiLCJzcmMiLCJhc3NldCIsInVybCIsImhlaWdodCIsIndpZHRoIiwidGl0bGUiLCJvdXRwdXRMaW5rIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInBvcnRhYmxlQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImhyZWYiLCJhIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Button/index.js\n");

/***/ })

});