"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/app/layout",{

/***/ "(app-pages-browser)/./src/app/app/(components)/join-server-modal.tsx":
/*!********************************************************!*\
  !*** ./src/app/app/(components)/join-server-modal.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst JoinServerModal = (param)=>{\n    let { visible, setJoinServerModalVisible } = param;\n    _s();\n    const [inviteCode, setInviteCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleJoin = ()=>{\n        console.log(\"joinning\", inviteCode);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(visible ? \"block\" : \"hidden\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#313338] w-[300px] rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute right-2 top-2\",\n                                onClick: ()=>setJoinServerModalVisible(false),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"text-white/30 hover:text-white transition-colors\"\n                                }, void 0, false, {\n                                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold text-center\",\n                                children: \"Entre em um servidor\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-white/50 text-center\",\n                                children: \"Adicione o codigo de convite para entrar em um servidor\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"mt-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-xs text-white/80 font-bold\",\n                                        htmlFor: \"serverName\",\n                                        children: \"CODIGO DE CONVITE\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"text-white bg-[#1e1f22] rounded-sm w-full p-2\",\n                                        placeholder: \"34f4d7bc-35ea-4412-8246-d7f74c36017d\",\n                                        id: \"serverName\",\n                                        onChange: (e)=>setInviteCode(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between bg-[#2b2d31] mt-3 px-5 py-3 rounded-b-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white/80 hover:text-white/50\",\n                                onClick: ()=>setJoinServerModalVisible(false),\n                                children: \"Voltar\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-[#5865f2] py-3 px-6 text-sm rounded-md hover:bg-[#5865f2]/80\",\n                                onClick: handleJoin,\n                                children: \"Entrar\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/(components)/join-server-modal.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(JoinServerModal, \"SSvbfoh8tJ8K7A1L2tJljXALOd0=\");\n_c = JoinServerModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinServerModal);\nvar _c;\n$RefreshReg$(_c, \"JoinServerModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBwLyhjb21wb25lbnRzKS9qb2luLXNlcnZlci1tb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUMwQjtBQUUzRCxNQUFNRSxrQkFBa0I7UUFBQyxFQUN2QkMsT0FBTyxFQUNQQyx5QkFBeUIsRUFJMUI7O0lBQ0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1NLGFBQWE7UUFDakJDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSjtJQUMxQjtJQUVBLHFCQUNFLDhEQUFDSztRQUNDQyxXQUFXLEdBQWdDLE9BQTdCUixVQUFVLFVBQVU7a0JBRWxDLDRFQUFDTztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQ0NELFdBQVU7Z0NBQ1ZFLFNBQVMsSUFBTVQsMEJBQTBCOzBDQUV6Qyw0RUFBQ0osNkVBQUNBO29DQUFDVyxXQUFVOzs7Ozs7Ozs7OzswQ0FFZiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQWlDOzs7Ozs7MENBRy9DLDhEQUFDSTtnQ0FBRUosV0FBVTswQ0FBb0M7Ozs7OzswQ0FHakQsOERBQUNLO2dDQUFLTCxXQUFVOztrREFDZCw4REFBQ007d0NBQ0NOLFdBQVU7d0NBQ1ZPLFNBQVE7a0RBQ1Q7Ozs7OztrREFHRCw4REFBQ0M7d0NBQ0NSLFdBQVU7d0NBQ1ZTLGFBQVk7d0NBQ1pDLElBQUc7d0NBQ0hDLFVBQVUsQ0FBQ0MsSUFBTWpCLGNBQWNpQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbkQsOERBQUNmO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQ0NELFdBQVU7Z0NBQ1ZFLFNBQVMsSUFBTVQsMEJBQTBCOzBDQUMxQzs7Ozs7OzBDQUdELDhEQUFDUTtnQ0FDQ0QsV0FBVTtnQ0FDVkUsU0FBU047MENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWpFTUw7S0FBQUE7QUFtRU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcHAvKGNvbXBvbmVudHMpL2pvaW4tc2VydmVyLW1vZGFsLnRzeD9iYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEpvaW5TZXJ2ZXJNb2RhbCA9ICh7XG4gIHZpc2libGUsXG4gIHNldEpvaW5TZXJ2ZXJNb2RhbFZpc2libGUsXG59OiB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIHNldEpvaW5TZXJ2ZXJNb2RhbFZpc2libGU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxufSkgPT4ge1xuICBjb25zdCBbaW52aXRlQ29kZSwgc2V0SW52aXRlQ29kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUpvaW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2pvaW5uaW5nJywgaW52aXRlQ29kZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7dmlzaWJsZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMzMTMzMzhdIHctWzMwMHB4XSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEpvaW5TZXJ2ZXJNb2RhbFZpc2libGUoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzMwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIEVudHJlIGVtIHVtIHNlcnZpZG9yXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlLzUwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIEFkaWNpb25lIG8gY29kaWdvIGRlIGNvbnZpdGUgcGFyYSBlbnRyYXIgZW0gdW0gc2Vydmlkb3JcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXdoaXRlLzgwIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cInNlcnZlck5hbWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ09ESUdPIERFIENPTlZJVEVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1bIzFlMWYyMl0gcm91bmRlZC1zbSB3LWZ1bGwgcC0yXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjM0ZjRkN2JjLTM1ZWEtNDQxMi04MjQ2LWQ3Zjc0YzM2MDE3ZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzZXJ2ZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEludml0ZUNvZGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYmctWyMyYjJkMzFdIG10LTMgcHgtNSBweS0zIHJvdW5kZWQtYi1tZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtd2hpdGUvNTBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRKb2luU2VydmVyTW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVm9sdGFyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM1ODY1ZjJdIHB5LTMgcHgtNiB0ZXh0LXNtIHJvdW5kZWQtbWQgaG92ZXI6YmctWyM1ODY1ZjJdLzgwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSm9pbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW50cmFyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pblNlcnZlck1vZGFsO1xuIl0sIm5hbWVzIjpbIlgiLCJ1c2VTdGF0ZSIsIkpvaW5TZXJ2ZXJNb2RhbCIsInZpc2libGUiLCJzZXRKb2luU2VydmVyTW9kYWxWaXNpYmxlIiwiaW52aXRlQ29kZSIsInNldEludml0ZUNvZGUiLCJoYW5kbGVKb2luIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInAiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/app/(components)/join-server-modal.tsx\n"));

/***/ })

});