$(function () {
    let img = $('img[name="imgSlider"]');
    let thumbs = $('.thumbs-slider li');
    thumbs.click(function () {
        thumbs.removeClass('active');
        $(this).addClass('active');
        img.attr('src', $(this).find('img').attr('src'));
    });
    $('.btn-right').click(function () {
        if ($('.thumbs-slider li:last-child').hasClass('active')) {
            $('.thumbs-slider li:first-child').click();
        } else {
            $('.thumbs-slider li.active').next().click();
        }
    });
    $('.btn-left').click(function () {
        if ($('.thumbs-slider li:first-child').hasClass('active')) {
            $('.thumbs-slider li:last-child').click();
        } else {
            $('.thumbs-slider li.active').prev().click();
        }
    });
    // $('.thumbs-slider li').eq(1).click(); //cách 1
    $('.thumbs-slider li:first-child').click(); //cách 2
})