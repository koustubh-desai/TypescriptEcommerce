class BasePage{
    container:any;
    template:String;
    className:String;
    getParams:any;
    /**
     * 
     * @param args[0] - Array of GET paramerts from URL
     */
    constructor(args:any){
        this.template = this.template?this.template:`template for ${this} has not been set`;
        this.container = document.getElementsByClassName('container')[0];
        this.getParams = {};
        // args will be ["mi=ci","go=no",...]
        if(args){
            args.map((el,id)=>{
                //See if = exists in the string
                if(el.search(/=/gi)){
                    let k = el.split("=");
                    this.getParams[k[0]] = k[1];
                };
            })
        }
    }
    setTemplate(){

    }
    /**
     * 
     * @param domId : Id of the HTML Tag on Page where this component will be shown
     */
    setContainer(domId:string){
        this.container = document.getElementById(domId);
    }
    render(){
        this.container.innerHTML=this.template;
    }
}


export default BasePage;