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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst invitePage = ()=>{\n    _s();\n    const [invite, setInvite] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { inviteId } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchInvite = async ()=>{\n            const newInvite = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getInviteById)(inviteId);\n            setInvite(newInvite);\n        };\n        fetchInvite();\n        setIsLoading(false);\n    }, []);\n    const handleAcceptInvite = async ()=>{\n        if (!(invite === null || invite === void 0 ? void 0 : invite.id)) return;\n        await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.joinServer)(invite.server.id);\n        const firstChannelUrl = \"/app/room/\".concat(invite.server.id, \"/\").concat(invite.server.channels[0].id);\n        router.push(firstChannelUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[#313338] flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#1e1f22] min-w-0 max-w-screen-sm rounded-lg shadow-lg shadow-black/40 p-10 flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-white/70 text-sm\",\n                    children: \"Alguem te convidou para entrar\"\n                }, void 0, false, {\n                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold my-5\",\n                    children: !(invite === null || invite === void 0 ? void 0 : invite.server) || !isLoading ? \"servidor nao encontrado\" : invite === null || invite === void 0 ? void 0 : invite.server.name\n                }, void 0, false, {\n                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-[#5865f2] hover:bg-[#4752c4] transition-colors py-2 px-4 rounded-md\",\n                    onClick: handleAcceptInvite,\n                    children: \"Aceitar convite\"\n                }, void 0, false, {\n                    fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/renegildo/code/web/chirple/client/src/app/invite/[inviteId]/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(invitePage, \"zibC19Dt/MzZ4CETFls14NWeDLU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (invitePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW52aXRlL1tpbnZpdGVJZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0Q7QUFFRDtBQUNYO0FBRTVDLE1BQU1NLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFDcEQsTUFBTSxFQUFFSSxRQUFRLEVBQUUsR0FBR1AsMERBQVNBO0lBQzlCLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUVwRCxNQUFNTyxTQUFTVCwwREFBU0E7SUFFeEJDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsY0FBYztZQUNsQixNQUFNQyxZQUFZLE1BQU1kLHlEQUFhQSxDQUFDUztZQUV0Q0QsVUFBVU07UUFDWjtRQUVBRDtRQUNBRixhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTUkscUJBQXFCO1FBQ3pCLElBQUksRUFBQ1IsbUJBQUFBLDZCQUFBQSxPQUFRUyxFQUFFLEdBQUU7UUFFakIsTUFBTWYsc0RBQVVBLENBQUNNLE9BQU9VLE1BQU0sQ0FBQ0QsRUFBRTtRQUNqQyxNQUFNRSxrQkFBa0IsYUFBaUNYLE9BQXBCQSxPQUFPVSxNQUFNLENBQUNELEVBQUUsRUFBQyxLQUFnQyxPQUE3QlQsT0FBT1UsTUFBTSxDQUFDRSxRQUFRLENBQUMsRUFBRSxDQUFDSCxFQUFFO1FBQ3JGSixPQUFPUSxJQUFJLENBQUNGO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF3Qjs7Ozs7OzhCQUN0Qyw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQ1gsRUFBQ2YsbUJBQUFBLDZCQUFBQSxPQUFRVSxNQUFNLEtBQUksQ0FBQ1AsWUFBWSw0QkFBNEJILG1CQUFBQSw2QkFBQUEsT0FBUVUsTUFBTSxDQUFDUSxJQUFJOzs7Ozs7OEJBRWxGLDhEQUFDQztvQkFDQ0osV0FBVTtvQkFDVkssU0FBU1o7OEJBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0ExQ01UOztRQUVpQkosc0RBQVNBO1FBR2ZDLHNEQUFTQTs7O0FBdUMxQiwrREFBZUcsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2ludml0ZS9baW52aXRlSWRdL3BhZ2UudHN4Pzg4ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGdldEludml0ZUJ5SWQsIGpvaW5TZXJ2ZXIgfSBmcm9tIFwiQC91dGlscy9hcGlcIjtcbmltcG9ydCB7IEludml0ZSB9IGZyb20gXCJAL3V0aWxzL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW52aXRlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2ludml0ZSwgc2V0SW52aXRlXSA9IHVzZVN0YXRlPEludml0ZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IGludml0ZUlkIH0gPSB1c2VQYXJhbXMoKSBhcyB7IGludml0ZUlkOiBzdHJpbmcgfTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbnZpdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdJbnZpdGUgPSBhd2FpdCBnZXRJbnZpdGVCeUlkKGludml0ZUlkKTtcblxuICAgICAgc2V0SW52aXRlKG5ld0ludml0ZSk7XG4gICAgfVxuXG4gICAgZmV0Y2hJbnZpdGUoKTtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQWNjZXB0SW52aXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaW52aXRlPy5pZCkgcmV0dXJuO1xuXG4gICAgYXdhaXQgam9pblNlcnZlcihpbnZpdGUuc2VydmVyLmlkKTtcbiAgICBjb25zdCBmaXJzdENoYW5uZWxVcmwgPSBgL2FwcC9yb29tLyR7aW52aXRlLnNlcnZlci5pZH0vJHtpbnZpdGUuc2VydmVyLmNoYW5uZWxzWzBdLmlkfWA7XG4gICAgcm91dGVyLnB1c2goZmlyc3RDaGFubmVsVXJsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gYmctWyMzMTMzMzhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMWUxZjIyXSBtaW4tdy0wIG1heC13LXNjcmVlbi1zbSByb3VuZGVkLWxnIHNoYWRvdy1sZyBzaGFkb3ctYmxhY2svNDAgcC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MCB0ZXh0LXNtXCI+QWxndWVtIHRlIGNvbnZpZG91IHBhcmEgZW50cmFyPC9oMj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG15LTVcIj5cbiAgICAgICAgICB7IWludml0ZT8uc2VydmVyIHx8ICFpc0xvYWRpbmcgPyBcInNlcnZpZG9yIG5hbyBlbmNvbnRyYWRvXCIgOiBpbnZpdGU/LnNlcnZlci5uYW1lfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM1ODY1ZjJdIGhvdmVyOmJnLVsjNDc1MmM0XSB0cmFuc2l0aW9uLWNvbG9ycyBweS0yIHB4LTQgcm91bmRlZC1tZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWNjZXB0SW52aXRlfVxuICAgICAgICA+XG4gICAgICAgICAgQWNlaXRhciBjb252aXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludml0ZVBhZ2U7XG4iXSwibmFtZXMiOlsiZ2V0SW52aXRlQnlJZCIsImpvaW5TZXJ2ZXIiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImludml0ZVBhZ2UiLCJpbnZpdGUiLCJzZXRJbnZpdGUiLCJpbnZpdGVJZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsImZldGNoSW52aXRlIiwibmV3SW52aXRlIiwiaGFuZGxlQWNjZXB0SW52aXRlIiwiaWQiLCJzZXJ2ZXIiLCJmaXJzdENoYW5uZWxVcmwiLCJjaGFubmVscyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImgxIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/invite/[inviteId]/page.tsx\n"));

/***/ })

});