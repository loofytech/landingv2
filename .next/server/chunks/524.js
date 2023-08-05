exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 1055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/reducers/homeReducer.ts
var homeReducer = __webpack_require__(9912);
;// CONCATENATED MODULE: ./store/reducers/transitionReducer.ts

const transitionReducer = (0,toolkit_.createSlice)({
    name: "transitionReducer",
    initialState: {
        FLASH: true,
        TRANSITION_BG_TOP: {
            initial: {},
            animate: {},
            transition: {}
        },
        TRANSITION_BG_BOT: {
            initial: {},
            animate: {},
            transition: {}
        }
    },
    reducers: {
        setFlash: (state, param)=>{
            state.FLASH = param.payload;
        },
        setBgTop: (state, param)=>{
            state.TRANSITION_BG_TOP = param.payload;
        },
        setBgBot: (state, param)=>{
            state.TRANSITION_BG_BOT = param.payload;
        }
    }
});
const { setFlash, setBgTop, setBgBot } = transitionReducer.actions;
/* harmony default export */ const reducers_transitionReducer = (transitionReducer.reducer);

;// CONCATENATED MODULE: ./store/index.ts



/* harmony default export */ const store = ((0,toolkit_.configureStore)({
    reducer: {
        home: homeReducer/* default */.ZP,
        transition: reducers_transitionReducer
    }
}));

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"layouts\\MainLayout.tsx","import":"Quicksand","arguments":[{"subsets":["latin"],"weight":"400"}],"variableName":"font"}
var target_path_layouts_MainLayout_tsx_import_Quicksand_arguments_subsets_latin_weight_400_variableName_font_ = __webpack_require__(4595);
var target_path_layouts_MainLayout_tsx_import_Quicksand_arguments_subsets_latin_weight_400_variableName_font_default = /*#__PURE__*/__webpack_require__.n(target_path_layouts_MainLayout_tsx_import_Quicksand_arguments_subsets_latin_weight_400_variableName_font_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "nextjs-progressbar"
var external_nextjs_progressbar_ = __webpack_require__(8890);
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "usehooks-ts"
var external_usehooks_ts_ = __webpack_require__(2140);
;// CONCATENATED MODULE: ./components/Logo.tsx

function Logo({ width, height, color }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: width,
        height: height,
        viewBox: "0 0 197 58",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                filter: "url(#filter0_d_208_186)",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M68.2773 29.7227C68.2773 30.1133 68.4141 30.4453 68.6875 30.7188C68.9609 30.9922 69.293 31.1289 69.6836 31.1289H73.0938C73.4844 31.1289 73.8203 31.2695 74.1016 31.5508C74.3828 31.832 74.5234 32.168 74.5234 32.5586V32.582C74.5234 32.9805 74.3828 33.3125 74.1016 33.5781C73.8203 33.8594 73.4844 34 73.0938 34H69.6836C68.5039 34 67.4961 33.582 66.6602 32.7461C65.8242 31.9102 65.4062 30.9023 65.4062 29.7227V17.1133C65.4062 16.7227 65.5469 16.3867 65.8281 16.1055C66.1094 15.832 66.4414 15.6953 66.8242 15.6953H66.8594C67.2422 15.6953 67.5742 15.832 67.8555 16.1055C68.1367 16.3867 68.2773 16.7227 68.2773 17.1133V29.7227ZM84.7305 15.6953C87.2539 15.6953 89.4141 16.5898 91.2109 18.3789C93 20.168 93.8945 22.3242 93.8945 24.8477C93.8945 27.3711 93 29.5273 91.2109 31.3164C89.4141 33.1055 87.2539 34 84.7305 34C82.207 34 80.0508 33.1055 78.2617 31.3164C76.4727 29.5273 75.5781 27.3711 75.5781 24.8477C75.5781 22.3242 76.4727 20.168 78.2617 18.3789C80.0508 16.5898 82.207 15.6953 84.7305 15.6953ZM84.7305 18.5547C82.9961 18.5547 81.5156 19.168 80.2891 20.3945C79.0625 21.6211 78.4492 23.1055 78.4492 24.8477C78.4492 26.5898 79.0625 28.0742 80.2891 29.3008C81.5156 30.5195 82.9961 31.1289 84.7305 31.1289C86.4727 31.1289 87.957 30.5195 89.1836 29.3008C90.4102 28.0742 91.0234 26.5898 91.0234 24.8477C91.0234 23.1055 90.4102 21.6211 89.1836 20.3945C87.957 19.168 86.4727 18.5547 84.7305 18.5547ZM104.934 15.6953C107.457 15.6953 109.617 16.5898 111.414 18.3789C113.203 20.168 114.098 22.3242 114.098 24.8477C114.098 27.3711 113.203 29.5273 111.414 31.3164C109.617 33.1055 107.457 34 104.934 34C102.41 34 100.254 33.1055 98.4648 31.3164C96.6758 29.5273 95.7812 27.3711 95.7812 24.8477C95.7812 22.3242 96.6758 20.168 98.4648 18.3789C100.254 16.5898 102.41 15.6953 104.934 15.6953ZM104.934 18.5547C103.199 18.5547 101.719 19.168 100.492 20.3945C99.2656 21.6211 98.6523 23.1055 98.6523 24.8477C98.6523 26.5898 99.2656 28.0742 100.492 29.3008C101.719 30.5195 103.199 31.1289 104.934 31.1289C106.676 31.1289 108.16 30.5195 109.387 29.3008C110.613 28.0742 111.227 26.5898 111.227 24.8477C111.227 23.1055 110.613 21.6211 109.387 20.3945C108.16 19.168 106.676 18.5547 104.934 18.5547ZM119.207 23.418H124.094C124.477 23.418 124.809 23.5547 125.09 23.8281C125.371 24.1094 125.512 24.4453 125.512 24.8359V24.8594C125.512 25.2578 125.371 25.5898 125.09 25.8555C124.809 26.1367 124.477 26.2773 124.094 26.2773H119.207V32.582C119.207 32.9805 119.066 33.3125 118.785 33.5781C118.504 33.8594 118.172 34 117.789 34H117.754C117.371 34 117.039 33.8594 116.758 33.5781C116.477 33.3125 116.336 32.9805 116.336 32.582V19.9727C116.336 18.793 116.754 17.7852 117.59 16.9492C118.426 16.1133 119.434 15.6953 120.613 15.6953H124.211C124.594 15.6953 124.926 15.832 125.207 16.1055C125.488 16.3867 125.629 16.7227 125.629 17.1133V17.1367C125.629 17.5273 125.488 17.8633 125.207 18.1445C124.926 18.418 124.594 18.5547 124.211 18.5547H120.613C120.223 18.5547 119.891 18.6914 119.617 18.9648C119.344 19.2383 119.207 19.5742 119.207 19.9727V23.418ZM139.293 22.3164C139.293 23.7852 138.824 25.082 137.887 26.207C136.957 27.3086 135.883 27.9805 134.664 28.2227V32.582C134.664 32.9805 134.523 33.3125 134.242 33.5781C133.961 33.8594 133.629 34 133.246 34H133.211C132.828 34 132.496 33.8594 132.215 33.5781C131.934 33.3125 131.793 32.9805 131.793 32.582V28.2227C130.574 27.9805 129.5 27.3086 128.57 26.207C127.633 25.082 127.164 23.7852 127.164 22.3164V17.1133C127.164 16.7227 127.305 16.3867 127.586 16.1055C127.867 15.832 128.199 15.6953 128.582 15.6953H128.617C129 15.6953 129.332 15.832 129.613 16.1055C129.895 16.3867 130.035 16.7227 130.035 17.1133V22.3164C130.035 23.207 130.344 23.9648 130.961 24.5898C131.586 25.207 132.34 25.5156 133.223 25.5156C134.113 25.5156 134.871 25.207 135.496 24.5898C136.113 23.9648 136.422 23.207 136.422 22.3164V17.1133C136.422 16.7227 136.562 16.3867 136.844 16.1055C137.125 15.832 137.457 15.6953 137.84 15.6953H137.875C138.258 15.6953 138.59 15.832 138.871 16.1055C139.152 16.3867 139.293 16.7227 139.293 17.1133V22.3164ZM152.359 17.1367C152.359 17.5273 152.219 17.8633 151.938 18.1445C151.664 18.418 151.332 18.5547 150.941 18.5547H148.082V32.582C148.082 32.9727 147.945 33.3047 147.672 33.5781C147.391 33.8594 147.055 34 146.664 34H146.641C146.25 34 145.914 33.8594 145.633 33.5781C145.359 33.3047 145.223 32.9727 145.223 32.582V18.5547H142.363C141.98 18.5547 141.648 18.418 141.367 18.1445C141.086 17.8633 140.945 17.5273 140.945 17.1367V17.1133C140.945 16.7227 141.086 16.3867 141.367 16.1055C141.648 15.832 141.98 15.6953 142.363 15.6953H150.941C151.332 15.6953 151.664 15.832 151.938 16.1055C152.219 16.3867 152.359 16.7227 152.359 17.1133V17.1367ZM156.988 23.418H162.578C162.961 23.418 163.293 23.5547 163.574 23.8281C163.855 24.1094 163.996 24.4453 163.996 24.8359V24.8594C163.996 25.25 163.855 25.5859 163.574 25.8672C163.293 26.1406 162.961 26.2773 162.578 26.2773H156.988V29.7227C156.988 30.1133 157.125 30.4453 157.398 30.7188C157.672 30.9922 158.004 31.1289 158.395 31.1289H162.578C162.961 31.1289 163.293 31.2695 163.574 31.5508C163.855 31.832 163.996 32.168 163.996 32.5586V32.582C163.996 32.9805 163.855 33.3125 163.574 33.5781C163.293 33.8594 162.961 34 162.578 34H158.395C157.215 34 156.207 33.582 155.371 32.7461C154.535 31.9102 154.117 30.9023 154.117 29.7227V19.9727C154.117 18.793 154.535 17.7852 155.371 16.9492C156.207 16.1133 157.215 15.6953 158.395 15.6953H162.578C162.961 15.6953 163.293 15.8359 163.574 16.1172C163.855 16.3828 163.996 16.7148 163.996 17.1133V17.1367C163.996 17.5273 163.855 17.8633 163.574 18.1445C163.293 18.4258 162.961 18.5664 162.578 18.5664H158.395C158.004 18.5664 157.672 18.7031 157.398 18.9766C157.125 19.25 156.988 19.582 156.988 19.9727V23.418ZM174.672 15.6953C175.445 15.6953 176.203 15.7891 176.945 15.9766C177.664 16.1641 178.023 16.6211 178.023 17.3477V17.3828C178.023 17.8438 177.836 18.2188 177.461 18.5078C177.211 18.7031 176.938 18.8008 176.641 18.8008C176.516 18.8008 176.387 18.7852 176.254 18.7539C175.73 18.6211 175.203 18.5547 174.672 18.5547C172.938 18.5547 171.457 19.168 170.23 20.3945C169.004 21.6211 168.391 23.1055 168.391 24.8477C168.391 26.5898 169.004 28.0742 170.23 29.3008C171.457 30.5195 172.938 31.1289 174.672 31.1289C175.203 31.1289 175.73 31.0664 176.254 30.9414C176.387 30.9102 176.516 30.8945 176.641 30.8945C176.938 30.8945 177.211 30.9922 177.461 31.1875C177.836 31.4688 178.023 31.8438 178.023 32.3125V32.3359C178.023 33.0703 177.664 33.5312 176.945 33.7188C176.203 33.9062 175.445 34 174.672 34C172.148 34 169.992 33.1055 168.203 31.3164C166.414 29.5273 165.52 27.3711 165.52 24.8477C165.52 22.3242 166.414 20.168 168.203 18.3789C169.992 16.5898 172.148 15.6953 174.672 15.6953ZM181.469 15.6953C181.852 15.6953 182.184 15.832 182.465 16.1055C182.746 16.3867 182.887 16.7227 182.887 17.1133V23.418H189.379V17.1133C189.379 16.7227 189.52 16.3867 189.801 16.1055C190.082 15.832 190.414 15.6953 190.797 15.6953H190.832C191.215 15.6953 191.547 15.832 191.828 16.1055C192.109 16.3867 192.25 16.7227 192.25 17.1133V32.582C192.25 32.9805 192.109 33.3125 191.828 33.5781C191.547 33.8594 191.215 34 190.832 34H190.797C190.414 34 190.082 33.8594 189.801 33.5781C189.52 33.3125 189.379 32.9805 189.379 32.582V26.2773H182.887V32.582C182.887 32.9805 182.746 33.3125 182.465 33.5781C182.184 33.8594 181.852 34 181.469 34H181.434C181.051 34 180.719 33.8594 180.438 33.5781C180.156 33.3125 180.016 32.9805 180.016 32.582V17.1133C180.016 16.7227 180.156 16.3867 180.438 16.1055C180.719 15.832 181.051 15.6953 181.434 15.6953H181.469Z",
                        fill: color
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        x: "4",
                        width: "50",
                        height: "50",
                        fill: "url(#pattern0)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                        id: "filter0_d_208_186",
                        x: "0",
                        y: "0",
                        width: "196.25",
                        height: "58",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feOffset", {
                                dy: "4"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feGaussianBlur", {
                                stdDeviation: "2"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_208_186"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_208_186",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                        id: "pattern0",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1",
                        children: /*#__PURE__*/ jsx_runtime.jsx("use", {
                            xlinkHref: "#image0_208_186",
                            transform: "scale(0.000244141)"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("image", {
                        id: "image0_208_186",
                        width: "4096",
                        height: "4096",
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/MenuOutlined"
var MenuOutlined_ = __webpack_require__(2458);
var MenuOutlined_default = /*#__PURE__*/__webpack_require__.n(MenuOutlined_);
// EXTERNAL MODULE: external "antd/lib/drawer"
var drawer_ = __webpack_require__(8000);
var drawer_default = /*#__PURE__*/__webpack_require__.n(drawer_);
// EXTERNAL MODULE: ./plugins/windowDimensions.ts
var windowDimensions = __webpack_require__(6961);
;// CONCATENATED MODULE: ./components/Header.tsx








function Header() {
    const [open, setOpen] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { width } = (0,windowDimensions/* useWindowSize */.i)();
    const openMobileMenu = ()=>{
        setOpen(true);
    };
    const closeMobileMenu = ()=>{
        setOpen(false);
    };
    const mobileLink = (param)=>{
        setOpen(false);
        return router.push(param);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "z-50 fixed top-0 bg-white w-full flex justify-between items-center py-5 px-2 md:px-28 xl:px-64 shadow",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "relative top-1",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                            width: 144,
                            height: 48,
                            color: "#010101"
                        })
                    }),
                    width > 640 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "h-full gap-10 font-semibold justify-center items-center hidden md:flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/",
                                className: "relative",
                                children: [
                                    "Beranda",
                                    router.asPath == "/" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-1 w-full -bottom-3 bg-secondary absolute"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "head-dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Layanan Kami"
                                    }),
                                    [
                                        "/make-website",
                                        "/make-application",
                                        "/design-product"
                                    ].includes(router.asPath) && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-1 w-full -bottom-3 bg-secondary absolute"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "head-dropdown-content bg-transparent pt-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "bg-white whitespace-nowrap hover:bg-gray hover:text-white",
                                                href: "/make-website",
                                                children: "Pembuatan Website"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "bg-white whitespace-nowrap hover:bg-gray hover:text-white",
                                                href: "/make-application",
                                                children: "Pembuatan Program / Aplikasi"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                className: "bg-white whitespace-nowrap hover:bg-gray hover:text-white",
                                                href: "/design-product",
                                                children: "Desain Produk"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/information",
                                className: "relative",
                                children: [
                                    router.asPath == "/information" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-1 w-full -bottom-3 bg-secondary absolute"
                                    }),
                                    "Informasi"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/about",
                                className: "relative",
                                children: [
                                    router.asPath == "/about" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-1 w-full -bottom-3 bg-secondary absolute"
                                    }),
                                    "Tentang Kami"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/contact",
                                className: "relative",
                                children: [
                                    router.asPath == "/contact" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-1 w-full -bottom-3 bg-secondary absolute"
                                    }),
                                    "Kontak"
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "py-2 px-3 outline-none",
                        onClick: openMobileMenu,
                        children: /*#__PURE__*/ jsx_runtime.jsx((MenuOutlined_default()), {
                            style: {
                                fontSize: 22
                            }
                        })
                    })
                ]
            }),
            width <= 640 && /*#__PURE__*/ (0,jsx_runtime.jsxs)((drawer_default()), {
                title: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative top-1",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                        width: 80,
                        height: 28,
                        color: "#010101"
                    })
                }),
                width: "80%",
                placement: "right",
                onClose: closeMobileMenu,
                open: open,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/"),
                        children: "Beranda"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/make-website"),
                        children: "Pembuatan Website"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/make-application"),
                        children: "Pembuatan Aplikasi"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/design-product"),
                        children: "Desain Produk"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/information"),
                        children: "Informasi"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/about"),
                        children: "Tentang Kami"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-lg py-2",
                        onClick: ()=>mobileLink("/contact"),
                        children: "Kontak"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Footer.tsx




