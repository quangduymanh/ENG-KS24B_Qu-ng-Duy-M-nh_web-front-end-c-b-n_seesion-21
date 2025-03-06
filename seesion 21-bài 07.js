let principal = +prompt("Nhập số tiền gửi ban đầu (VND):");
let interestRate = +prompt("Nhập lãi suất hàng tháng (%):") / 100;
let months = +prompt("Nhập số tháng gửi:");
let totalAmount = principal;
for (let i = 1; i <= months; i++) {
    totalAmount += totalAmount * interestRate;
}
let interestEarned = totalAmount - principal;
document.write(
    `Số tiền sau ${months} tháng: ${totalAmount.toFixed(2)} VND <br>`
);
document.write(
    `Tổng tiền lãi kiếm được: ${interestEarned.toFixed(2)} VND`
);