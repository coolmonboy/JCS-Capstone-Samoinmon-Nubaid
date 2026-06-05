//back end//
let balance = 100;
bet = 5;
const MIN_BET = 1;
let maxBet = balance;

function updateStats() {
    document.getElementById("balance-display").innerText = balance;
    document.getElementById("bet-display").innerText = bet;
}

function changeBet(amount) {
    let newBet = bet + amount;
    if (newBet < MIN_BET) {
        document.getElementById("message").innerText = "Minimum bet is " + MIN_BET;
        return;
    }
    if (newBet > maxBet) {
        document.getElementById("message").innerText = "Maximum bet is " + maxBet;
        return;
    }
    if (newBet > balance) {
        document.getElementById("message").innerText = "Not enough balance!";
        return;
    }
    bet = newBet;
    updateStats();   
}

function betMax(){
    bet = Math.min(maxBet, balance);
    updateStats();
    document.getElementById("message").innerText = "Max bet set!";
}

//back end// //nubaid//

function generateColumn() {
    return Math.floor(Math.random() * 90) + 10;
  }

  let column1 = generateColumn();
    let column2 = generateColumn();
    let column3 = generateColumn(); 
  
    
  console.log("Column 1: " + column1);
    console.log("Column 2: " + column2);    
    console.log("Column 3: " + column3);



    let reels = [0, 0, 0];
//html link and stuff

function updateReel(index, value) {
    document.getElementById(`inner-${index}`).innerText = value;
}



    function spinReel(index, stopTime) {

        const spin = setInterval(() => {
    
            reels[index] = generateColumn();
    
            updateReel(index, reels[index]);
    
        }, 80); //delay between changes
    
        setTimeout(() => {
    
            clearInterval(spin);
    
            reels[index] = generateColumn(); // the number presetned
            updateReel(index, reels[index]);
    
            console.log("FINAL Reel " + index + ":", reels[index]);

            let winnings = 0;

const allEven = reels.every(num => num % 2 === 0);
const allOdd = reels.every(num => num % 2 !== 0);

if (allEven) {
    winnings = bet * 2;
    balance += winnings;
    document.getElementById("message").innerText =
        `EVEN BONUS! +${winnings}`;
}
else if (allOdd) {
    winnings = bet * 3;
    balance += winnings;
    document.getElementById("message").innerText =
        `ODD BONUS! +${winnings}`;
}

updateStats();

    
        }, stopTime);
    }

    function spin() {
        if (balance < bet) {
            document.getElementById("message").innerText = "Not enough Balance!";
            return;
        }
        balance -= bet;
        updateStats();
        document.getElementById("message").innerText = "Spinning...";
    
        spinReel(0, 1000);
        spinReel(1, 1300);
        spinReel(2, 1600);
    
        setTimeout(() => {
            document.getElementById("message").innerText = "results";
            console.log("FINAL:", reels);

            bubbleSort(reels);
    
        }, 1800);
    }

function bubbleSort(arr) {

    console.log("Sorting reels:", arr);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
        
            for (let j = 0; j < arr.length - 1; j++) {

                console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

                if (arr[j] > arr[j + 1]) {
                    console.log(`Swapping ${arr[j]} and ${arr[j + 1]}`);
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }

        }

    }
    
    console.log("Sorted reels:", arr);
    document.getElementById("message").innerText = "Sorted: " + arr.join(", ");
}   


updateStats();
    