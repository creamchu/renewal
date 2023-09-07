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
			//allchekbox
			fn.allchekbox();

			//optionEaUp
			fn.optionEaUp();

			//optionEaDown
			fn.optionEaDown();
		},

		//체크박스 전체선택
		allchekbox : function(obj) {
			if($("#cboxAll").is(':checked')) {
				$("input[name=cbox]").prop("checked", true);
			} else {
				$("input[name=cbox]").prop("checked", false);
			}

			$(document).on("click", "input:checkbox[name=cbox]", function(e) {
	
				var chks = document.getElementsByName("cbox");
				var chksChecked = 0;
				
				for(var i=0; i<chks.length; i++) {
					var cbox = chks[i];
					
					if(cbox.checked) {
						chksChecked++;
					}
				}
				
				if(chks.length == chksChecked){
					$("#cboxAll").prop("checked", true);
				}else{
					$("#cboxAll").prop("checked",false);
				}
				
			});
		},

		//옵션 수량 올리기
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

		//옵션 수량 내리기
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

		//팝업 열기
		popupOpen : function(obj){
			$("body").addClass("pop_open");

			var $this = $(obj);
			$this.addClass("is_open");

		},

		//팝업 닫기
		popupClose : function(obj){
			$("body").removeClass("pop_open");
			
			var $this = $(obj);
			$this.closest(".popup").removeClass("is_open");
		}

	}
})();


$(window).on('load', function(){
	//init
	fn.common();
});
