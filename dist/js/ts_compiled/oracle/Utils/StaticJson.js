define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const parentJson = {
        productList: [
            {
                id: "1",
                name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
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
                        { src: "adidas_1.jpg", alt: "Shoes view 1" },
                        { src: "adidas_33.jpg", alt: "Shoes view 2" },
                        { src: "adidas_8.jpg", alt: "Shoes view 3" },
                    ],
                    colors: [
                        { name: 'white', status: '' },
                        { name: 'grey', status: '' },
                        { name: 'blue', status: 'disabled' }
                    ],
                    sizes: [
                        { name: 'small', status: '' },
                        { name: 'medium', status: '' },
                        { name: 'large', status: 'disabled' },
                        { name: 'xtra large', status: '' },
                    ],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            },
            {
                id: "2",
                name: "Nike Men's Air Force 1 Running Shoes",
                image: {
                    src: "product-image_1.png",
                    alt: "Hiking shoes"
                },
                brand: "360 degree",
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
                        { src: "adidas_1.jpg", alt: "Shoes view 1" },
                        { src: "adidas_33.jpg", alt: "Shoes view 2" },
                        { src: "adidas_8.jpg", alt: "Shoes view 3" },
                    ],
                    colors: [
                        { name: 'light blue', status: '' },
                        { name: 'slategray', status: '' },
                        { name: 'electro', status: 'disabled' }
                    ],
                    sizes: [
                        { name: 'small', status: '' },
                        { name: 'medium', status: 'disabled' },
                        { name: 'large', status: '' },
                        { name: 'xtra large', status: '' },
                    ],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            },
            {
                id: "3",
                name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: {
                    src: "product-image_0.png",
                    alt: "Hiking shoes"
                },
                brand: "adidas",
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
                        { src: "adidas_1.jpg", alt: "Shoes view 1" },
                        { src: "adidas_33.jpg", alt: "Shoes view 2" },
                        { src: "adidas_8.jpg", alt: "Shoes view 3" },
                    ],
                    colors: [
                        { name: 'electro', status: 'disabled' },
                        { name: 'light blue', status: '' },
                        { name: 'white', status: '' }
                    ],
                    sizes: [
                        { name: 'small', status: 'disabled' },
                        { name: 'medium', status: '' },
                        { name: 'large', status: '' },
                        { name: 'xtra large', status: '' },
                    ],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            },
            {
                id: "4",
                name: "Nike Men's Air Force 1 Running Shoes",
                image: {
                    src: "product-image_1.png",
                    alt: "Hiking shoes"
                },
                brand: "360 degree",
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
                        { src: "adidas_1.jpg", alt: "Shoes view 1" },
                        { src: "adidas_33.jpg", alt: "Shoes view 2" },
                        { src: "adidas_8.jpg", alt: "Shoes view 3" },
                    ],
                    colors: [
                        { name: 'white', status: '' },
                        { name: 'grey', status: '' },
                        { name: 'blue', status: '' },
                        { name: 'light blue', status: '' },
                        { name: 'slategray', status: '' },
                        { name: 'electro', status: 'disabled' }
                    ],
                    sizes: [
                        { name: 'small', status: '' },
                        { name: 'medium', status: '' },
                        { name: 'large', status: '' },
                        { name: 'xtra large', status: 'disabled' },
                    ],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            },
            {
                id: "5",
                name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: {
                    src: "product-image_0.png",
                    alt: "Hiking shoes"
                },
                brand: "adidas",
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
                        { src: "adidas_1.jpg", alt: "Shoes view 1" },
                        { src: "adidas_33.jpg", alt: "Shoes view 2" },
                        { src: "adidas_8.jpg", alt: "Shoes view 3" },
                    ],
                    colors: [
                        { name: 'electro', status: '' },
                        { name: 'light blue', status: 'disabled' },
                        { name: 'white', status: '' }
                    ],
                    sizes: [
                        { name: 'small', status: '' },
                        { name: 'medium', status: 'disabled' },
                        { name: 'large', status: '' },
                        { name: 'xtra large', status: '' },
                    ],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            },
            {
                id: "6",
                name: "Nike Men's Air Force 1 Running Shoes",
                image: {
                    src: "product-image_1.png",
                    alt: "Hiking shoes"
                },
                brand: "360 degree",
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
                        { src: "adidas_1.jpg", alt: "Shoes view 1" },
                        { src: "adidas_33.jpg", alt: "Shoes view 2" },
                        { src: "adidas_8.jpg", alt: "Shoes view 3" },
                    ],
                    colors: [
                        { name: 'light blue', status: 'disabled' },
                        { name: 'slategray', status: '' },
                        { name: 'electro', status: '' }
                    ],
                    sizes: [
                        { name: 'small', status: 'disabled' },
                        { name: 'medium', status: '' },
                        { name: 'large', status: '' },
                        { name: 'xtra large', status: '' },
                    ],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            }
        ],
        colorCodes: [
            {
                name: 'white',
                code: 'dcdde1'
            },
            {
                name: 'green',
                code: 'dcdde1'
            },
            {
                name: 'orange',
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
                name: 'light blue',
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
