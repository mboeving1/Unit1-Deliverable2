let happiness = 0;
let energy = 0;



//For ( var i = 0; i< 6; i++) {//loop 6 times
let name = null;
name = prompt ("What is your Pet's name?");
while (name === null || name === "") {
  name = prompt ("What is your Pet's name?");
}
alert("That's a Great Name!");



for ( var i = 0; i < 6; i++){
let action = null
action = prompt("Would you like to walk, feed, or pet your animal");
while (action === null || action === "") {
  action = prompt("Would you like to walk, feed, or pet your animal?");
}
if(action === "feed"){
  energy= energy+=2;
}
if(action === "walk" && energy > 0){
    happiness+=2,  energy-=1;
  }
  if(action === "pet"){
    happiness+=1;
  }
  if(energy === 0){
    alert("I'm too tired!");
  }
  
} 

console.log("Pet's name: ",name);
console.log("Happiness= ",happiness);
console.log("Energy= ",energy);
console.log(name," has ",happiness," happiness and ",energy," energy");





//printf("charlie has " h " happiness and " e " energy ");
