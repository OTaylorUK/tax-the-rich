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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Visualise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Visualise */ \"./comps/Visualise/index.js\");\n\n\n\n\n// import client from '../../../client'\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    var log10 = function log10(n) {\n        return Math.round(100 * Math.log(n) / Math.log(10)) / 100;\n    };\n    var ref15, ref1, ref2;\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), test = ref3[0], updateTest = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref4[0], updateAmountPrimary = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref5[0], updateAmountSecondary = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), calculatedNum = ref6[0], updateCalculatedNum = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), niceNumber = ref7[0], updateNiceNumber = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), unitsPerIcon = ref8[0], updateUnitsPerIcon = ref8[1]; // by default 1 icon = 1 unit\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), unitIcon = ref9[0], updateUnitIcon = ref9[1]; // by default 1 icon = 1 unit\n    var contextObj = {\n        test: test,\n        updateTest: updateTest,\n        updateAmountPrimary: updateAmountPrimary,\n        updateAmountSecondary: updateAmountSecondary\n    };\n    var outputBoxes = function() {\n        var ref, ref12;\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n        var valPrimaryIcon = amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref12 = ref.asset) === null || ref12 === void 0 ? void 0 : ref12.url;\n        var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n        console.log('valPrimaryIcon', valPrimaryIcon);\n        console.log('valPrimary', valPrimary);\n        console.log('valSecondary', valSecondary);\n        if (valPrimary === undefined || valSecondary === undefined) return null;\n        var i = 0;\n        while(i < calculatedNum){\n            var ref13, ref14;\n            if (i == calculatedNum) {\n                console.log('reACTEHED');\n            }\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hide-partial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 70,\n                        columnNumber: 6\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref13 = amountPrimary.image) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.asset) === null || ref14 === void 0 ? void 0 : ref14.url,\n                        alt: \"Picture of the author\",\n                        width: 15,\n                        height: 15\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 71,\n                        columnNumber: 6\n                    }, _this1)\n                ]\n            }, i, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        return boxes;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var _this2 = _this1;\n        var outputUnitIcon = function() {\n            var ref, ref16;\n            var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            if (valPrimary === undefined) return null;\n            var icon = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref16 = ref.asset) === null || ref16 === void 0 ? void 0 : ref16.url,\n                alt: \"Picture of the author\",\n                width: 15,\n                height: 15\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 97,\n                columnNumber: 15\n            }, _this2);\n            return icon;\n        };\n        if (amountPrimary !== undefined || amountSecondary !== undefined) {\n            var valPrimary1 = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n            var numOfUnits = Number((valSecondary / valPrimary1).toFixed(2));\n            var finalUnits = numOfUnits;\n            // below limits output and updates the key to reflect what the icon represents e.g. 1 = 100 units ...\n            var logTen = log10(numOfUnits);\n            var logFloor = Math.floor(logTen) - 1; // -1 so the number output is not too low\n            console.log('numOfUnits:', numOfUnits);\n            console.log('logFloor:', logFloor);\n            if (logTen > 3) {\n                var newPerUnit = Math.pow(10, logFloor);\n                // const TEST = Math.pow(10, 3)\n                var formattedNewPerUnit = newPerUnit.toLocaleString(\"en-US\");\n                updateUnitsPerIcon(formattedNewPerUnit);\n                finalUnits = Number((finalUnits / newPerUnit).toFixed(2));\n            // finalUnits =  Number((finalUnits / newPerUnit).toFixed(2))\n            } else {\n                updateUnitsPerIcon(1);\n            }\n            updateUnitIcon(outputUnitIcon());\n            console.log('newPerUnit:', newPerUnit);\n            console.log('finalUnits:', finalUnits);\n            var formattedNumOfUnits = numOfUnits.toLocaleString(\"en-US\");\n            updateCalculatedNum(finalUnits);\n            updateNiceNumber(formattedNumOfUnits);\n        }\n    }, [\n        amountPrimary,\n        amountSecondary\n    ]);\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), objectA = ref10[0], updateObjectA = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), objectB = ref11[0], updateObjectB = ref11[1];\n    var visualiseContext = {\n        updateObjectA: updateObjectA,\n        updateObjectB: updateObjectB\n    };\n    var visualiseData = {\n        amounts: {\n            a: objectA,\n            b: objectB\n        },\n        results: {\n            unitIcon: unitIcon,\n            unitsPerIcon: {\n                raw: 1000,\n                display: '1,000'\n            },\n            numOfUnits: {\n                raw: 10000,\n                display: '10,000'\n            }\n        }\n    };\n    // arr of obj\n    var keyArr = [\n        {\n            visual: unitIcon,\n            units: visualiseData === null || visualiseData === void 0 ? void 0 : (ref15 = visualiseData.results) === null || ref15 === void 0 ? void 0 : ref15.unitsPerIcon,\n            isPlural: unitsPerIcon.display > 1 ? true : false,\n            name: {\n                singular: 'house',\n                plural: 'houses'\n            }\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"objectA: \",\n                    objectA\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 201,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"objectB: \",\n                    objectB\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 202,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: visualiseContext\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 204,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Results, {\n                number: visualiseData === null || visualiseData === void 0 ? void 0 : (ref1 = visualiseData.results) === null || ref1 === void 0 ? void 0 : ref1.numOfUnits,\n                object: visualiseData === null || visualiseData === void 0 ? void 0 : (ref2 = visualiseData.amounts) === null || ref2 === void 0 ? void 0 : ref2.a\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 213,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Key, {\n                keys: keyArr\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 226,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-row flex-wrap justify-center items-center\"\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 230,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Icons, {\n                data: visualiseData\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 233,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 199,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"AX77tNLZjthjwKQvSR7X3dKW/Jo=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN5QjtBQUNmO0FBQzNDLEVBQXVDO0FBRWQ7QUFDSztBQUNxQjs7O0FBSW5ELEdBQUssQ0FBQ1MsVUFBVSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O1FBMEVyQkMsS0FBSyxHQUFkLFFBQVEsQ0FBQ0EsS0FBSyxDQUFDQyxDQUFDLEVBQUMsQ0FBQztRQUNqQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsR0FBQ0QsSUFBSSxDQUFDRSxHQUFHLENBQUNILENBQUMsSUFBRUMsSUFBSSxDQUFDRSxHQUFHLENBQUMsRUFBRSxLQUFHLEdBQUc7SUFDcEQsQ0FBQztRQW9HUUMsS0FBc0IsRUF5QlpBLElBQXNCLEVBQXNCQSxJQUFzQjs7SUF2TXJGLEdBQUssQ0FBR0MsTUFBTSxHQUFLUCxLQUFLLENBQWhCTyxNQUFNO0lBR2QsRUFBOEM7SUFFOUMsRUFBNkI7SUFDN0IsRUFBc0M7SUFDdEMsRUFBd0Q7SUFDeEQsRUFBeUQ7SUFFekQsRUFBSztJQUdMLEdBQUssQ0FBc0JkLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTlCZSxJQUFJLEdBQWdCZixJQUFXLEtBQXpCZ0IsVUFBVSxHQUFJaEIsSUFBVztJQUN0QyxHQUFLLENBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuRGlCLGFBQWEsR0FBeUJqQixJQUFjLEtBQXJDa0IsbUJBQW1CLEdBQUlsQixJQUFjO0lBQzNELEdBQUssQ0FBNENBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXZEbUIsZUFBZSxHQUEyQm5CLElBQWMsS0FBdkNvQixxQkFBcUIsR0FBSXBCLElBQWM7SUFDL0QsR0FBSyxDQUF3Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBbkRxQixhQUFhLEdBQXlCckIsSUFBYyxLQUFyQ3NC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LE9BQU8sY0FBdEI3RCxJQUFzQixLQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBc0IsQ0FBRXlDLFVBQVU7Z0JBQUVrQyxNQUFNLEVBQUUzRSxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixJQUF0QkEsSUFBc0IsR0FBdEJBLGFBQWEsQ0FBRTBELE9BQU8sY0FBdEIxRCxJQUFzQixLQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBc0IsQ0FBRTJELENBQUM7Ozs7Ozt3RkFhckZuRSwyQ0FBRztnQkFBQ29GLElBQUksRUFBRVosTUFBTTs7Ozs7O3dGQUloQi9CLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUErRDs7Ozs7O3dGQUc3RTNDLDZDQUFLO2dCQUFDc0YsSUFBSSxFQUFFN0UsYUFBYTs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7R0FsT0tQLFVBQVU7S0FBVkEsVUFBVTtBQW9PaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcz9iNTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0J1dHRvblwiO1xuaW1wb3J0IEhlYWRlclNlbGVjdCBmcm9tIFwiLi4vLi4vUG9ydGFibGVUZXh0L0hlYWRlclNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7UmVzdWx0cywgSWNvbnMsIEtleX0gZnJvbSBcIi4uLy4uL1Zpc3VhbGlzZVwiO1xuXG5cblxuY29uc3QgVmlzdWFsaXNlciA9IChwcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgSGVhZGVyIH0gPSBwcm9wcztcblxuXG5cdC8vIGNvbnN0IHRleHRCbG9jayA9IHByb3BzLkhlYWRlclswXS5jaGlsZHJlbjtcblxuXHQvLyBjb25zdCB0ZXN0ID0gPGRpdj5oaTwvZGl2PlxuXHQvLyB0ZXh0QmxvY2subWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xuXHQvLyBcdGxldCByZXN1bHQgPSBjb250ZW50LnRleHQuaW5jbHVkZXMoXCJbcHJpY2VkSXRlbXNdXCIpO1xuXHQvLyBcdGxldCByZXAgPSBjb250ZW50LnRleHQucmVwbGFjZSgnW3ByaWNlZEl0ZW1zXScsIHRlc3QpXG5cdFx0XG5cdC8vIH0pXG5cblxuXHRjb25zdCBbdGVzdCwgdXBkYXRlVGVzdF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2Ftb3VudFByaW1hcnksIHVwZGF0ZUFtb3VudFByaW1hcnldID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFthbW91bnRTZWNvbmRhcnksIHVwZGF0ZUFtb3VudFNlY29uZGFyeV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2NhbGN1bGF0ZWROdW0sIHVwZGF0ZUNhbGN1bGF0ZWROdW1dID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtuaWNlTnVtYmVyLCB1cGRhdGVOaWNlTnVtYmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbdW5pdHNQZXJJY29uLCB1cGRhdGVVbml0c1Blckljb25dID0gdXNlU3RhdGUoMSk7IC8vIGJ5IGRlZmF1bHQgMSBpY29uID0gMSB1bml0XG5cdGNvbnN0IFt1bml0SWNvbiwgdXBkYXRlVW5pdEljb25dID0gdXNlU3RhdGUobnVsbCk7IC8vIGJ5IGRlZmF1bHQgMSBpY29uID0gMSB1bml0XG5cdFxuXHRjb25zdCBjb250ZXh0T2JqID0ge1xuXHRcdHRlc3QsXG5cdFx0dXBkYXRlVGVzdCxcblx0XHR1cGRhdGVBbW91bnRQcmltYXJ5LFxuXHRcdHVwZGF0ZUFtb3VudFNlY29uZGFyeSxcblx0fVxuXG5cblxuXHRjb25zdCBvdXRwdXRCb3hlcyA9ICgpID0+IHtcblx0XHRsZXQgbnVtID0gMTAwMDA7XG5cdFx0bGV0IGJveEJhc2UgPSAxMDAwO1xuXHRcdGxldCBib3hlcyA9IFtdO1xuXG5cblx0XHRsZXQgdmFsUHJpbWFyeSA9IGFtb3VudFByaW1hcnk/LnByaWNlO1xuXHRcdGxldCB2YWxQcmltYXJ5SWNvbiA9IGFtb3VudFByaW1hcnk/LmltYWdlPy5hc3NldD8udXJsO1xuXHRcdGxldCB2YWxTZWNvbmRhcnkgPSBhbW91bnRTZWNvbmRhcnk/LmFjdHVhbFZhbHVlO1xuXG5cdFx0Y29uc29sZS5sb2coJ3ZhbFByaW1hcnlJY29uJywgdmFsUHJpbWFyeUljb24pO1xuXHRcdGNvbnNvbGUubG9nKCd2YWxQcmltYXJ5JywgdmFsUHJpbWFyeSk7XG5cdFx0Y29uc29sZS5sb2coJ3ZhbFNlY29uZGFyeScsIHZhbFNlY29uZGFyeSk7XG5cblx0XHRpZiAodmFsUHJpbWFyeSA9PT0gdW5kZWZpbmVkIHx8IHZhbFNlY29uZGFyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXG5cblx0XHRsZXQgaSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGNhbGN1bGF0ZWROdW0pIHtcblx0XHRcdGlmIChpID09IGNhbGN1bGF0ZWROdW0pIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3JlQUNURUhFRCcpO1xuXHRcdFx0fVxuXHRcdFx0Ym94ZXMucHVzaChcblx0XHRcdFx0PGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm0tMVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlkZS1wYXJ0aWFsXCI+PC9kaXY+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9e2Ftb3VudFByaW1hcnk/LmltYWdlPy5hc3NldD8udXJsfVxuXHRcdFx0XHRcdFx0YWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcblx0XHRcdFx0XHRcdHdpZHRoPXsxNX1cblx0XHRcdFx0XHRcdGhlaWdodD17MTV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0XHRpKytcblx0XHR9XG5cblx0XHRyZXR1cm4gYm94ZXM7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGxvZzEwKG4pe1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKDEwMCpNYXRoLmxvZyhuKS9NYXRoLmxvZygxMCkpLzEwMDtcblx0fVxuXHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBvdXRwdXRVbml0SWNvbiA9ICgpID0+IHtcblx0XHRcdGxldCB2YWxQcmltYXJ5ID0gYW1vdW50UHJpbWFyeT8ucHJpY2U7XG5cdFxuXHRcdFx0aWYgKHZhbFByaW1hcnkgPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXHRcblx0XG5cdFx0XHRsZXQgaWNvbiA9IDxJbWFnZVxuXHRcdFx0c3JjPXthbW91bnRQcmltYXJ5Py5pbWFnZT8uYXNzZXQ/LnVybH1cblx0XHRcdGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG5cdFx0XHR3aWR0aD17MTV9XG5cdFx0XHRoZWlnaHQ9ezE1fVxuXHRcdFx0Lz5cblx0XG5cdFx0XHRyZXR1cm4gaWNvbjtcblx0XG5cdFx0fVxuXHRcdGlmIChhbW91bnRQcmltYXJ5ICE9PSB1bmRlZmluZWQgfHwgYW1vdW50U2Vjb25kYXJ5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxldCB2YWxQcmltYXJ5ID0gYW1vdW50UHJpbWFyeT8ucHJpY2U7XG5cdFx0XHRsZXQgdmFsU2Vjb25kYXJ5ID0gYW1vdW50U2Vjb25kYXJ5Py5hY3R1YWxWYWx1ZTtcblx0XHRcdGNvbnN0IG51bU9mVW5pdHMgPSBOdW1iZXIoKHZhbFNlY29uZGFyeSAvIHZhbFByaW1hcnkpLnRvRml4ZWQoMikpXG5cdFx0XHRsZXQgZmluYWxVbml0cyA9IG51bU9mVW5pdHM7XG5cblxuXHRcdFx0Ly8gYmVsb3cgbGltaXRzIG91dHB1dCBhbmQgdXBkYXRlcyB0aGUga2V5IHRvIHJlZmxlY3Qgd2hhdCB0aGUgaWNvbiByZXByZXNlbnRzIGUuZy4gMSA9IDEwMCB1bml0cyAuLi5cblxuXHRcdFx0Y29uc3QgbG9nVGVuID0gbG9nMTAobnVtT2ZVbml0cyk7XG5cdFx0XHRjb25zdCBsb2dGbG9vciA9IE1hdGguZmxvb3IobG9nVGVuKSAtIDE7IC8vIC0xIHNvIHRoZSBudW1iZXIgb3V0cHV0IGlzIG5vdCB0b28gbG93XG5cdFx0XHRjb25zb2xlLmxvZygnbnVtT2ZVbml0czonLCBudW1PZlVuaXRzKTtcblx0XHRcdGNvbnNvbGUubG9nKCdsb2dGbG9vcjonLCBsb2dGbG9vcik7XG5cdFx0XHRcblxuXHRcdFx0aWYgKGxvZ1RlbiA+IDMpIHtcblx0XHRcdFx0Y29uc3QgbmV3UGVyVW5pdCA9IE1hdGgucG93KDEwLCBsb2dGbG9vcilcblx0XHRcdFx0Ly8gY29uc3QgVEVTVCA9IE1hdGgucG93KDEwLCAzKVxuXG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlZE5ld1BlclVuaXQgPSBuZXdQZXJVbml0LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIik7XG5cdFx0XHRcdHVwZGF0ZVVuaXRzUGVySWNvbihmb3JtYXR0ZWROZXdQZXJVbml0KVxuXG5cdFx0XHRcdGZpbmFsVW5pdHMgPSAgTnVtYmVyKChmaW5hbFVuaXRzIC8gbmV3UGVyVW5pdCkudG9GaXhlZCgyKSlcblx0XHRcdFx0Ly8gZmluYWxVbml0cyA9ICBOdW1iZXIoKGZpbmFsVW5pdHMgLyBuZXdQZXJVbml0KS50b0ZpeGVkKDIpKVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1cGRhdGVVbml0c1Blckljb24oMSlcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZVVuaXRJY29uKG91dHB1dFVuaXRJY29uKCkpXG5cblx0XHRcdGNvbnNvbGUubG9nKCduZXdQZXJVbml0OicsIG5ld1BlclVuaXQpO1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZpbmFsVW5pdHM6JywgZmluYWxVbml0cyk7XG5cblxuXG5cdFx0XHRjb25zdCBmb3JtYXR0ZWROdW1PZlVuaXRzID0gbnVtT2ZVbml0cy50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpO1xuXG5cdFx0XHR1cGRhdGVDYWxjdWxhdGVkTnVtKGZpbmFsVW5pdHMpXG5cdFx0XHR1cGRhdGVOaWNlTnVtYmVyKGZvcm1hdHRlZE51bU9mVW5pdHMpXG5cblxuXHRcdH0gXG5cblx0fSwgW2Ftb3VudFByaW1hcnksYW1vdW50U2Vjb25kYXJ5XSk7XG5cblxuXG5cdGNvbnN0IFtvYmplY3RBLCB1cGRhdGVPYmplY3RBXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbb2JqZWN0QiwgdXBkYXRlT2JqZWN0Ql0gPSB1c2VTdGF0ZShudWxsKTtcblxuXG5cdGNvbnN0IHZpc3VhbGlzZUNvbnRleHQgPSB7XG5cdFx0dXBkYXRlT2JqZWN0QSxcblx0XHR1cGRhdGVPYmplY3RCLFxuXHR9XG5cblxuXHRjb25zdCB2aXN1YWxpc2VEYXRhID0ge1xuXHRcdGFtb3VudHM6IHtcblx0XHRcdGE6IG9iamVjdEEsXG5cdFx0XHRiOiBvYmplY3RCXG5cdFx0fSxcblx0XHRyZXN1bHRzOiB7XG5cdFx0XHR1bml0SWNvbjogdW5pdEljb24sXG5cdFx0XHR1bml0c1Blckljb246IHtcblx0XHRcdFx0cmF3OiAxMDAwLFxuXHRcdFx0XHRkaXNwbGF5OiAnMSwwMDAnLFxuXHRcdFx0fSxcblx0XHRcdG51bU9mVW5pdHM6IHtcblx0XHRcdFx0cmF3OiAxMDAwMCxcblx0XHRcdFx0ZGlzcGxheTogJzEwLDAwMCdcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBhcnIgb2Ygb2JqXG5cdGNvbnN0IGtleUFyciA9IFtcblx0XHR7XG5cdFx0XHR2aXN1YWw6IHVuaXRJY29uLFxuXHRcdFx0dW5pdHM6IHZpc3VhbGlzZURhdGE/LnJlc3VsdHM/LnVuaXRzUGVySWNvbixcblx0XHRcdGlzUGx1cmFsOiB1bml0c1Blckljb24uZGlzcGxheSA+IDEgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRuYW1lOiB7XG5cdFx0XHRcdHNpbmd1bGFyOiAnaG91c2UnLFxuXHRcdFx0XHRwbHVyYWw6ICdob3VzZXMnLFxuXHRcdFx0fVxuXHRcdH1cblx0XVxuXHRcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cblx0XHRcdDxzcGFuPm9iamVjdEE6IHtvYmplY3RBfTwvc3Bhbj5cblx0XHRcdDxzcGFuPm9iamVjdEI6IHtvYmplY3RCfTwvc3Bhbj5cblx0XHRcdHsvKiBIRUFERVIgLSBIZWFkZXIgc2VsZWN0aW9uIGUuZy4gY29tcGFyZSB4IHdpdGgvdG8geSAqL31cblx0XHRcdDxIZWFkZXJTZWxlY3QgYmxvY2tzPXtIZWFkZXJ9IGNvbnRleHQ9e3Zpc3VhbGlzZUNvbnRleHR9IC8+XG5cblx0XHRcdFxuXHRcdFx0ey8qIFJFU1VMVFMgLSBDYWxjdWxhdGVkIG51bWJlciBvZiB1bml0cyBlLmcuIDEwMCBob3VzZXMgKi99XG5cblx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIGNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGgyPntuaWNlTnVtYmVyfSA8L2gyPlxuXHRcdFx0XHQ8aDM+eyBhbW91bnRQcmltYXJ5Py5uYW1lUGx1cmFsfSo8L2gzPlxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0PFJlc3VsdHMgbnVtYmVyPXt2aXN1YWxpc2VEYXRhPy5yZXN1bHRzPy5udW1PZlVuaXRzfSBvYmplY3Q9e3Zpc3VhbGlzZURhdGE/LmFtb3VudHM/LmF9IC8+XG5cdFx0XHRcblx0XHRcdHsvKiBLRVkgLSBudW1iZXIgb2YgdW5pdHMgcGVyIGljb24gZS5nLiAxIGljb24gPSAxMDAgdW5pdHMgKi99XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJteS0xMCBjb250YWluZXIgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cblx0XHRcdFx0XHRcdHt1bml0SWNvbn1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxzcGFuPiA9IHt1bml0c1Blckljb259IHt1bml0c1Blckljb24gPiAxID8gYW1vdW50UHJpbWFyeT8ubmFtZVBsdXJhbCA6IGFtb3VudFByaW1hcnk/Lm5hbWVTaW5nbGV9IDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHQ8S2V5IGtleXM9e2tleUFycn0gLz5cblxuXG5cdFx0XHR7LyogSUNPTlMgLSBWaXN1YWwgcmVwcmVzZW50YXRpb24gZS5nLiBJQ09OIC8gQkxPQ0sgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0ey8qIHtvdXRwdXRCb3hlcygpfSAqL31cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEljb25zIGRhdGE9e3Zpc3VhbGlzZURhdGF9IC8+XG5cblx0XHQ8L2Rpdj4gXG5cdClcblxufVxuIFxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsaXNlcjsiXSwibmFtZXMiOlsiQnV0dG9uIiwiSGVhZGVyU2VsZWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkltYWdlIiwiUmVzdWx0cyIsIkljb25zIiwiS2V5IiwiVmlzdWFsaXNlciIsInByb3BzIiwibG9nMTAiLCJuIiwiTWF0aCIsInJvdW5kIiwibG9nIiwidmlzdWFsaXNlRGF0YSIsIkhlYWRlciIsInRlc3QiLCJ1cGRhdGVUZXN0IiwiYW1vdW50UHJpbWFyeSIsInVwZGF0ZUFtb3VudFByaW1hcnkiLCJhbW91bnRTZWNvbmRhcnkiLCJ1cGRhdGVBbW91bnRTZWNvbmRhcnkiLCJjYWxjdWxhdGVkTnVtIiwidXBkYXRlQ2FsY3VsYXRlZE51bSIsIm5pY2VOdW1iZXIiLCJ1cGRhdGVOaWNlTnVtYmVyIiwidW5pdHNQZXJJY29uIiwidXBkYXRlVW5pdHNQZXJJY29uIiwidW5pdEljb24iLCJ1cGRhdGVVbml0SWNvbiIsImNvbnRleHRPYmoiLCJvdXRwdXRCb3hlcyIsIm51bSIsImJveEJhc2UiLCJib3hlcyIsInZhbFByaW1hcnkiLCJwcmljZSIsInZhbFByaW1hcnlJY29uIiwiaW1hZ2UiLCJhc3NldCIsInVybCIsInZhbFNlY29uZGFyeSIsImFjdHVhbFZhbHVlIiwiY29uc29sZSIsInVuZGVmaW5lZCIsImkiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvdXRwdXRVbml0SWNvbiIsImljb24iLCJudW1PZlVuaXRzIiwiTnVtYmVyIiwidG9GaXhlZCIsImZpbmFsVW5pdHMiLCJsb2dUZW4iLCJsb2dGbG9vciIsImZsb29yIiwibmV3UGVyVW5pdCIsInBvdyIsImZvcm1hdHRlZE5ld1BlclVuaXQiLCJ0b0xvY2FsZVN0cmluZyIsImZvcm1hdHRlZE51bU9mVW5pdHMiLCJvYmplY3RBIiwidXBkYXRlT2JqZWN0QSIsIm9iamVjdEIiLCJ1cGRhdGVPYmplY3RCIiwidmlzdWFsaXNlQ29udGV4dCIsImFtb3VudHMiLCJhIiwiYiIsInJlc3VsdHMiLCJyYXciLCJkaXNwbGF5Iiwia2V5QXJyIiwidmlzdWFsIiwidW5pdHMiLCJpc1BsdXJhbCIsIm5hbWUiLCJzaW5ndWxhciIsInBsdXJhbCIsInNwYW4iLCJibG9ja3MiLCJjb250ZXh0IiwibnVtYmVyIiwib2JqZWN0Iiwia2V5cyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});