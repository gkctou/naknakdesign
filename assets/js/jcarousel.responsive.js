(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                //wrap: 'circular',
            });
        jcarousel.on('click', function() {
            $('.jcarousel').jcarousel('scroll', '+=1');
        });
        jcarousel.on('jcarousel:targetin', 'li', function() {
            showcursor($(this).index());
        });
        jcarousel.on('tap', function() {
            $('.jcarousel').jcarousel('scroll', '+=1');
        });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

    });
})(jQuery);
