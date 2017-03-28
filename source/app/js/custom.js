(function (window, document) {
    'use strict';

    var yearTabs = document.querySelectorAll('.years-tab');
    var compDetails = document.querySelectorAll('.comp-detail');

    function deativeItems(items) {
        items.forEach(function (item) {
            return item.classList.remove('active');
        });
    }

    function ativeItems(items) {
        items.forEach(function (item) {
            return item.classList.add('active');
        });
    }

    function handleEvent() {
        var selectedYear = this.dataset.year;
        deativeItems(yearTabs);
        deativeItems(compDetails);
        ativeItems(document.querySelectorAll('.years-tab[data-year="' + selectedYear + '"]'));
        ativeItems(document.querySelectorAll('.comp-detail[data-year="' + selectedYear + '"]'));
    }

    yearTabs.forEach(function (item) {
        return item.addEventListener('click', handleEvent);
    });

}(window, document, undefined));
