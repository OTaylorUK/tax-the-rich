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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// import client from '../../../client'\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    var log10 = function log10(n) {\n        return Math.round(100 * Math.log(n) / Math.log(10)) / 100;\n    };\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), test = ref7[0], updateTest = ref7[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref1[0], updateAmountPrimary = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref2[0], updateAmountSecondary = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), calculatedNum = ref3[0], updateCalculatedNum = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), niceNumber = ref4[0], updateNiceNumber = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), unitsPerIcon = ref5[0], updateUnitsPerIcon = ref5[1]; // by default 1 icon = 1 unit\n    var contextObj = {\n        test: test,\n        updateTest: updateTest,\n        updateAmountPrimary: updateAmountPrimary,\n        updateAmountSecondary: updateAmountSecondary\n    };\n    var outputBoxes = function() {\n        var ref, ref6;\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n        var valPrimaryIcon = amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref6 = ref.asset) === null || ref6 === void 0 ? void 0 : ref6.url;\n        var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n        console.log('valPrimaryIcon', valPrimaryIcon);\n        console.log('valPrimary', valPrimary);\n        console.log('valSecondary', valSecondary);\n        if (valPrimary === undefined || valSecondary === undefined) return null;\n        var i = 0;\n        while(i < calculatedNum){\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: valPrimaryIcon,\n                    alt: \"Picture of the author\",\n                    width: 15,\n                    height: 15\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                    lineNumber: 63,\n                    columnNumber: 6\n                }, _this1)\n            }, i, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        return boxes;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log('amountPrimary IS:', amountPrimary);\n        if (amountPrimary !== undefined || amountSecondary !== undefined) {\n            var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n            var numOfUnits = Number((valSecondary / valPrimary).toFixed(2));\n            var finalUnits = numOfUnits;\n            // below limits output and updates the key to reflect what the icon represents e.g. 1 = 100 units ...\n            var logTen = log10(numOfUnits);\n            var logFloor = Math.floor(logTen) - 1; // -1 so the number output is not too low\n            if (logTen > 3) {\n                var newPerUnit = Math.pow(10, logFloor);\n                updateUnitsPerIcon(newPerUnit);\n                finalUnits = Number((finalUnits / newPerUnit).toFixed(2));\n            }\n            console.log('newPerUnit:', newPerUnit);\n            console.log('finalUnits:', finalUnits);\n            var formattedNumOfUnits = numOfUnits.toLocaleString(\"en-US\");\n            updateCalculatedNum(finalUnits);\n            updateNiceNumber(formattedNumOfUnits);\n        }\n    }, [\n        amountPrimary,\n        amountSecondary\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            \"Visualiser\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"current primary value is \",\n                    amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"current Secondary value is \",\n                    amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 130,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: contextObj\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 132,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10 container flex flex-col flex-wrap justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            niceNumber,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 135,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural,\n                            \"*\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 136,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 134,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-row flex-wrap justify-center items-center\",\n                children: outputBoxes()\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 139,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 126,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"aNoVH97jZOShMizHuObnDtks2I0=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBQ2Y7QUFDM0MsRUFBdUM7QUFFZDtBQUNLOzs7QUFJOUIsR0FBSyxDQUFDTSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7UUFtRXJCQyxLQUFLLEdBQWQsUUFBUSxDQUFDQSxLQUFLLENBQUNDLENBQUMsRUFBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxHQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsQ0FBQyxJQUFFQyxJQUFJLENBQUNFLEdBQUcsQ0FBQyxFQUFFLEtBQUcsR0FBRztJQUNwRCxDQUFDOztJQW5FRCxHQUFLLENBQUdDLE1BQU0sR0FBS04sS0FBSyxDQUFoQk0sTUFBTTtJQUdkLEVBQThDO0lBRTlDLEVBQTZCO0lBQzdCLEVBQXNDO0lBQ3RDLEVBQXdEO0lBQ3hELEVBQXlEO0lBRXpELEVBQUs7SUFHTCxHQUFLLENBQXNCVixJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE5QlcsSUFBSSxHQUFnQlgsSUFBVyxLQUF6QlksVUFBVSxHQUFJWixJQUFXO0lBQ3RDLEdBQUssQ0FBd0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQW5EYSxhQUFhLEdBQXlCYixJQUFjLEtBQXJDYyxtQkFBbUIsR0FBSWQsSUFBYztJQUMzRCxHQUFLLENBQTRDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF2RGUsZUFBZSxHQUEyQmYsSUFBYyxLQUF2Q2dCLHFCQUFxQixHQUFJaEIsSUFBYztJQUMvRCxHQUFLLENBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuRGlCLGFBQWEsR0FBeUJqQixJQUFjLEtBQXJDa0IsbUJBQW1CLEdBQUlsQixJQUFjO0lBQzNELEdBQUssQ0FBa0NBLElBQWMsR0FBZEEsK0NBQVEs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QUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxhQUFhLENBQUU2QyxVQUFVOzs7Ozs7O3dGQUN6REQsQ0FBSTs7b0JBQUMsQ0FBMkI7b0JBQUMxQyxlQUFlLGFBQWZBLGVBQWUsS0FBZkEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsZUFBZSxDQUFFb0IsV0FBVzs7Ozs7Ozt3RkFFN0RyQyxrRUFBWTtnQkFBQzZELE1BQU0sRUFBRWpELE1BQU07Z0JBQUVrRCxPQUFPLEVBQUVyQyxVQUFVOzs7Ozs7d0ZBRWhEaUIsQ0FBRztnQkFBQ2dCLFNBQVMsRUFBQyxDQUFxRTs7Z0dBQ2xGSyxDQUFFOzs0QkFBRTFDLFVBQVU7NEJBQUMsQ0FBQzs7Ozs7OztnR0FDaEIyQyxDQUFFOzs0QkFBR2pELGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxhQUFhLENBQUU2QyxVQUFVOzRCQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7d0ZBR2pDbEIsQ0FBRztnQkFBQ2dCLFNBQVMsRUFBQyxDQUErRDswQkFDNUVoQyxXQUFXOzs7Ozs7Ozs7Ozs7QUFLaEIsQ0FBQztHQXRJS3JCLFVBQVU7S0FBVkEsVUFBVTtBQXdJaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcz9iNTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0J1dHRvblwiO1xuaW1wb3J0IEhlYWRlclNlbGVjdCBmcm9tIFwiLi4vLi4vUG9ydGFibGVUZXh0L0hlYWRlclNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuXG5cbmNvbnN0IFZpc3VhbGlzZXIgPSAocHJvcHMpID0+IHtcblxuXHRjb25zdCB7IEhlYWRlciB9ID0gcHJvcHM7XG5cblxuXHQvLyBjb25zdCB0ZXh0QmxvY2sgPSBwcm9wcy5IZWFkZXJbMF0uY2hpbGRyZW47XG5cblx0Ly8gY29uc3QgdGVzdCA9IDxkaXY+aGk8L2Rpdj5cblx0Ly8gdGV4dEJsb2NrLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcblx0Ly8gXHRsZXQgcmVzdWx0ID0gY29udGVudC50ZXh0LmluY2x1ZGVzKFwiW3ByaWNlZEl0ZW1zXVwiKTtcblx0Ly8gXHRsZXQgcmVwID0gY29udGVudC50ZXh0LnJlcGxhY2UoJ1twcmljZWRJdGVtc10nLCB0ZXN0KVxuXHRcdFxuXHQvLyB9KVxuXG5cblx0Y29uc3QgW3Rlc3QsIHVwZGF0ZVRlc3RdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFthbW91bnRQcmltYXJ5LCB1cGRhdGVBbW91bnRQcmltYXJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbYW1vdW50U2Vjb25kYXJ5LCB1cGRhdGVBbW91bnRTZWNvbmRhcnldID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtjYWxjdWxhdGVkTnVtLCB1cGRhdGVDYWxjdWxhdGVkTnVtXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbbmljZU51bWJlciwgdXBkYXRlTmljZU51bWJlcl0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3VuaXRzUGVySWNvbiwgdXBkYXRlVW5pdHNQZXJJY29uXSA9IHVzZVN0YXRlKDEpOyAvLyBieSBkZWZhdWx0IDEgaWNvbiA9IDEgdW5pdFxuXHRcblx0Y29uc3QgY29udGV4dE9iaiA9IHtcblx0XHR0ZXN0LFxuXHRcdHVwZGF0ZVRlc3QsXG5cdFx0dXBkYXRlQW1vdW50UHJpbWFyeSxcblx0XHR1cGRhdGVBbW91bnRTZWNvbmRhcnksXG5cdH1cblxuXG5cblx0Y29uc3Qgb3V0cHV0Qm94ZXMgPSAoKSA9PiB7XG5cdFx0bGV0IG51bSA9IDEwMDAwO1xuXHRcdGxldCBib3hCYXNlID0gMTAwMDtcblx0XHRsZXQgYm94ZXMgPSBbXTtcblxuXG5cdFx0bGV0IHZhbFByaW1hcnkgPSBhbW91bnRQcmltYXJ5Py5wcmljZTtcblx0XHRsZXQgdmFsUHJpbWFyeUljb24gPSBhbW91bnRQcmltYXJ5Py5pbWFnZT8uYXNzZXQ/LnVybDtcblx0XHRsZXQgdmFsU2Vjb25kYXJ5ID0gYW1vdW50U2Vjb25kYXJ5Py5hY3R1YWxWYWx1ZTtcblxuXHRcdGNvbnNvbGUubG9nKCd2YWxQcmltYXJ5SWNvbicsIHZhbFByaW1hcnlJY29uKTtcblx0XHRjb25zb2xlLmxvZygndmFsUHJpbWFyeScsIHZhbFByaW1hcnkpO1xuXHRcdGNvbnNvbGUubG9nKCd2YWxTZWNvbmRhcnknLCB2YWxTZWNvbmRhcnkpO1xuXG5cdFx0aWYgKHZhbFByaW1hcnkgPT09IHVuZGVmaW5lZCB8fCB2YWxTZWNvbmRhcnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblx0XHRsZXQgaSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGNhbGN1bGF0ZWROdW0pIHtcblx0XHRcdGJveGVzLnB1c2goXG5cdFx0XHRcdDxkaXYga2V5PXtpfT5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17dmFsUHJpbWFyeUljb259XG5cdFx0XHRcdFx0XHRhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuXHRcdFx0XHRcdFx0d2lkdGg9ezE1fVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHRcdGkrK1xuXHRcdH1cblxuXHRcdHJldHVybiBib3hlcztcblxuXHR9XG5cblx0ZnVuY3Rpb24gbG9nMTAobil7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoMTAwKk1hdGgubG9nKG4pL01hdGgubG9nKDEwKSkvMTAwO1xuXHR9XG5cdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdhbW91bnRQcmltYXJ5IElTOicsIGFtb3VudFByaW1hcnkpO1xuXG5cdFx0aWYgKGFtb3VudFByaW1hcnkgIT09IHVuZGVmaW5lZCB8fCBhbW91bnRTZWNvbmRhcnkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bGV0IHZhbFByaW1hcnkgPSBhbW91bnRQcmltYXJ5Py5wcmljZTtcblx0XHRcdGxldCB2YWxTZWNvbmRhcnkgPSBhbW91bnRTZWNvbmRhcnk/LmFjdHVhbFZhbHVlO1xuXHRcdFx0Y29uc3QgbnVtT2ZVbml0cyA9IE51bWJlcigodmFsU2Vjb25kYXJ5IC8gdmFsUHJpbWFyeSkudG9GaXhlZCgyKSlcblx0XHRcdGxldCBmaW5hbFVuaXRzID0gbnVtT2ZVbml0cztcblxuXG5cblx0XHRcdC8vIGJlbG93IGxpbWl0cyBvdXRwdXQgYW5kIHVwZGF0ZXMgdGhlIGtleSB0byByZWZsZWN0IHdoYXQgdGhlIGljb24gcmVwcmVzZW50cyBlLmcuIDEgPSAxMDAgdW5pdHMgLi4uXG5cblx0XHRcdGNvbnN0IGxvZ1RlbiA9IGxvZzEwKG51bU9mVW5pdHMpO1xuXHRcdFx0Y29uc3QgbG9nRmxvb3IgPSBNYXRoLmZsb29yKGxvZ1RlbikgLSAxOyAvLyAtMSBzbyB0aGUgbnVtYmVyIG91dHB1dCBpcyBub3QgdG9vIGxvd1xuXHRcdFx0XG5cblx0XHRcdGlmIChsb2dUZW4gPiAzKSB7XG5cdFx0XHRcdGNvbnN0IG5ld1BlclVuaXQgPSBNYXRoLnBvdygxMCwgbG9nRmxvb3IpXG5cdFx0XHRcdHVwZGF0ZVVuaXRzUGVySWNvbihuZXdQZXJVbml0KVxuXG5cdFx0XHRcdGZpbmFsVW5pdHMgPSAgTnVtYmVyKChmaW5hbFVuaXRzIC8gbmV3UGVyVW5pdCkudG9GaXhlZCgyKSlcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZygnbmV3UGVyVW5pdDonLCBuZXdQZXJVbml0KTtcblx0XHRcdGNvbnNvbGUubG9nKCdmaW5hbFVuaXRzOicsIGZpbmFsVW5pdHMpO1xuXG5cblxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkTnVtT2ZVbml0cyA9IG51bU9mVW5pdHMudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKTtcblxuXHRcdFx0dXBkYXRlQ2FsY3VsYXRlZE51bShmaW5hbFVuaXRzKVxuXHRcdFx0dXBkYXRlTmljZU51bWJlcihmb3JtYXR0ZWROdW1PZlVuaXRzKVxuXG5cblx0XHR9IFxuXG5cdFx0XG5cblx0fSwgW2Ftb3VudFByaW1hcnksYW1vdW50U2Vjb25kYXJ5XSk7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRWaXN1YWxpc2VyXG5cblx0XHRcdDxzcGFuPmN1cnJlbnQgcHJpbWFyeSB2YWx1ZSBpcyB7IGFtb3VudFByaW1hcnk/Lm5hbWVQbHVyYWx9PC9zcGFuPlxuXHRcdFx0PHNwYW4+Y3VycmVudCBTZWNvbmRhcnkgdmFsdWUgaXMge2Ftb3VudFNlY29uZGFyeT8uYWN0dWFsVmFsdWV9PC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8SGVhZGVyU2VsZWN0IGJsb2Nrcz17SGVhZGVyfSBjb250ZXh0PXtjb250ZXh0T2JqfSAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIGNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGgyPntuaWNlTnVtYmVyfSA8L2gyPlxuXHRcdFx0XHQ8aDM+eyBhbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsfSo8L2gzPlxuXHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdHtvdXRwdXRCb3hlcygpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+IFxuXHQpXG5cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGlzZXI7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkhlYWRlclNlbGVjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJJbWFnZSIsIlZpc3VhbGlzZXIiLCJwcm9wcyIsImxvZzEwIiwibiIsIk1hdGgiLCJyb3VuZCIsImxvZyIsIkhlYWRlciIsInRlc3QiLCJ1cGRhdGVUZXN0IiwiYW1vdW50UHJpbWFyeSIsInVwZGF0ZUFtb3VudFByaW1hcnkiLCJhbW91bnRTZWNvbmRhcnkiLCJ1cGRhdGVBbW91bnRTZWNvbmRhcnkiLCJjYWxjdWxhdGVkTnVtIiwidXBkYXRlQ2FsY3VsYXRlZE51bSIsIm5pY2VOdW1iZXIiLCJ1cGRhdGVOaWNlTnVtYmVyIiwidW5pdHNQZXJJY29uIiwidXBkYXRlVW5pdHNQZXJJY29uIiwiY29udGV4dE9iaiIsIm91dHB1dEJveGVzIiwibnVtIiwiYm94QmFzZSIsImJveGVzIiwidmFsUHJpbWFyeSIsInByaWNlIiwidmFsUHJpbWFyeUljb24iLCJpbWFnZSIsImFzc2V0IiwidXJsIiwidmFsU2Vjb25kYXJ5IiwiYWN0dWFsVmFsdWUiLCJjb25zb2xlIiwidW5kZWZpbmVkIiwiaSIsInB1c2giLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm51bU9mVW5pdHMiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZmluYWxVbml0cyIsImxvZ1RlbiIsImxvZ0Zsb29yIiwiZmxvb3IiLCJuZXdQZXJVbml0IiwicG93IiwiZm9ybWF0dGVkTnVtT2ZVbml0cyIsInRvTG9jYWxlU3RyaW5nIiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWVQbHVyYWwiLCJibG9ja3MiLCJjb250ZXh0IiwiaDIiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});