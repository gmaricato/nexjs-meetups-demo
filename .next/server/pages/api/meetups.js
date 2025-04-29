"use strict";
(() => {
var exports = {};
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 7456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    if (req?.method === "GET" || !req?.method || !req) {
        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://guimaricato:Z3zDfDDNV2UXxeV2@cluster0.ikv5cvb.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const response = await meetupCollection.find().toArray();
        client.close();
        const meetups = response.map((meetup)=>({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }));
        // res.status(200).json({ data: meetups });
        return meetups;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7456));
module.exports = __webpack_exports__;

})();