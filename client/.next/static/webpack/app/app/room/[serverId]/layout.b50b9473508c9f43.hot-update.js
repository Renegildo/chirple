"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/app/room/[serverId]/layout",{

/***/ "(app-pages-browser)/./src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx":
/*!*********************************************************************************!*\
  !*** ./src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst ServerConfigurationModal = (param)=>{\n    let { setVisible, visible, server } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((server === null || server === void 0 ? void 0 : server.name) || \"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((server === null || server === void 0 ? void 0 : server.imageUrl) || \"\");\n    const handleEdit = async ()=>{\n        if (!server || !server.id) return;\n        const updatedServer = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.editServer)(server.id, {\n            name,\n            imageUrl\n        });\n        console.log(\"updatedServer: \", updatedServer);\n        setVisible(false);\n    };\n    if (visible && server) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black/50 fixed top-0 left-0 w-full h-full z-20\",\n                onClick: ()=>setVisible(false)\n            }, void 0, false, {\n                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#313338] p-5 rounded-t-md shadow-xl shadow-black/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Configuracoes de servidor\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white/50 text-sm\",\n                                children: \"Altere as configuracoes do seu servidor\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 flex flex-col gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-xs text-white/80 font-bold\",\n                                                children: \"NOME\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"text-white bg-[#1e1f22] rounded-sm w-full p-2\",\n                                                defaultValue: server.name,\n                                                placeholder: \"Nome do servidor\",\n                                                onChange: (e)=>setName(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-xs text-white/80 font-bold\",\n                                                children: \"IMAGEM\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"text-white bg-[#1e1f22] rounded-sm w-full p-2\",\n                                                defaultValue: server.imageUrl,\n                                                placeholder: \"https://imagens.com/exemplo\",\n                                                onChange: (e)=>setImageUrl(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-5 flex justify-between bg-[#2b2d31] rounded-b-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white/80 hover:text-white/50\",\n                                onClick: ()=>setVisible(false),\n                                children: \"Cancelar\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-[#5865f2] hover:bg-[#4f5acb] text-sm px-5 py-3 rounded-md transition-colors\",\n                                onClick: handleEdit,\n                                children: \"Confirmar\"\n                            }, void 0, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ServerConfigurationModal, \"mDu3z4HHOGipygoVm+rD1KAevYU=\");\n_c = ServerConfigurationModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerConfigurationModal);\nvar _c;\n$RefreshReg$(_c, \"ServerConfigurationModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBwL3Jvb20vW3NlcnZlcklkXS8oY29tcG9uZW50cykvc2VydmVyLWNvbmZpZ3VyYXRpb24tbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkQ7QUFFbEI7QUFFekMsTUFBTUUsMkJBQTJCO1FBQUMsRUFDaENDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxNQUFNLEVBS1A7O0lBQ0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFTSyxDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFDLElBQUksS0FBSTtJQUN6RCxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVNLLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUcsUUFBUSxLQUFJO0lBRXJFLE1BQU1FLGFBQWE7UUFDakIsSUFBSSxDQUFDTCxVQUFVLENBQUNBLE9BQU9NLEVBQUUsRUFBRTtRQUUzQixNQUFNQyxnQkFBZ0IsTUFBTVgsc0RBQVVBLENBQUNJLE9BQU9NLEVBQUUsRUFBRTtZQUFFTDtZQUFNRTtRQUFTO1FBQ25FSyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CRjtRQUMvQlQsV0FBVztJQUNiO0lBQ0EsSUFBSUMsV0FBV0MsUUFBUSxxQkFDckI7OzBCQUNFLDhEQUFDVTtnQkFDQ0MsV0FBVTtnQkFDVkMsU0FBUyxJQUFNZCxXQUFXOzs7Ozs7MEJBRTVCLDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQXFCOzs7Ozs7MENBR25DLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBd0I7Ozs7OzswQ0FJckMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7OzBEQUNDLDhEQUFDSztnREFBTUosV0FBVTswREFBa0M7Ozs7OzswREFHbkQsOERBQUNLO2dEQUNDTCxXQUFVO2dEQUNWTSxjQUFjakIsT0FBT0MsSUFBSTtnREFDekJpQixhQUFZO2dEQUNaQyxVQUFVLENBQUNDLElBQU1sQixRQUFRa0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7a0RBSTNDLDhEQUFDWjs7MERBQ0MsOERBQUNLO2dEQUFNSixXQUFVOzBEQUFrQzs7Ozs7OzBEQUduRCw4REFBQ0s7Z0RBQ0NMLFdBQVU7Z0RBQ1ZNLGNBQWNqQixPQUFPRyxRQUFRO2dEQUM3QmUsYUFBWTtnREFDWkMsVUFBVSxDQUFDQyxJQUFNaEIsWUFBWWdCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1uRCw4REFBQ1o7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDWTtnQ0FDQ1osV0FBVTtnQ0FDVkMsU0FBUyxJQUFNZCxXQUFXOzBDQUMzQjs7Ozs7OzBDQUdELDhEQUFDeUI7Z0NBQ0NaLFdBQVU7Z0NBQ1ZDLFNBQVNQOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBOUVNUjtLQUFBQTtBQWdGTiwrREFBZUEsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXBwL3Jvb20vW3NlcnZlcklkXS8oY29tcG9uZW50cykvc2VydmVyLWNvbmZpZ3VyYXRpb24tbW9kYWwudHN4PzRjZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnQC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBlZGl0U2VydmVyIH0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5cbmNvbnN0IFNlcnZlckNvbmZpZ3VyYXRpb25Nb2RhbCA9ICh7XG4gIHNldFZpc2libGUsXG4gIHZpc2libGUsXG4gIHNlcnZlclxufToge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBzZXRWaXNpYmxlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG4gIHNlcnZlcjogU2VydmVyIHwgbnVsbDtcbn0pID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihzZXJ2ZXI/Lm5hbWUgfHwgXCJcIik7XG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGU8c3RyaW5nPihzZXJ2ZXI/LmltYWdlVXJsIHx8IFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZXJ2ZXIgfHwgIXNlcnZlci5pZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdXBkYXRlZFNlcnZlciA9IGF3YWl0IGVkaXRTZXJ2ZXIoc2VydmVyLmlkLCB7IG5hbWUsIGltYWdlVXJsIH0pO1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlZFNlcnZlcjogXCIsIHVwZGF0ZWRTZXJ2ZXIpO1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICB9XG4gIGlmICh2aXNpYmxlICYmIHNlcnZlcikgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay81MCBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCB6LTIwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBsZWZ0LTEvMiB0b3AtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB6LTMwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMzMTMzMzhdIHAtNSByb3VuZGVkLXQtbWQgc2hhZG93LXhsIHNoYWRvdy1ibGFjay8zMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIENvbmZpZ3VyYWNvZXMgZGUgc2Vydmlkb3JcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNTAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgQWx0ZXJlIGFzIGNvbmZpZ3VyYWNvZXMgZG8gc2V1IHNlcnZpZG9yXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvODAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgTk9NRVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLVsjMWUxZjIyXSByb3VuZGVkLXNtIHctZnVsbCBwLTJcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRvIHNlcnZpZG9yXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvODAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgSU1BR0VNXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctWyMxZTFmMjJdIHJvdW5kZWQtc20gdy1mdWxsIHAtMlwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2ZXIuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL2ltYWdlbnMuY29tL2V4ZW1wbG9cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2VVcmwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGZsZXgganVzdGlmeS1iZXR3ZWVuIGJnLVsjMmIyZDMxXSByb3VuZGVkLWItbWRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtd2hpdGUvNTBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzU4NjVmMl0gaG92ZXI6YmctWyM0ZjVhY2JdIHRleHQtc20gcHgtNSBweS0zIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25maXJtYXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyQ29uZmlndXJhdGlvbk1vZGFsO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZWRpdFNlcnZlciIsIlNlcnZlckNvbmZpZ3VyYXRpb25Nb2RhbCIsInNldFZpc2libGUiLCJ2aXNpYmxlIiwic2VydmVyIiwibmFtZSIsInNldE5hbWUiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiaGFuZGxlRWRpdCIsImlkIiwidXBkYXRlZFNlcnZlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJwIiwibGFiZWwiLCJpbnB1dCIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/app/room/[serverId]/(components)/server-configuration-modal.tsx\n"));

/***/ })

});