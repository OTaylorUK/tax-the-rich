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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Visualise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Visualise */ \"./comps/Visualise/index.js\");\n\n\n\n\n// import client from '../../../client'\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    var log10 = function log10(n) {\n        return Math.round(100 * Math.log(n) / Math.log(10)) / 100;\n    };\n    var ref15, ref1, ref2;\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), test = ref3[0], updateTest = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref4[0], updateAmountPrimary = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref5[0], updateAmountSecondary = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), calculatedNum = ref6[0], updateCalculatedNum = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), niceNumber = ref7[0], updateNiceNumber = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), unitsPerIcon = ref8[0], updateUnitsPerIcon = ref8[1]; // by default 1 icon = 1 unit\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), unitIcon = ref9[0], updateUnitIcon = ref9[1]; // by default 1 icon = 1 unit\n    var contextObj = {\n        test: test,\n        updateTest: updateTest,\n        updateAmountPrimary: updateAmountPrimary,\n        updateAmountSecondary: updateAmountSecondary\n    };\n    var outputBoxes = function() {\n        var ref, ref12;\n        var num = 10000;\n        var boxBase = 1000;\n        var boxes = [];\n        var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n        var valPrimaryIcon = amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref12 = ref.asset) === null || ref12 === void 0 ? void 0 : ref12.url;\n        var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n        console.log('valPrimaryIcon', valPrimaryIcon);\n        console.log('valPrimary', valPrimary);\n        console.log('valSecondary', valSecondary);\n        if (valPrimary === undefined || valSecondary === undefined) return null;\n        var i = 0;\n        while(i < calculatedNum){\n            var ref13, ref14;\n            if (i == calculatedNum) {\n                console.log('reACTEHED');\n            }\n            boxes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hide-partial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 70,\n                        columnNumber: 6\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref13 = amountPrimary.image) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.asset) === null || ref14 === void 0 ? void 0 : ref14.url,\n                        alt: \"Picture of the author\",\n                        width: 15,\n                        height: 15\n                    }, void 0, false, {\n                        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                        lineNumber: 71,\n                        columnNumber: 6\n                    }, _this1)\n                ]\n            }, i, true, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, _this1));\n            i++;\n        }\n        return boxes;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var _this2 = _this1;\n        var outputUnitIcon = function() {\n            var ref, ref16;\n            var valPrimary = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            if (valPrimary === undefined) return null;\n            var icon = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: amountPrimary === null || amountPrimary === void 0 ? void 0 : (ref = amountPrimary.image) === null || ref === void 0 ? void 0 : (ref16 = ref.asset) === null || ref16 === void 0 ? void 0 : ref16.url,\n                alt: \"Picture of the author\",\n                width: 15,\n                height: 15\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 97,\n                columnNumber: 15\n            }, _this2);\n            return icon;\n        };\n        if (amountPrimary !== undefined || amountSecondary !== undefined) {\n            var valPrimary1 = amountPrimary === null || amountPrimary === void 0 ? void 0 : amountPrimary.price;\n            var valSecondary = amountSecondary === null || amountSecondary === void 0 ? void 0 : amountSecondary.actualValue;\n            var numOfUnits = Number((valSecondary / valPrimary1).toFixed(2));\n            var finalUnits = numOfUnits;\n            // below limits output and updates the key to reflect what the icon represents e.g. 1 = 100 units ...\n            var logTen = log10(numOfUnits);\n            var logFloor = Math.floor(logTen) - 1; // -1 so the number output is not too low\n            console.log('numOfUnits:', numOfUnits);\n            console.log('logFloor:', logFloor);\n            if (logTen > 3) {\n                var newPerUnit = Math.pow(10, logFloor);\n                // const TEST = Math.pow(10, 3)\n                var formattedNewPerUnit = newPerUnit.toLocaleString(\"en-US\");\n                updateUnitsPerIcon(formattedNewPerUnit);\n                finalUnits = Number((finalUnits / newPerUnit).toFixed(2));\n            // finalUnits =  Number((finalUnits / newPerUnit).toFixed(2))\n            } else {\n                updateUnitsPerIcon(1);\n            }\n            updateUnitIcon(outputUnitIcon());\n            console.log('newPerUnit:', newPerUnit);\n            console.log('finalUnits:', finalUnits);\n            var formattedNumOfUnits = numOfUnits.toLocaleString(\"en-US\");\n            updateCalculatedNum(finalUnits);\n            updateNiceNumber(formattedNumOfUnits);\n        }\n    }, [\n        amountPrimary,\n        amountSecondary\n    ]);\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), objectA = ref10[0], updateObjectA = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), objectB = ref11[0], updateObjectB = ref11[1];\n    var visualiseContext = {\n        updateObjectA: updateObjectA,\n        updateObjectB: updateObjectB\n    };\n    var visualiseData = {\n        amounts: {\n            a: objectA,\n            b: objectB\n        },\n        results: {\n            unitIcon: unitIcon,\n            unitsPerIcon: {\n                raw: 1000,\n                display: '1,000'\n            },\n            numOfUnits: {\n                raw: 10000,\n                display: '10,000'\n            }\n        }\n    };\n    // arr of obj\n    var keyArr = [\n        {\n            visual: unitIcon,\n            units: visualiseData === null || visualiseData === void 0 ? void 0 : (ref15 = visualiseData.results) === null || ref15 === void 0 ? void 0 : ref15.unitsPerIcon,\n            isPlural: unitsPerIcon.display > 1 ? true : false,\n            name: {\n                singular: 'house',\n                plural: 'houses'\n            }\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: visualiseContext\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 204,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Results, {\n                number: visualiseData === null || visualiseData === void 0 ? void 0 : (ref1 = visualiseData.results) === null || ref1 === void 0 ? void 0 : ref1.numOfUnits,\n                object: visualiseData === null || visualiseData === void 0 ? void 0 : (ref2 = visualiseData.amounts) === null || ref2 === void 0 ? void 0 : ref2.a\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 213,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Key, {\n                keys: keyArr\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 226,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-row flex-wrap justify-center items-center\"\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 230,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Icons, {\n                data: visualiseData\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 233,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 199,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"AX77tNLZjthjwKQvSR7X3dKW/Jo=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN5QjtBQUNmO0FBQzNDLEVBQXVDO0FBRWQ7QUFDSztBQUNxQjs7O0FBSW5ELEdBQUssQ0FBQ1MsVUFBVSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O1FBMEVyQkMsS0FBSyxHQUFkLFFBQVEsQ0FBQ0EsS0FBSyxDQUFDQyxDQUFDLEVBQUMsQ0FBQztRQUNqQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsR0FBQ0QsSUFBSSxDQUFDRSxHQUFHLENBQUNILENBQUMsSUFBRUMsSUFBSSxDQUFDRSxHQUFHLENBQUMsRUFBRSxLQUFHLEdBQUc7SUFDcEQsQ0FBQztRQW9HUUMsS0FBc0IsRUF5QlpBLElBQXNCLEVBQXNCQSxJQUFzQjs7SUF2TXJGLEdBQUssQ0FBR0MsTUFBTSxHQUFLUCxLQUFLLENBQWhCTyxNQUFNO0lBR2QsRUFBOEM7SUFFOUMsRUFBNkI7SUFDN0IsRUFBc0M7SUFDdEMsRUFBd0Q7SUFDeEQsRUFBeUQ7SUFFekQsRUFBSztJQUdMLEdBQUssQ0FBc0JkLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTlCZSxJQUFJLEdBQWdCZixJQUFXLEtBQXpCZ0IsVUFBVSxHQUFJaEIsSUFBVztJQUN0QyxHQUFLLENBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuRGlCLGFBQWEsR0FBeUJqQixJQUFjLEtBQXJDa0IsbUJBQW1CLEdBQUlsQixJQUFjO0lBQzNELEdBQUssQ0FBNENBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXZEbUIsZUFBZSxHQUEyQm5CLElBQWMsS0FBdkNvQixxQkFBcUIsR0FBSXBCLElBQWM7SUFDL0QsR0FBSyxDQUF3Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBbkRxQixhQUFhLEdBQXlCckIsSUFBYyxLQUFyQ3NC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VTtnQkFBRWlDLE1BQU0sRUFBRTFFLGFBQWEsYUFBYkEsYUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQXNCLEdBQXRCQSxJQUFJLENBQUpBLENBQXNCLElBQXRCQSxJQUFzQixHQUF0QkEsYUFBYSxDQUFFMEQsT0FBTyxjQUF0QjFELElBQXNCLEtBQXRCQSxJQUFJLENBQUpBLENBQXNCLEdBQXRCQSxJQUFJLENBQUpBLENBQXNCLEdBQXRCQSxJQUFzQixDQUFFMkQsQ0FBQzs7Ozs7O3dGQWFyRm5FLDJDQUFHO2dCQUFDbUYsSUFBSSxFQUFFWCxNQUFNOzs7Ozs7d0ZBSWhCL0IsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQStEOzs7Ozs7d0ZBRzdFM0MsNkNBQUs7Z0JBQUNxRixJQUFJLEVBQUU1RSxhQUFhOzs7Ozs7Ozs7Ozs7QUFLN0IsQ0FBQztHQWxPS1AsVUFBVTtLQUFWQSxVQUFVO0FBb09oQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BhZ2VTZWN0aW9ucy9zZWN0aW9ucy9WaXN1YWxpc2VyLmpzP2I1NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vQnV0dG9uXCI7XG5pbXBvcnQgSGVhZGVyU2VsZWN0IGZyb20gXCIuLi8uLi9Qb3J0YWJsZVRleHQvSGVhZGVyU2VsZWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi8uLi9jbGllbnQnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtSZXN1bHRzLCBJY29ucywgS2V5fSBmcm9tIFwiLi4vLi4vVmlzdWFsaXNlXCI7XG5cblxuXG5jb25zdCBWaXN1YWxpc2VyID0gKHByb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBIZWFkZXIgfSA9IHByb3BzO1xuXG5cblx0Ly8gY29uc3QgdGV4dEJsb2NrID0gcHJvcHMuSGVhZGVyWzBdLmNoaWxkcmVuO1xuXG5cdC8vIGNvbnN0IHRlc3QgPSA8ZGl2PmhpPC9kaXY+XG5cdC8vIHRleHRCbG9jay5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG5cdC8vIFx0bGV0IHJlc3VsdCA9IGNvbnRlbnQudGV4dC5pbmNsdWRlcyhcIltwcmljZWRJdGVtc11cIik7XG5cdC8vIFx0bGV0IHJlcCA9IGNvbnRlbnQudGV4dC5yZXBsYWNlKCdbcHJpY2VkSXRlbXNdJywgdGVzdClcblx0XHRcblx0Ly8gfSlcblxuXG5cdGNvbnN0IFt0ZXN0LCB1cGRhdGVUZXN0XSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBbYW1vdW50UHJpbWFyeSwgdXBkYXRlQW1vdW50UHJpbWFyeV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2Ftb3VudFNlY29uZGFyeSwgdXBkYXRlQW1vdW50U2Vjb25kYXJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbY2FsY3VsYXRlZE51bSwgdXBkYXRlQ2FsY3VsYXRlZE51bV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW25pY2VOdW1iZXIsIHVwZGF0ZU5pY2VOdW1iZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFt1bml0c1Blckljb24sIHVwZGF0ZVVuaXRzUGVySWNvbl0gPSB1c2VTdGF0ZSgxKTsgLy8gYnkgZGVmYXVsdCAxIGljb24gPSAxIHVuaXRcblx0Y29uc3QgW3VuaXRJY29uLCB1cGRhdGVVbml0SWNvbl0gPSB1c2VTdGF0ZShudWxsKTsgLy8gYnkgZGVmYXVsdCAxIGljb24gPSAxIHVuaXRcblx0XG5cdGNvbnN0IGNvbnRleHRPYmogPSB7XG5cdFx0dGVzdCxcblx0XHR1cGRhdGVUZXN0LFxuXHRcdHVwZGF0ZUFtb3VudFByaW1hcnksXG5cdFx0dXBkYXRlQW1vdW50U2Vjb25kYXJ5LFxuXHR9XG5cblxuXG5cdGNvbnN0IG91dHB1dEJveGVzID0gKCkgPT4ge1xuXHRcdGxldCBudW0gPSAxMDAwMDtcblx0XHRsZXQgYm94QmFzZSA9IDEwMDA7XG5cdFx0bGV0IGJveGVzID0gW107XG5cblxuXHRcdGxldCB2YWxQcmltYXJ5ID0gYW1vdW50UHJpbWFyeT8ucHJpY2U7XG5cdFx0bGV0IHZhbFByaW1hcnlJY29uID0gYW1vdW50UHJpbWFyeT8uaW1hZ2U/LmFzc2V0Py51cmw7XG5cdFx0bGV0IHZhbFNlY29uZGFyeSA9IGFtb3VudFNlY29uZGFyeT8uYWN0dWFsVmFsdWU7XG5cblx0XHRjb25zb2xlLmxvZygndmFsUHJpbWFyeUljb24nLCB2YWxQcmltYXJ5SWNvbik7XG5cdFx0Y29uc29sZS5sb2coJ3ZhbFByaW1hcnknLCB2YWxQcmltYXJ5KTtcblx0XHRjb25zb2xlLmxvZygndmFsU2Vjb25kYXJ5JywgdmFsU2Vjb25kYXJ5KTtcblxuXHRcdGlmICh2YWxQcmltYXJ5ID09PSB1bmRlZmluZWQgfHwgdmFsU2Vjb25kYXJ5ID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG5cblxuXHRcdGxldCBpID0gMDtcblxuXHRcdHdoaWxlIChpIDwgY2FsY3VsYXRlZE51bSkge1xuXHRcdFx0aWYgKGkgPT0gY2FsY3VsYXRlZE51bSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncmVBQ1RFSEVEJyk7XG5cdFx0XHR9XG5cdFx0XHRib3hlcy5wdXNoKFxuXHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibS0xXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoaWRlLXBhcnRpYWxcIj48L2Rpdj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YW1vdW50UHJpbWFyeT8uaW1hZ2U/LmFzc2V0Py51cmx9XG5cdFx0XHRcdFx0XHRhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuXHRcdFx0XHRcdFx0d2lkdGg9ezE1fVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHRcdGkrK1xuXHRcdH1cblxuXHRcdHJldHVybiBib3hlcztcblxuXHR9XG5cblx0ZnVuY3Rpb24gbG9nMTAobil7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoMTAwKk1hdGgubG9nKG4pL01hdGgubG9nKDEwKSkvMTAwO1xuXHR9XG5cdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IG91dHB1dFVuaXRJY29uID0gKCkgPT4ge1xuXHRcdFx0bGV0IHZhbFByaW1hcnkgPSBhbW91bnRQcmltYXJ5Py5wcmljZTtcblx0XG5cdFx0XHRpZiAodmFsUHJpbWFyeSA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cdFxuXHRcblx0XHRcdGxldCBpY29uID0gPEltYWdlXG5cdFx0XHRzcmM9e2Ftb3VudFByaW1hcnk/LmltYWdlPy5hc3NldD8udXJsfVxuXHRcdFx0YWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcblx0XHRcdHdpZHRoPXsxNX1cblx0XHRcdGhlaWdodD17MTV9XG5cdFx0XHQvPlxuXHRcblx0XHRcdHJldHVybiBpY29uO1xuXHRcblx0XHR9XG5cdFx0aWYgKGFtb3VudFByaW1hcnkgIT09IHVuZGVmaW5lZCB8fCBhbW91bnRTZWNvbmRhcnkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bGV0IHZhbFByaW1hcnkgPSBhbW91bnRQcmltYXJ5Py5wcmljZTtcblx0XHRcdGxldCB2YWxTZWNvbmRhcnkgPSBhbW91bnRTZWNvbmRhcnk/LmFjdHVhbFZhbHVlO1xuXHRcdFx0Y29uc3QgbnVtT2ZVbml0cyA9IE51bWJlcigodmFsU2Vjb25kYXJ5IC8gdmFsUHJpbWFyeSkudG9GaXhlZCgyKSlcblx0XHRcdGxldCBmaW5hbFVuaXRzID0gbnVtT2ZVbml0cztcblxuXG5cdFx0XHQvLyBiZWxvdyBsaW1pdHMgb3V0cHV0IGFuZCB1cGRhdGVzIHRoZSBrZXkgdG8gcmVmbGVjdCB3aGF0IHRoZSBpY29uIHJlcHJlc2VudHMgZS5nLiAxID0gMTAwIHVuaXRzIC4uLlxuXG5cdFx0XHRjb25zdCBsb2dUZW4gPSBsb2cxMChudW1PZlVuaXRzKTtcblx0XHRcdGNvbnN0IGxvZ0Zsb29yID0gTWF0aC5mbG9vcihsb2dUZW4pIC0gMTsgLy8gLTEgc28gdGhlIG51bWJlciBvdXRwdXQgaXMgbm90IHRvbyBsb3dcblx0XHRcdGNvbnNvbGUubG9nKCdudW1PZlVuaXRzOicsIG51bU9mVW5pdHMpO1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvZ0Zsb29yOicsIGxvZ0Zsb29yKTtcblx0XHRcdFxuXG5cdFx0XHRpZiAobG9nVGVuID4gMykge1xuXHRcdFx0XHRjb25zdCBuZXdQZXJVbml0ID0gTWF0aC5wb3coMTAsIGxvZ0Zsb29yKVxuXHRcdFx0XHQvLyBjb25zdCBURVNUID0gTWF0aC5wb3coMTAsIDMpXG5cblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVkTmV3UGVyVW5pdCA9IG5ld1BlclVuaXQudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKTtcblx0XHRcdFx0dXBkYXRlVW5pdHNQZXJJY29uKGZvcm1hdHRlZE5ld1BlclVuaXQpXG5cblx0XHRcdFx0ZmluYWxVbml0cyA9ICBOdW1iZXIoKGZpbmFsVW5pdHMgLyBuZXdQZXJVbml0KS50b0ZpeGVkKDIpKVxuXHRcdFx0XHQvLyBmaW5hbFVuaXRzID0gIE51bWJlcigoZmluYWxVbml0cyAvIG5ld1BlclVuaXQpLnRvRml4ZWQoMikpXG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVwZGF0ZVVuaXRzUGVySWNvbigxKVxuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlVW5pdEljb24ob3V0cHV0VW5pdEljb24oKSlcblxuXHRcdFx0Y29uc29sZS5sb2coJ25ld1BlclVuaXQ6JywgbmV3UGVyVW5pdCk7XG5cdFx0XHRjb25zb2xlLmxvZygnZmluYWxVbml0czonLCBmaW5hbFVuaXRzKTtcblxuXG5cblx0XHRcdGNvbnN0IGZvcm1hdHRlZE51bU9mVW5pdHMgPSBudW1PZlVuaXRzLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIik7XG5cblx0XHRcdHVwZGF0ZUNhbGN1bGF0ZWROdW0oZmluYWxVbml0cylcblx0XHRcdHVwZGF0ZU5pY2VOdW1iZXIoZm9ybWF0dGVkTnVtT2ZVbml0cylcblxuXG5cdFx0fSBcblxuXHR9LCBbYW1vdW50UHJpbWFyeSxhbW91bnRTZWNvbmRhcnldKTtcblxuXG5cblx0Y29uc3QgW29iamVjdEEsIHVwZGF0ZU9iamVjdEFdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtvYmplY3RCLCB1cGRhdGVPYmplY3RCXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cblx0Y29uc3QgdmlzdWFsaXNlQ29udGV4dCA9IHtcblx0XHR1cGRhdGVPYmplY3RBLFxuXHRcdHVwZGF0ZU9iamVjdEIsXG5cdH1cblxuXG5cdGNvbnN0IHZpc3VhbGlzZURhdGEgPSB7XG5cdFx0YW1vdW50czoge1xuXHRcdFx0YTogb2JqZWN0QSxcblx0XHRcdGI6IG9iamVjdEJcblx0XHR9LFxuXHRcdHJlc3VsdHM6IHtcblx0XHRcdHVuaXRJY29uOiB1bml0SWNvbixcblx0XHRcdHVuaXRzUGVySWNvbjoge1xuXHRcdFx0XHRyYXc6IDEwMDAsXG5cdFx0XHRcdGRpc3BsYXk6ICcxLDAwMCcsXG5cdFx0XHR9LFxuXHRcdFx0bnVtT2ZVbml0czoge1xuXHRcdFx0XHRyYXc6IDEwMDAwLFxuXHRcdFx0XHRkaXNwbGF5OiAnMTAsMDAwJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIGFyciBvZiBvYmpcblx0Y29uc3Qga2V5QXJyID0gW1xuXHRcdHtcblx0XHRcdHZpc3VhbDogdW5pdEljb24sXG5cdFx0XHR1bml0czogdmlzdWFsaXNlRGF0YT8ucmVzdWx0cz8udW5pdHNQZXJJY29uLFxuXHRcdFx0aXNQbHVyYWw6IHVuaXRzUGVySWNvbi5kaXNwbGF5ID4gMSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdG5hbWU6IHtcblx0XHRcdFx0c2luZ3VsYXI6ICdob3VzZScsXG5cdFx0XHRcdHBsdXJhbDogJ2hvdXNlcycsXG5cdFx0XHR9XG5cdFx0fVxuXHRdXG5cdFxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblxuXHRcdFx0ey8qIDxzcGFuPm9iamVjdEE6IHtvYmplY3RBfTwvc3Bhbj5cblx0XHRcdDxzcGFuPm9iamVjdEI6IHtvYmplY3RCfTwvc3Bhbj4gKi99XG5cdFx0XHR7LyogSEVBREVSIC0gSGVhZGVyIHNlbGVjdGlvbiBlLmcuIGNvbXBhcmUgeCB3aXRoL3RvIHkgKi99XG5cdFx0XHQ8SGVhZGVyU2VsZWN0IGJsb2Nrcz17SGVhZGVyfSBjb250ZXh0PXt2aXN1YWxpc2VDb250ZXh0fSAvPlxuXG5cdFx0XHRcblx0XHRcdHsvKiBSRVNVTFRTIC0gQ2FsY3VsYXRlZCBudW1iZXIgb2YgdW5pdHMgZS5nLiAxMDAgaG91c2VzICovfVxuXG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJteS0xMCBjb250YWluZXIgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxoMj57bmljZU51bWJlcn0gPC9oMj5cblx0XHRcdFx0PGgzPnsgYW1vdW50UHJpbWFyeT8ubmFtZVBsdXJhbH0qPC9oMz5cblx0XHRcdDwvZGl2PiAqL31cblx0XHRcdDxSZXN1bHRzIG51bWJlcj17dmlzdWFsaXNlRGF0YT8ucmVzdWx0cz8ubnVtT2ZVbml0c30gb2JqZWN0PXt2aXN1YWxpc2VEYXRhPy5hbW91bnRzPy5hfSAvPlxuXHRcdFx0XG5cdFx0XHR7LyogS0VZIC0gbnVtYmVyIG9mIHVuaXRzIHBlciBpY29uIGUuZy4gMSBpY29uID0gMTAwIHVuaXRzICovfVxuXHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibS0xXCI+XG5cdFx0XHRcdFx0XHR7dW5pdEljb259XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3Bhbj4gPSB7dW5pdHNQZXJJY29ufSB7dW5pdHNQZXJJY29uID4gMSA/IGFtb3VudFByaW1hcnk/Lm5hbWVQbHVyYWwgOiBhbW91bnRQcmltYXJ5Py5uYW1lU2luZ2xlfSA8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0PEtleSBrZXlzPXtrZXlBcnJ9IC8+XG5cblxuXHRcdFx0ey8qIElDT05TIC0gVmlzdWFsIHJlcHJlc2VudGF0aW9uIGUuZy4gSUNPTiAvIEJMT0NLICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdHsvKiB7b3V0cHV0Qm94ZXMoKX0gKi99XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxJY29ucyBkYXRhPXt2aXN1YWxpc2VEYXRhfSAvPlxuXG5cdFx0PC9kaXY+IFxuXHQpXG5cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGlzZXI7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkhlYWRlclNlbGVjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJJbWFnZSIsIlJlc3VsdHMiLCJJY29ucyIsIktleSIsIlZpc3VhbGlzZXIiLCJwcm9wcyIsImxvZzEwIiwibiIsIk1hdGgiLCJyb3VuZCIsImxvZyIsInZpc3VhbGlzZURhdGEiLCJIZWFkZXIiLCJ0ZXN0IiwidXBkYXRlVGVzdCIsImFtb3VudFByaW1hcnkiLCJ1cGRhdGVBbW91bnRQcmltYXJ5IiwiYW1vdW50U2Vjb25kYXJ5IiwidXBkYXRlQW1vdW50U2Vjb25kYXJ5IiwiY2FsY3VsYXRlZE51bSIsInVwZGF0ZUNhbGN1bGF0ZWROdW0iLCJuaWNlTnVtYmVyIiwidXBkYXRlTmljZU51bWJlciIsInVuaXRzUGVySWNvbiIsInVwZGF0ZVVuaXRzUGVySWNvbiIsInVuaXRJY29uIiwidXBkYXRlVW5pdEljb24iLCJjb250ZXh0T2JqIiwib3V0cHV0Qm94ZXMiLCJudW0iLCJib3hCYXNlIiwiYm94ZXMiLCJ2YWxQcmltYXJ5IiwicHJpY2UiLCJ2YWxQcmltYXJ5SWNvbiIsImltYWdlIiwiYXNzZXQiLCJ1cmwiLCJ2YWxTZWNvbmRhcnkiLCJhY3R1YWxWYWx1ZSIsImNvbnNvbGUiLCJ1bmRlZmluZWQiLCJpIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib3V0cHV0VW5pdEljb24iLCJpY29uIiwibnVtT2ZVbml0cyIsIk51bWJlciIsInRvRml4ZWQiLCJmaW5hbFVuaXRzIiwibG9nVGVuIiwibG9nRmxvb3IiLCJmbG9vciIsIm5ld1BlclVuaXQiLCJwb3ciLCJmb3JtYXR0ZWROZXdQZXJVbml0IiwidG9Mb2NhbGVTdHJpbmciLCJmb3JtYXR0ZWROdW1PZlVuaXRzIiwib2JqZWN0QSIsInVwZGF0ZU9iamVjdEEiLCJvYmplY3RCIiwidXBkYXRlT2JqZWN0QiIsInZpc3VhbGlzZUNvbnRleHQiLCJhbW91bnRzIiwiYSIsImIiLCJyZXN1bHRzIiwicmF3IiwiZGlzcGxheSIsImtleUFyciIsInZpc3VhbCIsInVuaXRzIiwiaXNQbHVyYWwiLCJuYW1lIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJibG9ja3MiLCJjb250ZXh0IiwibnVtYmVyIiwib2JqZWN0Iiwia2V5cyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});