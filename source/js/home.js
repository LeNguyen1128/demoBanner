;jQuery(function($) {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        secSlider;

    var resizeMainWindow = function(e) {
        var windowWidthNew = jQuery(window).width();
        var windowHeightNew = jQuery(window).height();
        if (windowWidth != windowWidthNew || windowHeight != windowHeightNew) {
            windowWidth = windowWidthNew;
            windowHeight = windowHeightNew;
        }
    };

    $(window).bind('resize', resizeMainWindow);

    $(document).ready(function() {
        //tab heading click
        $('[data-click]').on('click', function(){
            var id_li = "#" + $(this).attr('data-id');
            if ($(this).hasClass('active')){
                return true;
            } else {
                $(id_li).parent().find('.active').removeClass('active');
                $($('.tabs-wrapper').children('.active')[0]).removeClass('active');

                $(id_li).addClass('active');
                var id = "#" + $(this).attr('data-id') + "-tab";
                $(id).addClass('active');
            }
        });

        //faq
        $('.ele-question').on('click', function(){
            var _ele = $(this).parent();
            if (_ele.hasClass('open')){
                $(_ele.children('.ele-anwser')).slideUp(300, function(){
                    _ele.removeClass('open');
                });
            }else {
                if($('.faq-wrapper').find('.open').length == 1){
                    $($('.faq-wrapper').find('.open')[0]).find('.ele-anwser').slideUp(300,function(){
                        $('.faq-wrapper').find('.open').removeClass('open');
                    });
                }

                $(_ele.children('.ele-anwser')).slideDown(300, function(){
                    _ele.addClass('open');
                });
                
            }
        });

    });

    $(window).load(function() {

    });

});