function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pb-5 pt-10 text-white bg-black_a flex flex-col md:flex-row justify-between px-4 md:px-28 xl:px-64",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-full md:w-1/4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                                width: 137,
                                height: 58,
                                color: "#F1F1F1"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-xs mt-2",
                                children: "Kami berdedikasi untuk menciptakan solusi inovatif digitalisasi Bisnis ataupun Produk anda. Dengan prinsip bekerja sepenuh hati untuk memberikan pengalaman terbaik kepada pelanggan, sehingga Anda dapat meraih potensi penuh dari teknologi dengan percaya diri dan tanpa beban finansial yang berlebihan."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "whitespace-nowrap mb-5 font-bold relative top-3 md:top-0",
                                    children: "Layanan Kami"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col gap-0.5 md:gap-2 text-sm whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/make-website",
                                            children: "Jasa Pembuatan Website"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/make-application",
                                            children: "Jasa Pembuatan Aplikasi"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/design-product",
                                            children: "Jasa Desain Produk"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "whitespace-nowrap mb-5 font-bold relative top-3 md:top-0",
                                    children: "Sosial Media"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-1.5 items-center relative -left-0.5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "https://www.linkedin.com",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/LINKEDIN.svg",
                                                width: 26,
                                                height: 26,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "https://www.instagram.com",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/IG.svg",
                                                width: 26,
                                                height: 26,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "https://github.com",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/GITHUB.svg",
                                                width: 26,
                                                height: 26,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "https://facebook.com",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/FACEBOOK.svg",
                                                width: 26,
                                                height: 26,
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "",
                        style: {
                            width: "178px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "whitespace-nowrap mb-5 font-bold relative top-3 md:top-0",
                                children: "Kontak Kami"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/Wablack.svg",
                                                width: 25,
                                                height: 25,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-sm",
                                                children: "+62853-7734-4144"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/Mail.svg",
                                                width: 25,
                                                height: 25,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-sm",
                                                children: "contact@loofytech.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start gap-1.5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/Location.svg",
                                                width: 25,
                                                height: 25,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-sm",
                                                children: "Bandar Lampung, Lampung, Indonesia"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "py-2.5 bg-black_a flex flex-col lg:flex-row justify-between items-center px-2 md:px-28 xl:px-64",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-1.5 text-secondary_a",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/ph_copyright-light.svg",
                                width: 20,
                                height: 20,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-sm",
                                children: [
                                    "2023 ",
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "https://loofytech.com",
                                        children: "Loofytech"
                                    }),
                                    " | All Rights Reserved Copyright"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-1.5 text-secondary_a",
                        children: [
                            "Design with",
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/made_love.svg",
                                width: 12,
                                height: 11,
                                alt: ""
                            }),
                            "by Loofyteam"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./plugins/globalFunction.ts
