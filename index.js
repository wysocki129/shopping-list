function addCheck(){
    //TODO
};

function deleteItem(){
    //TODO
};

//Toggle checked
$('.shopping-item-toggle' ).on('click', function(event){

    $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");

});


//Delete Item
$('.shopping-item-delete' ).on('click', function(event){

    $(this).parents("li").remove();

})