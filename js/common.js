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

			//select
			fn.select();

			//optionEaUp
			fn.optionEaUp();

			//optionEaDown
			fn.optionEaDown();

			//tab
			fn.tab();

			//bottomarea
			fn.bottomarea();
		},

		//select
		select : function(){
			$('.select select').change(function() {
				var $this = $(this).val();
				if ($this != 'null') {
						$(this).addClass("is_active");
				} else {
						$(this).removeClass("is_active");
				}
			});
			
			var selVal;
			$('.select select').each(function(){
				for(var i=1; i < this.options.length; i++) {
					if(this.options[i].selected == true) {
						selVal = this.options[i].value;
						$(this).addClass("is_active");
						break;
					}
				}
			});
		},

		//optionEaUp
		optionEaUp : function(obj){
			var $obj = $(obj),
					eaVal = parseInt($obj.siblings("input").val()),
					max = parseInt($obj.siblings("input").attr("max")) || 0;

					$obj.siblings('.btn_down').addClass("is_active");
			if ( max ){
				if ( eaVal < max ){
					eaVal++;
				}
			}else{
				eaVal++;
			}
				$obj.siblings("input").val(eaVal);

				if ( eaVal == max ) {
					$obj.addClass("is_stop");
				}
		},

		//optionEaDown
		optionEaDown : function(obj){
			var $obj = $(obj),
					eaVal = parseInt($obj.siblings("input").val()),
					min = parseInt($obj.siblings("input").attr("min")) || 0;

			$obj.siblings('.btn_up').removeClass("is_stop");

			if ( $obj.siblings("input[min]").length ){
				if ( eaVal > min ){
					eaVal--;
				}
			}else{
				if ( eaVal > 1 ){
					eaVal--;
				}
			}
			$obj.siblings("input").val(eaVal);
			if( eaVal == 1 ){
				$obj.removeClass("is_active");
			}
		},

		//tab
		tab : function(){
			$(document).on("click", ".tab .tab_menu a", function() {
				var $menu = $(this).closest("li"),
					i = $menu.index();

				$menu.addClass("is_active").siblings().removeClass("is_active");
				$(".tab .tab_cont .tab_item").eq(i).addClass("is_active").siblings().removeClass("is_active");
			});
		},

		//bottomarea
		bottomarea : function(){
			if($(".bottom_area").length > 0) {
				$(".content").addClass("is_bottom_area");
			}
		},

		//popupOpen
		popupOpen : function(obj){
			$("body").addClass("pop_open");

			var $this = $(obj);
			$this.addClass("is_open");

		},

		//popupClose
		popupClose : function(obj){
			$("body").removeClass("pop_open");
			
			var $this = $(obj);
			$this.closest(".popup").removeClass("is_open");
		},

	}
})();


$(window).on('load', function(){
	//init
	fn.common();

	//datepicker
	$('.datepicker input').datepicker({
		dateFormat: 'yy.mm.dd', //날짜 포맷이다.
		//prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
		//nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		currentText: '오늘', // 오늘 텍스트 변경
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
		showMonthAfterYear: true,	// true : 년 월	false : 월 년 순으로 보여줌
		yearSuffix: '년',
		showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
	}).datepicker('setDate',new Date());
});