var globalFunction = __webpack_require__(8893);
;// CONCATENATED MODULE: ./components/FlyingMessage.tsx




function FlyingMessage({ message }) {
    const { width } = (0,windowDimensions/* useWindowSize */.i)();
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `fixed w-14 h-14 rounded-full bg-primary_a ${width >= 768 ? "bottom-6 right-6" : "bottom-2 right-3"}`,
            children: [
                width >= 768 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "shadow-lg whitespace-nowrap rounded-lg absolute bg-white py-1 px-3 right-16 top-3",
                    children: "Tanya aja dulu"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "animate-ping bg-primary_a rounded-full w-2/3 h-2/3 absolute",
                    style: {
                        top: "15%",
                        left: "15%"
                    }
                }),
                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/flymsg.png",
                    width: 200,
                    height: 200,
                    onClick: ()=>(0,globalFunction/* directWa */.e)("Saya telah mengakses loofytech.com, saya tertarik ingin bekerja sama"),
                    className: "cursor-pointer relative z-10",
                    alt: "wame"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ScrollToTop.tsx


function ScrollToTop() {
    const { width } = (0,windowDimensions/* useWindowSize */.i)();
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            onClick: scrollToTop,
            className: `fixed cursor-pointer w-10 h-10 bg-secondary rounded flex items-center justify-center ${width >= 640 ? "bottom-6 left-6" : "bottom-4 left-4"}`,
            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                className: "bi bi-arrow-up-short",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    fillRule: "evenodd",
                    d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./layouts/MainLayout.tsx













function MainLayout({ children }) {
    const { FIRST, SECOND, HEADER_COLOR_CSS } = (0,external_react_redux_.useSelector)((state)=>state.home);
    const { FLASH } = (0,external_react_redux_.useSelector)((state)=>state.transition);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { width } = (0,windowDimensions/* useWindowSize */.i)();
    const [showToTop, setShowToTop] = (0,external_react_.useState)(false);
    const handleRouteStartChange = ()=>{
        dispatch(setFlash(true));
        setTransitionStart();
    };
    const handleRouteCompleteChange = ()=>{
        setTimeout(()=>{
            setTransitionEnd();
            setTimeout(()=>dispatch(setFlash(false)), 500);
        }, 1000);
    };
    const scrll = ()=>{
        if (window.scrollY <= 500) {
            setShowToTop(false);
        } else {
            setShowToTop(true);
        }
    };
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeStart", handleRouteStartChange);
        router.events.on("routeChangeComplete", handleRouteCompleteChange);
        window.addEventListener("scroll", scrll);
        return ()=>window.removeEventListener("scroll", scrll);
    }, []);
    (0,external_usehooks_ts_.useEffectOnce)(()=>{
        dispatch(setFlash(true));
        setTransitionEnd();
        setTimeout(()=>dispatch(setFlash(false)), 500);
    });
    const setTransitionStart = ()=>{
        dispatch(setBgTop({
            initial: {
                left: "-100%"
            },
            animate: {
                left: 0
            },
            transition: {
                ease: "easeInOut"
            }
        }));
        dispatch(setBgBot({
            initial: {
                left: "-100%"
            },
            animate: {
                left: 0
            },
            transition: {
                ease: "easeInOut"
            }
        }));
    };
    const setTransitionEnd = ()=>{
        dispatch(setBgTop({
            initial: {
                left: 0
            },
            animate: {
                left: "-100%"
            },
            transition: {
                ease: "easeInOut"
            }
        }));
        dispatch(setBgBot({
            initial: {
                left: 0
            },
            animate: {
                left: "-100%"
            },
            transition: {
                ease: "easeInOut"
            }
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (target_path_layouts_MainLayout_tsx_import_Quicksand_arguments_subsets_latin_weight_400_variableName_font_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {}),
            showToTop && /*#__PURE__*/ jsx_runtime.jsx(ScrollToTop, {}),
            /*#__PURE__*/ jsx_runtime.jsx(FlyingMessage, {}),
            /*#__PURE__*/ jsx_runtime.jsx((external_nextjs_progressbar_default()), {
                color: "#0F3D3E"
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./pages/_app.tsx







function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Loofytech"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        href: "favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "google-site-verification",
                        content: "xdzlUk8gY5v47STF8YEX48lxXd-bowOi7ww9buHMAaY"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://www.googletagmanager.com/gtag/js?id=G-0K0K6FHSZV",
                id: "g-manager"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "g-manager-datalayer",
                children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0K0K6FHSZV', {
          page_path: window.location.pathname,
        });
      `
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MainLayout, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "bg-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ directWa)
/* harmony export */ });
const directWa = (param)=>{
    return window.open("https://api.whatsapp.com/send?phone=6285377344144&text=" + param);
};


/***/ }),

/***/ 6961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: 0,
        height: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        if (false) {}
    }, []);
    return windowSize;
}


/***/ }),

/***/ 9912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KL: () => (/* binding */ setFirst),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   cH: () => (/* binding */ setHeaderColor),
/* harmony export */   on: () => (/* binding */ setSecond)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const homeReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "homeReducer",
    initialState: {
        FIRST: true,
        SECOND: false,
        HEADER_COLOR_CSS: "text-black"
    },
    reducers: {
        setFirst: (state, param)=>{
            state.FIRST = param.payload;
        },
        setSecond: (state, param)=>{
            state.SECOND = param.payload;
        },
        setHeaderColor: (state, param)=>{
            state.HEADER_COLOR_CSS = param.payload;
        }
    }
});
const { setFirst, setSecond, setHeaderColor } = homeReducer.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeReducer.reducer);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;