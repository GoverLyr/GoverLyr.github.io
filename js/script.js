(function() {
	var OriginTitile = document.title, titleTime;
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			document.title = '快回来嘛！';
			clearTimeout(titleTime);
		} else {
			document.title = '欢迎回来~';
			titleTime = setTimeout(function() {
				document.title = OriginTitile;
			},2000);
		}
	});
})();

function pic(o){
	$(o).css({"max-width":"none","position":"absolute"});
	if($(o).width()/$(o).parent().width()<$(o).height()/$(o).parent().height()){
		$(o).css({"width":"100%","top":"50%"});
		$(o).css({"margin-top":"-"+($(o).height()/2)+"px"});
	}else{
		$(o).css({"height":"100%","left":"50%"});
		$(o).css({"margin-left":"-"+($(o).width()/2)+"px"});
	};
};

$(".topTitle .nav").click(function(){
    $(this).find(".iconfont").addClass("icon-nav_off").removeClass("icon-nav_on");
    $(".header .bg").stop().fadeIn(300);
    $(".header .head").stop().animate({"left":"0px"},200);
});

$(".header .bg").stop().click(function(){
    $(".topTitle .nav .iconfont").addClass("icon-nav_on").removeClass("icon-nav_off");
    $(this).fadeOut(300);
    $(".header .head").stop().animate({"left":"-250px"},200);
});

$(".mHeight").css({"min-height":$(window).height()-$(".rightcopy").height()-115});