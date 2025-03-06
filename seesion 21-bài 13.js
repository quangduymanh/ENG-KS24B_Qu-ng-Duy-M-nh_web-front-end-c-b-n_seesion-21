let sao = "##########";
for (let i = 0; i < 10; i++) {
    console.log(sao);
    sao = sao.slice(0, -1);
}
console.log("\n");
let sao2 = "#";
for (let i = 0; i < 10; i++) {
    console.log(sao2);
    sao2 += "#";
}
console.log("\n");
for (let i = 0; i < 10; i++) {
    console.log(" ".repeat(9 - i) + "#".repeat(i + 1));
}
console.log("\n");
let sao3 = "##########";
for (let i = 0; i < 10; i++) {
    console.log(" ".repeat(i) + sao3);
    sao3 = sao3.slice(0, -1);
}