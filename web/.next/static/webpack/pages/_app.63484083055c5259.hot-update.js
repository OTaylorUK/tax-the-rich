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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./comps/PortableContent/Image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _this = undefined;\nvar PortableButton = function(param1) {\n    var content = param1.content;\n    var blocks = content.portableButton, buttonStyle = content.buttonStyle, buttonSize = content.buttonSize, intLink = content.intLink, link = content.link, isLink = content.isLink;\n    var btnContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_4__.PortableText, {\n        value: blocks,\n        components: {\n            types: {\n                figure: _Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            },\n            block: {\n                // Ex. 1: customizing common block types\n                normal: function(param) {\n                    var children = param.children;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-gaegu uppercase\",\n                        children: children\n                    }, void 0, false, void 0, void 0);\n                },\n                span: function(param) {\n                    var children = param.children;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold uppercase\",\n                        children: children\n                    }, void 0, false, void 0, void 0);\n                }\n            }\n        }\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n    var linkURL, linkTarget, outputLink = isLink;\n    if (outputLink) {\n        if (link !== null) {\n            linkURL = \"\".concat(link);\n            linkTarget = '_blank';\n        } else if (intLink !== null) {\n            linkURL = \"/\".concat(intLink);\n            linkTarget = '_self';\n        } else {\n            outputLink = false;\n        }\n    }\n    console.log('buttonStyle::', buttonStyle);\n    // let style = buttonStyle == ''\n    var classList = \"max-w-sm flex flex-wrap gap-1 flex-row items-center justify-center \";\n    if (!outputLink) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: classList,\n            children: btnContent\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: linkURL,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: classList,\n                target: linkTarget,\n                children: btnContent\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableContent/PortableButton.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this));\n    }\n};\n_c = PortableButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortableButton);\nvar _c;\n$RefreshReg$(_c, \"PortableButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Qb3J0YWJsZUNvbnRlbnQvUG9ydGFibGVCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUN1QjtBQUNyQjtBQUNDOztBQUU1QixHQUFLLENBQUNJLGNBQWMsR0FBRyxRQUFRLFNBQU8sQ0FBQztRQUFkQyxPQUFPLFVBQVBBLE9BQU87SUFFOUIsR0FBSyxDQUFtQkMsTUFBTSxHQUFvREQsT0FBTyxDQUFsRkUsY0FBYyxFQUFXQyxXQUFXLEdBQXVDSCxPQUFPLENBQXpERyxXQUFXLEVBQUVDLFVBQVUsR0FBMkJKLE9BQU8sQ0FBNUNJLFVBQVUsRUFBRUMsT0FBTyxHQUFrQkwsT0FBTyxDQUFoQ0ssT0FBTyxFQUFFQyxJQUFJLEdBQVlOLE9BQU8sQ0FBdkJNLElBQUksRUFBRUMsTUFBTSxHQUFJUCxPQUFPLENBQWpCTyxNQUFNO0lBRTlFLEdBQUssQ0FBQ0MsVUFBVSwrRUFDYlosNkRBQVk7UUFDYmEsS0FBSyxFQUFFUixNQUFNO1FBQ2JTLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLEtBQUssRUFBRSxDQUFDO2dCQUNOQyxNQUFNLEVBQUVmLDhDQUFLO1lBQ2YsQ0FBQztZQUNEZ0IsS0FBSyxFQUFFLENBQUM7Z0JBQ04sRUFBd0M7Z0JBQ3hDQyxNQUFNLEVBQUUsUUFBUTt3QkFBTEMsUUFBUSxTQUFSQSxRQUFRO2tDQUFPLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMQyxDQUFJO3dCQUFDRCxTQUFTLEVBQUMsQ0FBc0I7a0NBQUVELFFBQVE7OztnQkFDMUVFLElBQUksRUFBRSxRQUFRO3dCQUFMRixRQUFRLFNBQVJBLFFBQVE7a0NBQU8sTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxDLENBQUk7d0JBQUNELFNBQVMsRUFBQyxDQUFxQjtrQ0FBRUQsUUFBUTs7O1lBQ3pFLENBQUM7UUFDSCxDQUFDOzs7Ozs7SUFHSixHQUFHLENBQUNHLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEdBQUdiLE1BQU07SUFFM0MsRUFBRSxFQUFFYSxVQUFVLEVBQUUsQ0FBQztRQUNmLEVBQUUsRUFBRWQsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2xCWSxPQUFPLEdBQUksR0FBTyxPQUFMWixJQUFJO1lBQ3BCYSxVQUFVLEdBQUcsQ0FBUTtRQUNwQixDQUFDLE1BQU0sRUFBRSxFQUFDZCxPQUFPLEtBQUssSUFBSSxFQUFDLENBQUM7WUFDMUJhLE9BQU8sR0FBSSxDQUFDLEdBQVUsT0FBUmIsT0FBTztZQUN4QmMsVUFBVSxHQUFHLENBQU87UUFDbkIsQ0FBQyxNQUFNLENBQUM7WUFDTkMsVUFBVSxHQUFHLEtBQUs7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZSxnQkFBRW5CLFdBQVc7SUFDdEMsRUFBZ0M7SUFFaEMsR0FBRyxDQUFDb0IsU0FBUyxHQUFJLENBQW1FO0lBR3BGLEVBQUUsR0FBR0gsVUFBVSxFQUFFLENBQUM7UUFDaEIsTUFBTSw2RUFDSEksQ0FBTTtZQUFDUixTQUFTLEVBQUVPLFNBQVM7c0JBQUdmLFVBQVU7Ozs7OztJQUU3QyxDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sNkVBQ0hWLGtEQUFJO1lBQUUyQixJQUFJLEVBQUVQLE9BQU87a0dBQ3JCUSxDQUFDO2dCQUFDVixTQUFTLEVBQUVPLFNBQVM7Z0JBQUdJLE1BQU0sRUFBRVIsVUFBVTswQkFBR1gsVUFBVTs7Ozs7Ozs7Ozs7SUFHM0QsQ0FBQztBQUVILENBQUM7S0FsREtULGNBQWM7QUFvRHBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BvcnRhYmxlQ29udGVudC9Qb3J0YWJsZUJ1dHRvbi5qcz9iYzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UG9ydGFibGVUZXh0fSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQb3J0YWJsZUJ1dHRvbiA9ICh7Y29udGVudH0pID0+IHtcblxuICBjb25zdCB7cG9ydGFibGVCdXR0b24gOiBibG9ja3MsIGJ1dHRvblN0eWxlLCBidXR0b25TaXplLCBpbnRMaW5rLCBsaW5rLCBpc0xpbmt9ID0gY29udGVudCA7XG5cbiAgY29uc3QgYnRuQ29udGVudCA9XG4gICAgPFBvcnRhYmxlVGV4dFxuICAgIHZhbHVlPXtibG9ja3N9XG4gICAgY29tcG9uZW50cz17e1xuICAgICAgdHlwZXM6IHtcbiAgICAgICAgZmlndXJlOiBJbWFnZSxcbiAgICAgIH0sXG4gICAgICBibG9jazoge1xuICAgICAgICAvLyBFeC4gMTogY3VzdG9taXppbmcgY29tbW9uIGJsb2NrIHR5cGVzXG4gICAgICAgIG5vcm1hbDogKHsgY2hpbGRyZW4gfSkgPT4gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1nYWVndSB1cHBlcmNhc2VcIj57Y2hpbGRyZW59PC9zcGFuPixcbiAgICAgICAgc3BhbjogKHsgY2hpbGRyZW4gfSkgPT4gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHVwcGVyY2FzZVwiPntjaGlsZHJlbn08L3NwYW4+LFxuICAgICAgfSxcbiAgICB9fVxuICAgIC8+XG4gIFxuXHRsZXQgbGlua1VSTCwgbGlua1RhcmdldCwgb3V0cHV0TGluayA9IGlzTGluaztcbiAgXG4gIGlmIChvdXRwdXRMaW5rKSB7XG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIGxpbmtVUkwgPSBgJHtsaW5rfWBcblx0XHRcdGxpbmtUYXJnZXQgPSAnX2JsYW5rJ1xuICAgIH0gZWxzZSBpZihpbnRMaW5rICE9PSBudWxsKXtcbiAgICAgIGxpbmtVUkwgPSBgLyR7aW50TGlua31gXG5cdFx0XHRsaW5rVGFyZ2V0ID0gJ19zZWxmJ1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRMaW5rID0gZmFsc2VcbiAgICB9XG4gIH1cbmNvbnNvbGUubG9nKCdidXR0b25TdHlsZTo6JywgYnV0dG9uU3R5bGUpO1xuICAvLyBsZXQgc3R5bGUgPSBidXR0b25TdHlsZSA9PSAnJ1xuXG4gIGxldCBjbGFzc0xpc3QgPSBgbWF4LXctc20gZmxleCBmbGV4LXdyYXAgZ2FwLTEgZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGA7XG5cblxuICBpZiAoIW91dHB1dExpbmspIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTGlzdH0+e2J0bkNvbnRlbnR9PC9idXR0b24+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayAgaHJlZj17bGlua1VSTH0+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT17Y2xhc3NMaXN0fSAgdGFyZ2V0PXtsaW5rVGFyZ2V0fT57YnRuQ29udGVudH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFibGVCdXR0b25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvcnRhYmxlVGV4dCIsIkltYWdlIiwiTGluayIsIlBvcnRhYmxlQnV0dG9uIiwiY29udGVudCIsImJsb2NrcyIsInBvcnRhYmxlQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJidXR0b25TaXplIiwiaW50TGluayIsImxpbmsiLCJpc0xpbmsiLCJidG5Db250ZW50IiwidmFsdWUiLCJjb21wb25lbnRzIiwidHlwZXMiLCJmaWd1cmUiLCJibG9jayIsIm5vcm1hbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3BhbiIsImxpbmtVUkwiLCJsaW5rVGFyZ2V0Iiwib3V0cHV0TGluayIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJidXR0b24iLCJocmVmIiwiYSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PortableContent/PortableButton.js\n");

/***/ })

});