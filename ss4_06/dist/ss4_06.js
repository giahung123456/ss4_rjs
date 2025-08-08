let product = [
    {
        id: "ad1",
        name: "Áo sơ mi",
        price: 300000,
        category: {
            id: "ad1g1",
            name: "Thời trang nam"
        },
        discount: 20
    },
    {
        id: "ad2",
        name: "Quần jean",
        price: 500000,
        category: {
            id: "ad2g1",
            name: "Thời trang nữ"
        }
    },
    {
        id: "ad3",
        name: "Giày thể thao",
        price: 800000,
        category: {
            id: "ad3g1",
            name: "Phụ kiện"
        },
        discount: 40
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * product.discount / 100;
    }
    else {
        return product.price;
    }
}
function printProductInfo(product) {
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(getFinalPrice(product));
    console.log(`Danh mục: ${product.category.name}`);
}
product.forEach((e) => {
    printProductInfo(e);
});
export {};
//# sourceMappingURL=ss4_06.js.map