(
	$(document).ready(
		function(){
    		$('#navWrapper').css('display','inline-block');
			$('body').css('background-image', 'url(Images/red_smoke.jpg)');
		}
	)
);
	

$('#mainMenu div').click(
	function(){
		var id=this.id;	
		location.href=id+".html";
	}
);