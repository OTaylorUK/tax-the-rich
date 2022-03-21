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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ \"./comps/Button/index.js\");\n/* harmony import */ var _PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PortableText/HeaderSelect */ \"./comps/PortableText/HeaderSelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Visualise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Visualise */ \"./comps/Visualise/index.js\");\n\n\n\n\n// import client from '../../../client'\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Visualiser = function(props) {\n    var _this1 = _this;\n    var log10 = function log10(n) {\n        return Math.round(100 * Math.log(n) / Math.log(10)) / 100;\n    };\n    var ref17, ref1, ref2;\n    _s();\n    var Header = props.Header;\n    // const textBlock = props.Header[0].children;\n    // const test = <div>hi</div>\n    // textBlock.map((content, index) => {\n    // \tlet result = content.text.includes(\"[pricedItems]\");\n    // \tlet rep = content.text.replace('[pricedItems]', test)\n    // })\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountPrimary = ref3[0], updateAmountPrimary = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), amountSecondary = ref4[0], updateAmountSecondary = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), calculatedNum = ref5[0], updateCalculatedNum = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), niceNumber = ref6[0], updateNiceNumber = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), unitsPerIcon = ref7[0], updateUnitsPerIcon = ref7[1]; // by default 1 icon = 1 unit\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), unitIcon = ref8[0], updateUnitIcon = ref8[1]; // by default 1 icon = 1 unit\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), dataReady = ref9[0], updateDataReady = ref9[1]; // by default 1 icon = 1 unit\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), objectA = ref10[0], updateObjectA = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), objectB = ref11[0], updateObjectB = ref11[1];\n    var ref12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        raw: null,\n        display: null\n    }), numOfUnits1 = ref12[0], updateNOU = ref12[1];\n    var ref13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        raw: null,\n        display: null\n    }), uPerIcon = ref13[0], updateUPI = ref13[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var _this2 = _this1;\n        /**\n\t\t * generate the icon (from objectA)\n\t\t * @returns nextjs Image element\n\t\t */ var setUnitIcon = function() {\n            var ref, ref14, ref15, ref16;\n            if ((objectA === null || objectA === void 0 ? void 0 : (ref = objectA.image) === null || ref === void 0 ? void 0 : (ref14 = ref.asset) === null || ref14 === void 0 ? void 0 : ref14.url) === undefined) return null;\n            var icon = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: objectA === null || objectA === void 0 ? void 0 : (ref15 = objectA.image) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.asset) === null || ref16 === void 0 ? void 0 : ref16.url,\n                alt: \"Picture of the author\",\n                width: 15,\n                height: 15\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 67,\n                columnNumber: 5\n            }, _this2);\n            return icon;\n        };\n        /**\n\t\t * calculate the total number of objectA(units e.g. cars) that objectB (money amount) can buy\n\t\t * @returns number to 2 decimal points\n\t\t */ var calcTotalUnits = function() {\n            var valPrimary = objectA === null || objectA === void 0 ? void 0 : objectA.price;\n            var valSecondary = objectB === null || objectB === void 0 ? void 0 : objectB.actualValue;\n            var numOfUnits = Number((valSecondary / valPrimary).toFixed(2));\n            console.log('HERE LOOK', objectA);\n            // update the display figure to reflect the true value \n            var formattedNumOfUnits = numOfUnits.toLocaleString(\"en-US\");\n            // updateNiceNumber(formattedNumOfUnits)\n            updateNOU(function(prevState) {\n                return _objectSpread({}, prevState, {\n                    display: formattedNumOfUnits\n                });\n            });\n            return numOfUnits;\n        };\n        /**\n\t\t * updates values depending on how many total unit are to be displayed - helps to prevent slow browser warning\n\t\t * @param {*} totalUnits \n\t\t */ var calcAdjusted = function(totalUnits) {\n            var perUnit;\n            // get the log value of the totalUnits e.g. if 100 = log 2, if 1000 = log 3\n            var logTen = log10(totalUnits);\n            // lower the logTen val to round down && -1 so figure is not too low\n            var logFloor = Math.floor(logTen) - 1;\n            // calc the per unit using the floored log 10 - limits the number to prevent slow browser warning \n            if (logTen > 3) {\n                perUnit = Math.pow(10, logFloor);\n            } else {\n                perUnit = 1;\n            }\n            // units per icon\n            var displayPerUnit = perUnit.toLocaleString(\"en-US\");\n            // updateUnitsPerIcon(displayPerUnit)\n            updateUPI({\n                raw: perUnit,\n                display: displayPerUnit\n            });\n            // number of icons output\n            var updatedTotalUnits = Number((totalUnits / perUnit).toFixed(2));\n            // updateCalculatedNum(updatedTotalUnits)\n            updateNOU(function(prevState) {\n                return _objectSpread({}, prevState, {\n                    raw: updatedTotalUnits\n                });\n            });\n        };\n        if (objectA !== null && objectB !== null) {\n            // updates the unit icon everytime objectA changes\n            updateUnitIcon(setUnitIcon());\n            var totalUnits1 = calcTotalUnits();\n            calcAdjusted(totalUnits1);\n            updateDataReady(true);\n        }\n    }, [\n        objectA,\n        objectB\n    ]);\n    var visualiseContext = {\n        updateObjectA: updateObjectA,\n        updateObjectB: updateObjectB\n    };\n    var visualiseData = {\n        ready: dataReady,\n        amounts: {\n            a: objectA,\n            b: objectB\n        },\n        results: {\n            unitIcon: unitIcon,\n            unitsPerIcon: uPerIcon,\n            numOfUnits: numOfUnits1\n        }\n    };\n    // arr of obj\n    var keyArr = [\n        {\n            visual: unitIcon,\n            units: visualiseData === null || visualiseData === void 0 ? void 0 : (ref17 = visualiseData.results) === null || ref17 === void 0 ? void 0 : ref17.unitsPerIcon,\n            isPlural: unitsPerIcon.display > 1 ? true : false,\n            name: {\n                singular: objectA === null || objectA === void 0 ? void 0 : objectA.nameSingle,\n                plural: objectA === null || objectA === void 0 ? void 0 : objectA.namePlural\n            }\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PortableText_HeaderSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                blocks: Header,\n                context: visualiseContext\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 194,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Results, {\n                numOfUnits: visualiseData === null || visualiseData === void 0 ? void 0 : (ref1 = visualiseData.results) === null || ref1 === void 0 ? void 0 : ref1.numOfUnits,\n                object: visualiseData === null || visualiseData === void 0 ? void 0 : (ref2 = visualiseData.amounts) === null || ref2 === void 0 ? void 0 : ref2.a,\n                status: dataReady\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 199,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Key, {\n                keys: keyArr,\n                status: dataReady\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 202,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-row flex-wrap justify-center items-center\"\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 206,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Visualise__WEBPACK_IMPORTED_MODULE_5__.Icons, {\n                data: visualiseData,\n                status: dataReady\n            }, void 0, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n                lineNumber: 209,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PageSections/sections/Visualiser.js\",\n        lineNumber: 189,\n        columnNumber: 3\n    }, _this));\n};\n_s(Visualiser, \"ktNB0jIhdada/hEWbzYwsYPCsK0=\");\n_c = Visualiser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visualiser);\nvar _c;\n$RefreshReg$(_c, \"Visualiser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN5QjtBQUNmO0FBQzNDLEVBQXVDO0FBRWQ7QUFDSztBQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRCxHQUFLLENBQUNTLFVBQVUsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztRQTJCckJDLEtBQUssR0FBZCxRQUFRLENBQUNBLEtBQUssQ0FBQ0MsQ0FBQyxFQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNELElBQUksQ0FBQ0UsR0FBRyxDQUFDSCxDQUFDLElBQUVDLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEVBQUUsS0FBRyxHQUFHO0lBQ3BELENBQUM7UUF5SVFDLEtBQXNCLEVBcUJSQSxJQUFzQixFQUFzQkEsSUFBc0I7O0lBekx6RixHQUFLLENBQUdDLE1BQU0sR0FBS1AsS0FBSyxDQUFoQk8sTUFBTTtJQUdkLEVBQThDO0lBRTlDLEVBQTZCO0lBQzdCLEVBQXNDO0lBQ3RDLEVBQXdEO0lBQ3hELEVBQXlEO0lBRXpELEVBQUs7SUFHTCxHQUFLLENBQXdDZCxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuRGUsYUFBYSxHQUF5QmYsSUFBYyxLQUFyQ2dCLG1CQUFtQixHQUFJaEIsSUFBYztJQUMzRCxHQUFLLENBQTRDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF2RGlCLGVBQWUsR0FBMkJqQixJQUFjLEtBQXZDa0IscUJBQXFCLEdBQUlsQixJQUFjO0lBQy9ELEdBQUssQ0FBd0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQW5EbUIsYUFBYSxHQUF5Qm5CLElBQWMsS0FBckNvQixtQkFBbUIsR0FBSXBCLElBQWM7SUFDM0QsR0FBSyxDQUFrQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FB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QSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBc0IsQ0FBRXNCLFVBQVU7Z0JBQUVxRCxNQUFNLEVBQUUzRSxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixJQUF0QkEsSUFBc0IsR0FBdEJBLGFBQWEsQ0FBRTBELE9BQU8sY0FBdEIxRCxJQUFzQixLQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBc0IsQ0FBRTJELENBQUM7Z0JBQUdpQixNQUFNLEVBQUU5RCxTQUFTOzs7Ozs7d0ZBRzdHdEIsMkNBQUc7Z0JBQUNxRixJQUFJLEVBQUVmLE1BQU07Z0JBQUdjLE1BQU0sRUFBRTlELFNBQVM7Ozs7Ozt3RkFJcEN5RCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBK0Q7Ozs7Ozt3RkFHN0VqRiw2Q0FBSztnQkFBQ3VGLElBQUksRUFBRTlFLGFBQWE7Z0JBQUU0RSxNQUFNLEVBQUU5RCxTQUFTOzs7Ozs7Ozs7Ozs7QUFLaEQsQ0FBQztHQTFNS3JCLFVBQVU7S0FBVkEsVUFBVTtBQTRNaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9QYWdlU2VjdGlvbnMvc2VjdGlvbnMvVmlzdWFsaXNlci5qcz9iNTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL0J1dHRvblwiO1xuaW1wb3J0IEhlYWRlclNlbGVjdCBmcm9tIFwiLi4vLi4vUG9ydGFibGVUZXh0L0hlYWRlclNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7UmVzdWx0cywgSWNvbnMsIEtleX0gZnJvbSBcIi4uLy4uL1Zpc3VhbGlzZVwiO1xuXG5cblxuY29uc3QgVmlzdWFsaXNlciA9IChwcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgSGVhZGVyIH0gPSBwcm9wcztcblxuXG5cdC8vIGNvbnN0IHRleHRCbG9jayA9IHByb3BzLkhlYWRlclswXS5jaGlsZHJlbjtcblxuXHQvLyBjb25zdCB0ZXN0ID0gPGRpdj5oaTwvZGl2PlxuXHQvLyB0ZXh0QmxvY2subWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xuXHQvLyBcdGxldCByZXN1bHQgPSBjb250ZW50LnRleHQuaW5jbHVkZXMoXCJbcHJpY2VkSXRlbXNdXCIpO1xuXHQvLyBcdGxldCByZXAgPSBjb250ZW50LnRleHQucmVwbGFjZSgnW3ByaWNlZEl0ZW1zXScsIHRlc3QpXG5cdFx0XG5cdC8vIH0pXG5cblxuXHRjb25zdCBbYW1vdW50UHJpbWFyeSwgdXBkYXRlQW1vdW50UHJpbWFyeV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2Ftb3VudFNlY29uZGFyeSwgdXBkYXRlQW1vdW50U2Vjb25kYXJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbY2FsY3VsYXRlZE51bSwgdXBkYXRlQ2FsY3VsYXRlZE51bV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW25pY2VOdW1iZXIsIHVwZGF0ZU5pY2VOdW1iZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFt1bml0c1Blckljb24sIHVwZGF0ZVVuaXRzUGVySWNvbl0gPSB1c2VTdGF0ZSgxKTsgLy8gYnkgZGVmYXVsdCAxIGljb24gPSAxIHVuaXRcblx0Y29uc3QgW3VuaXRJY29uLCB1cGRhdGVVbml0SWNvbl0gPSB1c2VTdGF0ZShudWxsKTsgLy8gYnkgZGVmYXVsdCAxIGljb24gPSAxIHVuaXRcblx0Y29uc3QgW2RhdGFSZWFkeSwgdXBkYXRlRGF0YVJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gYnkgZGVmYXVsdCAxIGljb24gPSAxIHVuaXRcblx0XG5cdFxuXG5cblxuXHRmdW5jdGlvbiBsb2cxMChuKXtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgxMDAqTWF0aC5sb2cobikvTWF0aC5sb2coMTApKS8xMDA7XG5cdH1cblx0XG5cblxuXG5cdGNvbnN0IFtvYmplY3RBLCB1cGRhdGVPYmplY3RBXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbb2JqZWN0QiwgdXBkYXRlT2JqZWN0Ql0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW251bU9mVW5pdHMsIHVwZGF0ZU5PVV0gPSB1c2VTdGF0ZSh7XG5cdFx0XHRyYXc6IG51bGwsXG5cdFx0XHRkaXNwbGF5OiBudWxsLFxuXHR9KTtcblx0Y29uc3QgW3VQZXJJY29uLCB1cGRhdGVVUEldID0gdXNlU3RhdGUoe1xuXHRcdHJhdzogbnVsbCxcblx0XHRkaXNwbGF5OiBudWxsLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXG5cdFx0LyoqXG5cdFx0ICogZ2VuZXJhdGUgdGhlIGljb24gKGZyb20gb2JqZWN0QSlcblx0XHQgKiBAcmV0dXJucyBuZXh0anMgSW1hZ2UgZWxlbWVudFxuXHRcdCAqL1xuXHRcdGNvbnN0IHNldFVuaXRJY29uID0gKCkgPT4ge1xuXG5cdFx0XHRpZiAob2JqZWN0QT8uaW1hZ2U/LmFzc2V0Py51cmwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cdFx0XHRsZXQgaWNvbiA9XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRzcmM9e29iamVjdEE/LmltYWdlPy5hc3NldD8udXJsfVxuXHRcdFx0XHRhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuXHRcdFx0XHR3aWR0aD17MTV9XG5cdFx0XHRcdGhlaWdodD17MTV9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdFxuXHRcdFx0cmV0dXJuIGljb247XG5cdFxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGNhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIG9iamVjdEEodW5pdHMgZS5nLiBjYXJzKSB0aGF0IG9iamVjdEIgKG1vbmV5IGFtb3VudCkgY2FuIGJ1eVxuXHRcdCAqIEByZXR1cm5zIG51bWJlciB0byAyIGRlY2ltYWwgcG9pbnRzXG5cdFx0ICovXG5cdFx0Y29uc3QgY2FsY1RvdGFsVW5pdHMgPSAoKSA9PiB7XG5cdFx0XHRsZXQgdmFsUHJpbWFyeSA9IG9iamVjdEE/LnByaWNlO1xuXHRcdFx0bGV0IHZhbFNlY29uZGFyeSA9IG9iamVjdEI/LmFjdHVhbFZhbHVlO1xuXHRcdFx0Y29uc3QgbnVtT2ZVbml0cyA9IE51bWJlcigodmFsU2Vjb25kYXJ5IC8gdmFsUHJpbWFyeSkudG9GaXhlZCgyKSlcblxuXG5cdFx0XHRjb25zb2xlLmxvZygnSEVSRSBMT09LJywgb2JqZWN0QSk7XG5cdFx0XHQvLyB1cGRhdGUgdGhlIGRpc3BsYXkgZmlndXJlIHRvIHJlZmxlY3QgdGhlIHRydWUgdmFsdWUgXG5cdFx0XHRjb25zdCBmb3JtYXR0ZWROdW1PZlVuaXRzID0gbnVtT2ZVbml0cy50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpO1xuXHRcdFx0Ly8gdXBkYXRlTmljZU51bWJlcihmb3JtYXR0ZWROdW1PZlVuaXRzKVxuXG5cdFx0XHR1cGRhdGVOT1UocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZvcm1hdHRlZE51bU9mVW5pdHNcblx0XHRcdH0pKTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIG51bU9mVW5pdHM7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogdXBkYXRlcyB2YWx1ZXMgZGVwZW5kaW5nIG9uIGhvdyBtYW55IHRvdGFsIHVuaXQgYXJlIHRvIGJlIGRpc3BsYXllZCAtIGhlbHBzIHRvIHByZXZlbnQgc2xvdyBicm93c2VyIHdhcm5pbmdcblx0XHQgKiBAcGFyYW0geyp9IHRvdGFsVW5pdHMgXG5cdFx0ICovXG5cdFx0Y29uc3QgY2FsY0FkanVzdGVkID0gKHRvdGFsVW5pdHMpID0+IHtcblx0XHRcdGxldCBwZXJVbml0O1xuXG5cdFx0XHQvLyBnZXQgdGhlIGxvZyB2YWx1ZSBvZiB0aGUgdG90YWxVbml0cyBlLmcuIGlmIDEwMCA9IGxvZyAyLCBpZiAxMDAwID0gbG9nIDNcblx0XHRcdGNvbnN0IGxvZ1RlbiA9IGxvZzEwKHRvdGFsVW5pdHMpO1xuXG5cdFx0XHQvLyBsb3dlciB0aGUgbG9nVGVuIHZhbCB0byByb3VuZCBkb3duICYmIC0xIHNvIGZpZ3VyZSBpcyBub3QgdG9vIGxvd1xuXHRcdFx0Y29uc3QgbG9nRmxvb3IgPSBNYXRoLmZsb29yKGxvZ1RlbikgLSAxO1xuXG5cdFx0XHQvLyBjYWxjIHRoZSBwZXIgdW5pdCB1c2luZyB0aGUgZmxvb3JlZCBsb2cgMTAgLSBsaW1pdHMgdGhlIG51bWJlciB0byBwcmV2ZW50IHNsb3cgYnJvd3NlciB3YXJuaW5nIFxuXHRcdFx0aWYgKGxvZ1RlbiA+IDMpIHtcblx0XHRcdFx0cGVyVW5pdCA9IE1hdGgucG93KDEwLCBsb2dGbG9vcilcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwZXJVbml0ID0gMTtcblx0XHRcdH1cblxuXHRcblx0XHRcdC8vIHVuaXRzIHBlciBpY29uXG5cdFx0XHRjb25zdCBkaXNwbGF5UGVyVW5pdCA9IHBlclVuaXQudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKTtcblx0XHRcdC8vIHVwZGF0ZVVuaXRzUGVySWNvbihkaXNwbGF5UGVyVW5pdClcblx0XHRcdFxuXHRcdFx0dXBkYXRlVVBJKHtcblx0XHRcdFx0cmF3OiBwZXJVbml0LFxuXHRcdFx0XHRkaXNwbGF5OiBkaXNwbGF5UGVyVW5pdFxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIG51bWJlciBvZiBpY29ucyBvdXRwdXRcblx0XHRcdGNvbnN0IHVwZGF0ZWRUb3RhbFVuaXRzID0gIE51bWJlcigodG90YWxVbml0cyAvIHBlclVuaXQpLnRvRml4ZWQoMikpXG5cdFx0XHQvLyB1cGRhdGVDYWxjdWxhdGVkTnVtKHVwZGF0ZWRUb3RhbFVuaXRzKVxuXHRcdFx0dXBkYXRlTk9VKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICByYXc6IHVwZGF0ZWRUb3RhbFVuaXRzXG5cdFx0XHR9KSk7XG5cblx0XHR9XG5cblx0XHRpZihvYmplY3RBICE9PSBudWxsICYmIG9iamVjdEIgIT09IG51bGwpe1xuXHRcdFx0Ly8gdXBkYXRlcyB0aGUgdW5pdCBpY29uIGV2ZXJ5dGltZSBvYmplY3RBIGNoYW5nZXNcblx0XHRcdHVwZGF0ZVVuaXRJY29uKHNldFVuaXRJY29uKCkpXG5cblx0XHRcdGNvbnN0IHRvdGFsVW5pdHMgPSBjYWxjVG90YWxVbml0cygpXG5cblx0XHRcdGNhbGNBZGp1c3RlZCh0b3RhbFVuaXRzKVxuXHRcdFx0dXBkYXRlRGF0YVJlYWR5KHRydWUpO1xuXG5cdFx0fSBcblxuXHR9LCBbb2JqZWN0QSxvYmplY3RCXSk7XG5cblx0XG5cdGNvbnN0IHZpc3VhbGlzZUNvbnRleHQgPSB7XG5cdFx0dXBkYXRlT2JqZWN0QSxcblx0XHR1cGRhdGVPYmplY3RCLFxuXHR9XG5cblxuXHRjb25zdCB2aXN1YWxpc2VEYXRhID0ge1xuXHRcdHJlYWR5OiBkYXRhUmVhZHksXG5cdFx0YW1vdW50czoge1xuXHRcdFx0YTogb2JqZWN0QSxcblx0XHRcdGI6IG9iamVjdEJcblx0XHR9LFxuXHRcdHJlc3VsdHM6IHtcblx0XHRcdHVuaXRJY29uOiB1bml0SWNvbixcblx0XHRcdHVuaXRzUGVySWNvbjogdVBlckljb24sXG5cdFx0XHRudW1PZlVuaXRzOiBudW1PZlVuaXRzLFxuXHRcdH1cblx0fVxuXG5cdC8vIGFyciBvZiBvYmpcblx0Y29uc3Qga2V5QXJyID0gW1xuXHRcdHtcblx0XHRcdHZpc3VhbDogdW5pdEljb24sXG5cdFx0XHR1bml0czogdmlzdWFsaXNlRGF0YT8ucmVzdWx0cz8udW5pdHNQZXJJY29uLFxuXHRcdFx0aXNQbHVyYWw6IHVuaXRzUGVySWNvbi5kaXNwbGF5ID4gMSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdG5hbWU6IHtcblx0XHRcdFx0c2luZ3VsYXI6IG9iamVjdEE/Lm5hbWVTaW5nbGUsXG5cdFx0XHRcdHBsdXJhbDogIG9iamVjdEE/Lm5hbWVQbHVyYWwsXG5cdFx0XHR9XG5cdFx0fVxuXHRdXG5cdFxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblxuXHRcdFx0ey8qIDxzcGFuPm9iamVjdEE6IHtvYmplY3RBfTwvc3Bhbj5cblx0XHRcdDxzcGFuPm9iamVjdEI6IHtvYmplY3RCfTwvc3Bhbj4gKi99XG5cdFx0XHR7LyogSEVBREVSIC0gSGVhZGVyIHNlbGVjdGlvbiBlLmcuIGNvbXBhcmUgeCB3aXRoL3RvIHkgKi99XG5cdFx0XHQ8SGVhZGVyU2VsZWN0IGJsb2Nrcz17SGVhZGVyfSBjb250ZXh0PXt2aXN1YWxpc2VDb250ZXh0fSAvPlxuXG5cdFx0XHRcblx0XHRcdHsvKiBSRVNVTFRTIC0gQ2FsY3VsYXRlZCBudW1iZXIgb2YgdW5pdHMgZS5nLiAxMDAgaG91c2VzICovfVxuXG5cdFx0XHQ8UmVzdWx0cyBudW1PZlVuaXRzPXt2aXN1YWxpc2VEYXRhPy5yZXN1bHRzPy5udW1PZlVuaXRzfSBvYmplY3Q9e3Zpc3VhbGlzZURhdGE/LmFtb3VudHM/LmF9ICBzdGF0dXM9e2RhdGFSZWFkeX0gIC8+XG5cdFx0XHRcblx0XHRcdHsvKiBLRVkgLSBudW1iZXIgb2YgdW5pdHMgcGVyIGljb24gZS5nLiAxIGljb24gPSAxMDAgdW5pdHMgKi99XG5cdFx0XHQ8S2V5IGtleXM9e2tleUFycn0gIHN0YXR1cz17ZGF0YVJlYWR5fSAgLz5cblxuXG5cdFx0XHR7LyogSUNPTlMgLSBWaXN1YWwgcmVwcmVzZW50YXRpb24gZS5nLiBJQ09OIC8gQkxPQ0sgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0ey8qIHtvdXRwdXRCb3hlcygpfSAqL31cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEljb25zIGRhdGE9e3Zpc3VhbGlzZURhdGF9IHN0YXR1cz17ZGF0YVJlYWR5fSAvPlxuXG5cdFx0PC9kaXY+IFxuXHQpXG5cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGlzZXI7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkhlYWRlclNlbGVjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJJbWFnZSIsIlJlc3VsdHMiLCJJY29ucyIsIktleSIsIlZpc3VhbGlzZXIiLCJwcm9wcyIsImxvZzEwIiwibiIsIk1hdGgiLCJyb3VuZCIsImxvZyIsInZpc3VhbGlzZURhdGEiLCJIZWFkZXIiLCJhbW91bnRQcmltYXJ5IiwidXBkYXRlQW1vdW50UHJpbWFyeSIsImFtb3VudFNlY29uZGFyeSIsInVwZGF0ZUFtb3VudFNlY29uZGFyeSIsImNhbGN1bGF0ZWROdW0iLCJ1cGRhdGVDYWxjdWxhdGVkTnVtIiwibmljZU51bWJlciIsInVwZGF0ZU5pY2VOdW1iZXIiLCJ1bml0c1Blckljb24iLCJ1cGRhdGVVbml0c1Blckljb24iLCJ1bml0SWNvbiIsInVwZGF0ZVVuaXRJY29uIiwiZGF0YVJlYWR5IiwidXBkYXRlRGF0YVJlYWR5Iiwib2JqZWN0QSIsInVwZGF0ZU9iamVjdEEiLCJvYmplY3RCIiwidXBkYXRlT2JqZWN0QiIsInJhdyIsImRpc3BsYXkiLCJudW1PZlVuaXRzIiwidXBkYXRlTk9VIiwidVBlckljb24iLCJ1cGRhdGVVUEkiLCJzZXRVbml0SWNvbiIsImltYWdlIiwiYXNzZXQiLCJ1cmwiLCJ1bmRlZmluZWQiLCJpY29uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYWxjVG90YWxVbml0cyIsInZhbFByaW1hcnkiLCJwcmljZSIsInZhbFNlY29uZGFyeSIsImFjdHVhbFZhbHVlIiwiTnVtYmVyIiwidG9GaXhlZCIsImNvbnNvbGUiLCJmb3JtYXR0ZWROdW1PZlVuaXRzIiwidG9Mb2NhbGVTdHJpbmciLCJwcmV2U3RhdGUiLCJjYWxjQWRqdXN0ZWQiLCJ0b3RhbFVuaXRzIiwicGVyVW5pdCIsImxvZ1RlbiIsImxvZ0Zsb29yIiwiZmxvb3IiLCJwb3ciLCJkaXNwbGF5UGVyVW5pdCIsInVwZGF0ZWRUb3RhbFVuaXRzIiwidmlzdWFsaXNlQ29udGV4dCIsInJlYWR5IiwiYW1vdW50cyIsImEiLCJiIiwicmVzdWx0cyIsImtleUFyciIsInZpc3VhbCIsInVuaXRzIiwiaXNQbHVyYWwiLCJuYW1lIiwic2luZ3VsYXIiLCJuYW1lU2luZ2xlIiwicGx1cmFsIiwibmFtZVBsdXJhbCIsImRpdiIsImNsYXNzTmFtZSIsImJsb2NrcyIsImNvbnRleHQiLCJvYmplY3QiLCJzdGF0dXMiLCJrZXlzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PageSections/sections/Visualiser.js\n");

/***/ })

});