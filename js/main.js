$(document).ready(function () {
    let tabsItem = $('.tabs_item');
    tabsItem.on('click', function(event) {
        event.preventDefault();//Отмена действия по умолчанию
        let activeContent =  $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs_item_active').toggleClass('tabs_item_active');
        $(this).toggleClass('tabs_item_active');
    })
});