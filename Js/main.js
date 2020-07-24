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
                $('.select-selected').css('border-bottom-left-radius', '0');
                $('.select-selected').css('border-bottom-right-radius', '0');
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

     // Валидация и отправка промокода на почту клиента

    $('#get-discount-form-action').click(function () {
        let hasErr = false;
        $('.error-type').css('display', 'none');

        let clientemail = $('#get-discount-form-input > input');
        clientemail.css('borderColor', 'rgb(143, 188, 98)');
        clientemail.css('boxShadow', '0 0 0 0 white');

        if (clientemail.val()) {
            $.ajax({
                type: 'post',
                url: 'mail-promocode.php',
                data: 'clientemail=' + clientemail.val(),
                success: () => {
                    $('#get-discount-done').show();
                    $('#get-discount-form-input').hide();
                    $('#get-discount-form-action').hide();
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            })
        } else {
            if (!clientemail.val()) {
                clientemail.siblings('.error-type').css('display', 'block');
                clientemail.css('borderColor', 'rgba(187,22,47)')
                clientemail.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.25)')
                hasErr = true;
            }
            if (clientemail.val()) {

                clientemail.css('borderColor', 'rgb(22,187,30)')
                clientemail.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.25)')

            }
            if (hasErr) {
                return;
            }
        }
    })
     // Валидация об отправке заказа на почту владельца сайта

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



        if (name.val() && count.val() && select.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&select=' + select.val(),
                success: () => {
                    $('#order-done').show();
                    $('#order-make').hide();
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            })
        } else {
            if (!name.val()) {
                name.siblings('.error-type').css('display', 'block');
                name.css('borderColor', 'rgba(187,22,47)')
                name.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.25)')
                hasError = true;
            }

            if (name.val()) {

                name.css('borderColor', 'rgb(22,187,30)')
                name.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.25)')

            }

            if (!count.val()) {
                count.siblings('.error-type').css('display', 'block');
                count.css('borderColor', 'rgba(187,22,47)')
                count.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.25)')
                hasError = true;
            }

            if (count.val()) {
                count.css('borderColor', 'rgb(22,187,30)')
                count.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.25)')
            }

            if (!phone.val()) {
                phone.siblings('.error-type').css('display', 'block');
                phone.css('borderColor', 'rgba(187,22,47)')
                phone.css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.25)')
                hasError = true;
            }

            if (phone.val()) {
                phone.css('borderColor', 'rgb(22,187,30)')
                phone.css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.25)')
            }
            if (!select.val()) {
                select.siblings('.error-type').css('display', 'block');
                $('.select-selected').css('borderColor', 'rgba(187,22,47)')
                $('.select-selected').css('boxShadow', '0 0 3px 3px rgb(187,22,47,0.25)')
                hasError = true;
            }

            if (select.val()) {
                $('.select-selected').css('borderColor', 'rgb(22,187,30)')
                $('.select-selected').css('boxShadow', '0 0 3px 3px rgb(22,187,30,0.25)')
            }

            if (hasError) {
                return;
            }
        }



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

    //Select new version

    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {

                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
                $('.select-selected').css('border-bottom-left-radius', '24px');
                $('.select-selected').css('border-bottom-right-radius', '24px');
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            $('.select-selected').css('border-bottom-left-radius', '0px');
            $('.select-selected').css('border-bottom-right-radius', '0px');
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        $('.select-selected').css('border-bottom-left-radius', '24px');
        $('.select-selected').css('border-bottom-right-radius',  '24px');
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];

        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)

            } else {

                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);

    // arrow-up
    let arrowUp = $('#arrow-up svg');
    arrowUp.click(() => {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 2000);
    })
});