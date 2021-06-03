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
    const findMath = new RegExp("(\\d+)(\\+|\\-|\\*|\\/)?", "g");
    const findPriorityMath = new RegExp("(\\*|\\/)");
    var arrMatch = [...str.matchAll(findMath)];
    var i = 0;
    console.log(findPriorityMath.test(str));
    next:for (let i = 0; arrMatch.length > 1; i++) {
        if ( i >= arrMatch.length - 1) 
            i = 0;
        if ( arrMatch[i][2] != undefined ) { 
            if ( findPriorityMath.test(str) ) { // Исправить str (Оно не изменяется)
                switch (arrMatch[i][2]) {
                    case '*':
                        console.log('умножаем');
                        arrMatch[i+1][1] = +arrMatch[i][1] * +arrMatch[i+1][1];
                        arrMatch.splice(i,1);
                        break;
                    case '/':
                        arrMatch[i+1][1] = +arrMatch[i][1] / +arrMatch[i+1][1];
                        arrMatch.splice(i,1);
                        break;
                }
            } else {
                switch (arrMatch[i][2]) {                
                    case '+':
                        console.log('складываем');
                        arrMatch[i+1][1] = +arrMatch[i][1] + +arrMatch[i+1][1];
                        arrMatch.splice(i,1);
                        break;
                    case '-':
                        arrMatch[i+1][1] = +arrMatch[i][1] - +arrMatch[i+1][1];
                        arrMatch.splice(i,1);
                        break;
                }
            }
        }
        
    }
    return arrMatch[0][1]
}
function test(str) {
    const findPriorityMath = new RegExp();
}
// создать свою функцию eval с помощью регулярки
var str = '2+2*2';
console.log();
// var regul = /(\d+)(\+|\-|\*|\\)?/g;
// while (result = regul.exec(teststr)) {
//     console.log( `Найдено ${result[0]} на позиции ${result.index}` );
//     // Найдено JavaScript на позиции 9, затем
//     // Найдено javascript на позиции 31
//   }



new Calculate();
