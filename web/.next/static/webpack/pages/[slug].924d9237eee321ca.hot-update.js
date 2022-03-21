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

/***/ "./comps/PortableText/DropDown.js":
/*!****************************************!*\
  !*** ./comps/PortableText/DropDown.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction DropDown(prop) {\n    _s();\n    var value = prop.value;\n    var listItems = value.listItems, context = value.context;\n    // {value}\n    var classList = 'mx-1.5  font-bold text-3xl bg-transparent text-custom-tertiary underline text-center font-bold  uppercase w-max';\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), data = ref4[0], updateData = ref4[1];\n    var groqQueries = {\n        'pricedItems': \"*[_type in [\\\"pricedItems\\\"]]{...,image{asset->{\\n      altText,\\n      url,\\n      }}}\",\n        'moneyAmounts': \"*[_type in [\\\"moneyAmounts\\\"]] | order(actualValue asc)\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getData = function() {\n            var _ref = _asyncToGenerator(_Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(queryName) {\n                var resp;\n                return _Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(groqQueries[queryName]);\n                        case 2:\n                            resp = _ctx.sent;\n                            updateData(resp);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getData(queryName) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        switch(listItems){\n            case 'pricedItem':\n                getData('pricedItems');\n                break;\n            case 'moneyAmount':\n                getData('moneyAmounts');\n                break;\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data) {\n            data.map(function(obj, index) {\n                if (index === 0) {\n                    switch(listItems){\n                        case 'pricedItem':\n                            context === null || context === void 0 ? void 0 : context.updateObjectA(obj);\n                            break;\n                        case 'moneyAmount':\n                            context === null || context === void 0 ? void 0 : context.updateObjectB(obj);\n                            break;\n                    }\n                }\n            });\n        }\n    }, [\n        data\n    ]);\n    var options = [];\n    if (data) {\n        var _this = this;\n        var selector;\n        switch(listItems){\n            case 'pricedItem':\n                selector = 'namePlural';\n                break;\n            case 'moneyAmount':\n                selector = 'displayValue';\n                break;\n        }\n        data.map(function(obj, index) {\n            options.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                id: obj === null || obj === void 0 ? void 0 : obj._id,\n                children: obj === null || obj === void 0 ? void 0 : obj[selector]\n            }, index, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableText/DropDown.js\",\n                lineNumber: 80,\n                columnNumber: 17\n            }, _this));\n        });\n    }\n    var userSelect = function(e) {\n        var ref, ref1, ref2, ref3;\n        var selectedTarget = (ref = e.target) === null || ref === void 0 ? void 0 : (ref1 = ref.dataset) === null || ref1 === void 0 ? void 0 : ref1.amountTarget;\n        var selectedOption = (ref2 = e.target) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.selectedOptions) === null || ref3 === void 0 ? void 0 : ref3[0];\n        var selectedID = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.id;\n        // const selectedVal = selectedOption?.value;\n        var selectedObj = data.filter(function(obj) {\n            return (obj === null || obj === void 0 ? void 0 : obj._id) == selectedID;\n        });\n        switch(selectedTarget){\n            case 'pricedItem':\n                context === null || context === void 0 ? void 0 : context.updateObjectA(selectedObj === null || selectedObj === void 0 ? void 0 : selectedObj[0]);\n                break;\n            case 'moneyAmount':\n                context === null || context === void 0 ? void 0 : context.updateObjectB(selectedObj === null || selectedObj === void 0 ? void 0 : selectedObj[0]);\n                break;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n        className: classList,\n        onChange: function(e) {\n            return userSelect(e);\n        },\n        \"data-amount-target\": listItems,\n        children: options\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableText/DropDown.js\",\n        lineNumber: 103,\n        columnNumber: 3\n    }, this));\n}\n_s(DropDown, \"H4+Lumme8GnvVeCdHZ7fKMSXbEs=\");\n_c = DropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDown);\nvar _c;\n$RefreshReg$(_c, \"DropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFHLENBQUVTLEdBQUcsS0FBSVMsVUFBVTs7UUFFN0QsTUFBTSxDQUFFTixjQUFjO1lBQ3BCLElBQUksQ0FBQyxDQUFZO2dCQUNmdEIsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLE9BQU8sQ0FBRVksYUFBYSxDQUFDaUIsV0FBVyxhQUFYQSxXQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLFdBQVcsQ0FBRyxDQUFDO2dCQUN0QyxLQUFLO1lBRVAsSUFBSSxDQUFDLENBQWE7Z0JBQ2hCN0IsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLE9BQU8sQ0FBRWEsYUFBYSxDQUFDZ0IsV0FBVyxhQUFYQSxXQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLFdBQVcsQ0FBRyxDQUFDO2dCQUN0QyxLQUFLOztJQUVYLENBQUM7SUFHRixNQUFNLDZFQUNKRSxDQUFNO1FBQUNDLFNBQVMsRUFBRS9CLFNBQVM7UUFBR2dDLFFBQVEsRUFBRSxRQUFRLENBQVBaLENBQUM7WUFBS0QsTUFBTSxDQUFOQSxVQUFVLENBQUNDLENBQUM7O1FBQUdhLENBQWtCLHFCQUFFbkMsU0FBUztrQkFDekZlLE9BQU87Ozs7OztBQUlaLENBQUM7R0F0R1FsQixRQUFRO0tBQVJBLFFBQVE7QUF3R2pCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BvcnRhYmxlVGV4dC9Ecm9wRG93bi5qcz84MDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcblxuXG5mdW5jdGlvbiBEcm9wRG93bihwcm9wKSB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BcbiAgY29uc3QgeyBsaXN0SXRlbXMsIGNvbnRleHQgfSA9IHZhbHVlXG4gIC8vIHt2YWx1ZX1cbiAgY29uc3QgY2xhc3NMaXN0ID0gJ214LTEuNSAgZm9udC1ib2xkIHRleHQtM3hsIGJnLXRyYW5zcGFyZW50IHRleHQtY3VzdG9tLXRlcnRpYXJ5IHVuZGVybGluZSB0ZXh0LWNlbnRlciBmb250LWJvbGQgIHVwcGVyY2FzZSB3LW1heCc7XG5cblxuXHRjb25zdCBbZGF0YSwgdXBkYXRlRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGdyb3FRdWVyaWVzID0ge1xuICAgICdwcmljZWRJdGVtcycgOiBgKltfdHlwZSBpbiBbXCJwcmljZWRJdGVtc1wiXV17Li4uLGltYWdle2Fzc2V0LT57XG4gICAgICBhbHRUZXh0LFxuICAgICAgdXJsLFxuICAgICAgfX19YCxcbiAgICAnbW9uZXlBbW91bnRzJyA6IGAqW190eXBlIGluIFtcIm1vbmV5QW1vdW50c1wiXV0gfCBvcmRlcihhY3R1YWxWYWx1ZSBhc2MpYFxuICB9XG5cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGdldERhdGEgPSBhc3luYyAocXVlcnlOYW1lKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FRdWVyaWVzW3F1ZXJ5TmFtZV0pO1xuXHRcdFx0dXBkYXRlRGF0YShyZXNwKTtcbiAgICB9XG4gICAgICAgIFxuICAgIHN3aXRjaCAobGlzdEl0ZW1zKSB7XG4gICAgICBjYXNlICdwcmljZWRJdGVtJzpcbiAgICAgICAgZ2V0RGF0YSgncHJpY2VkSXRlbXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgIGNhc2UgJ21vbmV5QW1vdW50JzpcbiAgICBcdFx0Z2V0RGF0YSgnbW9uZXlBbW91bnRzJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgfSwgW10pO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG5cbiAgICAgIGRhdGEubWFwKChvYmosIGluZGV4KSA9PiB7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3dpdGNoIChsaXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByaWNlZEl0ZW0nOlxuICAgICAgICAgICAgICBjb250ZXh0Py51cGRhdGVPYmplY3RBKG9iailcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ21vbmV5QW1vdW50JzpcbiAgICAgICAgICAgICAgY29udGV4dD8udXBkYXRlT2JqZWN0QihvYmopXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuXHR9LCBbZGF0YV0pO1xuXG5cdGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuXHRpZiAoZGF0YSkge1xuICAgIGxldCBzZWxlY3RvcjtcbiAgICBzd2l0Y2ggKGxpc3RJdGVtcykge1xuICAgICAgY2FzZSAncHJpY2VkSXRlbSc6XG4gICAgXHRzZWxlY3RvciA9ICduYW1lUGx1cmFsJ1xuICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgIGNhc2UgJ21vbmV5QW1vdW50JzpcbiAgICAgICAgc2VsZWN0b3IgPSAnZGlzcGxheVZhbHVlJ1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGF0YS5tYXAoKG9iaiwgaW5kZXgpID0+IHtcblx0XHRcdG9wdGlvbnMucHVzaCg8b3B0aW9uIGtleT17aW5kZXh9IGlkPXtvYmo/Ll9pZH0+e29iaj8uW3NlbGVjdG9yXX08L29wdGlvbj4pXG5cdFx0fSlcbiAgfVxuICBjb25zdCB1c2VyU2VsZWN0ID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFRhcmdldCA9IGUudGFyZ2V0Py5kYXRhc2V0Py5hbW91bnRUYXJnZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldD8uc2VsZWN0ZWRPcHRpb25zPy5bMF07XG4gICAgY29uc3Qgc2VsZWN0ZWRJRCA9IHNlbGVjdGVkT3B0aW9uPy5pZDtcbiAgICAvLyBjb25zdCBzZWxlY3RlZFZhbCA9IHNlbGVjdGVkT3B0aW9uPy52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZE9iaiA9IGRhdGEuZmlsdGVyKG9iaiA9PiBvYmo/Ll9pZCA9PSBzZWxlY3RlZElEKTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUYXJnZXQpIHtcbiAgICAgIGNhc2UgJ3ByaWNlZEl0ZW0nOlxuICAgICAgICBjb250ZXh0Py51cGRhdGVPYmplY3RBKHNlbGVjdGVkT2JqPy5bMF0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlICdtb25leUFtb3VudCc6XG4gICAgICAgIGNvbnRleHQ/LnVwZGF0ZU9iamVjdEIoc2VsZWN0ZWRPYmo/LlswXSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBcbiByZXR1cm4gKFxuICA8c2VsZWN0IGNsYXNzTmFtZT17Y2xhc3NMaXN0fSAgb25DaGFuZ2U9eyhlKSA9PiB1c2VyU2VsZWN0KGUpfSBkYXRhLWFtb3VudC10YXJnZXQ9e2xpc3RJdGVtc30gPlxuICAgIHtvcHRpb25zfVxuICA8L3NlbGVjdD5cbiApXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGllbnQiLCJEcm9wRG93biIsInByb3AiLCJ2YWx1ZSIsImxpc3RJdGVtcyIsImNvbnRleHQiLCJjbGFzc0xpc3QiLCJkYXRhIiwidXBkYXRlRGF0YSIsImdyb3FRdWVyaWVzIiwiZ2V0RGF0YSIsInF1ZXJ5TmFtZSIsInJlc3AiLCJmZXRjaCIsIm1hcCIsIm9iaiIsImluZGV4IiwidXBkYXRlT2JqZWN0QSIsInVwZGF0ZU9iamVjdEIiLCJvcHRpb25zIiwic2VsZWN0b3IiLCJwdXNoIiwib3B0aW9uIiwiaWQiLCJfaWQiLCJ1c2VyU2VsZWN0IiwiZSIsInNlbGVjdGVkVGFyZ2V0IiwidGFyZ2V0IiwiZGF0YXNldCIsImFtb3VudFRhcmdldCIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRPcHRpb25zIiwic2VsZWN0ZWRJRCIsInNlbGVjdGVkT2JqIiwiZmlsdGVyIiwic2VsZWN0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJkYXRhLWFtb3VudC10YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/PortableText/DropDown.js\n");

/***/ })

});