//封装了许多功能。只需要调用内部的方法，使用美元啊符号定义jq，selecter为选择器
//JS入口,等价 window.onload
//纪录当前页面
var nowpage=0;
var count=0;
$(document).ready(function () {
	//获取屏幕的宽高 
	var width = window.innerWidth;
	var height = window.innerHeight;
	//计算最外层 div 的宽和高
	$(".content").width(width);
	$(".content").height(height*4);
	
	//计算page的宽高
	$(".page").width(width);
	$(".page").height(height);
	
	//触控监听swipe//事件,方向,距离,时间,点击触控点
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			//确定滑动方向.向上滑页面加一，向下滑页面减一
			if(direction=="up"){
				nowpage=nowpage+1;
			}
			else if(direction=="down"){
				nowpage=nowpage-1;
			}
			if(nowpage<0){
				nowpage=0;
			}
			if(nowpage>3){
				nowpage=3;
			}
			//移动content盒子的动画
			$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:CDUT()});
		}
	});
	//监听外面第一页动画 楼房淡入
	$(".page1-building").fadeIn(2000,function(){
		//小人变大
		$(".page1-avatar").animate({width:"70%"},{duration:2000});
	});
	
});
function CDUT(){
	//第二页动画
	if(nowpage==1){
		$(".page2-bg").fadeIn(2000,function(){
			$(".page2-farm").fadeIn(1000,function(){
			    $(".page2-it").fadeIn(2000);
			});
		});
	}
	if(nowpage==2){
		if(count==0){
		$(".page3-title").fadeIn(1000,function(){
			$(".page3-bustitle").fadeIn(1000);
		});
		count=1;
		}
		$(".page3-bus").animate({left:"-100%"},{duration:2000});
		$(".page3-avatar").animate({right:"50%"},{duration:3000,complete:function(){
			$(".page3-station,.page3-avatar,.page3-title,.page3-bustitle").fadeOut("slow",function(){
				$(".page3-wall").fadeIn(1000,function(){
					$(".page3-teamavatar").fadeIn(2000,function(){
						$(".page3-space").animate({width:"30%"},{duration:1000,complete:function(){
							$(".page3-where").animate({width:"40%"},{duration:1000});
						}});
					});
				});
			});
		}});
	}
}
//实现灯的点击事件
function start(img){
	img.src="images/lightOn.png";
	$(".page4-bg,.page4-title,.page4-guide").fadeOut("slow",function(){
		$(".page4-onbg").fadeIn(1000,function(){
			$(".page4-you").fadeIn(1000);
		});
	});
}
//实现音乐图表点击
function playpause(obj){
	//获取音乐
	var player = document.getElementById("musicplayer");
	//判断音乐状态
	if(player.paused){
		player.play();
		obj.src="images/musicBtn.png";
	}else{
		player.pause();
		obj.src="images/musicBtnOff.png";
	}
}
