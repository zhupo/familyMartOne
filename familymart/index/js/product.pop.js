var productPopup = $('.product-Suspended-layer');

$('.product-item').on({
    click:function change( url, price, name ){
        
        $("#NameChange").html( $(this).find('span').html() );
        // $("#PriceChange").html( $(this).find('em').html() );
        $("#imgChange").attr( 'src', $(this).find('.productBimg').val() );
        // $("#PsChange").html( $(this).children('li').html() );
        productPopup.fadeIn();
    }
});

$('.close-btn').on({
    click:function(){
        productPopup.fadeOut();
    }
});
