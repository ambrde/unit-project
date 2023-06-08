//jquery comments//

$(document).ready(function(){
	$(".card").hover(function() {
		$(".card").width(500).height(500);
	},
	function() {
		$(".card").width(400).height(400);
	});
});