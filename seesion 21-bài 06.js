let n = +prompt("Nhập số nguyên cần tìm ước:");
let factors = "";
for (let i = 1; i <= Math.abs(n); i++) { 
    if (n % i === 0) {
        factors += i + " ";
    }
}
document.write(`Các ước của ${n} là: ` + factors);