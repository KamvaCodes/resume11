
//create a function to check when the window is scrolled
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
    });

    console.log(document.ti);