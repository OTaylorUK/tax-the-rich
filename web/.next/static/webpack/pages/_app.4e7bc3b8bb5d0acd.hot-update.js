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

/***/ "./comps/PortableContent/PortableButton.js":
/*!*************************************************!*\
  !*** ./comps/PortableContent/PortableButton.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./comps/PortableContent/Image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _this = undefined;\nvar PortableButton = function(param1) {\n    var content = param1.content;\n    var blocks = content.portableButton, buttonStyle = content.buttonStyle, buttonSize = content.buttonSize, intLink = content.intLink, link = content.link, isLink = content.isLink;\n    var btnContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_4__.PortableText, {\n        value: blocks,\n        components: {\n            types: {\n                figure: _Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            },\n            block: {\n                // Ex. 1: customizing common block types\n                normal: function(param) {\n                    var children = param.children;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-gaegu uppercase\",\n                        children: children\n                    }, void 0, false, void 0, void 0);\n                },\n                span: function(param) {\n                    var children = param.children;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold uppercase\",\n                        children: children\n                    }, void 0, false, void 0, void 0);\n                }\n            }\n        }\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n    var linkURL, linkTarget, outputLink = isLink;\n    if (outputLink) {\n        if (link !== null) {\n            linkURL = \"\".concat(link);\n            linkTarget = '_blank';\n        } else if (intLink !== null) {\n            linkURL = \"/\".concat(intLink);\n            linkTarget = '_self';\n        } else {\n            outputLink = false;\n        }\n    }\n    var classList = 'max-w-sm flex flex-wrap gap-1 flex-row items-center justify-center ';\n    if (!outputLink) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: classList,\n            children: btnContent\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: linkURL,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: classList,\n                target: linkTarget,\n                children: btnContent\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this));\n    }\n};\n_c = PortableButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortableButton);\nvar _c;\n$RefreshReg$(_c, \"PortableButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvUG9ydGFibGVCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUN1QjtBQUNyQjtBQUNDOztBQUU1QixHQUFLLENBQUNJLGNBQWMsR0FBRyxRQUFRLFNBQU8sQ0FBQztRQUFkQyxPQUFPLFVBQVBBLE9BQU87SUFFOUIsR0FBSyxDQUFtQkMsTUFBTSxHQUFvREQsT0FBTyxDQUFsRkUsY0FBYyxFQUFXQyxXQUFXLEdBQXVDSCxPQUFPLENBQXpERyxXQUFXLEVBQUVDLFVBQVUsR0FBMkJKLE9BQU8sQ0FBNUNJLFVBQVUsRUFBRUMsT0FBTyxHQUFrQkwsT0FBTyxDQUFoQ0ssT0FBTyxFQUFFQyxJQUFJLEdBQVlOLE9BQU8sQ0FBdkJNLElBQUksRUFBRUMsTUFBTSxHQUFJUCxPQUFPLENBQWpCTyxNQUFNO0lBRTlFLEdBQUssQ0FBQ0MsVUFBVSwrRUFDYlosNkRBQVk7UUFDYmEsS0FBSyxFQUFFUixNQUFNO1FBQ2JTLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLEtBQUssRUFBRSxDQUFDO2dCQUNOQyxNQUFNLEVBQUVmLDhDQUFLO1lBQ2YsQ0FBQztZQUNEZ0IsS0FBSyxFQUFFLENBQUM7Z0JBQ04sRUFBd0M7Z0JBQ3hDQyxNQUFNLEVBQUUsUUFBUTt3QkFBTEMsUUFBUSxTQUFSQSxRQUFRO2tDQUFPLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMQyxDQUFJO3dCQUFDRCxTQUFTLEVBQUMsQ0FBc0I7a0NBQUVELFFBQVE7OztnQkFDMUVFLElBQUksRUFBRSxRQUFRO3dCQUFMRixRQUFRLFNBQVJBLFFBQVE7a0NBQU8sTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxDLENBQUk7d0JBQUNELFNBQVMsRUFBQyxDQUFxQjtrQ0FBRUQsUUFBUTs7O1lBQ3pFLENBQUM7UUFDSCxDQUFDOzs7Ozs7SUFHSixHQUFHLENBQUNHLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEdBQUdiLE1BQU07SUFFM0MsRUFBRSxFQUFFYSxVQUFVLEVBQUUsQ0FBQztRQUNmLEVBQUUsRUFBRWQsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2xCWSxPQUFPLEdBQUksR0FBTyxPQUFMWixJQUFJO1lBQ3BCYSxVQUFVLEdBQUcsQ0FBUTtRQUNwQixDQUFDLE1BQU0sRUFBRSxFQUFDZCxPQUFPLEtBQUssSUFBSSxFQUFDLENBQUM7WUFDMUJhLE9BQU8sR0FBSSxDQUFDLEdBQVUsT0FBUmIsT0FBTztZQUN4QmMsVUFBVSxHQUFHLENBQU87UUFDbkIsQ0FBQyxNQUFNLENBQUM7WUFDTkMsVUFBVSxHQUFHLEtBQUs7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFHLENBQUNDLFNBQVMsR0FBRyxDQUFxRTtJQUdyRixFQUFFLEdBQUdELFVBQVUsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sNkVBQ0hFLENBQU07WUFBQ04sU0FBUyxFQUFFSyxTQUFTO3NCQUFHYixVQUFVOzs7Ozs7SUFFN0MsQ0FBQyxNQUFNLENBQUM7UUFDTixNQUFNLDZFQUNIVixrREFBSTtZQUFFeUIsSUFBSSxFQUFFTCxPQUFPO2tHQUNyQk0sQ0FBQztnQkFBQ1IsU0FBUyxFQUFFSyxTQUFTO2dCQUFHSSxNQUFNLEVBQUVOLFVBQVU7MEJBQUdYLFVBQVU7Ozs7Ozs7Ozs7O0lBRzNELENBQUM7QUFJSCxDQUFDO0tBbERLVCxjQUFjO0FBb0RwQiwrREFBZUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvUG9ydGFibGVCdXR0b24uanM/YmMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BvcnRhYmxlVGV4dH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgUG9ydGFibGVCdXR0b24gPSAoe2NvbnRlbnR9KSA9PiB7XG5cbiAgY29uc3Qge3BvcnRhYmxlQnV0dG9uIDogYmxvY2tzLCBidXR0b25TdHlsZSwgYnV0dG9uU2l6ZSwgaW50TGluaywgbGluaywgaXNMaW5rfSA9IGNvbnRlbnQgO1xuXG4gIGNvbnN0IGJ0bkNvbnRlbnQgPVxuICAgIDxQb3J0YWJsZVRleHRcbiAgICB2YWx1ZT17YmxvY2tzfVxuICAgIGNvbXBvbmVudHM9e3tcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGZpZ3VyZTogSW1hZ2UsXG4gICAgICB9LFxuICAgICAgYmxvY2s6IHtcbiAgICAgICAgLy8gRXguIDE6IGN1c3RvbWl6aW5nIGNvbW1vbiBibG9jayB0eXBlc1xuICAgICAgICBub3JtYWw6ICh7IGNoaWxkcmVuIH0pID0+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZ2FlZ3UgdXBwZXJjYXNlXCI+e2NoaWxkcmVufTwvc3Bhbj4sXG4gICAgICAgIHNwYW46ICh7IGNoaWxkcmVuIH0pID0+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2VcIj57Y2hpbGRyZW59PC9zcGFuPixcbiAgICAgIH0sXG4gICAgfX1cbiAgICAvPlxuICBcblx0bGV0IGxpbmtVUkwsIGxpbmtUYXJnZXQsIG91dHB1dExpbmsgPSBpc0xpbms7XG4gIFxuICBpZiAob3V0cHV0TGluaykge1xuICAgIGlmIChsaW5rICE9PSBudWxsKSB7XG4gICAgICBsaW5rVVJMID0gYCR7bGlua31gXG5cdFx0XHRsaW5rVGFyZ2V0ID0gJ19ibGFuaydcbiAgICB9IGVsc2UgaWYoaW50TGluayAhPT0gbnVsbCl7XG4gICAgICBsaW5rVVJMID0gYC8ke2ludExpbmt9YFxuXHRcdFx0bGlua1RhcmdldCA9ICdfc2VsZidcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0TGluayA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbGV0IGNsYXNzTGlzdCA9ICdtYXgtdy1zbSBmbGV4IGZsZXgtd3JhcCBnYXAtMSBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJztcblxuXG4gIGlmICghb3V0cHV0TGluaykge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NMaXN0fT57YnRuQ29udGVudH08L2J1dHRvbj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rICBocmVmPXtsaW5rVVJMfT5cblx0XHRcdFx0PGEgY2xhc3NOYW1lPXtjbGFzc0xpc3R9ICB0YXJnZXQ9e2xpbmtUYXJnZXR9PntidG5Db250ZW50fTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFibGVCdXR0b25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvcnRhYmxlVGV4dCIsIkltYWdlIiwiTGluayIsIlBvcnRhYmxlQnV0dG9uIiwiY29udGVudCIsImJsb2NrcyIsInBvcnRhYmxlQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJidXR0b25TaXplIiwiaW50TGluayIsImxpbmsiLCJpc0xpbmsiLCJidG5Db250ZW50IiwidmFsdWUiLCJjb21wb25lbnRzIiwidHlwZXMiLCJmaWd1cmUiLCJibG9jayIsIm5vcm1hbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3BhbiIsImxpbmtVUkwiLCJsaW5rVGFyZ2V0Iiwib3V0cHV0TGluayIsImNsYXNzTGlzdCIsImJ1dHRvbiIsImhyZWYiLCJhIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/PortableContent/PortableButton.js\n");

/***/ })

});