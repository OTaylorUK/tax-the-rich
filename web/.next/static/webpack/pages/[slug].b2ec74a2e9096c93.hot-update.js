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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// import client from '../../../client'\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    var log10 = function log10(n) {\n        return Math.round(100 * Math.log(n) / Math.log(10)) / 100;\n    };\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), test = ref10[0], updateTest = ref10[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref1[0], updateAmountPrimary = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref2[0], updateAmountSecondary = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), calculatedNum = ref3[0], updateCalculatedNum = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), niceNumber = ref4[0], updateNiceNumber = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), unitsPerIcon = ref5[0], updateUnitsPerIcon = ref5[1]; // by default 1 icon = 1 unit\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), unitIcon = ref6[0], updateUnitIcon = ref6[1]; // by default 1 icon = 1 unit\n    var contextObj = {\n        test: test,\n        updateTest: updateTest,\n        updateAmountPrimary: updateAmountPrimary,\n        updateAmountSecondary: updateAmountSecondary\n    };\n    var outputBoxes = function() {\n        var ref, ref7;\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n        var valPrimaryIcon = amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref7 = ref.asset) === null || ref7 === void 0 ? void 0 : ref7.url;\n        var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n        console.log('valPrimaryIcon', valPrimaryIcon);\n        console.log('valPrimary', valPrimary);\n        console.log('valSecondary', valSecondary);\n        if (valPrimary === undefined || valSecondary === undefined) return null;\n        var i = 0;\n        while(i < calculatedNum){\n            var ref8, ref9;\n            if (i == calculatedNum) {\n                console.log('reACTEHED');\n            }\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hide-partial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 69,\n                        columnNumber: 6\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref8 = amountPrimary.image) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.asset) === null || ref9 === void 0 ? void 0 : ref9.url,\n                        alt: \"Picture of the author\",\n                        width: 15,\n                        height: 15\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 70,\n                        columnNumber: 6\n                    }, _this1)\n                ]\n            }, i, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        return boxes;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var _this2 = _this1;\n        var outputUnitIcon = function() {\n            var ref, ref11;\n            var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            if (valPrimary === undefined) return null;\n            var icon = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref11 = ref.asset) === null || ref11 === void 0 ? void 0 : ref11.url,\n                alt: \"Picture of the author\",\n                width: 15,\n                height: 15\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 99,\n                columnNumber: 15\n            }, _this2);\n            return icon;\n        };\n        if (amountPrimary !== undefined || amountSecondary !== undefined) {\n            var valPrimary1 = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n            var numOfUnits = Number((valSecondary / valPrimary1).toFixed(2));\n            var finalUnits = numOfUnits;\n            console.log('numOfUnits:', numOfUnits);\n            // below limits output and updates the key to reflect what the icon represents e.g. 1 = 100 units ...\n            var logTen = log10(numOfUnits);\n            var logFloor = Math.floor(logTen) - 1; // -1 so the number output is not too low\n            if (logTen > 3) {\n                var newPerUnit = Math.pow(10, logFloor);\n                var formattedNewPerUnit = newPerUnit.toLocaleString(\"en-US\");\n                updateUnitsPerIcon(formattedNewPerUnit);\n                finalUnits = Number((finalUnits / 3).toFixed(2));\n            } else {\n                updateUnitsPerIcon(1);\n            }\n            updateUnitIcon(outputUnitIcon());\n            console.log('newPerUnit:', newPerUnit);\n            console.log('finalUnits:', finalUnits);\n            var formattedNumOfUnits = numOfUnits.toLocaleString(\"en-US\");\n            updateCalculatedNum(finalUnits);\n            updateNiceNumber(formattedNumOfUnits);\n        }\n    }, [\n        amountPrimary,\n        amountSecondary\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: contextObj\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 158,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10 container flex flex-col flex-wrap justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            niceNumber,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 161,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural,\n                            \"*\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 162,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 160,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10 container flex flex-col flex-wrap justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row flex-wrap justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-1\",\n                            children: unitIcon\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                            lineNumber: 169,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \" = \",\n                                unitsPerIcon,\n                                \" \",\n                                unitsPerIcon > 1 ? amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural : amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.nameSingle,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                            lineNumber: 174,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                    lineNumber: 167,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 166,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-row flex-wrap justify-center items-center\"\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 179,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 157,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"jZ6KtQrUfOvJS07184nWf4UXTKQ=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBQ2Y7QUFDM0MsRUFBdUM7QUFFZDtBQUNLOzs7QUFJOUIsR0FBSyxDQUFDTSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7UUE2RXJCQyxLQUFLLEdBQWQsUUFBUSxDQUFDQSxLQUFLLENBQUNDLENBQUMsRUFBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxHQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsQ0FBQyxJQUFFQyxJQUFJLENBQUNFLEdBQUcsQ0FBQyxFQUFFLEtBQUcsR0FBRztJQUNwRCxDQUFDOztJQTdFRCxHQUFLLENBQUdDLE1BQU0sR0FBS04sS0FBSyxDQUFoQk0sTUFBTTtJQUdkLEVBQThDO0lBRTlDLEVBQTZCO0lBQzdCLEVBQXNDO0lBQ3RDLEVBQXdEO0lBQ3hELEVBQXlEO0lBRXpELEVBQUs7SUFHTCxHQUFLLENBQXNCVixLQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE5QlcsSUFBSSxHQUFnQlgsS0FBVyxLQUF6QlksVUFBVSxHQUFJWixLQUFXO0lBQ3RDLEdBQUssQ0FBd0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQW5EYSxhQUFhLEdBQXlCYixJQUFjLEtBQXJDYyxtQkFBbUIsR0FBSWQsSUFBYztJQUMzRCxHQUFLLENBQTRDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF2RGUsZUFBZSxHQUEyQmYsSUFBYyxLQUF2Q2dCLHFCQUFxQixHQUFJaEIsSUFBYztJQUMvRCxHQUFLLENBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuRGlCLGFBQWEsR0FBeUJqQixJQUFjLEtBQXJDa0IsbUJBQW1CLEdBQUlsQixJQUFjO0lBQzNELEdBQUssQ0FBa0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTdDbUIsVUFBVSxHQUFzQm5CLElBQWMsS0FBbENvQixnQkFBZ0IsR0FBSXBCLElBQWM7SUFDckQsR0FBSyxDQUFzQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBOUNxQixZQUFZLEdBQXdCckIsSUFBVyxLQUFqQ3NCLGtCQUFrQixHQUFJdEIsSUFBVyxJQUFFLENBQTZCO0lBQ3JGLEdBQUssQ0FBOEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXpDdUIsUUFBUSxHQUFvQnZCLElBQWMsS0FBaEN3QixjQUFjLEdBQUl4QixJQUFjLElBQUUsQ0FBNkI7SUFFaEYsR0FBSyxDQUFDeUIsVUFBVSxHQUFHLENBQUM7UUFDbkJkLElBQUksRUFBSkEsSUFBSTtRQUNKQyxVQUFVLEVBQVZBLFVBQVU7UUFDVkUsbUJBQW1CLEVBQW5CQSxtQkFBbUI7UUFDbkJFLHFCQUFxQixFQUFyQkEscUJBQXFCO0lBQ3RCLENBQUM7SUFJRCxHQUFLLENBQUNVLFdBQVcsR0FBRyxRQUNyQixHQUQyQixDQUFDO1lBT0xiLEdBQW9CO1FBTnpDLEdBQUcsQ0FBQ2MsR0FBRyxHQUFHLEtBQUs7UUFDZixHQUFHLENBQUNDLE9BQU8sR0FBRyxJQUFJO1FBQ2xCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUdkLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHakIsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLGFBQWEsQ0FBRWtCLEtBQUs7UUFDckMsR0FBRyxDQUFDQyxjQUFjLEdBQUduQixhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixJQUFwQkEsR0FBb0IsR0FBcEJBLGFBQWEsQ0FBRW9CLEtBQUssY0FBcEJwQixHQUFvQixLQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixXQUFwQkEsR0FBb0IsQ0FBRXFCLEtBQUssdUJBQTNCckIsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixRQUFTc0IsR0FBRztRQUNyRCxHQUFHLENBQUNDLFlBQVksR0FBR3JCLGVBQWUsYUFBZkEsZUFBZSxLQUFmQSxJQUFJLENBQUpBLENBQTRCLEdBQTVCQSxJQUFJLENBQUpBLENBQTRCLEdBQTVCQSxlQUFlLENBQUVzQixXQUFXO1FBRS9DQyxPQUFPLENBQUM3QixHQUFHLENBQUMsQ0FBZ0IsaUJBQUV1QixjQUFjO1FBQzVDTSxPQUFPLENBQUM3QixHQUFHLENBQUMsQ0FBWSxhQUFFcUIsVUFBVTtRQUNwQ1EsT0FBTyxDQUFDN0IsR0FBRyxDQUFDLENBQWMsZUFBRTJCLFlBQVk7UUFFeEMsRUFBRSxFQUFFTixVQUFVLEtBQUtTLFNBQVMsSUFBSUgsWUFBWSxLQUFLRyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFJdkUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQztjQUVGQSxDQUFDLEdBQUd2QixhQUFhLENBQUUsQ0FBQztnQkFRbEJKLElBQW9CO1lBUDVCLEVBQUUsRUFBRTJCLENBQUMsSUFBSXZCLGFBQWEsRUFBRSxDQUFDO2dCQUN4QnFCLE9BQU8sQ0FBQzdCLEdBQUcsQ0FBQyxDQUFXO1lBQ3hCLENBQUM7WUFDRG9CLEtBQUssQ0FBQ1ksSUFBSSw2RUFDUkMsQ0FBRztnQkFBU0MsU0FBUyxFQUFDLENBQUs7O2dHQUMxQkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWM7Ozs7OztnR0FDNUJ6QyxtREFBSzt3QkFDTDBDLEdBQUcsRUFBRS9CLGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLElBQXBCQSxJQUFvQixHQUFwQkEsYUFBYSxDQUFFb0IsS0FBSyxjQUFwQnBCLElBQW9CLEtBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLFdBQXBCQSxJQUFvQixDQUFFcUIsS0FBSyx1QkFBM0JyQixJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLFFBQVNzQixHQUFHO3dCQUNyQ1UsR0FBRyxFQUFDLENBQXVCO3dCQUMzQkMsS0FBSyxFQUFFLEVBQUU7d0JBQ1RDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7O2VBTkZQLENBQUM7Ozs7O1lBVVpBLENBQUM7UUFDRixDQUFDO1FBRUQsTUFBTSxDQUFDWCxLQUFLO0lBRWIsQ0FBQztJQVNEOUIsZ0RBQVMsQ0FBQyxRQUNYLEdBRGlCLENBQUM7O1FBQ2hCLEdBQUssQ0FBQ2lELGNBQWMsR0FBRyxRQUN6QixHQUQrQixDQUFDO2dCQU94Qm5DLEdBQW9CO1lBTnpCLEdBQUcsQ0FBQ2lCLFVBQVUsR0FBR2pCLGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxhQUFhLENBQUVrQixLQUFLO1lBRXJDLEVBQUUsRUFBRUQsVUFBVSxLQUFLUyxTQUFTLEVBQUcsTUFBTSxDQUFDLElBQUk7WUFHMUMsR0FBRyxDQUFDVSxJQUFJLCtFQUFJL0MsbURBQUs7Z0JBQ2pCMEMsR0FBRyxFQUFFL0IsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsSUFBcEJBLEdBQW9CLEdBQXBCQSxhQUFhLENBQUVvQixLQUFLLGNBQXBCcEIsR0FBb0IsS0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsWUFBcEJBLEdBQW9CLENBQUVxQixLQUFLLHdCQUEzQnJCLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsU0FBU3NCLEdBQUc7Z0JBQ3JDVSxHQUFHLEVBQUMsQ0FBdUI7Z0JBQzNCQyxLQUFLLEVBQUUsRUFBRTtnQkFDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7OztZQUdWLE1BQU0sQ0FBQ0UsSUFBSTtRQUVaLENBQUM7UUFDRCxFQUFFLEVBQUVwQyxhQUFhLEtBQUswQixTQUFTLElBQUl4QixlQUFlLEtBQUt3QixTQUFTLEVBQUUsQ0FBQztZQUNsRSxHQUFHLENBQUNULFdBQVUsR0FBR2pCLGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxhQUFhLENBQUVrQixLQUFLO1lBQ3JDLEdBQUcsQ0FBQ0ssWUFBWSxHQUFHckIsZUFBZSxhQUFmQSxlQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBNEIsR0FBNUJBLElBQUksQ0FBSkEsQ0FBNEIsR0FBNUJBLGVBQWUsQ0FBRXNCLFdBQVc7WUFDL0MsR0FBSyxDQUFDYSxVQUFVLEdBQUdDLE1BQU0sRUFBRWYsWUFBWSxHQUFHTixXQUFVLEVBQUVzQixPQUFPLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUNDLFVBQVUsR0FBR0gsVUFBVTtZQUUzQlosT0FBTyxDQUFDN0IsR0FBRyxDQUFDLENBQWEsY0FBRXlDLFVBQVU7WUFFckMsRUFBcUc7WUFFckcsR0FBSyxDQUFDSSxNQUFNLEdBQUdqRCxLQUFLLENBQUM2QyxVQUFVO1lBQy9CLEdBQUssQ0FBQ0ssUUFBUSxHQUFHaEQsSUFBSSxDQUFDaUQsS0FBSyxDQUFDRixNQUFNLElBQUksQ0FBQyxDQUFFLENBQXlDO1lBR2xGLEVBQUUsRUFBRUEsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNoQixHQUFLLENBQUNHLFVBQVUsR0FBR2xELElBQUksQ0FBQ21ELEdBQUcsQ0FBQyxFQUFFLEVBQUVILFFBQVE7Z0JBRXhDLEdBQUssQ0FBQ0ksbUJBQW1CLEdBQUdGLFVBQVUsQ0FBQ0csY0FBYyxDQUFDLENBQU87Z0JBQzdEdEMsa0JBQWtCLENBQUNxQyxtQkFBbUI7Z0JBRXRDTixVQUFVLEdBQUlGLE1BQU0sRUFBRUUsVUFBVSxHQUFHLENBQUMsRUFBRUQsT0FBTyxDQUFDLENBQUM7WUFFaEQsQ0FBQyxNQUFNLENBQUM7Z0JBQ1A5QixrQkFBa0IsQ0FBQyxDQUFDO1lBRXJCLENBQUM7WUFFREUsY0FBYyxDQUFDd0IsY0FBYztZQUU3QlYsT0FBTyxDQUFDN0IsR0FBRyxDQUFDLENBQWEsY0FBRWdELFVBQVU7WUFDckNuQixPQUFPLENBQUM3QixHQUFHLENBQUMsQ0FBYSxjQUFFNEMsVUFBVTtZQUlyQyxHQUFLLENBQUNRLG1CQUFtQixHQUFHWCxVQUFVLENBQUNVLGNBQWMsQ0FBQyxDQUFPO1lBRTdEMUMsbUJBQW1CLENBQUNtQyxVQUFVO1lBQzlCakMsZ0JBQWdCLENBQUN5QyxtQkFBbUI7UUFHckMsQ0FBQztJQUlGLENBQUMsRUFBRSxDQUFDaEQ7UUFBQUEsYUFBYTtRQUFDRSxlQUFlO0lBQUEsQ0FBQztJQUdsQyxNQUFNLDZFQUNKMkIsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNEM7O3dGQUN6RDdDLGtFQUFZO2dCQUFDZ0UsTUFBTSxFQUFFcEQsTUFBTTtnQkFBRXFELE9BQU8sRUFBRXRDLFVBQVU7Ozs7Ozt3RkFFaERpQixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUU7O2dHQUNsRnFCLENBQUU7OzRCQUFFN0MsVUFBVTs0QkFBQyxDQUFDOzs7Ozs7O2dHQUNoQjhDLENBQUU7OzRCQUFHcEQsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLGFBQWEsQ0FBRXFELFVBQVU7NEJBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozt3RkFJakN4QixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUU7c0dBQ2xGRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBcUQ7O29HQUVsRUQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQUs7c0NBQ2xCcEIsUUFBUTs7Ozs7O29HQUlUNEMsQ0FBSTs7Z0NBQUMsQ0FBRztnQ0FBQzlDLFlBQVk7Z0NBQUMsQ0FBQztnQ0FBQ0EsWUFBWSxHQUFHLENBQUMsR0FBR1IsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLGFBQWEsQ0FBRXFELFVBQVUsR0FBR3JELGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxhQUFhLENBQUV1RCxVQUFVO2dDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLcEcxQixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBK0Q7Ozs7Ozs7Ozs7OztBQU9qRixDQUFDO0dBL0tLeEMsVUFBVTtLQUFWQSxVQUFVO0FBaUxoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BhZ2VTZWN0aW9ucy9zZWN0aW9ucy9WaXN1YWxpc2VyLmpzP2I1NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vQnV0dG9uXCI7XG5pbXBvcnQgSGVhZGVyU2VsZWN0IGZyb20gXCIuLi8uLi9Qb3J0YWJsZVRleHQvSGVhZGVyU2VsZWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi8uLi9jbGllbnQnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5cblxuY29uc3QgVmlzdWFsaXNlciA9IChwcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgSGVhZGVyIH0gPSBwcm9wcztcblxuXG5cdC8vIGNvbnN0IHRleHRCbG9jayA9IHByb3BzLkhlYWRlclswXS5jaGlsZHJlbjtcblxuXHQvLyBjb25zdCB0ZXN0ID0gPGRpdj5oaTwvZGl2PlxuXHQvLyB0ZXh0QmxvY2subWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xuXHQvLyBcdGxldCByZXN1bHQgPSBjb250ZW50LnRleHQuaW5jbHVkZXMoXCJbcHJpY2VkSXRlbXNdXCIpO1xuXHQvLyBcdGxldCByZXAgPSBjb250ZW50LnRleHQucmVwbGFjZSgnW3ByaWNlZEl0ZW1zXScsIHRlc3QpXG5cdFx0XG5cdC8vIH0pXG5cblxuXHRjb25zdCBbdGVzdCwgdXBkYXRlVGVzdF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2Ftb3VudFByaW1hcnksIHVwZGF0ZUFtb3VudFByaW1hcnldID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFthbW91bnRTZWNvbmRhcnksIHVwZGF0ZUFtb3VudFNlY29uZGFyeV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2NhbGN1bGF0ZWROdW0sIHVwZGF0ZUNhbGN1bGF0ZWROdW1dID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtuaWNlTnVtYmVyLCB1cGRhdGVOaWNlTnVtYmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbdW5pdHNQZXJJY29uLCB1cGRhdGVVbml0c1Blckljb25dID0gdXNlU3RhdGUoMSk7IC8vIGJ5IGRlZmF1bHQgMSBpY29uID0gMSB1bml0XG5cdGNvbnN0IFt1bml0SWNvbiwgdXBkYXRlVW5pdEljb25dID0gdXNlU3RhdGUobnVsbCk7IC8vIGJ5IGRlZmF1bHQgMSBpY29uID0gMSB1bml0XG5cdFxuXHRjb25zdCBjb250ZXh0T2JqID0ge1xuXHRcdHRlc3QsXG5cdFx0dXBkYXRlVGVzdCxcblx0XHR1cGRhdGVBbW91bnRQcmltYXJ5LFxuXHRcdHVwZGF0ZUFtb3VudFNlY29uZGFyeSxcblx0fVxuXG5cblxuXHRjb25zdCBvdXRwdXRCb3hlcyA9ICgpID0+IHtcblx0XHRsZXQgbnVtID0gMTAwMDA7XG5cdFx0bGV0IGJveEJhc2UgPSAxMDAwO1xuXHRcdGxldCBib3hlcyA9IFtdO1xuXG5cblx0XHRsZXQgdmFsUHJpbWFyeSA9IGFtb3VudFByaW1hcnk/LnByaWNlO1xuXHRcdGxldCB2YWxQcmltYXJ5SWNvbiA9IGFtb3VudFByaW1hcnk/LmltYWdlPy5hc3NldD8udXJsO1xuXHRcdGxldCB2YWxTZWNvbmRhcnkgPSBhbW91bnRTZWNvbmRhcnk/LmFjdHVhbFZhbHVlO1xuXG5cdFx0Y29uc29sZS5sb2coJ3ZhbFByaW1hcnlJY29uJywgdmFsUHJpbWFyeUljb24pO1xuXHRcdGNvbnNvbGUubG9nKCd2YWxQcmltYXJ5JywgdmFsUHJpbWFyeSk7XG5cdFx0Y29uc29sZS5sb2coJ3ZhbFNlY29uZGFyeScsIHZhbFNlY29uZGFyeSk7XG5cblx0XHRpZiAodmFsUHJpbWFyeSA9PT0gdW5kZWZpbmVkIHx8IHZhbFNlY29uZGFyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXG5cblx0XHRsZXQgaSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGNhbGN1bGF0ZWROdW0pIHtcblx0XHRcdGlmIChpID09IGNhbGN1bGF0ZWROdW0pIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3JlQUNURUhFRCcpO1xuXHRcdFx0fVxuXHRcdFx0Ym94ZXMucHVzaChcblx0XHRcdFx0PGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm0tMVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlkZS1wYXJ0aWFsXCI+PC9kaXY+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9e2Ftb3VudFByaW1hcnk/LmltYWdlPy5hc3NldD8udXJsfVxuXHRcdFx0XHRcdFx0YWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcblx0XHRcdFx0XHRcdHdpZHRoPXsxNX1cblx0XHRcdFx0XHRcdGhlaWdodD17MTV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0XHRpKytcblx0XHR9XG5cblx0XHRyZXR1cm4gYm94ZXM7XG5cblx0fVxuXG5cblxuXG5cdGZ1bmN0aW9uIGxvZzEwKG4pe1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKDEwMCpNYXRoLmxvZyhuKS9NYXRoLmxvZygxMCkpLzEwMDtcblx0fVxuXHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBvdXRwdXRVbml0SWNvbiA9ICgpID0+IHtcblx0XHRcdGxldCB2YWxQcmltYXJ5ID0gYW1vdW50UHJpbWFyeT8ucHJpY2U7XG5cdFxuXHRcdFx0aWYgKHZhbFByaW1hcnkgPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXHRcblx0XG5cdFx0XHRsZXQgaWNvbiA9IDxJbWFnZVxuXHRcdFx0c3JjPXthbW91bnRQcmltYXJ5Py5pbWFnZT8uYXNzZXQ/LnVybH1cblx0XHRcdGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG5cdFx0XHR3aWR0aD17MTV9XG5cdFx0XHRoZWlnaHQ9ezE1fVxuXHRcdFx0Lz5cblx0XG5cdFx0XHRyZXR1cm4gaWNvbjtcblx0XG5cdFx0fVxuXHRcdGlmIChhbW91bnRQcmltYXJ5ICE9PSB1bmRlZmluZWQgfHwgYW1vdW50U2Vjb25kYXJ5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxldCB2YWxQcmltYXJ5ID0gYW1vdW50UHJpbWFyeT8ucHJpY2U7XG5cdFx0XHRsZXQgdmFsU2Vjb25kYXJ5ID0gYW1vdW50U2Vjb25kYXJ5Py5hY3R1YWxWYWx1ZTtcblx0XHRcdGNvbnN0IG51bU9mVW5pdHMgPSBOdW1iZXIoKHZhbFNlY29uZGFyeSAvIHZhbFByaW1hcnkpLnRvRml4ZWQoMikpXG5cdFx0XHRsZXQgZmluYWxVbml0cyA9IG51bU9mVW5pdHM7XG5cblx0XHRcdGNvbnNvbGUubG9nKCdudW1PZlVuaXRzOicsIG51bU9mVW5pdHMpO1xuXG5cdFx0XHQvLyBiZWxvdyBsaW1pdHMgb3V0cHV0IGFuZCB1cGRhdGVzIHRoZSBrZXkgdG8gcmVmbGVjdCB3aGF0IHRoZSBpY29uIHJlcHJlc2VudHMgZS5nLiAxID0gMTAwIHVuaXRzIC4uLlxuXG5cdFx0XHRjb25zdCBsb2dUZW4gPSBsb2cxMChudW1PZlVuaXRzKTtcblx0XHRcdGNvbnN0IGxvZ0Zsb29yID0gTWF0aC5mbG9vcihsb2dUZW4pIC0gMTsgLy8gLTEgc28gdGhlIG51bWJlciBvdXRwdXQgaXMgbm90IHRvbyBsb3dcblx0XHRcdFxuXG5cdFx0XHRpZiAobG9nVGVuID4gMykge1xuXHRcdFx0XHRjb25zdCBuZXdQZXJVbml0ID0gTWF0aC5wb3coMTAsIGxvZ0Zsb29yKVxuXG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlZE5ld1BlclVuaXQgPSBuZXdQZXJVbml0LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIik7XG5cdFx0XHRcdHVwZGF0ZVVuaXRzUGVySWNvbihmb3JtYXR0ZWROZXdQZXJVbml0KVxuXG5cdFx0XHRcdGZpbmFsVW5pdHMgPSAgTnVtYmVyKChmaW5hbFVuaXRzIC8gMykudG9GaXhlZCgyKSlcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dXBkYXRlVW5pdHNQZXJJY29uKDEpXG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGVVbml0SWNvbihvdXRwdXRVbml0SWNvbigpKVxuXG5cdFx0XHRjb25zb2xlLmxvZygnbmV3UGVyVW5pdDonLCBuZXdQZXJVbml0KTtcblx0XHRcdGNvbnNvbGUubG9nKCdmaW5hbFVuaXRzOicsIGZpbmFsVW5pdHMpO1xuXG5cblxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkTnVtT2ZVbml0cyA9IG51bU9mVW5pdHMudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKTtcblxuXHRcdFx0dXBkYXRlQ2FsY3VsYXRlZE51bShmaW5hbFVuaXRzKVxuXHRcdFx0dXBkYXRlTmljZU51bWJlcihmb3JtYXR0ZWROdW1PZlVuaXRzKVxuXG5cblx0XHR9IFxuXG5cdFx0XG5cblx0fSwgW2Ftb3VudFByaW1hcnksYW1vdW50U2Vjb25kYXJ5XSk7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHQ8SGVhZGVyU2VsZWN0IGJsb2Nrcz17SGVhZGVyfSBjb250ZXh0PXtjb250ZXh0T2JqfSAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIGNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGgyPntuaWNlTnVtYmVyfSA8L2gyPlxuXHRcdFx0XHQ8aDM+eyBhbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsfSo8L2gzPlxuXHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIGNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0tMVwiPlxuXHRcdFx0XHRcdFx0e3VuaXRJY29ufVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFxuXG5cdFx0XHRcdFx0PHNwYW4+ID0ge3VuaXRzUGVySWNvbn0ge3VuaXRzUGVySWNvbiA+IDEgPyBhbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsIDogYW1vdW50UHJpbWFyeT8ubmFtZVNpbmdsZX0gPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXG5cdFx0XHRcdHsvKiB7b3V0cHV0Qm94ZXMoKX0gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj4gXG5cdClcblxufVxuIFxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXNlcjsiXSwibmFtZXMiOlsiQnV0dG9uIiwiSGVhZGVyU2VsZWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkltYWdlIiwiVmlzdWFsaXNlciIsInByb3BzIiwibG9nMTAiLCJuIiwiTWF0aCIsInJvdW5kIiwibG9nIiwiSGVhZGVyIiwidGVzdCIsInVwZGF0ZVRlc3QiLCJhbW91bnRQcmltYXJ5IiwidXBkYXRlQW1vdW50UHJpbWFyeSIsImFtb3VudFNlY29uZGFyeSIsInVwZGF0ZUFtb3VudFNlY29uZGFyeSIsImNhbGN1bGF0ZWROdW0iLCJ1cGRhdGVDYWxjdWxhdGVkTnVtIiwibmljZU51bWJlciIsInVwZGF0ZU5pY2VOdW1iZXIiLCJ1bml0c1Blckljb24iLCJ1cGRhdGVVbml0c1Blckljb24iLCJ1bml0SWNvbiIsInVwZGF0ZVVuaXRJY29uIiwiY29udGV4dE9iaiIsIm91dHB1dEJveGVzIiwibnVtIiwiYm94QmFzZSIsImJveGVzIiwidmFsUHJpbWFyeSIsInByaWNlIiwidmFsUHJpbWFyeUljb24iLCJpbWFnZSIsImFzc2V0IiwidXJsIiwidmFsU2Vjb25kYXJ5IiwiYWN0dWFsVmFsdWUiLCJjb25zb2xlIiwidW5kZWZpbmVkIiwiaSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm91dHB1dFVuaXRJY29uIiwiaWNvbiIsIm51bU9mVW5pdHMiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZmluYWxVbml0cyIsImxvZ1RlbiIsImxvZ0Zsb29yIiwiZmxvb3IiLCJuZXdQZXJVbml0IiwicG93IiwiZm9ybWF0dGVkTmV3UGVyVW5pdCIsInRvTG9jYWxlU3RyaW5nIiwiZm9ybWF0dGVkTnVtT2ZVbml0cyIsImJsb2NrcyIsImNvbnRleHQiLCJoMiIsImgzIiwibmFtZVBsdXJhbCIsInNwYW4iLCJuYW1lU2luZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});