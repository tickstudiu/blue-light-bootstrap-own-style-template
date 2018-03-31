$('window').ready(function () {
    var Profile_text = $('.el3');
    Profile_text.hide();

    function animation_Profile () {
        var cssSelector = anime.timeline();
        cssSelector.add({
            targets: '#cssSelector .el2',
            easing: 'easeOutExpo',
            translateX: [-1000, 0]
        }).add({
            targets: '#cssSelector .el',
            easing: 'easeOutExpo',
            translateX: [-1000, 0]
        });
    }

    function animation_Profile_text () {
        Profile_text.fadeIn(1000);
    }

    animation_Profile();
    animation_Profile_text();

});
