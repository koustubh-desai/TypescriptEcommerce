var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *
     * @param constructor-Class to be sealed
     */
    function sealed(constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        return class extends constructor {
        };
    }
    /**
     * Seal the Object for security
     * @activeComponent - Pdp or Plp Component extended from Base Class
     */
    let Router = class Router {
        /*
            @paths - coming from Main_oracle. JSON of paths
            url    - resolve current url
            get    - get parameters on page after ? in URL
        */
        constructor(paths) {
            /**
             * Check the URL path on page load
             */
            this.breakURL = () => {
                let file = window.location.href.match(/[A-Z,a-z,0-9]*\.html/)[0];
                let resource = window.location.href.match(/\?(.*)/);
                this.filename = file;
                this.get = (resource && resource[1]) ? resource[1].split('&') : undefined;
            };
            this.init = () => {
                this.routes.forEach((a, b) => {
                    if (a.link == this.filename) {
                        this.currentRoute = a;
                    }
                });
                if (this.currentRoute) {
                    new Promise((resolve_1, reject_1) => { require(['../Pages/' + this.currentRoute.component], resolve_1, reject_1); }).then((widget) => {
                        this.activeComponent = new widget.default(this.get);
                    });
                }
            };
            this.routes = paths;
            this.breakURL();
        }
    };
    Router = __decorate([
        sealed
    ], Router);
    exports.default = Router;
});
