let correctPassword = "123456";
let userPassword = prompt("Nhập mật khẩu:");
if (userPassword === correctPassword) {
    document.write("Mật khẩu chính xác! Đăng nhập thành công");
} else {
    document.write("Mật khẩu không đúng! Vui lòng thử lại");
}