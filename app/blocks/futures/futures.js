import $ from 'jquery';

const changeRadio = () => {
    // удаляем класс
    $('.radio__hide').next('span').removeClass('radio__fake--cheked');
    // выбранной кпопке добавляем класс
    $('input[name=futures]:checked').next('span').addClass('radio__fake--cheked');
    // $('.check__hide').prop('checked').addClass('.checkbox__fake--cheked')


};
const futures = document.getElementsByName('futures');
for (let i = 0; i < futures.length; i++) {
    futures[i].onclick = function() {
        localStorage.setItem('futuresRadio', this.value);
    };
}
if (localStorage.getItem('futuresRadio')) {
    const futuresRadio = localStorage.getItem('futuresRadio');
    document.querySelector('input[name="futures"][value="' + futuresRadio + '"]').setAttribute('checked', 'checked');
}


// выбранной кпопке добавляем класс
$('input[name=futures]:checked').next('span').addClass('radio__fake--cheked');

// нажатие на кнопку
$('.radio__hide').on('click', function() {
    changeRadio();
});