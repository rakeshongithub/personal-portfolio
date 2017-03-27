(function ($) {
    'use strict';
    var $yearTab = $('.years-tab');
    var $compDetail = $('.comp-detail');

    $yearTab.on('click', function(){
        var selectedYear = $(this).data('year');
        $yearTab.removeClass('active');
        $compDetail.removeClass('active');
        $('.years-tab[data-year="'+ selectedYear+'"]').addClass('active');
        $('.year-heading[data-year="'+ selectedYear+'"]').addClass('active');
        $('.comp-detail[data-year="'+ selectedYear+'"]').toggleClass('active');
    })

}(jQuery));
