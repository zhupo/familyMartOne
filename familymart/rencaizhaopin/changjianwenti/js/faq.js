$(function(){
	FAQfunction.rowTopChange();
	FAQfunction.loadCityData("<?php echo $_SESSION['city']; ?>");
	FAQfunction.chooseSelect(str);
	$("#questionType1").trigger("change");

	//$("#commom_popup_close").removeAttr("onclick").attr("onclick","hideCommonPop2();");
})

function alertMsg(obj){
	$("#commom_popup_close").removeAttr("onclick").attr("onclick","hideCommonPop2();");
    var obj=$(obj);
    var ch=parseInt(document.documentElement.scrollHeight);
    var oh = parseInt(obj.height());
    var bch ;
    // if(isSafari||isChrome){
    //     bch = parseInt(document.body.scrollTop);
    // }else{
    //     bch = parseInt(document.documentElement.scrollTop);
    // }
    bch = parseInt($(window).scrollTop());
    var cch= parseInt(document.documentElement.clientHeight);
    var w=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(obj.width())/2);
    var h = (bch+(cch/2)-(oh/2));

    $("select").hide();
    $('#boardWrapper select').show();
    $('#onload_cover').css('height', ch).show();    
    // obj.css({top: h+'px',left:w+'px'}).fadeIn('slow');
    obj.css({top: h+'px'}).fadeIn('slow');

    // $(window).scroll( function(){ 
    //     if(obj.css('display')!='block'){
    //         return false;
    //     }else if(obj.css('display')=='block'){
    //         var bch2 ;
    //         if(isSafari||isChrome){
    //             bch2 = parseInt(document.body.scrollTop);
    //         }else{
    //             bch2 = parseInt(document.documentElement.scrollTop);
    //         }

    //         var newh = (bch2+(cch/2)-(oh/2));
    //         obj.css({top: newh+'px'});
            
    //     }
    // });
    return false;
}
function alertMsg10(obj){
    var obj=$(obj);
    var ch=parseInt(document.documentElement.scrollHeight);
    var oh = parseInt(obj.height());
    var bch ;

    bch = parseInt($(window).scrollTop());
    var cch= parseInt(document.documentElement.clientHeight);
    var w=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(obj.width())/2);
    var h = (bch+(cch/2)-(oh/2));


    $('#onload_cover1').css('height', ch).show();    
    obj.css({top: h+'px'}).fadeIn('slow');

    return false;
}

