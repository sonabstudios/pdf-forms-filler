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
/* harmony import */ var _app_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/AppLayout */ "./app/AppLayout.tsx");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _context_mockdb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/mockdb */ "./context/mockdb.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Git\\GitHub\\pdf-forms-filler\\src\\pages\\forms\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["createStyles"])({
    paper: {
      width: '100%',
      overflowX: 'auto'
    },
    table: {
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      minWidth: 600
    }
  });
});

function createData(id, calories, fat, carbs, protein) {
  return {
    id: id,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var Forms = function Forms() {
  var classes = useStyles(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["useTheme"])());
  var rows = [createData(_context_mockdb__WEBPACK_IMPORTED_MODULE_8__["default"].Records[0].id, _context_mockdb__WEBPACK_IMPORTED_MODULE_8__["default"].Records[0].partner.firstName, _context_mockdb__WEBPACK_IMPORTED_MODULE_8__["default"].Records[0].partner.lastName), createData('Ice cream sandwich', 237, 9.0, 37, 4.3)];
  return __jsx(_app_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "PDF Forms Filler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.table,
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Fist Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Last Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Phone"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Email")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=forms.js.89115751d982d2279ddb.hot-update.js.map