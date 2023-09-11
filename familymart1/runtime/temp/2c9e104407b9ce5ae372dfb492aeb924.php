<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:101:"/Users/pan.liu/Documents/privateProject/familyMartOne/familymart1/addons/cms/view/default2/index.html";i:1694417957;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
 <head> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <meta name="language" content="en"> 
  <title>全家Family Mart—开心尝鲜在全家 - 首页</title> 
  <meta name="viewport" content="width=device-width, initial-scale=0.68, maximum-scale=1, minimum-scale=0.68, user-scalable=yes"> 
  <meta name="apple-mobile-web-app-capable" content="yes"> 
  <meta name="apple-mobile-web-app-status-bar-style" content="black"> 
  <meta property="wb:webmaster" content="286b33bafd8a81b5"> 
  <!-- 让360双核浏览器用webkit内核渲染页面
    ================================================== --> 
  <meta name="renderer" content="webkit"> 
  <meta name="description" content="全家便利店，让您的生活更加便利，同时让每位来到全家的顾客，都能够与温暖的笑容相遇，给您贴心般的家人般的感受！"> 
  <meta name="keywords" content="全家便利店  Family Mart  新品特快  呀米将  营养蒸包馒头  营养便当  经典风味面  和风寿司手卷  美味饭团 鲜爽沙拉 烤致工房  关东煮本铺 营养粥汤 风味小食 自提服务 鲜食促销  公共事业缴费 刷卡消费 ATM 娱乐通讯 国家快递 阿拉订 付临门  Fami淘宝  Fami天猫  全家简介 全家愿景 全家大事记 全球布局  新闻中心 合作经营优势 说明会  店长 新手解答  申请流程 门店租赁 合作经营条件测试  全家工作优势 全家在职训练 求职小技巧 招聘流程 我要应聘 最新职缺  常见问题  喜士多  7-11 罗森"> 
  <link rel="stylesheet" href="/template/default2/css/swiper.min.css?v=<?php echo $site['version']; ?>"> 
  <link rel="stylesheet" href="/template/default2/css/animate.css?v=<?php echo $site['version']; ?>"> 
  <link rel="stylesheet" href="/template/default2/css/global.css?v=<?php echo $site['version']; ?>"> 
  <link rel="stylesheet" href="/template/default2/css/fane.css?v=<?php echo $site['version']; ?>"> 
  <script type="text/javascript" src="/template/default2/js/jquery-1.9.1.min.js?v=<?php echo $site['version']; ?>"></script> 
  <script type="text/javascript">
        function changecitybypup(){
            $.ajax({
                type:"POST",
                global:false,
                url:"/store/setCity",
                data:{"cid": $('#citySeltetPup').val()},
                dataType:"JSON",
                success:function(data){
                },
                complete:function(data){
                    showCommonPop('正在切换城市...');
                    webMCookie.set('cid',$('#citySeltetPup').val(), 7);
                    webMCookie.set('city',$('#citySeltetPup option:selected').text(), 7);
                    location.reload();
                },
            });
        }
    </script> 
  <link rel="icon" type="image/x-icon" href="/template/default2/css/favicon.ico?v=<?php echo $site['version']; ?>"> 
  <script type="text/javascript">BASEUSER=''</script> 
  <script type="text/javascript">HOSTURL='http://www.familymart.com.cn'</script> 
  <script type="text/javascript">
    if(window.navigator.userAgent.indexOf("Mobile")>=0){
        if(window.navigator.userAgent.indexOf("iPad")>=0){


        }else{
            window.location.href="http://www.familymart.com.cn/mobile/";
            //$('meta[name="viewport"]').attr({'content':'width=device-width, initial-scale=0.28, maximum-scale=1.0, minimum-scale=0.28, user-scalable=yes'})
        }
    }
    </script> 
  <script type="text/javascript">
    function wmx_set_account(account) {
        return false;
    }
    function wmx_flash_counter(title,url) {
        return false;
    }
    function wmx_trackBtn(buttonname, driveritem) {
        return false;
    }
    function familymart_tracker(a,b){
        return false;
    }

    function familymart_flash_tracker(a,b){
        return false;
    }
    </script> 
  <script>

	var webMCookie = {
        set:function(cname, cvalue, exdays) ,
        get:function(cname) 
                if (c.indexOf(name) != -1) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        clear:function(cname) 
        }
    };
	function ChangeCity(){
		showCommonPop('正在切换城市...');
		webMCookie.set('cid',$('#citySeltet').val(), 7);
		webMCookie.set('city',$('#citySeltet option:selected').text(), 7);
		location.reload();
	}


