let navigatorName = "Luffy";
let currentHakiLevel = 3;
const islandA = 15;
const islandB = 25;
const islandC = 40;

// Tổng lượng thịt tiêu thụ ở 3 đảo
const totalSpentMeat = islandA + islandB + islandC; // 80

// Trung bình lượng thịt tiêu thụ ở mỗi đảo
const avgSpentMeat = totalSpentMeat / 3; // 26.666666666666668

// In ra số lượng thịt còn dư sau khi chia đều cho 3
console.log(`Số lượng thịt còn dư sau khi chia đều cho 3 là: ${totalSpentMeat % 3}`);