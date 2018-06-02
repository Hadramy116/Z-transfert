webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transfert_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transfert_detail_transfert_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransfertListPage = (function () {
    function TransfertListPage(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    TransfertListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transfert_detail_transfert_detail__["a" /* TransfertDetailPage */], property);
    };
    TransfertListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.transfers = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    TransfertListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    TransfertListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.transfers = data; })
            .catch(function (error) { return alert(error); });
    };
    TransfertListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").setView([42.361132, -71.070876], 14);
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    TransfertListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup([]);
        this.transfers.forEach(function (property) {
            if (property.lat, property.long) {
                var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([property.lat, property.long]).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return TransfertListPage;
}());
TransfertListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transfert-list',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\transfert-list\transfert-list.html"*/'<ion-header>\n\n        <ion-header>\n\n                <ion-navbar>\n\n                    <button ion-button  hide-back-button="true" menuToggle>\n\n                        <ion-icon name="menu"></ion-icon>\n\n                    </button>\n\n            \n\n                    <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                               (ionCancel)="onCancel($event)"></ion-searchbar>\n\n                </ion-navbar>\n\n        </ion-header>\n\n    \n\n</ion-header>\n\n\n\n<ion-content class="transfer-list">\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let transfer of transfers">\n\n            <button ion-item (click)="openPropertyDetail(transfer)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{transfer.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{transfer.title}}</h2>\n\n                <p>{{transfer.city}}, {{transfer.state}} ∙ {{ transfer.price }}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(transfer)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\transfert-list\transfert-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_transfert_service_mock__["a" /* TransfertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], TransfertListPage);

//# sourceMappingURL=transfert-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransfertDetailPage = (function () {
    function TransfertDetailPage(actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(function (property) { return _this.property = property; });
    }
    TransfertDetailPage.prototype.favorite = function (property) {
        var _this = this;
        this.propertyService.favorite(property)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    TransfertDetailPage.prototype.share = function (property) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    return TransfertDetailPage;
}());
TransfertDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transfert-detail',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\transfert-detail\transfert-detail.html"*/'<ion-header>\n\n    <ion-navbar  hide-back-button="true">\n\n        <ion-title>Transfert</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="property.id">\n\n        <ion-card-content>\n\n            <h2 class="card-title">Detail de transaction </h2>\n\n            \n\n        </ion-card-content>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-icon item-left name="moon"></ion-icon>\n\n                <h3>Descripition</h3>\n\n                <ion-note item-right>{{property.title}}</ion-note>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-icon item-left name="md-cash"></ion-icon>\n\n                <h3>Montant</h3>\n\n                <ion-note item-right>{{property.price}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                   <ion-icon item-left name="md-clock"></ion-icon>\n\n                    <h3>Date </h3>\n\n                    <ion-note item-right>20/05/2018 ,12:27 </ion-note>\n\n                </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n\n                <ion-icon name="md-checkmark"></ion-icon>\n\n                Valider la transaction\n\n            </button>\n\n          \n\n        </ion-item>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\transfert-detail\transfert-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__["a" /* TransfertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], TransfertDetailPage);

//# sourceMappingURL=transfert-detail.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Envoi',
            subTitle: 'done',
            buttons: ['ok']
        });
        alert.present();
    };
    return MessagePage;
}());
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\message\message.html"*/'<!--\n\n  Generated template for the MessagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>message</ion-title>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n         Saisir message info\n\n        </ion-card-header>\n\n      \n\n        <ion-list>\n\n           <ion-item>\n\n              <ion-label color="primary">Nom</ion-label>\n\n              <ion-input placeholder=" votre nom"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label color="primary">Email </ion-label>\n\n              <ion-input placeholder="votre email "></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label color="primary">Titre</ion-label>\n\n              <ion-input placeholder="titre"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Message</ion-label>\n\n                <ion-input placeholder="ecrire"></ion-input>\n\n              </ion-item>\n\n            <ion-item>\n\n                <button ion-button round (click)="presentAlert()"><ion-icon name="md-paper-plane" ></ion-icon></button>\n\n            </ion-item>\n\n          </ion-list>\n\n      </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\message\message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\welcome\welcome.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Welcome</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n    <ion-slides>\n\n        <ion-slide style="background-image: url(\'assets/img/1.jpg\')">\n\n            <p>Money Transfert</p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/1.jpg\')">\n\n            <p>En Mauritanie...</p>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>About</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    \n\n\n\n    <div padding class="about-info">\n\n\n\n        <h4>Transfert d\'argant</h4>\n\n\n\n        <p>\n\n            Developper par Mima & Lala\n\n        </p>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfert_detail_transfert_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ValidationListPage = (function () {
    function ValidationListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.getFavorites();
    }
    ValidationListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfert_detail_transfert_detail__["a" /* TransfertDetailPage */], favorite.property);
    };
    ValidationListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    ValidationListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    return ValidationListPage;
}());
ValidationListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-validation-list',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\validation-list\validation-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Tx valide</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let favorite of favorites">\n\n            <button ion-item (click)="itemTapped(favorite)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{favorite.property.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{favorite.property.title}}</h2>\n\n                <p>{{favorite.property.city}}, {{favorite.property.state}} ∙ {{favorite.property.price}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\validation-list\validation-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__["a" /* TransfertService */]])
], ValidationListPage);

