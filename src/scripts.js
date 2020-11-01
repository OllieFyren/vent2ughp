
$(document).on('keyup', '.Codebox', function(){
    if (this.value.length == this.maxLength) {
        $(this).parent().next(".codeboxContainer").children().focus();
    }
});
$(document).on('click', '.switch', function(){
    $("body").toggleClass('dark');
    console.log('hej');
});
$(document).on('click', '.btn', function(){
    $(".btn").fadeOut(500, function(){
        $(".text").fadeIn(100);
    });
});
$(document).on('click', '.button', function(){
    $(".applyButton").fadeOut(500).delay(400);
});