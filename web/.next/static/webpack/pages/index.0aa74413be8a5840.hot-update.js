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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFooter\": function() { return /* binding */ getFooter; },\n/* harmony export */   \"getPalette\": function() { return /* binding */ getPalette; },\n/* harmony export */   \"getSEO\": function() { return /* binding */ getSEO; },\n/* harmony export */   \"getNav\": function() { return /* binding */ getNav; },\n/* harmony export */   \"getRoutes\": function() { return /* binding */ getRoutes; },\n/* harmony export */   \"getCurrentPage\": function() { return /* binding */ getCurrentPage; },\n/* harmony export */   \"getPageContent\": function() { return /* binding */ getPageContent; }\n/* harmony export */ });\n// Must keep '_type' to use in later function to organise data into groups\nvar getFooter = \"\\n*[_type in [\\\"siteFooter\\\"]]\\n{_type,middle,\\n  lhs[]{\\n    'link': route->slug,\\n    ...\\n  },\\n  rhs[]{\\n    'link': route->slug,\\n    ...\\n  },\\n  middle{\\n    ...,\\n    social[]->{\\n      'icon': icon{asset->{\\n        altText,\\n        url,\\n        }},\\n      ...\\n    }\\n  }\\n}\\n\";\nvar getPalette = \"\\n  *[_type in [\\\"colourPalette\\\"]]\\n  {hex,name,_type}\\n\";\nvar getSEO = \"\\n  *[_type in [\\\"siteSEO\\\"]]\\n  {...}\\n\";\nvar getNav = \"\\n  *[_type in [\\\"siteNavigation\\\"]]\\n  {_type,\\n    button,\\n    logo {asset->{\\n    _ref,\\n    _type,\\n    altText,\\n    url,\\n    description,\\n    \\\"tags\\\": opt.media.tags[]->name.current,\\n    title\\n    }},\\n    menu[]{\\n      'link': route->slug,\\n      ...\\n    }\\n  }\\n\";\nvar getRoutes = \"\\n  *[_type in [\\\"page\\\"]]\\n  {_type,slug,title}\\n\";\nvar getCurrentPage = function() {\n    var slug = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '404';\n    return \"\\n  *[_type == \\\"page\\\" && slug.current == \\\"\".concat(slug, \"\\\"]\\n  {content,_type}\\n  \");\n};\nvar getPageContent = function() {\n    var slug = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '404';\n    return \"\\n  *[_type == \\\"page\\\" && slug.current == \\\"\".concat(slug, \"\\\"]\\n  {\\n    ...,\\n    content[] {\\n      ...,\\n      buttons[] {\\n        ...,\\n        'link': route->slug,\\n      },\\n      \\n    }\\n  }\\n  \");\n} // export const getCurrentPage = (slug = 'what-you-can-do') => {\n //   return `\n //   *[slug.current == \"${slug}\"]\n //   {content,_type}\n //   `\n // }\n // export const getCurrentPage = (slug = 'what-you-can-do') => {\n //   return `\n //   *[_type == [\"page\"] && slug.current == \"${slug}\"]\n //   {content,_type}\n //   `\n // export const  getRoutes = `\n //   *[_type in [\"route\"]]\n //   {_type,page,slug}\n // `\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nbG9iYWxHcm9xLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxFQUEwRTtBQUVuRSxHQUFLLENBQUNBLFNBQVMsR0FBSSxDQXNCMUI7QUFFTyxHQUFLLENBQUVDLFVBQVUsR0FBSSxDQUc1QjtBQUVPLEdBQUssQ0FBRUMsTUFBTSxHQUFJLENBR3hCO0FBRU8sR0FBSyxDQUFFQyxNQUFNLEdBQUksQ0FrQnhCO0FBRU8sR0FBSyxDQUFFQyxTQUFTLEdBQUksQ0FHM0I7QUFHTyxHQUFLLENBQUNDLGNBQWMsR0FBRyxRQUFRLEdBQVUsQ0FBQztRQUFsQkMsSUFBSSxvRUFBRyxDQUFLO0lBQ3pDLE1BQU0sQ0FBRSxDQUM4QiwrQ0FBTyxNQUU3QyxDQUZ3Q0EsSUFBSSxFQUFDLENBRTdDO0FBQ0YsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsR0FBVSxDQUFDO1FBQWxCRCxJQUFJLG9FQUFHLENBQUs7SUFDekMsTUFBTSxDQUFFLENBQzhCLCtDQUFPLE1BWTdDLENBWndDQSxJQUFJLEVBQUMsQ0FZN0M7QUFDRixDQUFDLENBRStEO0FBQ2hFLENBQWE7QUFDYixDQUFpQztBQUNqQyxDQUFvQjtBQUNwQixDQUFNO0FBQ04sQ0FBSTtBQUdKLENBQWdFO0FBQ2hFLENBQWE7QUFDYixDQUFzRDtBQUN0RCxDQUFvQjtBQUNwQixDQUFNO0FBRU4sQ0FBOEI7QUFDOUIsQ0FBMEI7QUFDMUIsQ0FBc0I7QUFDdEIsQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9nbG9iYWxHcm9xLmpzPzYxMDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTXVzdCBrZWVwICdfdHlwZScgdG8gdXNlIGluIGxhdGVyIGZ1bmN0aW9uIHRvIG9yZ2FuaXNlIGRhdGEgaW50byBncm91cHNcblxuZXhwb3J0IGNvbnN0IGdldEZvb3RlciA9IGBcbipbX3R5cGUgaW4gW1wic2l0ZUZvb3RlclwiXV1cbntfdHlwZSxtaWRkbGUsXG4gIGxoc1tde1xuICAgICdsaW5rJzogcm91dGUtPnNsdWcsXG4gICAgLi4uXG4gIH0sXG4gIHJoc1tde1xuICAgICdsaW5rJzogcm91dGUtPnNsdWcsXG4gICAgLi4uXG4gIH0sXG4gIG1pZGRsZXtcbiAgICAuLi4sXG4gICAgc29jaWFsW10tPntcbiAgICAgICdpY29uJzogaWNvbnthc3NldC0+e1xuICAgICAgICBhbHRUZXh0LFxuICAgICAgICB1cmwsXG4gICAgICAgIH19LFxuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5gXG5cbmV4cG9ydCBjb25zdCAgZ2V0UGFsZXR0ZSA9IGBcbiAgKltfdHlwZSBpbiBbXCJjb2xvdXJQYWxldHRlXCJdXVxuICB7aGV4LG5hbWUsX3R5cGV9XG5gXG5cbmV4cG9ydCBjb25zdCAgZ2V0U0VPID0gYFxuICAqW190eXBlIGluIFtcInNpdGVTRU9cIl1dXG4gIHsuLi59XG5gXG5cbmV4cG9ydCBjb25zdCAgZ2V0TmF2ID0gYFxuICAqW190eXBlIGluIFtcInNpdGVOYXZpZ2F0aW9uXCJdXVxuICB7X3R5cGUsXG4gICAgYnV0dG9uLFxuICAgIGxvZ28ge2Fzc2V0LT57XG4gICAgX3JlZixcbiAgICBfdHlwZSxcbiAgICBhbHRUZXh0LFxuICAgIHVybCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBcInRhZ3NcIjogb3B0Lm1lZGlhLnRhZ3NbXS0+bmFtZS5jdXJyZW50LFxuICAgIHRpdGxlXG4gICAgfX0sXG4gICAgbWVudVtde1xuICAgICAgJ2xpbmsnOiByb3V0ZS0+c2x1ZyxcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgIGdldFJvdXRlcyA9IGBcbiAgKltfdHlwZSBpbiBbXCJwYWdlXCJdXVxuICB7X3R5cGUsc2x1Zyx0aXRsZX1cbmBcblxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFBhZ2UgPSAoc2x1ZyA9ICc0MDQnKSA9PiB7XG4gIHJldHVybiBgXG4gICpbX3R5cGUgPT0gXCJwYWdlXCIgJiYgc2x1Zy5jdXJyZW50ID09IFwiJHtzbHVnfVwiXVxuICB7Y29udGVudCxfdHlwZX1cbiAgYFxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbnRlbnQgPSAoc2x1ZyA9ICc0MDQnKSA9PiB7XG4gIHJldHVybiBgXG4gICpbX3R5cGUgPT0gXCJwYWdlXCIgJiYgc2x1Zy5jdXJyZW50ID09IFwiJHtzbHVnfVwiXVxuICB7XG4gICAgLi4uLFxuICAgIGNvbnRlbnRbXSB7XG4gICAgICAuLi4sXG4gICAgICBidXR0b25zW10ge1xuICAgICAgICAuLi4sXG4gICAgICAgICdsaW5rJzogcm91dGUtPnNsdWcsXG4gICAgICB9LFxuICAgICAgXG4gICAgfVxuICB9XG4gIGBcbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQYWdlID0gKHNsdWcgPSAnd2hhdC15b3UtY2FuLWRvJykgPT4ge1xuLy8gICByZXR1cm4gYFxuLy8gICAqW3NsdWcuY3VycmVudCA9PSBcIiR7c2x1Z31cIl1cbi8vICAge2NvbnRlbnQsX3R5cGV9XG4vLyAgIGBcbi8vIH1cblxuXG4vLyBleHBvcnQgY29uc3QgZ2V0Q3VycmVudFBhZ2UgPSAoc2x1ZyA9ICd3aGF0LXlvdS1jYW4tZG8nKSA9PiB7XG4vLyAgIHJldHVybiBgXG4vLyAgICpbX3R5cGUgPT0gW1wicGFnZVwiXSAmJiBzbHVnLmN1cnJlbnQgPT0gXCIke3NsdWd9XCJdXG4vLyAgIHtjb250ZW50LF90eXBlfVxuLy8gICBgXG5cbi8vIGV4cG9ydCBjb25zdCAgZ2V0Um91dGVzID0gYFxuLy8gICAqW190eXBlIGluIFtcInJvdXRlXCJdXVxuLy8gICB7X3R5cGUscGFnZSxzbHVnfVxuLy8gYFxuIl0sIm5hbWVzIjpbImdldEZvb3RlciIsImdldFBhbGV0dGUiLCJnZXRTRU8iLCJnZXROYXYiLCJnZXRSb3V0ZXMiLCJnZXRDdXJyZW50UGFnZSIsInNsdWciLCJnZXRQYWdlQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/globalGroq.js\n");

/***/ })

});