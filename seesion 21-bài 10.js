let n = +prompt("Nhập số lượng số nguyên tố cần in:");
let count = 0;
let num = 2;
let number = "";
while (count < n) {
    let num3 = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            num3 = false;
            break;
        }
    }
    if (num3) {
        number += num + " ";
        count++;
    }
    num++;
}
document.write(`Danh sách ${n} số nguyên tố đầu tiên: ` + number);
