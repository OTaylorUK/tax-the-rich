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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction DropDown(prop) {\n    _s();\n    var value = prop.value;\n    var listItems = value.listItems, context = value.context;\n    // {value}\n    var classList = 'header-select';\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), data = ref4[0], updateData = ref4[1];\n    var groqQueries = {\n        'pricedItems': \"*[_type in [\\\"pricedItems\\\"]]{...,image{asset->{\\n      altText,\\n      url,\\n      }}}\",\n        'moneyAmounts': \"*[_type in [\\\"moneyAmounts\\\"]] | order(actualValue asc)\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getData = function() {\n            var _ref = _asyncToGenerator(_Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(queryName) {\n                var resp;\n                return _Users_ollietaylor_Code_REACT_tax_the_rich_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(groqQueries[queryName]);\n                        case 2:\n                            resp = _ctx.sent;\n                            updateData(resp);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getData(queryName) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        switch(listItems){\n            case 'pricedItem':\n                getData('pricedItems');\n                break;\n            case 'moneyAmount':\n                getData('moneyAmounts');\n                break;\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data) {\n            var selector;\n            data.map(function(obj, index) {\n                if (index === 0) {\n                    switch(listItems){\n                        case 'pricedItem':\n                            context === null || context === void 0 ? void 0 : context.updateObjectA(obj);\n                            break;\n                        case 'moneyAmount':\n                            context === null || context === void 0 ? void 0 : context.updateObjectB(obj);\n                            break;\n                    }\n                }\n            });\n        }\n    }, [\n        data\n    ]);\n    var options = [];\n    if (data) {\n        var _this = this;\n        var selector;\n        switch(listItems){\n            case 'pricedItem':\n                selector = 'namePlural';\n                break;\n            case 'moneyAmount':\n                selector = 'displayValue';\n                break;\n        }\n        data.map(function(obj, index) {\n            options.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                id: obj === null || obj === void 0 ? void 0 : obj._id,\n                \"data-true-value\": obj === null || obj === void 0 ? void 0 : obj.price,\n                children: obj === null || obj === void 0 ? void 0 : obj[selector]\n            }, index, false, {\n                fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableText/DropDown.js\",\n                lineNumber: 82,\n                columnNumber: 17\n            }, _this));\n        });\n    }\n    var userSelect = function(e) {\n        var ref, ref1, ref2, ref3;\n        var selectedTarget = (ref = e.target) === null || ref === void 0 ? void 0 : (ref1 = ref.dataset) === null || ref1 === void 0 ? void 0 : ref1.amountTarget;\n        var selectedOption = (ref2 = e.target) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.selectedOptions) === null || ref3 === void 0 ? void 0 : ref3[0];\n        var selectedID = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.id;\n        // const selectedVal = selectedOption?.value;\n        var selectedObj = data.filter(function(obj) {\n            return (obj === null || obj === void 0 ? void 0 : obj._id) == selectedID;\n        });\n        switch(selectedTarget){\n            case 'pricedItem':\n                context === null || context === void 0 ? void 0 : context.updateObjectA(selectedObj === null || selectedObj === void 0 ? void 0 : selectedObj[0]);\n                break;\n            case 'moneyAmount':\n                context === null || context === void 0 ? void 0 : context.updateObjectB(selectedObj === null || selectedObj === void 0 ? void 0 : selectedObj[0]);\n                break;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n        className: classList,\n        onChange: function(e) {\n            return userSelect(e);\n        },\n        \"data-amount-target\": listItems,\n        children: options\n    }, void 0, false, {\n        fileName: \"/Users/ollietaylor/Code/REACT/tax-the-rich/web/comps/PortableText/DropDown.js\",\n        lineNumber: 105,\n        columnNumber: 3\n    }, this));\n}\n_s(DropDown, \"H4+Lumme8GnvVeCdHZ7fKMSXbEs=\");\n_c = DropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDown);\nvar _c;\n$RefreshReg$(_c, \"DropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQzhCLE1BQU0sQ0FBQ3JCLFFBQVEsQ0FBUkEsR0FBRztZQUFJQSxNQUFNLEVBQU5BLEdBQUcsYUFBSEEsR0FBRyxLQUFIQSxJQUFJLENBQUpBLENBQVEsR0FBUkEsSUFBSSxDQUFKQSxDQUFRLEdBQVJBLEdBQUcsQ0FBRVEsR0FBRyxLQUFJVyxVQUFVOztRQUU3RCxNQUFNLENBQUVOLGNBQWM7WUFDcEIsSUFBSSxDQUFDLENBQVk7Z0JBQ2Z4QixPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsT0FBTyxDQUFFYSxhQUFhLENBQUNrQixXQUFXLGFBQVhBLFdBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsV0FBVyxDQUFHLENBQUM7Z0JBQ3RDLEtBQUs7WUFFUCxJQUFJLENBQUMsQ0FBYTtnQkFDaEIvQixPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsSUFBSSxDQUFKQSxDQUFzQixHQUF0QkEsT0FBTyxDQUFFYyxhQUFhLENBQUNpQixXQUFXLGFBQVhBLFdBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsV0FBVyxDQUFHLENBQUM7Z0JBQ3RDLEtBQUs7O0lBRVgsQ0FBQztJQUdGLE1BQU0sNkVBQ0pFLENBQU07UUFBQ0MsU0FBUyxFQUFFakMsU0FBUztRQUFHa0MsUUFBUSxFQUFFLFFBQVEsQ0FBUFosQ0FBQztZQUFLRCxNQUFNLENBQU5BLFVBQVUsQ0FBQ0MsQ0FBQzs7UUFBR2EsQ0FBa0IscUJBQUVyQyxTQUFTO2tCQUN6RmdCLE9BQU87Ozs7OztBQUlaLENBQUM7R0F4R1FuQixRQUFRO0tBQVJBLFFBQVE7QUEwR2pCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL1BvcnRhYmxlVGV4dC9Ecm9wRG93bi5qcz84MDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcblxuXG5mdW5jdGlvbiBEcm9wRG93bihwcm9wKSB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BcbiAgY29uc3QgeyBsaXN0SXRlbXMsIGNvbnRleHQgfSA9IHZhbHVlXG4gIC8vIHt2YWx1ZX1cbiAgY29uc3QgY2xhc3NMaXN0ID0gJ2hlYWRlci1zZWxlY3QnO1xuXG5cblx0Y29uc3QgW2RhdGEsIHVwZGF0ZURhdGFdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBncm9xUXVlcmllcyA9IHtcbiAgICAncHJpY2VkSXRlbXMnIDogYCpbX3R5cGUgaW4gW1wicHJpY2VkSXRlbXNcIl1dey4uLixpbWFnZXthc3NldC0+e1xuICAgICAgYWx0VGV4dCxcbiAgICAgIHVybCxcbiAgICAgIH19fWAsXG4gICAgJ21vbmV5QW1vdW50cycgOiBgKltfdHlwZSBpbiBbXCJtb25leUFtb3VudHNcIl1dIHwgb3JkZXIoYWN0dWFsVmFsdWUgYXNjKWBcbiAgfVxuXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBnZXREYXRhID0gYXN5bmMgKHF1ZXJ5TmFtZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xUXVlcmllc1txdWVyeU5hbWVdKTtcblx0XHRcdHVwZGF0ZURhdGEocmVzcCk7XG4gICAgfVxuICAgICAgICBcbiAgICBzd2l0Y2ggKGxpc3RJdGVtcykge1xuICAgICAgY2FzZSAncHJpY2VkSXRlbSc6XG4gICAgICAgIGdldERhdGEoJ3ByaWNlZEl0ZW1zJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlICdtb25leUFtb3VudCc6XG4gICAgXHRcdGdldERhdGEoJ21vbmV5QW1vdW50cycpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gIH0sIFtdKTtcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuXG5cbiAgICBsZXQgc2VsZWN0b3I7XG4gICAgICBkYXRhLm1hcCgob2JqLCBpbmRleCkgPT4ge1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHN3aXRjaCAobGlzdEl0ZW1zKSB7XG4gICAgICAgICAgICBjYXNlICdwcmljZWRJdGVtJzpcbiAgICAgICAgICAgICAgY29udGV4dD8udXBkYXRlT2JqZWN0QShvYmopXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdtb25leUFtb3VudCc6XG4gICAgICAgICAgICAgIGNvbnRleHQ/LnVwZGF0ZU9iamVjdEIob2JqKVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KVxuICAgIH1cbiAgICBcblx0fSwgW2RhdGFdKTtcblxuXHRjb25zdCBvcHRpb25zID0gW107XG5cblx0aWYgKGRhdGEpIHtcbiAgICBsZXQgc2VsZWN0b3I7XG4gICAgc3dpdGNoIChsaXN0SXRlbXMpIHtcbiAgICAgIGNhc2UgJ3ByaWNlZEl0ZW0nOlxuICAgIFx0c2VsZWN0b3IgPSAnbmFtZVBsdXJhbCdcbiAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlICdtb25leUFtb3VudCc6XG4gICAgICAgIHNlbGVjdG9yID0gJ2Rpc3BsYXlWYWx1ZSdcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRhdGEubWFwKChvYmosIGluZGV4KSA9PiB7XG5cdFx0XHRvcHRpb25zLnB1c2goPG9wdGlvbiBrZXk9e2luZGV4fSBpZD17b2JqPy5faWR9IGRhdGEtdHJ1ZS12YWx1ZT17b2JqPy5wcmljZX0+e29iaj8uW3NlbGVjdG9yXX08L29wdGlvbj4pXG5cdFx0fSlcbiAgfVxuICBjb25zdCB1c2VyU2VsZWN0ID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFRhcmdldCA9IGUudGFyZ2V0Py5kYXRhc2V0Py5hbW91bnRUYXJnZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldD8uc2VsZWN0ZWRPcHRpb25zPy5bMF07XG4gICAgY29uc3Qgc2VsZWN0ZWRJRCA9IHNlbGVjdGVkT3B0aW9uPy5pZDtcbiAgICAvLyBjb25zdCBzZWxlY3RlZFZhbCA9IHNlbGVjdGVkT3B0aW9uPy52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZE9iaiA9IGRhdGEuZmlsdGVyKG9iaiA9PiBvYmo/Ll9pZCA9PSBzZWxlY3RlZElEKTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRUYXJnZXQpIHtcbiAgICAgIGNhc2UgJ3ByaWNlZEl0ZW0nOlxuICAgICAgICBjb250ZXh0Py51cGRhdGVPYmplY3RBKHNlbGVjdGVkT2JqPy5bMF0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlICdtb25leUFtb3VudCc6XG4gICAgICAgIGNvbnRleHQ/LnVwZGF0ZU9iamVjdEIoc2VsZWN0ZWRPYmo/LlswXSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBcbiByZXR1cm4gKFxuICA8c2VsZWN0IGNsYXNzTmFtZT17Y2xhc3NMaXN0fSAgb25DaGFuZ2U9eyhlKSA9PiB1c2VyU2VsZWN0KGUpfSBkYXRhLWFtb3VudC10YXJnZXQ9e2xpc3RJdGVtc30gPlxuICAgIHtvcHRpb25zfVxuICA8L3NlbGVjdD5cbiApXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGllbnQiLCJEcm9wRG93biIsInByb3AiLCJ2YWx1ZSIsImxpc3RJdGVtcyIsImNvbnRleHQiLCJjbGFzc0xpc3QiLCJkYXRhIiwidXBkYXRlRGF0YSIsImdyb3FRdWVyaWVzIiwiZ2V0RGF0YSIsInF1ZXJ5TmFtZSIsInJlc3AiLCJmZXRjaCIsInNlbGVjdG9yIiwibWFwIiwib2JqIiwiaW5kZXgiLCJ1cGRhdGVPYmplY3RBIiwidXBkYXRlT2JqZWN0QiIsIm9wdGlvbnMiLCJwdXNoIiwib3B0aW9uIiwiaWQiLCJfaWQiLCJkYXRhLXRydWUtdmFsdWUiLCJwcmljZSIsInVzZXJTZWxlY3QiLCJlIiwic2VsZWN0ZWRUYXJnZXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYW1vdW50VGFyZ2V0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RlZE9wdGlvbnMiLCJzZWxlY3RlZElEIiwic2VsZWN0ZWRPYmoiLCJmaWx0ZXIiLCJzZWxlY3QiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImRhdGEtYW1vdW50LXRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/PortableText/DropDown.js\n");

/***/ })

});