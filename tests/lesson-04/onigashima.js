// Tạo hàm upgradeCrew
function upgradeCrew() {
    // Khai báo mảng các object pirates có thuộc tính: name, bounty, strength
    const pirates = [
        { name: "Chopper", bounty: 100000, strength: 300 },
        { name: "Zoro", bounty: 2500000, strength: 2000 },
        { name: "Jinbei", bounty: 3000000, strength: 2500 }
    ]
    console.log("===== pirates array =====");
    console.log(pirates);

    // Sử dụng hàm map để tạo mảng mới awakenedPirates
    // name => UPPERCASE name
    // bounty => x2 bounty
    // strength => x1.5 strength
    const awakenedPirates = pirates.map(crew => ({
        name: crew.name.toUpperCase(),
        bounty: `${crew.bounty * 2}`,
        strength: `${crew.strength * 1.5}`
    }));
    console.log("===== awakenedPirates array =====");
    console.log(awakenedPirates);

    // Sử dụng hàm filter để lọc ra các thành viên có mức strength > 500
    // Đặt tên mảng mới là monsterTrioCandidates
    const monsterTrioCandidates = pirates.filter(crew => crew.strength > 500);
    console.log("===== monsterTrioCandidates array =====");
    console.log(monsterTrioCandidates);
}
// Execute upgradeCrew function
upgradeCrew();