"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./comps/PageSections/sections/Visualiser.js":
/*!***************************************************!*\
  !*** ./comps/PageSections/sections/Visualiser.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// import client from '../../../client'\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), test = ref4[0], updateTest = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref1[0], updateAmountPrimary = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref2[0], updateAmountSecondary = ref2[1];\n    var contextObj = {\n        test: test,\n        updateTest: updateTest,\n        updateAmountPrimary: updateAmountPrimary,\n        updateAmountSecondary: updateAmountSecondary\n    };\n    var outputBoxes = function() {\n        var ref, ref3;\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n        var valPrimaryIcon = amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref3 = ref.asset) === null || ref3 === void 0 ? void 0 : ref3.url;\n        var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n        console.log('valPrimaryIcon', valPrimaryIcon);\n        console.log('valPrimary', valPrimary);\n        console.log('valSecondary', valSecondary);\n        if (valPrimary === undefined || valSecondary === undefined) return null;\n        var i = 0, len = valSecondary / valPrimary;\n        while(i < len){\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: valPrimaryIcon,\n                    alt: \"Picture of the author\",\n                    width: 15,\n                    height: 15\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                    lineNumber: 58,\n                    columnNumber: 6\n                }, _this1)\n            }, i, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 57,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        return boxes;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            \"Visualiser\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"current primary value is \",\n                    amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 78,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"current Secondary value is \",\n                    amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 79,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: contextObj\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 80,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap\",\n                children: outputBoxes()\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 82,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"j3aYbneRnqKEB6QwK3E+gD5wylc=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBQ2Y7QUFDM0MsRUFBdUM7QUFFZDtBQUNLOzs7QUFJOUIsR0FBSyxDQUFDTSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7O0lBRTlCLEdBQUssQ0FBR0MsTUFBTSxHQUFLRCxLQUFLLENBQWhCQyxNQUFNO0lBR2QsRUFBOEM7SUFFOUMsRUFBNkI7SUFDN0IsRUFBc0M7SUFDdEMsRUFBd0Q7SUFDeEQsRUFBeUQ7SUFFekQsRUFBSztJQUdMLEdBQUssQ0FBc0JMLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTlCTSxJQUFJLEdBQWdCTixJQUFXLEtBQXpCTyxVQUFVLEdBQUlQLElBQVc7SUFDdEMsR0FBSyxDQUF3Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBbkRRLGFBQWEsR0FBeUJSLElBQWMsS0FBckNTLG1CQUFtQixHQUFJVCxJQUFjO0lBQzNELEdBQUssQ0FBNENBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXZEVSxlQUFlLEdBQTJCVixJQUFjLEtBQXZDVyxxQkFBcUIsR0FBSVgsSUFBYztJQUUvRCxHQUFLLENBQUNZLFVBQVUsR0FBRyxDQUFDO1FBQ25CTixJQUFJLEVBQUpBLElBQUk7UUFDSkMsVUFBVSxFQUFWQSxVQUFVO1FBQ1ZFLG1CQUFtQixFQUFuQkEsbUJBQW1CO1FBQ25CRSxxQkFBcUIsRUFBckJBLHFCQUFxQjtJQUN0QixDQUFDO0lBR0QsR0FBSyxDQUFDRSxXQUFXLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztZQU9MTCxHQUFvQjtRQU56QyxHQUFHLENBQUNNLEdBQUcsR0FBRyxLQUFLO1FBQ2YsR0FBRyxDQUFDQyxPQUFPLEdBQUcsSUFBSTtRQUNsQixHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFHZCxHQUFHLENBQUNDLFVBQVUsR0FBR1QsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLGFBQWEsQ0FBRVUsS0FBSztRQUNyQyxHQUFHLENBQUNDLGNBQWMsR0FBR1gsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsSUFBcEJBLEdBQW9CLEdBQXBCQSxhQUFhLENBQUVZLEtBQUssY0FBcEJaLEdBQW9CLEtBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLFdBQXBCQSxHQUFvQixDQUFFYSxLQUFLLHVCQUEzQmIsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixRQUFTYyxHQUFHO1FBQ3JELEdBQUcsQ0FBQ0MsWUFBWSxHQUFHYixlQUFlLGFBQWZBLGVBQWUsS0FBZkEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsZUFBZSxDQUFFYyxXQUFXO1FBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQixpQkFBRVAsY0FBYztRQUM1Q00sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFVCxVQUFVO1FBQ3BDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFjLGVBQUVILFlBQVk7UUFFeEMsRUFBRSxFQUFFTixVQUFVLEtBQUtVLFNBQVMsSUFBSUosWUFBWSxLQUFLSSxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFdkUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxHQUFHLEdBQUdOLFlBQVksR0FBR04sVUFBVTtjQUVuQ1csQ0FBQyxHQUFHQyxHQUFHLENBQUUsQ0FBQztZQUNoQmIsS0FBSyxDQUFDYyxJQUFJLDZFQUNSQyxDQUFHO3NHQUNGN0IsbURBQUs7b0JBQ0w4QixHQUFHLEVBQUViLGNBQWM7b0JBQ25CYyxHQUFHLEVBQUMsQ0FBdUI7b0JBQzNCQyxLQUFLLEVBQUUsRUFBRTtvQkFDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7OztlQUxGUCxDQUFDOzs7OztZQVNaQSxDQUFDO1FBQ0YsQ0FBQztRQUVELE1BQU0sQ0FBQ1osS0FBSztJQUViLENBQUM7SUFHRCxNQUFNLDZFQUNKZSxDQUFHO1FBQUNLLFNBQVMsRUFBQyxDQUE0Qzs7WUFBQyxDQUczRDt3RkFBQ0MsQ0FBSTs7b0JBQUMsQ0FBeUI7b0JBQUU3QixhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsYUFBYSxDQUFFOEIsVUFBVTs7Ozs7Ozt3RkFDekRELENBQUk7O29CQUFDLENBQTJCO29CQUFFM0IsZUFBZSxhQUFmQSxlQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBNEIsR0FBNUJBLElBQUksQ0FBSkEsQ0FBNEIsR0FBNUJBLGVBQWUsQ0FBRWMsV0FBVzs7Ozs7Ozt3RkFDOUQxQixrRUFBWTtnQkFBQ3lDLE1BQU0sRUFBRWxDLE1BQU07Z0JBQUVtQyxPQUFPLEVBQUU1QixVQUFVOzs7Ozs7d0ZBRWhEbUIsQ0FBRztnQkFBQ0ssU0FBUyxFQUFDLENBQXlCOzBCQUN2Q3ZCLFdBQVc7Ozs7Ozs7Ozs7OztBQUtmLENBQUM7R0E3RUtWLFVBQVU7S0FBVkEsVUFBVTtBQStFaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcz9iNTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0J1dHRvblwiO1xuaW1wb3J0IEhlYWRlclNlbGVjdCBmcm9tIFwiLi4vLi4vUG9ydGFibGVUZXh0L0hlYWRlclNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuXG5cbmNvbnN0IFZpc3VhbGlzZXIgPSAocHJvcHMpID0+IHtcblxuXHRjb25zdCB7IEhlYWRlciB9ID0gcHJvcHM7XG5cblxuXHQvLyBjb25zdCB0ZXh0QmxvY2sgPSBwcm9wcy5IZWFkZXJbMF0uY2hpbGRyZW47XG5cblx0Ly8gY29uc3QgdGVzdCA9IDxkaXY+aGk8L2Rpdj5cblx0Ly8gdGV4dEJsb2NrLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcblx0Ly8gXHRsZXQgcmVzdWx0ID0gY29udGVudC50ZXh0LmluY2x1ZGVzKFwiW3ByaWNlZEl0ZW1zXVwiKTtcblx0Ly8gXHRsZXQgcmVwID0gY29udGVudC50ZXh0LnJlcGxhY2UoJ1twcmljZWRJdGVtc10nLCB0ZXN0KVxuXHRcdFxuXHQvLyB9KVxuXG5cblx0Y29uc3QgW3Rlc3QsIHVwZGF0ZVRlc3RdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFthbW91bnRQcmltYXJ5LCB1cGRhdGVBbW91bnRQcmltYXJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbYW1vdW50U2Vjb25kYXJ5LCB1cGRhdGVBbW91bnRTZWNvbmRhcnldID0gdXNlU3RhdGUobnVsbCk7XG5cblx0Y29uc3QgY29udGV4dE9iaiA9IHtcblx0XHR0ZXN0LFxuXHRcdHVwZGF0ZVRlc3QsXG5cdFx0dXBkYXRlQW1vdW50UHJpbWFyeSxcblx0XHR1cGRhdGVBbW91bnRTZWNvbmRhcnksXG5cdH1cblxuXG5cdGNvbnN0IG91dHB1dEJveGVzID0gKCkgPT4ge1xuXHRcdGxldCBudW0gPSAxMDAwMDtcblx0XHRsZXQgYm94QmFzZSA9IDEwMDA7XG5cdFx0bGV0IGJveGVzID0gW107XG5cblxuXHRcdGxldCB2YWxQcmltYXJ5ID0gYW1vdW50UHJpbWFyeT8ucHJpY2U7XG5cdFx0bGV0IHZhbFByaW1hcnlJY29uID0gYW1vdW50UHJpbWFyeT8uaW1hZ2U/LmFzc2V0Py51cmw7XG5cdFx0bGV0IHZhbFNlY29uZGFyeSA9IGFtb3VudFNlY29uZGFyeT8uYWN0dWFsVmFsdWU7XG5cdFx0Y29uc29sZS5sb2coJ3ZhbFByaW1hcnlJY29uJywgdmFsUHJpbWFyeUljb24pO1xuXHRcdGNvbnNvbGUubG9nKCd2YWxQcmltYXJ5JywgdmFsUHJpbWFyeSk7XG5cdFx0Y29uc29sZS5sb2coJ3ZhbFNlY29uZGFyeScsIHZhbFNlY29uZGFyeSk7XG5cblx0XHRpZiAodmFsUHJpbWFyeSA9PT0gdW5kZWZpbmVkIHx8IHZhbFNlY29uZGFyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXHRcdHZhciBpID0gMCwgbGVuID0gdmFsU2Vjb25kYXJ5IC8gdmFsUHJpbWFyeTtcblxuXHRcdHdoaWxlIChpIDwgbGVuKSB7XG5cdFx0XHRib3hlcy5wdXNoKFxuXHRcdFx0XHQ8ZGl2IGtleT17aX0+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9e3ZhbFByaW1hcnlJY29ufVxuXHRcdFx0XHRcdFx0YWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcblx0XHRcdFx0XHRcdHdpZHRoPXsxNX1cblx0XHRcdFx0XHRcdGhlaWdodD17MTV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0XHRpKytcblx0XHR9XG5cblx0XHRyZXR1cm4gYm94ZXM7XG5cblx0fVxuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0VmlzdWFsaXNlclxuXG5cdFx0XHQ8c3Bhbj5jdXJyZW50IHByaW1hcnkgdmFsdWUgaXMgeyBhbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsfTwvc3Bhbj5cblx0XHRcdDxzcGFuPmN1cnJlbnQgU2Vjb25kYXJ5IHZhbHVlIGlzIHsgYW1vdW50U2Vjb25kYXJ5Py5hY3R1YWxWYWx1ZX08L3NwYW4+XG5cdFx0XHQ8SGVhZGVyU2VsZWN0IGJsb2Nrcz17SGVhZGVyfSBjb250ZXh0PXtjb250ZXh0T2JqfSAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwXCI+XG5cdFx0XHR7b3V0cHV0Qm94ZXMoKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG5cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGlzZXI7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkhlYWRlclNlbGVjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJJbWFnZSIsIlZpc3VhbGlzZXIiLCJwcm9wcyIsIkhlYWRlciIsInRlc3QiLCJ1cGRhdGVUZXN0IiwiYW1vdW50UHJpbWFyeSIsInVwZGF0ZUFtb3VudFByaW1hcnkiLCJhbW91bnRTZWNvbmRhcnkiLCJ1cGRhdGVBbW91bnRTZWNvbmRhcnkiLCJjb250ZXh0T2JqIiwib3V0cHV0Qm94ZXMiLCJudW0iLCJib3hCYXNlIiwiYm94ZXMiLCJ2YWxQcmltYXJ5IiwicHJpY2UiLCJ2YWxQcmltYXJ5SWNvbiIsImltYWdlIiwiYXNzZXQiLCJ1cmwiLCJ2YWxTZWNvbmRhcnkiLCJhY3R1YWxWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJpIiwibGVuIiwicHVzaCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWVQbHVyYWwiLCJibG9ja3MiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});