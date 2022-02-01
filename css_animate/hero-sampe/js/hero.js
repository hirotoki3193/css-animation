$(function(){
	// checkboxのチェック判定
	function getFlag(checkbox){
		return checkbox.prop('checked');
	}

	let $heroText =  $('.hero form label'),
		$heroChk = $('#hero-chk');

	$('.hero img').click('on',function(){
		if(getFlag($heroChk)){
			$heroText.find('span').removeClass('active');
			$heroText.find('.front').addClass('active');
			$('#contents').removeClass('active');
			$heroChk.removeAttr('checked').prop('checked', false).change();
		}
	})

	$heroText.click('on',function(){
		$heroText.find('span').removeClass('active');
		$('#contents').removeClass('active');
		if(getFlag($heroChk)){
			$heroText.find('.front').addClass('active');
			$('#contents').removeClass('active');
		} else if(true) {
			$heroText.find('.rear').addClass('active');
			$('#contents').addClass('active');
		}
	})
});