//# sourceMappingURL=validation-list.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SendMoneyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SendMoneyPage = (function () {
    function SendMoneyPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SendMoneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendMoneyPage');
    };
    SendMoneyPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Envoi',
            subTitle: 'done',
            buttons: ['ok']
        });
        alert.present();
    };
    return SendMoneyPage;
}());
SendMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-send-money',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\send-money\send-money.html"*/'<!--\n\n  Generated template for the SendMoneyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n\n\n    <ion-navbar [hideBackButton]="true">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Envoi d\'argant</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n         Saisir transaction info\n\n        </ion-card-header>\n\n      \n\n        <ion-list>\n\n           <ion-item>\n\n              <ion-label color="primary">Num de CmptS</ion-label>\n\n              <ion-input name="IdS" #IdS="ngModel" [(ngModel)]="moneyServices.selectedListeMoney.IdS"  placeholder=" Num de compte sender"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label color="primary">Num de CmptR</ion-label>\n\n              <ion-input #IdR="ngModel" [(ngModel)]="moneyServices.selectedListeMoney.IdR" placeholder="Num de compte Receiver "></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label color="primary">Montant</ion-label>\n\n              <ion-input  #Montant="ngModel" [(ngModel)]="moneyServices.selectedListeMoney.Montant" placeholder="montant"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Description</ion-label>\n\n                <ion-input  #DescArg="ngModel" [(ngModel)]="moneyServices.selectedListeMoney.DescArg" placeholder="Description"></ion-input>\n\n              </ion-item>\n\n            <ion-item>\n\n                <button ion-button round (click)="presentAlert()"><ion-icon name="md-paper-plane" ></ion-icon></button>\n\n            </ion-item>\n\n          </ion-list>\n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\send-money\send-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SendMoneyPage);

