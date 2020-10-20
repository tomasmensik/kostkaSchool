const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const tlacitko = document.getElementById('tlacitko');
const table = document.querySelector('table');
let hod = 1;
let hody = [];

tlacitko.addEventListener('click', function(){
    hod = Math.ceil(Math.random() * 6);
    hody.push(hod);
    console.log(hody);
    kostka.src = 'img/dice' + hod + '.png';
    vypisStatistiky();
})

function suma(){
    let sum = 0;
    for (let i = 0; i < hody.length; i++){
        sum += hody[i];
    }
    return sum;
}

function max(){
    let maximum = 1;
    hody.forEach(function(value, index) {
        if (value > maximum){
            maximum = value;
        }
    })
    return maximum;
}

function min(){
    let minimum = 6;
    hody.forEach(function(value, index) {
        if (value < minimum){
            minimum = value;
        }
    })
    return minimum;
}

function active(){
    x = hody.length;
    y = x + 1;

    return y;
}

function vypisStatistiky() {
    let posledniHod = hod;
    let pocetHodu = hody.length;
    let soucetHodu = suma();
    let prumerHodu = (suma() / hody.length).toFixed(2);
    let maximumHodu = max();
    let minimumHodu = min();
    let sum = active();
                
    if(sum % 2 !== 0){
        let template = `                  
        <tr class="active-row">
            <td>${pocetHodu}</td>
            <td>${posledniHod}</td>
            <td>${soucetHodu}</td>
            <td>${prumerHodu}</td>
            <td>${maximumHodu}</td>
            <td>${minimumHodu}</td>
        </tr>
        `;

        table.innerHTML += template;
    }

    else if(sum % 2 === 0){
        let template = `                  
        <tr>
            <td>${pocetHodu}</td>
            <td>${posledniHod}</td>
            <td>${soucetHodu}</td>
            <td>${prumerHodu}</td>
            <td>${maximumHodu}</td>
            <td>${minimumHodu}</td>
        </tr>
        `;
        
        table.innerHTML += template;        
    }
}


(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(3000 + Math.random() * 5000);
    wheel.style.transition = 'all 8s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto'
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();


