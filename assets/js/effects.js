// JavaScript Document
$(function(){
	
		$("#m_menu_btn").click(function(){
			$("#top-bar").css("left",'0px').animate({'background-color': 'rgba(255, 255, 255, 0.5)'},200);
			$(".account ,	#top-bar .mainMenuWrap").delay(100).animate({width:"80%"},300)

	});
	
		$("#top-bar").click(function(){
			$("#top-bar").animate({
				'background-color': 'rgba(0, 0, 0, 0)'},200,
														function(){
														$(".account ,	#top-bar .mainMenuWrap").animate({width:"0"},300,
														function(){$("#top-bar").css("left",'-100%')}																																				)

														});

			

	});
	
				
			/*$(".head").each(function(){
				
				var $window=$(window),
						$head=$(this),
						headSet=$head.offset().top;
				
				$window.on('scroll',
							function(){
							
								if($window.scrollTop()>headSet){
									$head.addClass("sticky")
								}else{
									$head.removeClass("sticky")
								}	
					
				});			
				$window.trigger('scroll');
				
			});
/*
    var width=$(window).width();

    $(window).scroll(function () {
        var scrollTop=$(this).scrollTop();
        var headHeight = 80
        if(scrollTop > headHeight){
            $("#top-bar").show();
        }
        if(scrollTop < headHeight){
            $("#top-bar").hide();
        }
    }).scroll();
	*/
	
	$("#showCart,.checkcareWrap").mouseover(function(){
		$(".checkcareWrap").show();}
							 
		)
	$("#showCart,.checkcareWrap").mouseout(function(){
		$(".checkcareWrap").hide();}


		)
	$("#loginShow").click(function(){
		$("#logInBox").show();
		return false;}	 
		)
	$("#closeBoxBtn").click(function(){
		$("#logInBox").hide();
		})
    

    
});

