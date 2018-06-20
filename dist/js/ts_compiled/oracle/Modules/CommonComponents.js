define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Stars {
        constructor(props) {
            this.obj = { rating: props };
            this.html = Array(5).fill(`<i class="fa fa-star fa-2x"></i>`).fill(`<i class="fa fa-star checked fa-2x"></i>`, 0, this.obj.rating).join('');
        }
    }
    class QuantityStepper {
        constructor(quantity) {
            this.changeHandler = (event) => {
                if (event.target.value <= 10 && event.target.value > 0) {
                }
                else {
                    event.preventDefault();
                    event.target.value = 1;
                    //event.stopPropagation();
                }
            };
            this.upTheCount = (event) => {
                this.count.value < 10 ? ++this.count.value : this.count.value;
            };
            this.downTheCount = (event) => {
                this.count.value > 1 ? --this.count.value : this.count.value;
            };
            this.create();
            this.addHtml();
            this.addListeners();
            if (quantity) {
                this.predefinedQuantity = quantity;
            }
        }
        create() {
            this.inputElement = document.createElement("input");
            this.minus = document.createElement("button");
            this.minus.setAttribute('class', 'minus');
            this.plus = document.createElement("button");
            this.plus.setAttribute('class', 'plus');
            this.container = document.createElement("div");
            this.container.setAttribute('class', 'qtyStpr');
        }
        addHtml() {
            this.minus.innerHTML = `-<span class="ax-hidden">Decrease quantity by 1<span>`;
            this.plus.innerHTML = `+<span class="ax-hidden">Increase quantity by 1<span>`;
            this.inputElement.setAttribute("value", "1");
        }
        addListeners() {
            this.inputElement.addEventListener('focusout', this.changeHandler);
            this.plus.addEventListener('click', this.upTheCount);
            this.minus.addEventListener('click', this.downTheCount);
        }
        /**
     *
     * @param id : A unique id on the page where this should be inserted
     */
        appendto(id) {
            this.id = id + "_qs";
            this.count = this.inputElement.getAttributeNode("value");
            this.container.innerHTML = `<label class="ax-hidden" for=${this.id}>Quantity of Item in between 1 and 10</label>`;
            this.inputElement.setAttribute('id', this.id);
            this.container.appendChild(this.minus);
            this.container.appendChild(this.inputElement);
            this.container.appendChild(this.plus);
            document.getElementById(id) ? document.getElementById(id).appendChild(this.container) : '';
            this.count.value = this.predefinedQuantity ? this.predefinedQuantity : 1;
        }
    }
    exports.QuantityStepper = QuantityStepper;
    exports.default = Stars;
});
