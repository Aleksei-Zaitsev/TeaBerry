$( document ).ready(function() {
    //Адаптив меню
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    };
    document.querySelectorAll('#menu > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        };
    }) ;
    console.log('1');
    // Строчки под изогнутой дугой
    const upperWords1 = new CircleType(document.getElementById('upper-word1'));
    upperWords1.radius(90).dir(1);
    const lowerWord1 = new CircleType(document.getElementById('lower-word1'));
    lowerWord1.radius(90).dir(-1);
    const upperWords2 = new CircleType(document.getElementById('upper-word2'));
    upperWords2.radius(90).dir(1);
    const lowerWord2 = new CircleType(document.getElementById('lower-word2'));
    lowerWord2.radius(90).dir(-1);
    const upperWords3 = new CircleType(document.getElementById('upper-word3'));
    upperWords3.radius(90).dir(1);
    const lowerWord3 = new CircleType(document.getElementById('lower-word3'));
    lowerWord3.radius(90).dir(-1);
    const upperWords4 = new CircleType(document.getElementById('upper-word4'));
    upperWords4.radius(90).dir(1);
    const lowerWord4 = new CircleType(document.getElementById('lower-word4'));
    lowerWord4.radius(90).dir(-1);

    const getDiscountBg = document.getElementById("fourth-fith-block");

    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        getDiscountBg.style.backgroundPositionY = offset * 0.16 + "px";
    })
    const parallax = document.getElementById("second-third-block");

    //Паралакс фона блока features и about
    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.17 + "px";
    })
    //Категории товаров
    $('.category').click((e) => {
        let currentElem = $(e.target);
        $('.products-container').hide();
        let id = currentElem.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElem.addClass('active');

        $('#' + id).slick('refresh');

    });
    // Слайдер по товарам
    $('#exclusive-tea-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        accessibility: true
    });
    $('#black-tea-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        accessibility: true
    });
    $('#white-tea-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        accessibility: true
    });
    $('#ulun-tea-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        accessibility: true
    });
    $('#green-tea-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        accessibility: true
    });
    // блок с ховером по tea-properties
    let teaImage = $('#tea-properties-main-img');
    $('.left-properties-item').hover( function() {
        teaImage.css('transform', 'scale(1.1)');
        teaImage.css('box-shadow', '0 0 60px 1px rgba(128, 165, 6, 0.45)');
    },  function() {
        teaImage.css('transform', 'scale(1)');
        teaImage.css('box-shadow', '0 0 60px 1px rgba(128, 165, 6, 0.34)');
    })
    $('.right-properties-item').hover( function() {
        teaImage.css('transform', 'scale(1.1)');
        teaImage.css('box-shadow', '0 0 60px 1px rgba(128, 165, 6, 0.45)');
    },  function() {
        teaImage.css('transform', 'scale(1)');
        teaImage.css('box-shadow', '0 0 60px 1px rgba(128, 165, 6, 0.34)');
    });

    // Кнопки заказа
    $('.open-modal').click(() => {
        $('#order-content').css('display', 'flex');
    });

    $('#order-cancel-close, #order-content').click((e) => {
        if (e.target.id === 'order-cancel-close' || e.target.id === 'order-content') {
            $('#order-content').css('display', 'none');
        }
    });

    //Select
    $('.new-select')



    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 100; // длительность анимации

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $('.new-select').css('border-bottom-left-radius', '0');
                $('.new-select').css('border-bottom-right-radius', '0');
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {

                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $('.new-select').removeClass('on');
                $('.new-select').css('border-bottom-left-radius', '24px');
                $('.new-select').css('border-bottom-right-radius', '24px');

                selectList.slideUp(duration);
            }
        });
    });
    $('.new-select').on('click', function() {
        $('.new-select').removeClass('select-zero')
    });

     $('.new-select__item span').on('click', function() {
         $('.new-select').css('border-bottom-left-radius', '24px');
         $('.new-select').css('border-bottom-right-radius', '24px');
     });


     // Валидация

    let loader = $('#loader');
    $('#make-order-btn').click(function () {
        let hasError = false;
        $('.error-type').css('display', 'none');

        let name = $('#name');
        name.css('borderColor', 'rgb(143, 188, 98)');
        name.css('boxShadow', '0 0 0 0 white');
        let count = $('#count');
        count.css('borderColor', 'rgb(143, 188, 98)');
        count.css('boxShadow', '0 0 0 0 white');
        let phone = $('#number');
        phone.css('borderColor', 'rgb(143, 188, 98)');
        phone.css('boxShadow', '0 0 0 0 white');
        let select = $('#select');
        select.css('borderColor', 'rgb(143, 188, 98)');
        select.css('boxShadow', '0 0 0 0 white');

        if (!name.val()) {
            name.siblings('.error-type').css('display', 'block');
            name.css('borderColor', 'rgba(187,22,47)')
            name.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.45)')
            hasError = true;
        }

        if (name.val()) {

            name.css('borderColor', 'rgb(22,187,30)')
            name.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.45)')

        }

        if (!count.val()) {
            count.siblings('.error-type').css('display', 'block');
            count.css('borderColor', 'rgba(187,22,47)')
            count.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.45)')
            hasError = true;
        }

        if (count.val()) {
            count.css('borderColor', 'rgb(22,187,30)')
            count.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.45)')
        }

        if (!phone.val()) {
            phone.siblings('.error-type').css('display', 'block');
            phone.css('borderColor', 'rgba(187,22,47)')
            phone.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.45)')
            hasError = true;
        }

        if (phone.val()) {
            phone.css('borderColor', 'rgb(22,187,30)')
            phone.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.45)')
        }
        if (!select.val()) {
            select.siblings('.error-type').css('display', 'block');
            select.css('borderColor', 'rgba(187,22,47)')
            select.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.45)')
            hasError = true;
        }

        if (select.val()) {
            select.css('borderColor', 'rgb(22,187,30)')
            select.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.45)')
        }

        if (hasError) {
            return;
        }

        // let http = new XMLHttpRequest();
        // http.open('GET', url);
        // http.send();
        //
        // http.onreadystatechange = function () {
        //     if (http.readyState === 4 && http.status === 200) {
        //         let result = JSON.parse(http.responseText);
        //         if (result) {
        //
        //         } else  {
        //
        //         }
        //     }
        // }

        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: 'https://itlogia.ru/test/checkout',
            data: {name: name.val(), address: address.val(), phone: phone.val()}
        })
            .done(function (message) {
                loader.hide();
                if (message.success) {
                    $('#order-form').hide();
                    $('#replace-container').show();

                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    })
    //  Адаптив видео
    function checkWidth() {
        var windowWidth = $('body').innerWidth()
        if (windowWidth < 767) {
          $('iframe').css('width', '400px');
          $('iframe').css('height', '250px');
        };
        if (windowWidth < 480) {
          $('iframe').css('width', '290px');
          $('iframe').css('height', '170px');
        };  if (windowWidth < 340) {
          $('iframe').css('width', '240px');
          $('iframe').css('height', '120px');
        };

    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function(){
        checkWidth(); // проверит при изменении размера окна клиента
    });



    //Медленный скрол к элементам по ссылкам
    $(".products-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#products").offset().top
        }, 2000);
    });
    $("#video-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#video-review").offset().top
        }, 2000);
    });
    $("#get-discount-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#get-discount").offset().top
        }, 2000);
    });
    $("#tea-properties-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#tea-properties").offset().top
        }, 2000);
    });
    $("#footer-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });
    $("#footer-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });

    //Убираем анимацию при адаптиве
});