for (let i = 0; i < 10; i++) {
    const color2 = '0123456789ABCDEF';
    let color = '#';
    for (let j = 0; j < 6; j++) {
        color += color2[Math.floor(Math.random() * 16)];
    }
    console.log(`%cMàu sắc đã được thay đ`, `color: ${color}`);
}