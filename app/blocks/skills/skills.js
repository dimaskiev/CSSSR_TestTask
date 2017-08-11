import $ from 'jquery';

$(function() {
    const values = [0, 18.485, 47.2, 98.5];

    function findNearest(includeLeft, includeRight, value) {
        let nearest = null;
        let diff = null;
        for (let i = 0; i < values.length; i++) {
            if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
                const newDiff = Math.abs(value - values[i]);
                if (diff === null || newDiff < diff) {
                    nearest = values[i];
                    diff = newDiff;
                }
            }
        }
        return nearest;
    }

    const slider = $('.slider').slider({
        orientation: 'horizontal',
        min: values[0],
        max: values[values.length - 1],
        value: values[0],

        slide: (event, ui) => {
            const includeLeft = event.keyCode !== $.ui.keyCode.RIGHT;
            const includeRight = event.keyCode !== $.ui.keyCode.LEFT;
            const value = findNearest(includeLeft, includeRight, ui.value);
            slider.slider('value', value);

            /* $("#amount").val('$' + slider.slider('value'));  */
            return false;
        }
    });



    /* $("#amount").val('$' + slider.slider('value'));*/
});