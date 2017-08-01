const changeCheck = () => {
    $(".check__hide").next('span').removeClass('checkbox__fake--cheked')
    $("input:checked").next('span').addClass('checkbox__fake--cheked')
        // $(".check__hide").prop("checked").addClass(".checkbox__fake--cheked")


};


$("input:checked").next('span').addClass('checkbox__fake--cheked')
$('.check__hide').on('click', function() {

    changeCheck();
});