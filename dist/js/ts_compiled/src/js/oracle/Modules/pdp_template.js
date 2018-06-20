define(["require", "exports", "./CommonComponents"], function (require, exports, CommonComponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Template {
        constructor(json, colorCodes) {
            this.showImage = (event) => {
                console.log('in thumbail ....');
            };
            this.getCount = () => {
                return this.qs.count.value;
            };
            this.json = json;
            this.activeImage = this.json.details.images[0];
            this.json.details.images.splice(0, 1);
            this.colorCodes = colorCodes;
            this.qs = new CommonComponents_1.QuantityStepper();
        }
        resovePostRender() {
            this.qs.appendto('quanitityStepper');
        }
        getTemplate() {
            return `
    <form action="odp.html" id="productDetailForm">
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-xs-12">
                <img id="main-image" src="images/${this.activeImage}" alt="Product Image">
                <div>
                    ${this.json.details.images.map((el) => {
                return '<a href="#"><img class="thumbnails" src="images/' + el + '" alt="Product Image"></a>';
            }).join('')}
                </div>
            </div>
            <div class="col-lg-6 col-xs-12">
                <div class="product-title">
                    <h1>${this.json.name}</h1>
                    <p class="item-details">Item #:${this.json.id}</p>
                    <p class="rating">${new CommonComponents_1.default(this.json.rating).html}</p><a>Reviews(0)</a>
                </div>
                <!-- Product type -->
                <div class="price-block">
                    <span class="list-price">ListPrice:${this.json.price.currency} ${this.json.price.high}</span>
                    <span class="sale-price">${this.json.price.currency} ${this.json.price.discountedPrice}</span>
                    <span class="sale-price">${this.json.price.currency} ${this.json.price.sellingPrice}</span>
                </div>
                <div class="btn-size">
                <p>Size: <span id="selected"></span></p>
                <ul class="btn-ul">
                    ${this.json.details.sizes.map((el, id) => {
                console.log(el, id);
                return '<li><input id="radio' + id + '" value="' + el + '" type="radio" class="sizeBtn" name="size"><label style="text-transform:capitalize;" class="customRadio" for="radio' + id + '">' + el.substr(0, 1) + '<span class="ax-hidden">' + el.substr(1) + '</span></label></li>';
                //return '<button class="sizeBtn" style="text-transform:capitalize;"><span>'+el.substr(0,1)+'</span><span class="ax-hidden">'+el.substr(1)+'</span></button>'
            }).join('')}
                </ul>
                </div>
                <div class="color-area">
                    <p class="color-title">Color: </p>
                    <ul id="color-ul">
                    ${this.json.details.colors.map((el, id) => {
                return '<li><input id="color' + id + '" value="' + el + '" type="radio" class="colorBtn" name="color"><label for="color' + id + '"style="background:#' + this.colorCodes[el] + ';"><span class="ax-hidden">' + el + '</span></label></li>';
            }).join('')}
                    </ul>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-xs-6" id="quanitityStepper">
                        <!-- Quantity Stepper -->
                    </div>
                    <input class="col-lg-4" type="submit" value="Add To Cart"/>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
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
    exports.default = Template;
});
