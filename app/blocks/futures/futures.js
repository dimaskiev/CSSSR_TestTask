/* Планы на будущее */

import $ from 'jquery';

const changeRadio = () => {
    // удаляем класс
    $('.radio__hide').next('span').removeClass('radio__fake--cheked');
    // выбранной кпопке добавляем класс
    $('input[name=futures]:checked').next('span').addClass('radio__fake--cheked');


};


// выбранной кпопке добавляем класс
$('input[name=futures]:checked').next('span').addClass('radio__fake--cheked');

// нажатие на кнопку
$('.radio__hide').on('click', function() {
    changeRadio();
});