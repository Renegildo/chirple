"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/invite/[inviteId]/page",{

/***/ "(app-pages-browser)/./src/app/invite/[inviteId]/page.tsx":
/*!********************************************!*\
  !*** ./src/app/invite/[inviteId]/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst invitePage = ()=>{\n    _s();\n    const [invite, setInvite] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { inviteId } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchInvite = async ()=>{\n            const newInvite = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getInviteById)(inviteId);\n            setInvite(newInvite);\n        };\n        fetchInvite();\n        setIsLoading(false);\n    }, []);\n    const handleAcceptInvite = async ()=>{\n        if (!(invite === null || invite === void 0 ? void 0 : invite.id)) return router.push(\"/app\");\n        await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.joinServer)(invite.server.id);\n        const firstChannelUrl = \"/app/room/\".concat(invite.server.id, \"/\").concat(invite.server.channels[0].id);\n        router.push(firstChannelUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[#313338] flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#1e1f22] min-w-0 max-w-screen-sm rounded-lg shadow-lg shadow-black/40 p-10 flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-white/70 text-sm\",\n                    children: \"Alguem te convidou para entrar\"\n                }, void 0, false, {\n                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold my-5\",\n                    children: isLoading ? \"Carregando...\" : invite === null || invite === void 0 ? void 0 : invite.server.name\n                }, void 0, false, {\n                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-[#5865f2] hover:bg-[#4752c4] transition-colors py-3 px-4 rounded-md\",\n                    onClick: handleAcceptInvite,\n                    children: !isLoading && !invite ? \"Voltar\" : \"Aceitar convite\"\n                }, void 0, false, {\n                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(invitePage, \"zibC19Dt/MzZ4CETFls14NWeDLU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (invitePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW52aXRlL1tpbnZpdGVJZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0Q7QUFFRDtBQUNYO0FBRTVDLE1BQU1NLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFDcEQsTUFBTSxFQUFFSSxRQUFRLEVBQUUsR0FBR1AsMERBQVNBO0lBQzlCLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUVwRCxNQUFNTyxTQUFTVCwwREFBU0E7SUFFeEJDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsY0FBYztZQUNsQixNQUFNQyxZQUFZLE1BQU1kLHlEQUFhQSxDQUFDUztZQUV0Q0QsVUFBVU07UUFDWjtRQUVBRDtRQUNBRixhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTUkscUJBQXFCO1FBQ3pCLElBQUksRUFBQ1IsbUJBQUFBLDZCQUFBQSxPQUFRUyxFQUFFLEdBQUUsT0FBT0osT0FBT0ssSUFBSSxDQUFDO1FBRXBDLE1BQU1oQixzREFBVUEsQ0FBQ00sT0FBT1csTUFBTSxDQUFDRixFQUFFO1FBQ2pDLE1BQU1HLGtCQUFrQixhQUFpQ1osT0FBcEJBLE9BQU9XLE1BQU0sQ0FBQ0YsRUFBRSxFQUFDLEtBQWdDLE9BQTdCVCxPQUFPVyxNQUFNLENBQUNFLFFBQVEsQ0FBQyxFQUFFLENBQUNKLEVBQUU7UUFDckZKLE9BQU9LLElBQUksQ0FBQ0U7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXdCOzs7Ozs7OEJBR3RDLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFDWFosWUFBWSxrQkFBa0JILG1CQUFBQSw2QkFBQUEsT0FBUVcsTUFBTSxDQUFDTyxJQUFJOzs7Ozs7OEJBRXBELDhEQUFDQztvQkFDQ0osV0FBVTtvQkFDVkssU0FBU1o7OEJBRVIsQ0FBQ0wsYUFBYSxDQUFDSCxTQUFTLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBNUNNRDs7UUFFaUJKLHNEQUFTQTtRQUdmQyxzREFBU0E7OztBQXlDMUIsK0RBQWVHLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9pbnZpdGUvW2ludml0ZUlkXS9wYWdlLnRzeD84OGUzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBnZXRJbnZpdGVCeUlkLCBqb2luU2VydmVyIH0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5pbXBvcnQgeyBJbnZpdGUgfSBmcm9tIFwiQC91dGlscy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGludml0ZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnZpdGUsIHNldEludml0ZV0gPSB1c2VTdGF0ZTxJbnZpdGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyBpbnZpdGVJZCB9ID0gdXNlUGFyYW1zKCkgYXMgeyBpbnZpdGVJZDogc3RyaW5nIH07XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW52aXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3SW52aXRlID0gYXdhaXQgZ2V0SW52aXRlQnlJZChpbnZpdGVJZCk7XG5cbiAgICAgIHNldEludml0ZShuZXdJbnZpdGUpO1xuICAgIH1cblxuICAgIGZldGNoSW52aXRlKCk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdEludml0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWludml0ZT8uaWQpIHJldHVybiByb3V0ZXIucHVzaChcIi9hcHBcIik7XG5cbiAgICBhd2FpdCBqb2luU2VydmVyKGludml0ZS5zZXJ2ZXIuaWQpO1xuICAgIGNvbnN0IGZpcnN0Q2hhbm5lbFVybCA9IGAvYXBwL3Jvb20vJHtpbnZpdGUuc2VydmVyLmlkfS8ke2ludml0ZS5zZXJ2ZXIuY2hhbm5lbHNbMF0uaWR9YDtcbiAgICByb3V0ZXIucHVzaChmaXJzdENoYW5uZWxVcmwpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy1bIzMxMzMzOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxZTFmMjJdIG1pbi13LTAgbWF4LXctc2NyZWVuLXNtIHJvdW5kZWQtbGcgc2hhZG93LWxnIHNoYWRvdy1ibGFjay80MCBwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzcwIHRleHQtc21cIj5cbiAgICAgICAgICBBbGd1ZW0gdGUgY29udmlkb3UgcGFyYSBlbnRyYXJcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG15LTVcIj5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gXCJDYXJyZWdhbmRvLi4uXCIgOiBpbnZpdGU/LnNlcnZlci5uYW1lfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM1ODY1ZjJdIGhvdmVyOmJnLVsjNDc1MmM0XSB0cmFuc2l0aW9uLWNvbG9ycyBweS0zIHB4LTQgcm91bmRlZC1tZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWNjZXB0SW52aXRlfVxuICAgICAgICA+XG4gICAgICAgICAgeyFpc0xvYWRpbmcgJiYgIWludml0ZSA/IFwiVm9sdGFyXCIgOiBcIkFjZWl0YXIgY29udml0ZVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbnZpdGVQYWdlO1xuIl0sIm5hbWVzIjpbImdldEludml0ZUJ5SWQiLCJqb2luU2VydmVyIiwidXNlUGFyYW1zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbnZpdGVQYWdlIiwiaW52aXRlIiwic2V0SW52aXRlIiwiaW52aXRlSWQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJmZXRjaEludml0ZSIsIm5ld0ludml0ZSIsImhhbmRsZUFjY2VwdEludml0ZSIsImlkIiwicHVzaCIsInNlcnZlciIsImZpcnN0Q2hhbm5lbFVybCIsImNoYW5uZWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoMSIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/invite/[inviteId]/page.tsx\n"));

/***/ })

});