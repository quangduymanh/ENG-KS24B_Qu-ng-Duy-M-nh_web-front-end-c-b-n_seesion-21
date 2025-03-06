let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 5; i++) {
    let num = +prompt(`Nhập số nguyên thứ ${i}:`);
    if (num % 2 === 0) { 
        evenCount++;
    } else { 
        oddCount++;
    }
}
document.write(`Số lượng số chẵn ${evenCount} <br>`);
document.write(`Số lượng số lẻ ${oddCount}`);
