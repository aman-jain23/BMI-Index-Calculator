const form = document.querySelector('form');
const ranges = document.querySelectorAll('.range');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid Height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid Height ${weight}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `${bmi}`; 

        ranges.forEach(range => {
            range.style.color = '';
        });

        if(bmi <= 18.6){
            ranges[0].style.color = 'red';
        }else if (bmi > 18.6 && bmi < 24.9){
            ranges[1].style.color = 'red';
        }else if (bmi > 24.9){
            ranges[2].style.color = 'red';
        }
    }
});