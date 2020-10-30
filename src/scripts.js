
    $(document).on('click', '.switch', function(){
        $("body").toggleClass('dark');
        console.log('hej');
    });
    $(document).on('click', '.btn', function(){
        $(".btn").addClass("toggle");
        $(".text").removeClass("toggle");
    });
$(document).ready(function(){
    $(".Codebox").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.Codebox').focus();
        }
  });
});