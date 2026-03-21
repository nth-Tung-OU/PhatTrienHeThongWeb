// Nullish coalescing operator (??)
// Ý nghĩa: Lấy vế phải (vế sau) chỉ khi vế trái là null hoặc undefined, ngược lại sẽ lấy vế trái (vế trước)

// const a = null ?? "mặc định";
// const b = undefined ?? "mặc định";
// const c = 0 ?? 100
// const d = '' ?? "mặc định"
// const e = false ?? true

// console.log("a = ", a) // a =  mặc định
// console.log("b = ", b) // b =  mặc định
// console.log("c = ", c) // c =  0
// console.log("d = ", d) // d =  ''
// console.log("e = ", e) // e =  false

// Nuullish coalescing ||
// Ý nghĩa: Lấy vế phải (vế sau) khi vế trái là một giá trị falsy (false, 0, '', null, undefined), ngược lại sẽ lấy vế trái (vế trước)

// const a = null ||  "mặc định";
// const b = undefined || "mặc định";
// const c = 0 || 100
// const d = '' || "mặc định"
// const e = false || true

// console.log("a = ", a) // a =  mặc định
// console.log("b = ", b) // b =  mặc định
// console.log("c = ", c) // c =  0
// console.log("d = ", d) // d =  ''
// console.log("e = ", e) // e =  true

// Optional chaining (?.)
// Ý nghĩa: Truy cập vào thuộc tính của một đối tượng, nếu đối tượng đó là null hoặc undefined thì sẽ trả về undefined thay vì lỗi

const user = {
    // name : "An",
    // address: {
    //     city: "HCM"
    // }
}

console.log(user?.address?.city)
console.log(user?.address?.street)

const arr = [1, 2, 3]
console.log(arr?.[0]) // Trả về 1
console.log(arr?.[3]) // Trả về undefined, vì arr[3] không tồn tại