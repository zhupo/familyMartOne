(function($) {
    var monthCalendar = (function () {
        function monthCalendar(element, options) {
            this._element = element;
            this._prevBtn = options.lastM;
            this._nextBtn = options.nextM;
            this._explain = $(options.explain);
            this._Htips = $(options.Htips);
            self._tdAct = null;
        }
        monthCalendar.prototype.render = function () {
            this.curDate = new Date(); //  获取当前日期
            this.year = this.curDate.getFullYear();
            this.month = this.curDate.getMonth();
            this.setNewCalendar();
            this.bindEvents();
        };
        monthCalendar.prototype.bindEvents = function () {
            var self = this;
            var c = $("#city").val();
            $(".cityConTab_"+c).removeClass("hide");
            self._element.on('click',self._prevBtn,function(){//上一月
                self.month--;
                if(self.month == -1) {
                    self.year--;
                    self.month = 11;
                }
                self.setNewCalendar();
            }).on('click',self._nextBtn,function(){//下一月
                self.month++;
                if(self.month == 12) {
                    self.year++;
                    self.month = 0;
                }
                self.setNewCalendar();
            }).on('click','td.dateBlue,td.dateGray',function(){//选择说明会日期
                if(!$(this).find('a').hasClass('actived')){
                    if($(this).hasClass('dateGray')){
                        self._explain.find(".Honlinebtn").removeClass('actived');
                    }else{
                        self._explain.find(".Honlinebtn").addClass('actived');
                    }
                    self._element.find('a').removeClass('actived');
                    $(this).find('a').addClass('actived');
                    var theCid = $("#city").val();
                    // if(theCid==1){
                    //     self._explain.find(".Haddress").html($(this).data('address')
                    //         //+'<br/><span style="color:#f00">[由于公司即将搬迁，说明会暂停举办]</span>'
                    //         );
                    //     self._explain.find(".Honlinebtn").removeClass('actived');
                    // }else{
                        self._explain.find(".Haddress").text($(this).data('address'));
                        self._explain.find(".Time").text($(this).data('stime'));
                    // }
                    self._explain.removeClass('hide');

                    self._Htips.addClass('hide');
                    self._tdAct = $(this);
                }
            });
            self._explain.on('click','.Honlinebtn.actived a',function(){//报名
                location.href = BASEUSER+"/franchise/applyOnlineIn/"+self._tdAct.data("sid");
                //franchiseApplyFun.apply(self._tdAct);
            });
            $("#city").change(function(){
                $("#city").attr('data-cname',$(".smgSelectText").html());
                self.setNewCalendar();
                $(".ventCityTab tbody").addClass("hide");
                $(".cityConTab_"+$("#city").val()).removeClass("hide");
            });
        };
        monthCalendar.prototype.setNewCalendar = function(){
            var year = this.year,
                month = this.month,
                nextMYear = this.year,
                nextMonth = this.month+1;
            if(nextMonth == 13) {
                nextMYear++;
                nextMonth = 1;
            }
            //更新年月
            var yearMonthText = nextMonth>9?nextMonth:'0'+nextMonth;
            this._element.find('.HcalYaer').html(year);
            this._element.find('.HcalMonth').html(yearMonthText);
            var startDate = new Date(year,month,1);
            var nextStartDate = new Date(nextMYear,nextMonth,1);
            var currentWeek = startDate.getDay();
            if(currentWeek == 0){
                currentWeek = 7;
            }
            var startTime = startDate.getTime();
            var endTime = nextStartDate.getTime();
            var weekDate = new Date(startTime-currentWeek*24*60*60*1000);//星期一
            var shtml = '';
            for(var i=0;i<6;i++){
                shtml += '<tr>';
                for(var j=0;j<7;j++){
                    var curTime = weekDate.getTime();
                    if(curTime<startTime || curTime>=endTime){
                        shtml += '<td class="ncur">'+weekDate.getDate()+'</td>';
                    }else{
                        shtml += '<td id="cellStyleLi_'+weekDate.getDate()+'"><a href=\'javascript:void(0)\'>'+weekDate.getDate()+'</a></td>';
                    }
                    weekDate = new Date(curTime+24*60*60*1000);
                }
                shtml += '</tr>';
            }
            this._element.find('tbody').html(shtml);
            this.getMonthData(year+'-'+yearMonthText);
        };
        monthCalendar.prototype.getMonthData = function(m){
            var self = this;
            var c = $("#city").val();
            $.ajax({
                type:"POST",
                global:false,
                url:BASEUSER+"/franchise/LoadJmhMsgM",
                data:{m:m,c:c},
                dataType:"JSON",
                success:function(res){
                    var data = res.items;
                    var areaArr = res.areas;
                    for(var m=0; m<data.length; m++){
                        var itemDay = self._element.find('#cellStyleLi_'+data[m]['day']);
                        itemDay.attr('data-sid',data[m]['id']);
                        itemDay.attr('data-stime',data[m]['stime']);
                        itemDay.attr('data-address',data[m]['address']);
                        itemDay.attr('data-stime',data[m]['stime']);
                        itemDay.attr('data-traffic',data[m]['traffic']);
                        itemDay.attr('data-phone',data[m]['phone']);
                        if(data[m]['status'] == 1){
                            itemDay.addClass('dateGray').attr('title','已满');
                        }else if(data[m]['status'] == 2){
                            itemDay.addClass('dateGray').attr('title','已过期');
                        }else{
                            itemDay.addClass('dateBlue').attr('title','可报名');
                        }
                    }
                    var shtml = '';
                    for(var k=0; k<areaArr.length; k++){
                        shtml += '<li><input type="checkbox" value="'+areaArr[k].name+'"><span>'+areaArr[k].name+'</span></li>';
                    }
                    $(".cityAreaSel").html(shtml);
                    self._explain.addClass('hide');
                    self._Htips.removeClass('hide');
                }
            });
        };
        return monthCalendar;
    })();
    $.fn.monthCalendar = function(options) {
        this.each(function(i, _element) { // loop each DOM element involved
            var element = $(_element);
            var mCalendar = element.data('monthCalendar'); // get the existing calendar object (if any)
            // a new calendar initialization
            if (!mCalendar) { // don't initialize twice
                mCalendar = new monthCalendar(element, options);
                element.data('monthCalendar', mCalendar);
                mCalendar.render();
            }
        });
    };
    //jay-select-function
    $.fn.smgSelect = function(options) {
        var opt = $.extend({
            fixcalcNum:0,           //修正距离最底部的偏移量 (Number)
            defText:"请选择",      //配置默认参数
            wrapClass:"",           //包裹的样式
            afselect:null           //选择东西的时候执行 callback
        },options);
        var doc = $(document);
        return this.each(function(){
            var _self;
            var smshCLS;
            var smtx;
            var smlt;
            var smlit;
            var selectText;
            var selectList;
            var inputCache;
            var val;
            var defval;

            _self = $(this);
            smshCLS = "smgSelectShow";
            smtx = ".smgSelectText";
            smlt = ".smgSelectListWrap";
            smlit = ".smgIthems";
            selectText = _self.find(smtx);
            selectList = _self.find(smlt);
            inputCache = _self.find("input");
            defval     = _self.find(".def");

            function closeSelect() {
                $(".smgSelectWrap").removeClass(smshCLS);
                $(smlt).hide(0).removeAttr('style');
                doc.unbind("click.closeSelect");
            }
            function ulposition() {
                selectList.removeClass("showup");
                var uloffsetTop = selectList.offset().top;
                if ( uloffsetTop + selectList.height()+opt.fixcalcNum > doc.height() ) {
                    selectList.addClass("showup");
                } else {
                    selectList.removeClass("showup");
                }
            }
            function toggleSelect(_self) {
                var smglist = $(smlt);
                var smglistVist = smglist.filter(function(){
                    if ($(this).is(":visible")){
                        return this;
                    }
                });
                if ( smglistVist[0] == selectList[0] ) {
                    selectList.hide(0);
                    smglistVist.parent().removeClass(smshCLS);
                } else {
                    smglistVist.hide(0);
                    smglistVist.parent().removeClass(smshCLS);
                    _self.addClass(smshCLS);
                    selectList.show(0);
                    ulposition();
                }
            }

            if (opt.defText) {
                selectText.text(opt.defText);
            }

            selectText.on("click", function(e){
                e.stopPropagation();
                doc.bind("click.closeSelect", function() {
                    closeSelect();
                });
                toggleSelect(_self);
            });
            _self.on("click", function(e) {
                e.stopPropagation();
            });
            selectList.on("click", smlit, function(e) {
                var _this = $(this);
                var _text = _this.text();
                val = _this.attr("val");
                selectText.text(_text).attr("title", _text);
                _this.addClass("act").siblings().removeClass("act");
                _self.attr("val", val);
                inputCache.val(val);
                if ( opt.afselect ) {
                    opt.afselect(val, _self);
                }
                closeSelect();
            });
            defval.trigger("click");
        });
    };
    $.fn.smgSelectReset = function(options) {
        var opt = $.extend({
            defWrap:".smgSelectWrap",
            defText:".smgSelectText",
            defLWrp:".smgSelectListWrap"
        }, options);
        $(document).trigger("click");
        return this.each(function() {
            var _self = $(this);
            _self.removeAttr("val");
            _self.find(opt.defText).text(smgDefText);
        });
    };
})(jQuery);