//# sourceMappingURL=send-money.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfert_list_transfert_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.users = [
            {
                username: "mima",
                pass: "mima"
            },
            {
                username: "client",
                pass: "pass"
            }
        ];
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.users.forEach(function (element) {
            if (element.username == _this.username && element.pass == _this.password)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__transfert_list_transfert_list__["a" /* TransfertListPage */]);
            else {
                _this.presentAlert();
            }
        });
    };
    LoginPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'email ou mots de passe incorrect !!!',
            buttons: ['ok']
        });
        alert.present();
    };
    LoginPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
    };
    LoginPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__message_message__["a" /* MessagePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding style="background-image: url(\'assets/img/home.jpg\');background-repeat: no-reapit; background-size:100% 100%">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 style="margin-left:auto ;margin-right :auto;display:block;width:100px;height:100px;" ></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n<ion-grid >\n\n<ion-row>\n\n    <ion-col col-4></ion-col>\n\n      <ion-col col-4 style="margin-left:auto ;margin-right :auto;display:block;">\n\n        <img  src="../assets/img/nnm.png" style=" width:100%;height: auto;\n\n        border-radius: 100%;"> \n\n      </ion-col>\n\n      <ion-col col-4></ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n            <ion-list  style="margin-top:30px;margin-bottom:30px" >\n\n                 \n\n                    <ion-item class="item"style="margin-top:30px;margin-bottom:30px;">\n\n                      \n\n                      <ion-input type="email" [(ngModel)]="username" name="username" placeholder="Email"></ion-input>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item class="item" style="margin-top:30px;margin-bottom:30px;">\n\n                      \n\n                      <ion-input type="password" [(ngModel)]="password" name="pass"  placeholder="password"></ion-input>\n\n                    </ion-item>      \n\n                  \n\n                    <ion-row>\n\n                      <ion-col text-center>\n\n                        <button style="margin-top:15px ;height:35px;font-size:14px;background:rgb(32, 48, 54);" ion-button  (click)="login()">\n\n                            Connecter\n\n                        </button>\n\n                      </ion-col>\n\n                    </ion-row>    \n\n            </ion-list>\n\n\n\n       \n\n\n\n      <ion-fab bottom right >\n\n          <button ion-fab color="Primary" ><ion-icon name="add"></ion-icon></button>\n\n          \n\n          <ion-fab-list side="top" >\n\n            <button ion-fab (click)="map()"><ion-icon name="md-map"></ion-icon></button>\n\n            <button ion-fab (click)="contact()" ><ion-icon name="md-mail"></ion-icon></button>\n\n            \n\n          </ion-fab-list>\n\n        </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").setView([18.0864, -15.9753], 14);
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: ' &copy; Mima'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    MapPage.prototype.showMarkers = function () {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup([]);
        this.map.addLayer(this.markersGroup);
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>map</ion-title>\n\n   \n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n  <div ></div>\n\n</ion-content>\n\n<ion-footer padding>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>notification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_transfert_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transfert_list_transfert_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transfert_detail_transfert_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_validation_list_validation_list__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_send_money_send_money__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_validation_validation__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notification_notification__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_message_message__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_list_list__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_transfert_list_transfert_list__["a" /* TransfertListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_transfert_detail_transfert_detail__["a" /* TransfertDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_validation_validation__["a" /* ValidationPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_validation_list_validation_list__["a" /* ValidationListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_transfert_list_transfert_list__["a" /* TransfertListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_transfert_detail_transfert_detail__["a" /* TransfertDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_validation_validation__["a" /* ValidationPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_validation_list_validation_list__["a" /* ValidationListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_transfert_service_mock__["a" /* TransfertService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_transfert_list_transfert_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_validation_list_validation_list__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_send_money_send_money__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_message_message__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Notification', component: __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__["a" /* NotificationPage */], icon: 'star' },
            { title: 'List de transaction', component: __WEBPACK_IMPORTED_MODULE_6__pages_transfert_list_transfert_list__["a" /* TransfertListPage */], icon: 'home' },
            { title: 'Transction valide', component: __WEBPACK_IMPORTED_MODULE_7__pages_validation_list_validation_list__["a" /* ValidationListPage */], icon: 'star' },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_11__pages_message_message__["a" /* MessagePage */], icon: 'email' },
            { title: 'Envoi', component: __WEBPACK_IMPORTED_MODULE_8__pages_send_money_send_money__["a" /* SendMoneyPage */], icon: 'send' },
        ];
        this.accountMenuItems = [
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */], icon: 'ios-contact' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <img class="menu-logo" src="../assets/img/zt.jpg" />\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        \n\n      </ion-list-header >\n\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Help\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Account\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" hideBackButton="true"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var properties = [
    {
        id: 1,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "sidi vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "med vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "sidi vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 4,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "ksjd vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 5,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "sidi vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    }
];
/* harmony default export */ __webpack_exports__["a"] = (properties);
//# sourceMappingURL=mock-transfert.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_validationService__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_validationService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__validation_validationService__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ValidationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ValidationPage = (function () {
    function ValidationPage(navCtrl, navParams, valideService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValidationPage');
    };
    return ValidationPage;
}());
ValidationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-validation',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\validation\validation.html"*/'<!--\n\n  Generated template for the ValidationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>validation</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Transaction  info\n\n        </ion-card-header>\n\n      \n\n        <ion-list>\n\n            <ion-item>\n\n              <ion-label color="primary">Num CmptD</ion-label>\n\n              <ion-label >0035</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label color="primary"> description d\'argent</ion-label>\n\n              <ion-label >Sidi vers Ali</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label color="primary">Montant</ion-label>\n\n                <ion-label >20000 Un</ion-label>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-card>\n\n          <ion-card>\n\n              <ion-card-header>\n\n               Saisir Validation info\n\n              </ion-card-header>\n\n            <ion-list>\n\n                <ion-item>\n\n                  <ion-label color="primary">INN </ion-label>\n\n                  <ion-input name="INN" #INN="ngModel" [(ngModel)]="validationServices.selectedValideListe.INN" placeholder="INN de destinataire"></ion-input>\n\n                </ion-item>\n\n                   <ion-item>\n\n                <button ion-button round (click)="presentAlert()">Valider</button>\n\n            </ion-item>\n\n                </ion-list>\n\n            \n\n\n\n         \n\n      </ion-card>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\validation\validation.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__validation_validationService__["valideServices"]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__validation_validationService__["valideServices"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__validation_validationService__["valideServices"]) === "function" && _c || Object])
], ValidationPage);

var _a, _b, _c;
//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\list\list.html"*/'<ion-header > \n\n  <ion-navbar hideBackButton="true">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\z\Z-transfert\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

//# sourceMappingURL=validationService.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_transfert__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransfertService = (function () {
    function TransfertService() {
        this.favoriteCounter = 0;
        this.favorites = [];
    }
    TransfertService.prototype.addIhem = function (property) {
        __WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */].push(property);
    };
    TransfertService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */]);
    };
    TransfertService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */][id - 1]);
    };
    TransfertService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */].filter(function (property) {
            return (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    TransfertService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    TransfertService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    TransfertService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    return TransfertService;
}());
TransfertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], TransfertService);

//# sourceMappingURL=transfert-service-mock.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map