(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");






const routes = [
    { path: ":slug", component: _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"] },
    { path: "", component: _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function AppComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Virtual Maths Camp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AppComponent_mat_toolbar_0_Template_mat_select_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.printStyle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kenya");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hungary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.printStyle);
} }
class AppComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.title = "vmc-cards";
        this.printStyle = "Web";
        this.isPrinting = false;
    }
    export() {
        window.onbeforeprint = () => {
            this.togglePrintMode();
        };
        window.onafterprint = () => {
            this.togglePrintMode();
        };
        // use timeout to allow style updates after isPrinting is enabled
        setTimeout(() => {
            window.print();
        }, 50);
    }
    togglePrintMode() {
        this.isPrinting = !this.isPrinting;
        this.cdr.detectChanges();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [["class", "toolbar", "color", "primary", 4, "ngIf"], ["color", "primary", 1, "toolbar"], ["routerLink", "/", 1, "title"], [1, "example-spacer"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "Web"], ["value", "Kenya"], ["value", "Hungary"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_mat_toolbar_0_Template, 16, 1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPrinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.printStyle === "Web" ? "Web" : "print print-" + ctx.printStyle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n\n.toolbar {\n  cursor: pointer;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udG9vbGJhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_8__["CardsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_8__["CardsComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card.service.ts":
/*!*********************************!*\
  !*** ./src/app/card.service.ts ***!
  \*********************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class CardService {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    readCardContent(slug) {
        const url = `/assets/card-content/cards/${slug}.json`;
        this.card = this.http.get(url);
        return this.card;
    }
    readAllCards() {
        const url = "/assets/card-content/metadata.json";
        this.cards = this.http.get(url);
        return this.cards;
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/card.service */ "./src/app/card.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CardComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Chatbot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.card.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("card card--" + ctx_r0.card.card_suit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("value", ctx_r0.card.card_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "/assets/images/qr/https---virtualmathscamp.com-card-", ctx_r0.card.card_value, "", ctx_r0.card.card_suit.charAt(0).toUpperCase(), ".html.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.updatedContent.main_version.statement, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("VMC_", ctx_r0.card.card_value, "", ctx_r0.card.card_suit.charAt(0).toUpperCase(), "");
} }
class CardComponent {
    constructor(cardService, route) {
        this.cardService = cardService;
        this.route = route;
        this.getCardContent();
        this.getCardsMetaData();
    }
    ngOnInit() { }
    getCardContent() {
        this.cardService
            .readCardContent(this.route.snapshot.params.slug)
            .subscribe((data) => {
            this.content = data;
            this.replaceImageURLs(this.content);
            //console.log("card content", this.content);
        });
    }
    replaceImageURLs(cardContent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const originalContent = JSON.stringify(cardContent);
            const updatedContent = originalContent.replace(/\images/g, "assets/images");
            const newContent = JSON.parse(updatedContent);
            console.log("contentx", newContent);
            this.updatedContent = newContent;
            return newContent;
        });
    }
    getCardsMetaData() {
        this.cards = this.cardService.readAllCards().subscribe((data) => {
            this.cards = data;
            let ncard = this.cards.find((t) => t.slug === this.route.snapshot.params.slug);
            this.card = ncard;
        });
    }
    exportCard() {
        window.print();
        /*
        const data = document.getElementById("cardPDF");
        console.log("id ", data);
        html2canvas(data).then((canvas) => {
          const contentDataURL = canvas.toDataURL("image/png");
          // let pdf = new jspdf("p", "mm", "a4");
          // pdf.addImage(contentDataURL, "png", 0, 0, 210, 0); a4
          // pdf.addImage(contentDataURL, "png", 0, 0, 63, 0);  -- deck szie
    
          //pdf.addImage(contentDataURL, "png", 0, 0, 105, 0); - a6
    
          let pdf = new jspdf("p", "mm", [63.5, 88.8]);
          pdf.addImage(contentDataURL, "png", 0, 0, 63, 0);
          pdf.save(this.card.title);
        });
        */
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 1, vars: 1, consts: [["class", "cards", 4, "ngIf"], [1, "cards"], [1, "card-title"], ["id", "cardPDF"], ["alt", "image", 1, "card-image", 3, "src"], ["id", "test2", 1, "card__inner", "card__inner--centered"], [1, "card__column", 3, "innerHTML"], [1, "vmc-text"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CardComponent_section_0_Template, 11, 9, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updatedContent && ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@charset \"UTF-8\";\nbody {\n  padding: 0;\n  margin: 0;\n  background: #f0f0f0;\n}\n.cards-container {\n  text-align: center;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.card {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  font: 12px \"Calibri\";\n  margin: 20px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n}\n.card:before, .card:after {\n  content: attr(value);\n  position: absolute;\n  width: 12px;\n  text-align: center;\n  letter-spacing: -2px;\n  font-size: 25px;\n}\n.card:before {\n  top: 4px;\n  left: 4px;\n}\n.card:after {\n  bottom: 4px;\n  right: 4px;\n  transform: rotate(180deg);\n}\n.card--heart {\n  color: #e44145;\n}\n.card--heart:before, .card--heart:after {\n  content: attr(value) \" \u2665\";\n}\n.card--spade {\n  color: #252525;\n}\n.card--spade:before, .card--spade:after {\n  content: attr(value) \" \u2660\";\n}\n.card--diamond {\n  color: #e44145;\n}\n.card--diamond:before, .card--diamond:after {\n  content: attr(value) \" \u2666\";\n}\n.card--club {\n  color: #252525;\n}\n.card--club:before, .card--club:after {\n  content: attr(value) \" \u2663\";\n}\n.card__inner {\n  box-sizing: border-box;\n  border-style: ridge;\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  top: 52px;\n  left: 24px;\n  right: 24px;\n  bottom: 32px;\n}\n.card__inner--centered {\n  justify-content: center;\n}\n.card__column {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: black !important;\n}\n.card__column--centered {\n  justify-content: center;\n}\n.card__symbol {\n  display: inline-block;\n  height: 40px;\n  text-align: center;\n}\n.card__symbol:before {\n  font-size: 40px;\n  line-height: 40px;\n}\n.card--heart .card__symbol:before {\n  content: \"\u2665\";\n}\n.card--spade .card__symbol:before {\n  content: \"\u2660\";\n}\n.card--diamond .card__symbol:before {\n  content: \"\u2666\";\n}\n.card--club .card__symbol:before {\n  content: \"\u2663\";\n}\n.card__symbol--rotated, .card__symbol:last-of-type {\n  transform: rotate(180deg);\n}\n.card__symbol:first-of-type {\n  transform: rotate(0);\n}\n.card-image {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  right: 0%;\n}\n.vmc-text {\n  position: absolute;\n  bottom: 0%;\n  left: 0;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: 6px;\n}\n.card-title {\n  font: 18px \"Trebuchet MS\";\n  color: #444;\n  text-align: center;\n}\n.House_image_0 {\n  width: 89%;\n}\n.Colouring_image_0 {\n  width: 100%;\n}\n.Newspaper_image_0 {\n  width: 100%;\n}\n.Two_Distances_image_0 {\n  width: 74%;\n}\n.Avoid_the_River_image_0 {\n  width: 86%;\n}\n.Counting_Squares_image_0 {\n  width: 100%;\n}\n.Going_to_School_image_0 {\n  width: 100%;\n}\n.Benford_s_Law_image_0 {\n  width: 64%;\n}\n.Benford_s_Law_image_1 {\n  width: 50%;\n}\n.Card_Sums_image_0 {\n  width: 75%;\n}\n.Pong_Hau_K_i_image_0 {\n  width: 64%;\n}\n.Triangular_Slices_image_0 {\n  width: 83%;\n}\ndiv p {\n  margin-bottom: 0px;\n}\n.monkey_business {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFXaEI7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQWJXO0FBSWI7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBVEY7QUFZQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUVBLFlBNUJPO0VBNkJQLGtCQXpCYTtFQTBCYixnQkEzQmdCO0VBNEJoQix5Q0FBQTtBQVZGO0FBWUU7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBWEo7QUFjRTtFQUNFLFFBeENXO0VBeUNYLFNBekNXO0FBNkJmO0FBZUU7RUFDRSxXQTdDVztFQThDWCxVQTlDVztFQStDWCx5QkFBQTtBQWJKO0FBZ0JFO0VBQ0UsY0FsRGE7QUFvQ2pCO0FBZ0JJO0VBRUUseUJBQUE7QUFmTjtBQW1CRTtFQUNFLGNBMURlO0FBeUNuQjtBQW1CSTtFQUVFLHlCQUFBO0FBbEJOO0FBc0JFO0VBQ0UsY0FwRWE7QUFnRGpCO0FBc0JJO0VBRUUseUJBQUE7QUFyQk47QUF5QkU7RUFDRSxjQTVFZTtBQXFEbkI7QUF5Qkk7RUFFRSx5QkFBQTtBQXhCTjtBQTZCQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUExQkY7QUE0QkU7RUFDRSx1QkFBQTtBQTFCSjtBQThCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUEzQkY7QUE2QkU7RUFDRSx1QkFBQTtBQTNCSjtBQStCQTtFQUNFLHFCQUFBO0VBQ0EsWUFqSGlCO0VBa0hqQixrQkFBQTtBQTVCRjtBQThCRTtFQUNFLGVBckhlO0VBc0hmLGlCQXRIZTtBQTBGbkI7QUErQkU7RUFDRSxZQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsWUFBQTtBQTlCSjtBQWlDRTtFQUNFLFlBQUE7QUEvQko7QUFrQ0U7RUFDRSxZQUFBO0FBaENKO0FBbUNFO0VBRUUseUJBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxvQkFBQTtBQW5DSjtBQXNDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQW5DRjtBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW5DRjtBQXNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBbkNGO0FBcUNBO0VBQ0UsVUFBQTtBQWxDRjtBQW9DQTtFQUNFLFdBQUE7QUFqQ0Y7QUFtQ0E7RUFDRSxXQUFBO0FBaENGO0FBa0NBO0VBQ0UsVUFBQTtBQS9CRjtBQWlDQTtFQUNFLFVBQUE7QUE5QkY7QUFnQ0E7RUFDRSxXQUFBO0FBN0JGO0FBK0JBO0VBQ0UsV0FBQTtBQTVCRjtBQThCQTtFQUNFLFVBQUE7QUEzQkY7QUE2QkE7RUFDRSxVQUFBO0FBMUJGO0FBNEJBO0VBQ0UsVUFBQTtBQXpCRjtBQTJCQTtFQUNFLFVBQUE7QUF4QkY7QUEwQkE7RUFDRSxVQUFBO0FBdkJGO0FBeUJBO0VBQ0Usa0JBQUE7QUF0QkY7QUF3QkE7RUFDRSxlQUFBO0FBckJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjogI2MwYzBjMDtcbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGd1dHRlcjogMjBweDtcbiRmb250LXNpemU6IDEycHg7XG5cbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XG4kY2FyZC1wYWRkaW5nOiA0cHg7XG4kY2FyZC1jb2xvci1yZWQ6ICNlNDQxNDU7XG4kY2FyZC1jb2xvci1ibGFjazogIzI1MjUyNTtcbiRjYXJkLXN5bWJvbC1zaXplOiA0MHB4O1xuXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbn1cblxuLmNhcmRzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQ6ICRmb250LXNpemUgXCJDYWxpYnJpXCI7XG5cbiAgbWFyZ2luOiAkZ3V0dGVyO1xuICBib3JkZXItcmFkaXVzOiAkY2FyZC1wYWRkaW5nO1xuICBiYWNrZ3JvdW5kOiAkY2FyZC1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcblxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogYXR0cih2YWx1ZSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgdG9wOiAkY2FyZC1wYWRkaW5nO1xuICAgIGxlZnQ6ICRjYXJkLXBhZGRpbmc7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBib3R0b206ICRjYXJkLXBhZGRpbmc7XG4gICAgcmlnaHQ6ICRjYXJkLXBhZGRpbmc7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuXG4gICYtLWhlYXJ0IHtcbiAgICBjb2xvcjogJGNhcmQtY29sb3ItcmVkO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKHZhbHVlKSBcIiDimaVcIjtcbiAgICB9XG4gIH1cblxuICAmLS1zcGFkZSB7XG4gICAgY29sb3I6ICRjYXJkLWNvbG9yLWJsYWNrO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKHZhbHVlKSBcIiDimaBcIjtcbiAgICB9XG4gIH1cblxuICAmLS1kaWFtb25kIHtcbiAgICBjb2xvcjogJGNhcmQtY29sb3ItcmVkO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKHZhbHVlKSBcIiDimaZcIjtcbiAgICB9XG4gIH1cblxuICAmLS1jbHViIHtcbiAgICBjb2xvcjogJGNhcmQtY29sb3ItYmxhY2s7XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIodmFsdWUpIFwiIOKZo1wiO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZF9faW5uZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdG9wOiAxMyAqICRjYXJkLXBhZGRpbmc7XG4gIGxlZnQ6IDYgKiAkY2FyZC1wYWRkaW5nO1xuICByaWdodDogNiAqICRjYXJkLXBhZGRpbmc7XG4gIGJvdHRvbTogOCAqICRjYXJkLXBhZGRpbmc7XG5cbiAgJi0tY2VudGVyZWQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5jYXJkX19jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXG4gICYtLWNlbnRlcmVkIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uY2FyZF9fc3ltYm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6ICRjYXJkLXN5bWJvbC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogJGNhcmQtc3ltYm9sLXNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRjYXJkLXN5bWJvbC1zaXplO1xuICB9XG5cbiAgLmNhcmQtLWhlYXJ0ICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKZpVwiO1xuICB9XG5cbiAgLmNhcmQtLXNwYWRlICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKZoFwiO1xuICB9XG5cbiAgLmNhcmQtLWRpYW1vbmQgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pmmXCI7XG4gIH1cblxuICAuY2FyZC0tY2x1YiAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCLimaNcIjtcbiAgfVxuXG4gICYtLXJvdGF0ZWQsXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDAlO1xufVxuXG4udm1jLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udDogMThweCBcIlRyZWJ1Y2hldCBNU1wiO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkhvdXNlX2ltYWdlXzAge1xuICB3aWR0aDogODklO1xufVxuLkNvbG91cmluZ19pbWFnZV8wIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uTmV3c3BhcGVyX2ltYWdlXzAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5Ud29fRGlzdGFuY2VzX2ltYWdlXzAge1xuICB3aWR0aDogNzQlO1xufVxuLkF2b2lkX3RoZV9SaXZlcl9pbWFnZV8wIHtcbiAgd2lkdGg6IDg2JTtcbn1cbi5Db3VudGluZ19TcXVhcmVzX2ltYWdlXzAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5Hb2luZ190b19TY2hvb2xfaW1hZ2VfMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLkJlbmZvcmRfc19MYXdfaW1hZ2VfMCB7XG4gIHdpZHRoOiA2NCU7XG59XG4uQmVuZm9yZF9zX0xhd19pbWFnZV8xIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5DYXJkX1N1bXNfaW1hZ2VfMCB7XG4gIHdpZHRoOiA3NSU7XG59XG4uUG9uZ19IYXVfS19pX2ltYWdlXzAge1xuICB3aWR0aDogNjQlO1xufVxuLlRyaWFuZ3VsYXJfU2xpY2VzX2ltYWdlXzAge1xuICB3aWR0aDogODMlO1xufVxuZGl2IHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubW9ua2V5X2J1c2luZXNzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-card",
                templateUrl: "./card.component.html",
                styleUrls: ["../cards.component.scss"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/card.service */ "./src/app/card.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return [a0]; };
function CardsComponent_section_0_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chatbot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("card card--" + card_r2.card_suit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, card_r2.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-suit", card_r2.card_suit)("value", card_r2.card_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "/assets/images/qr/https---virtualmathscamp.com-card-", card_r2.card_value, "", card_r2.card_suit.charAt(0).toUpperCase(), ".html.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", card_r2.statement, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("VMC_", card_r2.card_value, "", card_r2.card_suit.charAt(0).toUpperCase(), "");
} }
function CardsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsComponent_section_0_section_1_Template, 8, 12, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.deck);
} }
class CardsComponent {
    constructor(cardService) {
        this.cardService = cardService;
        this.deck = null;
        this.combineData();
    }
    combineData() {
        this.cardService.readAllCards().subscribe((data) => {
            data.forEach((element, i) => {
                this.cardService.readCardContent(element.slug).subscribe((data) => {
                    element.type = data.metadata.type;
                    element.statement = this.replaceImageURLS(data.main_version.statement);
                });
            });
            this.deck = data;
            console.log("deck update", this.deck);
        });
    }
    replaceImageURLS(content) {
        const updatedContent = content.replace(/images/g, "assets/images");
        return updatedContent;
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"])); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 1, vars: 1, consts: [["class", "cards-container", 4, "ngIf"], [1, "cards-container"], [3, "class", "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["alt", "image", 1, "card-image", 3, "src"], [1, "card__inner", "card__inner--centered"], [1, "card__column", 3, "innerHTML"], [1, "vmc-text"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardsComponent_section_0_Template, 2, 1, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@charset \"UTF-8\";\nbody {\n  padding: 0;\n  margin: 0;\n  background: #f0f0f0;\n}\n.cards-container {\n  text-align: center;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.card {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  font: 12px \"Calibri\";\n  margin: 20px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n}\n.card:before, .card:after {\n  content: attr(value);\n  position: absolute;\n  width: 12px;\n  text-align: center;\n  letter-spacing: -2px;\n  font-size: 25px;\n}\n.card:before {\n  top: 4px;\n  left: 4px;\n}\n.card:after {\n  bottom: 4px;\n  right: 4px;\n  transform: rotate(180deg);\n}\n.card--heart {\n  color: #e44145;\n}\n.card--heart:before, .card--heart:after {\n  content: attr(value) \" \u2665\";\n}\n.card--spade {\n  color: #252525;\n}\n.card--spade:before, .card--spade:after {\n  content: attr(value) \" \u2660\";\n}\n.card--diamond {\n  color: #e44145;\n}\n.card--diamond:before, .card--diamond:after {\n  content: attr(value) \" \u2666\";\n}\n.card--club {\n  color: #252525;\n}\n.card--club:before, .card--club:after {\n  content: attr(value) \" \u2663\";\n}\n.card__inner {\n  box-sizing: border-box;\n  border-style: ridge;\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  top: 52px;\n  left: 24px;\n  right: 24px;\n  bottom: 32px;\n}\n.card__inner--centered {\n  justify-content: center;\n}\n.card__column {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: black !important;\n}\n.card__column--centered {\n  justify-content: center;\n}\n.card__symbol {\n  display: inline-block;\n  height: 40px;\n  text-align: center;\n}\n.card__symbol:before {\n  font-size: 40px;\n  line-height: 40px;\n}\n.card--heart .card__symbol:before {\n  content: \"\u2665\";\n}\n.card--spade .card__symbol:before {\n  content: \"\u2660\";\n}\n.card--diamond .card__symbol:before {\n  content: \"\u2666\";\n}\n.card--club .card__symbol:before {\n  content: \"\u2663\";\n}\n.card__symbol--rotated, .card__symbol:last-of-type {\n  transform: rotate(180deg);\n}\n.card__symbol:first-of-type {\n  transform: rotate(0);\n}\n.card-image {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  right: 0%;\n}\n.vmc-text {\n  position: absolute;\n  bottom: 0%;\n  left: 0;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: 6px;\n}\n.card-title {\n  font: 18px \"Trebuchet MS\";\n  color: #444;\n  text-align: center;\n}\n.House_image_0 {\n  width: 89%;\n}\n.Colouring_image_0 {\n  width: 100%;\n}\n.Newspaper_image_0 {\n  width: 100%;\n}\n.Two_Distances_image_0 {\n  width: 74%;\n}\n.Avoid_the_River_image_0 {\n  width: 86%;\n}\n.Counting_Squares_image_0 {\n  width: 100%;\n}\n.Going_to_School_image_0 {\n  width: 100%;\n}\n.Benford_s_Law_image_0 {\n  width: 64%;\n}\n.Benford_s_Law_image_1 {\n  width: 50%;\n}\n.Card_Sums_image_0 {\n  width: 75%;\n}\n.Pong_Hau_K_i_image_0 {\n  width: 64%;\n}\n.Triangular_Slices_image_0 {\n  width: 83%;\n}\ndiv p {\n  margin-bottom: 0px;\n}\n.monkey_business {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFXaEI7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQWJXO0FBSWI7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBVEY7QUFZQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUVBLFlBNUJPO0VBNkJQLGtCQXpCYTtFQTBCYixnQkEzQmdCO0VBNEJoQix5Q0FBQTtBQVZGO0FBWUU7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBWEo7QUFjRTtFQUNFLFFBeENXO0VBeUNYLFNBekNXO0FBNkJmO0FBZUU7RUFDRSxXQTdDVztFQThDWCxVQTlDVztFQStDWCx5QkFBQTtBQWJKO0FBZ0JFO0VBQ0UsY0FsRGE7QUFvQ2pCO0FBZ0JJO0VBRUUseUJBQUE7QUFmTjtBQW1CRTtFQUNFLGNBMURlO0FBeUNuQjtBQW1CSTtFQUVFLHlCQUFBO0FBbEJOO0FBc0JFO0VBQ0UsY0FwRWE7QUFnRGpCO0FBc0JJO0VBRUUseUJBQUE7QUFyQk47QUF5QkU7RUFDRSxjQTVFZTtBQXFEbkI7QUF5Qkk7RUFFRSx5QkFBQTtBQXhCTjtBQTZCQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUExQkY7QUE0QkU7RUFDRSx1QkFBQTtBQTFCSjtBQThCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUEzQkY7QUE2QkU7RUFDRSx1QkFBQTtBQTNCSjtBQStCQTtFQUNFLHFCQUFBO0VBQ0EsWUFqSGlCO0VBa0hqQixrQkFBQTtBQTVCRjtBQThCRTtFQUNFLGVBckhlO0VBc0hmLGlCQXRIZTtBQTBGbkI7QUErQkU7RUFDRSxZQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsWUFBQTtBQTlCSjtBQWlDRTtFQUNFLFlBQUE7QUEvQko7QUFrQ0U7RUFDRSxZQUFBO0FBaENKO0FBbUNFO0VBRUUseUJBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxvQkFBQTtBQW5DSjtBQXNDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQW5DRjtBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW5DRjtBQXNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBbkNGO0FBcUNBO0VBQ0UsVUFBQTtBQWxDRjtBQW9DQTtFQUNFLFdBQUE7QUFqQ0Y7QUFtQ0E7RUFDRSxXQUFBO0FBaENGO0FBa0NBO0VBQ0UsVUFBQTtBQS9CRjtBQWlDQTtFQUNFLFVBQUE7QUE5QkY7QUFnQ0E7RUFDRSxXQUFBO0FBN0JGO0FBK0JBO0VBQ0UsV0FBQTtBQTVCRjtBQThCQTtFQUNFLFVBQUE7QUEzQkY7QUE2QkE7RUFDRSxVQUFBO0FBMUJGO0FBNEJBO0VBQ0UsVUFBQTtBQXpCRjtBQTJCQTtFQUNFLFVBQUE7QUF4QkY7QUEwQkE7RUFDRSxVQUFBO0FBdkJGO0FBeUJBO0VBQ0Usa0JBQUE7QUF0QkY7QUF3QkE7RUFDRSxlQUFBO0FBckJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjogI2MwYzBjMDtcbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGd1dHRlcjogMjBweDtcbiRmb250LXNpemU6IDEycHg7XG5cbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XG4kY2FyZC1wYWRkaW5nOiA0cHg7XG4kY2FyZC1jb2xvci1yZWQ6ICNlNDQxNDU7XG4kY2FyZC1jb2xvci1ibGFjazogIzI1MjUyNTtcbiRjYXJkLXN5bWJvbC1zaXplOiA0MHB4O1xuXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbn1cblxuLmNhcmRzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQ6ICRmb250LXNpemUgXCJDYWxpYnJpXCI7XG5cbiAgbWFyZ2luOiAkZ3V0dGVyO1xuICBib3JkZXItcmFkaXVzOiAkY2FyZC1wYWRkaW5nO1xuICBiYWNrZ3JvdW5kOiAkY2FyZC1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcblxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogYXR0cih2YWx1ZSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgdG9wOiAkY2FyZC1wYWRkaW5nO1xuICAgIGxlZnQ6ICRjYXJkLXBhZGRpbmc7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBib3R0b206ICRjYXJkLXBhZGRpbmc7XG4gICAgcmlnaHQ6ICRjYXJkLXBhZGRpbmc7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuXG4gICYtLWhlYXJ0IHtcbiAgICBjb2xvcjogJGNhcmQtY29sb3ItcmVkO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKHZhbHVlKSBcIiDimaVcIjtcbiAgICB9XG4gIH1cblxuICAmLS1zcGFkZSB7XG4gICAgY29sb3I6ICRjYXJkLWNvbG9yLWJsYWNrO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKHZhbHVlKSBcIiDimaBcIjtcbiAgICB9XG4gIH1cblxuICAmLS1kaWFtb25kIHtcbiAgICBjb2xvcjogJGNhcmQtY29sb3ItcmVkO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKHZhbHVlKSBcIiDimaZcIjtcbiAgICB9XG4gIH1cblxuICAmLS1jbHViIHtcbiAgICBjb2xvcjogJGNhcmQtY29sb3ItYmxhY2s7XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIodmFsdWUpIFwiIOKZo1wiO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZF9faW5uZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdG9wOiAxMyAqICRjYXJkLXBhZGRpbmc7XG4gIGxlZnQ6IDYgKiAkY2FyZC1wYWRkaW5nO1xuICByaWdodDogNiAqICRjYXJkLXBhZGRpbmc7XG4gIGJvdHRvbTogOCAqICRjYXJkLXBhZGRpbmc7XG5cbiAgJi0tY2VudGVyZWQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5jYXJkX19jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXG4gICYtLWNlbnRlcmVkIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uY2FyZF9fc3ltYm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6ICRjYXJkLXN5bWJvbC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogJGNhcmQtc3ltYm9sLXNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRjYXJkLXN5bWJvbC1zaXplO1xuICB9XG5cbiAgLmNhcmQtLWhlYXJ0ICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKZpVwiO1xuICB9XG5cbiAgLmNhcmQtLXNwYWRlICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKZoFwiO1xuICB9XG5cbiAgLmNhcmQtLWRpYW1vbmQgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pmmXCI7XG4gIH1cblxuICAuY2FyZC0tY2x1YiAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCLimaNcIjtcbiAgfVxuXG4gICYtLXJvdGF0ZWQsXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDAlO1xufVxuXG4udm1jLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udDogMThweCBcIlRyZWJ1Y2hldCBNU1wiO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkhvdXNlX2ltYWdlXzAge1xuICB3aWR0aDogODklO1xufVxuLkNvbG91cmluZ19pbWFnZV8wIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uTmV3c3BhcGVyX2ltYWdlXzAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5Ud29fRGlzdGFuY2VzX2ltYWdlXzAge1xuICB3aWR0aDogNzQlO1xufVxuLkF2b2lkX3RoZV9SaXZlcl9pbWFnZV8wIHtcbiAgd2lkdGg6IDg2JTtcbn1cbi5Db3VudGluZ19TcXVhcmVzX2ltYWdlXzAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5Hb2luZ190b19TY2hvb2xfaW1hZ2VfMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLkJlbmZvcmRfc19MYXdfaW1hZ2VfMCB7XG4gIHdpZHRoOiA2NCU7XG59XG4uQmVuZm9yZF9zX0xhd19pbWFnZV8xIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5DYXJkX1N1bXNfaW1hZ2VfMCB7XG4gIHdpZHRoOiA3NSU7XG59XG4uUG9uZ19IYXVfS19pX2ltYWdlXzAge1xuICB3aWR0aDogNjQlO1xufVxuLlRyaWFuZ3VsYXJfU2xpY2VzX2ltYWdlXzAge1xuICB3aWR0aDogODMlO1xufVxuZGl2IHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubW9ua2V5X2J1c2luZXNzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cards",
                templateUrl: "./cards.component.html",
                styleUrls: ["../cards.component.scss"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");










class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/vmc-cards/vmc-cards/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map