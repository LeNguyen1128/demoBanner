var $viewport, 
    windowWidth,
    windowHeight;
;jQuery(function($) {
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

  var resizeMainWindow = function(e) {
      var windowWidthNew = $(window).width();
      var windowHeightNew = $(window).height();
      if (windowWidth != windowWidthNew || windowHeight != windowHeightNew) {
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
      }
  };
  $(window).bind('resize', resizeMainWindow);
  $(document).ready(function() {
    if($.browser.msie){
        if(parseInt($.browser.version)>=10){
            $('html').addClass('ie10');
        }else if(parseInt($.browser.version)==9){
            $('html').addClass('ie9');
        }else if(parseInt($.browser.version)<=8){
            $('html').addClass('ie8');
        }
    }else if ($.browser.trident){
        var i = 'ie'+getInternetExplorerVersion();
        $('html').addClass(i);
    }

    if($.browser.safari)$('html').addClass('safari');
    if($.browser.chrome)$('html').addClass('chrome');
    if(isMobile.phone){
        $('html').addClass('mode-phone');
        if(isMobile.apple.device){
            $('html').addClass('mode-iOS');
            if(isMobile.apple.phone){
                $('html').addClass('mode-iPhone');
            }
        }
        if(isMobile.android.device){
            $('html').addClass('mode-Android');
        }
    }else if(isMobile.tablet) {
        $('html').addClass('mode-tablet');
        if(isMobile.apple.tablet){
            $('html').addClass('mode-iPad');
        }
        if(isMobile.android.device){
            $('html').addClass('mode-Android');
        }
    }else {
        $('html').addClass('mode-desktop');
    }


    //Example use js to load fonts
    var filefontcss = '',
        siteUrl = '';
    siteUrl = window.location.href;
    siteUrl = siteUrl.substr(0,siteUrl.lastIndexOf('/'));
    //console.log(platform.os);
    if($.browser.chrome&&platform.os.family=='Windows Server 2008 R2 / 7'){
        //some fonts has issue with chrome on win 7
        filefontcss = siteUrl + '/css/fonts-chrome.css';
    }else{
        filefontcss = siteUrl + '/css/fonts-face.css';
    }
    WebFontConfig = {
        custom: {families: ['DINNextLTPro:n3,n4,i4,n5,n7,i7','Cabin:i4,n4,n5,n6,n7'],urls: [filefontcss] }
    };
    (function() {
       var wf = document.createElement('script');
       wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
         '://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
       wf.type = 'text/javascript';
       wf.async = 'true';
       var s = document.getElementsByTagName('script')[0];
       s.parentNode.insertBefore(wf, s);
    })();

  });
  $(window).load(function() {

  });

});
