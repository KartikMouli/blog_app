"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/write/page",{

/***/ "(app-pages-browser)/./src/app/write/page.jsx":
/*!********************************!*\
  !*** ./src/app/write/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _writepage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./writepage.module.css */ \"(app-pages-browser)/./src/app/write/writepage.module.css\");\n/* harmony import */ var _writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_writepage_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// import Image from \"next/image\";\n// import ReactQuill from \"react-quill\";\n// import \"react-quill/dist/quill.bubble.css\";\n\n\nconst Writepage = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, undefined);\n    }\n    // if (status === \"authenticated\") {\n    //   router.push(\"/\");\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().editor),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        onClick: ()=>setOpen(!open),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                            src: \"/plus.png\",\n                            alt: \"\",\n                            width: 16,\n                            height: 16\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().addbutton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                    src: \"/image.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().addbutton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                    src: \"/external.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().addbutton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                    src: \"/video.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n                        className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().textarea),\n                        theme: \"bubble\",\n                        value: value,\n                        onChange: setValue,\n                        placeholder: \"Tell your story...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_writepage_module_css__WEBPACK_IMPORTED_MODULE_4___default().publish),\n                children: \"Publish\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\karti\\\\OneDrive\\\\Documents\\\\GitHub\\\\blog_app\\\\src\\\\app\\\\write\\\\page.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Writepage, \"s9cHFeUMFP4CoNnR6Ut9MKLTH70=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Writepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Writepage);\nvar _c;\n$RefreshReg$(_c, \"Writepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFDNUMsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4Qyw4Q0FBOEM7QUFDRDtBQUNEO0FBRTVDLE1BQU1LLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkMsTUFBTSxFQUFDUyxNQUFNLEVBQUUsR0FBR1AsMkRBQVVBO0lBRTVCLE1BQU1RLFNBQVNQLDBEQUFTQTtJQUV4QixJQUFJTSxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNFO1lBQUlDLFdBQVdYLHNFQUFjO3NCQUFFOzs7Ozs7SUFDekM7SUFFQSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLElBQUk7SUFFSixxQkFDRSw4REFBQ1U7UUFBSUMsV0FBV1gsd0VBQWdCOzswQkFDOUIsOERBQUNjO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFRTCxXQUFXWCxvRUFBWTs7Ozs7OzBCQUM5RCw4REFBQ1U7Z0JBQUlDLFdBQVdYLHFFQUFhOztrQ0FDM0IsOERBQUNrQjt3QkFBT1AsV0FBV1gscUVBQWE7d0JBQUVtQixTQUFTLElBQU1kLFFBQVEsQ0FBQ0Q7a0NBQ3hELDRFQUFDZ0I7NEJBQU1DLEtBQUk7NEJBQVlDLEtBQUk7NEJBQUdDLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7O29CQUVsRHBCLHNCQUNDLDhEQUFDTTt3QkFBSUMsV0FBV1gsa0VBQVU7OzBDQUN4Qiw4REFBQ2tCO2dDQUFPUCxXQUFXWCx3RUFBZ0I7MENBQ2pDLDRFQUFDb0I7b0NBQU1DLEtBQUk7b0NBQWFDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7OzBDQUVwRCw4REFBQ047Z0NBQU9QLFdBQVdYLHdFQUFnQjswQ0FDakMsNEVBQUNvQjtvQ0FBTUMsS0FBSTtvQ0FBZ0JDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7OzBDQUV2RCw4REFBQ047Z0NBQU9QLFdBQVdYLHdFQUFnQjswQ0FDakMsNEVBQUNvQjtvQ0FBTUMsS0FBSTtvQ0FBYUMsS0FBSTtvQ0FBR0MsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3hELDhEQUFDRzt3QkFDQ2hCLFdBQVdYLHVFQUFlO3dCQUMxQjZCLE9BQU07d0JBQ052QixPQUFPQTt3QkFDUHdCLFVBQVV2Qjt3QkFDVlMsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQ0U7Z0JBQU9QLFdBQVdYLHNFQUFjOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHekM7R0FoRE1HOztRQUljRix1REFBVUE7UUFFYkMsc0RBQVNBOzs7S0FOcEJDO0FBa0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvd3JpdGUvcGFnZS5qc3g/N2U4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3dyaXRlcGFnZS5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG4vLyBpbXBvcnQgUmVhY3RRdWlsbCBmcm9tIFwicmVhY3QtcXVpbGxcIjtcclxuLy8gaW1wb3J0IFwicmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IFdyaXRlcGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qge3N0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICAvLyBpZiAoc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xyXG4gIC8vICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcGx1cy5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZGJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZGJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9leHRlcm5hbC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZGJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92aWRlby5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhfVxyXG4gICAgICAgICAgdGhlbWU9XCJidWJibGVcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldFZhbHVlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIHlvdXIgc3RvcnkuLi5cIlxyXG4gICAgICAgID48L1JlYWN0UXVpbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnB1Ymxpc2h9PlB1Ymxpc2g8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZXBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIldyaXRlcGFnZSIsIm9wZW4iLCJzZXRPcGVuIiwidmFsdWUiLCJzZXRWYWx1ZSIsInN0YXR1cyIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJjb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImVkaXRvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJJbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkIiwiYWRkYnV0dG9uIiwiUmVhY3RRdWlsbCIsInRleHRhcmVhIiwidGhlbWUiLCJvbkNoYW5nZSIsInB1Ymxpc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/write/page.jsx\n"));

/***/ })

});