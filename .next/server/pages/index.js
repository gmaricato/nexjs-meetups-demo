(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2430:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 4117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9673);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


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

/***/ 7032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(4117);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(2430);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js




function MeetupItem(props) {
    const router = (0,router_.useRouter)();
    function showMeetupDetails() {
        router.push("/" + props.id);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showMeetupDetails,
                        children: "Show Details"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(6672);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



function MeetupList(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id))
    });
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

// EXTERNAL MODULE: ./pages/api/meetups.js
var api_meetups = __webpack_require__(2781);
;// CONCATENATED MODULE: ./pages/index.js





function HomePage({ meetups  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Meetups App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "A meetups manager website"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                meetups: meetups
            }),
            ";"
        ]
    });
}
async function getStaticProps() {
    const meetups = await (0,api_meetups/* default */.Z)();
    return {
        props: {
            meetups: meetups
        },
        revalidate: 10
    };
} // it will not be runned during build, but at real time at the server, dinamically on every request 
 // (have to wait the page to be genetated on every request)
 // (SSR - server side rendering)
 // export async function getServerSideProps(context) {
 //   const res = context.res;
 //   const req = context.req;
 //   return {
 //     props: {
 //       meetups: DUMMY_MEETUPS,
 //     },
 //   }
 // }


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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(7032));
module.exports = __webpack_exports__;

})();