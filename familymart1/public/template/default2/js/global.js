var side = $('.side');
var topside = $('.topside');
var bottomside = $('.box01-side');
var main = $('.main');
var breakbox = $('.breakbox');

var windowHeight;
var windowWidth;
var navHeight;
var sideBottomHeight;

function onResize(){
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    navHeight = topside.height();
    sideBottomHeight = bottomside.height();
    if(navHeight + sideBottomHeight > windowHeight){
       bottomside.removeClass('fixed');
       side.css('overflow-y','scroll');
    }
    else{
        bottomside.addClass('fixed');
        side.css('overflow-y','hidden');
    }
    var mainHeight = main.height();
    
    if(mainHeight + 75 > windowHeight){
    	breakbox.removeClass('footer');
    }
    else{
    	breakbox.addClass('footer');
    }
}

$(window).on('resize', onResize).on('load', onResize);

var activeQrcode;
var qrcodeTimer;

$('.sharelink .item').hover(function(){
    var index = $(this).attr('data-index');
    var qrcode = $('.qrcode-' + index);
    var itemPosition = $(this).offset();
    var qrcodeHalfWidth = qrcode.width() / 2;
    var qrcodeHeight = qrcode.height();
    qrcode.css({'top': itemPosition.top - qrcodeHeight - 30, 'left': itemPosition.left - qrcodeHalfWidth + $(this).width()/2 - 5});
    if(!qrcodeTimer){
        qrcodeTimer = setTimeout(function(){
            qrcode.fadeIn();
        },200)
    }
    activeQrcode = qrcode;
},function(){
    activeQrcode.fadeOut();
    if(qrcodeTimer){
        clearTimeout(qrcodeTimer);
        qrcodeTimer = null;
    }
});


$('.toptitle a').click(function(){
    $(this).parent().parent().siblings().removeClass('active');
    $(this).parent().parent().toggleClass('active');
    onResize();
})

$('.subnav .back').click(function(){
    $('.subnav').hide();    

    $('.nav').addClass("fadeInLeft animated").show();
    onResize();
})

function getSubCurrentMenu(contid){
    var _currentID = $("#leftmenu_"+contid);
    if(_currentID){
        _currentID.addClass("on");
        _currentID.parent().parent().addClass("active");
    }
} 
 