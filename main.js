let arrMathOperation = ['+','-', '*', '/'];
let arrNumber = [...Array.from({length: 9}, (v, k) => k + 1 ), 0];
let arrNumbAndMath = [...arrMathOperation, ...arrNumber];
var arrObjectButton = [];
const template = `
    <div id='calc'>
        <input id='calcWindow' type='text'/>
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
            calcWindow.value += text.toString();
        });
        arrObjectButton.push(this);
    }
}
function resultCalc(str) {
    const findMath = new RegExp("(\\d+)(\\+|\\-|\\*|\\/)?", "g");
    const findPriorityMath = new RegExp("(\\*|\\/)");
    var arrMatch = [...str.matchAll(findMath)];
    if ( findPriorityMath.test(str) ) {
        for (let i = 0; i < arrMatch.length - 1; i++) {
            if ( arrMatch[i][2] != undefined ) { 
                switch (arrMatch[i][2]) {
                    case '*':
                        arrMatch[i+1][1] = +arrMatch[i+1][1] * +arrMatch[i][1];
                        arrMatch.splice(i,1);
                        break;
                    case '/':
                        arrMatch[i+1][1] = +arrMatch[i+1][1] / +arrMatch[i][1];
                        arrMatch.splice(i,1);
                        break;
                }
            }
        }
    } 
    for (let i = 0; arrMatch.length > 1; i++) {
        if ( i >= arrMatch.length - 1) 
            i = 0;
        if ( arrMatch[i][2] != undefined ) {             
            switch (arrMatch[i][2]) {                
                case '+':
                    arrMatch[i+1][1] = +arrMatch[i+1][1] + +arrMatch[i][1];
                    arrMatch.splice(i,1);
                    break;
                case '-':
                    arrMatch[i+1][1] = +arrMatch[i+1][1] - +arrMatch[i][1];
                    arrMatch.splice(i,1);
                    break;
            }
        }
        
    }
    return arrMatch[0][1]
}

new Calculate();

calcWindow.addEventListener('keydown', function (e) {
    e.preventDefault();
    let pattern = new RegExp('(\\d+)|(\\+|\\-|\\*|\\/)');
    if ( pattern.test(e.key) ) {
        this.value += e.key
    }
    
});
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    let pattern = new RegExp('(\\d+)|(\\+|\\-|\\*|\\/)');
    if ( pattern.test(e.key) ) {
        calcWindow.value += e.key
    } else if ( e.key == 'Enter' || e.key == '=' ) {        
        calcWindow.value = resultCalc(calcWindow.value);
    } else if ( e.key == 'Delete' || e.key == 'Backspace' ) {
        console.log('Я еще не умею стирать');
        calcWindow.value = calcWindow.value.toString().pop(); // FIXME:
    }
})
// создать свою функцию eval с помощью регулярки
var str = '2+2*2';


