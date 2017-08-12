/* Расскажите о себе чекбоксами */
import $ from 'jquery';


const changeCheck = () => {
    $('.check__hide').next('span').removeClass('checkbox__fake--cheked');
    $('input:checked').next('span').addClass('checkbox__fake--cheked');
};

$('input:checked').next('span').addClass('checkbox__fake--cheked');

$('.check__hide').on('click', function() {
    changeCheck();
});


const linkCSSSR = $('.checkbox__text');

for (let i = 0; i < linkCSSSR.length; i++) {
    if (linkCSSSR[i].innerHTML === 'Читаю blog.csssr.ru') {
        linkCSSSR[i].innerHTML = 'Читаю <a class="csssr__link" href="http://blog.csssr.ru" target="_blank">blog.csssr.ru<a>';
    }
}