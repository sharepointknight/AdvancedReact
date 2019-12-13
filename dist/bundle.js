/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SharePointService_1 = __webpack_require__(5);
var HeaderSection_1 = __webpack_require__(3);
var FormApp = /** @class */ (function (_super) {
    __extends(FormApp, _super);
    function FormApp() {
        var _this = _super.call(this) || this;
        _this.state = { Data: { Title: "" }, Dirty: false, Sections: { General: { Expanded: true, Complete: false }, Purpose: { Expanded: false, Complete: false }, Proposed: { Expanded: false, Complete: false } } };
        return _this;
    }
    FormApp.prototype.saveForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state.Dirty) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, SharePointService_1.default.AddListItem("AdvancedReact", this.state.Data)];
                    case 1:
                        res = _a.sent();
                        this.setState({ Dirty: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    FormApp.prototype.toggleSection = function (sectionId) {
        var sections = this.state.Sections;
        sections[sectionId].Expanded = !sections[sectionId].Expanded;
        this.setState({ Sections: sections });
    };
    FormApp.prototype.updateFieldValue = function (event) {
        var id = event.target.id;
        var value = event.target.value;
        var data = this.state.Data;
        data[id] = value;
        this.setState({ Data: data, Dirty: true });
    };
    FormApp.prototype.render = function () {
        return React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("nav", { className: "col-sm-3", id: "myScrollspy" },
                    React.createElement("div", { className: "affix align-right" },
                        React.createElement("ul", { className: "nav nav-stacked", "data-offset-top": "-1", style: { marginTop: "50px" } },
                            React.createElement("li", { "data-anchor": "#general", className: "active" },
                                React.createElement("a", null,
                                    React.createElement("i", { className: "fa fa-check" }),
                                    " 1. General Information")),
                            React.createElement("li", { "data-anchor": "#purpose" },
                                React.createElement("a", null,
                                    React.createElement("i", { className: "fa fa-check" }),
                                    " 2. Purpose & Need")),
                            React.createElement("li", { "data-anchor": "#proposed" },
                                React.createElement("a", null,
                                    React.createElement("i", { className: "fa fa-check" }),
                                    " 3. Proposed Action"))),
                        React.createElement("hr", null),
                        React.createElement("div", { style: { paddingRight: "20px" } },
                            React.createElement("label", { className: "text-muted" }, "Form Controls:"),
                            React.createElement("br", null),
                            React.createElement("button", { type: "button", className: "btn btn-success side", disabled: !this.state.Dirty, onClick: this.saveForm.bind(this) },
                                React.createElement("i", { className: "fa fa-save" }),
                                " Save"),
                            React.createElement("button", { type: "button", className: "btn btn-default side", disabled: true },
                                React.createElement("i", { className: "fa fa-flag" }),
                                " Finalize & Submit")))),
                React.createElement("div", { className: "col-xs-9" },
                    React.createElement("h3", null, "Process Forms"),
                    React.createElement("div", { className: "form-box po view" },
                        React.createElement(HeaderSection_1.default, { SectionId: "General", SectionTitle: "1. General Information", Expanded: this.state.Sections.General.Expanded, Complete: false, ToggleSection: this.toggleSection.bind(this) }),
                        this.state.Sections.General.Expanded && React.createElement("div", { className: "row form-group sectionform", id: "general" },
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-6" },
                                        React.createElement("label", { className: "required" }, "Project Name:"),
                                        React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter a name for this project", value: this.state.Data.Title, id: "Title", onChange: this.updateFieldValue.bind(this) })),
                                    React.createElement("div", { className: "col-xs-3" },
                                        React.createElement("label", { className: "required" }, "Project Number:"),
                                        React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter Project #", "aria-describedby": "basic-addon1" })))),
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-4" },
                                        React.createElement("label", { className: "required" }, "Region:"),
                                        React.createElement("select", { className: "form-control", id: "sel1" },
                                            React.createElement("option", { disabled: true, selected: true }, "Select Region"),
                                            React.createElement("option", null, "Region 2"),
                                            React.createElement("option", null, "Region 3"),
                                            React.createElement("option", null, "Region 4"))),
                                    React.createElement("div", { className: "col-xs-4" },
                                        React.createElement("label", { className: "required" }, "Country:"),
                                        React.createElement("select", { className: "form-control", id: "sel2", disabled: true },
                                            React.createElement("option", { disabled: true, selected: true }, "Select Country"),
                                            React.createElement("option", null, "Canada"),
                                            React.createElement("option", null, "Mexico"),
                                            React.createElement("option", null, "United States"))),
                                    React.createElement("div", { className: "col-xs-4" },
                                        React.createElement("label", { className: "required" }, "Location:"),
                                        React.createElement("select", { className: "form-control", id: "sel3", disabled: true },
                                            React.createElement("option", { disabled: true, selected: true }, "Select Location"),
                                            React.createElement("option", null, "Chapel Hill"),
                                            React.createElement("option", null, "Capitol Reef"),
                                            React.createElement("option", null, "Other"))))),
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", { className: "required" }, "Project Preparer:"),
                                        React.createElement("div", { className: "input-group" },
                                            React.createElement("span", { className: "input-group-addon" },
                                                React.createElement("span", { className: "glyphicon glyphicon-user", "aria-hidden": "true" })),
                                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter Name", "aria-describedby": "basic-addon1" }))),
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("hr", { className: "regular" })))),
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", { className: "required" }, "Estimated Completion Date:")),
                                    React.createElement("div", { className: "col-xs-4" },
                                        React.createElement("select", { className: "form-control", id: "sel4" },
                                            React.createElement("option", { disabled: true, selected: true }, "Select Duration"),
                                            React.createElement("option", null, "2 Weeks"),
                                            React.createElement("option", null, "4 Weeks"),
                                            React.createElement("option", null, "8 Weeks"))),
                                    React.createElement("div", { className: "col-xs-8" },
                                        React.createElement("div", { className: "input-group" },
                                            React.createElement("span", { className: "input-group-addon" },
                                                React.createElement("i", { className: "fa fa-calendar" })),
                                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Select Date", "data-provide": "datepicker" }))))),
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12 group0" },
                                        React.createElement("label", { className: "required" }, "Document Type:"),
                                        React.createElement("select", { className: "form-control", id: "click1" },
                                            React.createElement("option", { disabled: true, selected: true }, "Select Type"),
                                            React.createElement("option", null, "State"),
                                            React.createElement("option", null, "Demo Document"),
                                            React.createElement("option", null, "Automated Process")))))),
                        React.createElement(HeaderSection_1.default, { SectionId: "Purpose", SectionTitle: "2. Purpose & Need", Expanded: this.state.Sections.Purpose.Expanded, Complete: false, ToggleSection: this.toggleSection.bind(this) }),
                        this.state.Sections.Purpose.Expanded && React.createElement("div", { className: "row form-group sectionform", id: "purpose" },
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", { className: "required" }, "Purpose:"),
                                        React.createElement("label", { className: "note block" }, "Provide a one sentence description of the Purpose, defining the transportation problem to be solved."),
                                        React.createElement("textarea", { className: "form-control", placeholder: "Enter Text" })))),
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", { className: "required" }, "Need:"),
                                        React.createElement("label", { className: "note block" }, "Provide a one sentence description of the Need, stating evidence to support the problem statement (Purpose). "),
                                        React.createElement("textarea", { className: "form-control", placeholder: "Enter Text" }))))),
                        React.createElement(HeaderSection_1.default, { SectionId: "Proposed", SectionTitle: "3. Proposed Action", Expanded: this.state.Sections.Proposed.Expanded, Complete: false, ToggleSection: this.toggleSection.bind(this) }),
                        this.state.Sections.Proposed.Expanded && React.createElement("div", { className: "row form-group sectionform", id: "proposed" },
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", { className: "required" }, "Description of Proposed Action:"),
                                        React.createElement("label", { className: "note block" }, "Provide a written description, including project length, route number, and mile post."),
                                        React.createElement("textarea", { className: "form-control", placeholder: "Enter Text" })))),
                            React.createElement("div", { className: "col-xs-1 form-group" },
                                React.createElement("div", { className: "progress-circle" })),
                            React.createElement("div", { className: "col-xs-11 form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-xs-12" },
                                        React.createElement("label", { className: "required" }, "Project Location:"),
                                        React.createElement("label", { className: "note block" }, "Include a map of the project location and typical section(s) of the proposed project"),
                                        React.createElement("input", { id: "input1", type: "file", className: "form-control" })))))))));
    };
    return FormApp;
}(React.Component));
exports.default = FormApp;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var HeaderSection = /** @class */ (function (_super) {
    __extends(HeaderSection, _super);
    function HeaderSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderSection.prototype.toggleSection = function () {
        debugger;
        this.props.ToggleSection(this.props.SectionId);
    };
    HeaderSection.prototype.render = function () {
        var collapseClass = "collapser flip";
        if (!this.props.Expanded) {
            collapseClass = "collapser";
        }
        return React.createElement("div", { className: "row form-group flex sectional medium vert", onClick: this.toggleSection.bind(this) },
            React.createElement("div", { className: "form-group col-xs-1 short" },
                React.createElement("a", { href: "#", className: collapseClass },
                    React.createElement("i", { className: "fa fa-chevron-circle-up" }))),
            React.createElement("div", { className: "form-group col-xs-8 short" },
                React.createElement("h4", { className: "sectiontitle" }, this.props.SectionTitle)),
            React.createElement("div", { className: "form-group col-xs-3 align-right short" },
                React.createElement("span", { className: "text-muted small sectionstatus undone" },
                    React.createElement("i", { className: "fa fa-check-square-o done" }),
                    React.createElement("i", { className: "fa fa-square-o undone" }),
                    " \u00A0Complete")));
    };
    return HeaderSection;
}(React.Component));
exports.default = HeaderSection;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(2);
var FormApp_1 = __webpack_require__(1);
ReactDom.render(React.createElement(FormApp_1.default, null), document.getElementById("main"));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = __webpack_require__(6);
var SharePointService = /** @class */ (function () {
    function SharePointService() {
    }
    SharePointService.GetListItems = function (listTitle) {
        return sp_pnp_js_1.default.sp.web.lists.getByTitle(listTitle).items.orderBy("Title").get();
    };
    SharePointService.AddListItem = function (listTitle, item) {
        return sp_pnp_js_1.default.sp.web.lists.getByTitle(listTitle).items.add(item);
    };
    return SharePointService;
}());
exports.default = SharePointService;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = $pnp;

/***/ })
/******/ ]);