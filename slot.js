//back end//


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
    
        }, stopTime);
    }

    function spin() {
    
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



    