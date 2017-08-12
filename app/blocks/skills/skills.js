/* javascript skill*/
import $ from 'jquery';

$(function() {
    const values = [0, 19.5, 49, 100];

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
        max: 100,
        value: values[2],

        slide: (event, ui) => {

            const includeLeft = event.keyCode !== $.ui.keyCode.RIGHT;
            const includeRight = event.keyCode !== $.ui.keyCode.LEFT;
            const value = findNearest(includeLeft, includeRight, ui.value);

            slider.slider('value', value);

            $('#inputskill').val(slider.slider('value'));

            return false;
        }
    });
    //  }



});