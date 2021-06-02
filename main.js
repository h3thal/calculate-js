let arrMathOperation = ['+','-', '*', '/'];
let arrNumber = [...Array.from({length: 9}, (v, k) => k + 1 ), 0];
let arrNumbAndMath = [...arrMathOperation, ...arrNumber];
var arrObjectButton = [];
const template = `
    <div id='calc'>
        <input type='number'/>
    </div>
`;

class Calculate {
    constructor () {
        document.body.insertAdjacentHTML('beforeend', template);
        arrNumbAndMath.forEach(element => {
            new CalculateButton(element);
        });
    }
}

class CalculateButton {
    constructor (text) {
        this.text = text;
        let elem =  document.createElement('button');
        this.getElem = elem;
        elem.innerText = text;
        calc.append(elem);
        elem.addEventListener('click', () => {
            console.log(this.text);
        });
        arrObjectButton.push(this);
    }
}

// создать свою функцию eval с помощью регулярки

new Calculate();
