// Declare global variables
var computerNumber = 0;
var crystalNumbers = [0, 0, 0, 0];
var crystalSrc = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png", "assets/images/crystal5.png", "assets/images/crystal6.png", "assets/images/crystal7.png", "assets/images/crystal8.png"]
var userNumber = 0;
var winsCount = 0;
var lossesCount = 0;

// Initial page setup
$('#wins-text').text("Wins: " + winsCount);
$('#losses-text').text("Losses: " + lossesCount);


// Generate random number from computer between 19 and 120.
function getComputerNumber() {
    computerNumber = (Math.floor(Math.random() * 100) + 20);
    console.log(computerNumber);
    // Append computer number to DOM
    $('#computer-number-text').text("Find your way to " + computerNumber + "." + " Don't go over!");
};


function getUserNumber() {
    $('#user-number-text').text("Your current number is: " + userNumber);
};

// Assign random number values between 1-12 to each crystal.
function getcrystalNumbers() {
    for (i = 0; i < crystalNumbers.length; i++) {
        // Generate random number 1-12, store each to crystalNumbers array
        crystalNumbers[i] = Math.floor(Math.random() * 12) + 1;
        console.log(crystalNumbers[i]);
        // Create new img element...  
        var crystalImg = $('<img>');
        // add a class of 'crystal-image' to each, as well as some margin 
        crystalImg.addClass("crystal-image m-3");
        // add a link to the image source - randomly select from the crystalSrc array
        crystalImg.attr("src", crystalSrc[Math.floor(Math.random() * (crystalSrc.length))]);
        // Add the hidden number value to each image
        crystalImg.attr('data-crystal-value', crystalNumbers[i]);
        // Append each image to DOM
        $('#crystals').append(crystalImg);
    };
};
function showButton() {
    $('#play-again-button').toggle();
};

function addCrystalFunctionality() {

    // Crystal image onclick
    $('.crystal-image').on("click", function () {
        // Extract the crystal value data attribute
        var crystalValue = ($(this).attr("data-crystal-value"));
        // Convert data attribute to a number
        crystalValue = parseInt(crystalValue);
        // Add value to existing user number
        userNumber += crystalValue;
        // Append to DOM
        $('#user-number-text').text("Your current number is: " + userNumber);
        // Animate crystal image on click
        $(this).animate({ opacity: 0, }, 0);
        $(this).animate({ opacity: 1, }, 500);

        // Test for win
        if (userNumber === computerNumber) {
            // alert('You win!!');
            // Add 1 to win counter
            winsCount += 1;
            // Update win counter in DOM
            $('#wins-text').text("Wins: " + winsCount);
            resetGame();
        } else if (userNumber > computerNumber) {
            // alert('You lose!!');
            // Add 1 to loss counter
            lossesCount += 1;
            // Update win counter in DOM
            $('#losses-text').text("Losses: " + lossesCount);
            console.log(crystalValue);
            resetGame();
            console.log(crystalValue);
        }
    });
}

function resetGame() {
    $('#crystals').empty();
    userNumber = 0;
    getComputerNumber();
    getUserNumber();
    getcrystalNumbers();
    addCrystalFunctionality();
    $('#play-again-button').hide();
    $('#crystals').animate({ opacity: 0, }, 0);
    $('#crystals').animate({ opacity: 1, }, 500);
}

$('#play-again-button').on('click', resetGame);

$(document).ready(function () {
    resetGame();


});

