**Tic Tac Toe Game**</br>
**Description:**</br>
It is a Pink Panther theme game where two players choose either an X or O to start a game in turns. The player who places three marks in vertical, horizontal, or diagonal row wins the game and shows a draw if neither player wins.</br>
**Technologies used:**</br>
It is a simple game built using JavaScript, HTML, and CSS.</br>
**JavaScript File:**</br>
There are three main functions:</br>
1-CheckWinner(): chick who wins.
2-restart(): restart the game with previous score.
3-play(): allow the player to click on the board and play the game.</br>
**HTML File:**</br>
Add the content for the page, it has a header, table, images, and button.</br>
**CSS File:**</br>
add the style for the HTML page.</br>
**Features Used:**</br>
1- Player choose a picture of panther's foot print instead of X and O.
2- Once the game start the audio start to play.
3- Keeping track of multiple game rounds with a win counter.
4- The main header changing its color from pink to black.
5- Try Again button, clears the board and continue game with previous score. </br>
**The approach used:**</br>
1- If else statment to check the winner.
2- Object that have the score for the two players.
3- $('.class').off("click"); prevents the palyer to click into the same grid multiple times.</br>
**Installation instructions:**</br>
1- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>// to add a swal massage box.
2-  <iframe src="audio/The-Pink-Panther-Theme-Song.mp3" allow="autoplay" id="audio" style="display:none"></iframe>
    <audio id="player" autoplay loop>
        <source src="audio/The-Pink-Panther-Theme-Song.mp3" type="audio/mp3">
    </audio> //to paly the audio once the game start.