"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ui/label */ \"(app-pages-browser)/./ui/label.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/input */ \"(app-pages-browser)/./ui/input.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/button */ \"(app-pages-browser)/./ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction login() {\n    _s();\n    let [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\"\n    });\n    let handleLoginData = (e)=>{\n        setLoginData({\n            email: e.target.value\n        });\n        console.log(loginData.email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-[#ffffff]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogInIcon, {}, void 0, false, {\n                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-96 bg-white shadow-md rounded-lg overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold text-center mb-6 text-[#8b4513]\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    className: \"block text-sm text-gray-600 dark:text-gray-400\",\n                                    htmlFor: \"username\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    onChange: handleLoginData,\n                                    className: \"w-full mt-1\",\n                                    id: \"mail\",\n                                    placeholder: \"Enter your VJTI email\",\n                                    required: true,\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4 flex items-center justify-between\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onClick: ()=>{},\n                                        className: \"h-4 w-4 text-[#8b4513] focus:ring-[#8b4513] border-gray-300 rounded\",\n                                        id: \"remember\",\n                                        name: \"remember\",\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"ml-2 text-sm text-gray-600 dark:text-gray-400\",\n                                        htmlFor: \"remember\",\n                                        children: \"Remember Me\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"w-full py-2 bg-[#8b4513] text-white rounded mb-4\",\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-center text-gray-500\",\n                    children: \"made by vjtians for vjtians\"\n                }, void 0, false, {\n                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, \"1\", true, {\n        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(login, \"KIvsxrNRBocBKYM4i1PCXzO2bF4=\");\nfunction LogInIcon() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"https://vjti.ac.in/wp-content/uploads/oldupload/cropped-New-VJTI-Logo_1-1-60x87.jpg\",\n        className: \"w-20 h-20 text-[#8b4513]\"\n    }, void 0, false, {\n        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_c = LogInIcon;\nvar _c;\n$RefreshReg$(_c, \"LogInIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0M7QUFDQTtBQUNFO0FBRUw7QUFJaEIsU0FBU0k7O0lBQ3RCLElBQUksQ0FBQ0MsV0FBVUMsYUFBYSxHQUFDSCwrQ0FBUUEsQ0FBZ0I7UUFDbkRJLE9BQU07SUFDUjtJQUNBLElBQUlDLGtCQUFnQixDQUFDQztRQUNuQkgsYUFBYTtZQUFDQyxPQUFNRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFBQTtRQUNsQ0MsUUFBUUMsR0FBRyxDQUFDUixVQUFVRSxLQUFLO0lBQzdCO0lBQ0EscUJBQ0UsOERBQUNPO1FBQWFDLFdBQVU7OzBCQUN0Qiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFOzs7Ozs7Ozs7OzBCQUVILDhEQUFDRDtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBcUQ7Ozs7OztzQ0FDbkUsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ2YsNENBQUtBO29DQUFDZSxXQUFVO29DQUFpREksU0FBUTs4Q0FBVzs7Ozs7OzhDQUdyRiw4REFBQ2xCLDRDQUFLQTtvQ0FDSm1CLFVBQVVaO29DQUNWTyxXQUFVO29DQUNWTSxJQUFHO29DQUNIQyxhQUFZO29DQUNaQyxRQUFRO29DQUNSQyxNQUFLOzs7Ozs7Ozs7Ozs7c0NBR1QsOERBQUNSOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNVO3dDQUNDQyxTQUFTLEtBQUs7d0NBQ2RYLFdBQVU7d0NBQ1ZNLElBQUc7d0NBQ0hNLE1BQUs7d0NBQ0xILE1BQUs7Ozs7OztrREFFUCw4REFBQ0k7d0NBQU1iLFdBQVU7d0NBQWdESSxTQUFRO2tEQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLeEYsOERBQUNqQiw4Q0FBTUE7NEJBQUNhLFdBQVU7NEJBQW1EUyxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFXdkYsOERBQUNLO2dCQUFPZCxXQUFVOzBCQUNoQiw0RUFBQ2U7b0JBQUVmLFdBQVU7OEJBQW9DOzs7Ozs7Ozs7Ozs7T0E5QzNDOzs7OztBQWtEZDtHQTNEd0JYO0FBNkR4QixTQUFTYTtJQUNQLHFCQUNFLDhEQUFDYztRQUFJQyxLQUFJO1FBQXNGakIsV0FBVTs7Ozs7O0FBRTdHO0tBSlNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLnRzeD80OTBhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC91aS9sYWJlbFwiXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL3VpL2lucHV0XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL3VpL2J1dHRvblwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbnR5cGUgbG9naW5EYXRhVHlwZT17XG4gIGVtYWlsOnN0cmluZyxcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xuICBsZXQgW2xvZ2luRGF0YSxzZXRMb2dpbkRhdGFdPXVzZVN0YXRlPGxvZ2luRGF0YVR5cGU+KHtcbiAgICBlbWFpbDpcIlwiXG4gIH0pO1xuICBsZXQgaGFuZGxlTG9naW5EYXRhPShlKT0+e1xuICAgIHNldExvZ2luRGF0YSh7ZW1haWw6ZS50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKGxvZ2luRGF0YS5lbWFpbClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxtYWluIGtleT1cIjFcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctWyNmZmZmZmZdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIDxMb2dJbkljb24gIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTYgdGV4dC1bIzhiNDUxM11cIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTG9naW5EYXRhfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMVwiXG4gICAgICAgICAgICAgIGlkPVwibWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBWSlRJIGVtYWlsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtWyM4YjQ1MTNdIGZvY3VzOnJpbmctWyM4YjQ1MTNdIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICBpZD1cInJlbWVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVtZW1iZXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIiBodG1sRm9yPVwicmVtZW1iZXJcIj5cbiAgICAgICAgICAgICAgICBSZW1lbWJlciBNZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBiZy1bIzhiNDUxM10gdGV4dC13aGl0ZSByb3VuZGVkIG1iLTRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvQnV0dG9uPlxuXHRcdCAgey8qIGFkZCBnb29nbGUgbG9naW4gaWYgZXZlciBuZWVkZWQgKi99XG5cdFx0ICB7LypcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIGJnLVsjNDI4NWY0XSB0ZXh0LXdoaXRlIHJvdW5kZWRcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBMb2dpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgIDwvQnV0dG9uPlxuXHRcdCAgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+bWFkZSBieSB2anRpYW5zIGZvciB2anRpYW5zPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmZ1bmN0aW9uIExvZ0luSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmp0aS5hYy5pbi93cC1jb250ZW50L3VwbG9hZHMvb2xkdXBsb2FkL2Nyb3BwZWQtTmV3LVZKVEktTG9nb18xLTEtNjB4ODcuanBnXCIgY2xhc3NOYW1lPVwidy0yMCBoLTIwIHRleHQtWyM4YjQ1MTNdXCI+PC9pbWc+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMYWJlbCIsIklucHV0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJsb2dpbiIsImxvZ2luRGF0YSIsInNldExvZ2luRGF0YSIsImVtYWlsIiwiaGFuZGxlTG9naW5EYXRhIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJMb2dJbkljb24iLCJoMSIsImh0bWxGb3IiLCJvbkNoYW5nZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInR5cGUiLCJpbnB1dCIsIm9uQ2xpY2siLCJuYW1lIiwibGFiZWwiLCJmb290ZXIiLCJwIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});