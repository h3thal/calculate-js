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
function resultCalc(str) {
    // const findMath = new RegExp('/(\d+)\s?(\+|\-|\*|\/)/g');
    return str.toString().match(/(\d+)\s?(\+|\-|\*|\/)?/g)
}
// создать свою функцию eval с помощью регулярки
var teststr = '52432+4324+4324-3424';
var regul = new RegExp("(\\d+)(\\+|\\-|\\*|\\\\)?", "g");
// var regul = /(\d+)(\+|\-|\*|\\)?/g;
while (result = regul.exec(teststr)) {
    console.log( `Найдено ${result[0]} на позиции ${result.index}` );
    // Найдено JavaScript на позиции 9, затем
    // Найдено javascript на позиции 31
  }
  while (result = regul.exec(teststr)) {
    console.log( `Найдено ${result[0]} на позиции ${result.index}` );
    // Найдено JavaScript на позиции 9, затем
    // Найдено javascript на позиции 31
  }

new Calculate();
