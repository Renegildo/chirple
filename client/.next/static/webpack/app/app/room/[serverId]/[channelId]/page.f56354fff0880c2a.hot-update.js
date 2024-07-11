"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/app/room/[serverId]/[channelId]/page",{

/***/ "(app-pages-browser)/./src/app/app/room/[serverId]/(components)/emojis-modal.tsx":
/*!*******************************************************************!*\
  !*** ./src/app/app/room/[serverId]/(components)/emojis-modal.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst EmojisModal = (param)=>{\n    let { visible, setVisible, serverId, onSelectEmoji } = param;\n    _s();\n    const [emojis, setEmojis] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hoveringEmoji, setHoveringEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchEmojis = async ()=>{\n            if (!serverId) return;\n            setIsLoading(true);\n            const newEmojis = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getEmojisByServerId)(serverId);\n            setEmojis(newEmojis);\n            setIsLoading(false);\n        };\n        fetchEmojis();\n    }, [\n        serverId\n    ]);\n    if (visible) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full\",\n                onClick: ()=>setVisible(false)\n            }, void 0, false, {\n                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-[225px] max-h-48 -left-[500px] shadow-lg shadow-black/50 rounded-md z-30 w-[500px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#2b2d31] grid grid-cols-9 p-2 rounded-t-md gap-1 max-h-96 overflow-y-scroll\",\n                        children: !isLoading && emojis.map((emoji)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:bg-white/10 p-1 rounded-md\",\n                                onMouseEnter: ()=>setHoveringEmoji(emoji),\n                                onClick: ()=>onSelectEmoji(emoji),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: emoji.imageUrl,\n                                    alt: emoji.code,\n                                    width: 50,\n                                    height: 50,\n                                    className: \"rounded-md aspect-square\"\n                                }, void 0, false, {\n                                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, emoji.id, false, {\n                                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#111214] p-2 rounded-b-md\",\n                        children: hoveringEmoji && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: hoveringEmoji === null || hoveringEmoji === void 0 ? void 0 : hoveringEmoji.imageUrl,\n                                    alt: \"emoji\",\n                                    width: 20,\n                                    height: 20,\n                                    className: \"w-5 h-5\"\n                                }, void 0, false, {\n                                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: [\n                                        \":\",\n                                        hoveringEmoji === null || hoveringEmoji === void 0 ? void 0 : hoveringEmoji.code,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 30\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/renegildo/code/web/chirple/client/src/app/app/room/[serverId]/(components)/emojis-modal.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(EmojisModal, \"BUIFtzvyZIws46Z521ODjQ4mo5g=\");\n_c = EmojisModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmojisModal);\nvar _c;\n$RefreshReg$(_c, \"EmojisModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBwL3Jvb20vW3NlcnZlcklkXS8oY29tcG9uZW50cykvZW1vamlzLW1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVzRTtBQUVwQjtBQUNuQjtBQUUvQixNQUFNSSxjQUFjO1FBQUMsRUFDbkJDLE9BQU8sRUFDUEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLGFBQWEsRUFNZDs7SUFDQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQVUsRUFBRTtJQUNoRCxNQUFNLENBQUNVLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBZTtJQUNqRSxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQVU7SUFFcERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsY0FBYztZQUNsQixJQUFJLENBQUNSLFVBQVU7WUFFZk8sYUFBYTtZQUNiLE1BQU1FLFlBQVksTUFBTWQsK0RBQW1CQSxDQUFDSztZQUU1Q0csVUFBVU07WUFDVkYsYUFBYTtRQUNmO1FBRUFDO0lBQ0YsR0FBRztRQUFDUjtLQUFTO0lBRWIsSUFBSUYsU0FBUyxxQkFDWDs7MEJBQ0UsOERBQUNZO2dCQUNDQyxXQUFVO2dCQUNWQyxTQUFTLElBQU1iLFdBQVc7Ozs7OzswQkFHNUIsOERBQUNXO2dCQUNDQyxXQUFXOztrQ0FFWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1osQ0FBQ0wsYUFBYUosT0FBT1csR0FBRyxDQUFDQyxDQUFBQSxzQkFDeEIsOERBQUNDO2dDQUNDSixXQUFVO2dDQUNWSyxjQUFjLElBQU1YLGlCQUFpQlM7Z0NBQ3JDRixTQUFTLElBQU1YLGNBQWNhOzBDQUc3Qiw0RUFBQ2xCLGtEQUFLQTtvQ0FDSnFCLEtBQUtILE1BQU1JLFFBQVE7b0NBQ25CQyxLQUFLTCxNQUFNTSxJQUFJO29DQUNmQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSWCxXQUFVOzs7Ozs7K0JBUFBHLE1BQU1TLEVBQUU7Ozs7Ozs7Ozs7a0NBWW5CLDhEQUFDYjt3QkFBSUMsV0FBVTtrQ0FDWlAsK0JBQWtCLDhEQUFDTTs0QkFBSUMsV0FBVTs7OENBQ2hDLDhEQUFDZixrREFBS0E7b0NBQ0pxQixHQUFHLEVBQUViLDBCQUFBQSxvQ0FBQUEsY0FBZWMsUUFBUTtvQ0FDNUJDLEtBQUk7b0NBQ0pFLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2E7b0NBQUtiLFdBQVU7O3dDQUFnQjt3Q0FDNUJQLDBCQUFBQSxvQ0FBQUEsY0FBZWdCLElBQUk7d0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDO0dBMUVNdkI7S0FBQUE7QUE0RU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcHAvcm9vbS9bc2VydmVySWRdLyhjb21wb25lbnRzKS9lbW9qaXMtbW9kYWwudHN4PzRkMWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRW1vamkgfSBmcm9tICdAL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IGdldEVtb2ppc0J5U2VydmVySWQgfSBmcm9tIFwiQC91dGlscy9hcGlcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgRW1vamlzTW9kYWwgPSAoe1xuICB2aXNpYmxlLFxuICBzZXRWaXNpYmxlLFxuICBzZXJ2ZXJJZCxcbiAgb25TZWxlY3RFbW9qaVxufToge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBzZXRWaXNpYmxlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG4gIHNlcnZlcklkOiBzdHJpbmc7XG4gIG9uU2VsZWN0RW1vamk6IChlbW9qaTogRW1vamkpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IFtlbW9qaXMsIHNldEVtb2ppc10gPSB1c2VTdGF0ZTxFbW9qaVtdPihbXSk7XG4gIGNvbnN0IFtob3ZlcmluZ0Vtb2ppLCBzZXRIb3ZlcmluZ0Vtb2ppXSA9IHVzZVN0YXRlPEVtb2ppIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEVtb2ppcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghc2VydmVySWQpIHJldHVybjtcblxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgbmV3RW1vamlzID0gYXdhaXQgZ2V0RW1vamlzQnlTZXJ2ZXJJZChzZXJ2ZXJJZCk7XG5cbiAgICAgIHNldEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmZXRjaEVtb2ppcygpO1xuICB9LCBbc2VydmVySWRdKTtcblxuICBpZiAodmlzaWJsZSkgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxuICAgICAgLz5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1wiYWJzb2x1dGUgLXRvcC1bMjI1cHhdIG1heC1oLTQ4IC1sZWZ0LVs1MDBweF0gc2hhZG93LWxnIHNoYWRvdy1ibGFjay81MCByb3VuZGVkLW1kIHotMzAgdy1bNTAwcHhdXCJ9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyYjJkMzFdIGdyaWQgZ3JpZC1jb2xzLTkgcC0yIHJvdW5kZWQtdC1tZCBnYXAtMSBtYXgtaC05NiBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgICAgIHshaXNMb2FkaW5nICYmIGVtb2ppcy5tYXAoZW1vamkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy13aGl0ZS8xMCBwLTEgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJpbmdFbW9qaShlbW9qaSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0RW1vamkoZW1vamkpfVxuICAgICAgICAgICAgICBrZXk9e2Vtb2ppLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e2Vtb2ppLmltYWdlVXJsfVxuICAgICAgICAgICAgICAgIGFsdD17ZW1vamkuY29kZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGFzcGVjdC1zcXVhcmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMTExMjE0XSBwLTIgcm91bmRlZC1iLW1kXCI+XG4gICAgICAgICAge2hvdmVyaW5nRW1vamkgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2hvdmVyaW5nRW1vamk/LmltYWdlVXJsfVxuICAgICAgICAgICAgICBhbHQ9XCJlbW9qaVwiXG4gICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICA6e2hvdmVyaW5nRW1vamk/LmNvZGV9OlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtb2ppc01vZGFsO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0RW1vamlzQnlTZXJ2ZXJJZCIsIkltYWdlIiwiRW1vamlzTW9kYWwiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNlcnZlcklkIiwib25TZWxlY3RFbW9qaSIsImVtb2ppcyIsInNldEVtb2ppcyIsImhvdmVyaW5nRW1vamkiLCJzZXRIb3ZlcmluZ0Vtb2ppIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hFbW9qaXMiLCJuZXdFbW9qaXMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFwIiwiZW1vamkiLCJidXR0b24iLCJvbk1vdXNlRW50ZXIiLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsImNvZGUiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/app/room/[serverId]/(components)/emojis-modal.tsx\n"));

/***/ })

});