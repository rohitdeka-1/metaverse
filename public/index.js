$(document).ready(function () {
    $("#scroll-strip").click(function () {
        $('#section2')[0].scrollIntoView({ 
            behavior: "smooth" 
        });
    });

    $('#scroll-strip2').click(function(){
        $('#section1')[0].scrollIntoView({
            behavior: "smooth"
        })
    }) 
    
    $('button').click(function(){
        $('#form-container').fadeIn();   
    })

    $('.cross').click(function(){
        $('#form-container').fadeOut();
    })

    $(document).on('keydown', function(event) {
        if ((event.key === "Escape") || (event.keyCode === 27)) {
            $('#form-container').fadeOut();
        }
    });

});



