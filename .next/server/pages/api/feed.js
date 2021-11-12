"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/feed";
exports.ids = ["pages/api/feed"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./pages/api/feed.ts":
/*!***************************!*\
  !*** ./pages/api/feed.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const tweets = await prisma.tweet.findMany({\n        orderBy: {\n            createdAt: 'desc'\n        }\n    });\n    res.json(tweets);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUUvQixpRUFBTSxPQUFnQkUsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQztRQUMxQ0MsT0FBTyxFQUFFLENBQUM7WUFBQ0MsU0FBUyxFQUFFLENBQU07UUFBQyxDQUFDO0lBQ2hDLENBQUM7SUFDREwsR0FBRyxDQUFDTSxJQUFJLENBQUNMLE1BQU07QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL05leHQtZnVsbHN0YWNrLy4vcGFnZXMvYXBpL2ZlZWQudHM/YmRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB0d2VldHMgPSBhd2FpdCBwcmlzbWEudHdlZXQuZmluZE1hbnkoe1xuICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICB9KTtcbiAgcmVzLmpzb24odHdlZXRzKTtcbn07Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsInR3ZWV0cyIsInR3ZWV0IiwiZmluZE1hbnkiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/feed.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/feed.ts"));
module.exports = __webpack_exports__;

})();