function buildFuc(keep){
    var keep = keep;
    function dialog(clk,show,clo){
        var docmH = $(document).height();
        $(".VenDialog").height(docmH);
        function _close(){$(keep).hide();$("#onload_cover").hide(); }
        $(clk).click(function(){ _close();  $(show).show(); });
        $(clo).click(_close);
    }
    return dialog;
}

jQuery(document).ready(function(){
    franchiseApplyFun.init();
    $("#right_row3 .btnStyleDiv2 a").click(function() {
        window.location.href=BASEUSER+"/store"
    });
    $("#right_row2 .btnStyleDiv1 a").click(function(e){
        e.preventDefault();
        //console.log("test");
        franchiseApplyFun.testing();
    });

    $("#right_row3 .btnStyleDiv2 a").click(function(e){
        familymart_tracker('familymart_button', 'store');
    });

    $("#commom_popup_close").removeAttr("onclick").attr("onclick","hideCommonPop();");

});

var franchiseApplyFun = {
    applyId:0,
    init:function(){
        $.get(BASEUSER+'/js/franchise_apply.html', function(data) {
            // var htmlStr = data.replace(/BASEUSER/g, BASEUSER);
            // $("body").append(htmlStr);
            var dialog = buildFuc('.Venture_pop, .VenDialog');
            dialog('.btnAtOnce','#box,.VenDialog','.VenClose' );
            var dialog2 = buildFuc('.Venture_pop_apply, .VenDialog');
            dialog2('.btnAtOnce2','#box_apply,.VenDialog','.VenClose' );
            $(".finance_pop .finance_pop_close").click(function(e){
                e.preventDefault();
                $(this).parent().parent().hide();
                $("#onload_cover").hide();
            });
        },'html');
    },
    testing:function(){
        familymart_tracker('familymart_ franchise_button', 'test');
        familymart_flash_tracker('familymart_franchise', '/familymart_franchise_test.html');
        $("#onload_cover").css({height:$("body").height()}).show();
        $("#finance_test_pop").css({top:$(window).scrollTop()}).show();
        $(".finance_pop .finance_pop_close").click(function(e){
            e.preventDefault();
            $(this).parent().parent().hide()
            $("#onload_cover").hide();
        });
    },
    subTest:function(){
        var a=0,b=0,c=0;
        var t1='';
        $('input[type="checkbox"][name="t1"]:checked').each(
        function() {
             t1+=$(this).val()+"|";
        });
        t1=t1.slice(0,-1)
        if(t1==''){
            showCommonPop('请选择第一题')
            return false
        }
        var t2=$('input[type="radio"][name="t2"]:checked').val();
        if(t2==''||t2==undefined){
            showCommonPop('请选择第二题')
            return false
        }
        var t3=$('input[type="radio"][name="t3"]:checked').val();
        if(t3==''||t3==undefined){
            showCommonPop('请选择第三题')
            return false
        }
        var t4=$('input[type="radio"][name="t4"]:checked').val();
        if(t4==''||t4==undefined){
            showCommonPop('请选择第四题')
            return false
        }
        var t5=$('input[type="radio"][name="t5"]:checked').val();
        if(t5==''||t5==undefined){
            showCommonPop('请选择第五题')
            return false
        }
        var t6='';
        $('input[type="checkbox"][name="t6"]:checked').each(
        function() {
             t6+=$(this).val()+"|";
        });
        t6=t6.slice(0,-1)
        if(t6==''){
            showCommonPop('请选择第六题')
            return false
        }

        if(t3=='契约主体为夫妻共同专职经营。'){
            a+=1;
            c+=1;
        }else{
            b+=2;
        }
        if(t4=='有'){
            b+=2
        }else{
            a+=1;
            c+=1;
        }
        if(t5=='60万（6万元加盟金；15万元保证金；40万元装修费）'){
            b+=2;
        }else if(t5=='30万（6万元加盟金；15万元保证金；剩余资金为开店准备）'){
            c+=2;
        }else{
            a+=2;
        }
        if(a>=b){
            if(a>=c){
                var result='a';
            }else{
                var result='c';
            }
        }else{
            if(b>=c){
                var result='b';
            }else{
                var result='c';
            }
        }


        $.ajax({
            type:"POST",
            global:false,
            url:BASEUSER+"/franchise/subTest",
            data:{"t1":t1,"t2":t2,"t3":t3,"t4":t4,"t5":t5,"t6":t6},
            dataType:"JSON",
            success:function(data){
                //closeAlert('#finance_test_pop');
                //$('#finance_test_pop').hide();
                $(".VenClose").trigger('click');
                $("#finance_test_pop_"+result).css({top:$(window).scrollTop()}).show();

                //$("#onload_cover").show();
                //alertMsg("#finance_test_pop_"+result);

                if(result == "a"){
                    familymart_flash_tracker('familymart_franchise', '/familymart_franchise_testresultA.html')
                }else if(result == "b"){
                    familymart_flash_tracker('familymart_franchise','/familymart_franchise_testresultB.html');
                }else if(result == "c"){
                    familymart_flash_tracker('familymart_franchise_home', '/familymart_franchise_testresultC.html')
                }
            }

        });


    },
    apply:function(obj){
        franchiseApplyFun.applyId = obj.data("sid");
        $("#apply_city").val($("#city").attr("data-cname"));
        $("#apply_month").val(obj.data("stime"));
        $(".addressInfo .txt_traffic").eq(0).html(obj.data("address"));
        $(".addressInfo .txt_traffic").eq(1).html(obj.data("traffic"));
        $(".addressInfo .txt_traffic").eq(2).html(obj.data("phone"));
        $("#box_apply,.VenDialog").show();
    },
    selectApplyCity:function(val){
        $.ajax({
            type:"POST",
            global:false,
            url:BASEUSER+"/franchise/LoadJmhMsgForApply",
            data:{c:val},
            dataType:"JSON",
            success:function(data){

                //var applyAreaOption = '';
                var applyMonthOption = '';
                var applyAreaAll = '<ul>最希望合作经营地区:</ul>';
                /*
                for(var i=0;i<data.area.length;i++){
                    applyAreaOption += '<option value="'+data.area[i].id+'">'+data.area[i].aname+'</option>'
                }
                */
                for(var i=0;i<data.month.length;i++){
                    applyMonthOption += '<option tag="'+data.month[i].id+'"  value="'+data.month[i].sdate+'">'+data.month[i].month+':00</option>'
                }

                for(var i=0;i<data.areaAll.length;i++){
                    if(i==0){
                        applyAreaAll += '<ul style="padding-left:130px">';
                    }
                    applyAreaAll += '<li style="float:left;padding-left:20px;padding-top:10px"><input type="checkbox" value="'+data.areaAll[i].name+'"><span class="ctiyword">'+data.areaAll[i].name+'</span></li>';
                    if(i!=0&&i%4==0&&i!=data.areaAll.length-1){
                        applyAreaAll += '<br class="clearfix" />';
                        applyAreaAll += '</ul>';
                        applyAreaAll += '<ul style="padding-left:130px">';
                    }else if(i==data.areaAll.length-1){
                        applyAreaAll += '<br class="clearfix" />';
                        applyAreaAll += '</ul>';
                    }
                }

                //$("#apply_area").html(applyAreaOption);
                $(".part04").html(applyAreaAll);
                $("#apply_month").html(applyMonthOption);
                $("#apply_address").text(data.address);
                $("#apply_traffic").text(data.traffic);
                $("#apply_phone").text(data.phone);
                franchiseApplyFun.applyId = data.id;
            }
        });
    },
    selectApplyArea:function(val){
        var c = $("#apply_city").val();;
        $.ajax({
            type:"POST",
            global:false,
            url:BASEUSER+"/franchise/LoadJmhMsgForApply",
            data:{c:c,a:val},
            dataType:"JSON",
            success:function(data){

                var applyMonthOption = '';
                for(var i=0;i<data.month.length;i++){
                    applyMonthOption += '<option tag="'+data.month[i].id+'" value="'+data.month[i].sdate+'">'+data.month[i].month+':00</option>'
                }
                $("#apply_month").html(applyMonthOption);
                $("#apply_address").text(data.address);
                $("#apply_traffic").text(data.traffic);
                $("#apply_phone").text(data.phone);
                franchiseApplyFun.applyId = data.id;
            }
        });
    },
    selectApplyMonth:function(val,tag){
        franchiseApplyFun.applyId =$("#apply_month option[value='"+val+"']").attr('tag');
    },
    submit:function(){
        var formData = {
            name:$("#applyName").val(),
            marray:$("input[name='applyMarry']:checked").val(),
            age:$("#applyAge").val(),
            num:$("#applyNum").val(),
            further:$("#applyFurther").val(),
            hopeArea:'',
            phone:$("#phone").val(),
            email:$("#email").val(),
            address:$("#address").val(),
            applyId:$("#applyId").val()
        };
        $(".cityAreaSel input:checked").each(function(index, val) {
            formData.hopeArea += $(this).val()+',';
        });

        var phoneRex =/^1[3|4|5|6|7|8|9][0-9]{9}$/;
        var emailReg = /([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?/i;


        if(!franchiseApplyFun.checkValFun(formData.name,'请填写姓名'))return false;
        if(!franchiseApplyFun.checkValFun(formData.marray,'请选择婚姻状况'))return false;
        if(!franchiseApplyFun.checkValFun(formData.age,'请填写年龄'))return false;
        if(!franchiseApplyFun.checkValFun(formData.num,'请选择参加人数'))return false;
        if(!phoneRex.test(formData.phone)){
            showCommonPop("手机号码格式错误")
            return false;
        }
        if(!emailReg.test(formData.email)){
            showCommonPop("email格式错误")
            return false;
        }

        //if(!franchiseApplyFun.checkValFun(formData.address,'请填写居住地区'))return false;

        $.ajax({
            type:"POST",
            global:false,
            url:BASEUSER+"/franchise/apply",
            data:formData,
            dataType:"JSON",
            success:function(data){
                if(data.code==1){
                    showCommonPop("报名成功");
                    closeAlert('#popMeeting');
                    //$(".VenClose").trigger('click');
                    setTimeout(function(){
                        window.history.go(-1);
                    },2000);

                }else{
                    showCommonPop(data.msg);
                }
            }
        });

    },
    checkValFun:function(val,msg){
        if(!val){
            // alert(msg);
            showCommonPop(msg);
            return false;
        }
        return true;
    }
}
