$(function () {
    //робить текст жирним    
    $('.bold').click(function () {
        if ($('.textBox').css('font-weight') == '400') {
            $('.textBox').css('font-weight', 'bold')
        } else if ($('.textBox').css('font-weight') == '700') {
            $('.textBox').css('font-weight', 'normal')
        }
    })
    //робить текст курсивним
    $('.italic').click(function () {
        if ($('.textBox').css('font-style') == 'normal') {
            $('.textBox').css('font-style', 'italic')
        } else if ($('.textBox').css('font-style') == 'italic') {
            $('.textBox').css('font-style', 'normal')
        }
    })
    // підкреслює текст
    $('.underline').click(function () {
        if ($('.textBox').css('text-decoration-line') == 'none') {
            $('.textBox').css('text-decoration-line', 'underline')
        } else if ($('.textBox').css('text-decoration-line') == 'underline') {
            $('.textBox').css('text-decoration-line', 'none')
        } else if ($('.textBox').css('text-decoration-line') == 'line-through') {
            $('.textBox').css('text-decoration-line', 'underline')
        }
    })
    // закреслює текст
    $('.lineThrough').click(function () {
        if ($('.textBox').css('text-decoration-line') == 'line-through') {
            $('.textBox').css('text-decoration-line', 'none')
        } else if ($('.textBox').css('text-decoration-line') == 'none') {
            $('.textBox').css('text-decoration-line', 'line-through')
        } else if ($('.textBox').css('text-decoration-line') == 'underline') {
            $('.textBox').css('text-decoration-line', 'line-through')
        }
    })
    // три кнопки положення тексту: з ліва, по центру, з права
    $('.alignLeft').click(function () {
        $('.textBox').css('text-align', 'start')
    })

    $('.alignCenter').click(function () {
        $('.textBox').css('text-align', 'center')
    })

    $('.alignRight').click(function () {
        $('.textBox').css('text-align', 'right')
    })
    //встановив шрифт в випадаючому блоці відповідно до витягнутого шрифту. і при кліку на нього встановлює цей шрифт 
    for (let i = 0; i < $('.dropdownFont').children('a').length; i++) {
        $('.dropdownFont').children('a').eq(i).css('font-family', ($('.dropdownFont').children('a').eq(i).text()))
        $('.dropdownFont').children('a').eq(i).click(function () {
            $('.textBox').css('font-family', ($('.dropdownFont').children('a').eq(i).text()))
        })
    }
    //встановив розмір шрифту в випадаючому блоці відповідно до витягнутого значення. і при кліку на нього встановлює розмір шрифту 
    for (let i = 0; i < $('.dropdownSize').children('a').length; i++) {
        $('.dropdownSize').children('a').eq(i).css('font-size', ($('.dropdownSize').children('a').eq(i).text()))
        $('.dropdownSize').children('a').eq(i).click(function () {
            $('.textBox').css('font-size', ($('.dropdownSize').children('a').eq(i).text()))
        })
    }
    //масив кольорів
    const colors = ['rgb(10,168,152)', 'rgb(10,143,130)', 'rgb(31,181,108)', 'rgb(26,155,93)', 'rgb(10,143,130)', 'rgb(40,144,220)', 'rgb(31, 121, 185)', 'rgb(155,99,183)', 'rgb(144,81,173)', 'rgb(50,71,94)', 'rgb(40,61,79)', 'rgb(244,188,5)', 'rgb(248,154,9)', 'rgb(237,130,27)', 'rgb(219,91,0)', 'rgb(241,90,56)', 'rgb(234,238,239)', 'rgb(186,193,196)', 'rgb(144,162,162)', 'rgb(124,137,139)', 'rgb(0,0,0)'];
    //масив картинок
    const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg', 'images/img7.jpg', 'images/img8.jpg', 'images/img9.jpg']

    //добавляє квадрати з кольорами, вішає на них клік. встановлює колір шрифту
    for (let i = 0; i < colors.length; i++) {
        $('.colorsTxt').append('<div class="colTxt"></div>')
        $('.colTxt').eq(i).css('background-color', `${colors[i]}`)
        $('.colTxt').eq(i).click(function () {
            $('.textBox').css('color', ($('.colTxt').eq(i).css('background-color'))).css('text-decoration-color', ($('.colTxt').eq(i).css('background-color')))
        })
    }
    //добавляє квадрати з кольорами, вішає на них клік. встановлює колір на фон
    for (let i = 0; i < colors.length; i++) {
        $('.colorsBack').append('<div class="colBack"></div>')
        $('.colBack').eq(i).css('background-color', `${colors[i]}`)
        $('.colBack').eq(i).click(function () {
            $('.textBox').css('background-image', 'none')
            $('.textBox').css('background-color', ($('.colBack').eq(i).css('background-color')))
        })
    }
    //добавляє картинки, вішає на них клік. встановлює картинку на фон
    for (let i = 0; i < images.length; i++) {
        $('.backgroundImg').append('<div class="image"></div>')
        $('.image').eq(i).css('background-image', `url(${images[i]})`)
        $('.image').eq(i).click(function () {
            $('.textBox').css('background-image', ($('.image').eq(i).css('background-image')))
        })
    }
    // витягує 
    const input = document.querySelector('.custom-file-input');
    input.addEventListener('change', function (e) {
        const reader = new FileReader()
        reader.onload = function () {
            document.querySelector('.textBox').style.backgroundImage = `url(${reader.result})`
        }
        reader.readAsDataURL(input.files[0])
    }, false)
    // кнопка відкриває модальне вікно в якому є інпути 
    $('.signIn').click(function () {
        if ($('.signInLog').val() == "" && $('.signInPass').val() == "") {
            $('.signInLog').addClass('is-invalid');
            $('.signInPass').addClass('is-invalid');
            $('.feedback-txt').text('Value is empty').removeClass('d-none');
        } else if ($('.signInLog').val().toLowerCase() == "admin" && $('.signInPass').val().toLowerCase() == "admin") {
            $('.feedback-txt').addClass('d-none');
            $('.butCode').prop('disabled', false);
            $('.signIn').attr('data-dismiss', 'modal');
            $('.signInLog').removeClass('is-invalid').val('');
            $('.signInPass').removeClass('is-invalid').val('');
            $('.butLock').attr('data-target', '#staticBackdropSignOut');
            $('.butLock>i').removeClass('fa-lock').addClass('fa-unlock');
        } else {
            $('.signInLog').addClass('is-invalid');
            $('.signInPass').addClass('is-invalid');
            $('.feedback-txt').text('Please check your loginor password').removeClass('d-none');
        }
    })
    // кнопка відкриває модальне вікно в якому є вихід з профілю
    $('.signOut').click(function () {
        $('.butCode').prop('disabled', true);
        $('.butLock').attr('data-target', '#staticBackdropSignIn');
        $('.butLock>i').removeClass('fa-unlock').addClass('fa-lock');
    })

    $('.butCode').click(function () {
        $('.textBox').addClass('d-none');
        $('.firstToolbar').addClass('d-none');
        $('.area').removeClass('d-none');
        $('.secondToolbar').removeClass('d-none');
        $('.area').val(`${$('.textBox').html()}`)
    })

    // при нажиманні на кнопку код попадає в div, друга сторінка міняється на першу 
    $('.butSave').click(function () {
        $('.textBox').html(`${$('.area').val()}`)
        $('.textBox').removeClass('d-none');
        $('.firstToolbar').removeClass('d-none');
        $('.area').addClass('d-none');
        $('.secondToolbar').addClass('d-none');
    })
    //змінні потрібні для подальшого використання у блоці таблиці
    let inpCheck = 0;
    let selCheck = 0;
    //функція створює таблицю відносно введених даних в інпути і додає таблицю кодом в area
    $('.SaveCreateTable').click(function () {
        checkInputTable()
        const countTr = $('.countTR').val();
        const countTd = $('.countTD').val();
        let table = `<table style="border:${borderWidth()}px ${borderStyle()} ${borderColor()}"cellspacing='0'>`
        for (let i = 1; i <= countTr; i++) {
            table += `<tr>`;
            for (let j = 1; j <= countTd; j++) {
                table += `<td style="width:${tdWidth()}px;height:${tdHeight()}px;border:${borderWidth()}px ${borderStyle()} ${borderColor()}">TD</td>`;
            }
            table += `</tr>`;
        }
        table += `</table>`;
        if (inpCheck >= 5 && selCheck >= 2) {
            $('.area').val($('.area').val() + ` ${table}`)
        }
    });

    //функції витягують значення для всавки у функцію вище - createTable
    let tdWidth = () => $('.widthTD').val();
    let tdHeight = () => $('.heightTD').val();
    let borderWidth = () => {
        if ($('.widthBorder').val() == '') {
            return 1
        } else {
            return $('.widthBorder').val()
        }
    };
    let borderStyle = () => $('.styleBorder').val();
    let borderColor = () => $('.colorBorder').val();


    //перевірка інпутів в блоці таблиці, вона перевіряє і добавляє попередження.
    let checkInputTable = () => {
        for (let i = 0; i < $('.createTable input').length; i++) {
            if ($('.createTable input').eq(i).val() !== '') {
                $('.createTable input').eq(i).removeClass('is-invalid')
                inpCheck++;
            } else {
                $('.createTable input').eq(i).addClass('is-invalid')
                inpCheck = 0
            }
        }
        for (let i = 0; i < $('.createTable select').length; i++) {
            if ($('.createTable select').eq(i).val() !== null) {
                $('.createTable select').eq(i).css('border-color', '#ced4da')
                selCheck++
            } else {
                $('.createTable select').eq(i).css('border-color', '#dc3545')
                selCheck = 0
            }
        }
        if (inpCheck < 5 || selCheck < 2) {
            $('.txtInvalidTable').addClass('d-block')
        } else {
            $('.txtInvalidTable').removeClass('d-block')
        }
    }

    // перевірка на те щоб в інпути створення таблиці вводились тільки цифри
    for (let i = 0; i < $('.createTable input').length; i++) {
        $('.createTable input').eq(i).keydown(function (e) {
            return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
        })
    }

    //скидання вмістимості інпутів в блоці створення таблиці і знімає всі стилі при неправильному введенні
    $('.resetInputTable').click(function () {
        for (let i = 0; i < $('.createTable input').length; i++) {
            $('.createTable input').eq(i).val('')
            $('.createTable input').eq(i).removeClass('is-invalid')
        }
        $('.createTable select').eq(0).val('choose style')
        $('.createTable select').eq(1).val('choose color')
        for (let i = 0; i < $('.createTable select').length; i++) {
            $('.createTable select').eq(i).css('border-color', '#ced4da')
        }
        $('.txtInvalidTable').removeClass('d-block')
        inpCheck = 0;
        selCheck = 0;
    })



    //змінні потрібні для створення списку Ol
    let inpOlCheck = 0;
    let selOlCheck = 0;

    // створення списку Ol
    $('.butcreateOlList').click(function () {
        checkInputOlList()
        const countLi = $('.countOlLi').val()
        let list = `<ol style="list-style-type:${listOlMark()}">`
        for (let i = 1; i <= countLi; i++) {
            list += `<li>List${i}</li>`;
        }
        list += `</ol>`
        if (inpOlCheck >= 1 && selOlCheck >= 1) {
            $('.area').val($('.area').val() + ` ${list}`)
        }
    })

    //витягує значення з інпута для подального використання вище
    let listOlMark = () => $('.changeOlMark').val();

    //перевірка інпута і селекта, чи пусті
    let checkInputOlList = () => {
        if ($('.createOlList input').val() !== '') {
            $('.createOlList input').removeClass('is-invalid')
            inpOlCheck++;
        } else {
            $('.createOlList input').addClass('is-invalid')
            inpOlCheck = 0
        }
        if ($('.createOlList select').val() !== null) {
            $('.createOlList select').css('border-color', '#ced4da')
            selOlCheck++
        } else {
            $('.createOlList select').css('border-color', '#dc3545')
            selOlCheck = 0
        }
        if (!inpOlCheck || !selOlCheck) {
            $('.txtInvalidOlList').addClass('d-block')
        } else {
            $('.txtInvalidOlList').removeClass('d-block')
        }
    }

    // перевірка на те щоб в інпути створення списку вводились тільки цифри
    for (let i = 0; i < $('.createOlList input').length; i++) {
        $('.createOlList input').eq(i).keydown(function (e) {
            return !(/^\D$/.test(e.key));
        })
    }

    //скидання вмістимості інпутів в блоці створення списку і знімає усі стилі з інпутів
    $('.resetInputOlList').click(function () {
        $('.createOlList input').val('')
        $('.createOlList select').val('choose Ol type mark')
        $('.createOlList select').css('border-color', '#ced4da')
        $('.createOlList input').removeClass('is-invalid')
        $('.txtInvalidOlList').removeClass('d-block')
        selOlCheck = 0
        inpOlCheck = 0
    })




    // змінні потрібні для створення списку Ul
    let inpUlCheck = 0;
    let selUlCheck = 0;

    // створення списку Ol
    $('.butcreateUlList').click(function () {
        checkInputUlList()
        const countLi = $('.countUlLi').val()
        let list = `<ul style="list-style-type:${listUlMark()}">`
        for (let i = 1; i <= countLi; i++) {
            list += `<li>List${i}</li>`;
        }
        list += `</ul>`
        if (inpUlCheck >= 1 && selUlCheck >= 1) {
            $('.area').val($('.area').val() + ` ${list}`)
        }
    })
    //витягує значення з інпута для подального використання вище
    let listUlMark = () => $('.changeUlMark').val();


    //перевірка інпута і селекта, чи пусті
    let checkInputUlList = () => {
        if ($('.createUlList input').val() !== '') {
            $('.createUlList input').removeClass('is-invalid')
            inpUlCheck++;
        } else {
            $('.createUlList input').addClass('is-invalid')
            inpUlCheck = 0
        }
        if ($('.createUlList select').val() !== null) {
            $('.createUlList select').css('border-color', '#ced4da')
            selUlCheck++
        } else {
            $('.createUlList select').css('border-color', '#dc3545')
            selUlCheck = 0
        }
        if (!inpUlCheck || !selUlCheck) {
            $('.txtInvalidUlList').addClass('d-block')
        } else {
            $('.txtInvalidUlList').removeClass('d-block')
        }
    }
    // перевірка на те щоб в інпути створення списку вводились тільки цифри
    for (let i = 0; i < $('.createUlList input').length; i++) {
        $('.createUlList input').eq(i).keydown(function (e) {
            return !(/^\D$/.test(e.key));
        })
    }
    //скидання вмістимості інпутів в блоці створення списку і знімає усі стилі з інпутів
    $('.resetInputUlList').click(function () {
        $('.createUlList input').val('')
        $('.createUlList select').val('choose Ul type mark')
        $('.createUlList select').css('border-color', '#ced4da')
        $('.createUlList input').removeClass('is-invalid')
        $('.txtInvalidUlList').removeClass('d-block')
        selUlCheck = 0
        inpUlCheck = 0
    })

})