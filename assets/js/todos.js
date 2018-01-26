// check off specific todos by clicking
// now we change the color to gray
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete
// tell the span listener not to bubble up
// listen on an element that exist
// run the code only when a "span" inside is "clicked"
$("ul").on("click","span",function(event){
    // this is pointing to the "x" span
    $(this).parent().fadeOut(500,function(){
        // this is pointing to the li
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    // key code 13 is the enter key
    if(event.which === 13){
        // grabbing new todo from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
    }
});

$(".fa-pencil").click(function (){
	$("input[type='text']").fadeToggle();
});
