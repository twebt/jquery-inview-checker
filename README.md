# Info
jQuery inViewChecker works in Animate CSS<br>
Download animate.css from here: https://daneden.github.io/animate.css/

## Usage
First, add the following:
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<script src="javascript/jquery/jquery.inViewChecker.js" type="text/javascript"></script>
<link href="stylesheet/animate.css" rel="stylesheet">
<link href="javascript/main.js" rel="stylesheet">
<link href="javascript/main.css" rel="stylesheet">
```

Your element should contains "data-animation" tag, which is the name of the animation as CSS class.
'data-delay' and 'data-duration' are extra HTML tags.

```html
<div class="branding" data-animation="fadeIn" data-delay="0.5s" data-duration="1s">

```
Then, initialize the Viewport:
```js
$(function() {
	// Run plugin here...
	 $('.vp').inViewChecker({
	   mobile: 768, // or 992 (it's your choice),
	   classToAdd: 'animated', // by default,
	   repeat: false, // by default, true value will repeat your animation
	   scrollVertical: true // by default, false value will never load animation when scroll from bottom to top
	});
});
```

and place this CSS 
```css
@media (min-width: 992px) {
	.vp {
		-webkit-animation-name: none;
		animation-name: none;
		visiblity: hidden;
		opacity: 0;
		-webkit-animation-delay: 0s; 
		animation-delay: 0s
	}
}
```
## License

MIT license. Copyright © 2016.
