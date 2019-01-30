**Tic Tac Toe Game**</br>
![alt text](images/a12.png.png)
**Description:**</br>
It is a Pink Panther theme game where two players choose either an X or O to start a game in turns. The player who places three marks in vertical, horizontal, or diagonal row wins the game and shows a draw if neither player wins.</br>
**Technologies used:**</br>
It is a simple game built using JavaScript, HTML, and CSS.</br>
**JavaScript File:**</br>
There are three main functions:</br>
1-CheckWinner(): chick who wins.</br>
2-restart(): restart the game with previous score.</br>
3-play(): allow the player to click on the board and play the game.</br>
**HTML File:**</br>
Add the content for the page, it has a header, table, images, and button.</br>
**CSS File:**</br>
add the style for the HTML page.</br>
**Features Used:**</br>
1- Player choose a picture of panther's foot print instead of X and O.</br>
2- Once the game start the audio start to play.</br>
3- Keeping track of multiple game rounds with a win counter.</br>
4- The main header changing its color from pink to black.</br>
5- Try Again button, clears the board and continue game with previous score. </br>
6- Dispaly a swal message to notify the player if they win or not. 
**The approach used:**</br>
1- If else statment to check the winner.</br>
2- Object that have the score for the two players.</br>
3- $('.class').off("click"); prevents the palyer to click into the same grid multiple times.</br>
**New approach in CSS**</br>
```
function play(event) { // this function allow the palyer to click on the board game either X or O.

    //(event.target).text(choice);
    $(event.target).off("click");// prevent the palyer to click on the same grid multiple times.


    // setTimeout(function () {



    if (y === false) {// to prevent the palyer to continue playing the game once they win
        if (choice === 'X') {
            console.log("choice is x");
            
            $(event.target).text(choice);// insert the choice into the table.
            $(event.target).css('background-image', 'url(images/im4.png)') //insert image token instead of X or O.
            checkWinner(); // call the checkwinner function after each click on the board.
            choice = 'O';
        } else if(choice ===  "O") { // if the choice is not x then start with O.
            console.log("choice is o");
            $(event.target).text(choice);// insert the choice into the table
            $(event.target).css('background-image', 'url(images/im5.png)')//insert image token instead of X or O.
            checkWinner();// call the checkwinner function after each click on the board.
            choice = 'X'; // if the choice is o then start the next game O.

        }

    }
    // , 200)


}
```
in this
**Installation instructions:**</br>
1- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>// to add a swal massage box.</br>
2-  <iframe src="audio/The-Pink-Panther-Theme-Song.mp3" allow="autoplay" id="audio" style="display:none"></iframe></br>
    <audio id="player" autoplay loop></br>
        <source src="audio/The-Pink-Panther-Theme-Song.mp3" type="audio/mp3"></br>
    </audio> //to paly the audio once the game start.</br>
