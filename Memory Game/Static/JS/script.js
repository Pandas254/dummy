/*function memoryGame(number){
   document.getElementById(number).remove();
   //var image = document.getElementById(number + 6).src;

   //var divElement = document.getElementById(number + 11);
   // divElement.innerHTML = image;


    console.log(number + 6);
}

*/

var count = 0;

var numberOfTrials = 0;

var imageState = [0, 0];

function memoryGame(number, imageID) {
  function myFunction() {
    element.style.display = "block";
  }

  function wonGame() {
    alert("You won the game. Hurray");
    count = 0;
  }

  function lostGame() {
    alert("Sorry try again");
    count = 0;
  }
  if (count < 2) {
    count = count + 1;
    var element = document.getElementById(number);
    element.style.display = "none";
    setTimeout(myFunction, 3000);
  }
  if (count == 1) {
    imageState[0] = imageID;
  }

  if (count == 2) {
    imageState[1] = imageID;
  }

  if (count == 2) {
    if (imageState[0] == imageState[1]) {
      setTimeout(wonGame, 100);
    } else {
      setTimeout(lostGame, 100);
    }
  }
}

/*function memoryGame(number, pictureID) {
  if (count < 2) {
    document.getElementById(number).remove();
    state[count] = number;
    count++;
    console.log(count);
    console.log(state[0]);
    console.log(state[1]);
  }
}

function returningTheRemoved() {
  document.getElementById(4).appendChild();
}
*/
/*
 <div class="container-1">
      <img
        src="Images\antelope.jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
      <img
        src="Images\doggy.jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
      <img
        src="Images\koala.jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
      <img
        class="baboon"
        src="Images\baboon.jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
      <img
        src="Images\elephant (2).jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
      <img
        class="simba"
        src="Images\simba.jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
      <img
        src="Images\card back.jpg"
        alt=""
        height="200"
        width="150"
        onclick="memoryGame()"
      />
    </div>

*/
