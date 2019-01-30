choice = 'X';
function play(event) {
   
    //(event.target).text(choice);
    //$(event.target).off("click");
   
        if (choice === 'X') {
            $(event.target).text(choice);
            $(event.target).css('background-image','url(images/im4.png)')
            //checkWinner();
            choice = 'O';
           
        }
        else {
            if($(".position").text()!==" ")
            {
            $(event.target).text(choice);
            $(event.target).css('background-image','url(images/im5.png)')
            //checkWinner();
            choice = 'X';
            }
        }
        
    }
   
    


$('.position').on("click", play);