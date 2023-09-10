//浏览器判别
var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
var isSafari = navigator.userAgent.toLowerCase().match(/safari/) != null;
var isFireFox = navigator.userAgent.toLowerCase().match(/firefox/) != null;
var isMsIe = navigator.userAgent.toLowerCase().match(/msie/) != null;

var mobileType = 0;
if(window.navigator.userAgent.indexOf("Mobile")>=0){
    mobileType = 1;
    $("#mobilehomeFix").css({"position":"absolute"});
    $("#leftPartSub .Nav-Item .Nav-Item-li2 .menuStyle").removeAttr("onclick");
}
//js extend Browse
function BrowseVersin(){
    var a, b;
    $.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    },
    a = $.uaMatch(navigator.userAgent),
    b = {},
    a.browser && (b[a.browser] = !0, b.version = a.version),
    b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0),
    $.browser = b,
    $.sub = function() {
        function a(b, c) {
            return new a.fn.init(b, c)
        }
        $.extend(!0, a, this),
        a.superclass = this,
        a.fn = a.prototype = this(),
        a.fn.constructor = a,
        a.sub = this.sub,
        a.fn.init = function c(c, d) {
            return d && d instanceof p && !(d instanceof a) && (d = a(d)),
            $.fn.init.call(this, c, d, b)
        },
        a.fn.init.prototype = a.fn;
        var b = a(e);
        return a
   };
}(BrowseVersin());

$(function(){
    $("#circle").fadeOut(100);
    $("#circle1").fadeOut(1200);

    gotoTop(100);

    if(mobileType == 0){
        menuAc();
    }else{
        m_menuAc();
    }
    
})

function alertMsg(obj){
    var obj=$(obj);
    var ch=parseInt(document.body.scrollHeight);
    var wh=parseInt(document.body.scrollWidth);
    var oh = parseInt(obj.height());
    var bch ;
    if(isFireFox){
        ch=parseInt(document.documentElement.scrollHeight);
    }else if(isMsIe){
                ch=parseInt(document.documentElement.scrollHeight);
            }else{
                    ch=parseInt(document.body.scrollHeight);
                }
    if(isSafari||isChrome){
        bch = parseInt(document.body.scrollTop);
    }else{
        bch = parseInt(document.documentElement.scrollTop);
    }
    var cch= parseInt(document.documentElement.clientHeight);
    var w=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(obj.width())/2);
    var h = (bch+(cch/2)-(oh/2));

    $("select").hide();
    $('#boardWrapper select').show();
    $('#onload_cover').css({'height':ch,'width':wh}).show();
    obj.css({top: h+'px',left:w+'px'}).fadeIn('slow');

    $(window).scroll( function(){ 
        if(obj.css('display')!='block'){
            return false;
        }else if(obj.css('display')=='block'){
            var bch2 ;
            if(isSafari||isChrome){
                bch2 = parseInt(document.body.scrollTop);
            }else{
                bch2 = parseInt(document.documentElement.scrollTop);
            }

            var newh = (bch2+(cch/2)-(oh/2));
            obj.css({top: newh+'px'});
            
        }
    });
    return false;
}

function alertMsg3(obj){
    var obj=$(obj);
    var ch=parseInt(document.body.scrollHeight);
    var wh=parseInt(document.body.scrollWidth);
    var oh = parseInt(obj.height());
    var bch ;
    if(isFireFox){
        ch=parseInt(document.documentElement.scrollHeight);
    }else if(isMsIe){
                ch=parseInt(document.documentElement.scrollHeight);
            }else{
                    ch=parseInt(document.body.scrollHeight);
                }
    if(isSafari||isChrome){
        bch = parseInt(document.body.scrollTop);
    }else{
        bch = parseInt(document.documentElement.scrollTop);
    }
    var cch= parseInt(document.documentElement.clientHeight);
    var w=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(obj.width())/2);
    var h = (bch+(cch/2)-(oh/2));

    // $("select").hide();
    // $('#boardWrapper select').show();
    $('#onload_cover').css({'height':ch,'width':wh}).show();   
    obj.css({top: h+'px',left:w+'px'}).fadeIn('slow');

    $(window).scroll( function(){ 
        if(obj.css('display')!='block'){
            return false;
        }else if(obj.css('display')=='block'){
            var bch2 ;
            if(isSafari||isChrome){
                bch2 = parseInt(document.body.scrollTop);
            }else{
                bch2 = parseInt(document.documentElement.scrollTop);
            }

            var newh = (bch2+(cch/2)-(oh/2));
            obj.css({top: newh+'px'});
            
        }
    });
    return false;
}

function alertMsg2(obj){
    var obj=$(obj);
    var ch=parseInt(document.body.scrollHeight);
    var wh=parseInt(document.body.scrollWidth);
    var oh = parseInt(obj.height());
    var bch ;
    if(isFireFox){
        ch=parseInt(document.documentElement.scrollHeight);
    }else if(isMsIe){
                ch=parseInt(document.documentElement.offsetHeight);
    }else{
            ch=parseInt(document.body.scrollHeight);
        }
    if(isSafari||isChrome){
        bch = parseInt(document.body.scrollTop);
    }else{
        bch = parseInt(document.documentElement.scrollTop);
    }
    var cch= parseInt(document.documentElement.clientHeight);
    var w=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(obj.width())/2);
    var h = (bch+(cch/2)-(oh/2));

    $("select").hide();
    $('#boardWrapper select').show();
    $('#onload_cover').css({'height':ch,'width':wh}).show();   
    obj.css({top: h+'px',left:w+'px'}).fadeIn('slow');

    return false;
}



