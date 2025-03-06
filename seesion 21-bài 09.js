let num = +prompt("Nhập một số nguyên:");
let count = 0;
if (num >= 2) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        document.write(num + " là số nguyên tố.");
    } else {
        document.write(num + " không phải là số nguyên tố.");
    }
} else {
    document.write(num + " không phải là số nguyên tố.");
}
