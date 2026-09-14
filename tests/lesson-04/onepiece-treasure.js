// Đếm và in ra có bao nhiêu cặp số nguyên dương (a, b) từ 1 tới 100 sao cho tích của chúng chia hết cho 19
let count = 0;
let arrCouples = [];

for (let a = 1; a <= 100; a++) {
    // b bắt đầu từ a để loại bỏ các cặp trùng nhau. Ví dụ (1, 19) và (19, 1) thì chỉ giữ (1, 19)
    for (let b = a; b <= 100; b++) {
        if ((a * b) % 19 === 0) {
            count++;
            // Mình không chắc đề bài có muốn in ra cặp số thỏa mãn không nên mình cứ in luôn cho chắc ^^!
            arrCouples.push({
                a: a,
                b: b
            });
        }
    }
}

// Note to check output:
// có 975 cặp số chia hết cho 19; 
// có 490 cặp số chia hết cho 19 và không trùng cặp, trong đó có 5 cặp số chia hết cho 19 mà có a = b
console.log(`Có ${count} cặp số nguyên dương (a, b) từ 1 tới 100 có tích chia hết cho 19`);
console.log(arrCouples);
