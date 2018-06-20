import parentJson from './StaticJson';
class Ajax{
    
    constructor(){
        
    }
    getFromUrl(url:String,id?:any){
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //Decide the JSON the be sent back here
                switch(url){
                    case '/Products':
                        resolve(parentJson.productList);
                        break;
                    case '/product-details':
                        let product = undefined;
                        parentJson.productList.map((el:any,index)=>{
                            if(el.id == id){
                                product = el;
                            }
                        });
                        //console.log('JOJO',{json:product.details,price:product.price,rating:product.rating,colors:parentJson.colorCodes});
                        resolve({json:product,colors:parentJson.colorCodes});
                        break;
                    case 'order-products':
                        let products = [];                        
                        if(id.length){
                            while(id.length){
                                let k = id.pop();
                                parentJson.productList.map((el:any,index)=>{
                                    if(el.id == k.id){
                                        el.quantity = k.count;
                                        products.push(el);
                                    }
                                });
                            }
                        }
                        else{
                            products.push(parentJson.productList[0]);
                            products[0].quantity = 1;
                        }
                        resolve({products:products,orderDetails:parentJson.orderDetails});
                    break;
                }
            }, 0);
        });
        return promise;
    }

}
const ajax = new Ajax();
export default ajax;

/*class Ajax{
    private url:String;
    private method:String;
    private req:any;
    constructor(u,m) {
        this.url = u?u:'';
        this.method = m?m:'GET';
        this.RequestSetup();
    }
    private RequestSetup(){
        this.req = new XMLHttpRequest();
        this.req.onreadystatechange = (e) =>{
            switch(this.req.readyState){
                case 1:
                break;
                case 2:
                break;
                case 3:
                break;
                case 4:
                document.write(this.req.responseText);
                break;
            }
        };
    }
    public Trigger = () => {
        
        this.req.open(this.method,this.url,true);
        this.req.send();
    }

    public StaticJson = {
        
        'kiko':'gogo'
        
    }
}
export default Ajax;*/