var FAQfunction = {
	chooseSelectBegin:1,
	rowTopChange:function(){
		$('.rowTop').each(function(i){
			$(this).click(function(){
				if($('.rowTop').eq(i).next('.contentMarkId').css('display')=='block'){
					$('.rowTop').eq(i).removeClass('actived').next('.contentMarkId').slideUp();
				}else{
					$('.rowTop').eq(i).addClass('actived').next('.contentMarkId').slideDown();
				}
			})
		})
	},
	chooseSelect:function(str){
		FAQfunction.loadCityData(str)
		if(str == "顾客服务"){
			$("#type2Show").hide();
			$("#qynameShow").hide();
			$("#storeShow").show();
			$("#timeShow").show();
			$("#type1Show").show();
			$("#type3Show").hide();
			$("#type3Show2").hide();
		}else if(str == "加盟合作"){
			$("#storeShow").hide();
			$("#timeShow").hide();
			$("#type1Show").hide();
			$("#type2Show").hide();
			$("#qynameShow").hide();
			$("#qynameShow").hide();
			$("#type3Show").show();
			$("#type3Show2").show();
		}else if(str == "人事招募"){
			$("#storeShow").hide();
			$("#timeShow").hide();
			$("#type1Show").hide();
			$("#type2Show").hide();
			$("#qynameShow").hide();
			$("#type3Show").show();
			$("#type3Show2").show();
		}else if(str == "商业提案"){
			$("#storeShow").hide();
			$("#timeShow").hide();
			$("#type1Show").hide();
			$("#type2Show").show();
			$("#qynameShow").show();
			$("#type3Show").show();
			$("#type3Show2").show();
		}else if(str == "IT咨询"){
			$("#storeShow").hide();
			$("#timeShow").hide();
			$("#qynameShow").hide();
			$("#type1Show").hide();
			$("#type2Show").hide();
			$("#type3Show").show();
			$("#type3Show2").show();
		}else if(str == "其他"){
			$("#storeShow").hide();
			$("#timeShow").hide();
			$("#qynameShow").hide();
			$("#type1Show").hide();
			$("#type2Show").hide();
			$("#type3Show").show();
			$("#type3Show2").show();
		}
	},
	submitTyp:function(){
		if($("#questionType1").val()=='顾客服务'){
			var city=$("#questionTypeCity").find("option:selected").text();
		}else{
			var city=$("#questionType4").val();
		}
		var formData = {
			type1:$("#questionType1").val(),
			type2:$("#questionType2").val(),
			type3:$("#questionType3").val(),
			title:$("#questionTypeSubject").val(),
			qyname:$("#questionQyname").val(),
			name:$("#questionUsername").val(),
			phone:$("#questionPhone").val(),
			email:$("#questionEmail").val(),
			city:city,
			area:$("#questionTypeArea").find("option:selected").text(),
			areanew:$("#areanew").find("option:selected").text(),
			street:$("#questionTypeStreet").val(),
			date:$("#questionTypeDate").val(),
			// year:$("#questionTypeYear").val(),
			// month:$("#questionTypeMonth").val(),
			// day:$("#questionTypeDay").val(),
			// time:$("#questionTypeTime").val(),
			content:$("#questionTypeContent").val()
		};
		
		if(!FAQfunction.checkValFun(formData.title,'请填写主题'))return false;
		if(!FAQfunction.checkValFun(formData.name,'请填写姓名'))return false;
		var phoneRex =/^1[3|4|5|6|7|8|9][0-9]{9}$/;
		var emailReg = /([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?/i;
		if(!phoneRex.test(formData.phone)){
			showCommonPop("手机号码格式错误")
			return false;
		}
		if(formData.type1 != '顾客服务' && !emailReg.test(formData.email)){
			showCommonPop("email格式错误")
			return false;
		}
		if(!FAQfunction.checkValFun(formData.city,'请选择城市'))return false;
		if(formData.type1=='顾客服务'){	
			if(!FAQfunction.checkValFun(formData.area,'请选择区域'))return false;
			if(!FAQfunction.checkValFun(formData.street,'请选择地址'))return false;
			if(!FAQfunction.checkValFun(formData.date,'请选择日期'))return false;
			// if(!FAQfunction.checkValFun(formData.year,'请选择年份'))return false;
			// if(!FAQfunction.checkValFun(formData.month,'请选择月份'))return false;
			// if(!FAQfunction.checkValFun(formData.day,'请选择日期'))return false;
			// if(!FAQfunction.checkValFun(formData.time,'请选择时间'))return false;
		}
		if(!FAQfunction.checkValFun(formData.content,'请填写内容'))return false;
		$("#faqsubmit").html('<ul class="paddingTB2 paddingLS11" style="cursor:pointer"><img src="'+BASEUSER+'/images/boardbtn.jpg"></ul>');
		$("#faqsubmsg").css("display","block");
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/saveClient",
			global:false,
			data:formData,
			dataType:"json",
			success:function(data){
				if(data.code==1){
					$('#boardWrapper').hide();
					showCommonPop("您的问题已经提交，请等待回复");
					$("#commom_popup_close").removeAttr("onclick").attr("onclick","hideCommonPop();");
					FAQfunction.faqtableClear();
					FAQfunction.sendEmailToUser(data.msg);
					if(data.omspAry != undefined){
						// console.log(data.omspAry);
						FAQfunction.submitOmsp(data.omspAry);
					}
				}else{
					showCommonPop(data.msg);
				}
				$("#faqsubmit").html('<ul class="paddingTB2 paddingLS11" onclick="FAQfunction.submitTyp()" style="cursor:pointer"><img src="'+BASEUSER+'/images/boardbtn.jpg"></ul>');
				$("#faqsubmsg").css("display","none");
			}
		});
	},
	submitOmsp:function(omspAry){
		$.ajax({
			type:"GET",
			url:"http://www.parramountain.com:8066/omsp_family/customer/addFeedback.html",
			global:false,
			data:omspAry,
			dataType:"jsonp",
			success:function(data){
				
			}
		}).done(function(msg){
			var res = "失败";
			if(msg.result == "添加成功"){
				res = "成功";
			}
			FAQfunction.recordOmspLog(omspAry,res);
		}).fail(function(jqXHR, textStatus) {
			FAQfunction.recordOmspLog(omspAry,textStatus);
		});
	},
	recordOmspLog:function(omspAry,status){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/recordOmspLog",
			global:false,
			data:{"omspAry":omspAry,"status":status},
			success:function(data){
			}
		});
	},
	sendEmailToUser:function(id){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/sendMailToUser",
			global:false,
			data:{"id":id},
			success:function(data){
			}
		});
	},
	faqtableClear:function(){
		$("#questionType1").val('顾客服务')
		FAQfunction.chooseSelect('顾客服务')
		$("#questionTypeSubject").val('')
		$("#questionUsername").val('')
		$("#questionPhone").val('')
		$("#questionEmail").val('')
		$("#questionTypeCity").val('')
		FAQfunction.loadAreaData('')
		$("#questionTypeYear").val('')
		FAQfunction.selectYear('')
		$("#questionTypeContent").val('')
	},
	loadCityData:function(type = '顾客服务'){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/getCityData",
			global:false,
			data:"",
			dataType:"json",
			success:function(data){
				var option = '<option value="">选择城市</option>';
				var option2 ='';
				for(var i=0;i<data.length;i++){
					if ((data[i].name == '东莞' || data[i].name == '嘉兴') && type == '加盟合作') {
						continue;
					}
					option += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
					var str = '';
					if(data[i].id == $('#citySeltet').find('option:selected').val()){
                        str = 'selected="selected"';
					}
					option2 += '<option value="'+data[i].name+'"' + str + '>'+data[i].name+'</option>';
				}
				$("#questionTypeCity").html(option);
				$("#questionType4").html(option2);
			}
		});
	},
	loadAreaData:function(cid){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/getAreaData",
			global:false,
			data:{"cid":cid},
			dataType:"json",
			success:function(data){
				var option = '<option value="">选择区域</option>';
				for(var i=0;i<data.length;i++){
					option += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
				}
				$("#questionTypeArea").html(option);
			}
		});
	},
	loadAreaData2:function(cid){
		if (cid == "上海") {
			cid = 1;
		} else if (cid == "北京") {
			cid = 11;
		} else if (cid == "苏州") {
			cid = 2;
		} else if (cid == "嘉兴") {
			cid = 13;
		} else if (cid == "无锡") {
			cid = 10;
		} else if (cid == "杭州") {
			cid = 5;
		} else if (cid == "广州") {
			cid = 4;
		} else if (cid == "深圳") {
			cid = 3;
		} else if (cid == "东莞") {
			cid = 12;
		} else if (cid == "成都") {
			cid = 6;
		}
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/getAreaData",
			global:false,
			data:{"cid":cid},
			dataType:"json",
			success:function(data){
				var option = '';
				for(var i=0;i<data.length;i++){
					option += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
				}
				$("#areanew").html(option);
			}
		});
	},
	loadStreetData:function(aid){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/getStreetData",
			global:false,
			data:{"aid":aid},
			dataType:"json",
			success:function(data){
				var option = '<option value="">选择地址</option>';
				for(var i=0;i<data.length;i++){
					option += '<option value="'+data[i].name+'">'+data[i].name+'</option>';
				}
				$("#questionTypeStreet").html(option);
			}
		});
	},
	selectYear:function(year){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/getMonth",
			global:false,
			data:{"year":year},
			dataType:"json",
			success:function(data){
				var option = '<option value="">选择月份</option>';
				for(var i=0;i<data.length;i++){
					option += '<option value="'+data[i]+'">'+data[i]+'</option>';
				}
				$("#questionTypeMonth").html(option);
			}
		});
	},
	selectMonth:function(month){
		var year = $("#questionTypeYear").val();
		$.ajax({
			type:"POST",
			url:BASEUSER+"/faq/getDay",
			global:false,
			data:{"year":year,"month":month},
			dataType:"json",
			success:function(data){
				var option = '<option value="">选择月份</option>';
				for(var i=0;i<data.length;i++){
					option += '<option value="'+data[i]+'">'+data[i]+'</option>';
				}
				$("#questionTypeDay").html(option);
			}
		});
	},
	checkValFun:function(val,msg){
		if(!val){
			showCommonPop(msg);
			return false;
		}
		return true;
	}

}