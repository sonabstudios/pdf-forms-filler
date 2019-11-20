webpackHotUpdate("static\\development\\pages\\forms.js",{

/***/ "./pages/forms/index.tsx":
/*!*******************************!*\
  !*** ./pages/forms/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/AppLayout */ "./app/AppLayout.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/app-context */ "./context/app-context.tsx");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Edit */ "../node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Git\\GitHub\\pdf-forms-filler\\src\\pages\\forms\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["createStyles"])({
    paper: {
      width: '100%',
      overflowX: 'auto'
    },
    table: {
      minWidth: 600
    }
  });
});

function createData(id, firstName, middleName, lastName, phone, email) {
  return {
    id: id,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    phone: phone,
    email: email
  };
}

var Forms = function Forms() {
  var classes = useStyles(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["useTheme"])());
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);
  var rows = appContext.data.map(function (rec) {
    return createData(rec.id, rec.partner.firstName, rec.partner.middleName, rec.partner.lastName, rec.partner.phone, rec.partner.email);
  });

  var handleClick = function handleClick(event, index) {
    appContext.selectIndex(index);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/EDSC-EMP5624-2019-10-001-E');
  };

  return __jsx(_app_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "PDF Forms Filler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Mock Database")), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.table,
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Fist Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Last Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Phone"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Email"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "View"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, rows.map(function (row, index) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
      hover: true,
      key: row.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, row.firstName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, row.middleName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, row.lastName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, row.phone), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, row.email), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      edge: "start",
      onClick: function onClick() {
        return handleClick(event, index);
      },
      "aria-label": "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }))));
  }))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "This is a mock database to show existing information that can be used ot fill out the PDF form. Click on any of the edit icons to update and fill the PDF document."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=forms.js.5d18206e3d399380adb2.hot-update.js.map