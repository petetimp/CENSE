//enter and exit buttons
$('#enter').click(
	function(){
		$('#warning').css('display','none');
		$('#navWrapper').css('display','inline-block');
		$('body').css('background-image', 'url(Images/red_smoke.jpg)');
		$('#content_bg').css('display', 'block');
		$('#pageContent').css('display','block');
	}
);

$('#exit').click(
	function(){
		location.href='https://www.google.com';
	}
);

$(
	function() {
		$(".rslides").responsiveSlides();
  	}
);

$('#mainMenu div').click(
	function(){
		var id=this.id;	
		location.href=id+".html";
	}
);