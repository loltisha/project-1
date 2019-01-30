# Tic Tac Toe Game </br>
**Description:**</br>
It is a Pink Panther theme game where two players choose either an X or O to start a game in turns. The player who places three marks in vertical, horizontal, or diagonal row wins the game and shows a draw if neither player wins.</br>
**Technologies used:**</br>
It is a simple game built by using JavaScript, HTML, and CSS.</br>
**JavaScript File:**</br>
There are three main functions:</br>
1-CheckWinner(): chick who wins.</br>
2-restart(): restart the game with previous score.</br>
3-play(): allow the player to click on the board and play the game.</br>
**HTML File:**</br>
Add the content for the page, it has a header, table, images, and button.</br>
**CSS File:**</br>
add the style for the HTML page.</br>
___
**Features Used:**</br>
1- Player choose a picture of panther's foot print instead of X and O.</br>
2- Once the game start the audio start to play.</br>
3- Keeping track of multiple game rounds with a win counter.</br>
4- The main header changing its color from pink to black.</br>
5- Try Again button, clears the board and continue game with previous score. </br>
6- Dispaly message using swal library to notify the player if they win or not. 
**The approach used:**</br>
1- If else statment to check the winner.</br>
2- Object that have the score for the two players.</br>
3- $('.class').off("click"); prevents the palyer to click into the same grid multiple times.</br>
**New approach in HTML and CSS to display an image instead of text**</br>
This is the code for HTML file, where we can display the image in the grids and having a text at the same time but in a hidden display to avoid changing in the origin code as well we want to display X or O as a text.</br>
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
**CSS file**</br>
```
tr,td {
    border: 5px solid black;  
    height: 200px;
    width: 200px;
    background: rgb(253, 211, 248);
    text-indent: -400px; <!-- property specifies the indentation of the first line in a text-block  -->
     overflow: hidden; <!--  to hide the text  -->

} 
```
The two property are working together to hide the text int the table</br>
**New approach to display a message**</br>
using swal library in the JavaScript file to have a beautiful, responsive, and center message in the page for the the user instead of JavaScript popup boxes.</br>
___
**Difficulties**</br>
1- When I start to build the project, even with pseudo code i didn't know where and how to write the code for the functions.</br>
2- Writing the code in JavaScrpit for each specific function.</br>
3- Let the user plays with computer.</br>
4- Styling the page with CSS and adjusting the position for the image.</br>
5- Writing the code for restart function.</br>
6- Dealing with JQuery events.</br>
**Favourite part in this project:**</br>
1- Learning new events with JQuery and having more practice with JavaScript.</br>
2- Styling the page with CSS and learning new properties to design the page.</br>
3- Adding audio to the page.</br>
**Future plans:**</br>
1- I would like to let the user play the game with other players online.</br>
2- I would like to let the user choose the theme and the style of the game.</br>
3- I would like to let the user to choose the music for the game.</br>
4- The user shall have an account to save there scores and show the highest score between their friends.</br>
___
**Installation instructions:**</br>
1- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>// to add a swal massage box.</br>
2-  <iframe src="audio/The-Pink-Panther-Theme-Song.mp3" allow="autoplay" id="audio" style="display:none"></iframe></br>
    <audio id="player" autoplay loop></br>
        <source src="audio/The-Pink-Panther-Theme-Song.mp3" type="audio/mp3"></br>
    </audio></br>
**Acknowledgement**</br>
I would like to thank Michael Finneran, Moath Althawad, and Usman Bashir for helping, encouraging, and motivating me in this project.</br>
Also, I would like to thank my friends Hala Al Maimoni and Saja AlGadhi for assisting me with issues and errors that faced me in this project.