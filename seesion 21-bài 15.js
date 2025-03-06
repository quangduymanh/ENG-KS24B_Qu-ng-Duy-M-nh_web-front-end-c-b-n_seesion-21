let num1 = +prompt("Nhập số tiền cần rút (phải chia hết cho 1000)");
if (num1 % 1000 !== 0) {
    document.write("Số tiền không hợp lệ! Vui lòng nhập số chia hết cho 1000");
} else {
    let result = "";
    let num2 = 500000;

    while (num1 > 0) {
        let count = Math.floor(num1 / num2);
        if (count > 0) {
            result += num2 + " - " + count + " tờ<br>";
            num1 -= count * num2;
        }
        if (num2 === 500000) {
            num2 = 200000;
        } else if (num2 === 200000) {
            num2 = 100000;
        } else if (num2 === 100000) {
            num2 = 50000;
        } else if (num2 === 50000) {
            num2 = 20000;
        } else if (num2 === 20000) {
            num2 = 10000;
        } else if (num2 === 10000) {
            num2 = 5000;
        } else if (num2 === 5000) {
            num2 = 2000;
        } else if (num2 === 2000) {
            num2 = 1000;
        } else {
            break;
        }
    }
    document.write(result);
}