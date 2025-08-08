//ví dụ 
let product1 = {
    id: "P001",
    name: "Áo sơ mi nam",
    price: 350000
};
let product2 = {
    id: "P002",
    name: "Quần jean nữ",
    price: 450000
};
let orderItem1 = {
    product: product1,
    quantity: 2
};
let orderItem2 = {
    product: product2,
    quantity: 1
};
let order = {
    orderId: "0327",
    customerName: "Nguyễn Văn A",
    items: [orderItem1, orderItem2],
    note: "Giao hàng trước 18h"
};
let arr = [];
function calculateOrderTotal(order) {
    let result = 0;
    for (let ord of order.items) {
        let num = ord.product.price * ord.quantity;
        arr.push(num);
        result += num;
    }
    return result;
}
console.log(`test:${calculateOrderTotal(order)}`);
console.log(`----------------------------------`);
function printOrder(order) {
    console.log(`đơn hàng:${order.orderId}`);
    console.log(`khách hàng:${order.customerName}`);
    console.log(`sản phẩm:`);
    let i = 0;
    for (let ord of order.items) {
        console.log(`-${ord.product.name} x ${ord.quantity} -> ${arr[i++]}`);
    }
    console.log(`tổng cộng:${calculateOrderTotal(order)}`);
    console.log(order.note);
}
printOrder(order);
export {};
//# sourceMappingURL=ss4_08.js.map