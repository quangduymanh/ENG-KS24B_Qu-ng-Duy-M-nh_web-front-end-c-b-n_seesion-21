let width = +prompt("Nhập chiều ngang của hình chữ nhật:");
let height = +prompt("Nhập chiều dọc của hình chữ nhật:");
document.write("*".repeat(width) + "<br>");
for (let i = 1; i < height - 1; i++) {
    document.write("*" + "&nbsp;".repeat(width - 2) + "*<br>");
}
if (height > 1) {
    document.write("*".repeat(width) + "<br>");
}