function showCommonPop(txt){
    $("#commom_popup_inner").html(txt);
    $("#commom_popup").css({top:$(window).scrollTop()+($(window).height()-$("#commom_popup").height())/2}).fadeIn();
    $('#onload_cover').css({height:$(document).height()}).show();
   // console.log($("body").height());

    $(window).scroll(function(){
        $("#commom_popup").css({top:$(window).scrollTop()+($(window).height()-$("#commom_popup").height())/2});
    });
}

function showCommonPop2(txt){
    $("#commom_popup_inner2").html(txt);
    $("#commom_popup2").css({top:$(window).scrollTop()+($(window).height()-$("#commom_popup2").height())/2}).fadeIn();
    $('#onload_cover').css({height:$(document).height()}).show();
   // console.log($("body").height());

    $(window).scroll(function(){
        $("#commom_popup2").css({top:$(window).scrollTop()+($(window).height()-$("#commom_popup2").height())/2});
    });
}

function hideCommonPop(){
    $("#commom_popup,#onload_cover").hide();
}

function hideCommonPop2(){
    //$("#commom_popup,#onload_cover").hide();
    $("#commom_popup").hide();
    if(!$('#boardWrapper').is(':visible')){
        $('#onload_cover').hide();
    }
    console.log(!$('#boardWrapper').is(':visible'))
}

function hideCommonPop3(){
    $("#commom_popup2,#onload_cover").hide();
}

function closeAlert(obj){
    $(obj).fadeOut('slow', function(){
        $('#onload_cover').hide();
        $("select").show();
    });
    
}

function closeAlert10(obj){
    $(obj).fadeOut('slow', function(){
        $('#onload_cover1').hide();
    });
}

//返回顶部
function gotoTop(min_height){
    //预定义返回顶部的html代码，它的css样式默认为不显示
    var gotoTop_html = '<div id="gotoTop"></div>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    $("body").append(gotoTop_html);
    $("#gotoTop").click(//定义返回顶部点击向上滚动的动画
        function(){$('html,body').animate({scrollTop:0},700);
    }).hover(//为返回顶部增加鼠标进入的反馈效果，用添加删除css类实现
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
    });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function(){
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if( s > min_height){
            $("#gotoTop").fadeIn(700).addClass('showme');
        }else{
            $("#gotoTop").fadeOut(700).removeClass('showme');
        };
    });
};

var searchSubmit = function(val){
    if(val && val!=''){
        window.location.href=BASEUSER+"/search#stq="+encodeURIComponent(val)+"&stp=1";
    }else{
        if("请输入搜索内容"==$("#searchInput").val() || $("#searchInput").val()==''){      
            window.location.href=BASEUSER+"/search#stq="+encodeURIComponent("全家FamilyMart")+"&stp=1";
        }else{
            window.location.href=BASEUSER+"/search#stq="+encodeURIComponent($("#searchInput").val())+"&stp=1";
        }
    }
}

var searchSubmit1 = function(val){
    if(val && val!=''){
        window.location.href=BASEUSER+"/search#stq="+encodeURIComponent(val)+"&stp=1";
    }else{
        if("请输入搜索内容"==$("#searchInput1").val() || $("#searchInput1").val()==''){      
            window.location.href=BASEUSER+"/search#stq="+encodeURIComponent("全家FamilyMart")+"&stp=1";
        }else{
            window.location.href=BASEUSER+"/search#stq="+encodeURIComponent($("#searchInput1").val())+"&stp=1";
        }
    }
}

var nowMenuOpt = -1;
function menuAc(){
    //菜单
    $('.ulcol').each(function(i){
        $(this).mouseenter(function(){
            $('.ulcol').eq(i).find('.licolTopHover').show();
        }).mouseleave(function(){
            $('.ulcol').eq(i).find('.licolTopHover').hide();
        })
    })
    
    $('.Nav-Item').each(function(i){
        $(this).mouseenter(function(){
            nowMenuOpt = i;
            $(this).find('.menuNav').show();
            $(this).find('.menuStyle').html('<span>'+ NavArrItem2[i] +'</span>');
        }).mouseleave(function(){
            nowMenuOpt = -1;
            $(this).find('.menuNav').hide();
            $(this).find('.menuStyle').html(NavArrItem1[i]);
        })
    })
}

function m_menuAc(){
    $('.Nav-Item').each(function(i){
        $(this).click(function(){
            if(nowMenuOpt == (-1)){       
            }else{
                $('.menuNav').eq(nowMenuOpt).hide();
                $('.menuStyle').eq(nowMenuOpt).html('<span>'+ NavArrItem1[nowMenuOpt] +'</span>');
            }
  
            nowMenuOpt = i;
            $(this).find('.menuNav').show();
            $(this).find('.menuStyle').html('<span>'+ NavArrItem2[i] +'</span>');
        })
    })
}

var NavArrItem1 = ['活动情报','商品特辑','便利生活','品牌介绍','合作经营','招聘速递','会员中心'];
var NavArrItem2 = ['Event','Product','Service','Brand','Franchise','Career','Member'];

// 图片预加载
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

var loginOut = function(){
        $.ajax({
            type:"POST",
            url:BASEUSER+"/members/loginOut",
            global:false,
            data:{},
            dataType:"json",
            success:function(data){
                $(".userinfoSub").show();
                $(".userinfoSubLogin").hide();
                try{
                    if(typeof(eval("memberEditFun.userLoginOut"))=='function') memberEditFun.userLoginOut();
                }catch(e){}
                window.location.reload();
            }
        });
    }
function cutStr(textStr,numb){
    var getStr = textStr;
    if( getStr.length > numb ){
        var text = getStr.substring(0,numb);
        text +=' ...';
        return text;
    }else{
        return getStr;
    }
}
