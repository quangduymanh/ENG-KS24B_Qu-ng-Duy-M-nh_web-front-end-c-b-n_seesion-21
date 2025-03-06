let n = +prompt("Nhập số lượng số nguyên tố cần in:");
let count = 0;
let num = 2;
let number = "";
while (count < n) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        number += num + " ";
        count++;
    }
    num++;
}
document.write(`Danh sách ${n} số nguyên tố đầu tiên: ` + number);