</script> 
  <script>
// 客服系统
(function(a,h,c,b,f,g){a["UdeskApiObject"]=f;a[f]=a[f]||function(){(a[f].d=a[f].d||[]).push(arguments)};g=h.createElement(c);g.async=1;g.charset="utf-8";g.src=b;c=h.getElementsByTagName(c)[0];c.parentNode.insertBefore(g,c)})(window,document,"script","https://assets-cli.s4.udesk.cn/im_client/js/udeskApi.js","ud");
ud({
    "code": "1i0h723c",
    "link": "https://familymart.s4.udesk.cn/im_client/?web_plugin_id=46808"
});

function contactUs() {
    $('.udesk-client-btn').click()
}
</script> 
  <style type="text/css">
#udesk_btn {
    display: none;
}
</style> 
 </head> 
 <body> 
  <div class="wrap"> 
   <!-- menu --> 
   <div class="side"> 
    <div class="topside"> 
     <a href="/" class="logo"></a> 
     <!--=================会员卡=================--> 
     <!--=================美味鲜食=================--> 
     <!--=================鲜食系列=================--> 
     <!--=================促销优惠=================--> 
     <!--=================加盟合作=================--> 
     <!--=================优势介绍=================--> 
     <!--=================加盟方案=================--> 
     <!--=================我要加盟=================--> 
     <!--=================人才招聘=================--> 
     <!--=================职业发展=================--> 
     <!--=================招聘贴士=================--> 
     <!--=================岗位应聘=================--> 
     <ul class="nav"> 
      <li class="nav-item guqj" data-name="zhajizhuanjia"> 
       <div class="toptitle">
        <a href="#">关于全家</a>
       </div> 
       <div class="drop"> 
        <ul> 
         <li><a href="/brand" class="">品牌介绍</a></li> 
         <li><a href="/brand/parcafe" class="">湃客咖啡</a></li> 
         <!--  <li><a href="/brand/newscenter" class="">TVC欣赏</a></li> --> 
         <li><a href="/members/ZunXiangKa" class="">会员卡</a></li> 
         <li><a href="/members/giftCard" class="">礼品卡</a></li> 
         <!-- <li><a href="/brand/statement" class="">声明</a></li>
                    <li><a href="/brand/notice" class="">公告</a></li> --> 
        </ul> 
       </div> </li> 
      <li class="nav-item jmhz" data-name="zunxiangtiyan"> 
       <div class="toptitle">
        <a href="#">加盟合作</a>
       </div> 
       <div class="drop"> 
        <ul> 
         <li><a href="/franchise/hqAdvantage" class="">优势介绍</a></li> 
         <li><a href="/franchise/planA" class="">加盟方案</a></li> 
         <li><a href="/franchise/applyOnline" class="">我要加盟</a></li> 
         <li><a href="/franchise/experienceShare" class="">经验分享</a></li> 
        </ul> 
       </div> </li> 
      <li class="nav-item rczp" data-name="zunxiangtiyan"> 
       <div class="toptitle">
        <a href="#">人才招聘</a>
       </div> 
       <div class="drop"> 
        <ul> 
         <li><a href="/career/workerGoodness" class="">职业发展</a></li> 
         <li><a href="/career/invitePost" class="">招聘贴士</a></li> 
         <li><a href="/career/list" class="">岗位应聘</a></li> 
         <li><a href="/faq" class="">常见问题</a></li> 
        </ul> 
       </div> </li> 
     </ul> 
    </div> 
    <div class="box01-side" style="position: static"> 
     <div class="box01-content"> 
      <!--   <div class="city-selector">
                   <div class="searchbox-lp">
                            <select class="searchbox-sc" id="citySeltet" onChange="ChangeCity()">
                                <option value="1" selected>上海</option><option value="2">苏州</option><option value="3">深圳</option><option value="4">广州</option><option value="5">杭州</option><option value="6">成都</option><option value="10">无锡</option><option value="11">北京</option><option value="12">东莞</option><option value="13">嘉兴</option>                            </select>
                       </div>
                </div> --> 
      <div class="searchbox-fl"> 
       <div class="searchbox"> 
        <div class="searchbtn pa searchbtnleft" onclick="searchSubmit('');"></div> 
        <input type="text" placeholder="请输入搜索内容" name="keyword" id="searchInput" class="tet"> 
       </div> 
      </div> 
      <div class="sharelink pr"> 
       <!--     <div class="item item-3" data-index="3">
                        <span class="icon icon-type-1"></span>
                        <p>公众号</p>
                    </div>
                    <div class="item item-6" data-index="6">
                        <span class="icon icon-type-1"></span>
                        <p>抖音蓝V</p>
                    </div>
                    <div class="item item-7" data-index="7">
                        <span class="icon icon-type-1"></span>
                        <p>微博</p>
                    </div> --> 
       <div class="item item-1"> 
        <a href="javascript:;" onclick="contactUs()"> <span class="icon icon-type-1"></span> <p>联系我们</p> </a> 
       </div> 
       <!--   <div class="item item-2">
                        <a href="/store">
                            <span class="icon icon-type-1"></span>
                            <p>门店查找</p>
                        </a>
                    </div> --> 
       <!--  <div class="item item-5" data-index="2">
                        <span class="icon icon-type-2"></span>
                    </div>
                    <div class="item item-4" data-index="1">
                        <span class="icon icon-type-2"></span>
                    </div> --> 
      </div> 
     </div> 
    </div> 
   </div> 
   <div id="content"> 
    <style>
    html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    p{
      margin:0;
    }
     .close-btn {
    display: block;
    width: 33px;
    height: 33px;
    position: absolute;
    top: 11px;
    right: 11px;
    cursor: pointer;
}
    @media(min-width: 1000px){
    .mian{
      width: 850px;
      height: 434px;
      position: absolute;
      top:50%;
      left: 50%;
      margin-top:-217px;
      margin-left: -425px;
      text-align: center;
    }
    .lb{
      width: 800px;
      height: 400px;
      margin:30px auto;
      box-sizing: border-box;
      
    }

    .tit{
      color: #32a2da;
      font-weight: 500;
      padding-top: 35px;
      padding-bottom: 20px;
      font-size: 18px;
    }
    .text{
      text-align: left;
      padding:10px 30px;
      font-size: 14px;
      line-height: 27px;
    }
  }
     @media (max-width: 1000px){
      .mian{
        width: 88%; 
        position: absolute;
        left: 50%;
        margin-top: 24%;
        margin-left: -44%;
        text-align: center;

      }
      .lb {
        width: 87%;
        /* height: 90%; */
        margin: 0 auto;
        box-sizing: border-box;
        margin-bottom: 35px;
        margin-top: 35px;
        }
      .close-btn {
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 11px;
        right: 11px;
        cursor: pointer;
        }
      .tit {
        /* padding-top: 30px; */
        color: #32a2da;
        font-weight: 600;
        font-size: 16px;
        }
      .text {
        text-align: left;
        padding-top: 10px;
        font-size: 0.85em;
        line-height: 190%;
        }
     }

     .yiqing-Suspended-layer {
        z-index: 10;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .6);
    }
      @media(max-width: 320px){
        .mian{
          margin-top:11%;
        }
      }
  </style> 
    <div class="main mainpro home"> 
     <div class="swiper-container banpro"> 
      <div class="swiper-wrapper swiper-no-swiping"> 
       <div> 
       </div> 
      </div> 
     </div> 
     <div class="prowrap"> 
      <div class="colC1-detail cf"> 
       <a href="/franchise/applyOnline"><img src="/template/default2/images/sct_01.jpg" alt=""></a> 
       <a href="/career/list"><img src="/template/default2/images/sct_02.jpg" alt=""></a> 
       <a href="http://www.familymart.com.cn/brand/parcafe" target="_blank"><img src="/template/default2/images/sct_03.jpg" alt=""></a> 
      </div> 
      <div class="colC2-detail cf"> 
       <div class="content-box"> 
        <div class="col col-1"> 
         <h2>尊享版集享会员</h2> 
         <p>你升级尊享卡了吗？尊享卡集享会员独享更多权益</p> 
         <div> 
          <!-- <a class="more-btn" href="">了解更多</a> --> 
         </div> 
         <div class="row-2"> 
          <a class="get-card-btn" href="/members/ZunXiangKa">领取您的尊享卡</a> 
         </div> 
        </div> 
        <div class="col col-2"> 
         <img src="/template/default2/images/vip_01.jpg" alt=""> 
        </div> 
       </div> 
      </div> 
     </div> 
    </div> 
   </div> 
   <script>
    var productSwiper;
    var productSwiperPerview;
    var productContainer;  

    window.onload = function() {
        productContainer = $('.product-container');
        initBannerSwiper(); 
        onPageResize();
        initProductSwiper();
        $(window).on('resize', onPageResize);
    } 

    function onPageResize(){
        productSwiperPerview = Math.min(Math.max(3,Math.floor((window.innerWidth - 400) / 202)),6); 
        productContainer.width((202 + 20) *　productSwiperPerview - 40);
    }

    function initProductSwiper(){
        productSwiper = new Swiper('.swiper-container-product', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          preloadImages:false,
          centerInsufficientSlides: true,
          navigation: {
              nextEl: '.prod-btn-next',
              prevEl: '.prod-btn-prev'
          },
          on: {
            init: function(){
                productContainer.removeClass('hidden');
                $('.loading-txt').hide();
            }
          }
        });
    }

    function initBannerSwiper(){
        var mySwiper = new Swiper ('.banpro', {
            loop: true,
            noSwiping : true,
            preloadImages:false,
            autoplay:{
                delay: 3000,
                disableOnInteraction: false
            },
            speed:1000,
            pagination :{
                el: '.swiper-pagination',
                clickable :true,
                
            },
            navigation: {
              nextEl: '.banner-btn-next',
              prevEl: '.banner-btn-prev'
            }
      });
    }   
    // var yiqingPopup = $('.yiqing-Suspended-layer');
    //  yiqingPopup.fadeIn();
 
    //  $('.yiqing-close-btn').on({
    //      click:function(){
    //          yiqingPopup.fadeOut();
    //      }
    //  });

</script>
  </div>
  <!-- content --> 
  <!--页脚开始--> 
  <div class="breakbox cf"> 
   <div class="breakbox-box"> 
    <p class="footer-text1">© 2020 Shanghai FamilyMart Co.,Ltd All Rights Reserved.<a href="//beian.miit.gov.cn/" target="_blank" rel="nofollow">沪ICP备12043844号-1</a></p> 
    <p><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202013095"><img src="/template/default2/images/gongan.png">沪公网安备 31011202013095号</a></p> 
    <p class="footer-text2"><a href="javascript:;" onclick="contactUs()">联系我们</a>|<a href="/faq">常见问题</a></p> 
   </div> 
  </div> 
  <!--页脚结束-->  
  <!--二维码开始--> 

  <script type="text/javascript" src="/template/default2/js/swiper.min.js"></script> 
  <script type="text/javascript" src="/template/default2/js/global.js"></script> 
  <script type="text/javascript" src="/template/default2/js/common.js"></script> 
  <script type="text/javascript" src="/template/default2/js/baidu.js"></script> 
  <script type="text/javascript" src="/template/default2/js/product.pop.js"></script> 
  <script type="text/javascript" src="/template/default2/js/lazyload.js"></script>   
 </body>
</html>