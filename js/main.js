$(function(){
	//nav
	$(".nav>ul>li").hover(
		function(){
			$(".nav>ul").addClass("over");
		},
		function(){
			$(".nav>ul").removeClass("over");
		}
	);
	$(".nav > ul > li").focusin(function(){
		$(this).addClass("over");
	});
	$(".nav > ul > li").focusout(function(){
		$(this).removeClass("over");
	});
	$(".nav>ul>li:first-child").find("a").focusin(function(){
		$(".nav>ul").addClass("over");
	});
	$(".nav>ul>li:last-child").find("li").find("a").focusout(function(){
		$(".nav>ul").removeClass("over");
	});
	var snsIcon1=new Array();
	snsIcon1[0]='images/facebook_over.png';
	snsIcon1[1]='images/instagram_over.png';
	snsIcon1[2]='images/youtube_over.png';
	var snsIcon2=new Array();
	snsIcon2[0]='images/facebook.png';
	snsIcon2[1]='images/instagram.png';
	snsIcon2[2]='images/youtube.png';
	var snsN=0;
	$(".social li").hover(
		function(){
			snsN=$(this).index();
			$(this).find("img").attr({"src":snsIcon1[snsN]});
		},
		function(){
			$(this).find("img").attr({"src":snsIcon2[snsN]});
		}
	);
	$(".social li a").focusin(function(){
		snsN=$(this).parent().index();
		$(this).find("img").attr({"src":snsIcon1[snsN]});
	});
	$(".social li a").focusout(function(){
		snsN=$(this).parent().index();
		$(this).find("img").attr({"src":snsIcon2[snsN]});
	});
	$(".sns li").hover(
		function(){
			snsN=$(this).index();
			$(this).find("img").attr({"src":snsIcon1[snsN]});
		},
		function(){
			$(this).find("img").attr({"src":snsIcon2[snsN]});
		}
	);
	$(".sns li a").focusin(function(){
		snsN=$(this).parent().index();
		$(this).find("img").attr({"src":snsIcon1[snsN]});
	});
	$(".sns li a").focusout(function(){
		snsN=$(this).parent().index();
		$(this).find("img").attr({"src":snsIcon2[snsN]});
	});
	
	//keyvisul
	var w;
	var total=4;
	var amount=0;
	var distance=0;
	
	$(window).resize(function(){
		w=$(window).width();
		if(w>1200){
			distance=w;
		}
		else{
			distance=1200;
		}
		$(".hero .gallery").css({width:distance*total});
	});
	$(window).trigger("resize");
		$(".direction_nav .left").click(function(e){ // 오른쪽으로 이동
		e.preventDefault();

		if($(".gallery").is(":animated")){
			return false;
		}

		$(".gallery").prepend($(".gallery li").last());
		amount-=distance;
		$(".gallery").css({left:amount});
		

		amount+=distance;
		$(".gallery").animate({left:amount}, 500);
	});
	$(".direction_nav .right").click(function(e){ // 왼쪽으로 이동
		e.preventDefault();

		if($(".gallery").is(":animated")){
			return false;
		}

		amount-=distance;
		$(".gallery").animate({left:amount}, 500, function(){
			$(this).append($(".gallery li").first());
			amount+=distance;
			$(this).css({left : amount});
		});
	});
	
	var video1=document.getElementById("fab_video");
	video1.muted=true;
	$(".fab").hover(
		function(){
			video1.play();
		},
		function(){
			video1.pause();
		}
	);
	$(".fab").focusin(function(){
		video1.play();
	});
	$(".fab").focusout(function(){
		video1.pause();
	});
	video1.addEventListener("ended",function(){
			video.currentTime[0];
			video1.play();
	});
	var video2=document.getElementById("spark_video");
	video2.muted=true;
	$(".spark").hover(
		function(){
			video2.play();
		},
		function(){
			video2.pause();
		}
	);
	$(".spark").focusin(function(){
		video2.play();
	});
	$(".spark").focusout(function(){
		video2.pause();
	});
	video2.addEventListener("ended",function(){
			video.currentTime[0];
			video2.play();
	});
	
});