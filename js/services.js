/**
 * Created by Administrator on 2017/7/23.
 */

jQuery(document).ready(function(){
    if($('body').hasClass('header-fixed-top')){
        $(window).scroll(function () {
            if( $(window).scrollTop() > 180){
                $('header').addClass('sticky animated fadeInDown');
            }else {
                $('header').removeClass('sticky animated fadeInDown');
            }
        })
    }

})

