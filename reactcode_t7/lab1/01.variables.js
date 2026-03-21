// Khai báo biến: var, let, const

// let count = 0
// count = 1
// console.log(count) // Let cho phép gán lại

// const name = "React"
// // name = "Vue"
// // console.log(name)

// const user = { id: 1 }
// user.id = 2
// console.log(user) // Const không cho phép gán lại, nhưng cho phép sửa đổi thuộc tính của đối tượng

console.log(x) // console.log(x) sẽ trả về undefined, vì biến x đã được khai báo nhưng chưa được gán giá trị. Đây là hiện tượng hoisting trong JavaScript, khi biến được khai báo sẽ được đưa lên đầu phạm vi của nó, nhưng giá trị của nó vẫn là undefined cho đến khi được gán.
var x = 1;
console.log(x);

if(true){
    var insideIf = "Tôi ở trong if";
    let a = 0;
    console.log("a = ", a) // Trả về 0
}
console.log(a);