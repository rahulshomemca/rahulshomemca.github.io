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
    'Happy Birthday Sweta!',
    'Many many happy returns of the day',
    '"i just wanted to let you know"',
    '"how much you mean to me"',
    '"and how lucky i am to have you in my life"',
    '"you changed my life without even trying"',
    '"when i talk to you, my day gets a whole lot better"',
    '"i may not be your first love "',
    '"but i want to be your last"',
    '"i just want to hold your hands"',
    '"feel your breath"',
    '"hear your heart"',
    '"i just want to be with you"',
    '"i know i am not perfect"',
    '"i say stupid things to you"',
    '"but pull that all aside"',
    '"and you will never find someone who cares or loves you more than me"',
    '"i promise to support you in whatever you do"',
    '"i will always be by your side"',
    '"i am so glad i met you"',
    '"and i just want to say ...."',
    '"i love you"',
]
function show(){
    for(let i=0; i<messages.length; i++) {
        setTimeout(function timer(){
            $('#msg').hide().text(messages[i]).fadeIn(1000)
        }, i*5000 );
    }
}





