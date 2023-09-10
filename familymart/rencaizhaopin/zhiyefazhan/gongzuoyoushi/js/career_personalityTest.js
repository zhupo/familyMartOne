$(document).ready(function() {
	career_dpersonalityTest.init();
});
var career_dpersonalityTest = {
	q:[
		[
			{"title":"1、你更喜欢吃那种水果？"},
			{"num":"A","name":"草莓","score":2},
			{"num":"B","name":"苹果","score":3},
			{"num":"C","name":"西瓜","score":5},
			{"num":"D","name":"菠萝","score":10},
			{"num":"E","name":"橘子","score":15}
		],
		[
			{"title":"2、你平时休闲经常去的地方？"},
			{"num":"A","name":"郊外","score":2},
			{"num":"B","name":"电影院","score":3},
			{"num":"C","name":"公园","score":5},
			{"num":"D","name":"商场","score":10},
			{"num":"E","name":"酒吧","score":15},
			{"num":"F","name":"练歌房","score":20}
		],
		[
			{"title":"3、你认为容易吸引你的人是？"},
			{"num":"A","name":"有才气的人","score":2},
			{"num":"B","name":"依赖你的人","score":3},
			{"num":"C","name":"优雅的人","score":5},
			{"num":"D","name":"善良的人","score":10},
			{"num":"E","name":"性情豪放的人","score":15}
		],
		[
			{"title":"4、如果你可以成为一种动物，你希望自己是哪种？"},
			{"num":"A","name":"猫","score":2},
			{"num":"B","name":"马","score":3},
			{"num":"C","name":"大象","score":5},
			{"num":"D","name":"猴子","score":10},
			{"num":"E","name":"狗","score":15},
			{"num":"F","name":"狮子","score":20}
		],
		[
			{"title":"5、天气很热，你更愿意选择什么方式解暑？"},
			{"num":"A","name":"游泳","score":5},
			{"num":"B","name":"喝冷饮","score":10},
			{"num":"C","name":"开空调","score":15}
		],
		[
			{"title":"6、如果必须与一个你讨厌的动物或昆虫在一起生活，你能容忍哪一个？"},
			{"num":"A","name":"蛇","score":2},
			{"num":"B","name":"猪","score":5},
			{"num":"C","name":"老鼠","score":10},
			{"num":"D","name":"苍蝇","score":15}
		],
		[
			{"title":"7、你喜欢看哪类电影、电视剧？"},
			{"num":"A","name":"童话神话类","score":2},
			{"num":"B","name":"悬疑推理类","score":3},
			{"num":"C","name":"自然科学类","score":4},
			{"num":"D","name":"伦理道德类","score":15},
			{"num":"E","name":"战争枪战类","score":0}
		],
		[
			{"title":"8、以下哪个是你身边必带的物品？"},
			{"num":"A","name":"打火机","score":2},
			{"num":"B","name":"口红","score":2},
			{"num":"C","name":"记事本","score":3},
			{"num":"D","name":"纸巾","score":5},
			{"num":"E","name":"手机","score":10}
		],
		[
			{"title":"9、你出行时喜欢坐什么交通工具？"},
			{"num":"A","name":"火车","score":2},
			{"num":"B","name":"自行车","score":3},
			{"num":"C","name":"汽车","score":4},
			{"num":"D","name":"飞机","score":10},
			{"num":"E","name":"步行","score":15}
		],
		[
			{"title":"10、以下颜色你更喜欢哪种？"},
			{"num":"A","name":"紫","score":2},
			{"num":"B","name":"黑","score":3},
			{"num":"C","name":"蓝","score":5},
			{"num":"D","name":"白","score":8},
			{"num":"E","name":"黄","score":12},
			{"num":"F","name":"红","score":15}
		],
		[
			{"title":"11、下列运动中挑选一个你最喜欢的（不一定擅长）？"},
			{"num":"A","name":"瑜珈","score":2},
			{"num":"B","name":"自行车","score":3},
			{"num":"C","name":"乒乓球","score":4},
			{"num":"D","name":"拳击","score":8},
			{"num":"E","name":"足球","score":10},
			{"num":"F","name":"蹦极","score":15}
		],
		[
			{"title":"12、如果你拥有一座别墅，你认为它应当建立在哪里？"},
			{"num":"A","name":"湖边","score":2},
			{"num":"B","name":"草原","score":3},
			{"num":"C","name":"海边","score":5},
			{"num":"D","name":"森林","score":10},
			{"num":"E","name":"城中区","score":15}
		],
		[
			{"title":"13、你更喜欢以下哪种天气现象？"},
			{"num":"A","name":"雪","score":2},
			{"num":"B","name":"风","score":3},
			{"num":"C","name":"云","score":5},
			{"num":"D","name":"雾","score":10},
			{"num":"E","name":"雷电","score":15}
		],
		[
			{"title":"14、你希望自己的窗口在一座30层大楼的第几层？"},
			{"num":"A","name":"七层","score":2},
			{"num":"B","name":"一层","score":3},
			{"num":"C","name":"二十三层","score":5},
			{"num":"D","name":"十八层","score":10},
			{"num":"E","name":"三十层","score":15}
		],
		[
			{"title":"15、你认为自己更喜欢在以下哪一个城市中生活？"},
			{"num":"A","name":"丽江","score":1},
			{"num":"B","name":"拉萨","score":3},
			{"num":"C","name":"昆明","score":5},
			{"num":"D","name":"西安","score":8},
			{"num":"E","name":"杭州","score":10},
			{"num":"F","name":"北京","score":15}
		],
	],
	r:{
		A:{"count":"40分以下","discription":"散漫，爱玩，富于幻想。聪明机灵，待人热情，爱交朋友，但对朋友没有严格的选择标准。事业心较差，更善于享受生活，意志力和耐心都较差，我行我素。有较好的异性缘，但对爱情不够坚持认真，容易妥协。没有财产观念。"},
		B:{"count":"40分至69分：","discription":" 性情温良，重友谊，性格塌实稳重，但有时也比较狡黠。事业心一般，对本职工作能认真对待，但对自己专业以外事物没有太大兴趣，喜欢有规律的工作和生活，不喜欢冒险，家庭观念强，比较善于理财。"},
		C:{"count":"70分至99分：","discription":"好奇心强，喜欢冒险，人缘较好。事业心一般，对待工作，随遇而安，善于妥协。善于发现有趣的事情，但耐心较差，敢于冒险，但有时较胆小。渴望浪漫的爱情，但对婚姻的要求比较现实。不善理财。"},
		D:{"count":"100分至139分：","discription":"爱幻想，思维较感性，以是否与自己投缘为标准来选择朋友。性格显得较孤傲，有时较急噪，有时优柔寡断。事业心较强，喜欢有创造性的工作，不喜欢按常规办事。性格倔强，言语犀利，不善于妥协。崇尚浪漫的爱情，但想法往往不切合实际。金钱欲望一般。"},
		E:{"count":"140分至179分：","discription":"聪明，性格活泼，人缘好，善于交朋友，心机较深。事业心强，渴望成功。思维较理性，崇尚爱情，但当爱情与婚姻发生冲突时会选择有利于自己的婚姻。金钱欲望强烈。"},
		F:{"count":"180分以上：","discription":"意志力强，头脑冷静，有较强的领导欲，事业心强，不达目的不罢休。外表和善，内心自傲，对有利于自己的人际关系比较看重，有时显得性格急噪，咄咄逼人，得理不饶人，不利于自己时顽强抗争，不轻易认输。思维理性，对爱情和婚姻的看法很现实，对金钱的欲望一般。"}
	},
	countScore:0,
	biginQid:1,
	result:{},
	init:function(){
		career_dpersonalityTest.interQ(0);
	},
	next:function(){
		if(!career_dpersonalityTest.result[career_dpersonalityTest.biginQid]){
			alert("请选择答案！");
			return false;
		}
		career_dpersonalityTest.interQ(career_dpersonalityTest.biginQid);
		career_dpersonalityTest.countScore += career_dpersonalityTest.q[career_dpersonalityTest.biginQid-1][career_dpersonalityTest.result[career_dpersonalityTest.biginQid]]['score'];
		career_dpersonalityTest.biginQid += 1;
	},
	pre:function(){
		career_dpersonalityTest.interQ(career_dpersonalityTest.biginQid-2);
		$('.H252 img').eq(career_dpersonalityTest.result[career_dpersonalityTest.biginQid-1]-1).attr({src:BASEUSER+'/images/career_personalityTest_checkedIcon01.png'});
		career_dpersonalityTest.countScore -= career_dpersonalityTest.q[career_dpersonalityTest.biginQid-2][career_dpersonalityTest.result[career_dpersonalityTest.biginQid-1]]['score'];
		career_dpersonalityTest.biginQid -= 1;

	},
	submit:function(){
		if(!career_dpersonalityTest.result[career_dpersonalityTest.biginQid]){
			alert("请选择答案！");
			return false;
		}
		//career_dpersonalityTest.interQ(career_dpersonalityTest.biginQid);
		career_dpersonalityTest.countScore += career_dpersonalityTest.q[career_dpersonalityTest.biginQid-1][career_dpersonalityTest.result[career_dpersonalityTest.biginQid]]['score'];
		//career_dpersonalityTest.biginQid += 1;
		
		var htmlStr = '';
		if(career_dpersonalityTest.countScore<40){
			htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.r.A.count+'</li>';
			htmlStr += '<li class="liQuestion">'+career_dpersonalityTest.r.A.discription+'</li>';
		}else if(career_dpersonalityTest.countScore>=40 && career_dpersonalityTest.countScore<69){
			htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.r.B.count+'</li>';
			htmlStr += '<li class="liQuestion">'+career_dpersonalityTest.r.B.discription+'</li>';
		}else if(career_dpersonalityTest.countScore>=70 && career_dpersonalityTest.countScore<99){
			htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.r.C.count+'</li>';
			htmlStr += '<li class="liQuestion">'+career_dpersonalityTest.r.C.discription+'</li>';
		}else if(career_dpersonalityTest.countScore>=100 && career_dpersonalityTest.countScore<139){
			htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.r.D.count+'</li>';
			htmlStr += '<li class="liQuestion">'+career_dpersonalityTest.r.D.discription+'</li>';
		}else if(career_dpersonalityTest.countScore>=140 && career_dpersonalityTest.countScore<179){
			htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.r.E.count+'</li>';
			htmlStr += '<li class="liQuestion">'+career_dpersonalityTest.r.E.discription+'</li>';
		}else if(career_dpersonalityTest.countScore>=180){
			htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.r.F.count+'</li>';
			htmlStr += '<li class="liQuestion">'+career_dpersonalityTest.r.F.discription+'</li>';
		}

		if(career_dpersonalityTest.countScore<40){
			familymart_flash_tracker('familymart_career', '/familymart_career_xinggetestresultA.html');
		}else if(career_dpersonalityTest.countScore>=40 && career_dpersonalityTest.countScore<99 ){
			familymart_flash_tracker('familymart_career', '/familymart_career_xinggetestresultB.html');
		}else if(career_dpersonalityTest.countScore>=100 && career_dpersonalityTest.countScore<179){
			familymart_flash_tracker('familymart_career', '/familymart_career_xinggetestresultC.html');
		}else if(career_dpersonalityTest.countScore>=180){
			familymart_flash_tracker('familymart_career', '/familymart_career_xinggetestresultD.html');
		}


		$(".li_05").text("性格测试结果");
		$(".H252").html(htmlStr);
		$("#nextBut").hide();
		career_dpersonalityTest.saveRs();
	},
	interQ:function(num){
		if(num>0)
			$("#preBut").show();
		if(num>=14){
			$("#preBut").hide();
			$("#nextBut").attr({src:BASEUSER+'/images/career_personalityTest_submitBtn.png',onclick:"career_dpersonalityTest.submit()"});
		}
		var htmlStr = '';
		for(var i=0;i<career_dpersonalityTest.q[num].length;i++){
			if(i==0){
				htmlStr += '<li class="liTitle1">'+career_dpersonalityTest.q[num][i]['title']+'</li>';
			}else{
				htmlStr += '<li class="liQuestion"><img src="'+BASEUSER+'/images/career_personalityTest_checkedIcon02.png"><span class="textPositionRel1">'+career_dpersonalityTest.q[num][i]['num']+'<span class="paddingL8">'+career_dpersonalityTest.q[num][i]['name']+'</span></span></li>';
			}
		}
		$(".H252").html(htmlStr);
		$('.H252 img').each(function(i){
			$(this).click(function(){
				$('.H252 img').attr({
					src: BASEUSER+'/images/career_personalityTest_checkedIcon02.png'
				});
				$(this).attr({
					src: BASEUSER+'/images/career_personalityTest_checkedIcon01.png'
				});
				career_dpersonalityTest.result[career_dpersonalityTest.biginQid] = i+1;
			})
		})
	},
	saveRs:function(){
		$.ajax({
			type:"POST",
			url:BASEUSER+"/career/saveTestRs",
			global:false,
			data:{score:career_dpersonalityTest.countScore,rs:career_dpersonalityTest.result},
			dataType:"json",
			success:function(data){
				
			}
		});
	}
}

$.get(BASEUSER+'/js/career_personalityTest.json', function(data) {
	var htmlStr = data.replace(/BASEUSER/g, BASEUSER);
	$("body").append(htmlStr);
	
	career_dpersonalityTest.init();
},'html');