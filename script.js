// inisialisasi element untuk slider berdasarkan id yang ada di html
const celciusSlider = document.getElementById("celcius"); 
 
//membuat slider
noUiSlider.create(celciusSlider, {
    range: { 
        'min': 0, 
        'max': 100 
    },
    start: 0, 
    step: 1, 
    tooltips: true, 
    // connect: [true,false], 
    orientation: 'vertical', 
    direction: 'rtl' 
});