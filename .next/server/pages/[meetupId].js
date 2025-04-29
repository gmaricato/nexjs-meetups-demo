(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 9395:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "MeetupDetails_details__yaYcQ"
};


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MeetupDetailsPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__(9395);
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js


function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetails_module_default()).details,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                layout: "fill",
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}

// EXTERNAL MODULE: ./pages/api/meetups.js
var api_meetups = __webpack_require__(2781);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js






function MeetupDetailsPage({ meetup  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meetup.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meetup.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MeetupDetails, {
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description
            })
        ]
    });
}
async function getStaticPaths() {
    const meetups = await (0,api_meetups/* default */.Z)();
    return {
        fallback: false,
        // setting it to true means that for the ids/paths the are not included at the paths, it would try to fetch dinamically the server before resulting a 404 page
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup.id
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://guimaricato:Z3zDfDDNV2UXxeV2@cluster0.ikv5cvb.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetup = await meetupCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    delete meetup._id;
    client.close();
    return {
        props: {
            meetup
        }
    };
}


/***/ }),

/***/ 2781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3730));
module.exports = __webpack_exports__;

})();