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
    const findMath = new RegExp("(\\d+)(\\+|\\-|\\*|\\\\)?", "g");
    var arrMatch = [...str.matchAll(findMath)];
    for (let i = 0; arrMatch.length > 1; i++) {
        console.log(i);
        if ( i >= arrMatch.length - 1) 
            i = 0;
        if ( arrMatch[i][1] != undefined ) {
            switch (arrMatch[i][1]) {
                
                case '+':
                    arrMatch[i+1][0] = arrMatch[i][0] + arrMatch[i+1][0];
                    arrMatch.splice(i,1);
                    break;
                case '-':

                    break;
            }
        }
    }
    return arrMatch.length
}
// создать свою функцию eval с помощью регулярки
var str = '52432+4324+4324+3424';
console.log();
// var regul = /(\d+)(\+|\-|\*|\\)?/g;
// while (result = regul.exec(teststr)) {
//     console.log( `Найдено ${result[0]} на позиции ${result.index}` );
//     // Найдено JavaScript на позиции 9, затем
//     // Найдено javascript на позиции 31
//   }



new Calculate();
