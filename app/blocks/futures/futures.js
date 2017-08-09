const changeRadio = () => {
    // удаляем класс
    $('.radio__hide').next('span').removeClass('radio__fake--cheked');
    // выбранной кпопке добавляем класс
    $('input[name=futures]:checked').next('span').addClass('radio__fake--cheked');
    // $('.check__hide').prop('checked').addClass('.checkbox__fake--cheked')


};
const radioButtons = document.querySelectorAll('.radio__hide');
console.log(radioButtons);
/* if (localStorage.getItem('radioButtons')) {
    for (let i = 0; i < length.radioButtons; i++{
            /*radioButtons[i] = localStorage.getItem('radioButtons'); */
// }
// }
/*
    else {
        for (let i = 0; i < length.radioButtons; i++) {
            localStorage.setItem('radioButtons') = radioButtons[i];
        }
    }
}*/




// выбранной кпопке добавляем класс
$('input[name=futures]:checked').next('span').addClass('radio__fake--cheked');

// нажатие на кнопку
$('.radio__hide').on('click', function() {
    changeRadio();
});