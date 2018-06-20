define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const parentJson = {
        productList: [
            {
                id: "1",
                name: "Dadidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: {
                    src: "product-image_0.png",
                    alt: "Hiking shoes"
                },
                brand: "361 degrees",
                price: {
                    currency: "$",
                    sellingPrice: "2499.00",
                    discountedPrice: "2960.99",
                    low: "1549.00",
                    high: "1230.00"
                },
                rating: 3,
                details: {
                    title: 'Product Title 1',
                    images: [
                        "couch_lg_0.jpg",
                        "couch_sm_1.jpg",
                        "couch_sm_0.jpg"
                    ],
                    colors: ['red', 'green', 'blue'],
                    sizes: ['small', 'medium', 'large', 'xtra large'],
                    description: 'Lorem Ipsum for 1'
                }
            },
            {
                id: "2",
                name: "Cadidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: {
                    src: "product-image_1.png",
                    alt: "Hiking shoes"
                },
                brand: "adidas",
                price: {
                    currency: "$",
                    sellingPrice: "2499.00",
                    discountedPrice: "2960.99",
                    sale: true,
                    low: "1546.00",
                    high: "1230.00"
                },
                rating: 4,
                details: {
                    title: 'Product Title 2',
                    images: [
                        "couch_lg_0.jpg",
                        "couch_sm_1.jpg",
                        "couch_sm_0.jpg"
                    ],
                    colors: ['red', 'green', 'blue'],
                    sizes: ['small', 'medium', 'large', 'xtra large'],
                    description: 'Lorem Ipsum for 2'
                }
            },
            {
                id: "3",
                name: "Badidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: {
                    src: "product-image_1.png",
                    alt: "Hiking shoes"
                },
                brand: "360 degrees",
                price: {
                    currency: "$",
                    sellingPrice: "2499.00",
                    discountedPrice: "2960.99",
                    sale: true,
                    low: "1547.00",
                    high: "1230.00"
                },
                rating: 1,
                details: {
                    title: 'Product Title 2',
                    images: [
                        "couch_lg_0.jpg",
                        "couch_sm_1.jpg",
                        "couch_sm_0.jpg"
                    ],
                    colors: ['red', 'green', 'blue'],
                    sizes: ['small', 'medium', 'large', 'xtra large'],
                    description: 'Lorem Ipsum for 2'
                }
            },
            {
                id: "4",
                name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: {
                    src: "product-image_1.png",
                    alt: "Hiking shoes"
                },
                brand: "adidas",
                price: {
                    currency: "$",
                    sellingPrice: "2499.00",
                    discountedPrice: "2960.99",
                    sale: true,
                    low: "1548.00",
                    high: "1230.00"
                },
                rating: 2,
                details: {
                    title: 'Product Title 2',
                    images: [
                        "couch_lg_0.jpg",
                        "couch_sm_1.jpg",
                        "couch_sm_0.jpg"
                    ],
                    colors: ['white', 'grey', 'blue', 'bluee', 'slategray', 'electro'],
                    sizes: ['small', 'medium', 'large', 'xtra large'],
                    description: 'Lorem Ipsum for 2'
                }
            }
        ],
        colorCodes: [
            {
                name: 'white',
                code: 'dcdde1'
            },
            {
                name: 'grey',
                code: '7f8fa6'
            },
            {
                name: 'blue',
                code: '273c75'
            },
            {
                name: 'bluee',
                code: '353b48'
            },
            {
                name: 'slategray',
                code: '487eb0'
            },
            {
                name: 'electro',
                code: '2f3640'
            }
        ],
        orderDetails: {
            percentage: 75,
            taxPercentage: 75,
            shippingPercentage: 2,
            promoAmount: 50
        }
    };
    exports.default = parentJson;
});
