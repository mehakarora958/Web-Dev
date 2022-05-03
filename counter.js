const myDecrement = document.getElementById('decrement');
const myIncrement = document.getElementById('increment');
const myReset = document.getElementById("reset");
const myDisplay = document.getElementById('valueDisplay');

let count = 0

myDecrement.addEventListener('click',function(e){
    count--;
    myDisplay.style.color = 'red'
    myDisplay.innerHTML = count;
})

myIncrement.addEventListener('click',function(e){
    count++;
    myDisplay.style.color = 'green'
    myDisplay.innerHTML = count;
})
myReset.addEventListener('click',function(e){
    count = 0;
    myDisplay.style.color = 'white'
    myDisplay.innerHTML = count;
})