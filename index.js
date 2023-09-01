import './streaming-client-api.js';

(() => {
    
    window.addEventListener('change', () => {
        var text_sample = document.getElementById('example-text');
        console.log(text_sample.value);
        window.text_sample = text_sample.value;
    })
})()