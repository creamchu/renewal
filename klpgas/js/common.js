/**
* --------------------------------
* Common JS
* creator : chowoobin
* --------------------------------
*/
var fn = (function() {
	"use strict";

	return {
		//공통
		common : function(){
			//gnb
			fn.gnb();

		},

		//gnb
		gnb : function(){
			$(".gnb > ul > li > a").hover(function(){
				$(this).siblings(".depth2_list").addClass("is_open");
			});
			$(".gnb > ul > li").on("mouseleave", function(){
				$(this).find(".depth2_list").removeClass("is_open");
			});


			$(".header .depth2 .depth2_btn").on("click", function(){

				if($(this).closest(".depth2").hasClass("is_active")){
					$(".depth2").removeClass("is_active");
					$("body").removeClass("ov_hidden");

				} else {
					$(".depth2").addClass("is_active");

					if($(window).width() <= 767) {
						$("body").addClass("ov_hidden");
					}
				}
			});
		},

	}
})();


$(window).on('load', function(){
	//init
	fn.common();

});

