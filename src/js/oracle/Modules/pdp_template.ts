import Stars, { QuantityStepper } from './CommonComponents';

class Template{
    json;
    activeImage;
    qs;
    qs2;
    colorCodes;
    stars;

    constructor(json,colorCodes){
        this.json=json;
        this.activeImage = this.json.details.images[0];
        this.json.details.images.splice(0,1);
        this.colorCodes = colorCodes;
        this.qs = new QuantityStepper();
    }
    resovePostRender(){
        this.qs.appendto('quanitityStepper');
    }
    showImage=(event)=>{
       //console.log('in thumbail ....');
        
    }
    getCount=()=>{
        return this.qs.count.value;
    }
    getTemplate(){
        return `
    <form action="odp.html" id="productDetailForm">
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-5 col-xs-12">
                <img id="main-image" src="images/${this.activeImage.src}" alt="${this.activeImage.alt}">
                <div id="product-images">
                    ${this.json.details.images.map((el)=>{
                        return '<a href="#"><img class="thumbnails" src="images/'+el.src+'" alt="'+el.alt+'"></a>'
                    }).join('')}
                </div>
            </div>
            <div class="col-lg-7 col-xs-12">
                <div class="product-title">
                    <h1>${this.json.name}</h1>
                    <p class="item-details">Item #:${this.json.id}</p>
                    <p class="rating">${new Stars(this.json.rating).html} <span class="review-text"><a> Reviews(0)</a></span></p>
                </div>
                <!-- Product type -->
                <div class="price-block">
                    <del class="list-price">List Price: ${this.json.price.currency}${this.json.price.high}</del><br>
                    <p class="curr-price"><b>${this.json.price.currency}${this.json.price.discountedPrice}</b></p>
                    <span class="sale-price hotPrice">${this.json.price.currency}${this.json.price.sellingPrice} SALE</span><br>
                </div>
                <div class="btn-size">
                <p><b>Size: </b><span class="selected"></span></p>
                <ul class="btn-ul">
                    ${this.json.details.sizes.map((el,id)=>{
                        return '<li><p class="sizeContainer"><input id="radio'+id+'"'+(el.status=='disabled'?'disabled="disabled"':'')+'value="'+el.name+'" type="radio" class="sizeBtn" name="size"><label style="text-transform:capitalize;" class="'+(el.status=='disabled'?'disabledSize':'')+' customRadio" for="radio'+id+'"><span class="firstLetter">'+el.name.substr(0,1)+'</span><span class="ax-hidden">'+el.name.substr(1)+'</span></label></p></li>'
                
                    //return '<button class="sizeBtn" style="text-transform:capitalize;"><span>'+el.substr(0,1)+'</span><span class="ax-hidden">'+el.substr(1)+'</span></button>'
                }).join('')}
                </ul>
                </div>
                <div class="color-area">
                    <p class="color-title"><b>Color: </b><span class="selected"></span></p>
                    <ul id="color-ul">
                    ${this.json.details.colors.map((el,id)=>{
                        return '<li><input id="color'+id+'"'+(el.status=='disabled'?'disabled="disabled"':'')+'value="'+el.name+'" type="radio" class="colorBtn" name="color"><label class="'+(el.status=='disabled'?'disabled':'')+' " for="color'+id+'"style="background:#'+this.colorCodes[el.name]+';"><span class="ax-hidden">'+el.name+'</span></label></li>'
                    }).join('')}
                    </ul>
                </div>
                <p class="quantityText"><b>Quantity:</b></p>
                <div class="row">
                    
                    <div class="col-lg-4 col-xs-12 qtyBtn" id="quanitityStepper">
                        <!-- Quantity Stepper -->
                        
                    </div>
                    <input class="col-lg-5 col-xs-11 qtyBtn" type="submit" value="Add To Cart"/>
                </div>
                <div class="overview">
                    <h1>Overview</h1>
                    <p class="product-desc">${this.json.details.description}</p>
                </div>
            </div>
            </div>
        </div>
    </form>
    `;
    }
}

//customElements.define('quantity-stepper', QuantityStepper);
export default Template;
