jQuery(function($){

    $(function(){
        var $container = $('.portfolio-items');

        $container.isotope({
            getSortData: {
                alphabetical: function( $elem ) {
                    var name = $elem.find('.name'),
                        itemText = name.length ? name : $elem;
                    return itemText.text();
                }
            }
        });

        var $optionSets = $('.option-set'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function(){

            var $this = $(this);
            // don't proceed if already selected
            if ( $this.hasClass('selected') ) {
                return false;
            }
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
                // changes in layout modes need extra logic
                changeLayoutMode( $this, options )
            } else {
                // otherwise, apply new options
                $container.isotope( options );
            }

            return false;
        });


    });

    (function () {
        $(".st-testimonials").owlCarousel({
            singleItem: true,
            lazyLoad: true,
            pagination: false,
            navigation: false,
            autoPlay: true,
        });

    }());

    (function () {
        $('.st-counter').counterUp({
            delay: 10,
            time: 1500
        });
    }());
});