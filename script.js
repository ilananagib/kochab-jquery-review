
$(document).ready(onReady);

console.log('JQuery Intro Lecture'); 

function onReady(){ //call back function
    console.log('JQuery is ready');
    $('h1').addClass('funny');
    $('h1').css('color', 'red');

    console.log($('h2').text()); //get text value of h2
    $('h2').text('You have been set!');

    //inputs (also getter and setter)
    $('#nameInput').val('ilana');
console.log($('#nameInput').val());

//events
$('#clickableButton').on('click', function(){
    //console.log($('#nameInput').val());
    let newPersonName = $('#nameInput').val();
    console.log(newPersonName);
    $('#personList').append('<li>' + newPersonName + ' ' + '<button class="deleteButton">Delete</button>' + '</li>');
    });

    $('#personList').on('click', '.deleteButton', function(){
    console.log('Delete button when clicked');
    $(this).parent().remove();
});


$('#secondButton').on('click', function(){
    console.log('I was clicked');
    });

}


    