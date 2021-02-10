/*
********************************
 Template Name   : ToAng
 Author          : ToAng
********************************
*/
(function($) {
    "use strict";
    var ToAng = {};
    var plugin_track = 'plugin/';
    $.fn.exists = function() {
        return this.length > 0;
    };
    /* -------------------------- /*
     * Pre load
    /* -------------------------- */
    ToAng.PreLoad = function() {
        document.getElementById("loading").style.display = "none";
    }
    /*--------------------
        * Header Class
    ----------------------*/
    ToAng.HeaderSticky = function() {
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $("header").addClass("fixed-header")
        });
    }
    /*--------------------
        * Menu Close
    ----------------------*/
    ToAng.MenuClose = function() {
        $('.navbar-nav .nav-link').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }
    /* -------------------------- /*
     * Header Height
    /* -------------------------- */
    ToAng.HeaderHeight = function() {
        var HHeight = $('.header-height .fixed-header-bar').height()
        $('header').height(HHeight);
    }
    /* -------------------------- /*
     * Header Fixed
    /* -------------------------- */
    ToAng.HeaderFixd = function() {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 100) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    }
    /*--------------------
        * One Page
    ----------------------*/
    ToAng.OnePage = function() {
        $('header a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 70,
                    }, 1000);
                    return false;
                }
            }
        });
    }
    /* -------------------------- /*
     * Menu
    /* -------------------------- */
    ToAng.MegaMenu = function() {
        var mDropdown = $(".mobile-dropdown-toggle")
        mDropdown.on("click", function() {
            $(this).parent().toggleClass("open-menu-parent");
            $(this).next('ul').toggleClass("open-menu");
            $(this).toggleClass("open");
        });
    }
    /*--------------------
        * Progress Bar 
    ----------------------*/
    ToAng.ProgressBar = function() {
        $(".progress .progress-bar").each(function() {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    }
    /*--------------------
    * Counter JS
    ----------------------*/
    ToAng.Counter = function() {
        var counter = jQuery(".counter");
        var $counter = $('.counter');
        if (counter.length > 0) {
            loadScript(plugin_track + 'counter/jquery.countTo.js', function() {
                $counter.each(function() {
                    var $elem = $(this);
                    $elem.appear(function() {
                        $elem.find('.count').countTo({
                            speed: 2000,
                            refreshInterval: 10
                        });
                    });
                });
            });
        }
    }
    /*--------------------
    * OwlSlider
    ----------------------*/
    ToAng.Owl = function() {
        var owlslider = jQuery("div.owl-carousel");
        if (owlslider.length > 0) {
            loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
                owlslider.each(function() {
                    var $this = $(this),
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 30;
                    $(this).owlCarousel({
                        loop: $loop,
                        items: $items,
                        responsive: {
                            0: {
                                items: $this.data('xx-items') ? $this.data('xx-items') : 1
                            },
                            480: {
                                items: $this.data('xs-items') ? $this.data('xs-items') : 1
                            },
                            768: {
                                items: $this.data('sm-items') ? $this.data('sm-items') : 2
                            },
                            980: {
                                items: $this.data('md-items') ? $this.data('md-items') : 3
                            },
                            1200: {
                                items: $items
                            }
                        },
                        dots: $navdots,
                        autoplayTimeout: $autospeed,
                        smartSpeed: $smartspeed,
                        autoHeight: $autohgt,
                        margin: $space,
                        nav: $navarrow,
                        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                        autoplay: $autoplay,
                        autoplayHoverPause: true
                    });
                });
            });
        }
    }
    /* -------------------------- /*
     * lightbox gallery
    /* -------------------------- */
    ToAng.Gallery = function() {
        if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
                if ($(".lightbox-gallery").exists()) {
                    $('.lightbox-gallery').magnificPopup({
                        delegate: '.gallery-link',
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        mainClass: 'mfp-fade',
                        fixedContentPos: true,
                        closeBtnInside: false,
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                        }
                    });
                }
                if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                }
            });
        }
    }
    /* -------------------------- /*
     * All Functions
    /* -------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            // then bind the event to the callback function
            // there are several events for cross browser compatibility
            // script.onreadystatechange = callback;
            script.onload = callback;
            // fire the loading
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };
    // Window on Load
    $(window).on("load", function() {
        ToAng.PreLoad();
    });
    // Document on Ready
    $(document).on("ready", function() {
            ToAng.HeaderFixd(),
            ToAng.OnePage(),
            ToAng.Counter(),
            ToAng.HeaderHeight(),
            ToAng.HeaderSticky(),
            ToAng.MenuClose(),
            ToAng.Gallery(),
            ToAng.ProgressBar(),
            ToAng.MegaMenu(),
            ToAng.Owl()
    });
    // Document on Scrool
    $(window).on("scroll", function() {
        ToAng.ProgressBar(),
            ToAng.HeaderFixd();
    });
    // Window on Resize
    $(window).on("resize", function() {
        ToAng.HeaderHeight();
    });
    //More Content
    $(document).ready(function() {
        var showChar = 70;
        var ellipsestext = "...";
        var moretext = "Show more <i class='fa fa-angle-double-right' aria-hidden='true'></i>";
        var lesstext = "Show less";
        $('.more').each(function() {
            var content = $(this).html();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
                var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
            }
        });
        $(".morelink").click(function() {
            if ($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });
    });
    //Social Icons Hover Animation
    var sourceSwap = function() {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    };
    $(function() {
        $('.social a').hover(function() {
            $('img', this).attr('src', sourceSwap)
        }, function() {
            $('img', this).attr('src', sourceSwap)
        });
    });
    //Type Writer
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    };
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        document.body.appendChild(css);
    };
    // Loading
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome) {
        document.getElementsByClassName('infinityChrome')[0].style.display = "none";
        document.getElementsByClassName('infinity')[0].style.display = "block";
    }
    //Price toggle change
    $('.price_checkbox_switch').change(function() {
        if ($(this).is(":checked")) {
            $('.pricing').each(function() {
                var data_price = $(this).data('month-price');
                $(this).html(data_price);
                $(".pricing-text-main").html('/year');
            });
        } else {
            $('.pricing').each(function() {
                var data_price = $(this).data('year-price');
                $(this).html(data_price);
                $(".pricing-text-main").html('/month');
            });
        }
    });
    //Gallery Modal Popup
    $('.parent-media').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    //Gallery Modal Popup
    $('.youtube-media').magnificPopup({
        type: 'iframe',
    });
    /* Contact Form */
    $(document).ready(function() {
        $('#contactform').validate({
            errorClass: 'error animated fadeInDown',
            errorElement: 'div',
            errorPlacement: (error, e) => {
                error.insertAfter($(e).parents('.form-group'));
            },
            highlight: e => {
                $(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: e => {
                $(e).closest('.form-group').removeClass('is-invalid');
                $(e).remove();
            },
            submitHandler: function(form) {
                $.ajax({
                    type: "POST",
                    url: "include/submitContact.php",
                    data: $(form).serialize(),
                    success: function(response) {
                        if (response['errorcode'] == 1) {
                            $('#submitMsg').html('<div class="alert alert-success mt-3">' + response['response'] + '</div>');
                            $('#contactform')[0].reset();
                        } else if ($response['errorcode'] == 0) {
                            $('#submitMsg').html('<div class="alert alert-danger mt-3">' + response['response'] + '</div>');
                        }
                    }
                });
                return false;
            }
        });
    });
    //Input Style
    $('.input-element input, .input-element textarea').focusin(function(){
        $(this).parent().addClass('active');
    });
    $('.input-element input, .input-element textarea').blur(function(){
        if(!$(this).val().length > 0) {  
            $(this).parent().removeClass('active');
        }
    });
})(jQuery);