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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ui/label */ \"(app-pages-browser)/./ui/label.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/input */ \"(app-pages-browser)/./ui/input.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/button */ \"(app-pages-browser)/./ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction login() {\n    _s();\n    let [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\"\n    });\n    let handleLoginData = (e)=>{\n        if (e.target.value.endsWith(\".vjti.ac.in\")) {\n            setLoginData({\n                email: e.target.value\n            });\n            console.log(loginData);\n        } else {\n            // Optionally, you can clear the email or handle it in a different way\n            setLoginData({\n                email: \"\"\n            });\n            console.log(loginData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-[#ffffff]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogInIcon, {}, void 0, false, {\n                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-96 bg-white shadow-md rounded-lg overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold text-center mb-6 text-[#8b4513]\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                                    className: \"block text-sm text-gray-600 dark:text-gray-400\",\n                                    htmlFor: \"username\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    onChange: handleLoginData,\n                                    className: \"w-full mt-1\",\n                                    id: \"mail\",\n                                    placeholder: \"Enter your VJTI email\",\n                                    required: true,\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4 flex items-center justify-between\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onClick: ()=>{},\n                                        className: \"h-4 w-4 text-[#8b4513] focus:ring-[#8b4513] border-gray-300 rounded\",\n                                        id: \"remember\",\n                                        name: \"remember\",\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"ml-2 text-sm text-gray-600 dark:text-gray-400\",\n                                        htmlFor: \"remember\",\n                                        children: \"Remember Me\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"w-full py-2 bg-[#8b4513] text-white rounded mb-4\",\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-center text-gray-500\",\n                    children: \"made by vjtians for vjtians\"\n                }, void 0, false, {\n                    fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, \"1\", true, {\n        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(login, \"KIvsxrNRBocBKYM4i1PCXzO2bF4=\");\nfunction LogInIcon() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"https://vjti.ac.in/wp-content/uploads/oldupload/cropped-New-VJTI-Logo_1-1-60x87.jpg\",\n        className: \"w-20 h-20 text-[#8b4513]\"\n    }, void 0, false, {\n        fileName: \"/home/harshal/code/forum/forum-frontend/app/login/page.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_c = LogInIcon;\nvar _c;\n$RefreshReg$(_c, \"LogInIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0M7QUFDQTtBQUNFO0FBRUw7QUFJaEIsU0FBU0k7O0lBQ3RCLElBQUksQ0FBQ0MsV0FBVUMsYUFBYSxHQUFDSCwrQ0FBUUEsQ0FBZ0I7UUFDbkRJLE9BQU07SUFDUjtJQUNBLElBQUlDLGtCQUFnQixDQUFDQztRQUVuQixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQjtZQUMxQ04sYUFBYTtnQkFBQ0MsT0FBTUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1lBQUE7WUFDbENFLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDZCxPQUFPO1lBQ0wsc0VBQXNFO1lBQ3RFQyxhQUFhO2dCQUFDQyxPQUFNO1lBQUU7WUFDdEJNLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDZDtJQUVGO0lBQ0EscUJBQ0UsOERBQUNVO1FBQWFDLFdBQVU7OzBCQUN0Qiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFOzs7Ozs7Ozs7OzBCQUVILDhEQUFDRDtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBcUQ7Ozs7OztzQ0FDbkUsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ2hCLDRDQUFLQTtvQ0FBQ2dCLFdBQVU7b0NBQWlESSxTQUFROzhDQUFXOzs7Ozs7OENBR3JGLDhEQUFDbkIsNENBQUtBO29DQUNKb0IsVUFBVWI7b0NBQ1ZRLFdBQVU7b0NBQ1ZNLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pDLFFBQVE7b0NBQ1JDLE1BQUs7Ozs7Ozs7Ozs7OztzQ0FHVCw4REFBQ1I7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ1U7d0NBQ0NDLFNBQVMsS0FBSzt3Q0FDZFgsV0FBVTt3Q0FDVk0sSUFBRzt3Q0FDSE0sTUFBSzt3Q0FDTEgsTUFBSzs7Ozs7O2tEQUVQLDhEQUFDSTt3Q0FBTWIsV0FBVTt3Q0FBZ0RJLFNBQVE7a0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUt4Riw4REFBQ2xCLDhDQUFNQTs0QkFBQ2MsV0FBVTs0QkFBbURTLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVd2Riw4REFBQ0s7Z0JBQU9kLFdBQVU7MEJBQ2hCLDRFQUFDZTtvQkFBRWYsV0FBVTs4QkFBb0M7Ozs7Ozs7Ozs7OztPQTlDM0M7Ozs7O0FBa0RkO0dBbkV3Qlo7QUFxRXhCLFNBQVNjO0lBQ1AscUJBQ0UsOERBQUNjO1FBQUlDLEtBQUk7UUFBc0ZqQixXQUFVOzs7Ozs7QUFFN0c7S0FKU0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3BhZ2UudHN4PzQ5MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL3VpL2xhYmVsXCJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvdWkvaW5wdXRcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvdWkvYnV0dG9uXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xudHlwZSBsb2dpbkRhdGFUeXBlPXtcbiAgZW1haWw6c3RyaW5nLFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW4oKSB7XG4gIGxldCBbbG9naW5EYXRhLHNldExvZ2luRGF0YV09dXNlU3RhdGU8bG9naW5EYXRhVHlwZT4oe1xuICAgIGVtYWlsOlwiXCJcbiAgfSk7XG4gIGxldCBoYW5kbGVMb2dpbkRhdGE9KGUpPT57XG5cbiAgICBpZiAoZS50YXJnZXQudmFsdWUuZW5kc1dpdGgoJy52anRpLmFjLmluJykpIHtcbiAgICAgIHNldExvZ2luRGF0YSh7ZW1haWw6ZS50YXJnZXQudmFsdWV9KTtcbiAgICAgIGNvbnNvbGUubG9nKGxvZ2luRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3B0aW9uYWxseSwgeW91IGNhbiBjbGVhciB0aGUgZW1haWwgb3IgaGFuZGxlIGl0IGluIGEgZGlmZmVyZW50IHdheVxuICAgICAgc2V0TG9naW5EYXRhKHtlbWFpbDonJ30pO1xuICAgICAgY29uc29sZS5sb2cobG9naW5EYXRhKVxuICAgIH1cbiAgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBrZXk9XCIxXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLVsjZmZmZmZmXVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxuICAgICAgICA8TG9nSW5JY29uICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOTYgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi02IHRleHQtWyM4YjQ1MTNdXCI+TG9naW48L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIiBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxvZ2luRGF0YX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTFcIlxuICAgICAgICAgICAgICBpZD1cIm1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgVkpUSSBlbWFpbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e319XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LVsjOGI0NTEzXSBmb2N1czpyaW5nLVsjOGI0NTEzXSBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwXCIgaHRtbEZvcj1cInJlbWVtYmVyXCI+XG4gICAgICAgICAgICAgICAgUmVtZW1iZXIgTWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgYmctWyM4YjQ1MTNdIHRleHQtd2hpdGUgcm91bmRlZCBtYi00XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L0J1dHRvbj5cblx0XHQgIHsvKiBhZGQgZ29vZ2xlIGxvZ2luIGlmIGV2ZXIgbmVlZGVkICovfVxuXHRcdCAgey8qXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBiZy1bIzQyODVmNF0gdGV4dC13aGl0ZSByb3VuZGVkXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgTG9naW4gd2l0aCBHb29nbGVcbiAgICAgICAgICA8L0J1dHRvbj5cblx0XHQgICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPm1hZGUgYnkgdmp0aWFucyBmb3Igdmp0aWFuczwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBMb2dJbkljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPGltZyBzcmM9XCJodHRwczovL3ZqdGkuYWMuaW4vd3AtY29udGVudC91cGxvYWRzL29sZHVwbG9hZC9jcm9wcGVkLU5ldy1WSlRJLUxvZ29fMS0xLTYweDg3LmpwZ1wiIGNsYXNzTmFtZT1cInctMjAgaC0yMCB0ZXh0LVsjOGI0NTEzXVwiPjwvaW1nPlxuICApXG59XG4iXSwibmFtZXMiOlsiTGFiZWwiLCJJbnB1dCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwibG9naW4iLCJsb2dpbkRhdGEiLCJzZXRMb2dpbkRhdGEiLCJlbWFpbCIsImhhbmRsZUxvZ2luRGF0YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVuZHNXaXRoIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJMb2dJbkljb24iLCJoMSIsImh0bWxGb3IiLCJvbkNoYW5nZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInR5cGUiLCJpbnB1dCIsIm9uQ2xpY2siLCJuYW1lIiwibGFiZWwiLCJmb290ZXIiLCJwIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});