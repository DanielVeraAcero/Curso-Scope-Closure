
/* 
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
 */

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins
}

const myMpneyBox = moneyBox();
myMpneyBox(5)
myMpneyBox(10);
