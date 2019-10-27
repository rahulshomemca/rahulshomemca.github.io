(function blink(){
    $('.blink_me').fadeOut(500).fadeIn(1000, blink);
})();
$('#start_show').click(function(){
    $('#start_div').hide()
    $('#wish_div').show()
    $('#body').removeClass('before-body')
    $('body').addClass('after-body')
    $('#hbd').hide().fadeIn(3000);
    (function blink(){
        $('#wish-img').fadeOut('slow').fadeIn(5000, blink);
    })();
    var x = document.getElementById("music"); 
    x.play()
    show()
})

var messages = [
    '"Hi, Sweta"',
    '"Hello"',
    '"Rahul"',
    '"Shome"'
]
function show(){
    for(let i=0; i<messages.length; i++) {
        setTimeout(function timer(){
            $('#msg').hide().text(messages[i]).fadeIn(1000)
        }, i*5000 );
    }
}





