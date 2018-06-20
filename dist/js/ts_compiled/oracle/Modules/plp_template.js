define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Template {
        constructor(products) {
            this.productJson = products;
            this.backupJson = products;
            this.activeSort = undefined;
        }
        getTemplate() {
            let rating;
            let pricing;
            this.list = '';
            this.productJson.map((obj, index) => {
                rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`, 0, obj.rating).join('');
                pricing = `
            <del>${obj.price.currency + ' ' + obj.price.sellingPrice}</del>
            <span class="curr-price">${obj.price.currency + ' ' + obj.price.discountedPrice}</span>
            <span class="${obj.price.sale ? 'hotPrice' : ''}">${obj.price.currency + '' + obj.price.low} - ${obj.price.currency + '' + obj.price.high} ${obj.price.sale ? 'SALE' : ''}</span>
            ${obj.price.sale ? '' : "<span>&nbsp;</span>"}
        `;
                this.list += `<li class="product-col" data-id="${obj.id}">
            <a href="pdp.html?id=${obj.id}">
            <img alt="images/${obj.image.alt}" src="images/${obj.image.src}"/>
            <span class="product-details">${obj.name}</span>
            ${pricing}
            <span>${rating} (${obj.rating})</span>
            </a>
        </li>`;
            });
            return this.list;
        }
        filterBy(flags) {
            this.productJson = this.backupJson.filter(function (a) {
                if (flags.brand && !flags.brand[a.brand])
                    return false;
                if (flags.ratings && !flags.ratings[a.rating])
                    return false;
                return true;
            });
            this.sortyBy(this.activeSort);
        }
        sortyBy(param) {
            //console.log('before',this.productJson);
            this.activeSort = param;
            switch (param) {
                default:
                case 'A-Z':
                    this.productJson.sort((a, b) => {
                        return a.name > b.name;
                    });
                    break;
                case 'Z-A':
                    this.productJson.sort((a, b) => {
                        return a.name < b.name;
                    });
                    break;
                case 'price-lh':
                    this.productJson.sort((a, b) => {
                        return Number(a.price.low) > Number(b.price.low);
                    });
                    break;
                case 'price-hl':
                    this.productJson.sort((a, b) => {
                        return Number(a.price.low) < Number(b.price.low);
                    });
                    break;
                case 'rated-hl':
                    this.productJson.sort((a, b) => {
                        return Number(a.rating) < Number(b.rating);
                    });
                    break;
            }
            //console.log('after',this.productJson);
        }
    }
    //customElements.define('quantity-stepper', QuantityStepper);
    exports.default = Template;
});
