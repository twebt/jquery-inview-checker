jQuery inViewChecker works in Animate CSS
Download animate.css from here: https://daneden.github.io/animate.css/
---------------------------------------------------------------------------------------------------

How to use it:
<script src="javascript/jquery/jquery.inViewChecker.js" type="text/javascript"></script>
<link href="stylesheet/animate.css" rel="stylesheet">
<link href="javascript/main.js" rel="stylesheet">

Place this piece of code in your 'main.js' file or as it named

$(function() {
	
	// Run plugin here...
	 $('.vp').inViewChecker({
	   mobile: 768, // or 992 (it's your choice),
	   classToAdd: 'animated', // by default,
	   repeat: false, // by default, true value will repeat your animation
	   scrollVertical: true // by default, false value will never load animation when scroll from bottom to top
	});
});

Example:
 <div class="free-gfonts vp" data-duration="1s" data-animation="fadeIn" data-delay="1s">Only free Google Fonts</div>