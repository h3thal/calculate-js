let arrMathOperation = ['+','-', '*', '/'];
let arrNumber = [...Array.from({length: 9}, (v, k) => k + 1 ), 0, '=', 'del'];
let arrNumbAndMath = [...arrMathOperation, ...arrNumber];
var arrObjectButton = [];
const template = `
    <div id='calc'>
        <input id='calcWindow' type='text'/>
        <div class='calcButtons' id='calcButtons'></div>
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
        let elem =  document.createElement('div');
        this.getElem = elem;
        elem.innerText = text;
        elem.classList.add('calcButton')
        calcButtons.append(elem);
        elem.addEventListener('click', () => {
            if (text == '=') {
                calcWindow.value = resultCalc(calcWindow.value);
            } else if (text == 'del') {
                calcWindow.value = calcWindow.value.substring(0, calcWindow.value.length-1);
            } else {
                calcWindow.value += text.toString();
            }
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
                        arrMatch[i+1][1] = +arrMatch[i][1] * +arrMatch[i+1][1];
                        arrMatch.splice(i,1);
                        break;
                    case '/':
                        arrMatch[i+1][1] = +arrMatch[i][1] / +arrMatch[i+1][1];
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
    return arrMatch[0][1]
}

new Calculate();

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    let pattern = new RegExp('^(\\d)$|^(\\d)|(\\+|\\-|\\*|\\/)$');
    if ( pattern.test(e.key) ) {
        calcWindow.value += e.key
    } else if ( e.key == 'Enter' || e.key == '=' ) {        
        calcWindow.value = resultCalc(calcWindow.value);
    } else if ( e.key == 'Delete' || e.key == 'Backspace' ) {
        calcWindow.value = calcWindow.value.substring(0, calcWindow.value.length-1);
    }
})


