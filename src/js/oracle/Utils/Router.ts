"use strict";
/**
 * 
 * @param constructor-Class to be sealed
 */
function sealed<T extends {new(...args:any[]):{}}>(constructor:T) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    return class extends constructor {}
}

/**
 * Seal the Object for security
 * @activeComponent - Pdp or Plp Component extended from Base Class
 */
@sealed
class Router {
    routes:RouteData[];
    currentRoute:RouteData;
    filename:Object;
    get:Object;
    activeComponent:any;
    /*
        @paths - coming from Main_oracle. JSON of paths
        url    - resolve current url
        get    - get parameters on page after ? in URL
    */
    constructor(paths: RouteData[]) {
        this.routes = paths;
        this.breakURL();      
    }
    /**
     * Check the URL path on page load
     */
    breakURL=()=>{
        let file = window.location.href.match(/[A-Z,a-z,0-9]*\.html/)[0];
        let resource = window.location.href.match(/\?(.*)/);
        this.filename = file;
        this.get = (resource && resource[1])?resource[1].split('&'):undefined;
    }

    init=()=>{
        this.routes.forEach((a:RouteData,b:Number)=>{
            if(a.link == this.filename){this.currentRoute = a;} 
        });

        if(this.currentRoute){
            import('../Pages/'+this.currentRoute.component).then((widget) => {
                this.activeComponent = new widget.default(this.get);
            });
        }
    }

}

interface RouteData {
    link: String;
    component: String;
}
export default Router;