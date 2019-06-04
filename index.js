function addCheck(){
    //TODO
};

function deleteItem(){
    //TODO
};

// //Toggle checked
// $('.shopping-item-toggle' ).on('click', function(event){

//     $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");

// });


// //Delete Item
// $('.shopping-item-delete' ).on('click', function(event){

//     $(this).parents("li").remove();

// })

$('ul').on('click', '.shopping-item-delete', function(event){
    $(this).parents('li').remove();
    event.stopPropagation();
});

$('ul').on('click', '.shopping-item-toggle', function(event){
    $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
});
$('button[type="submit"]').on('click', function(event){
    event.preventDefault();    
    let newText = $('input[name="shopping-list-entry"]').val();
    $('ul').append('<li><span class="shopping-item">' + newText + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
});





