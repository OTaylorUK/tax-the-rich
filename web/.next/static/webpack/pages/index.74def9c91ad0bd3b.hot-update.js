"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/globalGroq.js":
/*!*****************************!*\
  !*** ./utils/globalGroq.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFooter\": function() { return /* binding */ getFooter; },\n/* harmony export */   \"getPalette\": function() { return /* binding */ getPalette; },\n/* harmony export */   \"getSEO\": function() { return /* binding */ getSEO; },\n/* harmony export */   \"getNav\": function() { return /* binding */ getNav; },\n/* harmony export */   \"getRoutes\": function() { return /* binding */ getRoutes; },\n/* harmony export */   \"getCurrentPage\": function() { return /* binding */ getCurrentPage; },\n/* harmony export */   \"getPageContent\": function() { return /* binding */ getPageContent; }\n/* harmony export */ });\n// Must keep '_type' to use in later function to organise data into groups\nvar buttonGroq = \"...,\\n'intLink': route->slug.current,\\n'link': link,\\nportableButton[]{\\n  ...,\\n  asset->\\n},\";\nvar getFooter = \"\\n*[_type in [\\\"siteFooter\\\"]]\\n{_type,middle,\\n  lhs[]{\\n    \".concat(buttonGroq, \"\\n  },\\n  rhs[]{\\n    \").concat(buttonGroq, \"\\n  },\\n  middle{\\n    ...,\\n    social[]->{\\n      ...,\\n      button{\\n       \").concat(buttonGroq, \"\\n      }\\n    }\\n  }\\n}\\n\");\nvar getPalette = \"\\n  *[_type in [\\\"colourPalette\\\"]]\\n  {hex,name,_type}\\n\";\nvar getSEO = \"\\n  *[_type in [\\\"siteSEO\\\"]]\\n  {...}\\n\";\nvar getNav = \"\\n  *[_type in [\\\"siteNavigation\\\"]]\\n  {\\n    _type,\\n    logo{\\n      \".concat(buttonGroq, \"\\n    },\\n    button{\\n      \").concat(buttonGroq, \"\\n    },\\n    menu[]{\\n      \").concat(buttonGroq, \"\\n    }\\n  }\\n\");\nvar getRoutes = \"\\n  *[_type in [\\\"page\\\"]]\\n  {_type,slug,title}\\n\";\nvar getCurrentPage = function() {\n    var slug = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '404';\n    return \"\\n  *[_type == \\\"page\\\" && slug.current == \\\"\".concat(slug, \"\\\"]\\n  {content,_type}\\n  \");\n};\nvar getPageContent = function() {\n    var slug = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '404';\n    return \"\\n  *[_type == \\\"page\\\" && slug.current == \\\"\".concat(slug, \"\\\"]\\n  {\\n    ...,\\n    content[] {\\n      ...,\\n      buttons[] {\\n        \").concat(buttonGroq, \"\\n      },\\n      \\n    }\\n  }\\n  \");\n} // export const getCurrentPage = (slug = 'what-you-can-do') => {\n //   return `\n //   *[slug.current == \"${slug}\"]\n //   {content,_type}\n //   `\n // }\n // export const getCurrentPage = (slug = 'what-you-can-do') => {\n //   return `\n //   *[_type == [\"page\"] && slug.current == \"${slug}\"]\n //   {content,_type}\n //   `\n // export const  getRoutes = `\n //   *[_type in [\"route\"]]\n //   {_type,page,slug}\n // `\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nbG9iYWxHcm9xLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxFQUEwRTtBQUcxRSxHQUFLLENBQUNBLFVBQVUsR0FBSSxDQU1sQjtBQUVLLEdBQUssQ0FBQ0MsU0FBUyxHQUFJLENBSXRCLGdFQUdFRCxNQUFVLENBSFZBLFVBQVUsRUFBQyxDQUdiLHlCQU9LQSxNQUFVLENBUGJBLFVBQVUsRUFBQyxDQU9WLG1GQUFhLE1BS3BCLENBTFNBLFVBQVUsRUFBQyxDQUtwQjtBQUVPLEdBQUssQ0FBRUUsVUFBVSxHQUFJLENBRzVCO0FBRU8sR0FBSyxDQUFFQyxNQUFNLEdBQUksQ0FHeEI7QUFFTyxHQUFLLENBQUVDLE1BQU0sR0FBSSxDQUtsQiwwRUFHRUosTUFBVSxDQUhWQSxVQUFVLEVBQUMsQ0FHYixnQ0FHRUEsTUFBVSxDQUhWQSxVQUFVLEVBQUMsQ0FHYixnQ0FBYSxNQUduQixDQUhRQSxVQUFVLEVBQUMsQ0FHbkI7QUFFTyxHQUFLLENBQUVLLFNBQVMsR0FBSSxDQUczQjtBQUdPLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsR0FBVSxDQUFDO1FBQWxCQyxJQUFJLG9FQUFHLENBQUs7SUFDekMsTUFBTSxDQUFFLENBQzhCLCtDQUFPLE1BRTdDLENBRndDQSxJQUFJLEVBQUMsQ0FFN0M7QUFDRixDQUFDO0FBRU0sR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFBUSxHQUFVLENBQUM7UUFBbEJELElBQUksb0VBQUcsQ0FBSztJQUN6QyxNQUFNLENBQUUsQ0FDOEIsK0NBTTlCUCxNQUFVLENBTnNCTyxJQUFJLEVBQUMsQ0FNdkMsK0VBQWEsTUFLbkIsQ0FMUVAsVUFBVSxFQUFDLENBS25CO0FBQ0YsQ0FBQyxDQUUrRDtBQUNoRSxDQUFhO0FBQ2IsQ0FBaUM7QUFDakMsQ0FBb0I7QUFDcEIsQ0FBTTtBQUNOLENBQUk7QUFHSixDQUFnRTtBQUNoRSxDQUFhO0FBQ2IsQ0FBc0Q7QUFDdEQsQ0FBb0I7QUFDcEIsQ0FBTTtBQUVOLENBQThCO0FBQzlCLENBQTBCO0FBQzFCLENBQXNCO0FBQ3RCLENBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2xvYmFsR3JvcS5qcz82MTAzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE11c3Qga2VlcCAnX3R5cGUnIHRvIHVzZSBpbiBsYXRlciBmdW5jdGlvbiB0byBvcmdhbmlzZSBkYXRhIGludG8gZ3JvdXBzXG5cblxuY29uc3QgYnV0dG9uR3JvcSA9IGAuLi4sXG4naW50TGluayc6IHJvdXRlLT5zbHVnLmN1cnJlbnQsXG4nbGluayc6IGxpbmssXG5wb3J0YWJsZUJ1dHRvbltde1xuICAuLi4sXG4gIGFzc2V0LT5cbn0sYFxuXG5leHBvcnQgY29uc3QgZ2V0Rm9vdGVyID0gYFxuKltfdHlwZSBpbiBbXCJzaXRlRm9vdGVyXCJdXVxue190eXBlLG1pZGRsZSxcbiAgbGhzW117XG4gICAgJHtidXR0b25Hcm9xfVxuICB9LFxuICByaHNbXXtcbiAgICAke2J1dHRvbkdyb3F9XG4gIH0sXG4gIG1pZGRsZXtcbiAgICAuLi4sXG4gICAgc29jaWFsW10tPntcbiAgICAgIC4uLixcbiAgICAgIGJ1dHRvbntcbiAgICAgICAke2J1dHRvbkdyb3F9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gXG5cbmV4cG9ydCBjb25zdCAgZ2V0UGFsZXR0ZSA9IGBcbiAgKltfdHlwZSBpbiBbXCJjb2xvdXJQYWxldHRlXCJdXVxuICB7aGV4LG5hbWUsX3R5cGV9XG5gXG5cbmV4cG9ydCBjb25zdCAgZ2V0U0VPID0gYFxuICAqW190eXBlIGluIFtcInNpdGVTRU9cIl1dXG4gIHsuLi59XG5gXG5cbmV4cG9ydCBjb25zdCAgZ2V0TmF2ID0gYFxuICAqW190eXBlIGluIFtcInNpdGVOYXZpZ2F0aW9uXCJdXVxuICB7XG4gICAgX3R5cGUsXG4gICAgbG9nb3tcbiAgICAgICR7YnV0dG9uR3JvcX1cbiAgICB9LFxuICAgIGJ1dHRvbntcbiAgICAgICR7YnV0dG9uR3JvcX1cbiAgICB9LFxuICAgIG1lbnVbXXtcbiAgICAgICR7YnV0dG9uR3JvcX1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0ICBnZXRSb3V0ZXMgPSBgXG4gICpbX3R5cGUgaW4gW1wicGFnZVwiXV1cbiAge190eXBlLHNsdWcsdGl0bGV9XG5gXG5cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQYWdlID0gKHNsdWcgPSAnNDA0JykgPT4ge1xuICByZXR1cm4gYFxuICAqW190eXBlID09IFwicGFnZVwiICYmIHNsdWcuY3VycmVudCA9PSBcIiR7c2x1Z31cIl1cbiAge2NvbnRlbnQsX3R5cGV9XG4gIGBcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb250ZW50ID0gKHNsdWcgPSAnNDA0JykgPT4ge1xuICByZXR1cm4gYFxuICAqW190eXBlID09IFwicGFnZVwiICYmIHNsdWcuY3VycmVudCA9PSBcIiR7c2x1Z31cIl1cbiAge1xuICAgIC4uLixcbiAgICBjb250ZW50W10ge1xuICAgICAgLi4uLFxuICAgICAgYnV0dG9uc1tdIHtcbiAgICAgICAgJHtidXR0b25Hcm9xfVxuICAgICAgfSxcbiAgICAgIFxuICAgIH1cbiAgfVxuICBgXG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRDdXJyZW50UGFnZSA9IChzbHVnID0gJ3doYXQteW91LWNhbi1kbycpID0+IHtcbi8vICAgcmV0dXJuIGBcbi8vICAgKltzbHVnLmN1cnJlbnQgPT0gXCIke3NsdWd9XCJdXG4vLyAgIHtjb250ZW50LF90eXBlfVxuLy8gICBgXG4vLyB9XG5cblxuLy8gZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQYWdlID0gKHNsdWcgPSAnd2hhdC15b3UtY2FuLWRvJykgPT4ge1xuLy8gICByZXR1cm4gYFxuLy8gICAqW190eXBlID09IFtcInBhZ2VcIl0gJiYgc2x1Zy5jdXJyZW50ID09IFwiJHtzbHVnfVwiXVxuLy8gICB7Y29udGVudCxfdHlwZX1cbi8vICAgYFxuXG4vLyBleHBvcnQgY29uc3QgIGdldFJvdXRlcyA9IGBcbi8vICAgKltfdHlwZSBpbiBbXCJyb3V0ZVwiXV1cbi8vICAge190eXBlLHBhZ2Usc2x1Z31cbi8vIGBcbiJdLCJuYW1lcyI6WyJidXR0b25Hcm9xIiwiZ2V0Rm9vdGVyIiwiZ2V0UGFsZXR0ZSIsImdldFNFTyIsImdldE5hdiIsImdldFJvdXRlcyIsImdldEN1cnJlbnRQYWdlIiwic2x1ZyIsImdldFBhZ2VDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/globalGroq.js\n");

/***/ })

});