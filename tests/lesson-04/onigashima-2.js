// Tạo hàm printBountyLeaderboard
function printBountyLeaderboard(crewList) {
    // Sort crews by bounty by desc
    const sortCrewByBounty = crewList.sort((a, b) => (b.bounty - a.bounty));

    // print list follow format:
    // 🥇 1. Luffy - 11,000,000 berries
    // 🥈 2. Jinbei - 3,000,000 berries
    // 🥉 3. Zoro - 2,500,000 berries
    //    4. Chopper - 100,000 berries
    for (let i = 0; i < sortCrewByBounty.length; i++) {
        let medal = "  ";
        if (i === 0) {
            medal = "🥇";
        } else if (i === 1) {
            medal = "🥈";
        } else if (i === 2) {
            medal = "🥉";
        }
        console.log(`${medal} ${i + 1}. ${sortCrewByBounty[i].name} - ${sortCrewByBounty[i].bounty.toLocaleString()} berries`);
    }
}

// Nhận vào tham số crewList là mảng các object name, bounty
const crews = [
    { name: "Chopper", bounty: 100000 },
    { name: "Zoro", bounty: 2500000 },
    { name: "Jinbei", bounty: 3000000 },
    { name: "Luffy", bounty: 11000000 }
]

printBountyLeaderboard(crews);

/*
========================================
Cách khác sử dụng forEach thay vì for i
========================================
*/
console.log("============== Cách khác sử dụng forEach thay vì for i ================");

function printBountyLeaderboard2(crewList) {
    // Sort crews by bounty by desc
    const sortCrewByBounty2 = crewList.sort((a, b) => (b.bounty - a.bounty));

    // print list follow format:
    // 🥇 1. Luffy - 11,000,000 berries
    // 🥈 2. Jinbei - 3,000,000 berries
    // 🥉 3. Zoro - 2,500,000 berries
    //    4. Chopper - 100,000 berries
    sortCrewByBounty2.forEach((crew, index) => {
        let medal = "  ";
        if (index === 0) {
            medal = "🥇";
        } else if (index === 1) {
            medal = "🥈";
        } else if (index === 2) {
            medal = "🥉";
        }
        console.log(`${medal} ${index + 1}. ${crew.name} - ${crew.bounty.toLocaleString()} berries`);
    });
}

printBountyLeaderboard2(crews);