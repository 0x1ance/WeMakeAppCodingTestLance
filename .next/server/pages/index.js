(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,702];
exports.modules = {

/***/ 325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "graphql"
var external_graphql_namespaceObject = require("graphql");;
// EXTERNAL MODULE: ./pages/api/graphql.ts + 1 modules
var graphql = __webpack_require__(551);
;// CONCATENATED MODULE: ./utils/query-graphql.ts


async function queryGraphql(query, variableValues = {}) {
  const {
    data
  } = await (0,external_graphql_namespaceObject.graphql)({
    schema: graphql.schema,
    source: query,
    variableValues
  });
  return data || {};
}
;// CONCATENATED MODULE: external "react-loader-spinner"
var external_react_loader_spinner_namespaceObject = require("react-loader-spinner");;
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js + 1 modules
var Card = __webpack_require__(933);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(907);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(912);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js + 13 modules
var Button = __webpack_require__(31);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(14);
;// CONCATENATED MODULE: ./components/DataCard/data-card.component.tsx










const useStyles = (0,makeStyles/* default */.Z)({
  root: {
    minWidth: 275,
    height: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  }
});
function DataCard({
  entry
}) {
  const classes = useStyles();

  const bull = /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: classes.bullet,
    children: "\u2022"
  });

  console.log('url: ', entry.url);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "h-100",
    children: /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
      boxShadow: 3,
      bgcolor: "background.paper",
      height: "100%",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        className: "h-100 d-flex flex-column justify-content-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContent/* default */.Z, {
          className: "flex-grow-1 d-flex flex-column justify-content-between",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
              className: classes.title,
              color: "textSecondary",
              gutterBottom: true,
              children: entry.time
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h2 card-title",
              children: entry.title
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
              className: "",
              color: "textSecondary",
              children: ["author: ", entry.author]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "d-flex justify-content-between h6",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: ["comments: ", entry.numOfComments]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: ["points: ", entry.points]
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(CardActions/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            size: "small",
            color: "primary",
            onClick: () => window.open(entry.url, '_blank'),
            children: "View Detail"
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(749);
;// CONCATENATED MODULE: ./pages/index.tsx




 // Components




function Home({
  data
}) {
  const {
    0: displayData,
    1: setDisplayData
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const sortedData = data.sort((a, b) => b.numOfComments - a.numOfComments);
    setDisplayData(sortedData);
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Lance's Work"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "home-banner text-center bg-image rounded",
      style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1521247205284-f4f3c95fdb5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=80')",
        height: '65vh'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mask rounded d-flex align-items-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-lg py-5",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-white d-flex flex-column justify-content-start align-items-start",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "h3 font-weight-bold mb-5",
              children: "WeMakeApp Coding Test - Lance Tsang"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h4 font-weight-bold",
              children: "Requirements:"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "h5 font-weight-light text-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                children: "1. Build a function to source the content with Puppeteer"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "h5 font-weight-light text-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                children: "2. Use GraphQL to serve the extracted content"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "h5 font-weight-light text-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                children: "3. Serve the sorted data to the UI layer by the comment counts descendingly"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "h5 font-weight-light text-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                children: "4. Display the data as a grid view with Material UI's card"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "h5 font-weight-light text-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                children: "5. Support Responsive Design , allowing more items to be displayed with wider screen width"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "h5 font-weight-light text-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                children: "6. Each item card should contain the following meta: title , points , author , time , number of comments , and the link to external site"
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-lg d-flex py-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        container: true,
        spacing: 3,
        alignItems: "stretch",
        children: displayData ? displayData.map((el, idx) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          xs: 12,
          sm: 6,
          lg: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(DataCard, {
            entry: el
          })
        }, idx)) : /*#__PURE__*/jsx_runtime_.jsx((external_react_loader_spinner_default()), {
          type: "Puff",
          color: "#00BFFF",
          height: 100,
          width: 100,
          timeout: 3000 //3 secs

        })
      })
    })]
  });
}
async function getStaticProps() {
  const {
    data
  } = await queryGraphql(`
    query {
      data {
        title
        points
        author
        time
        numOfComments
        url
      }
    }
  `);
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ 47:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 724:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

/***/ }),

/***/ 536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 750:
/***/ (function(module) {

"use strict";
module.exports = require("puppeteer");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [406,551], function() { return __webpack_exec__(325); });
module.exports = __webpack_exports__;

})();