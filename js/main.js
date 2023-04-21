$(function () {




    $('.main').fullpage({

        anchors: [
            'main',
            'portfolio01',
            'portfolio02',
            'portfolio03',
            'portfolio04',
            'profile'
        ],
        onLeave: function (origin, destination, direction, trigger) {
            console.log(destination.index);
            $('.gnb li')
                .eq(destination.index)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.section')
                .eq(destination.index)
                .addClass('on');
        },
    });


































    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
        $('.header').toggleClass('on');
    });












})