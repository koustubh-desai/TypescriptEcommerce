"use strict";
import Router from './oracle/Utils/Router';
var m = new Router([
    {
        link:'plp.html',
        component:'Plp'
    },
    {
        link:'pdp.html',
        component:'Pdp'
    },
    {
        link:'odp.html',
        component:'Odp'
    }
]);
m.init();



