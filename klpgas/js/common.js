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
			//pc
			if($(window).width() > 1240) {
				$(".gnb > ul > li > a").hover(function(){
					$(this).siblings(".depth2_list").addClass("is_open");
				});
				$(".gnb > ul > li").on("mouseleave", function(){
					$(this).find(".depth2_list").removeClass("is_open");
					$(".header .gnb .m_depth1").removeClass("is_active");
				});
			}

			//mobile
			$(".header .gnb .m_depth1").on("click", function(){
				if($(this).siblings(".depth2_list").hasClass("is_open")){
					$(this).removeClass("is_active");
					$(this).siblings(".depth2_list").removeClass("is_open");

				} else {
					$(this).addClass("is_active");
					$(this).siblings(".depth2_list").addClass("is_open");
				}
			});
			$(".header .menu .btn_menu").on("click", function(){
				$(".header .header_info").addClass("is_open");
				$("body").addClass("ov_hidden");
			});
			$(".header .btn_gnb_close").on("click", function(){
				$(".header .header_info").removeClass("is_open");
				$("body").removeClass("ov_hidden");
			});
		},

	}
})();


$(window).on('load', function(){
	//init
	fn.common();

});

