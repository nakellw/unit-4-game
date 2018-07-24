$( document ).ready(function(){
    var Random = Math.floor(Math.random()*101 + 19)

// Selects a random number to be shown at the start of the game 
//Number should be between 19-120
//
$('#randomNumber').text( Random );
// Appending random number to the randomNumber id in the html doc
//

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

// Setting up random numbers for each jewl
// Random number to be betwen 1-12
//

var userTotal = 0;
var wins = 0;
var losses = 0;
// Declaring variables for tallies

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game

function reset(){
    Random = Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1)
    num2= Math.floor(Math.random()*11+1)
    num3= Math.floor(Math.random()*11+1)
    num4= Math.floor(Math.random()*11+1)
    userTotal= 0;
    $('#finalTotal').text(userTotal);
}
//adds the wins to the userTotal

function GOOD(){
    alert("You won!");
    win++;
    $('#numberWins').text(wins);
    reset();
}

function BAD(){
    alert("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

$('.one').on('click',function(){
    userTotal= userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal === Random){
        GOOD();
    }
    else if ( userTotal > Random){
        BAD();
    }
})

$('.two').on('click',function(){
    userTotal= userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal === Random){
        GOOD();
    }
    else if ( userTotal > Random){
        BAD();
    }
})

$('.three').on('click',function(){
    userTotal= userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal === Random){
        GOOD();
    }
    else if ( userTotal > Random){
        BAD();
    }
})

$('.four').on('click',function(){
    userTotal= userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal === Random){
        GOOD();
    }
    else if ( userTotal > Random){
        BAD();
    }
});

});
