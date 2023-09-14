<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:107:"/Users/panliu/Documents/privateProject/familyMartOne/familymart1/addons/cms/view/default2/list_product.html";i:1694706232;s:106:"/Users/panliu/Documents/privateProject/familyMartOne/familymart1/addons/cms/view/default2/common/left.html";i:1694707537;s:106:"/Users/panliu/Documents/privateProject/familyMartOne/familymart1/addons/cms/view/default2/common/foot.html";i:1694694887;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
 <head> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <meta name="language" content="en"> 
  <title>首页</title> 
  <meta name="viewport" content="width=device-width, initial-scale=0.68, maximum-scale=1, minimum-scale=0.68, user-scalable=yes"> 
  <meta name="apple-mobile-web-app-capable" content="yes"> 
  <meta name="apple-mobile-web-app-status-bar-style" content="black"> 
  <meta property="wb:webmaster" content="286b33bafd8a81b5"> 
  <!-- 让360双核浏览器用webkit内核渲染页面
    ================================================== --> 
  <meta name="renderer" content="webkit"> 
  <meta name="description" content="<?php echo $site['description']; ?>"> 
  <meta name="keywords" content="<?php echo $site['keywords']; ?>"> 
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
  <link rel="icon" type="image/x-icon" href="/template/default2/images/favicon.ico?v=<?php echo $site['version']; ?>"> 
  <script type="text/javascript">BASEUSER=''</script> 
  <script type="text/javascript">HOSTURL=''</script> 
  <script type="text/javascript">
    // if(window.navigator.userAgent.indexOf("Mobile")>=0){
    //     if(window.navigator.userAgent.indexOf("iPad")>=0){


    //     }else{
    //         window.location.href="http://www.familymart.com.cn/mobile/";
    //         //$('meta[name="viewport"]').attr({'content':'width=device-width, initial-scale=0.28, maximum-scale=1.0, minimum-scale=0.28, user-scalable=yes'})
    //     }
    // }
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
     <ul class="nav"> 
      <?php $__NbPfZjVX9p__ = \addons\cms\model\Channel::getChannelList(["id"=>"nav","type"=>"top","cache"=>"0","condition"=>"1=isnav","row"=>"20","orderby"=>"weigh","orderway"=>"desc"]); if(is_array($__NbPfZjVX9p__) || $__NbPfZjVX9p__ instanceof \think\Collection || $__NbPfZjVX9p__ instanceof \think\Paginator): $i = 0; $__LIST__ = $__NbPfZjVX9p__;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$nav): $mod = ($i % 2 );++$i;?>
        <li class="nav-item guqj <?php if($nav['is_active']): ?> active <?php endif; ?>" data-name="zhajizhuanjia"> 
          <div class="toptitle">
           <a href="<?php if($nav['id'] != 66): ?><?php echo $nav['url']; endif; ?>"><?php echo $nav['name']; ?></a>
          </div> 
          <?php if($nav['has_child']): ?>
          <div class="drop"> 
           <ul> 
            <?php $__FdqLYWDk48__ = \addons\cms\model\Channel::getChannelList(["id"=>"son","type"=>"son","condition"=>"1=isnav","typeid"=>$nav['id'],"cache"=>"0","row"=>"20"]); if(is_array($__FdqLYWDk48__) || $__FdqLYWDk48__ instanceof \think\Collection || $__FdqLYWDk48__ instanceof \think\Paginator): $i = 0; $__LIST__ = $__FdqLYWDk48__;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$son): $mod = ($i % 2 );++$i;?>
              <li><a href="<?php echo $son['url']; ?>" class=""><?php echo $son['name']; ?></a></li> 
            <?php endforeach; endif; else: echo "" ;endif; $__LASTLIST__=$__FdqLYWDk48__; ?>
           </ul> 
          </div> 
        </li>
        <?php endif; endforeach; endif; else: echo "" ;endif; $__LASTLIST__=$__NbPfZjVX9p__; ?>
     </ul> 
    </div> 
    <div class="box01-side" style="position: static"> 
     <div class="box01-content"> 
      <div class="searchbox-fl"> 
       <div class="searchbox"> 
        <div class="searchbtn pa searchbtnleft" onclick="searchSubmit('');"></div> 
        <input type="text" placeholder="请输入搜索内容" name="keyword" id="searchInput" class="tet"> 
       </div> 
      </div> 
      <!-- <div class="sharelink pr"> 
       <div class="item item-1"> 
        <a href="javascript:;" onclick="contactUs()"> <span class="icon icon-type-1"></span> <p>联系我们</p> </a> 
       </div> 
      </div>  -->
     </div> 
    </div> 
   </div>}
   <div id="content"> 
    <div class="main mainpro"> 
     <div class="banpro"> 
      <img width="100%" src="<?php echo $__CHANNEL__['image']; ?>"> 
      <div class="banpro-box"> 
       <h2><?php echo $__CHANNEL__['name']; ?></h2> 
       <!-- <p>诚信务实、价值创新、顾客满意、共同成长</p>  -->
      </div> 
     </div> 
     <div class="prowrap"> 
      <div class="colB1-detail"> 
       <div class="colB1-detail-cos"> 
        <p><?php echo $__CHANNEL__['description']; ?></p> 
       </div> 
      </div> 
      <div class="colB2-detail"> 
       <div class="The-content-area-2"> 
        <img src="<?php echo $__CHANNEL__['lmimg']; ?>"> 
       </div> 
      </div> 
      <div class="colB3-detail"> 
       <div class="template-content"> 
        <img src="<?php echo $__CHANNEL__['lmbj']; ?>"> 
        <?php echo $__CHANNEL__['lanmujj']; ?>
       </div> 
      </div> 
     </div> 
    </div> 
    <!-- /右侧 --> 
   </div> 
   <script>
    $('.popwx').click(function() {
        $('#popewm').popOn();
    })
    $('.popwxside').click(function() {
        $('#popewm_side').show();
        $('#popewm_jxlm').hide();
    })
    $('#popewm_side .close').click(function() {
        $('#popewm_side').hide();
    })
    $('.jxlm').click(function() {
        $('#popewm_jxlm').show();
        $('#popewm_side').hide();
    })
    $('#popewm_jxlm .close').click(function() {
        $('#popewm_jxlm').hide();
    })

    //标注
    getSubCurrentMenu('about');

    //左侧判断,如果子类空,直接显示主菜单
    if ($("#subnavone>li").length == 0) {
        $('.subnav').hide();
        $('.nav').show();
    }
    </script>
    </div>
<!-- content --> 
<!--页脚开始--> 
<div class="breakbox cf"> 
 <div class="breakbox-box"> 
  <p class="footer-text1"><?php echo $site['beian']; ?></p> 
  <!-- <p><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202013095"><img src="/template/default2/images/gongan.png">沪公网安备 31011202013095号</a></p>  -->
  <!-- <p class="footer-text2"><a href="javascript:;" onclick="contactUs()">联系我们</a>|<a href="/faq">常见问题</a></p>  -->
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