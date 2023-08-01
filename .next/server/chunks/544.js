"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProvidePart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _plugins_globalFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



function ProvidePart({ waMessage, label }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-primary relative flex flex-col justify-center items-center text-xl text-center wbgx",
            style: {
                minHeight: 556
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute top-0 md:-top-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/jumbo.png",
                        width: 500,
                        height: 500,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative -bottom-28 text-center text-white font-bold w-full text-3xl md:w-2/3 md:text-5xl",
                    children: [
                        "We Provide the Key to",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Unlock All Doors of Your Plans"
                    ]
                }),
                waMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute bottom-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "bg-white text-primary flex items-center gap-2 rounded-lg px-8 py-2",
                        onClick: ()=>(0,_plugins_globalFunction__WEBPACK_IMPORTED_MODULE_2__/* .directWa */ .e)(waMessage),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: "/formkit_whatsapp.svg",
                                width: 24,
                                height: 24,
                                alt: "logo whatsapp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "",
                                children: label
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

};
;