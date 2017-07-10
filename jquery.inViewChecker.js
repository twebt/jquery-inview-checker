 /**
 * jQuery inViewChecker
 * @author Tony Tanchevski
 * @version 1.0
 * @date April 26, 2016
 * @category jQuery plugin
*/


(function($){

    $.fn.inViewChecker = function(settings) 
    {

        // Define some options for extend
        var options = 
        {
            classToAdd: 'animated',     // default class compatible with animate.css
            repeat: false,      // use for data-attribute
            callbackFunction: function(el,action){},
            scrollVertical: true,
            mobile: 752
        }   

        $.extend(options, settings);

        var $el = this,
            boxSize = {height: $(window).height(), width: $(window).width()};


        // Define method checkEl of plugin inViewChecker()
        this.checkEl = function() 
        {
            var viewportTop, viewportBottom;

            if(options.scrollVertical) 
            {
                viewportTop = $(window).scrollTop();
                viewportBottom = (viewportTop + boxSize.height);
            }

            $el.each(function() 
            {
                var $self = $(this),
                    selfOptions = {},
                    attrOptions = {};

                // Store data attributes in attrOptions{}
                if ($self.data('repeat')) 
                    $self.attrOptions = $self.data('repeat');
                if ($self.data('animation'))
                    $self.attrOptions = $self.data('animation');
                if ($self.data('delay'))
                    $self.attrOptions = $self.data('delay');
                if ($self.data('duration'))
                    $self.attrOptions = $self.data('duration');

                $.extend(selfOptions, options);
                $.extend(selfOptions, attrOptions);


                // Some variables for viewport elements
                var startTop, endBottom, topOnScreen, bottomOnScreen, isVisible;

                startTop        =   $self.offset().top;
                endBottom       =   startTop + $self.height();
                topOnScreen     =   startTop >= viewportTop && endBottom <= viewportBottom;
                bottomOnScreen  =   endBottom >= viewportBottom && endBottom <= viewportBottom;
                isVisible       =   topOnScreen || bottomOnScreen;


                // Some variables for styles
                var animation, delay, duration, styles; 

                animation       =   $self.data('animation');
                delay           =   $self.data('delay');
                duration        =   $self.data('duration');
                styles          =   {'-webkit-animation-delay': delay, '-moz-animation-delay': delay, 'animation-delay': delay, 'animation-name': animation, '-webkit-animation-duration': duration, 'animation-duration': duration, 'visibility': 'visible', 'opacity': '1'};



                // Check if element is in viewport
                if (isVisible) 
                {   
                    // Add Class
                    $self.addClass(selfOptions.classToAdd);

                    // Add styles
                    $self.css(styles);

                    // Do the callback function
                    selfOptions.callbackFunction($self, 'add');

                }

                // Check if element has classToAdd and data-repeated is true
                else if ($self.hasClass(selfOptions.classToAdd) && $self.data('repeat')) {

                    // Remove Class
                    $self.removeClass(selfOptions.classToAdd);

                    // Do the callback function
                    selfOptions.callbackFunction($self, 'remove');
                }

            });
        }

        /*checkEl.prototype.mobile = function() {
            var mobile = false;
            if (options.mobile) {
                var resolution, width;
                resolution  =   options.mobile;
                width       =   $(window).width();

                if (width > resolution) {
                    mobile = true;
                    $(window).on('scroll', this.checkEl);
                }
            }
        }*/


        // if screen is less than options.mobile
        if (options.mobile) {

            // resolution in options.mobile
            var resolution = options.mobile;

            // window with
            var width = window.innerWidth;

            // check if window width is more than resolution
            if (width > resolution) {
                $(window).on('scroll', this.checkEl);
                this.checkEl();
                return this;
            }
        }

    }
})(jQuery);