import $ from 'jquery';


const changeCheck = () => {
    $('.check__hide').next('span').removeClass('checkbox__fake--cheked');
    $('input:checked').next('span').addClass('checkbox__fake--cheked');



};

(function(b) {
    const e = document.querySelectorAll(b);
    let a = localStorage.getItem(b);
    a = (a = JSON.parse(a)) || (a = {}, localStorage.setItem(b, JSON.stringify(a)));
    [].forEach.call(e, function(c, d) {
        void 0 !== a[d] && (c.checked = a[d]);
        c.addEventListener('change', function() {
            a[d] = c.checked;
            localStorage.setItem(b, JSON.stringify(a));
        });
    });
})('.check__hide');

const linkCSSSR = $('.checkbox__text');
console.log(linkCSSSR.length);
for (let i = 0; i < linkCSSSR.length; i++) {
    console.log(linkCSSSR[i].innerHTML);
    if (linkCSSSR[i].innerHTML === 'Читаю blog.csssr.ru') {
        linkCSSSR[i].innerHTML = 'Читаю <a class="csssr__link" href="http://blog.csssr.ru" target="_blank">blog.csssr.ru<a>';
    }
}

$('input:checked').next('span').addClass('checkbox__fake--cheked');
$('.check__hide').on('click', function() {

    changeCheck();
});