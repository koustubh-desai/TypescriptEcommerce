define(["require", "exports", "./oracle/Utils/Router"], function (require, exports, Router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var m = new Router_1.default([
        {
            link: 'plp.html',
            component: 'Plp'
        },
        {
            link: 'pdp.html',
            component: 'Pdp'
        },
        {
            link: 'odp.html',
            component: 'Odp'
        }
    ]);
    m.init();
});
