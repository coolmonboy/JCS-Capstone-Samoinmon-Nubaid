//back end//


//back end// //nubaid//

function generateColumn() {
    return Math.floor(Math.random() * 90) + 10;
  }

  let column1 = generateColumn();
    let column2 = generateColumn();
    let column3 = generateColumn(); 
    let column4 = generateColumn();
    let column5 = generateColumn();
    
  console.log("Column 1: " + column1);
    console.log("Column 2: " + column2);    
    console.log("Column 3: " + column3);
    console.log("Column 4: " + column4);
    console.log("Column 5: " + column5);


    let reels = [0, 0, 0];

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
    
        }, stopTime);
    }

    function spin() {
    
        document.getElementById("message").innerText = "Spinning...";
    
        spinReel(0, 1000);
        spinReel(1, 1300);
        spinReel(2, 1600);
    
        setTimeout(() => {
            document.getElementById("message").innerText = "Results ready!";
            console.log("FINAL REELS:", reels);

            bubbleSort(reels);
    
        }, 1800);
    }

console.log(spin());
