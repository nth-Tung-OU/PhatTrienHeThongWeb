// Promise
// Promise giống như phiếu đặt hàng tại quán Cafe
// Khi gọi món -> Nhận phiếu (Promise)
// Phiếu đang chờ (pending) -> chưa có cafe
// Cafe xong -> phiếu được hoàn thành (Fulliled) -> nhận cafe
// Hết nguyên liệu -> Phiếu từ chối (Rejected) -> nhận thông báo lỗi

// PENDING -> Reolved(value) -> Fulfilled (thành công)
        // -> Rejected(reason) -> Rejected (thất bại)

// function fetchUser(id){
//     return new Promise((resolve, reject) => {
//         console.log(`Đang tải user ${id}...`);
        
//         setTimeout(() => {
//             if( id > 0){
//                 resolve({id: id, name: "Nguyen An", email: "an@gmail.com"});
//             } else {
//                 reject(new Error(`ID không hợp lệ ${id}`));
//             }
//         }, 1500)
//     });
// }

// const user = fetchUser(1);
// console.log(user);
// //then, catch, finally

// fetchUser(1)
// .then(user => {
//     console.log(user);
//     return user.email; // Trả về email để có thể sử dụng trong chuỗi then tiếp theo
// })
// .then(email => {
//     console.log(email);
// })
// .catch(error => {
//     // Chạy khi reject - nhận reason (error)
//     console.error("Lỗi:", error.message);
// })
// .finally(() => {
//     console.log("Hoàn tất - dù thành công hay lỗi");
// });

// // Promise then - async / await
// // fetch / axios

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json()) // Promise<Array users>
// .then(users => {
//     console.log(users);
// })
// .catch(error => {
//     console.error(error);
// });

async function loadUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json(); // Promise<Array users>
        console.log(users);
    } catch (error) {
        console.error(error);
    }
}

loadUsers();