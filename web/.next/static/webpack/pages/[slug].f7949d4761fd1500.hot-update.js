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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// import client from '../../../client'\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    var log10 = function log10(n) {\n        return Math.round(100 * Math.log(n) / Math.log(10)) / 100;\n    };\n    var ref9, ref1;\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), test = ref2[0], updateTest = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref3[0], updateAmountPrimary = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref4[0], updateAmountSecondary = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), calculatedNum = ref5[0], updateCalculatedNum = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), niceNumber = ref6[0], updateNiceNumber = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), unitsPerIcon = ref7[0], updateUnitsPerIcon = ref7[1]; // by default 1 icon = 1 unit\n    var contextObj = {\n        test: test,\n        updateTest: updateTest,\n        updateAmountPrimary: updateAmountPrimary,\n        updateAmountSecondary: updateAmountSecondary\n    };\n    var outputBoxes = function() {\n        var ref, ref8;\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n        var valPrimaryIcon = amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref8 = ref.asset) === null || ref8 === void 0 ? void 0 : ref8.url;\n        var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n        console.log('valPrimaryIcon', valPrimaryIcon);\n        console.log('valPrimary', valPrimary);\n        console.log('valSecondary', valSecondary);\n        if (valPrimary === undefined || valSecondary === undefined) return null;\n        var i = 0;\n        while(i < calculatedNum){\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: valPrimaryIcon,\n                    alt: \"Picture of the author\",\n                    width: 15,\n                    height: 15\n                }, void 0, false, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                    lineNumber: 63,\n                    columnNumber: 6\n                }, _this1)\n            }, i, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        return boxes;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log('amountPrimary IS:', amountPrimary);\n        if (amountPrimary !== undefined || amountSecondary !== undefined) {\n            var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n            var numOfUnits = Number((valSecondary / valPrimary).toFixed(2));\n            var finalUnits = numOfUnits;\n            // below limits output and updates the key to reflect what the icon represents e.g. 1 = 100 units ...\n            var logTen = log10(numOfUnits);\n            var logFloor = Math.floor(logTen) - 1; // -1 so the number output is not too low\n            if (logTen > 3) {\n                var newPerUnit = Math.pow(10, logFloor);\n                var formattedNewPerUnit = newPerUnit.toLocaleString(\"en-US\");\n                updateUnitsPerIcon(formattedNewPerUnit);\n                finalUnits = Number((finalUnits / newPerUnit).toFixed(2));\n            } else {\n                updateUnitsPerIcon(1);\n            }\n            console.log('newPerUnit:', newPerUnit);\n            console.log('finalUnits:', finalUnits);\n            var formattedNumOfUnits = numOfUnits.toLocaleString(\"en-US\");\n            updateCalculatedNum(finalUnits);\n            updateNiceNumber(formattedNumOfUnits);\n        }\n    }, [\n        amountPrimary,\n        amountSecondary\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            \"Visualiser\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"current primary value is \",\n                    amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 133,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"current Secondary value is \",\n                    amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 134,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: contextObj\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 136,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10 container flex flex-col flex-wrap justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            niceNumber,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 139,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural,\n                            \"*\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 140,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 138,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10 container flex flex-col flex-wrap justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row flex-wrap justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref9 = amountPrimary.image) === null || ref9 === void 0 ? void 0 : (ref1 = ref9.asset) === null || ref1 === void 0 ? void 0 : ref1.url,\n                            alt: \"Picture of the author\",\n                            width: 15,\n                            height: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                            lineNumber: 146,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \" = \",\n                                unitsPerIcon,\n                                \" \",\n                                amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.namePlural,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                            lineNumber: 152,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                    lineNumber: 145,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 144,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-row flex-wrap justify-center items-center\",\n                children: outputBoxes()\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 157,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 130,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"aNoVH97jZOShMizHuObnDtks2I0=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBQ2Y7QUFDM0MsRUFBdUM7QUFFZDtBQUNLOzs7QUFJOUIsR0FBSyxDQUFDTSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7UUFtRXJCQyxLQUFLLEdBQWQsUUFBUSxDQUFDQSxLQUFLLENBQUNDLENBQUMsRUFBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxHQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsQ0FBQyxJQUFFQyxJQUFJLENBQUNFLEdBQUcsQ0FBQyxFQUFFLEtBQUcsR0FBRztJQUNwRCxDQUFDO1FBbUVTQyxJQUFvQjs7SUF0STlCLEdBQUssQ0FBR0MsTUFBTSxHQUFLUCxLQUFLLENBQWhCTyxNQUFNO0lBR2QsRUFBOEM7SUFFOUMsRUFBNkI7SUFDN0IsRUFBc0M7SUFDdEMsRUFBd0Q7SUFDeEQsRUFBeUQ7SUFFekQsRUFBSztJQUdMLEdBQUssQ0FBc0JYLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTlCWSxJQUFJLEdBQWdCWixJQUFXLEtBQXpCYSxVQUFVLEdBQUliLElBQVc7SUFDdEMsR0FBSyxDQUF3Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBbkRVLGFBQWEsR0FBeUJWLElBQWMsS0FBckNjLG1CQUFtQixHQUFJZCxJQUFjO0lBQzNELEdBQUssQ0FBNENBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXZEZSxlQUFlLEdBQTJCZixJQUFjLEtBQXZDZ0IscUJBQXFCLEdBQUloQixJQUFjO0lBQy9ELEdBQUssQ0FBd0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQW5EaUIsYUFBYSxHQUF5QmpCLElBQWMsS0FBckNrQixtQkFBbUIsR0FBSWxCLElBQWM7SUFDM0QsR0FBSyxDQUFrQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBN0NtQixVQUFVLEdBQXNCbkIsSUFBYyxLQUFsQ29CLGdCQUFnQixHQUFJcEIsSUFBYztJQUNyRCxHQUFLLENBQXNDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE5Q3FCLFlBQVksR0FBd0JyQixJQUFXLEtBQWpDc0Isa0JBQWtCLEdBQUl0QixJQUFXLElBQUUsQ0FBNkI7SUFFckYsR0FBSyxDQUFDdUIsVUFBVSxHQUFHLENBQUM7UUFDbkJYLElBQUksRUFBSkEsSUFBSTtRQUNKQyxVQUFVLEVBQVZBLFVBQVU7UUFDVkMsbUJBQW1CLEVBQW5CQSxtQkFBbUI7UUFDbkJFLHFCQUFxQixFQUFyQkEscUJBQXFCO0lBQ3RCLENBQUM7SUFJRCxHQUFLLENBQUNRLFdBQVcsR0FBRyxRQUNyQixHQUQyQixDQUFDO1lBT0xkLEdBQW9CO1FBTnpDLEdBQUcsQ0FBQ2UsR0FBRyxHQUFHLEtBQUs7UUFDZixHQUFHLENBQUNDLE9BQU8sR0FBRyxJQUFJO1FBQ2xCLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUdkLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHbEIsYUFBYSxhQUFiQSxhQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLGFBQWEsQ0FBRW1CLEtBQUs7UUFDckMsR0FBRyxDQUFDQyxjQUFjLEdBQUdwQixhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixJQUFwQkEsR0FBb0IsR0FBcEJBLGFBQWEsQ0FBRXFCLEtBQUssY0FBcEJyQixHQUFvQixLQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixXQUFwQkEsR0FBb0IsQ0FBRXNCLEtBQUssdUJBQTNCdEIsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixRQUFTdUIsR0FBRztRQUNyRCxHQUFHLENBQUNDLFlBQVksR0FBR25CLGVBQWUsYUFBZkEsZUFBZSxLQUFmQSxJQUFJLENBQUpBLENBQTRCLEdBQTVCQSxJQUFJLENBQUpBLENBQTRCLEdBQTVCQSxlQUFlLENBQUVvQixXQUFXO1FBRS9DQyxPQUFPLENBQUMzQixHQUFHLENBQUMsQ0FBZ0IsaUJBQUVxQixjQUFjO1FBQzVDTSxPQUFPLENBQUMzQixHQUFHLENBQUMsQ0FBWSxhQUFFbUIsVUFBVTtRQUNwQ1EsT0FBTyxDQUFDM0IsR0FBRyxDQUFDLENBQWMsZUFBRXlCLFlBQVk7UUFFeEMsRUFBRSxFQUFFTixVQUFVLEtBQUtTLFNBQVMsSUFBSUgsWUFBWSxLQUFLRyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFdkUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQztjQUVGQSxDQUFDLEdBQUdyQixhQUFhLENBQUUsQ0FBQztZQUMxQlUsS0FBSyxDQUFDWSxJQUFJLDZFQUNSQyxDQUFHO3NHQUNGdEMsbURBQUs7b0JBQ0x1QyxHQUFHLEVBQUVYLGNBQWM7b0JBQ25CWSxHQUFHLEVBQUMsQ0FBdUI7b0JBQzNCQyxLQUFLLEVBQUUsRUFBRTtvQkFDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7OztlQUxGTixDQUFDOzs7OztZQVNaQSxDQUFDO1FBQ0YsQ0FBQztRQUVELE1BQU0sQ0FBQ1gsS0FBSztJQUViLENBQUM7SUFNRDVCLGdEQUFTLENBQUMsUUFDWCxHQURpQixDQUFDO1FBQ2hCcUMsT0FBTyxDQUFDM0IsR0FBRyxDQUFDLENBQW1CLG9CQUFFQyxhQUFhO1FBRTlDLEVBQUUsRUFBRUEsYUFBYSxLQUFLMkIsU0FBUyxJQUFJdEIsZUFBZSxLQUFLc0IsU0FBUyxFQUFFLENBQUM7WUFDbEUsR0FBRyxDQUFDVCxVQUFVLEdBQUdsQixhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsYUFBYSxDQUFFbUIsS0FBSztZQUNyQyxHQUFHLENBQUNLLFlBQVksR0FBR25CLGVBQWUsYUFBZkEsZUFBZSxLQUFmQSxJQUFJLENBQUpBLENBQTRCLEdBQTVCQSxJQUFJLENBQUpBLENBQTRCLEdBQTVCQSxlQUFlLENBQUVvQixXQUFXO1lBQy9DLEdBQUssQ0FBQ1UsVUFBVSxHQUFHQyxNQUFNLEVBQUVaLFlBQVksR0FBR04sVUFBVSxFQUFFbUIsT0FBTyxDQUFDLENBQUM7WUFDL0QsR0FBRyxDQUFDQyxVQUFVLEdBQUdILFVBQVU7WUFJM0IsRUFBcUc7WUFFckcsR0FBSyxDQUFDSSxNQUFNLEdBQUc1QyxLQUFLLENBQUN3QyxVQUFVO1lBQy9CLEdBQUssQ0FBQ0ssUUFBUSxHQUFHM0MsSUFBSSxDQUFDNEMsS0FBSyxDQUFDRixNQUFNLElBQUksQ0FBQyxDQUFFLENBQXlDO1lBR2xGLEVBQUUsRUFBRUEsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNoQixHQUFLLENBQUNHLFVBQVUsR0FBRzdDLElBQUksQ0FBQzhDLEdBQUcsQ0FBQyxFQUFFLEVBQUVILFFBQVE7Z0JBQ3hDLEdBQUssQ0FBQ0ksbUJBQW1CLEdBQUdGLFVBQVUsQ0FBQ0csY0FBYyxDQUFDLENBQU87Z0JBQzdEakMsa0JBQWtCLENBQUNnQyxtQkFBbUI7Z0JBRXRDTixVQUFVLEdBQUlGLE1BQU0sRUFBRUUsVUFBVSxHQUFHSSxVQUFVLEVBQUVMLE9BQU8sQ0FBQyxDQUFDO1lBRXpELENBQUMsTUFBTSxDQUFDO2dCQUNQekIsa0JBQWtCLENBQUMsQ0FBQztZQUVyQixDQUFDO1lBRURjLE9BQU8sQ0FBQzNCLEdBQUcsQ0FBQyxDQUFhLGNBQUUyQyxVQUFVO1lBQ3JDaEIsT0FBTyxDQUFDM0IsR0FBRyxDQUFDLENBQWEsY0FBRXVDLFVBQVU7WUFJckMsR0FBSyxDQUFDUSxtQkFBbUIsR0FBR1gsVUFBVSxDQUFDVSxjQUFjLENBQUMsQ0FBTztZQUU3RHJDLG1CQUFtQixDQUFDOEIsVUFBVTtZQUM5QjVCLGdCQUFnQixDQUFDb0MsbUJBQW1CO1FBR3JDLENBQUM7SUFJRixDQUFDLEVBQUUsQ0FBQzlDO1FBQUFBLGFBQWE7UUFBQ0ssZUFBZTtJQUFBLENBQUM7SUFHbEMsTUFBTSw2RUFDSnlCLENBQUc7UUFBQ2lCLFNBQVMsRUFBQyxDQUE0Qzs7WUFBQyxDQUczRDt3RkFBQ0MsQ0FBSTs7b0JBQUMsQ0FBeUI7b0JBQUVoRCxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsYUFBYSxDQUFFaUQsVUFBVTs7Ozs7Ozt3RkFDekRELENBQUk7O29CQUFDLENBQTJCO29CQUFDM0MsZUFBZSxhQUFmQSxlQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBNEIsR0FBNUJBLElBQUksQ0FBSkEsQ0FBNEIsR0FBNUJBLGVBQWUsQ0FBRW9CLFdBQVc7Ozs7Ozs7d0ZBRTdEckMsa0VBQVk7Z0JBQUM4RCxNQUFNLEVBQUVqRCxNQUFNO2dCQUFFa0QsT0FBTyxFQUFFdEMsVUFBVTs7Ozs7O3dGQUVoRGlCLENBQUc7Z0JBQUNpQixTQUFTLEVBQUMsQ0FBcUU7O2dHQUNsRkssQ0FBRTs7NEJBQUUzQyxVQUFVOzRCQUFDLENBQUM7Ozs7Ozs7Z0dBQ2hCNEMsQ0FBRTs7NEJBQUdyRCxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsYUFBYSxDQUFFaUQsVUFBVTs0QkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7O3dGQUlqQ25CLENBQUc7Z0JBQUNpQixTQUFTLEVBQUMsQ0FBcUU7c0dBQ2xGakIsQ0FBRztvQkFBQ2lCLFNBQVMsRUFBQyxDQUFxRDs7b0dBQ2xFdkQsbURBQUs7NEJBQ0x1QyxHQUFHLEVBQUUvQixhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixJQUFwQkEsSUFBb0IsR0FBcEJBLGFBQWEsQ0FBRXFCLEtBQUssY0FBcEJyQixJQUFvQixLQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixXQUFwQkEsSUFBb0IsQ0FBRXNCLEtBQUssdUJBQTNCdEIsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixRQUFTdUIsR0FBRzs0QkFDckNTLEdBQUcsRUFBQyxDQUF1Qjs0QkFDM0JDLEtBQUssRUFBRSxFQUFFOzRCQUNUQyxNQUFNLEVBQUUsRUFBRTs7Ozs7O29HQUVWYyxDQUFJOztnQ0FBQyxDQUFHO2dDQUFDckMsWUFBWTtnQ0FBQyxDQUFDO2dDQUFDWCxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsYUFBYSxDQUFFaUQsVUFBVTtnQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS3JEbkIsQ0FBRztnQkFBQ2lCLFNBQVMsRUFBQyxDQUErRDswQkFFNUVqQyxXQUFXOzs7Ozs7Ozs7Ozs7QUFLaEIsQ0FBQztHQXpKS3JCLFVBQVU7S0FBVkEsVUFBVTtBQTJKaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcz9iNTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0J1dHRvblwiO1xuaW1wb3J0IEhlYWRlclNlbGVjdCBmcm9tIFwiLi4vLi4vUG9ydGFibGVUZXh0L0hlYWRlclNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuXG5cbmNvbnN0IFZpc3VhbGlzZXIgPSAocHJvcHMpID0+IHtcblxuXHRjb25zdCB7IEhlYWRlciB9ID0gcHJvcHM7XG5cblxuXHQvLyBjb25zdCB0ZXh0QmxvY2sgPSBwcm9wcy5IZWFkZXJbMF0uY2hpbGRyZW47XG5cblx0Ly8gY29uc3QgdGVzdCA9IDxkaXY+aGk8L2Rpdj5cblx0Ly8gdGV4dEJsb2NrLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcblx0Ly8gXHRsZXQgcmVzdWx0ID0gY29udGVudC50ZXh0LmluY2x1ZGVzKFwiW3ByaWNlZEl0ZW1zXVwiKTtcblx0Ly8gXHRsZXQgcmVwID0gY29udGVudC50ZXh0LnJlcGxhY2UoJ1twcmljZWRJdGVtc10nLCB0ZXN0KVxuXHRcdFxuXHQvLyB9KVxuXG5cblx0Y29uc3QgW3Rlc3QsIHVwZGF0ZVRlc3RdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFthbW91bnRQcmltYXJ5LCB1cGRhdGVBbW91bnRQcmltYXJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbYW1vdW50U2Vjb25kYXJ5LCB1cGRhdGVBbW91bnRTZWNvbmRhcnldID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtjYWxjdWxhdGVkTnVtLCB1cGRhdGVDYWxjdWxhdGVkTnVtXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbbmljZU51bWJlciwgdXBkYXRlTmljZU51bWJlcl0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3VuaXRzUGVySWNvbiwgdXBkYXRlVW5pdHNQZXJJY29uXSA9IHVzZVN0YXRlKDEpOyAvLyBieSBkZWZhdWx0IDEgaWNvbiA9IDEgdW5pdFxuXHRcblx0Y29uc3QgY29udGV4dE9iaiA9IHtcblx0XHR0ZXN0LFxuXHRcdHVwZGF0ZVRlc3QsXG5cdFx0dXBkYXRlQW1vdW50UHJpbWFyeSxcblx0XHR1cGRhdGVBbW91bnRTZWNvbmRhcnksXG5cdH1cblxuXG5cblx0Y29uc3Qgb3V0cHV0Qm94ZXMgPSAoKSA9PiB7XG5cdFx0bGV0IG51bSA9IDEwMDAwO1xuXHRcdGxldCBib3hCYXNlID0gMTAwMDtcblx0XHRsZXQgYm94ZXMgPSBbXTtcblxuXG5cdFx0bGV0IHZhbFByaW1hcnkgPSBhbW91bnRQcmltYXJ5Py5wcmljZTtcblx0XHRsZXQgdmFsUHJpbWFyeUljb24gPSBhbW91bnRQcmltYXJ5Py5pbWFnZT8uYXNzZXQ/LnVybDtcblx0XHRsZXQgdmFsU2Vjb25kYXJ5ID0gYW1vdW50U2Vjb25kYXJ5Py5hY3R1YWxWYWx1ZTtcblxuXHRcdGNvbnNvbGUubG9nKCd2YWxQcmltYXJ5SWNvbicsIHZhbFByaW1hcnlJY29uKTtcblx0XHRjb25zb2xlLmxvZygndmFsUHJpbWFyeScsIHZhbFByaW1hcnkpO1xuXHRcdGNvbnNvbGUubG9nKCd2YWxTZWNvbmRhcnknLCB2YWxTZWNvbmRhcnkpO1xuXG5cdFx0aWYgKHZhbFByaW1hcnkgPT09IHVuZGVmaW5lZCB8fCB2YWxTZWNvbmRhcnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblx0XHRsZXQgaSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGNhbGN1bGF0ZWROdW0pIHtcblx0XHRcdGJveGVzLnB1c2goXG5cdFx0XHRcdDxkaXYga2V5PXtpfT5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17dmFsUHJpbWFyeUljb259XG5cdFx0XHRcdFx0XHRhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuXHRcdFx0XHRcdFx0d2lkdGg9ezE1fVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHRcdGkrK1xuXHRcdH1cblxuXHRcdHJldHVybiBib3hlcztcblxuXHR9XG5cblx0ZnVuY3Rpb24gbG9nMTAobil7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoMTAwKk1hdGgubG9nKG4pL01hdGgubG9nKDEwKSkvMTAwO1xuXHR9XG5cdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdhbW91bnRQcmltYXJ5IElTOicsIGFtb3VudFByaW1hcnkpO1xuXG5cdFx0aWYgKGFtb3VudFByaW1hcnkgIT09IHVuZGVmaW5lZCB8fCBhbW91bnRTZWNvbmRhcnkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bGV0IHZhbFByaW1hcnkgPSBhbW91bnRQcmltYXJ5Py5wcmljZTtcblx0XHRcdGxldCB2YWxTZWNvbmRhcnkgPSBhbW91bnRTZWNvbmRhcnk/LmFjdHVhbFZhbHVlO1xuXHRcdFx0Y29uc3QgbnVtT2ZVbml0cyA9IE51bWJlcigodmFsU2Vjb25kYXJ5IC8gdmFsUHJpbWFyeSkudG9GaXhlZCgyKSlcblx0XHRcdGxldCBmaW5hbFVuaXRzID0gbnVtT2ZVbml0cztcblxuXG5cblx0XHRcdC8vIGJlbG93IGxpbWl0cyBvdXRwdXQgYW5kIHVwZGF0ZXMgdGhlIGtleSB0byByZWZsZWN0IHdoYXQgdGhlIGljb24gcmVwcmVzZW50cyBlLmcuIDEgPSAxMDAgdW5pdHMgLi4uXG5cblx0XHRcdGNvbnN0IGxvZ1RlbiA9IGxvZzEwKG51bU9mVW5pdHMpO1xuXHRcdFx0Y29uc3QgbG9nRmxvb3IgPSBNYXRoLmZsb29yKGxvZ1RlbikgLSAxOyAvLyAtMSBzbyB0aGUgbnVtYmVyIG91dHB1dCBpcyBub3QgdG9vIGxvd1xuXHRcdFx0XG5cblx0XHRcdGlmIChsb2dUZW4gPiAzKSB7XG5cdFx0XHRcdGNvbnN0IG5ld1BlclVuaXQgPSBNYXRoLnBvdygxMCwgbG9nRmxvb3IpXG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlZE5ld1BlclVuaXQgPSBuZXdQZXJVbml0LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIik7XG5cdFx0XHRcdHVwZGF0ZVVuaXRzUGVySWNvbihmb3JtYXR0ZWROZXdQZXJVbml0KVxuXG5cdFx0XHRcdGZpbmFsVW5pdHMgPSAgTnVtYmVyKChmaW5hbFVuaXRzIC8gbmV3UGVyVW5pdCkudG9GaXhlZCgyKSlcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dXBkYXRlVW5pdHNQZXJJY29uKDEpXG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZygnbmV3UGVyVW5pdDonLCBuZXdQZXJVbml0KTtcblx0XHRcdGNvbnNvbGUubG9nKCdmaW5hbFVuaXRzOicsIGZpbmFsVW5pdHMpO1xuXG5cblxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkTnVtT2ZVbml0cyA9IG51bU9mVW5pdHMudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKTtcblxuXHRcdFx0dXBkYXRlQ2FsY3VsYXRlZE51bShmaW5hbFVuaXRzKVxuXHRcdFx0dXBkYXRlTmljZU51bWJlcihmb3JtYXR0ZWROdW1PZlVuaXRzKVxuXG5cblx0XHR9IFxuXG5cdFx0XG5cblx0fSwgW2Ftb3VudFByaW1hcnksYW1vdW50U2Vjb25kYXJ5XSk7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRWaXN1YWxpc2VyXG5cblx0XHRcdDxzcGFuPmN1cnJlbnQgcHJpbWFyeSB2YWx1ZSBpcyB7IGFtb3VudFByaW1hcnk/Lm5hbWVQbHVyYWx9PC9zcGFuPlxuXHRcdFx0PHNwYW4+Y3VycmVudCBTZWNvbmRhcnkgdmFsdWUgaXMge2Ftb3VudFNlY29uZGFyeT8uYWN0dWFsVmFsdWV9PC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8SGVhZGVyU2VsZWN0IGJsb2Nrcz17SGVhZGVyfSBjb250ZXh0PXtjb250ZXh0T2JqfSAvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIGNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGgyPntuaWNlTnVtYmVyfSA8L2gyPlxuXHRcdFx0XHQ8aDM+eyBhbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsfSo8L2gzPlxuXHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIGNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YW1vdW50UHJpbWFyeT8uaW1hZ2U/LmFzc2V0Py51cmx9XG5cdFx0XHRcdFx0XHRhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuXHRcdFx0XHRcdFx0d2lkdGg9ezE1fVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxzcGFuPiA9IHt1bml0c1Blckljb259IHthbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsfSA8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cblx0XHRcdFx0e291dHB1dEJveGVzKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj4gXG5cdClcblxufVxuIFxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXNlcjsiXSwibmFtZXMiOlsiQnV0dG9uIiwiSGVhZGVyU2VsZWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkltYWdlIiwiVmlzdWFsaXNlciIsInByb3BzIiwibG9nMTAiLCJuIiwiTWF0aCIsInJvdW5kIiwibG9nIiwiYW1vdW50UHJpbWFyeSIsIkhlYWRlciIsInRlc3QiLCJ1cGRhdGVUZXN0IiwidXBkYXRlQW1vdW50UHJpbWFyeSIsImFtb3VudFNlY29uZGFyeSIsInVwZGF0ZUFtb3VudFNlY29uZGFyeSIsImNhbGN1bGF0ZWROdW0iLCJ1cGRhdGVDYWxjdWxhdGVkTnVtIiwibmljZU51bWJlciIsInVwZGF0ZU5pY2VOdW1iZXIiLCJ1bml0c1Blckljb24iLCJ1cGRhdGVVbml0c1Blckljb24iLCJjb250ZXh0T2JqIiwib3V0cHV0Qm94ZXMiLCJudW0iLCJib3hCYXNlIiwiYm94ZXMiLCJ2YWxQcmltYXJ5IiwicHJpY2UiLCJ2YWxQcmltYXJ5SWNvbiIsImltYWdlIiwiYXNzZXQiLCJ1cmwiLCJ2YWxTZWNvbmRhcnkiLCJhY3R1YWxWYWx1ZSIsImNvbnNvbGUiLCJ1bmRlZmluZWQiLCJpIiwicHVzaCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibnVtT2ZVbml0cyIsIk51bWJlciIsInRvRml4ZWQiLCJmaW5hbFVuaXRzIiwibG9nVGVuIiwibG9nRmxvb3IiLCJmbG9vciIsIm5ld1BlclVuaXQiLCJwb3ciLCJmb3JtYXR0ZWROZXdQZXJVbml0IiwidG9Mb2NhbGVTdHJpbmciLCJmb3JtYXR0ZWROdW1PZlVuaXRzIiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWVQbHVyYWwiLCJibG9ja3MiLCJjb250ZXh0IiwiaDIiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});