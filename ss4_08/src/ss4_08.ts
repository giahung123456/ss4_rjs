type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};

//ví dụ 


let product1: Product = {
  id: "P001",
  name: "Áo sơ mi nam",
  price: 350000
};

let product2: Product = {
  id: "P002",
  name: "Quần jean nữ",
  price: 450000
};

let orderItem1: OrderItem = {
  product: product1,
  quantity: 2
};

let orderItem2: OrderItem = {
  product: product2,
  quantity: 1
};

let order: Order = {
  orderId: "0327",
  customerName: "Nguyễn Văn A",
  items: [orderItem1, orderItem2],
  note: "Giao hàng trước 18h"
};



let arr:number[]=[]

function calculateOrderTotal(order: Order):number{
    let result:number=0
    
    for(let ord of order.items){
        let num:number=ord.product.price*ord.quantity
        arr.push(num)
        result+= num
        
        
    }
    return result
}
console.log(`test:${calculateOrderTotal(order)}`);
console.log(`----------------------------------`);

function printOrder(order: Order): void{
    console.log(`đơn hàng:${order.orderId}`);
    console.log(`khách hàng:${order.customerName}`);
    console.log(`sản phẩm:`);
    let i=0
    for(let ord of order.items){
        console.log(`-${ord.product.name} x ${ord.quantity} -> ${arr[i++]}`);
        
    }
    console.log(`tổng cộng:${calculateOrderTotal(order)}`);
    console.log(order.note);
    
    
}
printOrder(order)
 



