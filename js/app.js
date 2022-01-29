$(function() {
	/*---------------custom scroll---------------*/
	$('.custom-scroll').mCustomScrollbar({theme: 'minimal-dark', mouseWheel: {preventDefault: true}, setHeight: '100%'});
	/*$('.mobileNotScroll').mCustomScrollbar({theme: 'rounded-dark', mouseWheel: {preventDefault: true}});*/
	$(window).on("load resize",function(){
		if($(window).width() < '992'){
				$(".mobileNotScroll").mCustomScrollbar("destroy");/*$('.mobileNotScroll').mCustomScrollbar({theme: 'rounded-dark', mouseWheel: {preventDefault: true}});*/
		}else{
				$('.mobileNotScroll').mCustomScrollbar({theme: 'rounded-dark', mouseWheel: {preventDefault: true}});
		}
	});
	/*---------------custom scroll end---------------*/
	/*---------------custom calendar---------------*/
	
	$('.datepick').each(function(index){
		
		$(this).attr('id','datepick'+ index)
		
		pickmeup('#datepick'+index+'', {

			hide_on_select  : true,
			first_day				: 1,
			prev            : '',
			next            : '',
			format					: 'd.m.Y',
			class_name			: 'datepick'+index+'',
			locale          : 'ukr',
			locales         : {
				ukr : {
					days        : ["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],
					daysShort   : ["нед","пнд","вів","срд","чтв","птн","сбт" ],
					daysMin     : ["Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
					months      : ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],
					monthsShort : ["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]
				}
			},
		});
		$('#datepick'+index+'').get(0).addEventListener('pickmeup-show', function (e) {
			$(this).closest('.calendar').find('.btn-action').addClass('active');
		});
		$('#datepick'+index+'').get(0).addEventListener('pickmeup-hide', function (e) {
			$(this).closest('.calendar').find('.btn-action').removeClass('active');
		});
	});
	
	$(document).on('click', '.calendar .btn-action', function () {
			var $this = $(this);
			$this.toggleClass('active');
			pickmeup('#'+$(this).closest('.calendar').find('input').attr('id')+'').show();	
	});
	
	/*---------------custom calendar end---------------*/
	/*---------------sidebar---------------*/
	$(document).on('click', '.sidebar-toggle', function () {
			$('body').toggleClass('sidebar-open');
			$('.sidebar').toggleClass('open');
			$('.sidebar-dropdown').removeClass('show')
	});

	$('.sidebar').hover(function() {
		if (!$(this).hasClass('open')){
			$('body').addClass('sidebar-open');
		}
	}, function() {
		if (!$(this).hasClass('open')){
			$('body').removeClass('sidebar-open');
			$('.sidebar-dropdown').removeClass('show')
		}
	});
	/*---------------sidebar end---------------*/
	/*---------------dropdown---------------*/
	$('.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(100);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(100);
	});
	/*---------------dropdown end---------------*/
	/*---------------sidebar-dropdown---------------*/
	$(document).on('click', '.sidebar-dropdown > a', function (e) {
		if ($(this).next('ul').length) {
					e.preventDefault();
					if ($(this).closest('body').hasClass('sidebar-open')) {
							$(this).closest('li').toggleClass('show')
					}
			}
	});
	/*---------------sidebar-dropdown end---------------*/
	/*---------------toggle-block---------------*/
	$(document).on('click', '.btn-toggle', function (e) {
		var $this 			= $(this);
		var $thisParent = $this.closest('.toggle-block');
		$this.toggleClass('active');
		$thisParent.removeClass('new');
		if ($thisParent.hasClass('serviceBlock-info')){
				$thisParent.find('.toggle-item').slideToggle();  			
		}
		else if ($thisParent.hasClass('serviceBlock-info-case')){
			$thisParent.find('.serviceBlock-heading .hidden-btn').slideToggle();
			$thisParent.find('.toggle-item:first').slideToggle();
		} else {
			$thisParent.find('.toggle-item:first').slideToggle();
		}
		if($thisParent.hasClass('check-js')){
			$thisParent.find('.serviceBlock-info__body').toggleClass('close');
		}
	});
	$(document).on('click', '.btnClose-report', function (e) {
		var $this 			= $(this);
		var $thisParent = $this.closest('.toggle-block');
		$thisParent.find('.toggle-item').slideToggle();
		$thisParent.find('.btn-refuse').toggleClass('active');
	});
	
	/*---------------toggle-block end---------------*/
	/*---------------mobileMenu---------------*/
	$(document).on('click', '#mobileMenu', function (e) {
		$(this).toggleClass('active').closest('html').toggleClass('open-menu');
	});
	/*---------------mobileMenu end---------------*/
	/*---------------custom select---------------*/
	function formatText (icon) {
	    return $('<span><i class="icon ' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
	};
	$('.custom-select').select2({language: 'ru', width: '100%', minimumResultsForSearch: -1});
	$('.custom-select-icon').select2({
		language: 'ru', 
		width: '100%', 
    templateSelection: formatText,
    templateResult: formatText,
    containerCssClass: "select-icon",
    dropdownCssClass: "select-icon",
		minimumResultsForSearch: -1});
	/*---------------custom select end---------------*/
	/*---------------messenger toggle ---------------*/
	$(document).on('click', '.js-messenger', function () {
			$(this).toggleClass('active');
			$('.messenger-group').toggleClass('active')
	});
	 /*---------------messenger toggle  end---------------*/
	 /*---------------modal-box toggle ---------------*/
	$(document).on('click', '.btn-view', function () {
			$(this).parent().find('.modal-box').show();

	});
	$(document).on('click', '.modal-box__close', function () {
			$(this).parents(".modal-box").hide();
	});
	 /*---------------modal-box toggle  end---------------*/
	 /*---------------read more ---------------*/
	$(document).on('click', '.btn-read-more', function () {
			$(this).toggleClass('active').closest('.serviceBlock-info__body-inside').find('.mobileNotScroll').toggleClass('open');
	});
	 /*---------------read more  end---------------*/
	 /*---------------modal magnific---------------*/
	 $('.open-modal-link').magnificPopup({
		  type:'inline',
		  midClick: true,
		  closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon-close"></button>'
		});

	 $(document).on('click', '.closeModal', function () {
			$.magnificPopup.close();
		});

	 /*---------------modal magnific end---------------*/
	  /*---------------read more ---------------*/
	$(document).on('click', '.btn-delete-item', function () {
			$(this).closest('.serviceBlock-info-case').toggleClass('table-delete-item');
	});
	 /*---------------read more  end---------------*/

});

$(window).on("load resize",(function(){$(window).width()<"992" ? $(".mobileNotScroll").mCustomScrollbar("destroy"):$(".mobileNotScroll").mCustomScrollbar({theme:"rounded-dark",mouseWheel:{preventDefault:!0}})}));
$(".mobileScroll").mCustomScrollbar({theme:"rounded-dark",mouseWheel:{preventDefault:!0}});
// TEXTAREA
// textarea 1 
var prov = 0;
var provUndef = 0;
// скачать
$(document).on("click",'.modidy',function(){
   var btn = $(this);
   var text = btn.closest('.toggle-item').find('div.mobileNotScroll').find('div.mCustomScrollBox').find('div.mCSB_container').html();
   if(typeof text === "undefined"){
      text = btn.closest('.toggle-item').find('div.mobileNotScroll').html();
      provUndef = 1;
   }
    var textarea = document.querySelector("textarea[name=mess]");
    textarea.value = text;
   btn.hide();
   $('.not-modidy').show();
   prov = 1;
});
// опубликовать
$(document).on("click",".modidy-output",function(){
   var textarea = document.querySelector("textarea[name=mess]");
   var btn = $(this);
   if(textarea.value !=""){
      if(prov == 1){
         if(provUndef == 0){
            btn.closest('.toggle-item').find('div.mobileNotScroll').find('div.mCustomScrollBox').find('div.mCSB_container').html(textarea.value);
         }else{
            btn.closest('.toggle-item').find('div.mobileNotScroll').html(textarea.value);
         }
         textarea.value = "";
         $('.modidy').show();
         $('.not-modidy').hide();
      }
   }
   prov = 0;
});
// отменить
$(document).on("click",".not-modidy",function(){
   var textarea = document.querySelector("textarea[name=mess]");
   textarea.value = "";
   $(this).hide();
   $('.modidy').show();
   prov = 0;
});
// textarea 1 end
//textarea 2 
var prov1 = 0;
var provUndef1 = 0;
// скачать
$(document).on("click",'.modidy1',function(){
   var btn = $(this);
   var text = $('.outText').find('div.mCustomScrollBox').find('div.mCSB_container').html();
   if(typeof text === "undefined"){
      text = $('.outText').html();
      provUndef1 = 1;
   }
    var textarea = document.querySelector("textarea[name=mess1]");
    textarea.value = text;
   btn.hide();
   $('.not-modidy1').show();
   prov1 = 1;
});
// опубликовать
$(document).on("click",".modidy-output1",function(){
   var textarea = document.querySelector("textarea[name=mess1]");
   var btn = $(this);
   if(textarea.value !=""){
      if(prov1 == 1){
         if(provUndef1 == 0){
            $('.outText').find('div.mCustomScrollBox').find('div.mCSB_container').html(textarea.value);
         }else{
            $('.outText').html(textarea.value);
         }
         textarea.value = "";
         $('.modidy1').show();
         $('.not-modidy1').hide();
      }
   }
   prov1 = 0;
});
// отменить
$(document).on("click",".not-modidy1",function(){
   var textarea = document.querySelector("textarea[name=mess1]");
   textarea.value = "";
   $(this).hide();
   $('.modidy1').show();
   prov1 = 0;
});
//textarea 2 end 
//textarea 3 
var prov2 = 0;
var provUndef2 = 0;
// скачать
$(document).on("click",'.modidy2',function(){
   var btn = $(this);
   var text = $('.outText2').find('div.mCustomScrollBox').find('div.mCSB_container').html();
   if(typeof text === "undefined"){
      text = $('.outText2').html();
      provUndef2 = 1;
   }
    var textarea = document.querySelector("textarea[name=mess2]");
    textarea.value = text;
   btn.hide();
   $('.not-modidy2').show();
   prov2 = 1;
});
// опубликовать
$(document).on("click",".modidy-output2",function(){
   var textarea = document.querySelector("textarea[name=mess2]");
   var btn = $(this);
   if(textarea.value !=""){
      if(prov2 == 1){
         if(provUndef2 == 0){
            $('.outText2').find('div.mCustomScrollBox').find('div.mCSB_container').html(textarea.value);
         }else{
            $('.outText2').html(textarea.value);
         }
         textarea.value = "";
         $('.modidy2').show();
         $('.not-modidy2').hide();
      }
   }
   prov2 = 0;
});
// отменить
$(document).on("click",".not-modidy2",function(){
   var textarea = document.querySelector("textarea[name=mess2]");
   textarea.value = "";
   $(this).hide();
   $('.modidy2').show();
   prov2 = 0;
});
//textarea 3 end

var prov = 0;
var provUndef = 0;
$(document).on("click",".redag-file",function(){
   $('.popap-redag').show();
   var btn = $(this);
   var text = btn.closest("li").find("div.message-about__body").find("p").html();
   var textarea = document.querySelector("textarea[name=redag]");
   textarea.value = text;
   btn.closest("li").addClass("redag-p");
});
$(document).on("click",".redag-btn-exit, .redag-close",function(){
   $('.popap-redag').hide();
});
// опубликовать
$(document).on("click",".modify-output",function(){
   var textarea = document.querySelector("textarea[name=redag]");
   var btn = $(this);
   btn.closest(".mobileNotScroll").find("ul.message-about").find("li.redag-p").find("div.message-about__body").find("p").html(textarea.value);
   $('.popap-redag').hide();
})



// modal-redag-message
$(document).on("click",".btn-read-more",function(){
      $(this).closest('.serviceBlock-info__inside').find('.mobileNotScroll').toggleClass("openscroll");
});
$(document).on("click",".btn-opp",function(){
   var btn = $(this);
   btn.closest('.toggle-block').find('div.serviceBlock-info__body').find('div.serviceBlock-info__files').find('div.serviceBlock-heading').slideToggle('show');
});

//handler block
$(document).on('click', '.js-open',function(){
	var btn = $(this);
	// var btnItems = btn.closest('.handler-btn').find('.js-open');
	var btnItems = btn.closest('.handler').find('.js-open');
	var thisParent = btn.closest('.handler');
	var item = thisParent.find('.js-block');
	$(btnItems).each(function(){
		$(this).removeClass('active');
	}) 
	$(item).each(function(){
		$(this).removeClass('open');
	}) 
	if(!btn.hasClass('active')){
		if(btn.hasClass('handler-btn__one')){
			if(open === true){
				thisParent.find('.handler-block__one').removeClass('open');
				$(btnItems).each(function(){
					$(this).removeClass('d-none');
				})
				$('.serviceBlock-info__button').addClass('d-none');
			}else{
				thisParent.find('.handler-block__one').addClass('open');
				$(btnItems).each(function(){
					$(this).addClass('d-none');
				})
				$('.serviceBlock-info__button').removeClass('d-none');
				btn.removeClass('d-none')
			}
		}else if(btn.hasClass('handler-btn__two')){
			if(open === true){
				thisParent.find('.handler-block__two').removeClass('open');
			}else{
				thisParent.find('.handler-block__two').addClass('open');
			}
		}else if(btn.hasClass('handler-btn__three')){
			if(open === true){
				thisParent.find('.handler-block__three').removeClass('open');
			}else{
				thisParent.find('.handler-block__three').addClass('open');
			}
		}
	}
	btn.addClass('active');
})
$(document).on('click','.js-close',function(){
	var btn = $(this);
	var parentBtn = btn.closest('.js-block');
	// var btnItems = btn.closest('.handler').find('.handler-btn').find('.js-open');
	var btnItems = btn.closest('.handler').find('.js-open');
	btn.closest('.js-block').removeClass('open');
	var item = btn.closest('.handler').find('.js-open');
	$(item).each(function(){
		$(this).removeClass('open');
	})
	if(parentBtn.hasClass('handler-block__one')){
		$(btnItems).each(function(){
			$(this).removeClass('d-none');
		})
		$('.serviceBlock-info__button').addClass('d-none');
	}
	btnItems.removeClass('active');
})
// window.addEventListener(`resize`, event => {
// 	// some code
// 	if(window.matchMedia('(max-width: 991px)').matches){
// 		$('.handler-btn__one').unwrap();
// 		$('.handler-block__one').unwrap();
// 		$('.handler_block-btn-one, .handler_block-body-first').wrapAll('<div class="first-block">');
// 		$('.handler_block-btn-two, .handler_block-body-second').wrapAll('<div class="second-block">');
// 		$('.handler_block-btn-three, .handler_block-body-third').wrapAll('<div class="third-block">');
// 	}else{

// 	}
//  }, false);
//end handler block
//dot block
$(document).on('click','.btn-open',function(){
	var btn = $(this);
	btn.addClass('active');
	btn.closest('.serviceBlock-info__button').find('.dot-body').show();
})
$(document).on('click','.dot-close',function(){
	var btn = $(this);
	btn.closest('.dot-body').hide();
	btn.closest('.serviceBlock-info__button').find('.btn-open').removeClass('active');
})
$(document).on('click','.check-box>label',function(){
	var btn = $(this);
	var dotItem = btn.closest('.dot-body--item');
	dotItem.toggleClass('active');
	if(dotItem.hasClass('active')){
		if(dotItem.hasClass('dot-stop')){
			$('.popup__dot-stop').show();
		}else if(dotItem.hasClass('dot-reject')){
			$('.popup__dot-reject').show();
		}else if(dotItem.hasClass('dot-change')){
			$('.popup__dot-change').show();
		}
	}
})
$(document).on('click','.popup-close',function(){
	$(this).closest('.popup').hide();
	if($(this).hasClass('dot-close')){
		var dotBody = $('.dot-body');
		dotBody.hide();
		dotBody.prev().removeClass('active');
	}
})
//dot block end
// mySelect
$(document).on('click','.mySelect-header',function(){
	var btn = $(this);
	var thisParent = btn.closest('.mySelect');
	thisParent.find('.mySelect-body').toggleClass('d-none');
})

var kolYch = 0;
$(document).on('click','.js-check-box',function(){
	var btn = $(this);
	var thisParent = btn.closest('.check-box');
	var checkBoxItems = btn.closest('.mySelect-body').find('.check-box');
	thisParent.toggleClass('active');
	var inputText = btn.closest('.mySelect').find('.mySelect-header__title');
	if(!btn.closest('.check-box').find('input').is(':checked')){
		kolYch++;
	}else{
		kolYch--;
	}
	console.log(kolYch);
	if(kolYch === 1){
		$(checkBoxItems).each(function(){
			if($(this).hasClass('active')){
				var btnText = $(this).find('.js-check-box').text();
				inputText.html(btnText);
			}
		})
	}else if(kolYch > 1){
		var thisBtnText;
		var allBtnText;
		var proverka = 0;
		$(checkBoxItems).each(function(){
			if($(this).hasClass('active')){
				proverka++;
				if(proverka === 1){
					thisBtnText = $(this).find('.js-check-box').text();
					allBtnText = thisBtnText;
				}else{
					thisBtnText = $(this).find('.js-check-box').text();
					allBtnText = allBtnText + ' , ' + thisBtnText;
					inputText.html(allBtnText);
				}
			}
		})
	}else if(kolYch === 0){
		inputText.html('Немає');
	}
	


})

//mySelect end
