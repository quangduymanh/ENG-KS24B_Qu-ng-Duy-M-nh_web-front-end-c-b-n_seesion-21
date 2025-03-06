let a = +prompt("Nhập hệ số a:");
let b = +prompt("Nhập hệ số b:");
let c = +prompt("Nhập hệ số c:");
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            document.write("Phương trình vô số nghiệm.");
        } else {
            document.write("Phương trình vô nghiệm.");
        }
    } else {
        let x = -c / b;
        document.write(`Phương trình có 1 nghiệm: x = ${x.toFixed(2)}`);
    }
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        document.write("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.write(`Phương trình có nghiệm kép: x = ${x.toFixed(2)}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write(`Phương trình có 2 nghiệm phân biệt:<br>`);
        document.write(`x1 = ${x1.toFixed(2)}<br>`);
        document.write(`x2 = ${x2.toFixed(2)}`);
    }
}