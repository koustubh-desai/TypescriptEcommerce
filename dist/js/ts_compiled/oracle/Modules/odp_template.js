define(["require", "exports", "./CommonComponents"], function (require, exports, CommonComponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Template {
        constructor(products, od) {
            this.resovePostRender = () => {
                let qss = Object.keys(this.quantitySteppers);
                for (let i = 0; i < qss.length; i++) {
                    let id = this.quantitySteppers[qss[i]].parent;
                    let obj = this.quantitySteppers[qss[i]].qs;
                    obj.appendto(id);
                }
                this.subtotal = document.querySelectorAll('tr.subtotal td')[1];
                this.taxes = document.querySelectorAll('tr.taxes td')[1];
                this.shipping = document.querySelectorAll('tr.shipping td')[1];
                this.promo = document.querySelectorAll('tr.promo td')[1];
                this.total = document.querySelectorAll('tr.total td')[1];
                this.updateTable();
            };
            this.clickHanlder = (event) => {
                switch (event.target.getAttribute('class')) {
                    case "minus":
                    case "plus":
                        Object.keys(this.quantitySteppers).forEach((element) => {
                            let obj = this.quantitySteppers[element];
                            this.productJson.map((el) => {
                                if (el.id == obj.id) {
                                    el.quantity = obj.qs.count.value;
                                }
                            });
                        });
                        this.updateTable();
                        break;
                    default:
                        break;
                }
            };
            this.updateTable = () => {
                let grandTotal = 0;
                let cost;
                let shipping;
                let promo;
                let taxes;
                let temp;
                if (this.productJson.length == 1) {
                    cost = Number(this.productJson[0].quantity) * Number(this.productJson[0].price.sellingPrice);
                }
                else {
                    cost = this.productJson.reduce((a, b) => {
                        if (a.price) {
                            return Number(a.quantity) * Number(a.price.sellingPrice) + Number(b.quantity) * Number(b.price.sellingPrice);
                        }
                        else {
                            return a + Number(b.quantity) * Number(b.price.sellingPrice);
                        }
                    });
                }
                this.subtotal.innerText = this.currency + cost.toFixed(2);
                grandTotal = cost;
                taxes = Number(cost * this.orderDetails.taxPercentage / 100);
                this.taxes.innerText = this.currency + taxes.toFixed(2);
                grandTotal += taxes;
                shipping = Number(cost * this.orderDetails.shippingPercentage / 100);
                this.shipping.innerText = this.currency + shipping.toFixed(2);
                grandTotal += shipping;
                promo = Number(this.orderDetails.promoAmount).toFixed(2);
                this.promo.innerText = this.currency + promo;
                grandTotal -= promo;
                this.total.innerText = this.currency + grandTotal;
                document.getElementById('top-total').innerText = this.currency + grandTotal;
            };
            this.productJson = products;
            this.backupJson = products;
            this.activeSort = undefined;
            this.quantitySteppers = {};
            this.box = 36;
            this.circle = {
                diameter: 30,
                x: this.box / 2,
                y: (this.box - 30) / 2
            };
            this.orderDetails = od;
            this.currency = this.productJson[0].price.currency;
            document.getElementById('odp-listing').addEventListener('click', this.clickHanlder);
        }
        getTemplate() {
            let rating;
            let pricing;
            this.templateHtml = `
        <div id="orderNumber">
            <p><b>Order Number</b></p>
            <p>${Math.ceil(Math.random() * 1000000000000)}</p>
            <p><b>Order Date</b></p>
            <p>${new Date().toDateString()}</p>
            <p><b>Total </b><span id="top-total"></span></p>
        </div>
        <ul class="container-fluid">`;
            this.productJson.map((obj, index) => {
                let qsid = 'qs_' + obj.id;
                if (!this.quantitySteppers[obj.id]) {
                    this.quantitySteppers[obj.id] = {
                        qs: new CommonComponents_1.QuantityStepper(obj.quantity),
                        parent: qsid,
                        id: obj.id
                    };
                }
                rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`, 0, obj.rating).join('');
                pricing = `
            <del>${obj.price.currency + obj.price.sellingPrice}</del><br/>
            <span>${obj.price.currency + obj.price.discountedPrice}</span><br/>
            <span class="${obj.price.sale ? 'hotPrice' : ''}">${obj.price.sale ? 'SALE' : ''} ${obj.price.currency + obj.price.low} - ${obj.price.currency + obj.price.high}</span><br/>
            ${obj.price.sale ? '' : "<span>&nbsp;</span>"}
        `;
                this.templateHtml += `<li class="col-lg-12 row" id="productDetail" data-id="${obj.id}">
            <div class="col-lg-2 col-xs-6"><img class="odp_img" alt="${obj.image.alt}" src="images/${obj.image.src}"/></div>
            <div class="col-lg-4 col-xs-6">
                <a href="pdp.html?id=${obj.id}"><span class="product-details">${obj.name}</span></a>
                <span> ${pricing}</span>
                <span>${rating}</span>            
            </div>  
            <div class="col-lg-3 col-xs-6 odpQuantityStepper" id=${qsid}></div>
            <div class="col-lg-3 col-xs-6 odpBuyAgain"> <a class="primaryBtn buyAgain" href="pdp.html?id=${obj.id}">Buy Again</a><p class="current-price">Current Price ${obj.price.currency + obj.price.sellingPrice}</p></div>      
        </li>`;
            });
            this.templateHtml += '</ul>';
            let priceTable = document.getElementById('final-price');
            priceTable.innerHTML = `
        <div id="animationContainer" class="reward-animation col-lg-6">    
        <h2>Rewards Points</h2>    
<svg viewBox="0 0 ${this.box} ${this.box}" class="circular-chart">
  
    <path class="circle" stroke-dasharray="${this.orderDetails.percentage}, 100" d="M${this.circle.x} ${this.circle.y}
        a ${this.circle.diameter / 2} ${this.circle.diameter / 2} 0 0 1 0 ${this.circle.diameter}
        a ${this.circle.diameter / 2} ${this.circle.diameter / 2} 0 0 1 0 -${this.circle.diameter}"></path>
    <text x="50%" y="40%" text-anchor="middle" fill="black" font-size="4px" font-family="Open Sans" dy=".3em">${this.orderDetails.percentage}</text>
    <text x="50%" y="60%" text-anchor="middle" fill="black" font-size="4px" font-family="Open Sans" dy=".3em">Points</text>
  </svg>
</div>

<div class="col-lg-3" id="paymentContainer">
            <h2>Payment Method</h2>
            <div id="visaDiv"><img class="visaImage" src="images/Visa-icon.png"><span>************6654</span></div>
            
</div>
<div class="col-lg-3" id="costingContainer">
        <table>
        <tbody>
            <tr class="subtotal">
                <td><b>Subtotal</b></td>
                <td>$123.00</td>
            </tr>
            <tr class="taxes">
                <td><b>Taxes</b></td>
                <td>$123.00</td>
            </tr>
            <tr class="shipping">
                <td><b>Shipping</b><br/>Standard</td>
                <td>$123.00</td>
            </tr>
            <tr class="promo">
                <td><b>Promo</b><br/>SPRINGSHI</td>
                <td>$123.00</td>
            </tr>
            
            <tr class="total">
                <td><b>Total</b></td>
                <td>$123.00</td>
            </tr>
        </tbody>
    </table>
    </div>
    `;
            return this.templateHtml;
        }
    }
    //customElements.define('quantity-stepper', QuantityStepper);
    exports.default = Template;
});
