define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Stars {
        constructor(props) {
            this.obj = { rating: props };
            this.html = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`, 0, this.obj.rating).join('') + `(${this.obj.rating})`;
        }
    }
    class QuantityStepper {
        constructor() {
            this.html = 'In Quantity Stepper';
        }
    }
    exports.QuantityStepper = QuantityStepper;
    exports.default = Stars;
});
